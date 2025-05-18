import menuItemModel from "./menuItemModel"

export interface orderDetailsModel {
  orderDetailId: number
  orderHeaderId: number
  menuItemId: number
  menuItem: menuItemModel
  quantity: number
  itemName: string
  price: number
}