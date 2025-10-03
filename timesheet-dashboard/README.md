# Timesheet Dashboard

A web-based timesheet management dashboard built with **React, TypeScript, and Vite**.  
It allows users to log in, manage weekly timesheets, and view detailed reports with a clean UI.  

---

## Features
- User authentication (login page with context-based session handling)  
- Timesheet tracking (weekly and daily breakdowns)  
- Dashboard with pagination and table views  
- Mock API integration using `json-server` (`db.json`)  
- Modern UI with reusable components (Navbar, Footer, Dialog, etc.)  
- Fast development environment powered by **Vite**  

---

## Project Structure

timesheet-dashboard/
├── db/ # Mock API data (db.json)
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components
│ ├── context/ # React Context for global state
│ ├── pages/ # Page-level components (Login, Timesheet, etc.)
│ ├── App.tsx # Main app entry
│ └── main.tsx # React DOM render entry
├── index.html # HTML entry point
├── package.json # Project dependencies
├── vite.config.ts # Vite configuration
└── tsconfig.json # TypeScript configuration

## Tech Stack
- **Frontend:** React, TypeScript, Vite  
- **State Management:** React Context API  
- **Styling:** CSS (customized with modular styles)  
- **API (Mock):** json-server with `db.json`  

---

## Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/timesheet-dashboard.git
   cd timesheet-dashboard

## Install dependencies
npm install
json-server --watch db/db.json --port 5000

API will be available at: http://localhost:5000

## Run the development server
npm run dev
App will be available at: http://localhost:5173

## API Endpoints (via json-server)

GET /users → Fetch user list (for login validation)
GET /timesheets → Fetch timesheet data
GET /timesheets/:id → Fetch single timesheet details