var squares=document.querySelectorAll(".Square");
var num=6;
var colors=arraycolors(num);
var span=document.querySelector("span");
var easy=document.querySelector(".easy");
var hard=document.querySelector(".hard");




function randomcolors(){
    
    var r =Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")" ;
}

function arraycolors(num)
{
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomcolors());
    }
        return arr;
    
}

var reset=document.querySelector(".reset");
var pc=pickcolor(colors.length);
var pickedcolor=colors[pc];
span.textContent=pickedcolor;
var h1=document.querySelector("h1");
var message=document.querySelector(".message");
function pickcolor(num){
    var random=Math.floor(Math.random()*num);
    return random;
}
reset.addEventListener('click',function(){
    colors=arraycolors(num);
    for (var i=0; i < squares.length; i++) {

     squares[i].style.background = colors[i]
    }
    pc=pickcolor(colors.length);
    pickedcolor=colors[pc];
    h1.style.background="steelblue";
    span.textContent=pickedcolor;
    reset.textContent="New Colors";
    message.textContent="";
});

for (var i=0; i < squares.length; i++) {

 squares[i].style.background = colors[i]
  
     squares[i].addEventListener('click', function() {
     
         var clickedColor = this.style.background;
       
            console.log(clickedColor,pickedcolor);      
         

         if(pickedcolor === clickedColor) {
             changecolor(pickedcolor);
             message.textContent="Correct";
             h1.style.background=clickedColor;
             reset.textContent="Play Again?";
           }

         else {
           this.style.backgroundColor = "black";
           
           message.textContent="Try Again";
         }
    });
}
function changecolor(color){
    for(var i=0;i<squares.length;i++)
        {
            squares[i].style.background = color;
        }
}

easy.addEventListener("click",function(){
   num=3;
    h1.style.background="steelblue";
   colors=arraycolors(num); 
   for(var i=0;i<squares.length;i++){
       if(colors[i]){
           squares[i].style.background=colors[i];
       }
       else{
           squares[i].style.display="none";
       }
   }
     pc=pickcolor(num);
 pickedcolor=colors[pc];
span.textContent=pickedcolor;
hard.classList.remove("selected");
easy.classList.add("selected");

    
});
hard.addEventListener("click",function(){
     h1.style.background="steelblue";
  easy.classList.remove("selected");
  hard.classList.add("selected");
  num=6;
     colors=arraycolors(num); 
   for(var i=0;i<squares.length;i++){
      
           squares[i].style.background=colors[i];
       
      
           squares[i].style.display="block";
       }
   
     pc=pickcolor(num);
 pickedcolor=colors[pc];
span.textContent=pickedcolor;
  
});