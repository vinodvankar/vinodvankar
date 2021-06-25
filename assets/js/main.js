const navLinks = document.querySelectorAll(".nav-link")
const mousecursor = document.querySelector('.cursor')
const audio = document.querySelector('.mouse-click')


// cusror mousemove
window.addEventListener('mousemove', cursor)
function cursor(e){
    mousecursor.setAttribute("style","top:"+(e.pageY - 16)+"px; left:"+(e.pageX - 16)+"px")
}

// mouse click sound 
window.addEventListener('click',()=>{
    audio.play()
})

// active navbar menuive
navLinks.forEach(navlink =>{
    navlink.addEventListener("click", ()=>{
        navlink.classList.toggle('active')
    })
})

// skills accordian page 

const skillsContent = document.getElementsByClassName('skills-content')
const skillsheader = document.querySelectorAll('.skills-header')

function accordion(){
    console.log(skillsContent.length);
    let classItemGet = this.parentNode.className
    for (i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close'
    }
    if(classItemGet === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
    console.log(classItemGet);
   
}

skillsheader.forEach((e) =>{
    e.addEventListener('click', accordion)
})

// animation with gsap

let tl = gsap.timeline()
tl.from(".name-heading", {duration: 1, x: -100})
  .from(".content-heading", { duration:1, x:100}, "-=1")
  .from(".social-links", { duration: 1,opacity: 0})


let tls = gsap.timeline({
    scrollTrigger: {
        Trigger: ".skills-container",
        start: "center bottom",
    }
})

tls.from(".skills-data", { duration: 2, opacity: 0})
    .from(".first-grid", { duration:1, x: -440, })
    .from(".second-grid", { duration:2, y: 550, },"-=1")
    .from(".third-grid", { duration:1, x: 440, },"-=2")