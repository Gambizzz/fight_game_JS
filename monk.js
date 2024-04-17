class Monk extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200) {
    super(name, hp, dmg, mana);
  }

  //hp = +8, mana = 25, dmg = 0
  heal() {
    if (this.mana >= 20) {  //vérifie si le joueur a assez de pts de mana
      this.hp += 8;  //rajoute +8 pts de hp au joueur après l'attaque
      this.mana -= 20;  //enlève -25 pts de mana au joueur après l'attaque
      console.log(`${this.name}(${this.constructor.name}) used heal.`);
    } else {
      console.log("Not enough mana for this attack !");  //si pas assez de pts de mana : message d'erreur
    }
  }
}

//points HP augmentés + coût mana diminué
