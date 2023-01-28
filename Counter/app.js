let count = 0;

const btns = document.querySelectorAll(".btn")
const value = document.getElementById("count")

btns.forEach(function (btn){
btn.addEventListener("click", function (e) {
const btnc = e.currentTarget.classList;
if (btnc.contains('decrease')) {
    count--;
} else if (btnc.contains('increase')){
    count++;
} else{
    count=0;
}
if (count > 0 ){
    value.style.color = "green";
} else if (count < 0 ){
    value.style.color = "red"
} else{
    value.style.color = "black"
}
value.textContent= count;
});
});