const LetterArr =["시원한 커피 한잔의 여유", "음악은 흐르고 커피물은 끓는다.", "행복은 한잔의 커피에서도 문득 찾아옵니다."];
const letterBox = document.getElementById("nice_letter");

function makeNiceLetter(){
    let random=Math.floor(Math.random()*LetterArr.length);
    letterBox.innerHTML = LetterArr[random];
}

makeNiceLetter();
