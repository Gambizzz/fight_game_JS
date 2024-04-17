Le projet consiste à créer un jeu vidéo utilisant les classes ES6 de JavaScript pour organiser efficacement la programmation orientée objet (POO).

Dans ce jeu, le joueur contrôle cinq personnages qui se battent entre eux, chacun appartenant à l'une des cinq classes disponibles : Fighter, Paladin, Monk, Berzerker et Assassin.
Chaque classe a ses propres caractéristiques et attaques spéciales, telles que les points de vie, les points de mana et les dégâts.

Les personnages sont instanciés dans une classe Game qui gère le déroulement du jeu.
Chaque tour, le joueur choisit l'action de chaque personnage, puis les personnages se battent dans un ordre aléatoire.
Le tour se déroule dans la console avec des logs indiquant les actions des personnages.

La partie se termine après 10 tours ou lorsqu'il ne reste plus qu'un personnage en vie. Le personnage restant avec le plus de points de vie remporte la partie.


Amélioration du jeu pour permettre une expérience immersive où chacun peut trouver sa classe préférée.

- Aléatoire : Commence chaque partie avec 5 personnages et des classes tirées au hasard, offrant ainsi une expérience différente à chaque fois.

- Nouvelles classes : Ajoute deux nouvelles classes, telles que le Wizard, un sage puissant utilisant des sorts magiques, avec une attaque spéciale "Fireball".

- Une meilleure interface utilisateur : Personnalise l'affichage des informations des personnages pour offrir une expérience visuelle plus agréable.

- Équilibre des classes : Rééquilibre les classes si nécessaire pour garantir une expérience de jeu équilibrée.

- Intelligence artificielle : Implémente une IA pour contrôler les personnages non joués par le joueur, en priorisant les coups fatals ou en choisissant des actions de manière aléatoire.

- Autres améliorations : Explore d'autres idées pour améliorer le jeu, comme l'ajout d'une deuxième attaque spéciale par classe pour diversifier les options de jeu.


Le rendu attendu est un dossier contenant un fichier HTML et plusieurs fichiers JS, avec un fichier JS par classe.
L'utilisateur doit pouvoir ajouter ou non un personnage avant le début de la partie, puis jouer les personnages un par un jusqu'à la fin de la partie.
Le gagnant est le personnage avec le plus de points de vie après 10 tours ou quand il ne reste qu'un personnage en vie.
