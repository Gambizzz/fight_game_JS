class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20) {
    super(name, hp, dmg, mana);
    //initialiser propriétés propres au joueur
    this.attackActive = false;   //attaque lancée ? false par défaut
    this.immune = false;   //joueur immunisé ? false par défaut
  }

  //prend 0 dmg au prochain tour, inflige dmg = 7 mais si adversaire pas mort prend dmg = 7, mana = 20
  shadowHit(target) {
    if (this.mana >= 25) {    //vérifie si le joueur a assez de pts de mana
      this.attackActive = true;   //attaque lancée
      this.immune = true;   //si attaque lancée : joueur immunisé au prochain tour
      const damage = 6;
      target.takeDamage(damage);
      this.mana -= 25;    //enlève -20 pts de mana au joueur après l'attaque
      console.log(`${this.name}(${this.constructor.name}) used shadowHit on ${target.name}(${target.constructor.name}).`);
      return damage;
    } else {
      console.log("Not enough mana for this attack !");
      return 0;
    }
  }

  takeDamage(dmg) {
    if (this.immune) {   //si joueur immunisé
      this.immune = false;   //on enlève l'immunité pour le prochain tour
    } else {
      super.takeDamage(dmg);  //si pas immunisé on renvoit à la méthode takeDamage de base pour qu'il puisse subir des dégats
    }
  }

  dealDamage(victim) {
    if (this.attackActive) {   //si attaque lancée
      const damage = this.shadowHit(victim);   //on calcule les dégats avec shadowHit
      if (victim.status !== "Loser") {   //si victim encore en vie après attaque
        super.takeDamage(6);   //joueur subit -7 pts dmg 
      }
      this.attackActive = false;  //après ça, on désactive l'attaque pour le prochain tour
      return damage;
    } else {
      return super.dealDamage(victim);  //sinon, on renvoit à la méthode dealDamage de base pour faire subir des dégats
    }
  }
}

//dmg attaque shadowHit diminués + coût mana augmenté