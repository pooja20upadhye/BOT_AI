import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../theme.css';

function NavbarWithLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirect to login page
    navigate('/login');
    
    // Optional: You might want to add an API call to invalidate the token on the server
    // axiosInstance.post('/auth/logout');
  };

  return (
    <AppBar 
      position="static"
      sx={{ 
        backgroundColor: 'var(--primary-color)',
        boxShadow: 'var(--shadow-md)',
        borderRadius: 0,
      }}
    >
      <Toolbar>
        <Typography 
          variant="h4" 
          component={Link} 
          to="/"
          sx={{ 
            flexGrow: 1,
            fontWeight: 'bold',
            color: 'var(--text-light)',
            textDecoration: 'none',
            '&:hover': {
              color: 'var(--secondary-color)',
              transition: 'var(--transition-fast)'
            }
          }}
        >
          BotNest
        </Typography>
        <Box sx={{ display: 'flex', gap: 'var(--spacing-medium)' }}>
          <Button 
            variant="outlined" 
            onClick={handleLogout}
            sx={{
              color: 'var(--text-light)',
              borderColor: 'var(--text-light)',
              '&:hover': {
                backgroundColor: 'var(--secondary-color)',
                borderColor: 'var(--secondary-color)',
                transform: 'translateY(-2px)',
                transition: 'var(--transition-fast)'
              }
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarWithLogout;