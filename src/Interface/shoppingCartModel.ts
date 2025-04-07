export default interface  shoppingCartModel{
    id: number
    userID: string
    cartItems: any[]
    cartTotal: number
    stripePaymentIntentId: any
    clientSecret: any
  }
  