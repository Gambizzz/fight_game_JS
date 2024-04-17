class Character {
  constructor(name, hp, dmg, mana) {
    this.name = name;
    this._hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = "Playing"; //statut par défaut
  }

  takeDamage(dmg) {
    let damageTaken = dmg;
    if (damageTaken > this._hp) {
      damageTaken = this._hp;   //pour ne pas subir plus de dégats que son nombre de HP actuels
    }

    this._hp -= damageTaken; //on enlève aux hp du joueur les dmg infligés par l'adversaire
    if (this._hp <= 0) {
      this._hp = 0;   //HP s'arrêtent à 0
      this.status = "Loser"; //joueur éliminé si hp < 0
    }
    return damageTaken;
  }

  dealDamage(victim) {
    let damage = this.dmg;
    victim.takeDamage(damage); //victim subit les dmg que le joueur peut infliger (this.dmg)
    if (victim.status === "Loser") {
      this.mana += 20  //si victim éliminée, joueur gagne +20 pts de mana
    }
    return damage;
  }
}