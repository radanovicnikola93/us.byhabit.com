// GSAP 
gsap.registerPlugin(ScrollTrigger);
// ------------------------- HEADER -------------------------
gsap.from('#page-header', {opacity: 0, duration: 0.7, scale: 1.2}) // header
gsap.from('#page-header-slogan', {opacity: 0, duration: 1, y: -50, delay: 0.8}) // header

// ------------------------- GALLERY SECTION -------------------------
const timeline = (target, trigger) => {
    let tl = gsap.timeline({ // generating a timeline
        scrollTrigger: {
            trigger: trigger,
            toggleActions: "restart none none pause"
        }
    });

    tl.from(target, {
        y: 50, 
        opacity: 0, 
        duration: 1.8
    })
}

timeline("#content-text-1", "#content-text-1");
timeline("#content-text-2", "#content-text-2");
timeline("#content-text-3", "#content-text-3");
timeline("#content-text-4", "#content-text-4");

// ------------------------- GALLERY SECTION -------------------------
timeline("#product-header", "#product-header-slogan");