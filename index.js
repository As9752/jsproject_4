const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const value=document.querySelector("h2");
var x=0;
btn1.addEventListener("click",(e)=>{
e.preventDefault();
if(x===-1)
{
  value.textContent=++x;
 value.style.color='black';
}
else if(x>=0){
// {

value.textContent=++x;
    value.style.color='green'; 
}
else if(x<-1)
{
  
  value.textContent=++x;
    value.style.color='red'; 
}
});
btn2.addEventListener("click",(e)=>{
e.preventDefault();

if(x<=0)
{
value.textContent=--x;
 value.style.color='red'; 
}
else if(x>1){
value.textContent=--x;
value.style.color='green'; 
}
else
{
  value.textContent=--x;
value.style.color='black'; 
}

});
