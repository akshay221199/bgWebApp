import React from 'react'
import { Card, Container, Box, Button, TextField, Typography } from '@mui/material/'
import LoginIcon from '@mui/icons-material/Login';
export const LoginUser = () => {
    return (
        <>
            <Container component="main" maxWidth="sm">
                <Card sx={{ padding: 2, marginTop: 4 , boxShadow: 3}}>
                    <Typography variant="h5" align="center" gutterBottom>
                    Log in
                    </Typography>
                    <Box component="form">
                        <Typography gutterBottom>
                            <TextField
                                label="UserName"
                                name="userName"
                                id='userName'
                                variant="outlined"
                                required
                                fullWidth
                                 margin="normal"
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type='password'
                                id='password'
                                variant="outlined"
                                required
                                fullWidth
                                 margin="normal"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                startIcon={<LoginIcon />}
                                sx={{ marginTop: 2 }}
                            >
                                Sign In
                            </Button>
                        </Typography>
                    </Box>
                </Card>
            </Container>
        </>
    )
}
