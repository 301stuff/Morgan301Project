//selects the divs that contain the cards
var card = document.getElementsByClassName("cards");

// all of the card images
var cardValueArray = [
    {
        animal: "tiger",
        image: "images/Tiger1.jpg",
    },
    {
        animal: "frog",
        image: "images/Frog1.jpg",
    },
    {
        animal: "owl",
        image: "images/Owl1.jpg",
    },
    {
        animal: "dog",
        image: "images/Dog1.jpg",
    },
    {
        animal: "tiger",
        image: "images/Tiger1.jpg",
    },
    {
        animal: "frog",
        image: "images/Frog1.jpg",
    },
    {
        animal: "owl",
        image: "images/Owl1.jpg",
    },
    {
        animal: "dog",
        image: "images/Dog1.jpg",
    }
];

// runs initial JS on page load
window.onload = assignImages;

// function start(){
//     assignImages;
//     // randomizeCards;
// };


// This function assigns images to the cards
function assignImages(){
    for(var i = 0; i < card.length; i++){
        card[i].innerHTML = '<img src="' + cardValueArray[i].image + '" >';
    };
};

//event listener for all cards
for(var i = 0; i < card.length; i++){
    card[i].addEventListener("click", function()
    {
       this.classList.toggle("selected");
    }
    )};

    // function randomizeCards(){
    //     var random = Math.floor(Math.random() * card.length);
    //     return card[random];
    // }




// first click is selected card

// randomize assign
//logic that compares selected cards
//if match hide or remove cards with a status
// else cover ID and alert Try Again!
// update status class for each pair that is matched