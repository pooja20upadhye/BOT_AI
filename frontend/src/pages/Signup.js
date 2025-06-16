import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../theme.css';
import axios from 'axios';
function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <Box sx={{
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
              Create Account
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 'var(--spacing-xl)',
                color: 'var(--gray-medium)'
              }}
            >
              Join ChatSphere today
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
                label="Username"
                name="username"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleChange}
                required
                sx={{
                  mb: 'var(--spacing-medium)',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 'var(--border-radius)',
                  }
                }}
              />
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
                }}
              />
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
                }}
              />
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
                Sign Up
              </Button>
            </form>
            
            <Typography 
              sx={{ 
                mt: 'var(--spacing-large)',
                color: 'var(--gray-medium)'
              }}
            >
              Already have an account?{' '}
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
                onClick={() => navigate('/login')}
              >
                Login
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
    </Box>
  );
}

export default Signup;