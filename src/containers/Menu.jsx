import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import request from '../util/request';
import DashboardIcon from '@mui/icons-material/Dashboard';

const MenuApp = () => {
  // const location = useLocation();
  const [menus, setMenus] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await request({ url: '/getMenus', method: 'POST' });
        setMenus(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  // const navigate = useNavigate();
  // const onclick = e => {
  //   const [path] = e.keyPath;
  //   navigate(`${path}`);
  // };
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <Paper
      elevation={0}
      sx={{
        width: 240,
        maxWidth: '100%',
        backgroundColor: '#fff',
        borderRadius: 0,
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      }}
      className='h-screen'
    >
      <MenuList>
        {menus.map(menu => {
          return (
            <MenuItem
              key={menu.path}
              sx={{ '&:hover': { background: 'rgba(0, 0, 0, 0.04)' } }}
            >
              <Box sx={{ display: 'flex', width: '100%', marginBottom: '4px', marginTop: '4px' }}>
                <Box sx={{ minWidth: '56px' }}>
                  <DashboardIcon></DashboardIcon>
                </Box>
                <ListItemText>{menu.label}</ListItemText>
              </Box>
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
};
export default MenuApp;
