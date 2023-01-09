const input = document.getElementById('name');
const resultat  = document.getElementById('resultat');

// Enregistrement de la valeur de l'input dans le local storage à chaque modif de l'input
input.addEventListener('input', () => {
    localStorage.setItem('name', input.value);
});

// Enregistrement de la valeur de l'input qui est ds le local storage ds une constante pour essayer de l'afficher ensuite
const valeurInput = localStorage.getItem('name');


let nameClient = document.querySelector("#name").value;


// Création de mon élément à ajouter :
let pElement = document.createElement("p");

// Définition de mon élément :
pElement.id = "nouveauParagraphe";
pElement.textContent = "wahou un nouveau paragraphe";

// Ajout de mon élément dans le html, dans la div #resultat
let divElement = document.querySelector("#resultat");
divElement.appendChild(pElement);





// document.querySelectorAll("#presentation p");

// // Création de mon élément à ajouter :
// let pElement = document.createElement("p");

// // Définition de mon élément :
// pElement.id = "nouveauParagraphe";
// pElement.textContent = "Wahou un nouveau paragraphe";

// // Ajout de mon élément dans le html, dans la div #resultat
// let divElement = document.querySelector("#resultat");
// divElement.appendChild(pElement);
