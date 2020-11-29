const productsTable = document.querySelector('#products-table-wrapper');
const ptUrl = productsTable.dataset.ptUrl
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
  })