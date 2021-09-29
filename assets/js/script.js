//Use min and max to generatte a random number within a range
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

//Make two randomized teams
function makeTeams() {
    var yourTeam = document.getElementById("yourTeam");
    var computerTeam = document.getElementById("computerTeam");
    var input = document.getElementById("numPokemon").value;
    var pokeArray = [];
    var opponentArray = [];
    while(pokeArray.length <= input - 1){
        var randomPokemon = getRandomNum(0, 151);
        if(pokeArray.indexOf(randomPokemon) === -1) {
            pokeArray.push(randomPokemon);
        };
    }
    while(opponentArray.length <= input - 1){
        var randomPokemon = getRandomNum(0, 151);
        if(opponentArray.indexOf(randomPokemon) === -1) {
            opponentArray.push(randomPokemon);
        };
    }
    for(i=0; i<input; i++) {
        
        var pokeArrayInput = pokeArray[i];
        var pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeArrayInput;
        fetch(pokeUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) { 
            var container = document.createElement("div");
            var pokePic = document.createElement("img");
            pokePic.setAttribute("src", data.sprites.front_default);
            var pokeName = document.createElement ("p");
            pokeName.textContent = data.name;
            container.className = "inline-block";
            yourTeam.classList.remove("hidden");
                    
            yourTeam.appendChild(container);
            container.appendChild(pokePic);
            container.appendChild(pokeName);
        })
    }
    for(i=0; i<input; i++) {
        
        var opponentArrayInput = opponentArray[i];
        var opponentUrl = "https://pokeapi.co/api/v2/pokemon/" + opponentArrayInput;
        fetch(opponentUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) { 
            var container = document.createElement("div");
            var pokePic = document.createElement("img");
            pokePic.setAttribute("src", data.sprites.front_default);
            var pokeName = document.createElement ("p");
            pokeName.textContent = data.name;
            container.className = "inline-block";
            computerTeam.classList.remove("hidden");
           
            
                    
            computerTeam.appendChild(container);
            container.appendChild(pokePic);
            container.appendChild(pokeName);
        })
    }
    var chooseTeams = document.getElementById("chooseTeams");
    chooseTeams.className = "hidden";
    var battleBtn = document.createElement("button");
    battleBtn.textContent = "Battle!";
    battleBtn.className = "battle-btn";
    var container1 = document.getElementById("container1");
    container1.appendChild(battleBtn);
}

//yourTeam and computerTeam

var createTeams = document.getElementById("makeTeams");
createTeams.addEventListener("click", makeTeams);