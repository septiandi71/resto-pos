import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Avatar,
  Fade,
  Alert,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    // Simulasi login
    setTimeout(() => {
      setLoading(false)
      if (email === 'kasir@resto.com' && password === 'kasir123') {
        window.location.href = '/dashboard'
      } else {
        setError('Email atau password salah!')
      }
    }, 900)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Fade in timeout={700}>
        <Card elevation={6} sx={{ minWidth: 340, maxWidth: 380 }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mb: 1 }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h6" fontWeight={700} color="primary.main" gutterBottom>
                Login Kasir / Pelayan
              </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
              <TextField
                label="Email"
                type="email"
                autoComplete="username"
                fullWidth
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
              />
              <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={loading}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={loading}
                sx={{ mt: 1, fontWeight: 600 }}
              >
                {loading ? 'Memproses...' : 'Masuk'}
              </Button>
            </Box>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
            )}
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
              Demo: kasir@resto.com / kasir123
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  )
}
