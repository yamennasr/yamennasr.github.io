document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const cardBack = card.querySelector('.card-back');
        if (cardBack) {
            cardBack.style.transform = 'rotateY(0deg)';
            card.querySelector('.card-front').style.transform = 'rotateY(-180deg)';
        }
    });
});

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});