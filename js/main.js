let allDiv = document.querySelectorAll(".container .img");

for (let index = 0; index < allDiv.length; index++) {
  
    allDiv[index].onmouseover = function(){
        allDiv[2].classList.remove("active");
        allDiv[index].classList.add("active");
    }
    allDiv[index].onmouseout = function(){
        allDiv[index].classList.remove("active");
        allDiv[2].classList.add("active");

    
    }
}
