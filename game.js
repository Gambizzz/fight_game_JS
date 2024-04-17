class Game {
  constructor() {
    this.turnLeft = 10; //nbr de tours
    this.characters = []; //initialistion array avec les personnages
    this.winner = null; //initialisation du gagnant

    this.defaultCharacters = [
      new Fighter("Grace"),
      new Paladin("Ulder"),
      new Monk("Moana"),
      new Berzerker("Draven"),
      new Assassin("Carl"),
      new Wizard("Saruman"),
      new Mermaid("Ariel")
    ];
  }

  startGame() {
      console.log("\nLet the game BEGIN !");
      console.log("Choose your character :");
      this.displayCharacterSelection(); //afficher boutons pour choisir perso
  }

  displayCharacterSelection() {
    const allCharacters = this.defaultCharacters.concat(userCharacters);

    const characterSelectionDiv = document.getElementById("character-selection");
    characterSelectionDiv.innerHTML = ""; //supprime contenu existant

    allCharacters.forEach((character, index) => {
      const button = document.createElement("button");
      button.textContent = `${index + 1}. ${character.name} (${character.constructor.name})`;
      button.addEventListener("click", () => {
        this.chooseCharacter(index);
        button.classList.add("my-character"); // Ajouter la classe "selected" au bouton
      });
      characterSelectionDiv.appendChild(button);
    });
  }

  chooseCharacter(index) {
    const allCharacters = this.defaultCharacters.concat(userCharacters);
    const chosenCharacter = allCharacters[index];
    this.characters.push(chosenCharacter);

    //créer perso contrôlés par IA
    for (let i = 0; i < 4; i++) {
      const randomClass = this.getRandomClass();
      const randomCharacter = this.getRandomCharacter();
      const character = new randomClass(randomCharacter);
      this.characters.push(character);
    }

    for (let i = 0; i < 10; i++) {
      this.startTurn();

      //vérifie si un gagnant a été déclaré après chaque tour
      if (this.winner) {
        break; //sort de la boucle si un gagnant est trouvé
      }
    }

    if (!this.winner) {
      console.log("Game over, sorry");
      this.endGame();
    }

    //réinitialise stats
    this.characters.forEach(character => {
      if (character === this.winner) {
        character.status = "Winner";
      } else if (character.status === "Playing") {
        character.status = "Loser";
      }
    });
  }

  getRandomClass() {
    const classes = [Fighter, Paladin, Monk, Berzerker, Assassin, Wizard, Mermaid];
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
  }

  getRandomCharacter() {
    const names = ["Grace", "Ulder", "Moana", "Draven", "Carl", "Saruman", "Ariel"];
    if (userCharacters.length > 0) {
      names.push(...userCharacters.map((character) => character.name));
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  startTurn() {
    console.log(`\nTURN NUMBER ${11 - this.turnLeft}`);
    this.shuffleCharacters(); //mélanger l'ordre à chaque tour

    let skipTurn = true;   //quand tous les joueurs ont joué 
    const playerCharacter = this.characters[0];
    console.log(`\n${playerCharacter.name}(${playerCharacter.constructor.name}), it's your turn!`);

    this.characters.forEach(character => {
      if (character.status === "Playing") {
        console.log(`\n${character.name}(${character.constructor.name}), it's time to play !`);
        skipTurn = true;

        const enemiesLeft = this.characters.filter(c => c.status === "Playing" && c !== character);
        if (enemiesLeft.length > 0) {
          const enemy = enemiesLeft[Math.floor(Math.random() * enemiesLeft.length)];
          let damage = 0;

          // Attaques spécifiques pour chaque classe
          if (character instanceof Fighter && Math.random() < 0.5) {
            console.log(`${character.name}(${character.constructor.name}) is using darkVision !`);
            character.darkVision(enemy);
            this.watchStats();
          } else if (character instanceof Paladin && Math.random() < 0.5) {
            console.log(`${character.name}(${character.constructor.name}) is using healingLighting !`);
            character.healingLighting(enemy);
            this.watchStats();
          } else if (character instanceof Monk && Math.random() < 0.5) {
            console.log(`${character.name}(${character.constructor.name}) is using heal !`);
            character.heal();
            this.watchStats();
          } else if (character instanceof Berzerker && Math.random() < 0.5) {
            console.log(`${character.name}(${character.constructor.name}) is using rage !`);
            character.rage();
            this.watchStats();
          } else if (character instanceof Assassin && Math.random() < 0.5) {
            console.log(`${character.name}(${character.constructor.name}) is using shadowHit !`);
            character.shadowHit(enemy);
            this.watchStats();
          } else if (character instanceof Wizard && Math.random() < 0.5) {
            console.log(`${character.name}(${character.constructor.name}) is using fireball !`);
            character.fireball(enemy);
            this.watchStats();
          } else if (character instanceof Mermaid && Math.random() < 0.5) {
            console.log(`${character.name}(${character.constructor.name}) is using ultrason !`);
            character.ultrason(enemy);
            this.watchStats();
          } else {
            if (Math.random() < 0.5) {
              damage = character.dealDamage(enemy);
              console.log(`${character.name}(${character.constructor.name}) is attacking ${enemy.name}(${enemy.constructor.name}). He deals him ${damage} damages. ${enemy.name}(${enemy.constructor.name}) got ${enemy._hp} lifepoints left.`);
              this.watchStats();
            } else {
              damage = enemy.dealDamage(character);
              console.log(`${enemy.name}(${enemy.constructor.name}) is attacking ${character.name}(${character.constructor.name}). He deals him ${damage} damages. ${character.name}(${character.constructor.name}) got ${character._hp} lifepoints left.`);
              this.watchStats();
            }
          }
        }
      }
    });

    console.log("\nTurn is over");

    if (skipTurn) {
      console.log("Skipping turn, because everybody have played");
      this.turnLeft--;

      const playersState = this.characters.filter(character => character.status === "Loser").length;
      if (playersState >= 4) {
        console.log("Not enough players to continue");
        this.endGame();
      }
    }
  }

  shuffleCharacters() {
    for (let i = this.characters.length - 1; i > 0; i--) {  //on cherche dans l'array en commençant par le dernier élément, la boucle s'arrête avant d'atteindre 0
      const j = Math.floor(Math.random() * (i + 1));   //on génère un nbr aléatoire
      [this.characters[i], this.characters[j]] = [this.characters[j], this.characters[i]]; //on échange les éléments (synthaxe de décomposition)
    } //i est décrémenté de 1 : on passe donc à l'élément précédent : quand 0 atteint, tous les éléments parcourus/échangés = mélange aléatoire assuré !
  }

  endGame() {
    //recherche du dernier personnage en vie
    let remainingCharacters = this.characters.filter(character => character.status === "Playing");

    //s 1 seul perso en vie, le déclarer gagnant
    if (remainingCharacters.length === 1) {
      const lastCharacter = remainingCharacters[0];
      lastCharacter.status = "Winner";
      // Afficher le gagnant dans l'UI
      const winnerElement = document.getElementById('winner');
      winnerElement.textContent = `${lastCharacter.name}(${lastCharacter.constructor.name}) is the WINNER ! The Game is over...`;
      //afficher gagnant dans la console JavaScript
      console.log(`\n${lastCharacter.name}(${lastCharacter.constructor.name}) is the WINNER ! The Game is over...`);
      this.winner = lastCharacter;
      this.watchStats();
    }

    //mise à jour des statuts des autres personnages
    this.characters.forEach(character => {
      if (character !== this.winner) { //ne pas modifier le statut du gagnant
        character.status = "Loser";
      }
    });
}

  watchStats() {
    //afficher stats des perso
    console.log("\nCurrent statistics :");
    this.characters.forEach((character) => {
      console.log(
        `${character.name}(${character.constructor.name}): ${character._hp} HP - ${character.dmg} DMG - ${character.mana} MANA - Status: ${character.status}`
      );
    });

    this.updateStatsUI();  //mise à jour des stats dans UI
  }

  updateStatsUI() {
    const statsElement = document.getElementById('stats');  //éléments HTML où on veut afficher les stats
    statsElement.innerHTML = '';   //supprime contenu existant

    //création élément de liste pour chaque personnage
    this.characters.forEach((character) => {
      const characterStat = document.createElement('li');
      characterStat.textContent = `${character.name} (${character.constructor.name}): ${character._hp} HP - ${character.dmg} DMG - ${character.mana} MANA - Status: ${character.status}`;
      statsElement.appendChild(characterStat);  //ajouter élément liste à élément stat
    });
  }
}


const grace = new Fighter("Grace");
const ulder = new Paladin("Ulder");
const moana = new Monk("Moana");
const draven = new Berzerker("Draven");
const carl = new Assassin("Carl");
const saruman = new Wizard("Saruman");
const ariel = new Mermaid("Ariel");


let game;  //déclarer game avant pour qu'il puisse être accessible partout
document.getElementById('start').addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

document.getElementById('start').addEventListener('click', () => {
  game = new Game();
  userCharacters.forEach(character => game.characters.push(character));
});

document.getElementById('start').addEventListener('click', () => {
  game = new Game();
  game.watchStats(); //afficher stats après le démarrage de la partie
});

document.getElementById('clear').addEventListener('click', () => {
  //nettoyer l'UI 
  const winnerElement = document.getElementById('winner');
  winnerElement.textContent = '';

  const statsElement = document.getElementById('stats');
  statsElement.innerHTML = '';

  const characterSelectionDiv = document.getElementById("character-selection");
  characterSelectionDiv.innerHTML = '';

  //nettoyer la console
  console.clear();
});



