class Berzerker extends Character {
  constructor(name, hp = 10, dmg = 4, mana = 0) {
    super(name, hp, dmg, mana);
  }

  //dmg = +1 (pour le reste de la partie mais...), lui enlève hp = -1, mana = 0
  rage() {
    if (this._hp > 1) {
      this.dmg++;   //joueur gagne +1 pt de dmg pour toute la partie
      this.hp--;   //joueur perd -1 pt de hp en même temps
      console.log(`${this.name}(${this.constructor.name}) used rage.`);
    } else {
      console.log("Not enough HP for this attack !");
    }
  }
}

//points HP augmentés 