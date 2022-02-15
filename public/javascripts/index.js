
const form =document.querySelectorAll("form")[0]
var hamburger=document.querySelector(".hamburger");
var navLinks =document.querySelector(".nav-links");
var links=document.querySelectorAll(".nav-links li");
var flashMsg=document.getElementsByClassName("msg-sent")[0]
let delBtn=document.querySelector(".msg-sent .del")


//*****Hamburger Open menu ******//
links.forEach(link=>{
    console.log(link)
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