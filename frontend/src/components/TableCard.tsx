import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { Table } from '../types/table'

type Props = {
  table: Table
}

export default function TableCard({ table }: Props) {
  const color = table.status === 'available' ? 'success' : 'warning'
  const label = table.status === 'available' ? 'Kosong' : 'Terpakai'
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{table.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              Kapasitas {table.capacity} orang
            </Typography>
          </div>
          <Chip color={color as any} label={label} size="small" />
        </Stack>
      </CardContent>
    </Card>
  )
}
