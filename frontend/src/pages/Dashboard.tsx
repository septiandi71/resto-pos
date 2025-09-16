import { Box, Container, Typography, Grid } from '@mui/material';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import { mockTables } from '../mocks/tables';
import TableCard from '../components/TableCard';

export default function Dashboard() {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
      overflowX: 'hidden',
    }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 8 }, pb: 6 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
        }}>
          <TableRestaurantIcon color="primary" sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 16px #90caf9)' }} />
          <Typography variant="h4" fontWeight={800} color="primary.main" gutterBottom sx={{ letterSpacing: 1 }}>
            Dashboard Pelayan / Kasir
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 2, maxWidth: 480, textAlign: 'center' }}>
            Kelola pesanan, buka order baru, dan pantau status meja dengan tampilan modern.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {mockTables.map((table, idx) => (
            <Grid item key={table.id} xs={12} sm={6} md={4} lg={3}>
              <TableCard table={table} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
