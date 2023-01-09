export interface account {
  id: string
  currentBalance: number
}

export interface transaction {
  id: string
  title: string
  date: string
  amount: number
  coin: string
  img: any
}
