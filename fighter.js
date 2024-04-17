class Fighter extends Character {
  constructor(name, hp = 14, dmg = 4, mana = 40) {
    super(name, hp, dmg, mana);
  }

  //inflige dmg = 5 (prend -2 dmg / coup reçu), mana = 20
  darkVision(target) {
    if (this.mana >= 20) { //vérifie si le joueur a assez de pts de mana
      const damage = 4;
      target.takeDamage(damage); //si ok il attaque et target subit -5 pts de dmg
      this.mana -= 20; //enlève -20 pts de mana au joueur après l'attaque
      console.log(`${this.name}(${this.constructor.name}) used darkVision on ${target.name}(${target.constructor.name}).`);
    } else {
      console.log("Not enough mana for this attack !");  //si pas assez de pts de mana : message d'erreur
    }
  }
}

//points HP augmentés + dmg attaque darkVision diminués