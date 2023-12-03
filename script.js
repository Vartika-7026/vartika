console.log("hell0");
let p =0;


let like =document.getElementById("like");
let LIKE = document.getElementById("LIKE");
like.addEventListener("click",function(){
  if(like.style.display="block"){
    like.style.display="none"
    LIKE.style.display = "block";
  }
  });


LIKE.addEventListener("click",function(){
  if(LIKE.style.display="block"){
    LIKE.style.display="none"
    like.style.display = "block";
  }


})
 



let song = document.getElementsByClassName("song");
console.log(song.length+"song");
// console.log(song.[0]);
let slidesong = document.getElementsByClassName("slidesong");
console.log(slidesong.length+" this is slide");
console.log(slidesong);

let audio = document.getElementsByClassName("audio");
// let puse = document.querySelector(".puse")
let x = document.querySelectorAll("#myAudio");
let album = document.getElementById("album");
let trand = document.getElementById("trand");
let tranding = document.getElementById("tranding");
let home = document.getElementById("home");
let favourite= document.getElementById("favourite");
let favourit = document.getElementById("favourit");
let songcontainer = document.getElementById("songcontainer");
let input1 = document.getElementById("vol");
// input1.value ="100";
console.log(input1.value+"input")


favourite.addEventListener("click",function () {
  console.log("favourite");
  // favourit.style.display= "none";
  trand.style.display= "none";
  LIKE.style.display = "none";
  like.style.display = "block";
  slidesong[p].style.display="none"

  if(favourit.style.display=="block"){
    favourit.style.display= "none";
    LIKE.style.display="none";
      like.style.display="none";
  }
    else{
      favourit.style.display= "block";
    }
    
  });


album.addEventListener("click",function () {
  
  if(songcontainer.style.display=="block"){
    songcontainer.style.display= "none"}
    else{
      songcontainer.style.display= "block";
      // favourit.style.display= "none";
    }
    
  });



  home.addEventListener("click",function name(params) {
    params.preventDefault();
    trand.style.display= "none";
    songcontainer.style.display= "none";
    favourit.style.display= "none";
    like.style.display ="none";
    LIKE.style.display ="none";
    slidesong[p].style.display="none"
  })




  tranding.addEventListener("click",function (e) {
    e.preventDefault()
    // console.log("what happend")

    favourit.style.display= "none";
    LIKE.style.display = "none";
    like.style.display = "block";
    slidesong[p].style.display="none"
    if(trand.style.display=="block"){
      trand.style.display= "none";
      LIKE.style.display="none";
      like.style.display="none";
    }

      else{
        trand.style.display= "block";
      }
      
    });

  
let container = document.getElementById("container");

 
function next(num) {
 
  pauseAudio();
  LIKE.style.display="none";
  
  p = p + num;
  if (p == x.length) {
    p = 0;
    
  }
  if(p>x.length){
    p==0;
  }

  if (p < 0) {
    p = x.length - 1;}
  

  playAudio(p);
  like.style.display="block";
  slide(p)
  
}

//0k audio
function ok(p){
   
    playAudio(p)
  
}

function playAudio(p) {
  p =p;
  let m = x[p];

   m.addEventListener("timeupdate",()=>{
    console.log("timeupda")
    let progress = parseInt((m.currentTime/m.duration)*100);
    input1.value = progress;
  })

  m.play();
}

function slide(p){
  for(let y of slidesong){
    console.log(p +"slide")
    y.style.display = "none"
    slidesong[p].style.display = "block";
  }
}


function pauseAudio() {
  console.log(p + "music is stop")
  let m = x[p];
  m.pause();
} 

 
 
