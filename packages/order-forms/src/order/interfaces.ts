export interface IOrder {
  id: string
  customer: string
  status: string
}

export interface IOrderListQuery {
  id?: string
  ids?: string[]
}

