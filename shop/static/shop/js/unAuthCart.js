const productsTable = document.querySelector('#products-table-wrapper')
const ptUrl = productsTable.dataset.ptUrl
if (cart) {
  fetch(ptUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': window.getToken()
    },
    body: cart,
  })
    .then(res => res.text())
    .then(data => {
      const productsTableWrapper = document.querySelector('#products-table-wrapper')
      productsTableWrapper.innerHTML = data
      setCartListeners()
    })
}

function setCartListeners() {
  qtyListener()
  updateListener()
}

function qtyListener() {
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
}

function updateListener() {
  const updateBtn = document.querySelector('#actualizar')
  updateBtn.addEventListener('click', async function (e) {
    const cartCounters = document.querySelectorAll('.cart-counter')
    const subTotalNode = document.querySelector('#subtotal')
    const totalNode = document.querySelector('#total-amount')
    const productInfo = document.querySelectorAll('.product-info')
    let cartSubTotal = 0
    let cartItems = JSON.parse(cart)
    for (const el of productInfo) {
      const quantityInput = el.querySelector('.quantity')
      const itemUuid = quantityInput.dataset.id
      const quantity = quantityInput.value
      const totalPrice = el.querySelector('.total-price')
      const index = cartItems.findIndex(cartItem => itemUuid === cartItem.uuid)
      cartItems[index].quantity = parseInt(quantity)
      cartItems[index].totalPrice = parseInt(quantity) * cartItems[index].price
      cartSubTotal += cartItems[index].totalPrice
      totalPrice.textContent = `S/ ${cartItems[index].totalPrice.toFixed(2)}`
    }
    subTotalNode.textContent = `S/ ${cartSubTotal.toFixed(2)}`
    totalNode.textContent = `S/ ${(cartSubTotal + 10).toFixed(2)}`
    let sum = 0
    localStorage.setItem('cart', JSON.stringify(cartItems))
    cartItems.forEach(cartItem => sum += cartItem.quantity)
    cartCounters.forEach(cc => cc.dataset.counter = sum)
  })
}