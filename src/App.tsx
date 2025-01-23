import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NotAllowedPage } from './components/NotAllowedPage';
import Layout from './layouts/Layout';
import { Login } from './pages/auth/Login';
import { Dashboard } from './pages/dashboard/Dashboard';
import { CadastrarJogos } from './pages/jogos/cadastrarJogos/Page';
import { EditarJogos } from './pages/jogos/editarJogos/Page';
import { Jogos } from './pages/jogos/Page';
import { CadastrarUsuario } from './pages/usuarios/cadastrarUsuario/Page';
import { EditarUsuario } from './pages/usuarios/editarUsuario/Page';
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
        <Route path="usuarios/:id" element={<EditarUsuario />} />
        <Route path="cadastrar-jogos" element={<CadastrarJogos />} />
        <Route path="cadastrar-usuario" element={<CadastrarUsuario />} />
        <Route path="*" element={<NotAllowedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
