// GSAP 
gsap.registerPlugin(ScrollTrigger);
// ------------------------- HEADER -------------------------
gsap.from('#page-header', {opacity: 0, duration: 0.7, scale: 1.2}) // header
gsap.from('#page-header-slogan', {opacity: 0, duration: 1, y: -50, delay: 0.8}) // header

// ------------------------- GALLERY SECTION -------------------------
const timeline = (target, trigger, x, y, opacity, duration) => {
    let tl = gsap.timeline({ // generating a timeline
        scrollTrigger: {
            trigger: trigger,
            toggleActions: "restart none none pause"
        }
    });

    tl.from(target, {
        x: x,
        y: y, 
        opacity: opacity, 
        duration: duration
    })
}

timeline("#content-text-1", "#content-text-1", 0, 40, 0, 2);
timeline("#content-text-2", "#content-text-2", 0, 40, 0, 2);
timeline("#content-text-3", "#content-text-3", 0, 40, 0, 2);
timeline("#content-text-4", "#content-text-4", 0, 40, 0, 2);

// ------------------------- GALLERY SECTION -------------------------
timeline("#product-header", "#product-header-slogan", 0, 40, 0, 2);

// ------------------------- PRODUCT GALLERY -------------------------
timeline("#product-gallery-main-product-1", "#product-gallery-main-product-1", 0, 0, 0, 2);
timeline("#product-gallery-links-1", "#product-gallery-links-1", 0, 0, 0, 2);
timeline("#product-gallery-shop-products-1", "#product-gallery-shop-products-1", 0, 0, 0, 2);

timeline("#product-gallery-main-product-2", "#product-gallery-main-product-2", 0, 0, 0, 2);
timeline("#product-gallery-links-2", "#product-gallery-links-2", 0, 0, 0, 2);
timeline("#product-gallery-shop-products-2", "#product-gallery-shop-products-2", 0, 0, 0, 2);

timeline("#product-gallery-main-product-3", "#product-gallery-main-product-3", 0, 0, 0, 2);
timeline("#product-gallery-links-3", "#product-gallery-links-3", 0, 0, 0, 2);
timeline("#product-gallery-shop-products-3", "#product-gallery-shop-products-3", 0, 0, 0, 2);

// ------------------------- SHOP PRODUCTS GALLERY -------------------------
timeline("#shop-products-gallery-headers", "#shop-products-gallery-headers", 0, 20, 0, 2);
gsap.from('#shop-products-gallery-video-1', {opacity: 0, duration: 0.7, scale: 1.1})
gsap.from('#shop-products-gallery-video-2', {opacity: 0, duration: 0.7, scale: 1.1})
gsap.from('#shop-products-gallery-video-3', {opacity: 0, duration: 0.7, scale: 1.1})

// ------------------------- CONTACT-INFO -------------------------
timeline("#contact-info-container-1", "#contact-info-container-1", 0, 40, 0, 2);
timeline("#contact-info-container-2", "#contact-info-container-2", 0, 40, 0, 2);
timeline("#contact-info-container-3", "#contact-info-container-3", 0, 40, 0, 2);

// ------------------------- FOOTER -------------------------
timeline("#footer", "#footer", 0, 40, 0, 2);