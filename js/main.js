// ------------
// NOM
// ------------

const inputName = document.getElementById('name');

// Enregistrement de la valeur de l'input dans le local storage à chaque modif de l'input
inputName.addEventListener('input', () => {
    localStorage.setItem('nom', inputName.value);
});


// ------------
// DATE
// ------------

const inputDate = document.getElementById('date');

// Enregistrement de la valeur de l'input dans le local storage à chaque modif de l'input
inputDate.addEventListener('input', () => {
    localStorage.setItem('dateintervention', inputDate.value);
});



// ------------
// OBSERVATIONS
// ------------

const inputObservations = document.getElementById('observations');

// Enregistrement de la valeur de l'input dans le local storage à chaque modif de l'input
inputObservations.addEventListener('change', () => {
    localStorage.setItem('observation', inputObservations.value);
});