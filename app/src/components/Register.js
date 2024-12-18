import React from 'react';
import { useFormik } from 'formik';
import {
  TextField,
  Button,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

function Register() {
  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3000/reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.status === 201) {
        alert('User registered successfully');
        window.location.href = '/'; // Redirect to login page after successful registration
      } else if (response.status === 409) {
        alert('User already present. Please choose a different name or email.');
      } else {
        throw new Error('Failed to register user');
      }
    } catch (error) {
      alert('Error registering user:', error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      mail: '',
      password: '',
      role: '',
    },
    onSubmit: handleSubmit,
  });

  const handleChange = (event) => {
    formik.setFieldValue('role', event.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <form onSubmit={formik.handleSubmit} style={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}>

        <TextField
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          label="Full Name"
          variant="outlined"
        />

        <TextField
          id="mail"
          name="mail"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.mail}
          label="Mail"
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

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.role}
            label="Role"
            onChange={handleChange}
          >
            <MenuItem value={'Farmer'}>Farmer</MenuItem>
            <MenuItem value={'Trader'}>Trader</MenuItem>
            <MenuItem value={'Transport'}>Transport</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained">Submit</Button>

        {/* Redirect to login page */}
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            // Redirect to login page
            window.location.href = '/';
          }}
        >
          Already have an account
        </Link>
      </form>
    </div>
  )
}

export default Register;
