import { cart } from "../data/cart.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
export let itemsCart = 0;
const renderItemsCart = () => {
    cart.forEach((cartItem)=>{
        itemsCart = itemsCart + cartItem.quantity;
    });
    document.querySelector('.js-items-cart').innerHTML = itemsCart + " items";
}
renderItemsCart();
renderOrderSummary();
renderPaymentSummary();