import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import tomatoBackground from '../tomato_bg.jpg';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        navigate('/' + data.user.role.toLowerCase());
      } else if (response.status === 401) {
        alert('Invalid credentials');
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      alert('Error logging in:', error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${tomatoBackground})`,
      backgroundSize: 'cover',
    }}>   
      <form onSubmit={formik.handleSubmit} style={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
        border: '2px solid #FFFFFF',
      }}>

        <TextField
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          label="Name"
          variant="outlined"
        />

        <TextField
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          label="Password"
          variant="outlined"
        />

        <Button type="submit" variant="contained">Submit</Button>

        {/* Redirect to the register page */}
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            navigate('/register');
          }}
        >
          New User
        </Link>
      </form>
    </div>
  );
}

export default Login;
