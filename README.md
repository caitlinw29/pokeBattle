# PokéBattle!  Project No. 1

## The Concept, The Build, The Player Experience


### Deployed Link 
### https://caitlinw29.github.io/pokeBattle/




### The Concept

#### The idea for this project is simple: a straighforward game in which the user can randomly generate a "first generation" Pokémon and pit it against the computer player, which also generates a Pokémon at random.  The game is meant to be understandable and intuitive, with an 'HP' bar instead of a numeric score that changes in a way that the player can see as he/she progresses through the game.  In other words, there are no high scores, just a simple win/lose condition that is contingent upon the player defeating, or losing to, the randomly generated enemy Pokémon.  If the player wants to play again, he/she can do so after they have played against the computer.  No branches or paths for the player to get lost in, no dead ends, just one path for the player to use.


### The Build

#### The build was much more complicated that we, the team, had originally planned.  APIs provided the all of the information needed for each of the 151 Pokémon contained in the first generation: images, moves, statistics, damage information, etc.  After basic layouts of the different pages were made, we focused on the back end to manipulate the Pokémon and their actions, forcing the HP bar for both the player and computer player to decrease in value when the respective player's Pokémon were dealt damage, generating a moveset for the player to choose from that was contingent on the 'type' of Pokémon that they randomly received, transitions for the chosen Pokémon to create a more dramatic effect, and so on.  While this was certainly a challenge to complete, much of our work was compromised or lost through various merges to our main branch on GitHub; when different conflicts were resolved, entire swaths of code disappeared, setting back hours of work.  In the end, we moved closer and closer to a basic MVP that would, at the very least, satisfy the basic concept of a game that pitted the player against a computer with random generation of Pokémon to make each experience unique, to a degree.


### The Player Experience

#### The user is greeted with a page with the title "PokéBattle" in text  that is strikingly similar to the original text found in the popular video game. After clicking the "Make Teams" button, two Pokémon are randomly generated, one that the player will use and on that the computer will use against the player.  The player then clicks the "Battle!" button, and then they are taken to the battle page.  The chosen Pokémon are made larger, with HP bars (hitpoint bars representing the life of the Pokémon) displayed underneath them.  Four moves for the player to choose from are generated under their Pokémon, and when they choose to make their first move, the battle begins.  Random math functions are used to determine if the moves they make "hit" the enemy Pokémon, with more functions deciding, at random, if the hits are "normal" or "direct", with the latter causing more damage than would normally be inflicted.  Once one of the Pokémon have "fainted" the player is taken to a page where they are told, depending on which Pokémon fainted, if they won or lost, with a button asking if the player wants to restart the game and play again.
