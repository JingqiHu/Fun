function changeImage()
{
element=document.getElementById('myimage')
if (element.src.match("bob2"))
  {
  element.src="bob1.jpg";
  }
else
  {
  element.src="bob2.jpg";
  }
}


