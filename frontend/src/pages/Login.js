import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import '../theme.css';
import NavbarNoButtons from '../components/NavbarNoButtons';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials and try again.');
    }
  };


  return (
    <><NavbarNoButtons /><Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white'
    }}>
      <Container maxWidth="lg" disableGutters>
        <Paper elevation={0} sx={{
          display: 'flex',
          height: '80vh',
          borderRadius: 'var(--border-radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)'
        }}>
          {/* Form Section */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 'var(--spacing-xxl)'
          }}>
            <Typography
              variant="h3"
              sx={{
                mb: 'var(--spacing-medium)',
                color: 'var(--primary-color)',
                fontWeight: 'bold'
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 'var(--spacing-xl)',
                color: 'var(--gray-medium)'
              }}
            >
              Sign in to continue to ChatSphere
            </Typography>

            {error && (
              <Typography
                color="error"
                sx={{
                  mb: 'var(--spacing-medium)',
                  backgroundColor: 'rgba(247, 37, 133, 0.1)',
                  p: 'var(--spacing-small)',
                  borderRadius: 'var(--border-radius)'
                }}
              >
                {error}
              </Typography>
            )}

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  mb: 'var(--spacing-medium)',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 'var(--border-radius)',
                  }
                }} />
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                required
                sx={{
                  mb: 'var(--spacing-large)',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 'var(--border-radius)',
                  }
                }} />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 'var(--spacing-small)',
                  borderRadius: 'var(--border-radius)',
                  backgroundColor: 'var(--primary-color)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'var(--primary-dark)'
                  }
                }}
              >
                Login
              </Button>
            </form>

            <Typography
              sx={{
                mt: 'var(--spacing-large)',
                color: 'var(--gray-medium)'
              }}
            >
              Don't have an account?{' '}
              <Typography
                component="span"
                sx={{
                  color: 'var(--primary-color)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
                onClick={() => navigate('/signup')}
              >
                Sign up
              </Typography>
            </Typography>
          </Box>

          {/* Image Section */}
          <Box sx={{
            flex: 1,
            display: { xs: 'none', md: 'block' },
            backgroundImage: 'url(/assets/reg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </Paper>
      </Container>
    </Box></>
  );
}

export default Login;