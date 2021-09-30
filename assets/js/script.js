//stop at id 16....17 are gen 2 types
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
