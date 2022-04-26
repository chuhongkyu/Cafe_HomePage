let hashtagList = document.querySelectorAll(".article_contents");

function findHashtag(hash){
    for (let i = 0; i < hashtagList.length; i++) {
       if(hashtagList[i].classList.contains(hash) === true){
           hashtagList[i].style.display = 'flex';
           console.log("해당 요소");
       }else{
           hashtagList[i].style.display = 'none';
           console.log("해당 제외요소"); 
       }
    }

}

