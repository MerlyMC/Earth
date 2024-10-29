window.onload = function() {
    const popUp = document.querySelector('.pop-up');
    if (popUp) {
        popUp.style.opacity = 1;
    }
};

document.getElementById('inputForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('thankYouMessage');
    message.classList.remove('hidden');
    this.reset(); // Reset form if needed
});
