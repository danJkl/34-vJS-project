const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile_img');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animated_bg = document.querySelectorAll('.animated_bg');
const animated_text = document.querySelectorAll('.animated_text');

setTimeout(showContent, 2000);

function showContent(){
    header.innerHTML=`<img src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg" alt="">`
    title.innerHTML=`Sofa`
    description.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id odit, ullam doloremque illum nobis.`
    profile_img.innerHTML=`<img src="https://randomuser.me/api/portraits/women/0.jpg" alt="">`
    seller_name.innerHTML=`Jessi`
    price.innerHTML=`Price 1400 usd`
    animated_bg.forEach(el=>el.classList.remove('animated_bg'));
    animated_text.forEach(el=>el.classList.remove('animated_text'));

}