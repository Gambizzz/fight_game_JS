function createCharacter(className, name) {
  let character;
  switch(className) {
      case "Fighter":
          character = new Fighter(name);
          break;
      case "Paladin":
          character = new Paladin(name);
          break;
      case "Monk":
          character = new Monk(name);
          break;
      case "Berzerker":
          character = new Berzerker(name);
          break;
      case "Assassin":
          character = new Assassin(name);
          break;
      case "Wizard":
          character = new Wizard(name);
          break;
      case "Mermaid":
          character = new Mermaid(name);
          break;
      default:
          console.log("Invalid class name !");
          return null;
  }
  return character;
}


let userCharacters = [];
function addCharacter(className, name, isUser = false) {
    const character = createCharacter(className, name);
    if (character) {
        userCharacters.push(character);
        console.log(`${character.name}(${character.constructor.name}) has been added !`);

        //affiche perso dans interface UI
        const characterList = document.getElementById('user-characters');
        const characterItem = document.createElement('li');
        characterItem.textContent = `${character.name} which is ${character.constructor.name}`;
        characterList.appendChild(characterItem);
    }
}

//ajouter un personnage :
addCharacter("Mermaid", "Anelise");

