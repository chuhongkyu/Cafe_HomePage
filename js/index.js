// 슬라이드 박스

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

// 랜덤 레터박스

// 글자 박스, 글자 배열
const LetterArr =["시원한 커피 한잔의 여유", "음악은 흐르고 커피물은 끓는다.", "행복은 한잔의 커피에서도 문득 찾아옵니다."];
const letterBox = document.getElementById("nice_letter");

// 랜덤 하게 숫자 생성후 래터박스 배열에 담아 함수 호출
function makeNiceLetter(){
    let random = Math.floor(Math.random()*LetterArr.length);
    letterBox.innerHTML = LetterArr[random];
}

makeNiceLetter();


// 버튼 클릭시 리스트 안에서 특정 해쉬태그(class)를 찾는 함수

const hashTagList = document.querySelectorAll(".article_contents");
const hashBtn = document.querySelectorAll(".hashtag_btn");

function findHashtag(hash, item){
    //반복문으로 hashBtn의 클래스를 제거 
    for (let j = 0; j < hashBtn.length; j++) {
        hashBtn[j].classList.remove("hashtag_click");
    }
    
    // 리스트 안에서 특정 해쉬태그(class)를 찾는 함수
    for (let i = 0; i < hashTagList.length; i++) {
       if(hashTagList[i].classList.contains(hash) === true){
           hashTagList[i].style.display = 'flex';
       }else{
           hashTagList[i].style.display = 'none';
       }
    }
    //item에 클래스를 추가 
    item.classList.add("hashtag_click");
}

// 
// 화면 고정 네비게이션
// 

const SuperNav = document.getElementById("super_nav");
const SuperNavBar = document.querySelector(".super_nav_panel");
const SuperNavRoot = document.querySelector(".super_nav_root");

SuperNav.addEventListener("mouseover", showSuperNav)
SuperNav.addEventListener("mouseout", hideSuperNav)

function showSuperNav(){
    SuperNavBar.style.display = "block"
    SuperNavRoot.style.border = "5px solid var(--root-color)"
}

function hideSuperNav(){
    SuperNavBar.style.display = "none"
    SuperNavRoot.style.border = "1px solid var(--root-color)"
}

// 다크모드 버튼
const DarkModeBtn = document.querySelector(".dark_nav");
const DarkModeContainer = document.querySelector(".slider_Container");
const DarkModeImg = document.querySelector(".event");
const logoMark = document.querySelector(".log_box img");
const logoMarkContainer = document.querySelector(".log_box");
const AllMedal = document.querySelectorAll(".safe_icon");

let onOff = true;
handleTheme();
DarkModeBtn.addEventListener('click', handleTheme);

function handleTheme(){
    onOff = !onOff;
    if( onOff == true ){
        document.documentElement.setAttribute('color-theme', 'dark');
        DarkModeContainer.classList.add("slider_darkMode");
        DarkModeImg.classList.add("dark_img");
        logoMark.src = "./img/coffee_medal2.png";
        logoMarkContainer.classList.add("log_rotate");
        for (let i = 0; i < AllMedal.length; i++) {
            AllMedal[i].style.backgroundImage = "url(./img/coffee_medal2.png)";
            AllMedal[i].classList.add("log_rotate");
        }
        
        } else {
        document.documentElement.setAttribute('color-theme', 'light');
        DarkModeContainer.classList.remove("slider_darkMode");
        DarkModeImg.classList.remove("dark_img");
        logoMark.src = "./img/coffee_medal.png";
        logoMarkContainer.classList.remove("log_rotate");
        for (let i = 0; i < AllMedal.length; i++) {
            AllMedal[i].style.backgroundImage = "url(./img/coffee_medal.png)";
            AllMedal[i].classList.remove("log_rotate");
        }
        }
}