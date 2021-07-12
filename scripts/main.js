let NewInput = document.querySelector('input');
let list = document.querySelector('ul');
let button = document.querySelector('button');

button.onclick = function () {

   let textValueOfInput = NewInput.value;
   NewInput.value = '';

   let liItem = document.createElement('li');
   let spanElement = document.createElement('span');
   let buttonElement = document.createElement('button');

   liItem.appendChild(spanElement);
   spanElement.textContent = textValueOfInput;
   liItem.appendChild(buttonElement);
   buttonElement.textContent = 'delete';
   list.appendChild(liItem);

   buttonElement.onclick = function (e) {
      list.removeChild(liItem);
   }
   NewInput.focus();
}

