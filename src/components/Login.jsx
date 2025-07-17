import React, { useState } from 'react';
import axios from 'axios';

const LOGIN_API = 'https://server.apollomass.com/login';
const FORGOT_API = 'https://server.apollomass.com/forgot';
const RESET_API = 'https://server.apollomass.com/reset';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotMsg, setForgotMsg] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetToken, setResetToken] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const [resetMsg, setResetMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await axios.post(LOGIN_API, { email, password });
      if (res.data && res.data.message === 'Login successful.') {
        onLogin();
      } else {
        setError(res.data?.message || 'Invalid credentials');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    setForgotMsg('');
    setLoading(true);
    try {
      const res = await axios.post(FORGOT_API, { email: forgotEmail });
      setForgotMsg(res.data?.message || 'If the email exists, a reset link has been sent.');
      if (res.data?.token) {
        setResetToken(res.data.token);
        setShowForgot(false);
        setShowReset(true);
      }
    } catch (err) {
      setForgotMsg(err.response?.data?.message || 'Failed to send reset email.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setResetMsg('');
    setLoading(true);
    try {
      const res = await axios.post(RESET_API, {
        email: forgotEmail,
        token: resetToken,
        newPassword: resetPassword,
      });
      setResetMsg(res.data?.message || 'Password reset successful.');
      if (res.data?.message === 'Password reset successful.') {
        setShowReset(false);
        setForgotEmail('');
        setResetToken('');
        setResetPassword('');
        setError('Password reset successful. Please login with your new password.');
      }
    } catch (err) {
      setResetMsg(err.response?.data?.message || 'Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };

  if (showForgot) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
        <form onSubmit={handleForgot} style={{
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
          <h2>Forgot Password</h2>
          <input
            className="all-customers-search-input"
            placeholder="Email"
            type="email"
            value={forgotEmail}
            onChange={e => setForgotEmail(e.target.value)}
            style={{ width: '100%' }}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', fontWeight: 600, fontSize: 18, backgroundColor: "#7B4FE2" }}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Email'}
          </button>
          {forgotMsg && <div style={{ color: '#7b4fe2', fontWeight: 500 }}>{forgotMsg}</div>}
          <button type="button" className="btn btn-link" onClick={() => setShowForgot(false)} style={{ color: '#7b4fe2', textDecoration: 'underline' }}>Back to Login</button>
        </form>
      </div>
    );
  }

  if (showReset) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
        <form onSubmit={handleReset} style={{
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
          <h2>Reset Password</h2>
          <input
            className="all-customers-search-input"
            placeholder="Email"
            type="email"
            value={forgotEmail}
            onChange={e => setForgotEmail(e.target.value)}
            style={{ width: '100%' }}
            readOnly
            // required
          />
          <input
            className="all-customers-search-input"
            placeholder="New Password"
            type="password"
            value={resetPassword}
            onChange={e => setResetPassword(e.target.value)}
            style={{ width: '100%' }}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', fontWeight: 600, fontSize: 18, backgroundColor: "#7B4FE2" }}
            disabled={loading}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
          {resetMsg && <div style={{ color: '#7b4fe2', fontWeight: 500 }}>{resetMsg}</div>}
          <button type="button" className="btn btn-link" onClick={() => setShowReset(false)} style={{ color: '#7b4fe2', textDecoration: 'underline' }}>Back to Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
      <form onSubmit={handleLogin} style={{
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
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <button type="button" className="btn btn-link" onClick={() => setShowForgot(true)} style={{ color: '#7b4fe2', textDecoration: 'underline' }}>Forgot Password?</button>
        {error && <div style={{ color: 'red', fontWeight: 500 }}>{error}</div>}
      </form>
    </div>
  );
} 