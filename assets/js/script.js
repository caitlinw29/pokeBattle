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
    console.log("Chosen PokemonType: " + pokemonExampleType);

    //Depending on the pokemon chosen, it's type will generate 4 random moves of the same type
    //Switch Statements include the type chosen, the number of moves included in the first generation, and a random array of 4 moves
    switch(pokemonExampleType){
        case "normal": {
            retrieveType(1).then((value) => {
                let randomizedArray = [];
                let finalFourMoves = [];
                let numOfGenOneMoves = 23;
                console.log("Normal Moves");
                displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
                storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            });
            break;
        }
        case "fighting": {
             retrieveType(2).then((value) => {
                let randomizedArray = [];
                let finalFourMoves = [];
                let numOfGenOneMoves = 7;
                console.log("Fighting Moves");
                displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
                storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            });
            break;
        }
        case "flying": {
            retrieveType(3).then((value) => {
               let randomizedArray = [];
               let finalFourMoves = [];
               let numOfGenOneMoves = 7;
               console.log("Flying Moves");
               displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
               storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
           });
           break;
        }
        case "poison": {
            retrieveType(4).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 7;
            console.log("Poison Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "ground": {
            retrieveType(5).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 6;
            console.log("Ground Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "rock": {
            retrieveType(6).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 4;
            console.log("Rock Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "bug": {
            retrieveType(7).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 7;
            console.log("Bug Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "ghost": {
            retrieveType(8).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 4;
            console.log("Ghost Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "fire": {
            retrieveType(10).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 5;
            console.log("Fire Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "water": {
            retrieveType(11).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 9;
            console.log("Water Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "grass": {
            retrieveType(12).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 10;
            console.log("Grass Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "electric": {
            retrieveType(13).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 5;
            console.log("Electric Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "psychic": {   //One possible issue to address later is Hypnosis Move doesn't do damage but puts enemy pokemon to sleep
            retrieveType(14).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 4;
            console.log("Psychic Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "ice": {
            retrieveType(15).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 5;
            console.log("Ice Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
        });
        break;
        }
        case "dragon": {
            retrieveType(16).then((value) => {
            let randomizedArray = [];
            let finalFourMoves = [];
            let numOfGenOneMoves = 4;
            console.log("Dragon Moves");
            displayMoves(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
            storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves);
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
    console.log(finalFourMoves);
    //Each button is named after a move
    button1.textContent = finalFourMoves[0].name;
    button2.textContent = finalFourMoves[1].name;
    button3.textContent = finalFourMoves[2].name;
    button4.textContent = finalFourMoves[3].name;
};

//When user clicks on a move button it brings up the power of the move
function movePower(){
    var moveName = this.event.path[0].childNodes[0].nodeValue;   //goes through button path to find name of the move
    console.log(moveName);
    var powerURL = "https://pokeapi.co/api/v2/move/" + moveName;

    fetch(powerURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) { 
        console.log(data);
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
        console.log(power);
    })
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
var pokeArray = [];
var opponentArray = [];


// userPokemonType();
// enemyPokemonType();
//target the button for making teams, then on click run the makeTeams function



var createTeams = document.getElementById("makeTeams");
createTeams.addEventListener("click", makeTeams);
var pokeType; 
var cpuPokeType;


//Use min and max to generate a random number within a range
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

// oscars array
var playerSpritesArray = [];
var cpuSpritesArray = [];
var container2 = document.getElementById('container2');

var input;
//Make two randomized teams
function makeTeams() {
    
    //store the user input (1-6)
    input = document.getElementById("numPokemon").value;
    var pokeArray = [];
    var opponentArray = [];
    //clear previous battle pokemon
    localStorage.clear();
    //While loops make sure that the same pokemon isn't pulled twice
    while(pokeArray.length <= input - 1){
        //Only using first generation pokemon, which is where 151 comes from
        var randomPokemon = getRandomNum(0, 151);
        //if the random number isn't already in the array, push it in
        if(pokeArray.indexOf(randomPokemon) === -1) {
            pokeArray.push(randomPokemon);
        }
    }

  while (opponentArray.length <= input - 1) {
    var randomPokemon = getRandomNum(0, 151);
    //check both arrays this time so there aren't a repeat pokemon across teams either
    if (opponentArray.indexOf(randomPokemon) === -1 && pokeArray.indexOf(randomPokemon) === -1) {
      opponentArray.push(randomPokemon);
    }
  }

  //two for loops, one for user pokemon and one for computer pokemon
  //for each number up to the user selected input number...
  for (i = 0; i < input; i++) {
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
        var img = document.createElement("img");
        var pokePic = data.sprites.front_default;
        img.setAttribute("src", pokePic);
        //Set p textcontent to be the name of the pokemon, with the first letter capitalized - 0 is the first letter capitalized and substring will hold the rest of the letters
        var p = document.createElement("p");
        var pokeName = data.name[0].toUpperCase() + data.name.substring(1);
        p.textContent = pokeName;
        //Make the section visible
        var yourTeam = document.getElementById("yourTeam");
        yourTeam.classList.remove("hidden");
        //Add animations to the image and text
        img.className = "fade-in";
        p.className = "fade-in";

        pokeType = data.types[0].type.name;

        saveUserPokemon(pokeName, pokePic, pokeType);

        //Add the div to the section, and the img and p to the div
        yourTeam.appendChild(container);
        container.appendChild(img);
        container.appendChild(p);

        playerSpritesArray.push(data.sprites.front_default);
        
      })
  }

    //  call a 1.5s setTimeout before the computer's team shows up
    setTimeout(function () {
    
        for (i = 0; i < input; i++) {
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
                var img = document.createElement("img");
                var pokePic = data.sprites.front_default;
                img.setAttribute("src", pokePic);
                img.className = "fade-in";
                var p = document.createElement ("p");
                var pokeName = data.name[0].toUpperCase() + data.name.substring(1);
                p.textContent = pokeName;
                pokeName.className = "fade-in";
                var computerTeam = document.getElementById("computerTeam");
                computerTeam.classList.remove("hidden");

                pokeType = data.types[0].type.name;

                saveCpuPokemon(pokeName, pokePic, pokeType);
                
                //Append the divs to the computer section and the img and p tags to the div
                computerTeam.appendChild(container);
                container.appendChild(img);
                container.appendChild(p);

                cpuSpritesArray.push(data.sprites.front_default);

            })
        } 
    }, 1500) //end of timeout

    //function will display the teams on the battle page
    function battleBtnDisplayTeams(){ 
        //creating images for each pokemon on both the user team, and the cpu team
        //images appended to their containers, with the src pulled from the playerSpritesArray and cpuSpritesArray
        for (i=0; i<playerSpritesArray.length; i++) {
            var img = document.createElement("img");
            img.setAttribute("src", playerSpritesArray[i]);
            var playerTeam = document.getElementById("playerTeam");
            playerTeam.appendChild(img);
        }

        for (i=0; i<cpuSpritesArray.length; i++) {
            var img = document.createElement("img");
            img.setAttribute("src", cpuSpritesArray[i]);
            var cpuTeam = document.getElementById("cpuTeam");
            cpuTeam.appendChild(img);
        } 

        // Make userPokemonName the H2 text that will display the pokemon name
        var userPokemonName = document.getElementById('user-pokemon-name');
        //pull the name from storage
        var userPokeArray = JSON.parse(localStorage.getItem('userPokemon'));
        userPokemonName.textContent = userPokeArray[0].name;

        var cpuPokemonName = document.getElementById('cpu-pokemon-name');
        var cpuPokeArray = JSON.parse(localStorage.getItem('cpuPokemon'));
        cpuPokemonName.textContent = cpuPokeArray[0].name;

        var userPokemonPic = document.getElementById('your-poke-image');
        userPokemonPic.setAttribute('src',userPokeArray[0].picture);

        var cpuPokemonPic = document.getElementById('cpu-poke-image');
        cpuPokemonPic.setAttribute('src',cpuPokeArray[0].picture);


    }
    
    //Hide the "choose team size" input and "make teams" button
    var chooseTeams = document.getElementById("chooseTeams");
    chooseTeams.className = "hidden";

    //Create the battle button
    battlePageBtn = document.createElement("button");
    battlePageBtn.textContent = "Battle!";
    battlePageBtn.className = "battle-btn";

    //Append the button to the container
    var container1 = document.getElementById("container1");
    //call a 3s setTimeout before the battle button is made visible
    setTimeout(function() {   
        //After appending the button, if it is clicked, showBattle function runs
        container1.appendChild(battlePageBtn).addEventListener("click", showBattle);
        battlePageBtn.addEventListener("click", battleBtnDisplayTeams);
    }, 2000)
}


   


//Save the user pokemon in an array of objects. Each pokemon will have the name, picture, and type stored
var saveUserPokemon = function (pokeName, pokePic, pokeType) {
    var oldPokemon = JSON.parse(localStorage.getItem('userPokemon')) || [];
    var match = oldPokemon.find(function (pokemon) {
        return pokemon['name'] === pokeName;
    });
    if (match) {
        match['picture'] += pokePic;
        match['type'] += pokeType;
    } else {
        var newPokemon = {
            'name': pokeName,
            'picture': pokePic,
            'type': pokeType
        };
        oldPokemon.push(newPokemon);
    }
    localStorage.setItem('userPokemon', JSON.stringify(oldPokemon));

    console.log(oldPokemon);
};

//Save the cpu pokemon in an array of objects. Each pokemon will have the name, picture, and type stored
var saveCpuPokemon = function (pokeName, pokePic, pokeType) {
    var oldPokemon = JSON.parse(localStorage.getItem('cpuPokemon')) || [];
    var match = oldPokemon.find(function (pokemon) {
        return pokemon['name'] === pokeName;
    });
    if (match) {
        match['picture'] += pokePic;
        match['type'] += pokeType;
    } else {
        var newPokemon = {
            'name': pokeName,
            'picture': pokePic,
            'type': pokeType
        };
        oldPokemon.push(newPokemon);
    }
    localStorage.setItem('cpuPokemon', JSON.stringify(oldPokemon));

    console.log(oldPokemon);
};



// Fainting/Win/Lose Conditions - Zac 


// Functions for HP, user & computer.





// User HP

let userHealth = document.getElementById('userHealth');

function loseUserHp (power){
    userHealth.value -= power;
    console.log(userHealth.value);
    while (userHealth.value > 0) {
        notFaintedYet();
        return;
    } 
    if (userHealth.value === 0){
        hasFaintedUser();
    }
}


// Computer HP

let computerHealth =  document.getElementById('computerHealth');

function loseComputerHp (power){
    computerHealth.value -= power;
    console.log(computerHealth.value);
    while (computerHealth.value > 0){
        notFaintedYet();
        return;
    } if (computerHealth === 0){
        hasFaintedComputer();
    }
}




function hasFainted() { 
    // The location of individual Pokémon within the array can be identified with array
    // index, and removed when their HP goes to zero per the functions above.
}


function showBattle(){
    container2.classList.remove("hidden");
    container1.classList.add("hidden");
}

var battleBtns = document.getElementsByClassName("battle-move");
for(var i=0; i<battleBtns.length; i++){
    battleBtns[i].addEventListener("click", moveBegins);
}


function moveBegins() {
    console.log("this is working yay");

    
    var showTeam = document.getElementById("showTeam");
    // showTeam.classList.remove()
    var flipCoin = Math.floor(Math.random() * 2);
    if(flipCoin === 0){
        //input functionality of pokemon making a move and hp bar lowering
        completeCpuMove();
    }
    else{
        completeCpuMove();
        //input functionality of pokemon making a move and hp bar lowering
    }
    //!check with Zac to see what fainting is called, plug in as "movesBegin"
    if (moveBegins = true) {
        for(var i = 0; i<userImages.length; i++) {
            userImages[i].classList.add("overlay");
        }
        
        JSON.parse(localStorage.getItem("userPokemon"));
        var yourBigPoke = document.getElementById("your-poke-image");
        yourBigPoke.setAttribute("src", userPokemon[0].picture);
    } 
    if (hasFaintedComputer = true) {
        for(var i = 0; i<computerImages.length; i++) {
            computerImages[i].classList.add("overlay");
        }
    }

    completeCpuMove();
}

var cpuMove;
//save a bank of 4 moves from the CPU's type. Randomly select one of those moves, and store it to be used in the completeCpuMove function
function storeCpuMove(value, randomizedArray, finalFourMoves, numOfGenOneMoves) {
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
    for (let i = 0; i < 1; i++) {
        finalFourMoves.push(randomizedArray[i]);
    }
    
    //Create cpuMove by pulling a random move from the 4 CPU moves
    cpuMove = randomizedArray[i].name;
}

function completeCpuMove() {

}
 



//  Functions that loop through the images with class names stored in variables
// userImages and computerImages.  They are called by the functions above that check to
// see if a pokemon's hp has reached zero.  When it does, these functions are called and 
// their pictures are given dark overlays, meaning that they have 'fainted'.



var userImages = document.getElementsByClassName('overlay');

// function hasFaintedUser(){
//     for(var i = 0; i<userImages.length; i++){
//         userImages[i].style.display = 'block';
//     }
// }

var computerImages = document.getElementsByClassName('overlay');

// function hasFaintedComputer(){
//     // for(var i = 0; i<computerImages.length; i++) {
//     //     computerImages[i].style.display = 'block';
//     // }
// }
// var notFainted = document.querySelectorAll('.compHpOverlay, .userHpOverlay');

// function notFaintedYet(){
//     notFainted.style.display = 'none';
// }



