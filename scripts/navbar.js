const navbar = document.querySelector('.main-nav');
const height = '100vh'
window.onscroll = () => {
    if (window.scrollY > 900) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

console.log("scrooll" + window.scrollY)