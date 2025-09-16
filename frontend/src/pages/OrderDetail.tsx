import { Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export default function OrderDetail() {
  const { id } = useParams()
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h5" gutterBottom>Detail Pesanan #{id}</Typography>
      <Typography>Tambah item & tutup pesanan (placeholder)</Typography>
    </Container>
  )
}
