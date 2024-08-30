# EcoTrack

EcoTrack is a web application designed to track the number of trees planted and plastic bottles prevented from entering the ocean. This tool helps users contribute to environmental conservation by providing detailed records of their efforts and generating comprehensive summaries of their impact.

## Objective

Develop a user-friendly application that:
- Tracks the number of trees planted and plastic bottles prevented from entering the ocean.
- Allows users to input detailed information about each tree planted.
- Provides a comprehensive summary of the environmental impact.

## Key Features

- **Home Page:** Displays total counters for trees planted and plastic bottles prevented.
- **Add Tree:** Form to add a new tree with details like planting method, CO2 emissions prevented, country, and certificate.
- **Add Plastic Bottle:** Simple form to add a plastic bottle to the counter.
- **Summary Page:** Shows detailed statistics, including countries involved, total CO2 emissions prevented, and certificates issued.

## Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Gabriel-Dalton/ecotrack.git
cd ecotrack
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
node app.js
```

## Project Structure

- **app.js**: Contains the Express.js server logic, including routes for adding data and serving the frontend.
- **public/index.html**: The main frontend file displaying the UI for EcoTrack.

## API Endpoints

- **POST /add**: Adds a new tree and/or plastic bottle count to the totals.
- **GET /**: Serves the main EcoTrack dashboard.
- **GET /download**: Downloads the current data as a JSON file.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.
