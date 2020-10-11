const cart = localStorage.getItem('cart')
if (cart !== null) {
  const cartCounters = document.querySelectorAll('.cart-counter')
  const cartItems = JSON.parse(cart)
  let itemsCount = 0
  cartItems.forEach(cartItem => itemsCount += cartItem.quantity)
  cartCounters.forEach(cc => cc.dataset.counter = itemsCount)
}