const button = document.querySelector('#Burger');
const content = document.querySelector('#MenuNav');

button.addEventListener('click', function(){

   content.classList.toggle('content-hidden'); 
})