// 1.버튼에 함수를 달것이다.
// 2.버튼을 누르면 해쉬태그(hashTagList)클래스 리스트 안에서 해쉬(hash)클래스를 찾아 보여주고 감춘다.
// 3.사용한 버튼 this(item)은 잠시 눌러진 상태로 표현할 것이다.

const hashTagList = document.querySelectorAll(".article_contents");
const hashBtn = document.querySelectorAll(".hashtag_btn");

function findHashtag(hash, item){
    for (let j = 0; j < hashBtn.length; j++) {
        hashBtn[j].classList.remove("hashtag_click");
    }
    // 버튼을 전부 기본 색으로 바꾼다는 뜻.

    for (let i = 0; i < hashTagList.length; i++) {
       if(hashTagList[i].classList.contains(hash) === true){
           hashTagList[i].style.display = 'flex';
            ///그것만 보여줘
       }else{
           hashTagList[i].style.display = 'none';
           ///아닌거 감춰
       }
    }
    item.classList.add("hashtag_click");
    // 선택한 친구 색 바꾼다는 뜻.
}


// 버튼 클릭시 findeHastag 실행 hash는 찾는 클래스, item은 누른 버튼 자신