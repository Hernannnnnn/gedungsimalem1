new Swiper('.swiper-container',{
    direction:'vertical'
});

const header = document.getElementById('header');
const nav = document.getElementById('nav');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll',()=>{
    header.classList.toggle('scrolled',window.scrollY > 50);
});

mobileMenu.onclick = () => {
    nav.classList.toggle('active');
};
