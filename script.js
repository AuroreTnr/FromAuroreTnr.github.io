window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal")

    for(let i = 0; i< reveals.length; i++){

        const windowheight = window.innerHeight;

        const revealTop = reveals[i].getBoundingClientRect().top;

        const revealPoint = 0;

        if(revealTop < windowheight - revealPoint){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}
