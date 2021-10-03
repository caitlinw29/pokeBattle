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
    var moveName = this.event.path[0].childNodes[0].nodeValue   //goes through button path to find name of the move
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


//Use min and max to generate a random number within a range
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

// oscars array
var playerSpritesArray = [];
var cpuSpritesArray = [];
var container2 = document.getElementById('container2')

function showBattle(){
    
    container2.classList.remove('hidden');
    container1.classList.add('hidden'); 
}

//Make two randomized teams
function makeTeams() {
  //store the user input (1-6)
  var input = document.getElementById("numPokemon").value;
  var pokeArray = [];
  var opponentArray = [];
  //While loops make sure that the same pokemon isn't pulled twice
  while (pokeArray.length <= input - 1) {
    //Only using first generation pokemon, which is where 151 comes from
    var randomPokemon = getRandomNum(0, 151);
    //if the random number isn't already in the array, push it in
    if (pokeArray.indexOf(randomPokemon) === -1) {
      pokeArray.push(randomPokemon);
    }
  }
  while (opponentArray.length <= input - 1) {
    var randomPokemon = getRandomNum(0, 151);
    //check both arrays this time so there aren't a repeat pokemon across teams either
    if (
      opponentArray.indexOf(randomPokemon) === -1 &&
      pokeArray.indexOf(randomPokemon) === -1
    ) {
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
        var pokePic = document.createElement("img");
        pokePic.setAttribute("src", data.sprites.front_default);
        //Set p textcontent to be the name of the pokemon, with the first letter capitalized - 0 is the first letter capitalized and substring will hold the rest of the letters
        var pokeName = document.createElement("p");
        pokeName.textContent =
          data.name[0].toUpperCase() + data.name.substring(1);
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

       

       

        playerSpritesArray.push(data.sprites.front_default);
        

      });
  }

 

  setTimeout(function () {
    //  call a 1.5s setTimeout before the computer's team show up

    for (i = 0; i < input; i++) {
      //Set up a randomized team for the computer
      var opponentArrayInput = opponentArray[i];
      var opponentUrl =
        "https://pokeapi.co/api/v2/pokemon/" + opponentArrayInput;
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
          var pokeName = document.createElement("p");
          pokeName.textContent =
            data.name[0].toUpperCase() + data.name.substring(1);
          pokeName.className = "fade-in";
          var computerTeam = document.getElementById("computerTeam");
          computerTeam.classList.remove("hidden");

          //Append the divs to the computer section and the img and p tags to the div
          computerTeam.appendChild(container);
          container.appendChild(pokePic);
          container.appendChild(pokeName);

          cpuSpritesArray.push(data.sprites.front_default);
        });
    }
  }, 1500); //end of timeout

  //Oscar
function battleBtnDisplayTeams(){
// OU code for pulling in pokemon img's into image tags on battle page.
        //creating variables to manipulate the img tags for player and cpu teams
        var userTeamImg1 = document.getElementById("user-team-img-1");
        var userTeamImg2 = document.getElementById("user-team-img-2");
        var userTeamImg3 = document.getElementById("user-team-img-3");
        var userTeamImg4 = document.getElementById("user-team-img-4");
        var userTeamImg5 = document.getElementById("user-team-img-5");
        var userTeamImg6 = document.getElementById("user-team-img-6");

        var cpuTeamImg1 = document.getElementById("cpu-team-img-1");
        var cpuTeamImg2 = document.getElementById("cpu-team-img-2");
        var cpuTeamImg3 = document.getElementById("cpu-team-img-3");
        var cpuTeamImg4 = document.getElementById("cpu-team-img-4");
        var cpuTeamImg5 = document.getElementById("cpu-team-img-5");
        var cpuTeamImg6 = document.getElementById("cpu-team-img-6");


  userTeamImg1.setAttribute('src', playerSpritesArray[0]);
  userTeamImg2.setAttribute('src', playerSpritesArray[1]);
  userTeamImg3.setAttribute('src', playerSpritesArray[2]);
  userTeamImg4.setAttribute('src', playerSpritesArray[3]);
  userTeamImg5.setAttribute('src', playerSpritesArray[4]);
  userTeamImg6.setAttribute('src', playerSpritesArray[5]);

  cpuTeamImg1.setAttribute('src', cpuSpritesArray[0]);
  cpuTeamImg2.setAttribute('src', cpuSpritesArray[1]);
  cpuTeamImg3.setAttribute('src', cpuSpritesArray[2]);
  cpuTeamImg4.setAttribute('src', cpuSpritesArray[3]);
  cpuTeamImg5.setAttribute('src', cpuSpritesArray[4]);
  cpuTeamImg6.setAttribute('src', cpuSpritesArray[5]);




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
        container1.appendChild(battlePageBtn).addEventListener("click", showBattle);
    }, 3000)
}

console.log(pokeArray);
console.log(opponentArray);



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
    } if (userHealth.value === 0){
        function hasFaintedUser();
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
        function hasFaintedComputer();
    }
}




function hasFainted() { 
    // The location of individual Pokémon within the array can be identified with array
    // index, and removed when their HP goes to zero per the functions above.

// battleBtn.addEventListener("click", showBattle);
var container2 = document.getElementById("container2");

function showBattle(){
    container2.classList.remove("hidden");
    container1.classList.add("hidden");
}

var battleBtns = document.getElementsByClassName("battle-move");
for(var i=0; i<battleBtns.length; i++){
    battleBtns[i].addEventListener("click", movesBegin);
}

function movesBegin() {
    console.log("this is working yay");
    //!check with Zac to see what fainting is called, plug in as "movesBegin"
    if (movesBegin = true) {
        var yourBigPoke = document.getElementById("your-poke-image");
        // yourBigPoke.setAttribute("src", data.sprites.front_default);
    }
}  
}


//  Functions that loop through the images with class names stored in variables
// userImages and computerImages.  They are called by the functions above that check to
// see if a pokemon's hp has reached zero.  When it does, these functions are called and 
// their pictures are given dark overlays, meaning that they have 'fainted'.



var userImages = document.getElementsByClassName('userHpOverlay');

function hasFaintedUser(){
    for(var i = 0; i<userImages.length; i++){
        userImages[i].style.display = 'block';
    }
}

var computerImages = document.getElementsByClassName('compHpOverlay');

function hasFaintedComputer(){
    for(var i = 0; i<computerImages.length; i++)
        computerImages[i].style.display = 'block';
}

var notFainted = document.querySelectorAll('.compHpOverlay, .userHpOverlay');

function notFaintedYet(){
    notFainted.style.display = 'none';
}



