let hashtagList = document.querySelectorAll(".article_contents");
let hashbtn = document.querySelectorAll(".hastag_btn");

function findHashtag(hash, item){
    for (let j = 0; j < hashbtn.length; j++) {
        hashbtn[j].classList.remove("hashtag_click");
    }
    for (let i = 0; i < hashtagList.length; i++) {
       if(hashtagList[i].classList.contains(hash) === true){
           hashtagList[i].style.display = 'flex';
        //    console.log("해당 요소");
       }else{
           hashtagList[i].style.display = 'none';
        //    console.log("해당 제외요소");
       }
    }
    item.classList.add("hashtag_click");
}
