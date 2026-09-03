document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("sliderWrapper");
    const slides = document.querySelectorAll(".slider-item");
    const prevBtn = document.getElementById("prevSlideBtn");
    const nextBtn = document.getElementById("nextSlideBtn");
    const dots = document.querySelectorAll(".dot-btn");
    const sliderContainer = document.getElementById("custom-slider");

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval = null;

    // Actualizar movimiento e indicadores
    function updateSlider(index) {
        currentIndex = index;
        const offset = -currentIndex * 100;
        wrapper.style.transform = `translateX(${offset}%)`;

        // Actualizar estados de puntos
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add("active-dot");
            } else {
                dot.classList.remove("active-dot");
            }
        });
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % totalSlides;
        updateSlider(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider(newIndex);
    }

    // Eventos de botones
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetTimer();
    });

    // Eventos para puntos indicadores
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            updateSlider(index);
            resetTimer();
        });
    });

    // Reproducción automática y pausa al pasar el cursor (Hover)
    function startTimer() {
        autoSlideInterval = setInterval(nextSlide, 4500);
    }

    function resetTimer() {
        clearInterval(autoSlideInterval);
        startTimer();
    }

    sliderContainer.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
    sliderContainer.addEventListener("mouseleave", () => startTimer());

    // Inicializar
    updateSlider(0);
    startTimer();
});