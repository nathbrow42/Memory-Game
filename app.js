document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'black-eyed susan',
            img: 'images/black-eyed-susan.jpg'
        },
        {
            name: 'black-eyed susan',
            img: 'images/black-eyed-susan.jpg'
        },
        {
            name: 'blazing star',
            img: 'images/blazing-star.jpg'
        },
        {
            name: 'blazing star',
            img: 'images/blazing-star.jpg'
        },
        {
            name: 'butterfly weed',
            img: 'images/butterfly-weed.jpg'
        },
        {
            name: 'butterfly weed',
            img: 'images/butterfly-weed.jpg'
        },
        {
            name: 'dwarf lake iris',
            img: 'images/dwarf-lake-iris.jpg'
        },
        {
            name: 'dwarf lake iris',
            img: 'images/dwarf-lake-iris.jpg'
        },
        {
            name: 'purple coneflower',
            img: 'images/purple-coneflower.jpg'
        },
        {
            name: 'purple coneflower',
            img: 'images/purple-coneflower.jpg'
        },
        {
            name: 'trillium',
            img: 'images/trillium.jpg'
        },
        {
            name: 'trillium',
            img: 'images/trillium.jpg'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/cover-image.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    

    //check match
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.jpg');
            cards[optionTwoId].setAttribute('src', 'images/white.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/cover-image.jpg');
            cards[optionTwoId].setAttribute('src', 'images/cover-image.jpg');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId]);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    
    
    
    createBoard();

});