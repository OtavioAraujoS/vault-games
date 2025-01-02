import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {
  const authContext = useContext(AuthContext);
  const [userInfos, setUserInfos] = useState({ userName: '', password: '' });
  const navigate = useNavigate();

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const { login } = authContext;

  const handleLogin = () => {
    const userData = { id: '1', name: userInfos.userName };
    login(userData);
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={userInfos.userName}
        onChange={(e) =>
          setUserInfos({ ...userInfos, userName: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={userInfos.password}
        onChange={(e) =>
          setUserInfos({ ...userInfos, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
