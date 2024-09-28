// AddBlog.js
import React from 'react';
import { Add } from '@mui/icons-material';
import { Box, Fab, Tooltip } from '@mui/material';

export const AddBlog = () => {
  return (
    <Box ml={5} mt={7} >
        <Tooltip title="Add " sx={{position:'fixed', bottom:20}}>
          <Fab color="primary" aria-label="add">
            <Add /> 
          </Fab>
        </Tooltip>
    </Box>
  );
};
