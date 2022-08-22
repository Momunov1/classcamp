
    const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
});
    const html = document.querySelector('html')
    const check = document.querySelector('#checkbox')

    check.addEventListener('change', function (){
        html.classList.toggle('dark')
    })