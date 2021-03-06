// List of puzzles
let movies = [


    "mulholland drive",
    "persona",
    "seven samurai",
    "taxi driver",
    "the godfather",
    "apocalypse now",
    "there will be blood",
    "pulp fiction",
    "stalker",
    "the tree of life",
    "dr. strangelove",
    "citizen kane",
    "vertigo",
    "in the mood for love",
    "the empire strikes back",
    "synecdoche new york",
    "eternal sunshine of the spotless mind",
    "the night of the hunter",
    "fanny and alexander",
    "rear window",
    "spirited away",
    "the good, the bad, and the ugly",
    "paris, texas",
    "the shining",
    "mirror",
    "chinatown",
    "goodfellas",
    "the silence of the lambs",
    "yi yi",
    "blue velvet",
    "andrei roublev",
    "a clockwork orange",
    "city lights",
    "lawrence of arabia",
    "brighter summer day",
    "the seventh seal",
    "chungking express",
    "it's a wonderful life",
    "the double life of veronique",
    "the third man",
    "punch-drunk love",
    "blade runner",
    "eraserhead",
    "it's such a beautiful day",
    "annie hall",
    "psycho",
    "alien",
    "one flew over the cuckoo's nest",
    "the big lebowski",
    "her",
    "the umbrellas of cherbourg",
    "playtime",
    "star wars",
    "back to the future",
    "once upon a time in the west",
    "nashville",
    "lost in translation",
    "boogie nights",
    "tokyo story",
    "magnolia",
    "au hasard balthazar",
    "children of men",
    "before sunset",
    "badlands",
    "rashomon",
    "brazil",
    "before sunrise",
    "breathless",
    "heaven's gate",
    "all that jazz",
    "modern times",
    "dazed and confused",
    "last year at marienbad",
    "casablanca",
    "pan's labyrinth",
    "days of heaven",
    "the royal tenenbaums",
    "three colors red",
    "the graduate",
    "eyes wide shut",
    "the passion of joan of arc",
    "rosemary's baby",
    "come and see",
    "the apartment",
    "rushmore",
    "the master",
    "the battle of algiers",
    "sunrise",
    "american beauty",
    "fargo",
    "close up",
    "the thin red line",
    "the red shoes",
    "grand illusion",
    "the lady vanishes",
    "amarcord",
    "beauty and the beast",
    "a night to remember",
    "the killer",
    "hard boiled",
    "walkabout",
    "this is spinal tap",
    "the silence of the lambs",
    "the naked kiss",
    "shock corridor",
    "dead ringers",
    "summertime",
    "robocop",
    "high and low",
    "alphaville",
    "the long good friday",
    "flesh for frankenstein",
    "blood for dracula",
    "picnic at hanging rock",
    "great expectations",
    "oliver twist",
    "nanook of the north",
    "diabolique",
    "the wages of fear",
    "time bandits",
    "branded to kill",
    "tokyo drifter",
    "armageddon",
    "henry v",
    "fishing with john",
    "lord of the flies",
    "taste of cherry",
    "the most dangerous game",
    "insomnia",
    "black orpheus",
    "nights of cabiria",
    "and the ship sails on",
    "yojimbo",
    "sanjuro",
    "for all mankind",
    "the unbearable lightness of being",
    "charade",
    "peeping tom",
    "the night porter",
    "autumn sonata",
    "monty python's life of brian",
    "carnival of souls",
    "the third man",
    "the blood of a poet",
    "the last temptation of christ",
    "the magic flute",
    "vagabond",
    "chasing amy",
    "brief encounter",
    "and god created woman",
    "the bank dick",
    "the element of crime",
    "variety lights",
    "hamlet",
    "the harder they come",
    "good morning",
    "pygmalion",
    "alexander nevsky",
    "ivan the terrible",
    "sisters",
    "kwaidan",
    "the blob",
    "fiend without a face",
    "black narcissus",
    "i know where I'm going",
    "all that heaven allows",
    "written on the wind",
    "do the right thing",
    "l'avventura",
    "gimme shelter",
    "cries and whispers",
    "the discreet charm of the bourgeoisie",
    "the lady eve",
    "double suicide",
    "spartacus",
    "coup de torchon",
    "mona lisa",
    "the rock",
    "the scarlet empress",
    "monsieur hulot's holiday",
    "mon oncle",
    "playtime",
    "big deal on madonna street",
    "my man godfrey",
    "rififi",
    "the hidden fortress",
    "diary of a chambermaid",
    "sullivan's travels",
    "withnail and i",
    "how to get ahead in advertising",
    "billy liar",
    "salesman",
    "grey gardens",
    "day of wrath",
    "ordet",
    "gertrud",
    "le trou",
    "the shop on main street",
    "closely watched trains",
    "the ruling class",
    "the vanishing",
    "rebecca",
    "spellbound",
    "notorious",
    "wild strawberries",
    "children of paradise",
    "the last wave",
    "that obscure object of desire",
    "loves of a blonde",
    "the fireman's ball",
    "the cranes are flying",
    "ballad of a soldier",
    "juliet of the spirits",
    "bob le flambeur",
    "traffic",
    "george washington",
    "the horse's mouth",
    "tokyo olympiad",
    "hearts and minds",
    "the importance of being earnest",
    "red beard",
    "under the roofs of paris",
    "ratcatcher",
    "hopscotch",
    "solaris",
    "man bites dog",
    "down by law",
    "monterey pop",
    "trouble in paradise",
    "contempt",
    "the life and death of colonel blimp",
    "band of outsiders",
    "fear and loathing in las vegas",
    "the lost honor of katharina blum",
    "my life as a dog",
    "straw dogs",
    "stolen kisses",
    "bed and board",
    "love on the run",
    "white sheik",
    "throne of blood",
    "jubilee",
    "night and fog",
    "schizopolis",
    "the honeymoon killers",
    "indiscretion of an american wife",
    "the marriage of maria braun",
    "veronika voss",
    "lola",
    "the pornographers",
    "through a glass darkly",
    "winter light",
    "the silence",
    "the devil and daniel webster",
]

// Display variables for HTML
let directionsText = document.getElementById("directions-text");
let remainingGuesses = document.getElementById("remainingGuesses-text");
let displaySplitChar = document.getElementById("displaySplitChar-text");
let chosenGuesses = document.getElementById("chosenGuesses-text");
let currentImage = document.getElementById("hangingMan");
let displayWins = document.getElementById("getWins-text");
let displayLosses = document.getElementById("getLosses-text");

// Variables used in game
let randomMovie = movies[Math.floor(Math.random() * movies.length)];
let splitChar = randomMovie.split("");
let wrongGuess = 6;
let chosen = [];
let puzzleTracker = [];
let wins = 0;
let losses = 0;
let whatImage = 1;

// Converts puzzles to an array of "_" to replace the letters
function hideMovie(randomMovie) {

    for (i = 0; i < splitChar.length; i++) {
        if (splitChar[i] === " " || splitChar[i] === "," || splitChar[i] === "-" || splitChar[i] === "'" || splitChar[i] === ".") {

        } else {
            splitChar[i] = "_";
        }
    }
}

// Allows for the display of spaces between words in the browser
function encodeWhiteSpaces(str) {
    return str.split('').map(function (c) {
        if (c === ' ') {
            return '&nbsp;&nbsp;'
        } else {
            return c;
        }
    }).join('');
}

alert("Welcome to the wild wild west, where justice is decided by a bizarre game of hangman from the future. I know, it doesn't make any sense. Press OK to try and slip the noose.")

// Starts first game and displays puzzle in browser
hideMovie(randomMovie);
directionsText.textContent = "Press any letter to make a guess.";
currentImage.setAttribute("src", "./assets/hangman1.png");
displaySplitChar.innerHTML = "Current puzzle:  " + encodeWhiteSpaces(splitChar.join(" "));
remainingGuesses.textContent = "You have " + wrongGuess + " remaining guesses.";
chosenGuesses.textContent = "So far, you have chosen the following letters: " + chosen.join(", ");
displayWins.textContent = "Wins: " + wins;
displayLosses.textContent = "Losses: " + losses;
puzzleTracker.push(movies.indexOf(randomMovie));

document.onkeyup = function (event) {

    let userGuess = event.key;
    let guessStatus = 0;
    const letters = /^[A-Za-z]+$/;

    // Produces new game and resets all variables
    function resetGame() {

        randomMovie = movies[Math.floor(Math.random() * movies.length)];

        // If statement prevents duplicating puzzles by pushing the index into a new array
        if (puzzleTracker.includes(movies.indexOf(randomMovie))) {
            resetGame();
        } else {
            puzzleTracker.push(movies.indexOf(randomMovie));
            splitChar = randomMovie.split("");
            hideMovie(randomMovie);
            displaySplitChar.innerHTML = "Current puzzle:  " + encodeWhiteSpaces(splitChar.join(" "));
            wrongGuess = 6;
            remainingGuesses.textContent = "You have " + wrongGuess + " remaining guesses.";
            chosen.length = 0;
            chosenGuesses.textContent = "So far, you have chosen the following letters: " + chosen.join(", ");
            whatImage = 1;
            currentImage.setAttribute("src", "./assets/hangman1.png");

            // console.log(puzzleTracker);
            // console.log("New random movie is: " + randomMovie);
        }
    }

    // Delay for loser alert
    function loser() {
        let timer = setTimeout(loserAlert, 1000);
    }

    // Delay for winner alert
    function winner() {
        let timer = setTimeout(winnerAlert, 1000);
    }

    // Declares winner via popup, calls for a new puzzle
    function winnerAlert() {
        alert("You've won! The solution was: " + randomMovie.toUpperCase() + " Press OK to play again");
        wins++;
        displayWins.textContent = "Wins: " + wins;
        resetGame();
    }

    // Declares loser via popup, calls for a new puzzle
    function loserAlert() {
        alert("Sorry cowboy, the jig is up. The correct solution was: " + randomMovie.toUpperCase() + "  Press OK to play again.");
        losses++;
        displayLosses.textContent = "Losses: " + losses;
        resetGame();
    }

    // Verifies if an alpha character was selected, and then checks for duplicate guesses
    if (userGuess.match(letters)) {

        if (chosen.includes(userGuess.toUpperCase())) {
            alert("You already selected this letter, please select a different letter.");
        } else {

            chosen.push(userGuess.toUpperCase());

            // This loop checks to see if the entered letter matches those in the puzzle
            for (i = 0; i < splitChar.length; i++) {

                if (userGuess.toLowerCase() === randomMovie[i]) {
                    splitChar[i] = randomMovie[i].toUpperCase();
                    displaySplitChar.innerHTML = "Current puzzle:  " + encodeWhiteSpaces(splitChar.join(" "));
                    guessStatus++;
                }
            }

            // This loop checks to see if the puzzle has been completed
            for (i = 0; i < splitChar.length; i++) {

                let stillPlay = splitChar.includes("_");
                displaySplitChar.innerHTML = "Current puzzle:  " + encodeWhiteSpaces(splitChar.join(" "));

                // If underscores still exist, just keep guessing
                if (stillPlay) {

                } else {
                    // If no underscores remain, this action runs and ends the loop

                    i = splitChar.length;
                    winner();
                }
            }

            // This checks to see if there was a matching guess, if not, remaining guesses goes down
            if (guessStatus === 0) {
                wrongGuess--;
                whatImage++;
                currentImage.setAttribute("src", "./assets/hangman" + whatImage + ".png");
            }

            // This checks to see if the user has run out of guesses
            if (wrongGuess === 0) {

                i = 0;
                while (i < splitChar.length) {
                    splitChar[i] = randomMovie[i].toUpperCase();
                    i++;
                }

                displaySplitChar.innerHTML = "Current puzzle:  " + encodeWhiteSpaces(splitChar.join(" "));
                currentImage.setAttribute("src", "./assets/hangman7.png");

                loser();
            }
        }
    } else {
        alert("Please select a letter, ya half-wit.");
    }

    remainingGuesses.textContent = "You have " + wrongGuess + " remaining guesses.";
    chosenGuesses.textContent = "So far, you have chosen the following letters: " + chosen.join(", ");

    // Hide the directions when first letter is chosen
    directionsText.textContent = "";
}