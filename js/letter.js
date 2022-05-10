//1. 화면에 들어올 때 마다 글자 배열(LetterArr)중 하나를 불러 글자로(letterBox) 띄운다. 
//2. 랜덤 변수를 만든다. 



const LetterArr =["시원한 커피 한잔의 여유", "음악은 흐르고 커피물은 끓는다.", "행복은 한잔의 커피에서도 문득 찾아옵니다."];
const letterBox = document.getElementById("nice_letter");

//글자 박스를 js에 가져오고 글자가 있는 배열 선언

function makeNiceLetter(){
    let random = Math.floor(Math.random()*LetterArr.length);
    letterBox.innerHTML = LetterArr[random];
}

makeNiceLetter();

// 랜덤하게 숫자를 만들고 배열에 랜덤하게 하나를 레터박스에 넣어줌 . 함수 실행