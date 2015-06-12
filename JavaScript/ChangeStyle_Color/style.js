function changeStyle(){
element=document.getElementById('new_style')
//0-2
num=Math.floor(Math.random()*3 + 0);

if (num==0){
element.style.color="Blue";
//element.style. ???
}
else if (num==1){
element.style.color="Green";

}
else{
element.style.color="Gray";
}

}


