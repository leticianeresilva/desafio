const images = [
    'fernando-de-noronha-paisagens-naturais-de-praia-1.webp',
    'fotografias-de-paisagens-1661176157-2048x1365.jpeg',
    'lago-louise.jpg'
];

let currentIndex = 0;

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('carousel-image').src = images[currentIndex];
});
