import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';

function Navbar(user) {
  const pages = ['Home', 'About', 'Reviews', 'Contact'];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{justifyContent:"space-between"}} >
    
          {/* Logo and App Name */}
          <Box sx={{display: "flex", flexDirection:"row"}}>
            <GroupsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 3, my:0.5}} />
            <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}> WHITESPACE </Typography>
          </Box>

          {/* Nav List */}
          <Box sx={{ flexGrow: 1, display: { md: 'flex'}, justifyContent:"center" }}>
            { pages.map((page) => ( <Button href={page} key={page} sx={{ my: 2, mx:3, color: 'white', display: 'block' }}> {page} </Button> )) }
          </Box>
          
          {/* Sign Up, Login and Logout Buttons */}
          <Box sx={{display: "flex", flexDirection:"row"}}>
            { user.user === "supervisor" || user.user === "student"? 
              <Button variant="outlined" size="small" sx={{borderColor:"white", color:"white", mr: 5}}>Logout</Button>
                :
              <>
              <Button href="/signup" variant="outlined" size="small" sx={{borderColor:"white", color:"white", mr: 5}}>Sign up</Button>
              <Button href="/signin" variant="outlined" size="small" sx={{borderColor:"white", color:"white", mr:5}}>Login</Button>
              </>
            }
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;