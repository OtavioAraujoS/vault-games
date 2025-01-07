import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NotAllowedPage } from './components/NotAllowedPage';
import Header from './layouts/Header';
import { Login } from './pages/auth/Login';
import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Header />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotAllowedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
