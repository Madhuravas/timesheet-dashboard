import { useState } from 'react';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TimeSheetPage from './pages/TimeSheetPage';
import WeekTimesheetDetailsPage from './pages/WeekTimesheetDelailsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/timesheet" />
            ) : (
              <LoginPage onLogin={() => setIsAuthenticated(true)} />
            )
          }
        />

        {/* Protected routes with Navbar */}
        <Route
          element={isAuthenticated ? (<Main />) : (<Navigate to="/" />)}>
          <Route path="/timesheet" element={<TimeSheetPage />} />
          <Route path="/timesheetDetails/:weekId" element={<WeekTimesheetDetailsPage />} />
          {/* add more protected routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    //  <Main />
    // </>
  )
}

export default App
