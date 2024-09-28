import React from 'react'
import { Feed } from './Feed'
import { Box } from '@mui/material'

export const BlogHome = () => {
  return (
    <Box flex={4} p={2}>
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
    </Box>
  )
}
