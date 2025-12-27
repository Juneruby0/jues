const add = document.querySelectorAll('.add'); // isso irá direcionar todos os itens com a classe add.

add.forEach(e => {
    e.addEventListener('click', ()=>{
        const p = e.previousElementSibling.lastElementChild; //Está direcionando o elemento <p> com a classe hide.
        const itemadd = e.firstElementChild; //Isso está direcionando o elemento <i> com a classe fa-plus.
        const itemrmv = e.lastElementChild; //Isso está direcionando o elemento <i> com a classe fa-minus.

        e.classList.toggle('none');
        itemadd.classList.toggle('hide');
        itemrmv.classList.toggle('show');
        p.classList.toggle('show');
    })
})

  const qns = document.querySelectorAll('.qns');

  qns.forEach(item => {
    const plus = item.querySelector('.fa-minus');
    const text = item.querySelector('p');

    item.addEventListener('click', () => {
      plus.classList.toggle('hide');
      minus.classList.toggle('hide');
      text.classList.toggle('hide');
    });
  });