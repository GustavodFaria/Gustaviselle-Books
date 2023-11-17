
function menuBar(){
    let btnNav = document.querySelector('#menu-btn')
    let listaNav = document.querySelector('.navbar-list')

    btnNav.onclick = () =>{
    btnNav.classList.toggle('fa-times')
    listaNav.classList.toggle('active')
}
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

let livroAtual = 1;

function trocarImagem(direcao) {
    const livro1 = document.querySelector('.book1-best');
    const livro2 = document.querySelector('.book2-best');
    const titleBest = document.querySelector('.title-livro-best');
    const prUm = document.querySelector('.pr1');
    const prDois = document.querySelector('.pr2');
    const prTres = document.querySelector('.pr3');
    const precoBest = document.querySelector('.preço-best');


    if (direcao === 'anterior') {
        livroAtual = (livroAtual === 1) ? 2 : 1;
    } else if (direcao === 'proximo') {
        livroAtual = (livroAtual === 2) ? 1 : 2;
    }

    if (livroAtual === 1) {
        livro1.style.display = 'block';
        livro2.style.display = 'none';
        titleBest.textContent = 'MEMÓRIAS DA ESPADA'
        prUm.textContent = '"Memória da Espada" é uma envolvente jornada através de um mundo repleto de intriga, honra e aventura. Escrito com maestria por Stephen King, este livro transporta os leitores para um universo onde as lâminas contam histórias e os guerreiros carregam o peso de suas memórias.'
        prDois.textContent = 'Na trama, somos apresentados a Eren Tagaryen, um destemido guerreiro cujo destino se entrelaça com segredos ancestrais e um artefato lendário: a espada Vralines. À medida que a história se desenrola, descobrimos os mistérios enterrados no passado de Eren, enquanto ele embarca em uma jornada épica para desvendar o poder e o propósito dessa arma única.'
        prTres.textContent = 'A narrativa habilmente mescla elementos de fantasia e emoção, mergulhando os leitores em batalhas épicas, alianças improváveis e reviravoltas surpreendentes. O mundo meticulosamente construído por tephené habitado por personagens complexos e cativantes, cada um contribuindo para a trama de maneiras que desafiam as expectativas.'
        precoBest.textContent = 'R$199,99'

        document.getElementById("genero").textContent = "Gênero: Ação / Fantasia/ Ficção";
        document.getElementById("autor").textContent = "Autor: Stephen King";
    } else {
        livro1.style.display = 'none';
        livro2.style.display = 'block';
        titleBest.textContent = 'PARQUE DE PASSÁROS'
        prUm.textContent = 'Em "Parque de Pássaros", mergulhe em uma história envolvente de amor e descobertas que transcende o tempo. Escrito com a sensibilidade de quem entende as nuances do coração, este romance promete transportar os leitores para um mundo onde os sentimentos voam alto, como pássaros livres no céu.'
        prDois.textContent = 'A trama gira em torno de dois destinos entrelaçados: Lara, uma artista plástica que busca inspiração nas cores vibrantes da vida, e Lucas, um ornitólogo fascinado pela complexidade das relações humanas. O cenário é o encantador Parque dos Pássaros, onde ambos se encontram, guiados pelo destino.'
        prTres.textContent = '"Parque de Pássaros" é uma celebração do amor, da superação e da beleza que reside nos pequenos detalhes da vida. Uma narrativa cativante que ressoa com emoção e nos lembra que, assim como os pássaros, o amor verdadeiro é livre e eterno. Deixe-se envolver por esta história apaixonante que ecoará em seu coração muito tempo após a última página.'
        precoBest.textContent = 'R$159,99'

        document.getElementById("genero").textContent = "Gênero: Romance / Drama";
        document.getElementById("autor").textContent = "Autor: Phelipe Maia";
    }
}
