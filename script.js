/* EXO2 CHANGER LA COULEUR DU PARENT AU CLIC*/

let element = document.querySelectorAll('button');

for( let i = 0; i<element.length; i++){
  element[i].addEventListener('click', test);
  function test(){
    element[i].parentNode.style.backgroundColor = 'yellow';
  }
}


