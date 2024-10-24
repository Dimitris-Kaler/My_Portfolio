
const form =document.querySelectorAll("form")[0]
var hamburger=document.querySelector(".hamburger");
var navLinks =document.querySelector(".nav-links");
var links=document.querySelectorAll(".nav-links li");
var flashMsg=document.getElementsByClassName("msg-sent")[0]
let delBtn=document.querySelector(".msg-sent .del")




//*****Hamburger Open menu ******//
links.forEach(link=>{
    link.addEventListener("click",()=>{
    if (window.innerWidth > 1200) {
        hamburger.classList.remove("open-hamburger") 
    }
    else{
        hamburger.classList.toggle("open-hamburger")
    }    
})
})



function open1(){
	navLinks.classList.toggle("open");
    //Hamburger effect
    hamburger.classList.toggle("open-hamburger")
    if(navLinks.classList.contains("open")){
        navLinks.style.height="200vh"
       

    }else{
        navLinks.style.height="0vh"
    }
}
for(let link of links){
 
    link.addEventListener("click",()=>{
        navLinks.classList.remove("open")
        navLinks.style.height="0vh"
    })
}

hamburger.addEventListener("click",open1);

/****CARUSEL SKILLS */
const sliders=document.querySelector(".skill-container");
let skillcards=document.getElementsByClassName("skill-card");
let scrollPerClick;
let imagePadding=20;
let scrollAmount=0
// let caruselLeftBtn=document.querySelector(".switchLeft")
// let caruselRightBtn=document.querySelector(".switchRight")
let skillName=document.getElementById("skillName")
let skillImage=document.getElementsByClassName("skill-image")

scrollPerClick=skillcards[0].clientWidth+imagePadding





// caruselLeftBtn.addEventListener("click",sliderScrollLeft)
// caruselRightBtn.addEventListener("click",sliderScrollRight)



// function sliderScrollLeft(){
//     sliders.scrollTo({
//         top:0,
//         left:(scrollAmount-=scrollPerClick),
//         behavior:"smooth"
//     });
//     if(scrollAmount<0){
//         scrollAmount=0;
//     }
// }

// function sliderScrollRight(){
//     if(scrollAmount<=sliders.scrollWidth-sliders.clientWidth){
//         sliders.scrollTo({
//             top:0,
//             left:(scrollAmount+=scrollPerClick),
//             behavior:"smooth"
//         })
//     }
// }

//APPEAR THE NAME OF THE SKILL AFTER HOVERING AT THE IMAGE

Array.from(skillcards).forEach((card)=>{
    card.addEventListener("mouseover",(event)=>{
        skillName.innerHTML=event.target.alt;
    })
    card.addEventListener("mouseout",()=>{
        skillName.innerHTML=""
    })
})






//*****Flash-msg*****//
if(!flashMsg==undefined){
    console.log(flashMsg)
if(flashMsg.innerHTML.length>0){
    setTimeout(()=>{
        flashMsg.style.visibility="hidden"
    },7000)
} }

//******Delete Btn in the flash msg*****//
delBtn.addEventListener("click",(event)=>{
        event.target.parentNode.style.visibility="hidden"
})



