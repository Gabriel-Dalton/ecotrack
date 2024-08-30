const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const dataFilePath = path.join(__dirname, 'data', 'data.json');

let { treesPlanted, bottlesPrevented } = loadData();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/add', (req, res) => {
    const { trees, bottles } = req.body;

    treesPlanted += parseInt(trees);
    bottlesPrevented += parseInt(bottles);

    saveData({ treesPlanted, bottlesPrevented });
    res.redirect('/');
});

app.get('/download', (req, res) => {
    res.download(dataFilePath, 'data.json', (err) => {
        if (err) {
            console.error("Error downloading the file:", err);
            res.status(500).send("Error downloading the file");
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http:
});

function loadData() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading data file:", err);

        return { treesPlanted: 0, bottlesPrevented: 0 };
    }
}

function saveData(data) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data));
    } catch (err) {
        console.error("Error writing data to file:", err);
    }
}
