
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider-box");
    const navBtns = document.querySelectorAll(".btn-nav");
    const prevBtn = document.getElementById("anterior");
    const nextBtn = document.getElementById("proxima");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("ativo", i === index);
      });
  
      navBtns.forEach((btn, i) => {
        btn.classList.toggle("ativo", i === index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    // Eventos de clique nas setas
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  
    // Eventos de clique nos botões de navegação
    navBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  
    // Mostrar slide inicial
    showSlide(currentIndex);
  
    setInterval(nextSlide, 4000); 
  });