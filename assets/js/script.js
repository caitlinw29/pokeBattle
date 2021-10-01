//stop at id 16....17 are gen 2 types.
var allMoves = []

function fetchTypes(){
    var typesURL = "https://pokeapi.co/api/v2/type/";
    
    fetch(typesURL)
    
    .then(function (response) {
        return response.json();
    })
    .then(function (data) { 
        for(var i = 0 ; i < data.results.length; i++){
            var type = data.results[i].name;
            console.log(type);

            //Have to search manually with types because I tried a for loop that would iterate by the index number 
            //But the results would change order sometimes
            // only 3 moves for ghost pokemon....use psychic moves for them....rock is the same with ground
            //didnt bother adding steel pokemon
            //dragon type only had 1 move..dragon rage
            //combined types when certain types didn't have atleast 4 moves 

            if(type === "normal"){
                var normalType = data.results[i].name;
                var numOfGenOneMoves = 23;
                // console.log(normalType);
                getMoves(normalType, numOfGenOneMoves);
            }

            else if(type === "fighting"){
                var fightingType = data.results[i].name;
                var numOfGenOneMoves = 7;
                // console.log(fightingType);
                getMoves(fightingType, numOfGenOneMoves);
            }


            else if(type === "flying" || type === "dragon"){
                var flyingType = data.results[i].name;
                var numOfGenOneMoves = 7;
                // console.log(flyingType);
                getMoves(flyingType, numOfGenOneMoves);
            }


            else if(type === "poison"){
                var poisonType = data.results[i].name;
                var numOfGenOneMoves = 8;
                // console.log(poisonType);
                getMoves(poisonType, numOfGenOneMoves);
            }

            else if(type === "ground" || type === "rock"){
                var groundType = data.results[i].name;
                var numOfGenOneMoves = 6;
                // console.log(groundType);
                getMoves(groundType, numOfGenOneMoves);
            }

            else if(type === "bug"){
                var bugType = data.results[i].name;
                var numOfGenOneMoves = 7;
                // console.log(bugType);
                getMoves(bugType, numOfGenOneMoves);
            }

            else if(type === "fire"){
                var fireType = data.results[i].name;
                var numOfGenOneMoves = 5;
                // console.log(fireType);
                getMoves(fireType, numOfGenOneMoves);
            }

            else if(type === "water"){
                var waterType = data.results[i].name;
                var numOfGenOneMoves = 9;
                // console.log(waterType);
                getMoves(waterType, numOfGenOneMoves);
            }

            else if(type === "grass"){
                var grassType = data.results[i].name;
                var numOfGenOneMoves = 10;
                // console.log(grassType);
                getMoves(grassType, numOfGenOneMoves);
            }


            else if(type === "electric"){
                var electricType = data.results[i].name;
                var numOfGenOneMoves = 5;
                // console.log(electricType);
                getMoves(electricType, numOfGenOneMoves);
            }

            else if(type === "psychic" || type === "ghost"){
                var psychicType = data.results[i].name;
                var numOfGenOneMoves = 15;
                // console.log(psychicType);
                getMoves(psychicType, numOfGenOneMoves);
            }

            else if(type === "ice"){
                var iceType = data.results[i].name;
                var numOfGenOneMoves = 5;
                // console.log(iceType);
                getMoves(iceType, numOfGenOneMoves);
            }
            else{
                console.log("Not pokemon type");
            }
        }      
    });
}

function getMoves(type, numMoves){
    var genOneTypesURL = "https://pokeapi.co/api/v2/type/" + type;
    fetch(genOneTypesURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) { 
        console.log(data);
        for(var i = 0; i < numMoves; i++ ){
            // console.log(data.moves[i].name);
            var pokemonMove = data.moves[i].name;
            console.log(pokemonMove);
            allMoves.push[pokemonMove];     //Doesn't push into array for some reason
        }
        // console.log(allMoves);      
    })   
}

 fetchTypes();   

    
//goals: get moves to push into allMoves array
//splice each categories into seaparate arrays
//link the pokemon type to the move type arrays
//once pokemon are linked with their types and moves then I can determine how much damage is done to their hp
//work on HP bar animation





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
var createTeams = document.getElementById("makeTeams");
createTeams.addEventListener("click", makeTeams);


//Use min and max to generate a random number within a range
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

//Make two randomized teams
function makeTeams() {
    
    //store the user input (1-6)
    var input = document.getElementById("numPokemon").value;
    var pokeArray = [];
    var opponentArray = [];
    //While loops make sure that the same pokemon isn't pulled twice
    while(pokeArray.length <= input - 1){
        //Only using first generation pokemon, which is where 151 comes from
        var randomPokemon = getRandomNum(0, 151);
        //if the random number isn't already in the array, push it in
        if(pokeArray.indexOf(randomPokemon) === -1) {
            pokeArray.push(randomPokemon);
        };
    }
    while(opponentArray.length <= input - 1){
        var randomPokemon = getRandomNum(0, 151);
        //check both arrays this time so there aren't a repeat pokemon across teams either
        if(opponentArray.indexOf(randomPokemon) === -1 && pokeArray.indexOf(randomPokemon) === -1) {
            opponentArray.push(randomPokemon);
        };
    }

    //two for loops, one for user pokemon and one for computer pokemon
    //for each number up to the user selected input number...
    for(i=0; i<input; i++) {
        //pull the current index value of the array...
        var pokeArrayInput = pokeArray[i];
        //plug that value into the url as the number for the random pokemon to pull the data for that pokemon...
        var pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeArrayInput;
        fetch(pokeUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) { 
            //...create a div to store an img and p tag.
            var container = document.createElement("div");
            container.className = "inline-block";
            //set the src to be the sprite image from the API call
            var pokePic = document.createElement("img");
            pokePic.setAttribute("src", data.sprites.front_default);
            //Set p textcontent to be the name of the pokemon, with the first letter capitalized - 0 is the first letter capitalized and substring will hold the rest of the letters
            var pokeName = document.createElement ("p");
            pokeName.textContent = data.name[0].toUpperCase() + data.name.substring(1);
            //Make the section visible
            var yourTeam = document.getElementById("yourTeam");
            yourTeam.classList.remove("hidden");
            //Add animations to the image and text
            pokePic.className = "fade-in";
            pokeName.className = "fade-in";
            
            //Add the div to the section, and the img and p to the div
            yourTeam.appendChild(container);
            container.appendChild(pokePic);
            container.appendChild(pokeName);
        })
    }
    setTimeout(function() {   //  call a 1.5s setTimeout before the computer's team show up                 
      
        for(i=0; i<input; i++) {
            //Set up a randomized team for the computer
            var opponentArrayInput = opponentArray[i];
            var opponentUrl = "https://pokeapi.co/api/v2/pokemon/" + opponentArrayInput;
            fetch(opponentUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) { 
                //create elements and set classes, text-content, and attributes
                var container = document.createElement("div");
                container.className = "inline-block";
                var pokePic = document.createElement("img");
                pokePic.setAttribute("src", data.sprites.front_default);
                pokePic.className = "fade-in";
                var pokeName = document.createElement ("p");
                pokeName.textContent = data.name[0].toUpperCase() + data.name.substring(1);
                pokeName.className = "fade-in";
                var computerTeam = document.getElementById("computerTeam");
                computerTeam.classList.remove("hidden");
                
                //Append the divs to the computer section and the img and p tags to the div
                computerTeam.appendChild(container);
                container.appendChild(pokePic);
                container.appendChild(pokeName);
            })
        }
    }, 1500) //end of timeout

    //Hide the "choose team size" input and "make teams" button
    var chooseTeams = document.getElementById("chooseTeams");
    chooseTeams.className = "hidden";

    //Create the battle button
    var battleBtn = document.createElement("button");
    battleBtn.textContent = "Battle!";
    battleBtn.className = "battle-btn";

    //Append the button to the container
    var container1 = document.getElementById("container1");
    //call a 3s setTimeout before the battle button is made visible
    setTimeout(function() {   
        container1.appendChild(battleBtn);
    }, 3000)
}



// Fainting/Win/Lose Conditions - Zac 

winCondition = false;
var hpWidth = 100;

var i = 0;
function loseHp() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("hpBar");
    hpWidth = 100;
    // hpWidth can change based on the attack that the defending pokemon endures
    var id = setInterval(frame, 10);
    function frame() {
      if (hpWidth >= 100) {
        clearInterval(id);
        i = 1;
      } else {
        hpWidth--; // The amount subtracted will coincide with the attack damage amount, the variable attack
                   // amount can be declared elsewhere and inserted here.
        elem.style.width = hpWidth + "%";
        elem.innerHTML = hpWidth  + "%";
      } 
    }
  }
}


var zeroHp = false;

function pokemonFaint(){
    while (zeroHp) {
        return;
    } if (hpWidth == 0){
        function hasFainted(){
            // Here we can write script forces the pokemon to 'leave' the screen, and its corresponding picture
            // to lose it's color/get covered.
            
        } 
    }
}




