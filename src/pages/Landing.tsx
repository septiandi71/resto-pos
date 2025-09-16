import { Box, Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>Daftar Meja</Typography>
      <Typography variant="body1" gutterBottom>
        Halaman publik untuk melihat meja kosong dan terpakai (placeholder).
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button component={Link} to="/login" variant="contained">Login</Button>
      </Box>
    </Container>
  )
}
