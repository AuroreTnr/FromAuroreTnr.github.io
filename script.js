const navBar = document.querySelector('.header');

const navBtn = document.querySelector('.burger-btn');

const linkClick = document.querySelector('.nav-bar');

navBtn.addEventListener('click', handleClickBurgerBtn)
function handleClickBurgerBtn(e){
    navBar.classList.toggle("active")
    navBtn.classList.toggle("active")
}

linkClick.addEventListener('click', handleClickLink)
function handleClickLink(e){
    navBar.classList.toggle("active")
    navBtn.classList.toggle("active")
}




