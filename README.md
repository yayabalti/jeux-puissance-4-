<!-- _________________________________________page index.html ___________________________________________________ -->

<!-- !DOCTYPE html : Déclaration du type de document, indique au navigateur qu'il s'agit d'un document HTML5. -->
<!DOCTYPE html>

<!-- html : Élément racine du document HTML, contient tous les autres éléments. -->
<!-- lang="en" : Attribut qui définit la langue principale du document. -->
<html lang="en">

<!-- head : Élément qui contient les informations et les métadonnées du document, non affichées à l'écran. -->
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- link rel="stylesheet" : Élément qui permet de lier une feuille de style CSS externe au document HTML. -->
    <!-- href="style.css" : Valeur de l'attribut "rel" qui indique le chemin d'accès au fichier CSS. -->
    <link rel="stylesheet" href="style.css">
    <title>page accueil</title>

</head>


<body>

    <!-- div class="off-screen-menu" : Élément de division qui permet de regrouper des éléments et de leur appliquer un style commun à l'aide de la classe CSS "off-screen-menu". -->
    <div class="off-screen-menu">

        <!-- ul : Élément de liste non ordonnée, utilisé pour les menus de navigation. -->
        <ul>

            <!-- li : Élément de liste, contient un élément de menu de navigation. -->
            <!-- a href="/regle du jeux.html" : Élément de lien hypertexte qui permet de naviguer vers la page "regle du jeux.html". -->
            <li><a href="/regle du jeux.html">REGLES DU JEUX</a></li>

            <!-- li : Élément de liste, contient un élément de menu de navigation. -->
            <!-- a href="/inscription.html" : Élément de lien hypertexte qui permet de naviguer vers la page "inscription.html". -->
            <li><a href="/inscription.html">INSCRIPTION</a></li>

        </ul>

    </div>

    <!-- nav : Élément de navigation qui contient les éléments de navigation principaux du document. -->
    <nav>

        <!-- img class="img_acceuil" : Élément d'image qui permet d'afficher une image à l'aide de la classe CSS "img_acceuil". -->
        <!-- src="/img acceuil.png" : Valeur de l'attribut "class" qui indique le chemin d'accès au fichier image. -->
        <!-- alt="" : Attribut qui fournit une description textuelle de l'image pour les utilisateurs de lecteurs d'écran ou en cas d'impossibilité d'afficher l'image. -->
        <img class="img_acceuil" src="/img acceuil.png" alt="">

        <!-- div class="ham-menu" : Élément de division qui permet de regrouper les éléments du menu hamburger et de leur appliquer un style commun à l'aide de la classe CSS "ham-menu". -->
        <div class="ham-menu">

            <!-- span : Élément générique en ligne qui permet de regrouper du contenu et de lui appliquer un style. Ici, il est utilisé pour créer les barres du menu hamburger. -->
            <span></span>
            <span></span>
            <span></span>

        </div>

        <!-- p class="texte_inscription_obli" : Élément de paragraphe qui contient du texte et permet de lui appliquer un style à l'aide de la classe CSS "texte_inscription_obli". -->
        <p class="texte_inscription_obli">INSCRIPTION OBLIGATOIRE POUR JOUER</p>

    </nav>

    <!-- script src="/script.js" : Élément qui permet de lier un fichier JavaScript externe au document HTML. -->
    <!-- "/script.js" : Valeur de l'attribut "src" qui indique le chemin d'accès au fichier JavaScript. -->
    <script src="/script.js"></script>

</body>

</html>







<!--_____________________________________CSS________________________________________ -->

/* menu burger */

 <!-- Sélecteur universel (*) : Applique les propriétés à tous les éléments du document. -->
* {

     <!--  -->
    margin: 0;

     <!-- padding: 0; : Réinitialise la marge interne à 0 pour tous les éléments.  -->
    padding: 0;

    /* box-sizing: border-box; : Modifie le mode de calcul de la taille des boîtes pour tous les éléments, en incluant les bordures et les rembourrages dans la taille définie. */
    box-sizing: border-box;

    /* list-style: none; : Supprime les puces ou les numéros des éléments de liste pour tous les éléments. */
    list-style: none;

    /* text-decoration: none; : Supprime les décorations de texte (soulignement, barré, etc.) pour tous les éléments. */
    text-decoration: none;

}

/* Sélecteur body : Applique les propriétés à l'élément body du document. */
body {

    /* background-color: black; : Définit la couleur de fond du document en noir. */
    background-color: black;

}

/* Classe CSS .img_acceuil : Applique les propriétés aux éléments ayant cette classe. */
.img_acceuil {

    /* width: 813px; : Définit la largeur de l'image à 813 pixels. */
    width: 813px;

    /* height: 663px; : Définit la hauteur de l'image à 663 pixels. */
    height: 663px;

}

/* Sélecteur a : Applique les propriétés aux éléments de lien hypertexte. */
a {

    /* color: white; : Définit la couleur du texte des liens en blanc. */
    color: white;

    /* font-size: 33px; : Définit la taille de la police des liens à 33 pixels. */
    font-size: 33px;

}

/* Sélecteur a:visited : Applique les propriétés aux éléments de lien hypertexte qui ont déjà été visités. */
a:visited {

    /* color: white; : Définit la couleur du texte des liens visités en blanc. */
    color: white;

}

/* Sélecteur a:hover : Applique les propriétés aux éléments de lien hypertexte lorsqu'ils sont survolés par le curseur de la souris. */
a:hover {

    /* color: #fbfbfb; : Définit la couleur du texte des liens survolés en blanc très légèrement grisé (#fbfbfb). */
    color: #fbfbfb;

}

/* off-screen-menu */

/* Classe CSS .off-screen-menu : Applique les propriétés aux éléments ayant cette classe. */
.off-screen-menu {

    /* background-color: rgb(92, 9, 58); : Définit la couleur de fond du menu en dégradé de rouge (rgb(92, 9, 58)). */
    background-color: rgb(92, 9, 58);

    /* height: 50vh; : Définit la hauteur du menu à 50% de la hauteur de la fenêtre d'affichage (viewport). */
    height: 50vh;

    /* width: 100vw; : Définit la largeur du menu à 100% de la largeur de la fenêtre d'affichage (viewport). */
    width: 100vw;

    /* max-width: 292px; : Définit la largeur maximale du menu à 292 pixels. */
    max-width: 292px;

    /* position: fixed; : Définit le type de positionnement du menu en "fixed", ce qui signifie qu'il reste à la même position à l'écran lorsque l'utilisateur fait défiler le document. */
    position: fixed;

    /* top: 17px; : Définit la position du menu à 17 pixels du haut de la fenêtre d'affichage (viewport). */
    top: 17px;

    /* right: -450px; : Définit la position du menu à 450 pixels à gauche de la fenêtre d'affichage (viewport), ce qui le rend caché hors de l'écran. */
    right: -450px;

    /* display: flex; : Définit le type de disposition du menu en "flex", ce qui permet de positionner et d'aligner les éléments enfants de manière flexible. */
    display: flex;

    /* flex-direction: column; : Définit la direction de disposition des éléments enfants en "column", ce qui signifie qu'ils sont empilés verticalement. */
    flex-direction: column;

    /* align-items: center; : Définit l'alignement des éléments enfants sur l'axe horizontal (cross-axis) en "center", ce qui signifie qu'ils sont centrés horizontalement. */
    align-items: center;

    /* justify-content: center; : Définit l'alignement des éléments enfants sur l'axe vertical (main-axis) en "center", ce qui signifie qu'ils sont centrés verticalement. */
    justify-content: center;

    /* text-align: center; : Définit l'alignement du texte des éléments enfants en "center", ce qui signifie qu'ils sont centrés horizontalement. */
    text-align: center;

    /* font-size: 5rem; : Définit la taille de la police des éléments enfants à 5 fois la taille de la police de base (rem). */
    font-size: 5rem;

    /* transition: .3s ease; : Définit une transition d'animation de 0,3 seconde avec un effet d'accélération et de décélération progressif (ease) pour toutes les propriétés animables du menu. */
    transition: .3s ease;

}

/* Classe CSS .off-screen-menu.active : Applique les propriétés aux éléments ayant la classe .off-screen-menu et la classe .active. */
.off-screen-menu.active {

    /* right: 200px; : Définit la position du menu à 200 pixels à droite de la fenêtre d'affichage (viewport), ce qui le rend visible à l'écran. */
    right: 200px;

}

/* nav */

/* Sélecteur nav : Applique les propriétés aux éléments de navigation du document. */
nav {

    /* padding: 1rem; : Définit un rembourrage interne de 1rem (unité de taille relative basée sur la taille de la police) autour de l'élément de navigation. */
    padding: 1rem;

    /* display: flex; : Définit le type de disposition de l'élément de navigation en "flex", ce qui permet de positionner et d'aligner les éléments enfants de manière flexible. */
    display: flex;

}

/* ham menu */

/* Classe CSS .ham-menu : Applique les propriétés aux éléments ayant cette classe. */
.ham-menu {

    /* height: 50px; : Définit la hauteur de l'icône du menu hamburger à 50 pixels. */
    height: 50px;

    /* width: 40px; : Définit la largeur de l'icône du menu hamburger à 40 pixels. */
    width: 40px;

    /* margin-left:460px; : Définit une marge externe à gauche de 460 pixels pour l'icône du menu hamburger, ce qui la positionne à droite de l'élément de navigation. */
    margin-left:460px;

    /* position: relative; : Définit le type de positionnement de l'icône du menu hamburger en "relative", ce qui signifie qu'elle est positionnée par rapport à sa position normale dans le flux du document. */
    position: relative;

}

/* Sélecteur .ham-menu span : Applique les propriétés aux éléments span enfants de l'élément ayant la classe .ham-menu. */
.ham-menu span {

    /* height: 5px; : Définit la hauteur des barres de l'icône du menu hamburger à 5 pixels. */
    height: 5px;

    /* width: 100%; : Définit la largeur des barres de l'icône du menu hamburger à 100% de la largeur de l'élément parent (.ham-menu), ce qui signifie qu'elles s'étendent sur toute la largeur de l'icône. */
    width: 100%;

    /* background-color: #ffffff; : Définit la couleur de fond des barres de l'icône du menu hamburger en blanc (#ffffff). */
    background-color: #ffffff;

    /* border-radius: 25px; : Définit un rayon de bordure de 25 pixels pour les barres de l'icône du menu hamburger, ce qui les arrondit légèrement. */
    border-radius: 25px;

    /* position: absolute; : Définit le type de positionnement des barres de l'icône du menu hamburger en "absolute", ce qui signifie qu'elles sont positionnées par rapport à l'élément parent le plus proche qui a un type de positionnement autre que "static". */
    position: absolute;

    /* left: 50%; : Définit une position horizontale à 50% de la largeur de l'élément parent (.ham-menu) pour les barres de l'icône du menu hamburger, ce qui les centre horizontalement. */
    left: 50%;

    /* top: 50%; : Définit une position verticale à 50% de la hauteur de l'élément parent (.ham-menu) pour les barres de l'icône du menu hamburger, ce qui les centre verticalement. */
    top: 50%;

    /* transform: translate(-50%, -50%); : Déplace les barres de l'icône du menu hamburger de -50% sur l'axe horizontal (X) et de -50% sur l'axe vertical (Y), ce qui les centre parfaitement dans l'élément parent (.ham-menu). */
    transform: translate(-50%, -50%);

    /* transition: .3s ease; : Définit une transition d'animation de 0,3 seconde avec un effet d'accélération et de décélération progressif (ease) pour toutes les propriétés animables des barres de l'icône du menu hamburger. */
    transition: .3s ease;

}

/* Sélecteur .ham-menu span:nth-child(1) : Applique les propriétés à la première barre de l'icône du menu hamburger (premier élément span enfant). */
.ham-menu span:nth-child(1) {

    /* top: 25%; : Définit une position verticale à 25% de la hauteur de l'élément parent (.ham-menu) pour la première barre de l'icône du menu hamburger, ce qui la positionne en haut de l'icône. */
    top: 25%;

}

/* Sélecteur .ham-menu span:nth-child(3) : Applique les propriétés à la troisième barre de l'icône du menu hamburger (troisième élément span enfant). */
.ham-menu span:nth-child(3) {

    /* top: 75%; : Définit une position verticale à 75% de la hauteur de l'élément parent (.ham-menu) pour la troisième barre de l'icône du menu hamburger, ce qui la positionne en bas de l'icône. */
    top: 75%;

}

/* Classe CSS .ham-menu.active : Applique les propriétés aux éléments ayant la classe .ham-menu et la classe .active. */
.ham-menu.active span {

    /* background-color: white; : Définit la couleur de fond des barres de l'icône du menu hamburger en blanc (#ffffff) lorsqu'elle est active (classe .active ajoutée). */
    background-color: white;

}

/* Sélecteur .ham-menu.active span:nth-child(1) : Applique les propriétés à la première barre de l'icône du menu hamburger (premier élément span enfant) lorsqu'elle est active (classe .active ajoutée). */
.ham-menu.active span:nth-child(1) {

    /* top: 50%; : Définit une position verticale à 50% de la hauteur de l'élément parent (.ham-menu) pour la première barre de l'icône du menu hamburger lorsqu'elle est active, ce qui la positionne au milieu de l'icône. */
    top: 50%;

    /* transform: translate(-50%, -50%) rotate(45deg); : Déplace la première barre de l'icône du menu hamburger de -50% sur l'axe horizontal (X) et de -50% sur l'axe vertical (Y), ce qui la centre parfaitement dans l'élément parent (.ham-menu), puis la fait pivoter de 45 degrés dans le sens horaire pour créer l'effet de croix. */
    transform: translate(-50%, -50%) rotate(45deg);

}

/* Sélecteur .ham-menu.active span:nth-child(2) : Applique les propriétés à la deuxième barre de l'icône du menu hamburger (deuxième élément span enfant) lorsqu'elle est active (classe .active ajoutée). */
.ham-menu.active span:nth-child(2) {

    /* opacity: 0; : Définit l'opacité de la deuxième barre de l'icône du menu hamburger à 0 lorsqu'elle est active, ce qui la rend invisible et crée l'effet de croix. */
    opacity: 0;

}

/* Sélecteur .ham-menu.active span:nth-child(3) : Applique les propriétés à la troisième barre de l'icône du menu hamburger (troisième élément span enfant) lorsqu'elle est active (classe .active ajoutée). */
.ham-menu.active span:nth-child(3) {

    /* top: 50%; : Définit une position verticale à 50% de la hauteur de l'élément parent (.ham-menu) pour la troisième barre de l'icône du menu hamburger lorsqu'elle est active, ce qui la positionne au milieu de l'icône. */
    top: 50%;

    /* transform: translate(-50%, -50%) rotate(-45deg); : Déplace la troisième barre de l'icône du menu hamburger de -50% sur l'axe horizontal (X) et de -50% sur l'axe vertical (Y), ce qui la centre parfaitement dans l'élément parent (.ham-menu), puis la fait pivoter de -45 degrés dans le sens anti-horaire pour créer l'effet de croix. */
    transform: translate(-50%, -50%) rotate(-45deg);

}

/* Classe CSS .texte_inscription_obli : Applique les propriétés aux éléments ayant cette classe. */
.texte_inscription_obli {

    /* color: white; : Définit la couleur du texte en blanc (#ffffff). */
    color: white;

}


<!-- SCRIPT -->

// Sélectionne l'élément HTML ayant la classe CSS ".ham-menu" et stocke la référence dans la constante "hamMenu".
const hamMenu = document.querySelector(".ham-menu");

// Sélectionne l'élément HTML ayant la classe CSS ".off-screen-menu" et stocke la référence dans la constante "offScreenMenu".
const offScreenMenu = document.querySelector(".off-screen-menu");

// Ajoute un écouteur d'événement "click" à l'élément référencé par la constante "hamMenu".
// Lorsque l'utilisateur clique sur l'élément, la fonction de rappel (callback) est exécutée.
hamMenu.addEventListener("click", () => {

  // Ajoute ou supprime la classe CSS "active" de l'élément référencé par la constante "hamMenu" en utilisant la méthode "classList.toggle".
  hamMenu.classList.toggle("active");

  // Ajoute ou supprime la classe CSS "active" de l'élément référencé par la constante "offScreenMenu" en utilisant la méthode "classList.toggle".
  offScreenMenu.classList.toggle("active");

});


<!-- _______________________________________PAGE JEUX _____________________________________________ -->

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Définit le type de document et spécifie que le contenu est en anglais -->
    <meta charset="UTF-8">
    <!-- Assure une compatibilité maximale avec Internet Explorer -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Met à jour la largeur de la fenêtre et définit l'échelle initiale pour un design responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Lien vers le fichier CSS principal du projet -->
    <link rel="stylesheet" href="jeux.css">
    <!-- Lien pour intégrer Font Awesome, une bibliothèque d'icônes -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
    <!-- Titre de la page web -->
    <title>smoothis ninja</title>
</head>
<body>
    
    <!-- Balise canvas utilisée pour dessiner ou manipuler graphiquement dans le navigateur -->
    <canvas id="canvas">
        
    </canvas>

    <!-- Div contenant le bouton de démarrage du jeu et l'affichage du score maximal -->
    <div class="startGame" id="startGame">
        <div class="home">
            
            <h1>ENVIE D'UN SMOOTHIS?</h1> 
            
            <!-- Bouton pour démarrer le jeu, avec une icône de manette de jeu -->
            <button id="startGameBtn">jouer <i class="fa-solid fa-gamepad"></i></button>

            <!-- Affichage du score maximal atteint par l'utilisateur -->
            <p class="texte-acceuil">tu a assez couper de fruits pour faire ton smoothis : <span id="homeHighScore"></span></p>
        </div>
        
        <!-- Bouton pour revenir à l'accueil, mal placé ici, devrait être à l'intérieur de la div "home" -->
        <a href="#">&nbsp;</a>
    </div>

    <!-- Conteneur pour le compte à rebours avant le début du jeu -->
    <div class="countDown" id="countDownContainer">
        <h1></h1>
    </div>

    <!-- Corps du jeu en cours, affichant le score et le temps restant -->
    <div id="inGameContainer">
        <div class="scoreDiv">

            <!-- Affichage du score actuel et du score maximal -->
            <p class="score">Score : <span id="score"></span></p>
            <p class="text-best-score">best Score: <span id="highScore"></span></p>
        </div>

        <!-- Affichage du temps restant -->
        <div class="gameCountTime">
            <h1 id="gameMinuteAndSecond">00 : 00</h1>
        </div>

        <!-- Affichage du nombre de frappes -->
        <div id="strikeCountDiv">
            <h1 class="strikeCount">1x</h1>
        </div>

    </div>

    <!-- Corps affiché après la fin du jeu, montrant le score final -->
    <div id="gameEndDiv">
        <div class="gameEndContainer">

            <!-- Affichage du score final -->
            <p>Score:<span id="endGameScore"></span></p>

            <!-- Bouton pour revenir à l'accueil, avec une icône de retour -->
            <button id="returnHome">acceuil<i class="fa-solid fa-right-to-bracket"></i></button>
        </div>
    </div>

    <!-- Script JavaScript qui gère la logique du jeu -->
    <script src="./jeux.js"></script>
</body>
</html>




<!--___________________________CSS ________________________________ -->




/* Importation de la police Poppins depuis Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Réglages globaux pour le corps de la page */
body{
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; /* Assure que les dimensions des éléments sont incluses dans leurs dimensions totales */
    overflow: hidden; /* Cache tout ce qui dépasse les limites du conteneur */
    cursor:url(img/couteaufruit.png); /* Change le curseur en une image personnalisée pour indiquer qu'il peut interagir avec l'élément */
}

/* Style du canvas où le jeu sera affiché */
#canvas{
    background-image: url(img/smoothis-ninja.jpg);
    background-size: 100%;
    width:100vw; 
    height: 100vh; 
    background-repeat: no-repeat;
}

/* Style du conteneur de démarrage du jeu */
.startGame{
    z-index: 1; 
    width: 400vh;
    display: flex;
    width: 100vw;
    position: absolute; 
    flex-direction: column; /* Organise les enfants en colonne */
    top: 0;
    left: 0;
    font-family: 'Poppins'; /* Utilise la police Poppins */
    height: 100vh;
    align-items: center; 
    justify-content: center;
    color: white; /* Couleur du texte */
}

/* Style du conteneur d'accueil */
.home{
    display: flex; 
    flex-direction: column;
    align-items: center; 
    margin-top: 225px;
}

/* Style du titre d'accueil */
.home h1{
    color:rgb(255, 255, 255);
    text-align: center; 
    margin: 0; 
    line-height: 40px; /* Spacing entre les lignes du texte */
    background-color: rgba(0, 0, 0, 0.375);
    padding: 0.7vh;
    border-radius: 20%;
}

/* Style du sous-titre d'accueil */
.texte-acceuil {
    background-color: rgba(0, 0, 0, 0.473);
    padding: 0.7vh;
    font-size: 140%;
    color:rgb(255, 255, 255);
    font-weight:900;
    border-radius: 20%;
}

/* Style du bouton de démarrage du jeu */
#startGameBtn{
    margin: 12px 0; 
    padding: 8px 16px; 
    color: white; /* Couleur du texte du bouton */
    width: 40%; /* Largeur du bouton */
    background-color: rgb(162, 0, 135); /* Couleur d'arrière-plan du bouton */
    outline: none;
    font-size: 22px; 
    font-family: 'Poppins';
    font-weight: 600; /* Gras du texte du bouton */
    border-radius: 4px; 
    border: none; 
    cursor:pointer; /* Change le curseur en une main pour indiquer qu'il peut cliquer */
    align-items: center;
    transition:.2s; /* Animate les changements de style avec une durée de 0.2s */
}

/* Style du bouton de démarrage du jeu lorsqu'il est survolé */
#startGameBtn:hover{
    background-color: rgb(2, 247, 43); /* Change la couleur d'arrière-plan du bouton lorsqu'il est survolé */
}

/* Style du pied de page */
.copyRight{
    position: absolute;
    bottom: 10px;
    left: 50%; 
    transform: translateX(-50%); /* Déplace le pied de page pour qu'il soit centré */
}

/* Style du compteur de temps de démarrage */
.countDown{
    color: white; /* Couleur du texte */
    font-family: 'Poppins'; /* Police du texte */
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translateX(-50%) translateY(-50%); /* Centre le compteur de temps à la fois horizontalement et verticalement */
    z-index: 16; /* Assure que le compteur de temps est au-dessus des autres éléments */
    font-size: 15vh;
}

/* Animation du compteur de temps */
@keyframes animCount {
    0%{
        transform: scale(1); /* Début de l'animation avec la taille originale */
    }
    100%{
        transform: scale(2.2); /* Fin de l'animation avec une taille 2.2 fois plus grande */
    }
}

/* Style du conteneur du jeu en cours */
#inGameContainer{
    position: absolute; 
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0; 
    background-color: transparent; /* Arrière-plan transparent du conteneur */
    z-index: 10; /* Assure que le conteneur est au-dessus des autres éléments */
    color: white; /* Couleur du texte */
    font-family: 'Poppins'; /* Police du texte */
    box-sizing: border-box; /* Assure que les dimensions des éléments sont incluses dans leurs dimensions totales */
    pointer-events: none; /* Empêche les interactions avec le conteneur */
    display: none;
    padding: 10px 20px;
}

/* Style du compteur de temps du jeu en cours */
#inGameContainer.gameCountTime{
    position: absolute; 
    top: 15px; 
    right: 10px;
}

/* Style du compteur de frappes */
#strikeCountDiv{
    position: absolute; 
    bottom: 10px; 
    right: 30px;
}

/* Style du compteur de frappes lorsqu'il est animé */
.strikeCount{
    animation: animStrikeCount.2s linear; /* Applique une animation linéaire avec une durée de 0.2s */
    width: 45px;
    height: 45px;
}

/* Animation du compteur de frappes */
@keyframes animStrikeCount {
    0%{
        transform: scale(1); /* Début de l'animation avec la taille originale */
    }
    100%{
        transform: scale(2.5); /* Fin de l'animation avec une taille 2.5 fois plus grande */
    }
}

/* Style de l'en-tête du jeu */
.gameHeading{
    position: absolute;
    top: 0; 
    left: 50%; 
    z-index: 12; 
    font-family: 'Poppins'; /* Police du texte */
    transform: translateX(-50%); /* Centre l'en-tête horizontalement */
    background-color:rgb(162, 0, 135); /* Couleur d'arrière-plan de l'en-tête */
    color: white; /* Couleur du texte */
    padding: 4px 14px;
    border-bottom-left-radius: 12px; 
    border-bottom-right-radius: 12px;
}

/* Style du paragraphe de l'en-tête du jeu */
.gameHeading p{
    margin: 0;
}

/* Style du conteneur de fin de jeu */
#gameEndDiv{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw; 
    height: 100vh; 
    background-color: rgba(3, 3, 3, 0.464); /* Arrière-plan semi-transparent du conteneur de fin de jeu */
    z-index: 15; 
    display: none;
    pointer-events: none; /* Empêche les interactions avec le conteneur de fin de jeu */
    align-items: center; 
    justify-content: center; /* Centre les enfants verticalement */
}

/* Style du conteneur de fin de jeu */
.gameEndContainer{
    background-color:rgb(162, 0, 135) ; /* Couleur d'arrière-plan du conteneur de fin de jeu */
    border-radius: 6px; 
    pointer-events: all; /* Permet les interactions avec le conteneur de fin de jeu */
    color: white; /* Couleur du texte */
    padding: 25px; 
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.612); /* Ombre autour du conteneur de fin de jeu */
    text-align: center; 
    font-family: 'Poppins'; /* Utilise la police Poppins pour le texte */
}

/* Style du titre du conteneur de fin de jeu */
.gameEndContainer h1{
    font-size: 1.5rem; 
    text-align: center;
}

/* Style du paragraphe du conteneur de fin de jeu */
.gameEndContainer p{
    font-size: 22px;
}

/* Style du bouton pour retourner à la page d'accueil */
#returnHome{
    background-color: transparent; /* Arrière-plan transparent du bouton */
    border: none; 
    outline: none; /* Supprime l'outline du bouton */
    color: white; /* Couleur du texte du bouton */
    font-size: 22px;
    cursor:pointer;
}

/* Ajustement du marging-top pour le paragraphe dans le conteneur de fin de jeu pour éviter un espace supplémentaire en haut */
.gameEndContainer p {
    margin-top: 0;
}

/* Positionnement du compteur de temps du jeu en cours vers la droite pour une meilleure visibilité */
.gameCountTime{
    margin-left:500px;
}

/* Taille du score affiché en grandeur extra-large pour une meilleure lisibilité */
.text-best-score{
    font-size: 5vh;
}

/* Style du score affiché, ajusté pour être plus visible et bien placé */
.score{
    font-size: 5vh;
    margin-bottom: -18px; /* Ajuste le marging-botton pour centrer le score par rapport à son conteneur parent */
    margin-top: 0px; /* Assure que le marging-top est réinitialisé pour un placement précis */
}

/* Positionnement du minuteur et secondes pour une meilleure intégration dans l'interface utilisateur */
#gameMinuteAndSecond{
    margin-left: 600px;
}

/* Responsivité pour les écrans mobiles */
@media (min-width: 319px) and (max-width: 426px){
    body{
        width:425px;
        height: 450px;
    }

    /* Ajustement du marging-top pour le paragraphe dans le conteneur de fin de jeu pour éviter un espace supplémentaire en haut */
   .gameEndContainer p {
        margin-top: 0;
    }

    /* Modification du lien de retour à la page d'accueil pour améliorer l'apparence */
    #returnHome{
        text-decoration: none;
        border-bottom:none;
    }

    /* Ajustement de la largeur du score pour une meilleure visualisation sur les petits écrans */
   .score{
        width: 200px;
    }

    /* Ajustement du positionnement et de la taille du minuteur et secondes pour une meilleure intégration dans l'interface utilisateur */
    #gameMinuteAndSecond{
        margin-top: 7px;
        width: 115px;
        position:absolute;
        right:15px;
    }

    /* Réduction du padding pour le conteneur de fin de jeu afin d'économiser de l'espace */
   .gameEndContainer{
        padding: 5px;
    }

    /* Augmentation de la taille du score affiché pour une meilleure lisibilité sur les petits écrans */
   .text-best-score{
        font-size: 25px;
        margin-top: 10px;
    }

    /* Ajustement de la taille et du positionnement du conteneur du jeu en cours pour une meilleure intégration sur les petits écrans */
    #inGameContainer{
        padding: 0px 12px;
        width: 142vw;
        height: 139vh;
    }

    /* Ajustement de la taille et du positionnement du div de fin de jeu pour une meilleure intégration sur les petits écrans */
    #gameEndDiv {
        width: 189vw;
        height: 189vh;
    }

    /* Ajustement de la taille et du positionnement du canvas pour une meilleure intégration sur les petits écrans */
    #canvas {
        width: 454px;
        height: 650px;
        background-size: 222%;
    }

    /* Ajustement de la taille du texte d'accueil pour une meilleure lisibilité sur les petits écrans */
   .texte-acceuil {
        font-size: 94%;
    }

    /* Ajustement de la taille du titre d'accueil pour une meilleure lisibilité sur les petits écrans */
   .home h1 {
        font-size: 220%;
    }

    /* Ajustement de la taille et du positionnement du bouton de démarrage du jeu pour une meilleure intégration sur les petits écrans */
    #startGameBtn {
        font-size: 30px;
        width: 33%;
        padding: 0px 0px;
    }

    /* Ajustement de la position du conteneur de démarrage du jeu pour une meilleure intégration sur les petits écrans */
   .startGame{
        position: absolute;
        bottom: 50px; 
        width: 425px;
        height: 450px;
        top: 105px;
        left: 10px;
    }

    /* Affichage du menu burger pour les écrans mobiles */
   .menu-icon {
        display: block;
    }
}


<!--___________________________________JS___________________________________________ -->

// Récupération du bouton de démarrage
const playButton = document.getElementById('startGameBtn');

// Récupération du conteneur de début de jeu
const startGameContainer = document.getElementById('startGame');

// Récupération du conteneur du jeu en cours
const inGameContainer = document.getElementById('inGameContainer');

// Importation des sons
// Son de démarrage du jeu
const gameStartSound = new Audio("./sound source/Sound_Source_Game-start.wav");

// Son de fin du jeu
const gameEndSound = new Audio("./sound source/Sound_Source_Game-over.wav");

// Son de toucher une bombe
const bombTouchSound = new Audio("./sound source/Sound_Source_gank.wav");

// Son d'alerte de temps
const timeBeepSound = new Audio("./sound source/Sound_Source_time-beep.wav");

// Son de pression de bouton
const buttonPushSound = new Audio("./sound sourceSound_Source_ui-button-push.wav");


let isSwordSoundPlaying = false;

// Création d'une nouvelle instance de l'objet Image (couteau)
const cursorImage = new Image();

// Définition de la source de l'image
cursorImage.src ="img/couteaufruit.png";



// Attente que l'image soit chargée avant de la définir comme curseur

cursorImage.onload = () => {
  // Définition de la propriété cursor du corps de la page avec l'image chargée

  document.body.style.cursor = `url(${cursorImage.src}), auto`;
};

// Fonction pour jouer le son de l'épée
// Génération d'un son audio aléatoire basé sur un numéro aléatoire pour le nom du fichier son

const playSwordSound = () => {
  let swordAudio = new Audio(`sound source/Sound_Source_Sword_Sound_Effects_Sword-swipe-${Math.floor(Math.random() * 6) + 1}.wav`);
  swordAudio.play();
  // Permet au son de se déclencher 1 par 1 
  isSwordSoundPlaying = true;
  swordAudio.addEventListener('ended', () => {
      isSwordSoundPlaying = false;
  });
}

// Utilisation du changement de visibilité pour empêcher le rendu des boules lorsque la fenêtre est inactive

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        isGamePause = false;
    } else {
        isGamePause = true;
    }
})

// Bouton de démarrage du jeu

playButton.addEventListener('click', () => {
    startGameContainer.style.display = 'none';
    inGameContainer.style.display = 'flex';
    alertTimer();
    
    // Réinitialisation du score à 0 

    score = 0;
    updateScore(0);
    gameStartSound.play();
    isGameStarted = true;
    isGameEnd = false;

    // Utilisation de setTimeout pour commencer le rendu des boules après la fonction d'alerte

    setTimeout(() => {
        animate();
        startRenderingBallsInterval();
        startGameTimer();
    }, 4000)
})

// Fonction de compte à rebours

const alertTimer = () => {
    const countDownContainer = document.getElementById('countDownContainer');
    let currentSecond = 3;
    let timerInterval = setInterval(() => {
        countDownContainer.innerHTML = ``;
        countDownContainer.innerHTML = `<h1>${currentSecond}</h1>`;
        currentSecond -= 1;
        if (currentSecond < 0) {
            clearInterval(timerInterval);
            countDownContainer.innerHTML = ``;
            isGamePause = false;
            return
        }
        timeBeepSound.play()
    }, 1000)
}





// Fonction de chronomètre du jeu

const startGameTimer = () => {
    if (!isGameStarted) {
        return
    }
    // Nombre de minutes pendant lesquelles le jeu doit s'exécuter.

    let minutesInGame = 2;
    let totalTime = minutesInGame * 60;

    // Interval pour mettre à jour le chronomètre

    let interval = setInterval(() => {

        let min = Math.floor(totalTime / 60);
        let sec = totalTime % 60;

        document.getElementById('gameMinuteAndSecond').innerHTML = `${min < 10? '0' + min : min} : ${sec < 10? '0' + sec : sec}`

        totalTime--;
        // Lorsque le temps est écoulé

        if (totalTime < 0) {
            clearInterval(interval);
            document.getElementById('gameMinuteAndSecond').innerHTML = `00 : 00`;
            endGameContainer.style.display = 'flex';
            document.getElementById('endGameScore').innerHTML = score;
            isGameEnd = true;
            isGameStarted = false;
            gameEndSound.play();
            // Effacement du canvas
            ballArray = [];
            ballParticlesArray = [];
            enemyBombArray = [];
        }
    }, 1000)
}

let score = 0;
// Tentative de récupération du score maximal depuis le stockage local, sinon utilise 0;

let highScore = localStorage.getItem('highScore') || 0;
document.getElementById('highScore').innerHTML = highScore;
document.getElementById('homeHighScore').innerHTML = highScore;

// Fonction pour mettre à jour le score

const updateScore = (noOfScore) => {
    // Si noOfScore est négatif
    if (noOfScore + score < 0) {
        score = 0;
        return
    }
    score = score + noOfScore;
    if (score > highScore) {
        localStorage.setItem('highScore', score);
        document.getElementById('highScore').innerHTML = score;
        document.getElementById('homeHighScore').innerHTML = score;
    }
    document.getElementById('score').innerHTML = score;
}

updateScore(0);

// Logique principale pour le canvas

const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');

// Définition de la taille du canvas à l'écran entier

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
background = window.innerHeight;

// Tous les éléments dans un tableau

let ballArray = [];
let ballParticlesArray = [];
let enemyBombArray = [];







// Classe Ball

function Ball() {
    this.x = Math.floor(Math.random() * window.innerWidth); // Position X aléatoire
    this.y = Math.floor(window.innerHeight); // Position Y aléatoire
    this.size = Math.floor((Math.random() * 50) + 70); // Taille aléatoire
    this.color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`; // Couleur aléatoire
    this.images =[
        "/img/pomme.png",
        "/img/pomegranate1.png",
        "/img/citron1.png",
        "/img/banane1.png",
        "/img/ananas1.png",
        "/img/fraise1.png",
        "/img/fruit_du_dragon1.png",
        "/img/noix_de_coco1.png",
        "/img/pasteck1.png",
    ] 
    this.image = new Image();
    this.image.src = this.images[Math.floor(Math.random() * this.images.length)]; // Sélectionne une image aléatoire
    
    if (window.matchMedia('(max-width: 426px)').matches) {
        // Code pour la version mobile

        this.speedY = 10; // Vitesse de déplacement vertical
        this.size = Math.floor((Math.random() * 30) + 50); // Taille aléatoire
        this.speedX = Math.round((Math.random() - 0.5) * 2); // Vitesse de déplacement horizontal
        this.speedY -=.0;
    } 
    else {
        // Code pour la version desktop

        this.speedY = 10; // Vitesse de déplacement vertical
        this.speedX = Math.round((Math.random() - 0.5) * 4); // Vitesse de déplacement horizontal
    }
    
    // Mise à jour de la position de la boule

    this.update = () => {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.speedY -=.1;
    };

    // Dessin de la boule sur le canvas
    this.draw = () => {
        context.drawImage(this.image, this.x, this.y, this.size, this.size);
    };
}



// Classe BallParticles

function BallParticles(x, y, color) {

    this.x = x;
    this.y = y;
    this.size = Math.floor(Math.random() * 3 + 8);
    this.color = color;

    this.speedY = Math.random() * 2 - 2;
    this.speedX = Math.round((Math.random() - 0.5) * 10);

    // Mettre à jour la particule de boule
    this.update = () => {
        // Diminue la taille si cette.size est supérieure à.2
        if (this.size >.2) {
            this.size -=.1;
        }
        this.y += this.speedY;
        this.x += this.speedX;
    }

    // Dessiner ou rendre la boule sur le canvas
    this.draw = () => {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }
}

// Classe EnemyBomb
function EnemyBomb() {

    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(window.innerHeight);
    this.size = Math.floor((Math.random() * 100) + 100);
    this.color = `black`;
    this.images =[
        "/img/virus1.png",
        "/img/virus2.png",
    ] 

    this.image = new Image();
    this.image.src = this.images[Math.floor(Math.random() * this.images.length)]; // Sélectionne une image aléatoire

    if (window.matchMedia('(max-width:426px)').matches) {
        // Code pour la version mobile
        this.speedY = 10; // Vitesse de déplacement vertical
        this.size = Math.floor((Math.random() * 60) + 60); // Taille aléatoire
        this.speedX = Math.round((Math.random() - 0.5) * 2); // Vitesse de déplacement horizontal
    } 
    else {
        // Code pour la version desktop
        this.speedY = 10; // Vitesse de déplacement vertical
        this.speedX = Math.round((Math.random() - 0.5) * 4); // Vitesse de déplacement horizontal
    }

    // Mettre à jour la position de la bombe ennemie
    this.update = () => {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.speedY -=.1;
    }

    this.draw = () => {
        context.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}

let strikeCount = 1;
// Variable pour stocker quand la dernière boule a été tranchée
let lastBallSlice;