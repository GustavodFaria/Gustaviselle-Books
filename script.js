
let btnNav = document.querySelector('#menu-btn')
let listaNav = document.querySelector('.navbar-list')

btnNav.onclick = () =>{
    btnNav.classList.toggle('fa-times')
    listaNav.classList.toggle('active')
}

ScrollReveal().reveal('.headline', { delay: 300 });
ScrollReveal().reveal('.headline2', { delay: 300 });
ScrollReveal().reveal('.tagline', { delay: 400 });
ScrollReveal().reveal('.fila1', { delay: 400 });
ScrollReveal().reveal('.punchline', { delay: 500 });
ScrollReveal().reveal('.botonline', { delay: 500 });
ScrollReveal().reveal('.fila2', { delay: 500 });

ScrollReveal().reveal('.livro1', { delay: 400 });
ScrollReveal().reveal('.livro2', { delay: 500 });
ScrollReveal().reveal('.livro3', { delay: 600 });
ScrollReveal().reveal('.livro4', { delay: 700 });
