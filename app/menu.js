document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.dropdown-menu').classList.toggle('menu-active')
        document.querySelector('.burger').classList.toggle('burger-focus')
    })
})