// smooth scrolling
// import { getCachePathCandidates } from 'node-sass/lib/extensions';
// import Scrollbar from 'smooth-scrollbar';
// var options = {
//     'damping': 0.01,
//     'alwaysShowTracks': true
// }
// Scrollbar.init(document.querySelector('#my-scrollbar'), options);

// GSAP 

// ------------------------- HEADER -------------------------
gsap.from('.page-header', {opacity: 0, duration: 0.7, scale: 1.2}) // header
gsap.from('.slogan', {opacity: 0, duration: 1, y: -50, delay: 0.8}) // header
