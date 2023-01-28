const toggle = document.getElementById('toggle');
const wraper = document.getElementById('wraper');

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('show-nav');
    wraper.classList.toggle('wrap');
});


const open=document.getElementById('open');
const modal=document.getElementById('modal');
const close=document.getElementById('close');

open.addEventListener('click',()=>{
    modal.classList.add('show-modal');
});
close.addEventListener('click',()=>{
    modal.classList.remove('show-modal');
});
window.addEventListener('click',e=>e.target == modal ? modal.classList.remove('show-modal') : false);