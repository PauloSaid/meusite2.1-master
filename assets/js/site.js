const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}
)

function abrir() {
    document.getElementById('popup').style.display = 'block';
}

function fechar() {
    document.getElementById('popup').style.display = 'none';
}