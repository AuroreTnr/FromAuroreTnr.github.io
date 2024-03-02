const navBar = document.querySelector('.nav-bar');

const navBtn = document.querySelector('.burger-btn');

navBtn.addEventListener('click', handleClickBurgerBtn)
function handleClickBurgerBtn(e){
    navBar.classList.toggle("active")
    navBtn.classList.toggle("active")
}