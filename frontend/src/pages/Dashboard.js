import { useEffect, useState } from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import NavbarWithLogout from '../components/NavbarWithLogout';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        // Try to get user data from localStorage first
        const cachedUser = localStorage.getItem('user');
        if (cachedUser) {
          setUser(JSON.parse(cachedUser));
          setLoading(false);
          return;
        }

        // Fallback to API request
        const res = await axiosInstance.get('/auth/me');
        if (res.data) {
          setUser(res.data);
          localStorage.setItem('user', JSON.stringify(res.data));
        }
      } catch (err) {
        console.error('Dashboard error:', err.response?.data || err.message);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <><NavbarWithLogout /><Container maxWidth="lg">
          <Box sx={{ py: 4 }}>
              <Typography variant="h4" component="h1">
                  Welcome, {user?.username || 'User'}!
              </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
              <Typography variant="h5">Your Dashboard</Typography>
              <Typography sx={{ mt: 2 }}>
                  Email: {user?.email}
              </Typography>
          </Box>
      </Container></>
  );
}

export default Dashboard;