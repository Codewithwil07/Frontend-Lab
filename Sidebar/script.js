const resize = document.querySelector('.sidebar')
const profile = document.querySelector('.profile')
const heading = document.querySelector('.heading')
const pragraf = document.querySelector('.pragraf')
const list = document.querySelectorAll('.list-item ul li a span')
const icon = document.querySelectorAll('.list-item ul li i')
const footerBtn = document.querySelectorAll ('.logout ul li span')
const btn = document.querySelector('.btn')


btn.onclick = function () {
    resize.classList.toggle('active')
    heading.classList.toggle('active')
    pragraf.classList.toggle('active')
    profile.classList.toggle('active')

    for (let index = 0; index < list.length; index++) {
        list[index].classList.toggle('active')
    }

    for (let index = 0; index < icon.length; index++) {
        icon[index].classList.toggle('active')
    }

    for (let index = 0; index < footerBtn.length; index++) {
        footerBtn[index].classList.toggle('active')
    }
 }

