// MAPEANDO OS ELEMENTOS
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
const arraySlides = document.querySelectorAll(".slide");
let index = 0;
let lastSlide = arraySlides.length - 1;
const ul = document.querySelector("ul");

// FUNÇÃO DE PASSAR O SLIDE
function changeSlide(){
    let activeSlide = document.querySelector(".slide.active");
    activeSlide.classList.remove("active");
    arraySlides[index].classList.add("active");

    let activebullet = document.querySelector("li.active");
    activebullet.classList.remove("active");
    arrayBullets[index].classList.add("active");
}

// BOTÕES DE NAVEGAÇÃO
nextButton.onclick = () => {
    if(index < lastSlide){
        index = index + 1;
        changeSlide();
    } else {
        index = 0;
        changeSlide();
    }
}
prevButton.onclick = () => {
    if(index > 0){
        index = index - 1;
        changeSlide();
    } else {
        index = lastSlide;
        changeSlide();
    }
}

// LOOP FOR PARA CRIAR BULLETS
for(let i = 0; i < arraySlides.length; i++){
    let li = document.createElement("li");
    ul.appendChild(li);
}

// Ativar o primeiro bullet
document.querySelector("ul li").classList.add("active");

const arrayBullets = document.querySelectorAll("ul li");

arrayBullets.forEach((bullet, i) => {
    bullet.onclick = () => {
        index = i;
        changeSlide();
    }
})

// AUTOMATIZAR O CARROSSEL
setInterval(() => {
    if(index < lastSlide){
        index = index + 1;
    } else {
        index = 0;
    }
    changeSlide();
}, 4000); // tempo em milissegundos (4000 = 4 segundos)