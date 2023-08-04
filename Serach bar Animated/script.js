var all = document.querySelector(".search-box");
var btnOn = document.querySelector(".search-btn");
var btnOff = document.querySelector(".close-btn");

btnOn.addEventListener('click', function(){
    all.classList.add('active')
})

btnOff.addEventListener('click', function () {
    all.classList.remove('active')
})