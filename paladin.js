class Paladin extends Character {
  constructor(name, hp = 18, dmg = 3, mana = 160) {
    super(name, hp, dmg, mana);
  }

  //inflige dmg = 4, hp = +5, mana = 40
  healingLighting(target) {
    if (this.mana >= 40) {  //vérifie si le joueur a assez de pts de mana
      const damage = 5;
      const hp = 5; 
      target.takeDamage(damage);  //si ok il attaque et target subit -4 pts de dmg
      this.mana -= 40;  //enlève -40 pts de mana au joueur après l'attaque
      this.hp += hp;  //rajoute +5 pts de hp au joueur après l'attaque
      console.log(`${this.name}(${this.constructor.name}) used healingLighting on ${target.name}(${target.constructor.name}).`);
    } else {
      console.log("Not enough mana for this attack !");  //si pas assez de pts de mana : message d'erreur
    }
  }
}

//points HP augmentés + dmg attaque healingLighting augmentés