import { shoppingCartModel } from "../../../Interface"

export default interface orderSummaryProps {
    data : {
        id : number,
        cartItems : shoppingCartModel[],
        cartTotal : number
    },
    userInput : {
        email : string,
        name : string,
        phoneNumber : string
    }
}