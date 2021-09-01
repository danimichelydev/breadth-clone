const menuUl = document.querySelector('.menu-ul')
const menuH = document.querySelector('.menu-h')


function showMenu() {
    if (menuUl.style.display === 'block') {
        menuUl.style.display = 'none'
    } else {
        menuUl.style.display = 'block'
    }

}

menuH.addEventListener('click', showMenu)


