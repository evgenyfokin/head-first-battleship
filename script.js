'use strict'

let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },
    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss')
    }
};


let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,
    ships: [
        {locations: ['10', '20', '30'], hits: ['', '', '']},
        {locations: ['32', '33', '34'], hits: ['', '', '']},
        {locations: ['63', '64', '65'], hits: ['', '', '']},
    ],
    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess)
            if (index >= 0) {
                ship.hits[index] = 'hit';
                return true;
            }
        }
        return false;
    }
}

