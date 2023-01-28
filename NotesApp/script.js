const addBtn= document.getElementById('add');
const input= document.querySelector('.input textarea');
const notes = document.querySelector('.notes');

const colorInput = document.querySelector('#color');
const sizeInput = document.querySelector('#size');

addBtn.addEventListener('click',(e)=>{
    if(input.value === ''){
        alert('Please Enter a note.');
        box.remove();
    }

const box =document.createElement('div');
box.className='box';
const text=document.createElement('p');
const closeBtn = document.createElement('button');
notes.appendChild(box);
box.appendChild(text);
box.appendChild(closeBtn);
closeBtn.innerHTML = 'X';
closeBtn.addEventListener('click',()=>{
    box.remove();
})
text.innerHTML=input.value;
text.style.color=colorInput.value;
text.style.fontSize=sizeInput.value+'px';
if (input.value === text.innerHTML) {
        input.value=''
}
});
colorInput.addEventListener('change',()=>{
    input.style.color = colorInput.value;
});                 
sizeInput.addEventListener('change',()=>{
    input.style.fontSize = sizeInput.value + 'px';
});
