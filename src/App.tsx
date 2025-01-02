import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/auth/Login';
import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
