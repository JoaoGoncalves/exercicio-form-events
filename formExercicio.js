/*
1 - esconder o form, e deixar visivel somente o botao NewItem
2 - Ao clicar no botao NewItem mostrar o form e esconder o botao
3 - escrevendo um novo produto e clicando no boto "Add", acrescentar novo item á lista, voltar a esconder o form e mostrar botao NovoItem
4 - ao clicar num item, verificar se tem a class 'complete', se tiver eliminar o item, senao aplicar a class complete, e mover para o final da lista
5 - apresentar no H2, inserindo dentro de uma tag <span> o numero de items por comprar
*/

///////// DECLARACAO DAS VARIAVEIS GLOBAIS
let newItemButton    = document.querySelector('#newItemButton');
let newItemForm      = document.querySelector('#newItemForm');
let showForm         = document.querySelector('#showForm');
let itemDescription  = document.querySelector('#itemDescription');
let addButton        = document.querySelector('#addButton');
let ul               = document.querySelector('ul');
let h2               = document.querySelector('h2');



// 1 - esconder o form, e deixar visivel somente o botao NewItem
newItemButton.className = 'show';
newItemForm.className ='hide';

// actualizar contador
refreshCounter();

//lista de eventos
showForm.addEventListener('click', displayForm, false);
newItemForm.addEventListener('submit', onSubmit, false);
ul.addEventListener('click', deleteCompleteItem, false);



//2 - Ao clicar no botao NewItem mostrar o form e esconder o botao

function displayForm (){
    newItemButton.className = 'hide';
    newItemForm.className ='show';

    itemDescription.focus();
}

//3 - escrevendo um novo produto e clicando no boto "Add", acrescentar novo item á lista, voltar a esconder o form e mostrar botao NovoItem

function onSubmit(e){

    let newItem = document.createElement('li');
    newItem.textContent = itemDescription.value;

    ul.insertBefore(newItem, ul.firstElementChild);
    
    newItemButton.className = 'show';
    newItemForm.className ='hide';
    
    itemDescription.value = '';

    refreshCounter();

    e.preventDefault();
};

//4 - ao clicar num item, verificar se tem a class 'complete', se tiver eliminar o item, senao aplicar a class complete, e mover para o final da lista

function deleteCompleteItem(e){

    //debugger;
    let itemClicked = e.target;

    /* if(e.target.localName === 'em'){
        itemClicked = e.target.parentElement;
    } */


    if(itemClicked.className === 'complete'){
        itemClicked.remove();
    } else {
        itemClicked.className = 'complete';
        ul.appendChild(itemClicked);
    }

    refreshCounter();
}


function refreshCounter(){

    /* let items = ul.children.length;
    let itemsComplete = ul.querySelectorAll('li.complete').length;
    let itemsNotComplete = items - itemsComplete; */

    let itemsNotComplete = ul.querySelectorAll('li:not(.complete)').length;


    h2.innerHTML =`<h2>Buy groceries <span> ${itemsNotComplete}</span></h2>`;


    console.log(itemsNotComplete);


}
