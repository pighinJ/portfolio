

    // Manejo del modo oscuro
    const toggleSwitch = document.getElementById('input');

    if (toggleSwitch) {
        // Aplicar modo oscuro si está activado
        toggleSwitch.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        });

        // Aplicar el modo oscuro según el estado inicial del checkbox
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

//carrousel

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}


function toggleReadMore(event) {
    event.preventDefault(); // Evita que la página se recargue al hacer clic
    const moreText = event.target.previousElementSibling.querySelector('.more-text');
    const readMoreLink = event.target;

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMoreLink.textContent = "Read Less";
        localStorage.setItem('isExpanded', 'true'); // Guarda el estado en localStorage
    } else {
        moreText.style.display = "none";
        readMoreLink.textContent = "Read More";
        localStorage.setItem('isExpanded', 'false'); // Guarda el estado en localStorage
    }
}
