const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()
const navbar = document.querySelector(".navbar")
const navBtn = document.querySelector('.nav-btn');
const navClose = document.querySelector('.nav-close');

navBtn.addEventListener("click",() =>{
 navbar.classList.add("showNav")
})

navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});