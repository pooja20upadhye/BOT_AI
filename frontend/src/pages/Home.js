import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import '../theme.css';

function Home() {
  return (
    <Box sx={{ 
      height: '100vh',
      backgroundColor: 'white',
      color: 'var(--text-dark)',
      display: 'flex',
      overflow: 'hidden'
    }}>
      {/* Text Content */}
      <Box sx={{ 
        width: { xs: '100%', md: '50%' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'var(--spacing-xxl)',
        zIndex: 2
      }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem' },
            lineHeight: 1.2,
            mb: 'var(--spacing-medium)'
          }}
        >
      Build and Chat with Smart AI Bots
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'var(--gray-medium)',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            mb: 'var(--spacing-large)',
            // maxWidth: '400px'
          }}
        >
          Create intelligent chatbots tailored to your needs. Whether you're a bot creator training custom bots or a user exploring and chatting with them, our platform offers a seamless experience. Manage, train, and interact — all in one place. Start building your AI assistant today!


        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: 'var(--spacing-medium)',
          flexWrap: 'wrap'
        }}>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            sx={{
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 'var(--border-radius-lg)',
              fontSize: '1rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'var(--primary-dark)'
              }
            }}
          >
            Get Started Free
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            sx={{
              borderColor: 'var(--primary-color)',
              color: 'var(--primary-color)',
              padding: '12px 24px',
              borderRadius: 'var(--border-radius-lg)',
              fontSize: '1rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                borderColor: 'var(--primary-dark)'
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* Full-height Image */}
      <Box sx={{ 
        display: { xs: 'none', md: 'block' },
        width: '50%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img 
          src="/assets/bot.jpg" 
          alt="AI Chatbot" 
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }} 
        />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 30%)',
          zIndex: 1
        }} />
      </Box>
    </Box>
  );
}

export default Home;