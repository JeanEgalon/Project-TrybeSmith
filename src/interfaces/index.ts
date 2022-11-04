export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
}

export interface IFindProduct {
  name: string,
  amount: string,
}