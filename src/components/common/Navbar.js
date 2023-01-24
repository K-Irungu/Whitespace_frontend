import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GroupsIcon from '@mui/icons-material/Groups';

function Navbar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{justifyContent:"space-evenly"}} >
          {/* Logo and App Name */}
          <Box sx={{display: "flex", flexDirection:"row"}}>
            <GroupsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 5, my:0.5}} />
            <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}> WHITESPACE </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;