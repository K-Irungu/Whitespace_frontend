import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';
import Footer from './Footer';


const mdTheme = createTheme();


export default function Hero() {
  return (
    <ThemeProvider theme={mdTheme}>
    <Navbar />
    <Footer />
  </ThemeProvider>

  )
}