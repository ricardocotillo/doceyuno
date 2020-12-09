const addForm = document.querySelector('#add-form')

addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const cartCounters = document.querySelectorAll('.cart-counter')
  const cart = localStorage.getItem('cart')
  let cartItems;
  cartItems = cart === null ? [] : JSON.parse(cart)

  const item = {
    uuid: uuidv4(),
    id: parseInt(e.target.productId.value),
    name: e.target.productName.value,
    image: e.target.image.value,
    color: e.target.color.value,
    size: e.target.size.value,
    quantity: parseInt(e.target.quantity.value),
    price: parseFloat(e.target.price.value),
    totalPrice: parseInt(e.target.quantity.value) * parseFloat(e.target.price.value)
  }

  const index = cartItems.findIndex(cartItem => cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size)
  if (index >= 0) { 
    cartItems[index].quantity += item.quantity
    cartItems[index].totalPrice = cartItems[index].quantity * cartItems[index].price
  } else {
    cartItems.push(item)
  }
  let sum = 0
  localStorage.setItem('cart', JSON.stringify(cartItems))
  cartItems.forEach(cartItem => sum += cartItem.quantity)
  cartCounters.forEach(cc => cc.dataset.counter = sum)
})

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}