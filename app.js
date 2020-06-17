// Código del Video de Traversy Media:
// Build a Filterable List With Vanilla JavaScript
// https://youtu.be/G1eW3Oi6uoc

// Filtrado de listas ul tipo directorio telefónico

// **********************************
// *********************************
// Nota Omar: Ver solución alternativa puesta en los comentarios
// del video de Traversy Media. Solución en:
// https://github.com/damian-balas/filterable-list/blob/master/main.js

// Usando el siguiente código

// const filterInput = document.querySelector('#filterInput');
// const names = [...document.querySelectorAll('.letter-group__name a')];
// const form = document.querySelector('.search-form');

// filterInput.focus();

// function filterName() {
//     const value = this.value.toUpperCase();
//     names.forEach(name =>
//         name.textContent.toUpperCase().includes(value) ? name.classList.remove('hide') : name.classList.add('hide')
//     );
// }

// filterInput.addEventListener('change', filterName);
// filterInput.addEventListener('keyup', filterName);
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
// });
// **********************************
// *********************************

// Get input element
const filterInput = document.getElementById('filterInput');

console.log(filterInput);

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    
    // Get the value of input
    let filterInputValue = filterInput.value.toUpperCase();
    console.log(filterInputValue);

    // Get names ul
    let ul = document.getElementById('names');
    // Get li's from ul

    
    let li = ul.querySelectorAll('li.collection-item');
    // Nota: li es un nodeList con los 12 li que se encuentran en la página
    // console.log(`tipo de li: ${typeof li}`);
    // console.log(li.length);

    // Loop through collection-items

    for (let i = 0; i < li.length; i++) {
        // Nota: [0] indica el primer elemento li (índice 0)
        let a  = li[i].getElementsByTagName('a')[0];
        console.log(`Valor de a: ${a.innerHTML}`);
        
        // If matched
        if (a.innerHTML.toUpperCase().indexOf(filterInputValue) > -1) {
            li[i].style.display = '';
        } else {
            // Nota: none tuns off the display of an element so that it has no 
            // effect on layout
            li[i].style.display = 'none';
        }
        
    }

    
}



