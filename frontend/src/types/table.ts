export type TableStatus = 'available' | 'occupied'

export interface Table {
  id: number
  name: string
  capacity: number
  status: TableStatus
}
