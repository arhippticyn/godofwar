const burgerMenu = document.getElementById('burger-menu')
const ul = document.getElementById('ul')
var endDate = new Date("Dec 31, 2024 23:59:59").getTime();
const lang = document.querySelector('.lang')
const langs = document.querySelector('.header-menu__languages')
const svg = document.getElementById('svg')
const title1 = document.getElementById('title1')
const title2 = document.getElementById('title2')
const title3 = document.getElementById('title3')
const price1 = document.getElementById('price1')
const price2 = document.getElementById('price2')
const price3 = document.getElementById('price3')
const buyBtn1 = document.getElementById('buy1')
const buyBtn2 = document.getElementById('buy2')
const buyBtn3 = document.getElementById('buy3')
const buyBtn4 = document.getElementById('buy4')
const buyBtn5 = document.getElementById('buy5')
const editionsTitle = document.getElementById('editionsTitle')
const modalPrice = document.getElementById('modalPrice')
const closebtn = document.getElementById('modalClose')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const videoBtn = document.getElementById('video-btn')
const video = document.getElementById('video')
const videoTitle = document.getElementById('video-title')
const checkSwitch = document.getElementById('switch')
const minPcTitle = document.getElementById('minPcTitle')
const recPcTitle = document.getElementById('recPcTitle')
const minPc = document.getElementById('minimum')
const recPc = document.getElementById('recommended')
const pcPrice = document.getElementById('pcPrice')
const stanPsTitle = document.getElementById('stanPsTitle')
const limPsTitle = document.getElementById('limPsTitle')
const checkSwitch2 = document.getElementById('switch2')
const stanPs = document.getElementById('standard')
const limPs = document.getElementById('limited')

burgerMenu.addEventListener('click', function(){
    ul.classList.toggle('show')
})


// Встановлюємо кінцеву дату
var endDate = new Date("Nov 8, 2024 23:59:59").getTime();

// Оновлюємо таймер кожну секунду
var timerInterval = setInterval(function() {

    // Поточний час
    var now = new Date().getTime();

    // Різниця між кінцевою датою і поточним часом
    var timeLeft = endDate - now;

    // Розраховуємо дні, години, хвилини і секунди
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Виводимо значення в HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Якщо таймер завершився
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
    }
}, 1000);




lang.addEventListener('click', function(){
    langs.classList.toggle('open')
    svg.classList.toggle('rotate')
})



buyBtn1.addEventListener('click', function() {
    modal.classList.add('opened')
    overlay.classList.add('opened')
    editionsTitle.textContent = title1.textContent
    modalPrice.textContent = price1.textContent
});

buyBtn2.addEventListener('click', function() {
    modal.classList.add('opened')
    overlay.classList.add('opened')
    editionsTitle.textContent = title2.textContent
    modalPrice.textContent = price2.textContent
});


buyBtn3.addEventListener('click', function() {
    modal.classList.add('opened')
    overlay.classList.add('opened')
    editionsTitle.textContent = title3.textContent
    modalPrice.textContent = price3.textContent
});

buyBtn4.addEventListener('click', function() {
    modal.classList.add('opened')
    overlay.classList.add('opened')
    editionsTitle.textContent = title2.textContent
    modalPrice.textContent = pcPrice.textContent
});

buyBtn5.addEventListener('click', function() {
    modal.classList.add('opened')
    overlay.classList.add('opened')
    editionsTitle.textContent = title2.textContent
    modalPrice.textContent = pcPrice.textContent
});


closebtn.addEventListener('click', function() {
    modal.classList.remove('opened')
    overlay.classList.remove('opened')
});


videoBtn.addEventListener('click', function(){
    video.play()
    videoBtn.classList.add('hidden')
    video.classList.add('active')
    videoTitle.classList.add('hidden')
})


checkSwitch.addEventListener('click', function(){
    minPc.classList.toggle('active')
    recPc.classList.toggle('active')
    if(recPc.classList.contains('active')){
        minPcTitle.classList.toggle('active')
        recPcTitle.classList.toggle('active')
    } else {
        minPcTitle.classList.toggle('active')
        recPcTitle.classList.toggle('active')
    }
})


checkSwitch2.addEventListener('click', function(){
    stanPs.classList.toggle('active')
    limPs.classList.toggle('active')
    if(limPs.classList.contains('active')){
        stanPsTitle.classList.toggle('active')
        limPsTitle.classList.toggle('active')
    } else {
        stanPsTitle.classList.toggle('active')
        limPsTitle.classList.toggle('active')
    }
})