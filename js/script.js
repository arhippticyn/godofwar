const mobileBurgerMenu = document.getElementById('mobile-burger-menu')
const burgerMenu = document.getElementById('burger-menu')
const burgerMenus = document.getElementById('burger-menus')
const burgerMenu1 = document.getElementById('burger-menu1')
const header = document.getElementById('header')
const ul = document.getElementById('ul')
const lang = document.querySelector('.lang')
const lang1 = document.querySelector('.lang1')
const langs = document.querySelector('.header-menu__languages')
const langs1 = document.querySelector('.mobile-burger-menu__languages')
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
const faqBtn1 = document.getElementById('faqBtn1')
const faqBtn2 = document.getElementById('faqBtn2')
const faqBtn3 = document.getElementById('faqBtn3')
const faqContent1 = document.getElementById('faqContent1')
const faqContent2 = document.getElementById('faqContent2')
const faqContent3 = document.getElementById('faqContent3')

console.log(langs1);


burgerMenu.addEventListener('click', function(){
    ul.classList.toggle('show')
})

burgerMenus.addEventListener('click',  function(){
    mobileBurgerMenu.classList.toggle('show-menu')
    header.classList.toggle('show')
})
burgerMenu1.addEventListener('click',  function(){
    header.classList.toggle('show-menu')
    mobileBurgerMenu.classList.toggle('show-menu')
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

lang1.addEventListener('click', function(){
    langs1.classList.toggle('open')
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
    videoBtn.classList.toggle('hidden')
    video.classList.toggle('active')
    videoTitle.classList.toggle('hidden')
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

faqBtn1.addEventListener('click', function(){
    faqContent1.classList.toggle('show-ques')
})

faqBtn2.addEventListener('click', function(){
    faqContent2.classList.toggle('show-ques')
})

faqBtn3.addEventListener('click', function(){
    faqContent3.classList.toggle('show-ques')
})


