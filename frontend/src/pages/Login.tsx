import { Box, Button, Container, TextField, Typography } from '@mui/material'

export default function Login() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <Box component="form" sx={{ display: 'grid', gap: 2 }}>
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <Button variant="contained">Masuk</Button>
      </Box>
    </Container>
  )
}
