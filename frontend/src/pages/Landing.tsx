import { Box, Container, Typography, Button, ToggleButton, ToggleButtonGroup, Grid, Paper } from '@mui/material';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import TableCard from '../components/TableCard';
import { mockTables } from '../mocks/tables';
import { Table } from '../types/table';

export default function Landing() {
  const [filter, setFilter] = useState<'all' | 'available' | 'occupied'>('all')
  const tables = useMemo(() => {
    if (filter === 'all') return mockTables
    return mockTables.filter(t => t.status === filter)
  }, [filter])

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%)',
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
          <TableRestaurantIcon color="primary" sx={{ fontSize: { xs: 80, md: 120 }, mb: 2, filter: 'drop-shadow(0 4px 16px #90caf9)' }} />
          <Typography variant="h3" fontWeight={800} color="primary.main" gutterBottom sx={{ letterSpacing: 1 }}>
            Resto POS
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom sx={{ mb: 2, maxWidth: 480, textAlign: 'center' }}>
            Pantau & kelola meja restoran Anda secara real-time dengan tampilan modern.
          </Typography>
          <Button component={Link} to="/login" variant="contained" size="large" sx={{ px: 4, py: 1.5, fontWeight: 700, fontSize: 18, borderRadius: 3, boxShadow: 2 }}>Login</Button>
     
        </Box>
        <Box sx={{ mb: 2, textAlign: 'center' }}>
          <ToggleButtonGroup
            exclusive
            color="primary"
            value={filter}
            onChange={(_, val) => val && setFilter(val)}
            size="small"
          >
            <ToggleButton value="all">Semua</ToggleButton>
            <ToggleButton value="available">Kosong</ToggleButton>
            <ToggleButton value="occupied">Terpakai</ToggleButton>
          </ToggleButtonGroup>
        </Box>
  <Grid container spacing={4}>
          {tables.map((t: Table) => (
            <Grid item key={t.id} xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)', boxShadow: 6 } }}>
                <TableCard table={t} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
