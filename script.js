//References 
let project1 = document.querySelector("#project1");
let project2 = document.querySelector("#project2");
let project3 = document.querySelector("#project3");
let p1text = document.querySelector("#p1text");
let p2text = document.querySelector("#p2text");
let p3text = document.querySelector("#p3text");
let foot = document.querySelector("#contact");

p1text.style.display = "none"; 
p2text.style.display = "none"; 
p3text.style.display = "none"; 

for (let i=1; i<foot.children.length; i++) {
  foot.children[i].style.display = "none";
}



let profs = [document.querySelector("#person1"), document.querySelector("#person2"), document.querySelector("#person3")];
for (let i=0; i<profs.length; i++) {
  profs[i].onmouseover = function() {
    this.style.backgroundColor = "#EAE2B7";
    this.style.height = "220px";
  }
  profs[i].onmouseleave = function () {
    this.style.backgroundColor = "aliceblue";
    this.style.height = "170px";
  }
}


project1.onmouseover = function(){
  p1text.style.display = "block"; 
  
}
project1.onmouseleave = function(){
  p1text.style.display = "none"; 
  
}

project2.onmouseover = function(){
  p2text.style.display = "block"; 

}
project2.onmouseleave = function(){
  p2text.style.display = "none"; 

}
project3.onmouseover = function(){
  p3text.style.display = "block"; 

}
project3.onmouseleave = function(){
  p3text.style.display = "none"; 

}

foot.onmouseover = function() {
  this.style.height = "100px";
  this.style.width = "80%";
  this.style.left = "125px";
  for (let i=1; i<foot.children.length; i++) {
    foot.children[i].style.display = "block";
  }
}

foot.onmouseleave = function () {
  foot.style.height = "30px";
  foot.style.width = "200px";
  this.style.left = "550px";
  for (let i=1; i<foot.children.length; i++) {
    foot.children[i].style.display = "none";
  }
}


/*
let's put all our comments in here

Also at some point we have to replace filler text with actual information

I think maybe the section should only change color, not get bigger, because that way it would fix the size problems, and always be big enough for the text.

*/

