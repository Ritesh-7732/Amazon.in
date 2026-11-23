
//Automatic Slider (1)
let slides = document.querySelectorAll(".slide");

const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");

let currentSlide = 0;


function showSlides(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}


nextbtn.addEventListener("click", () => {
    currentSlide++;
    if(currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlides(currentSlide);
});


prevbtn.addEventListener("click", () => {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlides(currentSlide);
});


setInterval(() => {
    currentSlide++;
    if(currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlides(currentSlide);
}, 4000);






const prevbtn2 = document.querySelector(".prev-2");
const nextbtn2 = document.querySelector(".next-2");
const track = document.querySelector(".slider-track");
const slides2 = document.querySelectorAll(".slide-2");


let position = 0;
let slideWidth = 170;
let visibleSlide = 4;





let maxPosition = -(slides2.length - visibleSlide)*slideWidth;



nextbtn2.addEventListener("click", () => {
    // Dynamic max calculate karo
    const maxPos = -(track.scrollWidth - track.parentElement.offsetWidth);
    
    if(position > maxPos) {
        position -= 170;
        // Limit check
        if(position < maxPos) position = maxPos;
        track.style.transform = `translateX(${position}px)`;
        
    }
});

prevbtn2.addEventListener("click", () => {
    if(position < 0) {
        position += slideWidth;
        track.style.transform = `translateX(${position}px)`;
    }
});








const prevbtn3 = document.querySelector(".prev-3");
const nextbtn3 = document.querySelector(".next-3");
const track2 = document.querySelector(".slider-track-2");
const slides3 = document.querySelectorAll(".slide-3");


let position2 = 0;
let slideWidth2 = 510;
let visibleSlide2 = 4;

let maxPosition2 = -(slides3.length - visibleSlide2)*slideWidth2;


nextbtn3.addEventListener("click", () => {
    const maxPos2 = -(track2.scrollWidth - track2.parentElement.offsetWidth);
    
    if(position2 > maxPos2) {
        position2 -= 510;
        if(position2 < maxPos2) position2 = maxPos2;
        track2.style.transform = `translateX(${position2}px)`;
    }
});






//Product Card with variants 1


// const thumbnails = document.querySelectorAll(".thumbnail");
// const mainImg = document.querySelector(".main-img");
// const description = document.querySelector(".description");
// const actualPrice = document.querySelector(".actual-price");
// const mrpPrice = document.querySelector(".mrp s");


// thumbnails.forEach(thumb => {
//     thumb.addEventListener("click", () => {
//         mainImg.src = thumb.getAttribute("data-img");
//         description.innerText = thumb.getAttribute("data-desc");
//         actualPrice.innerText = thumb.getAttribute("data-price");
//         mrpPrice.innerText = "₹ " + thumb.getAttribute("data-mrp");
//     });
// });





function setupProductCard(thumbnailsClass, mainImgClass, descClass, actualPriceClass, mrpSelector, imgAttr, descAttr, priceAttr, mrpAttr) {

    const thumbnails = document.querySelectorAll(thumbnailsClass);
    const mainImg = document.querySelector(mainImgClass);
    const description = document.querySelector(descClass);
    const actualPrice = document.querySelector(actualPriceClass);
    const mrpPrice = document.querySelector(mrpSelector);

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            mainImg.src = thumb.getAttribute(imgAttr);
            description.innerText = thumb.getAttribute(descAttr);
            actualPrice.innerText = thumb.getAttribute(priceAttr);
            mrpPrice.innerText = "₹ " + thumb.getAttribute(mrpAttr);
        });
    });
}

setupProductCard(".thumbnail", ".main-img", ".description", ".actual-price", ".mrp s", "data-img", "data-desc", "data-price", "data-mrp");

setupProductCard(".thumbnail2", ".main-img2", ".description2", ".actual-price2", ".mrp2 s", "data-img2", "data-desc2", "data-price2", "data-mrp2");

setupProductCard(".thumbnail3", ".main-img3", ".description3", ".actual-price3", ".mrp3 s", "data-img3", "data-desc3", "data-price3", "data-mrp3");

setupProductCard(".thumbnail4", ".main-img4", ".description4", ".actual-price4", ".mrp4 s", "data-img4", "data-desc4", "data-price4", "data-mrp4");

setupProductCard(".thumbnail5", ".main-img5", ".description5", ".actual-price5", ".mrp5 s", "data-img5", "data-desc5", "data-price5", "data-mrp5");

setupProductCard(".thumbnail6", ".main-img6", ".description6", ".actual-price6", ".mrp6 s", "data-img6", "data-desc6", "data-price6", "data-mrp6");

setupProductCard(".thumbnail7", ".main-img7", ".description7", ".actual-price7", ".mrp7 s", "data-img7", "data-desc7", "data-price7", "data-mrp7");

setupProductCard(".thumbnail8", ".main-img8", ".description8", ".actual-price8", ".mrp8 s", "data-img8", "data-desc8", "data-price8", "data-mrp8");

setupProductCard(".thumbnail9", ".main-img9", ".description9", ".actual-price9", ".mrp9 s", "data-img9", "data-desc9", "data-price9", "data-mrp9");

setupProductCard(".thumbnail10", ".main-img10", ".description10", ".actual-price10", ".mrp10", "data-img10", "data-desc10", "data-price10", "data-mrp10");



// Products with their description

const prevP = document.querySelector(".prev-p");
const nextP = document.querySelector(".next-p");
const productTrack = document.querySelector(".product-slide-track");
const productGroups = document.querySelectorAll(".product-group");

let currentGroup = 0;

nextP.addEventListener("click", () => {
    currentGroup++;
    if(currentGroup >= productGroups.length) currentGroup = 0;
    productTrack.style.transform = `translateX(-${currentGroup * 100}%)`;
});

prevP.addEventListener("click", () => {
    currentGroup--;
    if(currentGroup < 0) currentGroup = productGroups.length - 1;
    productTrack.style.transform = `translateX(-${currentGroup * 100}%)`;
});


// const none = document.querySelector("#none");
// const cart_num = document.querySelector("#cart-num");

// none.addEventListener("click", () {
//     cart_num = 0;
    
// });