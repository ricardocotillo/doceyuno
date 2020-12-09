const qtyBtn = document.querySelectorAll('.qty-btn')
qtyBtn.forEach(function (qb) {
  qb.addEventListener('click', function (e) {
    e.preventDefault()
    const parentId = e.target.dataset.parentId
    const wrapper = document.getElementById(parentId)
    const input = wrapper.childNodes[3]
    const op = e.target.dataset.op
    switch (op) {
      case 'plus':
        input.value = parseInt(input.value) + 1
        break;
      default:
        input.value = parseInt(input.value) <= 1 ? 1 : parseInt(input.value) - 1
        break;
    }
  })
})

// lógica para actualizar carrito
const updateBtn = document.querySelector('#actualizar')
updateBtn.addEventListener('click', async function (e) {
  const cartCounters = document.querySelectorAll('.cart-counter')
  const subTotalNode = document.querySelector('#subtotal')
  const totalNode = document.querySelector('#total-amount')
  const productInfo = document.querySelectorAll('.product-info')
  let cartSubTotal = 0
  let sum = 0
  for (const el of productInfo) {
    const quantityInput = el.querySelector('.quantity')
    const itemUuid = quantityInput.dataset.id
    const quantity = quantityInput.value
    const totalPrice = el.querySelector('.total-price')
    const res = await fetch(`/shop/cart/update/${itemUuid}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': window.getToken()
      },
      body: JSON.stringify({ quantity: parseInt(quantity) })
    })
    const data = await res.json()
    cartSubTotal += parseFloat(data.total_price)
    totalPrice.textContent = `S/ ${data.total_price}`
    sum += data.quantity
  }
  subTotalNode.textContent = `S/ ${cartSubTotal.toFixed(2)}`
  totalNode.textContent = `S/ ${(cartSubTotal + 10).toFixed(2)}`
  cartCounters.forEach(cc => cc.dataset.counter = sum)
})