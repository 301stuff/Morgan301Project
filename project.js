//selects the divs that contain the cards
var card = document.getElementsByClassName("cards");
var cardValue = ["A", "A", "B", "B", "C", "C", "D", "D"];
var selectedCard = getElementsByClassName("selected");

//event listener for all cards
for(var i = 0; i < card.length; i++){
    card[i].addEventListener("click", function()
    {
        this.className = "selected";      
    }
    )};
//assign values to cards
for(var i = 0; i < card.length; i++){
    card[i].innerHTML = cardValue[i];
};

// first click is selected card
var selectedCard 
// randomize assign
//logic that compares selected cards
//if match hide or remove cards with a status
// else cover ID and alert Try Again!
// update status class for each pair that is matched