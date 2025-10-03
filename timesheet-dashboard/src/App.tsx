import { useState } from 'react';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TimeSheetPage from './pages/TimeSheetPage';
import WeekTimesheetDetailsPage from './pages/WeekTimesheetDelailsPage';
import Error from './components/Error';

function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Interpret stored value as boolean; default is false
    return sessionStorage.getItem("isAuthenticated") === "true";
  });

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
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
