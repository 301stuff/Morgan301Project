//selects the divs that contain the cards
var card = document.getElementsByClassName("cards");

// all of the card images
var cardValueArray = [
    {
        name: "tiger",
        image: "Images/Tiger1.jpg",
        story: "story/tiger.html"
    },
    {
        name: "frog",
        image: "Images/Frog1.jpg",
        story: "story/frog.html"
    },
    {
        name: "owl",
        image: "Images/Owl1.jpg",
        story: "story/owl.html"
    },
    {
        name: "dog",
        image: "Images/Dog1.jpg",
        story: "story/dog.html"
    },
    {
        name: "tiger",
        image: "Images/Tiger2.jpg",
        story: "story/tiger.html"
    },
    {
        name: "frog",
        image: "Images/Frog2.jpg",
        story: "story/frog.html"
    },
    {
        name: "owl",
        image: "Images/Owl2.jpg",
        story: "story/owl.html"
    },
    {
        name: "dog",
        image: "Images/Dog2.jpg",
        story: "story/dog.html"
    }
];

// var animalName = cardValueArray.name;
// counts how many cards have been selected
var count = 0; 

// empty var that will be used to match
var firstPick = "";
var secondPick = "";

// variable to prevent duplicate selection of same image
var firstClick = null


// runs initial JS on page load
window.onload = assignInfo;

// function start(){
//     assignImages;
//     // randomizeCards;
// };


// This function assigns images to the cards
function assignInfo(){
    for(var i = 0; i < card.length; i++){
        card[i].innerHTML = '<img src="' + cardValueArray[i].image + '" >';
        card[i].dataset.name = cardValueArray[i].name
        card[i].dataset.story = cardValueArray[i].story
    };
}

//event listener for all cards
for(var i = 0; i < card.length; i++){
    card[i].addEventListener("click", function(){
        if (count < 2){
            count++;
            if (count === 1){
                firstPick = this.dataset.name;
                this.classList.add("selected")
                
            } else{
            secondPick = this.dataset.name;
            this.classList.add("selected")
        }}
        if (firstPick !== "" && secondPick !== ""){
            if(firstPick === secondPick){
                alert("PERFECT PAIR!")
                window.location.assign(this.dataset.story)
            } else{
                alert("try again!")
                resetCards();
            }
        }
    })};



    // function to reset and remove selected class from cards
    function resetCards(){
        count = 0
        firstPick = ""
        secondPick = ""

        for(var i = 0; i < card.length; i++){
            card[i].classList.remove("selected");
        }
    }
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