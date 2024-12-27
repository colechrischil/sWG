const nouns = [
  "dog",
  "cat",
  "house",
  "car",
  "tree",
  "computer",
  "bird",
  "phone",
  "sky",
  "book",
  "ball",
  "pen",
  "shoe",
  "shirt",
  "apple",
  "camera",
  "desk",
  "piano",
  "banana",
  "cup",
  "mountain",
  "rain",
  "keyboard",
  "water",
  "game",
  "plan",
  "idea",
  "star",
  "window",
  "cake",
  "fish",
  "photo",
  "sand",
  "map",
  "moon",
  "wind",
  "hat",
  "paint",
  "cloud",
  "pencil",
  "guitar",
  "lamp",
  "button",
  "socks",
  "backpack",
  "mug",
  "pool",
  "surfboard",
  "shovel",
  "board",
  "helmet",
  "cheese",
  "grass",
  "box",
  "leaf",
  "coin",
  "wall",
  "fire",
  "city",
  "clothes",
  "bag",
  "waterfall",
  "ice",
  "bottle",
  "bike",
  "robot",
  "starfish",
  "bridge",
  "telescope",
  "planet",
  "clouds",
  "fishbowl",
  "sled",
  "playground",
  "cactus",
  "castle",
  "cliff",
  "rainbow",
  "workbench",
  "bubble",
  "glove"
];

const verbs = [
  "run",
  "jump",
  "sing",
  "dance",
  "eat",
  "talk",
  "play",
  "think",
  "read",
  "write",
  "watch",
  "sleep",
  "listen",
  "stand",
  "sit",
  "smile",
  "cook",
  "climb",
  "travel",
  "skip",
  "walk",
  "draw",
  "swim",
  "cut",
  "build",
  "open",
  "close",
  "call",
  "study",
  "work",
  "learn",
  "teach",
  "change",
  "rest",
  "leave",
  "stay",
  "help",
  "clean",
  "discover",
  "paint",
  "plan",
  "express",
  "repeat",
  "calculate",
  "find",
  "seek",
  "create",
  "arrive",
  "share",
  "announce",
  "hop",
  "lick",
  "taste",
  "believe",
  "decide",
  "dream",
  "imagine",
  "speak",
  "scream",
  "whisper",
  "yell",
  "chant",
  "roll",
  "fold",
  "rip",
  "tear"
];

const adjectives = [
  "beautiful",
  "strong",
  "fast",
  "delicious",
  "happy",
  "sad",
  "bright",
  "dark",
  "colorful",
  "slow",
  "expensive",
  "cheap",
  "tall",
  "short",
  "big",
  "small",
  "large",
  "warm",
  "cold",
  "smooth",
  "rough",
  "wet",
  "dry",
  "hard",
  "soft",
  "sweet",
  "sour",
  "angry",
  "kind",
  "funny",
  "interesting",
  "boring",
  "exciting",
  "confusing",
  "easy",
  "difficult",
  "serious",
  "jumpy",
  "friendly",
  "nervous",
  "messy",
  "tidy",
  "quiet",
  "loud",
  "quick",
  "unique",
  "clean",
  "dirty",
  "courageous",
  "cowardly",
  "innocent",
  "shiny",
  "tasty",
  "crunchy",
  "fluffy",
  "cozy",
  "smelly",
  "stinky",
  "pristine",
  "slimy",
  "slippery",
  "chilly",
  "fuzzy",
  "flimsy",
  "jumpy",
  "wide",
  "narrow",
  "elegant",
  "grand",
  "graceful",
  "vibrant",
  "cheerful",
  "playful",
  "pale",
  "dark",
  "mysterious",
  "funky",
  "rustic",
  "artistic",
  "timeless"
];

const genres = [
  "Christian",
  "Pop",
  "Rock",
  "Country",
  "Jazz",
  "Blues",
  "Indie",
  "Classical",
  "Folk",
  "Soul",
  "Hip-Hop",
  "Acoustic"
];

function generateRandomWords() {
  // Get the number of words of each type from input fields
  const numNouns = document.getElementById("numNouns").value;
  const numVerbs = document.getElementById("numVerbs").value;
  const numAdjectives = document.getElementById("numAdjectives").value;
  const includeGenre = document.getElementById("genreCheckbox").checked;

  let randomNouns = [];
  let randomVerbs = [];
  let randomAdjectives = [];
  let randomGenre = "";

  // Generate random nouns
  for (let i = 0; i < numNouns; i++) {
    randomNouns.push(nouns[Math.floor(Math.random() * nouns.length)]);
  }

  // Generate random verbs
  for (let i = 0; i < numVerbs; i++) {
    randomVerbs.push(verbs[Math.floor(Math.random() * verbs.length)]);
  }

  // Generate random adjectives
  for (let i = 0; i < numAdjectives; i++) {
    randomAdjectives.push(
      adjectives[Math.floor(Math.random() * adjectives.length)]
    );
  }

  // Generate random music genre if checkbox is checked
  if (includeGenre) {
    randomGenre = genres[Math.floor(Math.random() * genres.length)];
  }

  // Output the result with category labels
  document.getElementById("output").innerHTML = `
        <h3>Nouns:</h3> <p>${randomNouns.join(", ")}</p>
        <h3>Verbs:</h3> <p>${randomVerbs.join(", ")}</p>
        <h3>Adjectives:</h3> <p>${randomAdjectives.join(", ")}</p>
        ${includeGenre ? `<h3>Genre:</h3> <p>${randomGenre}</p>` : ""}
    `;
}

// Add event listener to the button
document.querySelector("button").addEventListener("click", generateRandomWords);
