class Mermaid extends Character {
  constructor(name, hp = 16, dmg = 8, mana = 180) {
    super(name, hp, dmg, mana);
  }

  //inflige 6pts dmg, +2pts hp, mana = 20
  ultrason(target) {
    if (this.mana >= 15) {
      const damage = 6;
      const hp = 2;
      target.takeDamage(damage);
      this.mana -= 15;
      this.hp += hp;
      console.log(`${this.name}(${this.constructor.name}) used ultrason on ${target.name}(${target.constructor.name}).`);
    } else {
      console.log("Not enough mana for this attack !");  //si pas assez de pts de mana : message d'erreur
    }
  }
}

//points HP augmentés + coût mana diminué