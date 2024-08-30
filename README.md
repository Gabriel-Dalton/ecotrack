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
pip install -r requirements.txt
```

### 3. Setup the Database

```bash
flask db init
flask db migrate
flask db upgrade
```

### 4. Run the Application

```bash
flask run
```

## Database Schema

### Tables

- **Trees**
  - `id`: Integer, Primary Key
  - `method`: String (e.g., Refoorest Chrome Extension, Tree-Nation)
  - `co2_prevented`: Float (nullable)
  - `country`: String (nullable)
  - `certificate`: String (nullable)
  - `date_planted`: DateTime

- **Plastic_Bottles**
  - `id`: Integer, Primary Key
  - `date_added`: DateTime

### Counters

- **Trees_Planted:** Integer
- **Plastic_Bottles_Prevented:** Integer

## API Endpoints

- **POST /add_tree:** Adds a new tree with details.
- **POST /add_plastic_bottle:** Adds a new plastic bottle to the counter.
- **GET /stats:** Retrieves summary statistics.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.
