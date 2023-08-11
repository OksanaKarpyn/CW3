//let ingredients = document.querySelectorAll('.ingredients');
let ingredient = document.querySelectorAll('.ingredient');
//let bowls = document.querySelector('.bowls');
let bowl = document.querySelectorAll('.bowl');
let bottone = document.querySelector('.bottone');
let btn = document.querySelector('.btn');
let loadingHidden = document.querySelector('.loading-hidden');
let modalHidden = document.querySelector('.modal-hidden');
let modalBtn = document.querySelector('.modal-btn');
let ciotola = [];
ingredient.forEach(function(elem) {
    elem.addEventListener('click', function(){
        addIngredient(elem.textContent);
       console.log(elem.textContent);
    });
});

//aggiungere ingrediente
function addIngredient(ingredient){
    if(ciotola.length === bowl.length){
        ciotola.shift();
       
    }
    ciotola.push(ingredient);
    //bowl.innerHTML = ciotola;
    console.log(ciotola);

    bowl.forEach(function (bowlElem, index){ 
        if(bowl[index]){

            bowlElem.textContent = ciotola[index];
        }
    })
        //dopo inserimento di ingredienti
        if(ciotola.length === bowl.length){
            bottone.classList.remove('btn');
        }
    

}

btn.addEventListener('click',function(){
    loadingHidden.classList.remove('loading-hidden');
    setTimeout(loadingSettimeout,3000);
});

function loadingSettimeout(){
    loadingHidden.classList.add('loading-hidden');
    modalHidden.classList.remove('modal-hidden');
}

modalBtn.addEventListener('click',function(){
    modalHidden.classList.add('modal-hidden');
})