//target the button for making teams, then on click run the makeTeams function
var createTeams = document.getElementById("makeTeams");
createTeams.addEventListener("click", makeTeams);


//Use min and max to generatte a random number within a range
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