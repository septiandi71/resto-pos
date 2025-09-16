
import { Card, CardContent, Typography, Box, Button, Stack, Avatar } from '@mui/material'
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import { Table } from '../types/table'

type Props = {
  table: Table
}

export default function TableCard({ table }: Props) {
  const isAvailable = table.status === 'available'
  const statusColor = isAvailable ? '#e0f7fa' : '#fff3e0'
  const statusText = isAvailable ? 'Kosong' : 'Terpakai'
  const statusIcon = isAvailable ? <CheckCircleIcon sx={{ color: '#26c6da' }} /> : <HourglassEmptyIcon sx={{ color: '#ffa726' }} />

  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 4,
        boxShadow: '0 4px 24px #e3eafc',
        background: '#fff',
        p: 2,
        minHeight: 170,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        overflow: 'visible',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar sx={{ bgcolor: '#e3f2fd', color: 'primary.main', width: 48, height: 48 }}>
          <TableRestaurantIcon />
        </Avatar>
        <Box>
          <Typography variant="h6" fontWeight={700} color="primary.main">
            {table.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Kapasitas {table.capacity} orang
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
        <Box sx={{ bgcolor: statusColor, px: 2, py: 0.5, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          {statusIcon}
          <Typography variant="body2" fontWeight={600} color={isAvailable ? '#26c6da' : '#ffa726'}>
            {statusText}
          </Typography>
        </Box>
        <Button
          variant={isAvailable ? 'contained' : 'outlined'}
          color={isAvailable ? 'primary' : 'warning'}
          size="small"
          sx={{ borderRadius: 2, ml: 'auto', fontWeight: 700 }}
        >
          {isAvailable ? 'Buka Order' : 'Detail'}
        </Button>
      </Stack>
    </Card>
  )
}
