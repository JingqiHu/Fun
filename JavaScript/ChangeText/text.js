function changeText(){
element=document.getElementById('color')
//0-2
num=Math.floor(Math.random()*3 + 0);

if (num==0)
element.innerHTML="Blue";
else if (num==1)
element.innerHTML="Green";
else
element.innerHTML="yellow";	

}


