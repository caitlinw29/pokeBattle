<<<<<<< HEAD
//stop at id 16....17 are gen 2 types
//You have an array of each of the types of the moves
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');

let url = 'https://pokeapi.co/api/v2/type/';
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
	return typeArray;
}
=======
//stop at id 16....17 are gen 2 types.
var allMoves = []
>>>>>>> 0f5a6dd87e46a9067ab706f40d29fe89c1946a3b

// You run a function that chooses a random pokemon OR the user chooses the pokemon
// You already know the TYPE of the pokemon
// Use a switch case statement to choose WHICH of these retrieveType functions to run
// and then run these functions inside of them
// Then the textContent would display and you don't have to attach/associate these moves with a particular pokemon.

retrieveType(1).then((value) => {
	let randomizedNormalArray = [];
	let finalFourMoves = [];
	let genOneNormalMoves = 23;
	for (let i = 0; i < genOneNormalMoves; i++) {
		randomizedNormalArray.push(value[i]);
	}

	console.log(randomizedNormalArray);
	let currentIndex = randomizedNormalArray.length,
		randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[randomizedNormalArray[currentIndex], randomizedNormalArray[randomIndex]] =
			[randomizedNormalArray[randomIndex], randomizedNormalArray[currentIndex]];
	}
	for (let i = 0; i < 4; i++) {
        finalFourMoves.push(randomizedNormalArray[i]);
    
	}
    button1.textContent = finalFourMoves[0].name;
    button2.textContent = finalFourMoves[1].name;
    button3.textContent = finalFourMoves[2].name;
    button4.textContent = finalFourMoves[3].name;

});

// retrieveType(2).then((value) => {
// 	console.log(value);
// });

// retrieveType(3).then((value) => {
// 	console.log(value);
// });

// retrieveType(4).then((value) => {
// 	console.log(value);
// });
// retrieveType(5).then((value) => {
// 	console.log(value);
// });
// retrieveType(6).then((value) => {
// 	console.log(value);
// });
// retrieveType(7).then((value) => {
// 	console.log(value);
// });








//         console.log('what is this data', data)
//         for(var i = 0 ; i < data.results.length; i++){
//             var type = data.results[i].name;
//             // console.log(type);

// //MVP just one button to "attack".
// //game more based on types and moves that are super effective

//             if(type === "normal"){
//                 var normalType = data.results[i].name;
//                 var numOfGenOneMoves = 23;
//                 console.log(normalType);
                
//                return fetchMoves(normalType, numOfGenOneMoves, someArray);

//             }

//             else if(type === "fighting"){
//                 var fightingType = data.results[i].name;
//                 var numOfGenOneMoves = 7;
//                 // console.log(fightingType);
//                 fetchMoves(fightingType, numOfGenOneMoves);
//             }


//             else if(type === "flying"){
//                 var flyingType = data.results[i].name;
//                 var numOfGenOneMoves = 7;
//                 // console.log(flyingType);
//                 fetchMoves(flyingType, numOfGenOneMoves);
//             }

//             else if(type === "poison"){
//                 var poisonType = data.results[i].name;
//                 var numOfGenOneMoves = 7;
//                 // console.log(poisonType);
//                 fetchMoves(poisonType, numOfGenOneMoves);
//             }

//             else if(type === "ground"){
//                 var groundType = data.results[i].name;
//                 var numOfGenOneMoves = 6;
//                 // console.log(groundType);
//                 fetchMoves(groundType, numOfGenOneMoves);
//             }

//             else if(type === "rock"){
//                 var rockType = data.results[i].name;
//                 var numOfGenOneMoves = 4;
//                 // console.log(rockType);
//                 fetchMoves(rockType, numOfGenOneMoves);
//             }

//             else if(type === "bug"){
//                 var bugType = data.results[i].name;
//                 var numOfGenOneMoves = 7;
//                 // console.log(bugType);
//                 fetchMoves(bugType, numOfGenOneMoves);
//             }

//             else if(type === "ghost"){
//                 var ghostType = data.results[i].name;
//                 var numOfGenOneMoves = 4;
//                 // console.log(ghostType);
//                 fetchMoves(ghostType, numOfGenOneMoves);
//             }

//             else if(type === "fire"){
//                 var fireType = data.results[i].name;
//                 var numOfGenOneMoves = 5;
//                 // console.log(fireType);
//                 fetchMoves(fireType, numOfGenOneMoves);
//             }

//             else if(type === "water"){
//                 var waterType = data.results[i].name;
//                 var numOfGenOneMoves = 9;
//                 // console.log(waterType);
//                 fetchMoves(waterType, numOfGenOneMoves);
//             }

//             else if(type === "grass"){
//                 var grassType = data.results[i].name;
//                 var numOfGenOneMoves = 10;
//                 // console.log(grassType);
//                 fetchMoves(grassType, numOfGenOneMoves);
//             }

//             else if(type === "electric"){
//                 var electricType = data.results[i].name;
//                 var numOfGenOneMoves = 5;
//                 // console.log(electricType);
//                 fetchMoves(electricType, numOfGenOneMoves);
//             }

//             else if(type === "psychic"){
//                 var psychicType = data.results[i].name;
//                 var numOfGenOneMoves = 4;
//                 // console.log(psychicType);
//                 fetchMoves(psychicType, numOfGenOneMoves);
//             }

//             else if(type === "ice"){
//                 var iceType = data.results[i].name;
//                 var numOfGenOneMoves = 5;
//                 // console.log(iceType);
//                 fetchMoves(iceType, numOfGenOneMoves);
//             }

//             else if(type === "dragon"){
//                 var dragonType = data.results[i].name;
//                 var numOfGenOneMoves = 4;
//                 // console.log(dragonType);
//                 fetchMoves(dragonType, numOfGenOneMoves);
//             }

//         }      
//     })
// }



// async function fetchMoves(type, numMoves, someArray){
    
//     var genOneTypesURL = "https://pokeapi.co/api/v2/type/" + type;
//     await fetch(genOneTypesURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) { 
//         //console.log(data);
//         //Pushes all the moves of given type into an array
//         for(var i = 0; i < numMoves; i++ ){
//             var pokemonMove = data.moves[i].name;

//             if(type === "normal"){
//                 return someArray.push(pokemonMove);
//             }
//             else if(type === "fighting"){
//                 fightingMoves.push(pokemonMove);
//             }
//             else if(type === "flying"){
//                 flyingMoves.push(pokemonMove);
//             }
//             else if(type === "poison"){
//                 poisonMoves.push(pokemonMove);
//             }
//             else if(type === "ground"){
//                 groundMoves.push(pokemonMove);
//             }
//             else if(type === "rock"){
//                 rockMoves.push(pokemonMove);
//             }
//             else if(type === "bug"){
//                 bugMoves.push(pokemonMove);
//             }
//             else if(type === "ghost"){
//                 ghostMoves.push(pokemonMove);
//             }
//             else if(type === "fire"){
//                 fireMoves.push(pokemonMove);
//             }
//             else if(type === "water"){
//                 waterMoves.push(pokemonMove);
//             }
//             else if(type === "grass"){
//                 grassMoves.push(pokemonMove);
//             }
//             else if(type === "electric"){
//                 electricMoves.push(pokemonMove);
//             }
//             else if(type === "psychic"){
//                 psychicMoves.push(pokemonMove);
//             }
//             else if(type === "ice"){
//                 iceMoves.push(pokemonMove);
//             }
//             else if(type === "dragon"){
//                 dragonMoves.push(pokemonMove);
//             }
//             else{
//                 allMoves.push(pokemonMove);
//             }
//         }
        // //Loops through all the moves in the array and randomizes 4 moves
        // randomizeMoves(allMoves);
        // for(var j = 0; j < 4; j++){
        //     console.log(allMoves[j]);
        // }
//     })
// }
// console.log(normalMoves);
// console.log(fightingMoves);
// console.log(flyingMoves);
// console.log(poisonMoves);
// console.log(groundMoves);
// console.log(rockMoves);
// console.log(bugMoves);
// console.log(ghostMoves);
// console.log(fireMoves);
// console.log(waterMoves);
// console.log(grassMoves);
// console.log(electricMoves);
// console.log(psychicMoves);
// console.log(iceMoves);
// console.log(dragonMoves);
// console.log(allMoves);

// console.log(normalMoves[0]);


// //Uses Fisher-Yates Shuffle to randomize moves
//  function randomizeMoves(allMoves){
//     var m = allMoves.length, t, i;

//     while (m) {
//       i = Math.floor(Math.random() * m--);
//       t = allMoves[m];
//       allMoves[m] = allMoves[i];
//       allMoves[i] = t;
//     }
//     return allMoves;
//  }

//  fetchTypes();   

    
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
