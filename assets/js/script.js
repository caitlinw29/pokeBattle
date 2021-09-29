var moves_Electric = []

//10 fire
//11 water
//12 grass
//13 electric
//stop at id 16....17 are gen 2 types

var allTypes = []

var typesURL = "https://pokeapi.co/api/v2/type/";

    fetch(typesURL)
    .then(function (response) {
    
    return response.json();
    })

    .then(function (data) { 

    for(var i = 0 ; i < data.results.length; i++){
        if(i < 16){
            allTypes.push(data.results[i])
        }  
    }      
    })

console.log(allTypes);
        
// var genOneTypesURL = "https://pokeapi.co/api/v2/type/";

for(var j = 0; j < allTypes.length; j++){
    // console.log(allTypes[j]);
    
    // fetch(genOneTypesURL + j)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) { 
    //     console.log(data);
    // })
}

    






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
