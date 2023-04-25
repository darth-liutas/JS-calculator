var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
var b3=document.getElementById("b3");
var b4=document.getElementById("b4");

var b5=document.getElementById("b5");
var b6=document.getElementById("b6");
var b7=document.getElementById("b7");
var b8=document.getElementById("b8");

var b9=document.getElementById("b9");
var divide=document.getElementById("divide");
var mult=document.getElementById("mult");
var sub=document.getElementById("sub");

var add=document.getElementById("add");
var equals=document.getElementById("equals");
var reset=document.getElementById("reset");
var bdelete=document.getElementById("delete");

var modulo=document.getElementById("percentage");
var b0=document.getElementById("b0");
var b00=document.getElementById("b00");
var bdot=document.getElementById(".");
var themebtn=document.getElementById("theme-btn");

var operation=document.getElementById("operation");

var result=document.getElementById("result");

var string_to_calculate="";

function update_string(){
	console.log(string_to_calculate);
	operation.innerHTML=string_to_calculate;
}




b1.onclick=function(){
	string_to_calculate+="1";
	update_string();
}
b2.onclick=function(){
	string_to_calculate+="2";
	update_string();
}
b3.onclick=function(){
	string_to_calculate+="3";
	update_string();
}
b4.onclick=function(){
	string_to_calculate+="4";
	update_string();
}
b5.onclick=function(){
	string_to_calculate+="5";
	update_string();
}
b6.onclick=function(){
	string_to_calculate+="6";
	update_string();
}
b7.onclick=function(){
	string_to_calculate+="7";
	update_string();
}
b8.onclick=function(){
	string_to_calculate+="8";
	update_string();
}
b9.onclick=function(){
	string_to_calculate+="9";
	update_string();
}
b0.onclick=function(){
	string_to_calculate+="0";
	update_string();
}
reset.onclick=function(){
	string_to_calculate="";
	update_string();
}
add.onclick=function(){
	string_to_calculate+="+";
	update_string();
}
mult.onclick=function(){
	string_to_calculate+="*";
	update_string();
}
sub.onclick=function(){
	string_to_calculate+="-";
	update_string();
}
divide.onclick=function(){
	string_to_calculate+="/";
	update_string();
}
bdelete.onclick=function(){
	string_to_calculate = string_to_calculate.substring(0, string_to_calculate.length - 1);
	
	update_string();
}
b00.onclick=function(){
	string_to_calculate+="00"
	update_string();
}
bdot.onclick=function(){
	string_to_calculate+="."
	update_string();
}
bdot.onclick=function(){
	string_to_calculate+="."
	update_string();
}
modulo.onclick=function(){
	string_to_calculate+="%"
	update_string();
}
themebtn.onclick=function(){
	if(hasClass(themebtn,"fa-moon")){
		console.log("to sun!");
		themebtn.classList.remove("fa-moon");
     themebtn.classList.add("fa-sun");
	document.body.style.color="black";
    document.getElementById("results-container").style.backgroundColor="white";
    document.getElementById("buttons-container").style.backgroundColor="rgb(245,245,245)";

    document.getElementById("buttons-container").style.backgroundColor="rgb(245,245,245)";
	}
	else if(hasClass(themebtn,"fa-sun")){
		console.log("to moon!");
    themebtn.classList.remove("fa-sun");
     themebtn.classList.add("fa-moon");
     document.getElementById("results-container").style.backgroundColor="rgb(54,71,79)";
     document.getElementById("buttons-container").style.backgroundColor="rgb(24,33,42)";

    
     document.body.style.color="white";
	}
}
function hasClass(element, clsName) {
        return(' ' + element.className + ' ').indexOf(' ' + clsName + ' ') > -1;
      }



equals.onclick=function(){
	if(Number.isInteger(eval(string_to_calculate)))
	{ 
		operation.innerHTML=eval(string_to_calculate);
}
else{
	operation.innerHTML=eval(string_to_calculate).toFixed(2);
}
	string_to_calculate=operation.innerHTML;
	update_string();
}