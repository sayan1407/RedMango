import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { toastNotify } from "../../../Helper";
import { orderSummaryProps } from "../Order";
import { apiResponse, cartItemModel } from "../../../Interface";
import { useCreateOrderMutation } from "../../../Apis/OrderApi";

const PaymentForm = ({ data, userData }: orderSummaryProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [createOrder] = useCreateOrderMutation()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(stripe);
    console.log(elements);
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
      redirect : "if_required"
    });
    console.log("Payment")
    console.log(result);
    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      toastNotify("An unexpected error occured.", "error");
      setIsProcessing(false);
    } else {
      //       {
      //   "pickupName": "string",
      //   "pickupPhoneNumber": "string",
      //   "pickupEmail": "string",
      //   "applicationUserId": "string",
      //   "orderTotal": 0,
      //   "stripePaymentIntentID": "string",
      //   "status": "string",
      //   "totalItems": 0,
      //   "orderDetails": [
      //     {
      //       "menuItemId": 0,
      //       "quantity": 0,
      //       "itemName": "string",
      //       "price": 0
      //     }
      //   ]
      // }
      let total = 0
      let totalItems = 0
      const orderDetailsDTO : any = []
      data.cartItems.forEach((item:cartItemModel) => {
        const tempOrderDetail : any = {}
        tempOrderDetail["menuItemId"] = item.menuItem?.id
        tempOrderDetail["quantity"] = item.quantity
        tempOrderDetail["itemName"] = item.menuItem?.name
        tempOrderDetail["price"] = item.menuItem?.price
        orderDetailsDTO.push(tempOrderDetail)
        total += (item.quantity!) * (item.menuItem?.price!)
        totalItems += item.quantity!

      })
      const response : apiResponse = await createOrder({

          pickupName : userData.name,
          pickupPhoneNumber : userData.phoneNumber,
          pickupEmail : userData.email,
          applicationUserId : data.userID,
          orderTotal : total,
          stripePaymentIntentID : data.stripePaymentIntentID,
          status: result.paymentIntent.status == "succeeded" ? "CONFIRMED" : "PENDING",
          totalItems : totalItems,
          orderDetails: orderDetailsDTO
      })
      console.log(response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button className="btn btn-success mt-5 w-100">Submit</button>
    </form>
  );
};

export default PaymentForm;
