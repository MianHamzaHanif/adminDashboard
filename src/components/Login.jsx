import React, { useState } from 'react';

const STATIC_USERNAME = 'apollomass';
const STATIC_PASSWORD = 'Apollo@12341234';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2.5rem 2rem',
        minWidth: 350,
        maxWidth: 400,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
      }}>
        <h2>Login</h2>
        <input
          className="all-customers-search-input"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%' }}
          required
        />
        <input
          className="all-customers-search-input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%' }}
          required
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', fontWeight: 600, fontSize: 18, backgroundColor: "#7B4FE2" }}
        >
          Login
        </button>
        {error && <div style={{ color: 'red', fontWeight: 500 }}>{error}</div>}
      </form>
    </div>
  );
} 