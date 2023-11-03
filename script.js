let btnNav = document.querySelector('#menu-btn')
let listaNav = document.querySelector('.navbar-list')

btnNav.onclick = () =>{
    btnNav.classList.toggle('fa-times')
    listaNav.classList.toggle('active')
}

