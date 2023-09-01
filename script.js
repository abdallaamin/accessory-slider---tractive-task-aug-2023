const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const sliderBar = document.getElementById('sliderBar');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentIndex = 0;

// Add touch event listeners to each card
cards.forEach((slide) => {
    slide.addEventListener('touchstart', touchStart);
    slide.addEventListener('touchmove', touchMove);
    slide.addEventListener('touchend', touchEnd);
});

// Handle touch start event
function touchStart(event) {
    startPos = getPositionX(event);
    isDragging = true;
    prevTranslate = currentTranslate;
    slider.style.transition = 'none';
    animation(); // Trigger animation loop
}

// Handle touch move event
function touchMove(event) {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const moveX = currentPosition - startPos;
    currentTranslate = prevTranslate + moveX;
    slider.style.transform = `translateX(${currentTranslate}px)`;
    updateActiveDot(); // Update the active dot based on the current slide
}

// Handle touch end event
function touchEnd() {
    isDragging = false;
    const cardWidth = cards[0].offsetWidth;
    const movedBy = currentTranslate - prevTranslate;

    // Check if the slide should move to the next or previous card
    if (movedBy < -cardWidth / 3 && currentIndex < cards.length - 1) {
        currentIndex++;
    } else if (movedBy > cardWidth / 3 && currentIndex > 0) {
        currentIndex--;
    }

    setPositionByIndex(); // Set the slider's position based on the current index
    slider.style.transition = 'transform 0.3s ease-in-out';
    updateActiveDot(); // Update the active dot after the slide transition
}

// Get the X position of the touch event
function getPositionX(event) {
    return event.touches[0].clientX;
}

// Animation loop to update slider position during dragging
function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

// Set slider's position based on the current index
function setPositionByIndex() {
    const cardWidth = cards[0].offsetWidth;
    currentTranslate = -currentIndex * cardWidth;
    setSliderPosition();
}

// Update the slider's position
function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

// Update the active dot in the slider bar
function updateActiveDot() {
    const dots = Array.from(sliderBar.children);
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentIndex ? '#333' : '#999';
    });
}

// Create and set up dots in the slider bar
function setupSliderBar() {
    for (let i = 0; i < cards.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        dot.addEventListener('click', () => handleDotClick(i)); // Handle dot click event
        sliderBar.appendChild(dot);
    }
}
// Handle dot click event
function handleDotClick(index) {
    currentIndex = index;
    setPositionByIndex();
    slider.style.transition = 'transform 0.3s ease-in-out';
    updateActiveDot();
}

// Handle window resize event
function handleResize() {
    currentIndex = 0;
    currentTranslate = 0;
    prevTranslate = 0;
    setPositionByIndex();
    updateActiveDot();
}

window.addEventListener('resize', handleResize);

// Initialize the slider bar and set the active dot
setupSliderBar();
updateActiveDot();


