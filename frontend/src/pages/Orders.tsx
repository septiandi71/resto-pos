import { Box, Container, Typography, Paper, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'

export default function Orders() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
      py: { xs: 2, md: 6 },
    }}>
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: { xs: 2, md: 4 }, mb: 4, borderRadius: 4, textAlign: 'center', background: 'rgba(255,255,255,0.85)' }}>
          <ReceiptLongIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h5" fontWeight={700} color="primary.main" gutterBottom>
            Daftar Pesanan
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Lihat dan kelola pesanan aktif serta riwayat transaksi.
          </Typography>
        </Paper>
        <List>
          {/* TODO: Integrasi dengan list pesanan */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Order #101 - Meja 3" secondary="Rp 57.000 | Aktif" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Order #102 - Meja 7" secondary="Rp 32.000 | Selesai" />
            </ListItemButton>
          </ListItem>
        </List>
      </Container>
    </Box>
  )
}
