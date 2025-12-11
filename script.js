// Mobil Menü Açma/Kapama
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Linklere tıklayınca menüyü kapat
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Animasyonları (Reveal on Scroll)
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.section');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}

// Sayfa yüklendiğinde başlangıç stillerini ayarla (CSS'de transition için)
document.addEventListener("DOMContentLoaded", function() {
    var reveals = document.querySelectorAll('.section');
    for (var i = 0; i < reveals.length; i++) {
        reveals[i].style.opacity = "0";
        reveals[i].style.transform = "translateY(30px)";
        reveals[i].style.transition = "all 1s ease";
    }
    reveal(); // İlk yüklemede görünenleri aç
});