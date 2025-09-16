import { Table } from '../types/table'

export const mockTables: Table[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Meja ${i + 1}`,
  capacity: i % 4 === 0 ? 6 : i % 3 === 0 ? 2 : 4,
  status: i % 3 === 0 ? 'occupied' : 'available'
}))
