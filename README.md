# EzyMetrics Dashboard

This is a dashboard interface designed for EzyMetrics using React.js. The project includes a sidebar with navigation, customizable widgets, a lead management section with dummy data, and a basic reporting tool for generating PDF/CSV reports.

## Features

- **Responsive Design**: Optimized for both desktop and mobile views.
- **Customizable Widgets**: Add or remove widgets to display different types of information.
- **Lead Management**: View and manage leads with details displayed in a modal.
- **Analytics & Reporting**: Visualize performance metrics using charts and generate reports in PDF/CSV format.

## Tech Stack

- **React.js**: The main framework used for building the frontend.
- **Chart.js**: Used for visualizing performance metrics in charts.
- **React-Modal**: For displaying lead details in a modal.
- **React-PDF/CSV**: For generating reports in PDF and CSV formats.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ezymetrics-dashboard.git
   Navigate to the project directory:
   ```

cd ezymetrics-dashboard
Install the dependencies:

npm install

# or

yarn install
Running the Project
Start the development server:

npm start

# or

yarn start
Open your browser and navigate to http://localhost:3000 to view the dashboard.

Dummy Data
The dashboard uses dummy data for leads and performance metrics, which can be found in the /src/data directory.

How to Use:
Sidebar Navigation: Use the sidebar to navigate between the Dashboard, Leads, Analytics, and Reports sections.
Customizable Widgets: Add or remove widgets to customize your view.
Lead Management: Click on any lead in the Leads section to view details in a modal window.
Report Generation: Go to the Reports section to simulate generating PDF/CSV reports.
Known Issues
The report generation feature is a simulation and may need additional functionality for actual PDF/CSV downloads.
Performance metrics are based on static dummy data, not real-time data.
License
This project is licensed under the MIT License. See the LICENSE file for details.
