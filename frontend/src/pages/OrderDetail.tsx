import { Box, Container, Typography, Paper, Button, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import ReceiptIcon from '@mui/icons-material/Receipt'

export default function OrderDetail() {
  const { id } = useParams()
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
      py: { xs: 2, md: 6 },
    }}>
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, mb: 4, borderRadius: 4, textAlign: 'center', background: 'rgba(255,255,255,0.85)' }}>
          <ReceiptIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h5" fontWeight={700} color="primary.main" gutterBottom>
            Detail Pesanan #{id}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Tambah makanan/minuman, tutup pesanan, dan lihat total harga.
          </Typography>
        </Paper>
        <Stack spacing={2}>
          {/* TODO: Integrasi dengan detail pesanan */}
          <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>Nasi Goreng x2</Typography>
            <Typography variant="body2" color="text.secondary">Rp 40.000</Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>Es Teh Manis x1</Typography>
            <Typography variant="body2" color="text.secondary">Rp 7.000</Typography>
          </Paper>
        </Stack>
        <Button variant="contained" color="success" sx={{ mt: 3 }}>Tutup Pesanan</Button>
      </Container>
    </Box>
  )
}
