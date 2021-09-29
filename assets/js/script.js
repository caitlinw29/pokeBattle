//Use min and max to generatte a random number within a range
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

//Make two randomized teams
function makeTeams() {
    var main = document.getElementById("main");
    var input = document.getElementById("numPokemon").value;
    var pokeArray = [];
    while(pokeArray.length <= input - 1){
        var randomPokemon = getRandomNum(0, 151);
        if(pokeArray.indexOf(randomPokemon) === -1) {
            pokeArray.push(randomPokemon);
        };
    }
    for(i=0; i<input; i++) {
        
        var pokeArrayInput = pokeArray[i];
        var pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeArrayInput;
        fetch(pokeUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) { 
            
        
            var container = document.createElement("div");
            var pokePic = document.createElement("img");
            pokePic.setAttribute("src", data.sprites.front_default);
            var pokeName = document.createElement ("p");
            pokeName.textContent = data.name;
           
            
                    
            main.appendChild(container);
            container.appendChild(pokePic);
            container.appendChild(pokeName);
        })
    }
}

//yourTeam and computerTeam

var createTeams = document.getElementById("makeTeams");
createTeams.addEventListener("click", makeTeams);