var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100 + 1);
 cart.push({[item]: price});
 console.log('${item} has been added to your cart.');
 return cart
}

function viewCart() {
  const l = cart.length;
  if (!l){
      return console.log("Your shopping cart is empty.");
  }
  let itemsAndPrices = [];
  for (let i = 0; i<l; i++){
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];
    itemsAndPrices.push("${item} at \$${price}.");
  }
  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
let t = 0;
for (i=0, l = cart.length; i<l; i++){
  for (let item in cart[i]){
    sum +=item(cart[i]);
  }
}
return t
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
