import React from 'react'
import {
  Container,
  TextField,
  Card,
  Typography,
  Button,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material'; 

export const CompletionForm = () => {
  return (
    <>
      <Container component="main" maxWidth="xs" >
        <Card sx={{ padding: 3, marginTop: 4 }}>
          <Typography variant="h5" align='center' gutterBottom>
            Register Form
          </Typography>
          <Box component="form" >
            <Typography gutterBottom>
              <TextField label="Full Name"
                id="fullName"
                name="fullName"
                variant='outlined'
                fullWidth
                required
                
              />
              </Typography>
              <Typography gutterBottom>
              <TextField
                label="Contact"
                name="contact"
                id="contact"
                variant='outlined'
                fullWidth
                required
              />
              </Typography>
              <Typography gutterBottom>
              <TextField
                label="email"
                name="email"
                id="emailId"
                variant='outlined'
                fullWidth
                required
                />
                </Typography>
                <Typography gutterBottom>
              <RadioGroup row >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
              </RadioGroup>
              </Typography>
              <Typography gutterBottom>
                <TextField label="Password" type="password" name="password" fullWidth required />
              </Typography>
              <Typography variant="body1" gutterBottom>
                Upload Avatar
                <TextField
                  type="file"
                  name="avatar"
                  fullWidth
                  required
                  sx={{ mt: 1 }} 
                />
              </Typography>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
              >
                Submit
              </Button>
          </Box>
        </Card>
      </Container>
    </>
  )
}
