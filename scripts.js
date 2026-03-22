// WAIT UNTIL PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {

//////////////////////
// MODAL GALLERY
//////////////////////

const images = [
"images/Bad up skillz doogles driemo 2 final.jpg",
"images/EMMU DEE JETU PANGOLIN final.jpg",
"images/UMP AWARDS WINNERS NAMADINGO.jpg",
"images/GAMBLING IMPACT 222.jpg",
"images/EDGERS LODGE GIBO PEARSON fnll mock.jpg",
"images/CHITOLIRO UMP  ARTIST IG ZARI.jpg",
"images/Christmas Party.jpg",
"images/umodzi logo.jpg",
"images/ZONKE 4 SALE fnl.jpg",
"images/Free Curved Paper Logo Mockup.jpg"

]

let currentIndex = 0

window.openModal = function(src){
currentIndex = images.indexOf(src)

document.getElementById("modal").style.display = "flex"
document.getElementById("modal-img").src = src
}

window.closeModal = function(){
document.getElementById("modal").style.display = "none"
}

window.nextImage = function(){
currentIndex = (currentIndex + 1) % images.length
document.getElementById("modal-img").src = images[currentIndex]
}

window.prevImage = function(){
currentIndex = (currentIndex - 1 + images.length) % images.length
document.getElementById("modal-img").src = images[currentIndex]
}

//////////////////////
// PORTFOLIO FILTER
//////////////////////

const filterButtons = document.querySelectorAll(".portfolio-filter button")
const works = document.querySelectorAll(".work")

filterButtons.forEach(btn => {

btn.addEventListener("click", () => {

filterButtons.forEach(b => b.classList.remove("active"))
btn.classList.add("active")

const filter = btn.dataset.filter

works.forEach(work => {

if(filter === "all" || work.classList.contains(filter)){
work.style.display = "block"
}
else{
work.style.display = "none"
}

})

})

})

//////////////////////
// REVEAL ANIMATION
//////////////////////

const reveals = document.querySelectorAll(".reveal")

function revealSections(){

const windowHeight = window.innerHeight

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top

if(elementTop < windowHeight - 100){
el.classList.add("active")
}

})

}

window.addEventListener("scroll", revealSections)
revealSections()

//////////////////////
// MOBILE MENU
//////////////////////

const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector("nav ul")

if(menuToggle){
menuToggle.addEventListener("click", ()=>{
navMenu.classList.toggle("show")
})
}

//////////////////////
// 3D PORTFOLIO HOVER
//////////////////////

document.querySelectorAll(".work").forEach(card => {

card.addEventListener("mousemove", (e)=>{

const rect = card.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

const centerX = rect.width/2
const centerY = rect.height/2

const rotateX = (y-centerY)/15
const rotateY = (centerX-x)/15

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`

})

card.addEventListener("mouseleave", ()=>{
card.style.transform = "rotateX(0) rotateY(0) scale(1)"
})

})

//////////////////////
// SCROLL PROGRESS BAR
//////////////////////

window.addEventListener("scroll", ()=>{

const scrollTop = document.documentElement.scrollTop

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight

const progress = (scrollTop / scrollHeight) * 100

document.getElementById("progress-bar").style.width = progress + "%"

})

//////////////////////
// THEME TOGGLE
//////////////////////

const themeBtn = document.getElementById("theme-toggle")

if(themeBtn){
themeBtn.addEventListener("click", ()=>{
document.body.classList.toggle("light-mode")
})
}

//////////////////////
// SMOOTH SCROLL (LENIS)
//////////////////////

const lenis = new Lenis({
duration:1.6,
smooth:true,
smoothTouch:true
});

function raf(time){
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute("href"))

if(target){
lenis.scrollTo(target)
}

})

})

//////////////////////
// EMAILJS
//////////////////////

emailjs.init("tGfbFkj5MBrnNaCBY")

const form = document.getElementById("contact-form")

if(form){

form.addEventListener("submit", function(e){

e.preventDefault()

emailjs
.sendForm("service_c2y2z0b","template_203vw6r",this)
.then(()=>{

document.getElementById("form-message").innerText =
"Message sent successfully🎉"

form.reset()

})
.catch(()=>{

document.getElementById("form-message").innerText =
"Failed to send message🤣🤣😂😂. Please try again"

})

})

}

})

//////////////////////
// PAGE LOADER
//////////////////////

window.addEventListener("load", ()=>{

setTimeout(()=>{

const loader = document.getElementById("loader")

if(loader){
loader.style.opacity = "0"

setTimeout(()=>{
loader.style.display = "none"
},500)

}

},1000)

})

// particles //
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle{

constructor(x,y,size,speedX,speedY){
this.x = x;
this.y = y;
this.size = size;
this.speedX = speedX;
this.speedY = speedY;
}

update(){

this.x += this.speedX;
this.y += this.speedY;

if(this.size > 0.2){
this.size -= 0.01;
}

}

draw(){

ctx.fillStyle = "#D4AF37";
ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.fill();

}

}

function createParticles(e){

for(let i=0;i<3;i++){

particlesArray.push(
new Particle(
e.x,
e.y,
Math.random()*5,
(Math.random()-0.5)*2,
(Math.random()-0.5)*2
)
)

}

}

window.addEventListener("mousemove",createParticles);

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=0;i<particlesArray.length;i++){

particlesArray[i].update();
particlesArray[i].draw();

if(particlesArray[i].size <=0.3){

particlesArray.splice(i,1);
i--;

}

}

requestAnimationFrame(animateParticles);

}

animateParticles();


// magnetic button //
document.querySelectorAll(".hero-btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect = btn.getBoundingClientRect();

const x = e.clientX - rect.left - rect.width/2;
const y = e.clientY - rect.top - rect.height/2;

btn.style.transform = `translate(${x*0.3}px,${y*0.3}px) scale(1.05)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0) scale(1)";

});

});


// 3D tilt on portfolio items //
document.querySelectorAll(".work").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width/2;
const centerY = rect.height/2;

const rotateX = (y-centerY)/12;
const rotateY = (centerX-x)/12;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"rotateX(0) rotateY(0) scale(1)";

});

});


// PAGE TRANSITION //
window.addEventListener("beforeunload",()=>{

document.getElementById("page-transition").style.transform =
"scaleY(1)";

});

// LOAD MORE WORKS //
const loadBtn = document.getElementById("loadMore");

if(loadBtn){

loadBtn.addEventListener("click",()=>{

document.querySelectorAll(".work.hidden").forEach((el,index)=>{

if(index < 6){
el.classList.remove("hidden");
}

});

loadBtn.style.display="none";

});

}

// STATS //
const counters = document.querySelectorAll(".counter");

const startCounter = (entry) => {

const counter = entry.target;

const target = +counter.getAttribute("data-target");

let count = 0;

const speed = target / 100;

const update = () => {

count += speed;

if(count < target){

counter.innerText = Math.floor(count);
requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

};

update();

};

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

startCounter(entry);

observer.unobserve(entry.target);

}

});

},{threshold:0.6});

counters.forEach(counter => observer.observe(counter));
