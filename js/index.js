// 슬라이드 박스 움직이기
// 1.슬라이드 마다 Index를 주고 초기값은 1이다.
// 2.플러스 슬라이드를 하면 Index에서 +1한다.
// 3.마이너스 슬라이드 하면 Index에서 -1한다.
// 4. index가 0보다 작아지면 다시 박스의 랭스(즉 3)으로 바뀐다.
// 5. index가 아닌것들은 다 안보여진다.
// 6. dot은 누르면 "active"된다.

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
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slide_Box[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// 

