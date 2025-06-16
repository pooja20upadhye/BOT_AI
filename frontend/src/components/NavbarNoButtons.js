import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../theme.css';

function NavbarNoButtons() {
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
          {/* Empty - no buttons */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarNoButtons;