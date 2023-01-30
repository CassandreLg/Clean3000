
// ------------
// NOM
// ------------

// Création de mon élément à ajouter (création du paragraphe) :
let pElement = document.createElement("p");

// Définition de mon élément (le contenu de mon paragraphe):
pElement.textContent = localStorage.getItem('nom');

// Ajout de mon élément dans le html, dans la div #resultat
let divElement = document.querySelector("#resultat");
divElement.appendChild(pElement);



// ------------
// DATE
// ------------

// Création de mon élément à ajouter :
let pElementDate = document.createElement("p");

// Définition de mon élément :
pElementDate.textContent = localStorage.getItem('dateintervention');

// Ajout de mon élément dans le html, dans la div #resultatDate
let divElementDate = document.querySelector("#resultatDate");
divElementDate.appendChild(pElementDate);



// ------------
// OBSERVATIONS
// ------------

// Variable ds laquelle j'enregistre la valeur du champ input
let observation = localStorage.getItem("observation");

// Création de mon élément à ajouter :
let pElementObservation = document.createElement("p");


// Définition de mon élément (si input observation rempli, j'affiche le contenu, sinon "Pas d'observation") :
if (observation) {
    pElementObservation.textContent = observation;
    } else {
    pElementObservation.textContent = "Pas d'observation";
    };

// Ajout de mon élément dans le html, dans la div #obs
let divElementObs = document.querySelector("#obs");
divElementObs.appendChild(pElementObservation);