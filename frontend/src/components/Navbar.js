import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../theme.css';

function Navbar() {
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
          ChatSphere
        </Typography>
        <Box sx={{ display: 'flex', gap: 'var(--spacing-medium)' }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/signup"
            sx={{
              color: 'var(--text-light)',
              '&:hover': {
                backgroundColor: 'var(--primary-dark)',
                transform: 'translateY(-2px)',
                transition: 'var(--transition-fast)'
              }
            }}
          >
            Signup
          </Button>
          <Button 
            variant="outlined" 
            component={Link} 
            to="/login"
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
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;