let em1=document.getElementById('1');
let i1=em1.getAttribute('src');
let func1=function(){
    alert(i1);
}
em1.onclick=func1;

let em2=document.getElementById('2');
let i2=em2.getAttribute('src');
let func2=function(){
    alert(i2);
}
em2.addEventListener('click',func2)
