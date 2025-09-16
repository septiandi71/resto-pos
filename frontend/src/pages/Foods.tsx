import { Box, Container, Typography, Paper, Button, Stack } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood'

export default function Foods() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #fdf6e3 0%, #f5e8c8 100%)',
      py: { xs: 2, md: 6 },
    }}>
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, mb: 4, borderRadius: 4, textAlign: 'center', background: 'rgba(255,255,255,0.85)' }}>
          <FastfoodIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h5" fontWeight={700} color="primary.main" gutterBottom>
            Master Makanan
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Tambah, ubah, dan hapus data makanan/minuman.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>Tambah Makanan</Button>
        </Paper>
        <Stack spacing={2}>
          {/* TODO: Integrasi dengan list makanan */}
          <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>Nasi Goreng</Typography>
            <Typography variant="body2" color="text.secondary">Rp 20.000</Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>Es Teh Manis</Typography>
            <Typography variant="body2" color="text.secondary">Rp 7.000</Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
