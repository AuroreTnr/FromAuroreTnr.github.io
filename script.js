// Animation ScrollBarTop
window.addEventListener("scroll", barScrollTop)
function barScrollTop(){
    const hauteur = document.documentElement.scrollHeight - window.innerHeight

    const position = window.scrollY

    const largeur = document.documentElement.clientWidth

    const barre = position / hauteur * largeur

    document.querySelector('.progress').style.width = `${barre}px`;
}


// Animation reveal works

const slidingBlockWork = document.querySelector(".reveal")

window.addEventListener("scroll", reveal);

function reveal() {

    const {scrollTop, clientHeight} = document.documentElement;

    const windowheight = window.innerHeight;

    const topElementToTopViewport = slidingBlockWork.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.9) {
        slidingBlockWork.classList.add("active");
    }
}

