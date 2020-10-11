const colors = document.querySelectorAll('.color');
const colorInput = document.querySelector('#id_color');
colors.forEach(function(color) {
    color.addEventListener('click', function(c) {
        colorInput.value = c.target.dataset.colorId;
    });
})