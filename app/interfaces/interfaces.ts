export interface Account {
  id: string
  currentBalance: number
}

export interface Transaction {
  id: string
  title: string
  date: string
  amount: number
  coin: string
  img: any
}
