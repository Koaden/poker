

class Hand {
    constructor() {
        this.hand = [];  // Déclare un tableau vide
    }

    addCard(card) {
        this.hand.push(card);  // Ajoute la carte à 'this.hand'
    }

    removeCard(card) {
        let index = this.hand.indexOf(card);  // Recherche l'indice de la carte
        if (index !== -1) {
            this.hand.splice(index, 1);  // Supprime la carte à cet indice
        }
    }

    clearCards() {
        this.hand.length = 0;  // Vide le tableau 'this.hand'
    }

    toString() {
        return this.hand.map(card => card.toString()).join(', ');
    }
}

export default Hand;
