import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NotAllowedPage } from './components/NotAllowedPage';
import Layout from './layouts/Layout';
import { Login } from './pages/auth/Login';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Jogos } from './pages/jogos/Jogos';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jogos" element={<Jogos />} />
          <Route path="*" element={<NotAllowedPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
