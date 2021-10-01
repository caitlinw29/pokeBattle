let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');


//Variable of user's pokemon...could also change to ID number if needed
var pokemonExampleType = "normal";

function fetchMoveData(){
    let url = 'https://pokeapi.co/api/v2/type/';
    
    //Fetches the moves of the type passed in
    async function retrieveType(type) {
        let typeArray = [];
        await fetch(url + type)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                data.moves.forEach((moves) => {
                    return typeArray.push(moves);
                });
            });
            // console.log(typeArray)
                return typeArray;
    }
    // console.log("Chosen PokemonType: " + pokemonExampleType);       //consoles which move type the pokemon is

    //Depending on the pokemon chosen, it's type will generate 4 random moves of the same type
    //Switch Statements include the type chosen, the number of moves included in the first generation, and a random array of 4 moves
    switch(pokemonExampleType){
        case "normal": {
            retrieveType(1).then((value) => {
                let randomizedArray = [];
                let finalFourMoves = [];
                let numOfGenOneMoves = 23;
                // console.log("Normal Moves");
                displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            });
            break;
        }
        case "fighting": {
             retrieveType(2).then((value) => {
                let randomizedArray = [];
                let finalFourMoves = [];
                let numOfGenOneMoves = 7;
                // console.log("Fighting Moves");
                displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            });
            break;
        }
        case "flying": {
            retrieveType(3).then((value) => {
               let randomizedArray = [];
               let finalFourMoves = [];
               let numOfGenOneMoves = 7;
            //    console.log("Flying Moves");
               displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
           });
           break;
        }
        case "poison": {
            retrieveType(4).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 7;
            // console.log("Poison Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "ground": {
            retrieveType(5).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 6;
            // console.log("Ground Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "rock": {
            retrieveType(6).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 4;
            // console.log("Rock Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "bug": {
            retrieveType(7).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 7;
            // console.log("Bug Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "ghost": {
            retrieveType(8).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 4;
            // console.log("Ghost Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "fire": {
            retrieveType(10).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 5;
            // console.log("Fire Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "water": {
            retrieveType(11).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 9;
            // console.log("Water Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "grass": {
            retrieveType(12).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 10;
            // console.log("Grass Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "electric": {
            retrieveType(13).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 5;
            // console.log("Electric Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "psychic": {   //One possible issue to address later is Hypnosis Move doesn't do damage but puts enemy pokemon to sleep
            retrieveType(14).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 4;
            // console.log("Psychic Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "ice": {
            retrieveType(15).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 5;
            // console.log("Ice Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "dragon": {
            retrieveType(16).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 4;
            // console.log("Dragon Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
    }
}
 
//Takes the values from chosen switch statement. Shuffles the total number of moves per type
//Then pushes the moves into randomizedArray. Then the first 4 values of that array are chosen
//and displayed as each button.
function displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves){
    for (let i = 0; i < numOfGenOneMoves; i++) {
        randomizedArray.push(value[i]);
    }
    // console.log(randomizedArray);
    let currentIndex = randomizedArray.length;

    
    //Shuffles all the moves in the type array
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [randomizedArray[currentIndex], randomizedArray[randomIndex]] =
            [randomizedArray[randomIndex], randomizedArray[currentIndex]];
    }

    //Picks the first 4 index values of the shuffled array and displays them to each button
    for (let i = 0; i < 4; i++) {
        finalFourMoves.push(randomizedArray[i]);
    }
    // console.log(finalFourMoves);        //consoles the 4 random pokemon moves
    //Each button is named after a move
    button1.textContent = finalFourMoves[0].name;
    button2.textContent = finalFourMoves[1].name;
    button3.textContent = finalFourMoves[2].name;
    button4.textContent = finalFourMoves[3].name;
};

//When user clicks on a move button it brings up the power of the move
function movePower(){
    var moveName = this.event.path[0].childNodes[0].nodeValue   //goes through button path to find name of the move
    console.log(moveName);
    var powerURL = "https://pokeapi.co/api/v2/move/" + moveName;

    fetch(powerURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) { 
        // console.log(data);      //Consoles the data path which shows attack move
        var power = data.power;
        if(power === null){
            var hitOrMiss = Math.floor(Math.random() * 2);  //some moves return null because they don't do damage...in this game they have a 50/50 chance of missing or damaging 50
            console.log(hitOrMiss);
            if(hitOrMiss === 0){
                console.log("Pokemon Missed!");
            }
            else{
                power = 50;
            }
        }
        // console.log(power);
        loseHP(power);
    })
}


let health = document.getElementById('health');

function loseHP(power){
    console.log("Current HP: " + health.value);
    console.log("Damage done: "  + power);
    health.value -= power;
    console.log("HP left: " + health.value);
    if(health.value === 0){
        console.log("Pokemon Fainted");
    }


}






fetchMoveData();

//Not sure If i need lines 221 to 279 but will keep for now.

// //Gets pokemon name and it's type. Could use later with the move type arrays
// function userPokemonType(){
//     var userPokemon = "pikachu";
//     var userPokeURL = "https://pokeapi.co/api/v2/pokemon/" + userPokemon;
    
//     fetch(userPokeURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//         var userType = data.types[0].type.name
//         console.log("User Pokemon: " +userPokemon + " type: " + userType)
//         fetchMove(userPokemon, userType);
//     });
// }

// // function enemyPokemonType(){

// //     var enemyPokemon = "squirtle";
// //     var enemyPokeURL = "https://pokeapi.co/api/v2/pokemon/" + enemyPokemon;
    
// //     fetch(enemyPokeURL)
// //     .then(function (response) {
// //         return response.json();
// //     })
// //     .then(function (data) {
// //         console.log(data)
// //         var enemyType = data.types[0].type.name
// //         console.log("Enemy Pokemon: " + enemyPokemon + " type: " + enemyType)
// //         return enemyPokemon, enemyType;
// //     });
// // }
    
// function fetchMove(name, type){

//     var pokeMoveEx = 'razor-leaf';
//     var moveURL = "https://pokeapi.co/api/v2/move/" + pokeMoveEx;

//     fetch(moveURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//         var power = data.power
//         lostHP(pokeMoveEx, power);
//     });
// }

// function lostHP(pokeMoveEx, power){
//     console.log(pokeMoveEx + ": " + power);

//     var pokemonHitPoints = 200;
// }

// userPokemonType();
// enemyPokemonType();
//target the button for making teams, then on click run the makeTeams function




//Caitlins Code----------------------------------------------------------------------

// var createTeams = document.getElementById("makeTeams");
// createTeams.addEventListener("click", makeTeams);


// //Use min and max to generatte a random number within a range
// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1));
// }

// //Make two randomized teams
// function makeTeams() {
    
//     //store the user input (1-6)
//     var input = document.getElementById("numPokemon").value;
//     var pokeArray = [];
//     var opponentArray = [];
//     //While loops make sure that the same pokemon isn't pulled twice
//     while(pokeArray.length <= input - 1){
//         //Only using first generation pokemon, which is where 151 comes from
//         var randomPokemon = getRandomNum(0, 151);
//         //if the random number isn't already in the array, push it in
//         if(pokeArray.indexOf(randomPokemon) === -1) {
//             pokeArray.push(randomPokemon);
//         };
//     }
//     while(opponentArray.length <= input - 1){
//         var randomPokemon = getRandomNum(0, 151);
//         //check both arrays this time so there aren't a repeat pokemon across teams either
//         if(opponentArray.indexOf(randomPokemon) === -1 && pokeArray.indexOf(randomPokemon) === -1) {
//             opponentArray.push(randomPokemon);
//         };
//     }

//     //two for loops, one for user pokemon and one for computer pokemon
//     //for each number up to the user selected input number...
//     for(i=0; i<input; i++) {
//         //pull the current index value of the array...
//         var pokeArrayInput = pokeArray[i];
//         //plug that value into the url as the number for the random pokemon to pull the data for that pokemon...
//         var pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeArrayInput;
//         fetch(pokeUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) { 
//             //...create a div to store an img and p tag.
//             var container = document.createElement("div");
//             container.className = "inline-block";
//             //set the src to be the sprite image from the API call
//             var pokePic = document.createElement("img");
//             pokePic.setAttribute("src", data.sprites.front_default);
//             //Set p textcontent to be the name of the pokemon, with the first letter capitalized - 0 is the first letter capitalized and substring will hold the rest of the letters
//             var pokeName = document.createElement ("p");
//             pokeName.textContent = data.name[0].toUpperCase() + data.name.substring(1);
//             //Make the section visible
//             var yourTeam = document.getElementById("yourTeam");
//             yourTeam.classList.remove("hidden");
//             //Add animations to the image and text
//             pokePic.className = "fade-in";
//             pokeName.className = "fade-in";
            
//             //Add the div to the section, and the img and p to the div
//             yourTeam.appendChild(container);
//             container.appendChild(pokePic);
//             container.appendChild(pokeName);
//         })
//     }
//     setTimeout(function() {   //  call a 1.5s setTimeout before the computer's team show up                 
      
//         for(i=0; i<input; i++) {
//             //Set up a randomized team for the computer
//             var opponentArrayInput = opponentArray[i];
//             var opponentUrl = "https://pokeapi.co/api/v2/pokemon/" + opponentArrayInput;
//             fetch(opponentUrl)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) { 
//                 //create elements and set classes, text-content, and attributes
//                 var container = document.createElement("div");
//                 container.className = "inline-block";
//                 var pokePic = document.createElement("img");
//                 pokePic.setAttribute("src", data.sprites.front_default);
//                 pokePic.className = "fade-in";
//                 var pokeName = document.createElement ("p");
//                 pokeName.textContent = data.name[0].toUpperCase() + data.name.substring(1);
//                 pokeName.className = "fade-in";
//                 var computerTeam = document.getElementById("computerTeam");
//                 computerTeam.classList.remove("hidden");
                
//                 //Append the divs to the computer section and the img and p tags to the div
//                 computerTeam.appendChild(container);
//                 container.appendChild(pokePic);
//                 container.appendChild(pokeName);
//             })
//         }
//     }, 1500) //end of timeout

//     //Hide the "choose team size" input and "make teams" button
//     var chooseTeams = document.getElementById("chooseTeams");
//     chooseTeams.className = "hidden";

//     //Create the battle button
//     var battleBtn = document.createElement("button");
//     battleBtn.textContent = "Battle!";
//     battleBtn.className = "battle-btn";

//     //Append the button to the container
//     var container1 = document.getElementById("container1");
//     //call a 3s setTimeout before the battle button is made visible
//     setTimeout(function() {   
//         container1.appendChild(battleBtn);
//     }, 3000)
// }