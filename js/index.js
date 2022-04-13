let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slide_Box = document.getElementsByClassName("slide_Box");
    let dots = document.getElementsByClassName("dot");

    if (n > slide_Box.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slide_Box.length
    }
    for (i = 0; i < slide_Box.length; i++) {
        slide_Box[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i]
            .className
            .replace(" active", "");
    }
    slide_Box[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}