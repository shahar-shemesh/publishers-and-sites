# Publishers and Sites

## Overview

Publishers and Sites is a web application developed using Angular for the frontend and Node.js with Express for the backend. The application allows admin-level users to manage their publishers and associated domains, including the number of ads displayed on mobile and desktop platforms. The backend ensures that data persists between server restarts by storing it in a JSON file.

## Directory Structure

- **backend/**: Contains the backend code for the application.
  - **routers/**: API route definitions for managing publishers and domains.
    - **domains.js**: Handles routes related to domain management.
    - **publishers.js**: Handles routes related to publisher management.
  - **db.json**: JSON file used for persisting data across server restarts.
  - **server.js**: Main server file for initializing the Node.js application.

- **src/**: Contains the frontend code for the application.
  - **app/**: Main Angular application module.
    - **components/**: Contains the Angular components for managing publishers and domains.
      - **publishers-container/**: Component for displaying and managing publishers and their associated domains.
        - **domain-card/**: Component for displaying individual domains.
          - **domain-card.component.css**: Styles for the domain card component.
          - **domain-card.component.html**: Template for the domain card component.
          - **domain-card.component.ts**: Logic for the domain card component.
        - **publisher-card/**: Component for displaying individual publishers.
          - **publisher-card.component.css**: Styles for the publisher card component.
          - **publisher-card.component.html**: Template for the publisher card component.
          - **publisher-card.component.ts**: Logic for the publisher card component.
      - **publishers-container.component.css**: Styles for the publishers container component.
      - **publishers-container.component.html**: Template for the publishers container component.
      - **publishers-container.component.ts**: Logic for the publishers container component.
    - **app.component.css**: Global styles for the Angular application.
    - **app.component.html**: Main template for the Angular application.
    - **app.component.ts**: Main logic for the Angular application.
    - **app.config.ts**: Configuration settings for the Angular application.
    - **app.routes.ts**: Routing module for the Angular application.
    - **http.service.ts**: Service for handling HTTP requests to the backend.
    - **types.ts**: TypeScript types used across the Angular application.
  - **assets/**: Static assets such as images and fonts.
  - **favicon.ico**: Favicon for the application.
  - **index.html**: Entry point for the Angular application.
  - **main.ts**: Main entry point for bootstrapping the Angular application.
  - **styles.css**: Global styles for the Angular application.

- **.editorconfig**: Configuration file for maintaining consistent coding styles.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **angular.json**: Angular project configuration file.
- **package.json**: Project dependencies and scripts for the frontend.
- **package-lock.json**: Lockfile for exact versions of dependencies.
- **README.md**: This README file.

## Functionality

* Admin users can view a list of publishers, each with associated domains.
* Users can add new publishers and associate domains with them.
* Domains include the URL and the number of ads for desktop and mobile.
* The backend ensures that all data is saved and persists even after server restarts.

## Installation and Setup

To begin, ensure that Node.js and Angular CLI are installed on your system.

Follow these steps:

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/shahar-shemesh/publishers-and-sites.git
    ```

2. Navigate to the `publishers-and-sites` directory and install the necessary dependencies:
    ```bash
    cd publishers-and-sites
    npm install
    ```

3. Start the backend server:
    ```bash
    node backend/server.js
    ```

4. Open a new terminal, and start the Angular frontend application:
    ```bash
    npm start
    ```

5. Access the Application:
    - The frontend will be available at `http://localhost:4200`
    - The backend API will be available at `http://localhost:4300/api`

## Additional Developments

Additional features implemented:
- **Data Persistence**: Data is saved in JSON format and persists across server restarts.
- **Responsive UI**: The frontend is designed to be responsive and user-friendly.

## Contributing

- Fork the repository and submit a pull request with a description of your changes.
- Follow best practices for commit messages and use branches if necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
