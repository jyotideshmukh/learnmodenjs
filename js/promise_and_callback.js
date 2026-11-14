/* We have cart and if we need to create order, we need to create payment

eg.
let cart = ['shoes','pants','kurta'];
//these are the call back functions example  but here we face problem of inversion of code 
// means we dont have control over written code
//as createOrder may fail and its createOrder functions resonsibility to call payment function callback
but these so many callbacks are called pyramid of doom


api.createOrder(cart,function(){
    api.paymentOrder(function(){
      api.generateReciept()
    })
})

We can achieve this using promise and chaining

createorde(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummery(paymentInfo);
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo)
});

It can be refactored using arrow functions like below code
createorde(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummery(paymentInfo))
.them(paymentInfo => updateWalletBalance(paymentInfo));




*/

/* To avoid callback functions we can use promise */

const versionData = fetch("https://appapi.planetsmartcity.in/api/v3/version");

console.log(versionData);

versionData.then(function(data){
 console.log(data);
})