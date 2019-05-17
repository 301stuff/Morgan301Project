//selects the divs that contain the cards
var card = document.getElementsByClassName("cards");
var cardValue = ["A", "A", "B", "B", "C", "C", "D", "D"];

//event listener for all cards
for(var i = 0; i < card.length; i++){
    card[i].addEventListener("click", function()
    {
        alert("hello");
    }
    )};

