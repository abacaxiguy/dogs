import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
// import { useDispatch } from 'react-redux';

// import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  // const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('/tokens', { username, password });

      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    // dispatch(actions.loginRequest({ username, password }));
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/register">And this is register</Link>
    </section>
  );
}
