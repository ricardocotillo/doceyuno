const cart = localStorage.getItem('cart')
if (cart !== null) {
  const cartCounters = document.querySelectorAll('.cart-counter')
  const cartItems = JSON.parse(cart)
  let itemsCount = 0
  cartItems.forEach(cartItem => itemsCount += cartItem.quantity)
  cartCounters.forEach(cc => cc.dataset.counter = itemsCount)
}

window.getToken = () => {
  function getCookie(name) {
    let cookieValue = null
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
  }
  const csrftoken = getCookie('csrftoken')
  return csrftoken
}