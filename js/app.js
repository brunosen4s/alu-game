function alterarStatus(id) {
    let gameClicked = document.getElementById(`game-${id}`);
    let image = gameClicked.querySelector('.dashboard__item__img');
    let button = gameClicked.querySelector('.dashboard__item__button');

    if(image.classList.contains('dashboard__item__img--rented')){
        image.classList.remove('dashboard__item__img--rented');
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return')

    }else{
        image.classList.add('dashboard__item__img--rented');
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return')
    }
}

