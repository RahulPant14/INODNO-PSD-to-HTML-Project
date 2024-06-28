

    


let button = document.getElementById("btn7");
let hide = document.querySelector(".hide");

button.addEventListener("click",function(){
   if(hide.style.display==="block"){
    hide.style.display = "none";
    button.innerHTML="Read More";}
    else {
        hide.style.display="block";
        button.innerHTML="Read Less";
    }
});

let btnmob = document.querySelector(".btn-mob");
let collapse = document.querySelector(".collapse");

btnmob.addEventListener("click", function(){

   if( collapse.style.display==="block"){
    console.log(12);
    collapse.style.display="none";
   }
   else{
    console.log(13);
    collapse.style.display="block";
   }
   
});


let readmore = document.getElementById("readmore");
let para = document.getElementById("p3");

readmore.addEventListener("click", function(){
    if(para.style.display=="block"){
        para.style.display="none"
        readmore.innerHTML="READ MORE";
    }
    else{
        para.style.display="block"
        readmore.innerHTML="READ LESS";
    }
});

let rdmore = document.getElementById("more")
let p2 = document.querySelector(".p2")

rdmore.addEventListener("click", function(e){
    e.preventDefault();
   
    if(p2.style.display==="block"){
        p2.style.display="none"
        rdmore.innerHTML="Read More"
    }
    else{
        p2.style.display="block"
        rdmore.innerHTML="Read Less"

    }
});

let rdmore1 = document.getElementById("more1")
let p0 = document.querySelector(".p0")

rdmore1.addEventListener("click", function(e){
    e.preventDefault();
   
    if(p0.style.display==="block"){
        p0.style.display="none"
        rdmore1.innerHTML="Read More"
    }
    else{
        p0.style.display="block"
        rdmore1.innerHTML="Read Less"

    }
});

let rdmore2 = document.getElementById("more2")
let p00 = document.querySelector(".p00")

rdmore2.addEventListener("click", function(e){
    e.preventDefault();
   
    if(p00.style.display==="block"){
        p00.style.display="none"
        rdmore2.innerHTML="Read More"
    }
    else{
        p00.style.display="block"
        rdmore2.innerHTML="Read Less"

    }
});

let rdmore3 = document.getElementById("more3")
let p000 = document.querySelector(".p000")

rdmore3.addEventListener("click", function(e){
    e.preventDefault();
   
    if(p000.style.display==="block"){
        p000.style.display="none"
        rdmore3.innerHTML="Read More"
    }
    else{
        p000.style.display="block"
        rdmore3.innerHTML="Read Less"

    }
});

