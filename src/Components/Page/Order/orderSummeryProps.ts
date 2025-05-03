import { cartItemModel, shoppingCartModel } from "../../../Interface"

export default interface orderSummaryProps {
    data : {
        id : number,
        cartItems : cartItemModel[],
        cartTotal : number
    },
    userData : {
        email : string,
        name : string,
        phoneNumber : string
    }
}