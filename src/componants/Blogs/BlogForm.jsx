import { Card, Box, Typography, TextField, Container, Button, Grid } from '@mui/material';
import React from 'react';

export const BlogForm = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Card sx={{ padding: 4, marginTop: 4, boxShadow: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Post Blog
        </Typography>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                required
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Content"
                name="content"
                required
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Tags"
                name="tags"
                required
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                Post Image
              </Typography>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                inputProps={{ accept: 'image/*' }} 
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Submit Post
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
};
