import { orderDetailsModel } from "./orderDetailsModel"

export interface orderHeader {
  orderHeaderId: number
  pickupName: string
  pickupPhoneNumber: string
  pickupEmail: string
  applicationUserId: string
  user: any
  orderTotal: number
  orderDate: string
  stripePaymentIntentID: any
  status: string
  totalItems: number
  orderDetails: orderDetailsModel[]
}