import Colour from './Colour.js';
import Face from './Face.js';
import Card from './Card.js';

// Fonction pour afficher une carte dans la page HTML
function displayCard(card,display) {
    // Créer un élément div pour représenter la carte
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    if (display == true){
        // Ajouter les parties de la carte (haut, centre, bas)
        const topLeft = document.createElement('div');
        topLeft.className = 'top-left';
        topLeft.textContent = `${card.shortName}`;

        const center = document.createElement('div');
        center.className = 'center';
        center.textContent = `${card.colour.symbol}`;

        const bottomRight = document.createElement('div');
        bottomRight.className = 'bottom-right';
        bottomRight.textContent = `${card.shortName}`;

        // Ajouter les éléments dans la carte
        cardElement.appendChild(topLeft);
        cardElement.appendChild(center);
        cardElement.appendChild(bottomRight);
    }
    else{
        const cardHide = document.createElement('div');
        cardHide.className = 'cardHide';
        cardElement.appendChild(cardHide);
    }
    // Ajouter la carte dans le conteneur de la page
    const cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(cardElement); 
}

// Créer une carte et l'afficher
const card = new Card(Colour.HEARTS, Face[11]); // Dame de cœur
displayCard(card, true);
displayCard(card, false);
