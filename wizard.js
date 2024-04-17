class Wizard extends Character {
  constructor(name, hp = 12, dmg = 2, mana = 200) {
    super(name, hp, dmg, mana);
  }

  //inflige 7pts dmg, mana = 25
  fireball(target) {
    if (this.mana >= 25) {
      const damage = 6;
      target.takeDamage(damage);
      this.mana -= 25;
      console.log(`${this.name}(${this.constructor.name}) used fireball on ${target.name}(${target.constructor.name}).`);
    } else {
      console.log("Not enough mana for this attack !");  //si pas assez de pts de mana : message d'erreur
    }
  }
}

//points HP augmentés + dmg attaque fireball diminués