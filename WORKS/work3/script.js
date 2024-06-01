const slideImages = document.querySelectorAll(".slide-img");
const controlButtons = document.querySelectorAll(".control-btn")
const previousBtn = document.querySelector(".previous-btn")
const nextBtn = document.querySelector(".next-btn")

previousBtn.addEventListener("click", handleIndex);
nextBtn.addEventListener("click", handleIndex);

let index = 0;

function handleIndex(e){
    slideImages[index].classList.remove("active")
    
    index = index + Number(e.target.getAttribute("data-action"))
    console.log(index);
    
    if(index < 0){
        index = slideImages.length - 1
    }
    else if(index > slideImages.length - 1){
        index = 0
    }

    slideImages[index].classList.add("active")
}