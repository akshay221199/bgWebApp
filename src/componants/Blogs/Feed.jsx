import React from 'react'
import { Card, Box, Typography, CardActions, CardContent, CardMedia, IconButton, Avatar, CardHeader } from '@mui/material'
import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { red } from '@mui/material/colors'



export const Feed = () => {
  return (
    <Box>
      <Card  sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://th.bing.com/th/id/R.ef99528fe6485e0fe578a568ed19c538?rik=YoV6fCIa3B65mw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f0%2fd%2f820810-full-hd-nature-wallpapers-2560x1600-screen.jpg&ehk=vIysebK27uH7%2bAO1A5rcQ1tRNlaayL98VI%2b1tyfJCAE%3d&risl=&pid=ImgRaw&r=0"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}
