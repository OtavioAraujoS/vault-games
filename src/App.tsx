import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NotAllowedPage } from './components/NotAllowedPage';
import Layout from './layouts/Layout';
import { Login } from './pages/auth/Login';
import { CadastrarJogos } from './pages/cadastrarJogos/Page';
import { CadastrarUsuario } from './pages/cadastrarUsuario/Page';
import { Dashboard } from './pages/dashboard/Dashboard';
import { EditarJogos } from './pages/editarJogos/Page';
import { Jogos } from './pages/jogos/Page';
import { Usuarios } from './pages/usuarios/Page';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jogos" element={<Jogos />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>
        <Route path="jogos/:id" element={<EditarJogos />} />
        <Route path="cadastrar-jogos" element={<CadastrarJogos />} />
        <Route path="cadastrar-usuario" element={<CadastrarUsuario />} />
        <Route path="*" element={<NotAllowedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
