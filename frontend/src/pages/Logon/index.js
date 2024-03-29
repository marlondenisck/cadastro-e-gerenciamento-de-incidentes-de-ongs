import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon() {
  const [id, setId] = useState('');
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const { data } = await api.post('sessions', { id });
      const { name } = data

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', name);

      history.push('/profile')

    } catch (error) {
      alert('Ocorreu um erro ao entrar, o id esta certo?', error)
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logo</h1>
          
          <input type="text" 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button"type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>

    </div>
  )
}

export default Logon;