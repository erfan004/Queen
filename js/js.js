const header = document.querySelector('.header')
const showMenu = document.querySelector('.showMenu')
const closeMenu = document.querySelector('.close')
showMenu.addEventListener('click' , ()=>{
   header.style.height = 200 + "px"
   header.style.borderWidth = 2 + "px"
})
closeMenu.addEventListener('click' , ()=>{
    header.style.height = 0  + 'px'
    header.style.borderWidth = 0  + 'px'
})
function responsive(){
    if(window.innerWidth > 992){
        header.style.height = 30 + 'px'
    }
    else{
        header.style.height = 0 + 'px'
        header.style.borderWidth = 0  + 'px'
    }
}
const roger = document.querySelector('.roger')
const john = document.querySelector('.john')
const brian = document.querySelector('.brian')
const freddie = document.querySelector('.freddie');
let singer = document.querySelector('.singer')
let guitarist = document.querySelector('.guitarist')
let base = document.querySelector('.base')
let drum = document.querySelector('.drum')
singer.addEventListener('click' , function(){
   brian.style.display = 'none'
   roger.style.display = 'none'
   john.style.display = 'none'
   freddie.style.display  = 'block'
})
guitarist.addEventListener('click' , function(){
    roger.style.display = 'none'
    john.style.display = 'none'
    freddie.style.display  = 'none'
    brian.style.display = 'block'
})
drum.addEventListener('click' , function(){
    console.log('ok');
   brian.style.display = 'none'
   john.style.display = 'none'
   freddie.style.display  = 'none'
   roger.style.display = 'block'
})
base.addEventListener('click' , function(){
   brian.style.display = 'none'
   roger.style.display = 'none'
   freddie.style.display  = 'none'
   john.style.display = 'block'
})
let showMustGoOn =  document.querySelector('.showMustGoOn')
let wwry =  document.querySelector('.wwry')
let BR =  document.querySelector('.BR')
let killer =  document.querySelector('.Killer')
function playingBR(){
    BR.classList.add('coverRtt')
}
function stopedBR(){
    BR.classList.remove('coverRtt')
}
function playingWwry(){
    wwry.classList.add('coverRtt')
}
function stopedWwry(){
    wwry.classList.remove('coverRtt')
}
function playingKiller(){
    killer.classList.add('coverRtt')
}
function stopedKiller(){
    killer.classList.remove('coverRtt')
}
function playingSMGO(){
    showMustGoOn.classList.add('coverRtt')
}
function stopedSMGO() {
    showMustGoOn.classList.remove('coverRtt')
}
const scrollTop = document.querySelector('.scrollTop')
window.addEventListener('scroll' , function(){
   let top =  this.window.scrollY
   console.log(top);
   if(top > 500){
    scrollTop.style.left = 15 + 'px'
   }
   else {
    scrollTop.style.left = -50 + 'px'
   }
})
