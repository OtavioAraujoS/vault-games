export const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao painel de controle!</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Estatísticas</h2>
        <ul>
          <li>Usuários ativos: 120</li>
          <li>Novos cadastros: 15</li>
          <li>Vendas hoje: 30</li>
        </ul>
      </div>
    </div>
  );
};
