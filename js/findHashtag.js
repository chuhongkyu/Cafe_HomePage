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
