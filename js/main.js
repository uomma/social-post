'use strict'

console.log('hoal');

const title = document.querySelector('h1');
console.log(title);
title.innerHTML = 'cambio di testo';


const button = document.getElementById('testo');
console.log(button);


button.addEventListener('input', function(event){
 console.log(event.target.value);
 title.innerHTML=event.target.value;
})