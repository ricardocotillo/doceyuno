const deleteIcons = document.querySelectorAll('.delete-icon')
const form = document.querySelector('#delete-form')
deleteIcons.forEach(e => e.addEventListener('click', onClick))

function onClick(e) {
    const id = e.target.dataset.id
    form.action = '/shop/product/' + id + '/delete/'
}