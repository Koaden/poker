import Colour from './Colour.js';
import Face from './Face.js';

class Card {
    constructor(colour, face) {
        this.colour = colour;
        this.face = face;
        this.value = face.value;
        this.name = `${face.name} of ${colour.getName()}`;
        this.shortName = `${face.getPrefix()}${colour.symbol}`;
    }

    toString() {
        return `${this.shortName} : ${this.name}`;
    }
}

export default Card;
