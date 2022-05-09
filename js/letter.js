const LetterArr =["시원한 커피 한잔의 여유", "음악은 흐르고 커피물은 끓는다.", "행복은 한잔의 커피에서도 문득 찾아옵니다."];
const letterBox = document.getElementById("nice_letter");

//글자 박스

function makeNiceLetter(){
    let random=Math.floor(Math.random()*LetterArr.length);
    letterBox.innerHTML = LetterArr[random];
}

makeNiceLetter();

// 랜덤하게 숫자를 만들고 배열에 랜덤하게 하나를 레터박스에 넣어줌 . 함수 실행