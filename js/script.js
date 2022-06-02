document.querySelector('.fa-solid.fa-bars').addEventListener('click', function() {
    document.querySelector('.khoi-navbar--header').classList.add('right0');
    document.querySelector('.header-navbar').classList.add('display-block');
})

document.querySelector('.header--close').addEventListener('click', function() {
    document.querySelector('.khoi-navbar--header').classList.remove('right0');
    document.querySelector('.header-navbar').classList.remove('display-block');
})

document.querySelector('.header--close-man423').addEventListener('click', function() {
    document.querySelector('.khoi-navbar--header').classList.remove('right0');
    document.querySelector('.header-navbar').classList.remove('display-block');
})

document.querySelector('.khoi-navbar--header').addEventListener('click', function() {
    document.querySelector('.khoi-navbar--header').classList.remove('right0');
    document.querySelector('.header-navbar').classList.remove('display-block');
})

document.querySelector('.header-navbar').addEventListener('click', function(e) {
    e.stopPropagation();
})


document.querySelector('.fa-solid.fa-chevron-down').addEventListener('click', function(e) {
    e.preventDefault();
})

document.querySelector('.fa-solid.fa-chevron-down').addEventListener('click', function() {
    document.querySelector('.header-navbar__subnav--mobile').classList.toggle('display-block');
    document.querySelector('.fa-solid.fa-chevron-down').classList.toggle('fa-chevron-up');
})

document.querySelector('.icon-phu').addEventListener('click', function() {
    document.querySelector('.phu').classList.toggle('display-block');
    document.querySelector('.phu1').classList.remove('display-block');
    document.querySelector('.phu2').classList.remove('display-block');
    document.querySelector('.icon-phu').classList.toggle('fa-chevron-up');
    document.querySelector('.icon-phu1').classList.remove('fa-chevron-up');
    document.querySelector('.icon-phu2').classList.remove('fa-chevron-up');
})
document.querySelector('.icon-phu').addEventListener('click', function(e) {
    e.preventDefault();
})

document.querySelector('.icon-phu1').addEventListener('click', function(e) {
    e.preventDefault();
})
document.querySelector('.icon-phu2').addEventListener('click', function(e) {
    e.preventDefault();
})

document.querySelector('.icon-phu1').addEventListener('click', function() {
    document.querySelector('.phu1').classList.toggle('display-block');
    document.querySelector('.phu').classList.remove('display-block');
    document.querySelector('.phu2').classList.remove('display-block');
    document.querySelector('.icon-phu1').classList.toggle('fa-chevron-up');
    document.querySelector('.icon-phu').classList.remove('fa-chevron-up');
    document.querySelector('.icon-phu2').classList.remove('fa-chevron-up');
})

document.querySelector('.icon-phu2').addEventListener('click', function() {
    document.querySelector('.phu2').classList.toggle('display-block');
    document.querySelector('.phu1').classList.remove('display-block');
    document.querySelector('.phu').classList.remove('display-block');
    document.querySelector('.icon-phu2').classList.toggle('fa-chevron-up');
    document.querySelector('.icon-phu1').classList.remove('fa-chevron-up');
    document.querySelector('.icon-phu').classList.remove('fa-chevron-up');
})

window.addEventListener('scroll', function() {
    var heightTop = document.querySelector('.header--top').offsetHeight;

    var x = pageYOffset;
    if (x > heightTop) {
        document.querySelector('.header--bottom').classList.add('position');
    } else {
        document.querySelector('.header--bottom').classList.remove('position');
    }
});