import { Box, Container, Typography, Button, ToggleButton, ToggleButtonGroup, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { mockTables } from '../mocks/tables'
import TableCard from '../components/TableCard'

export default function Landing() {
  const [filter, setFilter] = useState<'all' | 'available' | 'occupied'>('all')
  const tables = useMemo(() => {
    if (filter === 'all') return mockTables
    return mockTables.filter(t => t.status === filter)
  }, [filter])

  return (
    <Container sx={{ py: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4">Daftar Meja</Typography>
        <Button component={Link} to="/login" variant="contained">Login</Button>
      </Box>
      <Box sx={{ mb: 2 }}>
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
      <Grid container spacing={2}>
        {tables.map(t => (
          <Grid item key={t.id} xs={12} sm={6} md={4} lg={3}>
            <TableCard table={t} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
