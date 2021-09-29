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
            if(type === "normal"){
                var normalType = data.results[i].name;
                var numOfGenOneMoves = 23;
                console.log(normalType);
                getMoves(normalType, numOfGenOneMoves);
            }
            
            if(type === "electric"){
                var electricType = data.results[i].name;
                var numOfGenOneMoves = 5;
                console.log(electricType);
                getMoves(electricType, numOfGenOneMoves);
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
        console.log(allMoves);      
    })   
}

 fetchTypes();   

    






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
