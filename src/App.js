import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BlogHome } from './componants/Blogs/BlogHome';
import { RightBar } from './componants/other/RightBar';
import { Box, Stack } from '@mui/material';
import Navbar from './componants/other/NavBar';
import { SideBar } from './componants/other/SideBar';
import { AddBlog } from './componants/Blogs/AddBlog';
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between" marginTop="3">
        <SideBar />
        <BlogHome />
        <RightBar />
      </Stack>
      <AddBlog />
    </Box>
  );
}

export default App;
