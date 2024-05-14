// // Récupération du bouton de démarrage du jeu
// const playButton = document.getElementById('startGameBtn');



// // Récupération du conteneur de démarrage du jeu
// const startGameContainer = document.getElementById('startGame');



// // Récupération du conteneur du jeu en cours
// const inGameContainer = document.getElementById('inGameContainer');



// // Importation des sons
// const gameStartSound = new Audio("./Sound_Source_Game-start.wav"); // Son de démarrage du jeu
// const gameEndSound = new Audio('./Sound_Source_Game-over.wav'); // Son de fin du jeu
// const bombTouchSound = new Audio('./Sound_Source_gank.wav'); // Son de toucher une bombe
// const timeBeepSound = new Audio('./Sound_Source_time-beep.wav'); // Son d'alerte de temps
// const buttonPushSound = new Audio('./Sound_Source_ui-button-push.wav'); // Son de pression de bouton

// let isSwordSoundPlaying = false; // Variable pour vérifier si le son de l'épée est en train de jouer



// // Fonction pour jouer le son de l'épée
// // Générer un son audio aléatoire basé sur un numéro aléatoire pour le nom du fichier son
// const playSwordSound = () => {
//     let swordAudio = new Audio(`./sound source/Sound_Source_Sword_Sound_Effects_Sword-swipe-${Math.floor(Math.random() * 6) + 1}.wav`);
//     swordAudio.play();
//     // permet au son de ce declancher 1 par 1 
//     isSwordSoundPlaying = true;
//     swordAudio.addEventListener('ended', () => {
//         isSwordSoundPlaying = false;
//     });
// }



// // Utilisation du changement de visibilité pour empêcher le rendu des boules lorsque la fenêtre est inactive
// document.addEventListener('visibilitychange', () => {
//     if (document.visibilityState === 'visible') {
//         isGamePause = false; // Si la fenêtre est visible, le jeu n'est pas en pause
//     } else {
//         isGamePause = true; // Si la fenêtre n'est pas visible, le jeu est en pause
//     }
// });



// // Bouton de démarrage du jeu
// playButton.addEventListener('click', () => {
//     startGameContainer.style.display = 'none'; // Cacher le conteneur de démarrage
//     inGameContainer.style.display = 'flex'; // Afficher le conteneur du jeu en cours
//     alertTimer(); // Appeler la fonction d'alerte
//     // Réinitialiser le score à 0
//     score = 0;
//     updateScore(0); // Mettre à jour le score
//     gameStartSound.play(); // Jouer le son de démarrage du jeu
//     isGameStarted = true; // Marquer le jeu comme démarré
//     isGameEnd = false; // Marquer le jeu comme non terminé

//     // Utiliser setTimeout pour commencer le rendu des boules après la fin de la fonction d'alerte
//     setTimeout(() => {
//         animate(); // Commencer l'animation
//         startRenderingBallsInterval(); // Commencer l'intervalle de rendu des boules
//         startGameTimer(); // Commencer le chronomètre du jeu
//     }, 4000);
// });

// // Fonction de compte à rebours
// const alertTimer = () => {
//     const countDownContainer = document.getElementById('countDownContainer');
//     let currentSecond = 3;
//     let timerInterval = setInterval(() => {
//         countDownContainer.innerHTML = ``; // Effacer le contenu actuel
//         countDownContainer.innerHTML = `<h1>${currentSecond}</h1>`; // Afficher le nombre de secondes restantes
//         currentSecond -= 1;
//         if (currentSecond < 0) {
//             clearInterval(timerInterval); // Arrêter le compte à rebours
//             countDownContainer.innerHTML = ``; // Effacer le contenu
//             isGamePause = false; // Marquer le jeu comme non en pause
//             return;
//         }
//         timeBeepSound.play(); // Jouer le son d'alerte
//     }, 1000);
// };

// // Fonction de chronomètre du jeu
// const startGameTimer = () => {
//     if (!isGameStarted) {
//         return;
//     }
//     // Nombre de minutes pendant lesquelles le jeu doit durer
//     let minutesInGame = 2;
//     let totalTime = minutesInGame * 60;

//     // Intervalle pour mettre à jour le chronomètre
//     let interval = setInterval(() => {
//         let min = Math.floor(totalTime / 60);
//         let sec = totalTime % 60;

//     document.getElementById('gameMinuteAndSecond').innerHTML = `${min < 10? '0' + min : min} : ${sec < 10? '0' + sec : sec}`; //     Afficher les minutes et secondes

//         totalTime--;
//         // Lorsque le temps est écoulé
//         if (totalTime < 0) {
//             clearInterval(interval); // Arrêter l'intervalle
//             document.getElementById('gameMinuteAndSecond').innerHTML = `00 : 00`; // Afficher 00:00
//             endGameContainer.style.display = 'flex'; // Afficher le conteneur de fin de jeu
//             document.getElementById('endGameScore').innerHTML = score; // Afficher le score final
//             isGameEnd = true; // Marquer le jeu comme terminé
//             isGameStarted = false; // Marquer le jeu comme arrêté
//             gameEndSound.play(); // Jouer le son de fin de jeu
//             // Effacer le tableau de boules
//             ballArray = [];
//             ballParticlesArray = [];
//             enemyBombArray = [];
//         }
//     }, 1000);
// };





// let score = 0; // Score initialisé à 0
// // Essayons de récupérer le score le plus élevé depuis le stockage local, sinon utilisez 0
// let highScore = localStorage.getItem('highScore') || 0;
// document.getElementById('highScore').innerHTML = highScore; // Afficher le score le plus élevé
// document.getElementById('homeHighScore').innerHTML = highScore; // Afficher le score le plus élevé sur la page d'accueil

// // Fonction pour mettre à jour le score
// const updateScore = (noOfScore) => {
//     // Si noOfScore est en négatif
//     if (noOfScore + score < 0) {
//         score = 0;
//         return;
//     }
//     score = score + noOfScore;
//     if (score > highScore) {
//         localStorage.setItem('highScore', score); // Mettre à jour le score le plus élevé dans le stockage local
//         document.getElementById('highScore').innerHTML = score; // Afficher le nouveau score le plus élevé
//         document.getElementById('homeHighScore').innerHTML = score; // Afficher le nouveau score le plus élevé sur la page d'accueil
//     }
//     document.getElementById('score').innerHTML = score; // Afficher le score actuel
// }

// updateScore(0); // Initialiser le score à 0


// // Définir le canvas à plein écran
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Récupération du canvas
// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');


// // Tableau pour tous les éléments
// let ballArray = []; // Tableau pour les boules
// let ballParticlesArray = []; // Tableau pour les particules de boule
// let enemyBombArray = []; // Tableau pour les bombes ennemies



// // Classe Ball
// function Ball() {
//     this.x = Math.floor(Math.random() * window.innerWidth); // Position X aléatoire
//     this.y = Math.floor(window.innerHeight); // Position Y aléatoire
//     this.size = Math.floor((Math.random() * 50) + 70); // Taille aléatoire
//     this.color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`; // Couleur aléatoire
//     this.images =[
//         "/pomme.png",
//         "/pomegranate1.png",
//         "/citron1.png",
//         "/banane1.png",
//         "/ananas1.png",
//         "/fraise1.png",
//         "/fruit_du_dragon1.png",
//         "/noix_de_coco1.png",
//         "/pasteck1.png",

//     ] 
//     this.image = new Image();
//         this.image.src = this.images[Math.floor(Math.random() * this.images.length)]; // Sélectionne une image aléatoire
    
//     this.speedY = 10; // Vitesse de déplacement vertical
//     this.speedX = Math.round((Math.random() - 0.5) * 4); // Vitesse de déplacement horizontal



//     // Mise à jour de la position de la boule
//     this.update = () => {
//         this.y -= this.speedY;
//         this.x += this.speedX;
//         this.speedY -=.1;
//     };

//     // Dessin de la boule sur le canvas
//      this.draw = () => {
//     context.drawImage(this.image, this.x, this.y, this.size, this.size);
//      };
// }



// // Classe particules des rond
// function BallParticles(x, y, color) {
//     this.x = x; // Position X
//     this.y = y; // Position Y
//     this.size = Math.floor(Math.random() * 3 + 8); // Taille aléatoire
//     this.color = color; // Couleur

//     this.speedY = Math.random() * 2 - 2; // Vitesse de déplacement vertical
//     this.speedX = Math.round((Math.random() - 0.5) * 10); // Vitesse de déplacement horizontal

//     // Mise à jour de la position de la particule de rond
//     this.update = () => {
//         // Diminuez la taille si cette.size est supérieure à.2
//         if (this.size >.2) {
//             this.size -=.1;
//         }
//         this.y += this.speedY;
//         this.x += this.speedX;
//     };
   
// }

// // Classe EnemyBomb
// function EnemyBomb() {
//     this.x = Math.floor(Math.random() * window.innerWidth); // Position X aléatoire
//     this.y = Math.floor(window.innerHeight); // Position Y aléatoire
//     this.size = Math.floor((Math.random() * 150) +100); // Taille aléatoire
//     this.color = `black`; // Couleur
//     this.images =[
//         "/virus1.png",
//         "/virus2.png",
//     ] 
//     this.image = new Image();
//         this.image.src = this.images[Math.floor(Math.random() * this.images.length)]; // Sélectionne une image aléatoire

//     this.speedY = 10; // Vitesse de déplacement vertical
//     this.speedX = Math.round((Math.random() - 0.5) * 4); // Vitesse de déplacement horizontal

//     // Mise à jour de la position de la bombe ennemie
//     this.update = () => {
//         this.y -= this.speedY;
//         this.x += this.speedX;
//         this.speedY -=.1;
//     };

//     this.draw = () => {
//         context.drawImage(this.image, this.x, this.y, this.size, this.size);
         
//     };
// }

// let strikeCount = 1; // Compteur de frappes
// // Variable pour stocker quand la dernière boule a été tranchée
// let lastBallSlice;

// // Fonction pour rendre les balles
// function renderBalls() {
//     // Boucle pour parcourir chaque balle dans le tableau ballArray
//     for (let i = 0; i < ballArray.length; i++) {
//         // Dessine la balle actuelle
//         ballArray[i].draw();
//         // Met à jour la position de la balle actuelle
//         ballArray[i].update();

//         // Calcul la distance entre la position de la souris et la balle
//         let distanceBetweenMouseAndBall = Math.hypot(mouseX - ballArray[i].x, mouseY - ballArray[i].y)

//         // Vérifie si la collision entre la souris et la balle est détectée
//         if (distanceBetweenMouseAndBall - ballArray[i].size < 1) {
//             // Rend les particules de la balle
//             for (let index = 0; index < 8; index++) {
//                 ballParticlesArray.push(new BallParticles(ballArray[i].x, ballArray[i].y, ballArray[i].color));
//             }
//             let timeNow = new Date().getTime()
//             // Vérifie si le temps écoulé depuis la dernière coupure de balle est inférieur à 0.5 seconde
//             if (timeNow - lastBallSlice < 500) {
//                 strikeCount += 1;
//                 document.getElementById('strikeCountDiv').innerHTML = `<h1 class="strikeCount">${strikeCount}x</h1>`
//             } else {
//                 strikeCount = 1;
//                 document.getElementById('strikeCountDiv').innerHTML = `<h1 class="strikeCount">${strikeCount}x</h1>`
//             }
//             lastBallSlice = new Date().getTime();
//             // Met à jour le score en fonction de la taille de la balle et du nombre de coups
//             let scoreToUpdate = (ballArray[i].size < 40? 3 : 5) + strikeCount;
//             updateScore(scoreToUpdate)

//             // Supprime la balle du tableau
//             ballArray.splice(i, 1);
//             i--;
//             return
//         }

//         // Supprime la balle si elle atteint le bas de l'écran
//         if (ballArray[i].y > window.innerHeight + 10) {
//             ballArray.splice(i, 1);
//             i--;
//         }
//     }
// }

// // Fonction pour rendre les bombes ennemies
// function renderEnemyBombs() {
//     // Boucle pour parcourir chaque bombe ennemie dans le tableau enemyBombArray
//     for (let i = 0; i < enemyBombArray.length; i++) {
//         // Dessine la bombe ennemie actuelle
//         enemyBombArray[i].draw();
//         // Met à jour la position de la bombe ennemie actuelle
//         enemyBombArray[i].update();

//         // Calcul la distance entre la position de la souris et la bombe ennemie
//         let distanceBetweenMouseAndEnemy = Math.hypot(mouseX - enemyBombArray[i].x, mouseY - enemyBombArray[i].y)

//         // Vérifie si la collision entre la souris et la bombe ennemie est détectée
//         if (distanceBetweenMouseAndEnemy - enemyBombArray[i].size < 1) {
//             if (isGamePause) {
//                 return
//             }
//             // Efface le canevas lorsqu'un joueur touche la bombe
//             ballArray = [];
//             ballParticlesArray = [];
//             isGamePause = true;
//             // Compte à rebours pour 3 secondes
//             alertTimer();
//             updateScore(-7);
//             bombTouchSound.play();
//             // Supprime la bombe du tableau
//             enemyBombArray.splice(i, 1);
//             i--;
//             return
//         }

//         // Supprime la bombe si elle atteint le bas de l'écran
//         if (enemyBombArray[i].y > window.innerHeight + 10) {
//             enemyBombArray.splice(i, 1);
//             i--;
//         }
//     }
// }

// // Fonction pour rendre les particules de balle
// function renderBallParticles() {
//     // Boucle pour parcourir chaque particule de balle dans le tableau ballParticlesArray
//     for (let i = 0; i < ballParticlesArray.length; i++) {
//         // Dessine la particule de balle actuelle
//         ballParticlesArray[i].draw();
//         // Met à jour la position de la particule de balle actuelle
//         ballParticlesArray[i].update();

//         // Si la taille de la particule de balle est trop petite, supprime-la du tableau
//         if (ballParticlesArray[i].size <=.2) {
//             ballParticlesArray.splice(i, 1);
//             i--;
//         }
//     }
// }

// // Tableau pour stocker le nombre de balles à rendre
// let numberOfBallsToRender = [1, 2, 3, 4, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1];

// // Fonction pour démarrer le rendu des balles à intervalles de 1 seconde
// const startRenderingBallsInterval = () => {
//     let interval = setInterval(() => {
//         // Annule l'intervalle si le jeu est terminé
//         if (isGameEnd) {
//             clearInterval(interval)
//             return;
//         }
//         // Retourne si le jeu est en pause
//         if (isGamePause) {
//             return
//         }
//         const numberOfBalls = Math.round(Math.random() * numberOfBallsToRender.length);
//         let indexOf = numberOfBallsToRender[numberOfBalls];

//         // Si l'index généré est supérieur à la moitié de la longueur du tableau, lance une bombe
//         if (numberOfBalls >= Math.floor(numberOfBallsToRender.length / 2)) {
//             enemyBombArray.push(new EnemyBomb())
//         }

//         // Nombre de balles à rendre sur le canevas en utilisant une boucle for
//         for (let i = 0; i < indexOf; i++) {
//             ballArray.push(new Ball())
//         }

//     }, 1000)
// }

// // Variables pour le statut du jeu
// let isGameStarted = false;
// let isGamePause = false;
// let isGameEnd = false;

// let animationId;

// // Fonction d'animation 
// function animate() {
//     context.fillStyle = 'rgba(24,28,31,.5)';
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     renderBalls();
//     renderBallParticles();
//     renderEnemyBombs();
//     renderMouseLines();
//     // Annule l'animation lorsque le jeu est terminé
//     if (isGameEnd) {
//         cancelAnimationFrame(animationId);
//         return
//     }
//     animationId = requestAnimationFrame(animate);
// }

// // Tableaux pour stocker les coordonnées de la souris
// let mouseX = 0;
// let mouseY = 0;
// let prevMouseX = 0;
// let prevMouseY = 0;
// let isMouseClicked = false;

// let linesArray = [];

// // Fonction pour rendre les lignes de la souris
// function renderMouseLines() {
//     for (let i = 0; i < linesArray.length; i++) {
//         context.strokeStyle = 'white';
//         context.beginPath();
        
//         context.moveTo(linesArray[i].x, linesArray[i].y);
//         context.lineTo(linesArray[i].pMouseX, linesArray[i].pMouseY);
//         context.stroke();
//         context.lineWidth= 4;
//         context.closePath();
//     }
//     // Si la longueur de ce tableau est supérieure à 4, supprime la première objet de cet tableau
//     if (linesArray.length > 4) {
//         if (!isSwordSoundPlaying) {
//             playSwordSound();  
//         }
//         linesArray.shift();
//         linesArray.shift();
//     }
// }

// // Écouteur d'événements pour détecter quand le bouton gauche de la souris est cliqué
// canvas.addEventListener('mousedown', (e) => {
//     prevMouseX = mouseX;
//     prevMouseY = mouseY;
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//     isMouseClicked = true;
// })

// // Lorsque la souris est en mouvement
// canvas.addEventListener('mousemove', (e) => {
//     if (isMouseClicked) {
//         prevMouseX = mouseX;
//         prevMouseY = mouseY;
//         mouseX = e.clientX;
//         mouseY = e.clientY;
//         linesArray.push({x: mouseX,y:mouseY,pMouseX: prevMouseX,pMouseY: prevMouseY})
//     }
// })

// // Lorsque le bouton de la souris est relâché
// canvas.addEventListener('mouseup', () => {
//     mouseX = 0;
//     mouseY = 0;
//     linesArray = [];
//     isMouseClicked = false;
// })
// // Lorsque la souris sort de la fenêtre ou du tab
// canvas.addEventListener('mouseout', () => {
//     mouseX = 0;
//     linesArray = [];
//     mouseY = 0;
//     isMouseClicked = false;
// })

// // Fonction et importations pour revenir à l'accueil lorsque le jeu est terminé
// const returnHomeButton = document.getElementById('returnHome');
// const endGameContainer = document.getElementById('gameEndDiv');

// returnHomeButton.addEventListener('click',()=>{
//     if (!isGameEnd) {
//         return
//     }
//     buttonPushSound.play();
//     endGameContainer.style.display = 'none';
//     startGameContainer.style.display = 'flex';
//     inGameContainer.style.display = 'none';
// })









const playButton = document.getElementById('startGameBtn');
const startGameContainer = document.getElementById('startGame');
const inGameContainer = document.getElementById('inGameContainer');

//Importing Sound
 const gameStartSound = new Audio("./sound source/Sound_Source_Game-start.wav"); // Son de démarrage du jeu
 const gameEndSound = new Audio("./sound source/Sound_Source_Game-over.wav"); // Son de fin du jeu
 const bombTouchSound = new Audio("./sound source/Sound_Source_gank.wav"); // Son de toucher une bombe
 const timeBeepSound = new Audio("./sound source/Sound_Source_time-beep.wav"); // Son d'alerte de temps
 const buttonPushSound = new Audio("./sound sourceSound_Source_ui-button-push.wav"); // Son de pression de bouton

let isSwordSoundPlaying = false;

// créez une nouvelle instance de l'objet Image
const cursorImage = new Image();

// définissez la source de l'image
cursorImage.src ="img/couteaufruit.png";

// attendez que l'image soit chargée avant de la définir comme curseur
cursorImage.onload = () => {
  // définissez la propriété cursor du corps de la page avec l'image chargée
  document.body.style.cursor = `url(${cursorImage.src}), auto`;
};



// Fonction pour jouer le son de l'épée
 // Générer un son audio aléatoire basé sur un numéro aléatoire pour le nom du fichier son
    const playSwordSound = () => {
     let swordAudio = new Audio(`sound source/Sound_Source_Sword_Sound_Effects_Sword-swipe-${Math.floor(Math.random() * 6) + 1}.wav`);
     swordAudio.play();
     // permet au son de ce declancher 1 par 1 
     isSwordSoundPlaying = true;
     swordAudio.addEventListener('ended', () => {
         isSwordSoundPlaying = false;
     });
 }

//Using Visibility change to prevent rendering balls when the tab is inactive
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        isGamePause = false;
    } else {
        isGamePause = true;
    }

})

//Front Home Play Button
playButton.addEventListener('click', () => {
    startGameContainer.style.display = 'none';
    inGameContainer.style.display = 'flex';
    alertTimer();
    //Set Score to  0 
    score = 0;
    updateScore(0);
    gameStartSound.play();
    isGameStarted = true;
    isGameEnd = false;

    //Using set time out to start the rendering balls after the alert timer function completes
    setTimeout(() => {
        animate();
        startRenderingBallsInterval();
        startGameTimer();
    }, 4000)
})

//Count Down Function
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

//Game timer function 
const startGameTimer = () => {
    if (!isGameStarted) {
        return
    }
    //Number of Minutes the game should run.
    let minutesInGame = 2;
    let totalTime = minutesInGame * 60;

    //Interval to update the timer
    let interval = setInterval(() => {

        let min = Math.floor(totalTime / 60);
        let sec = totalTime % 60;

        document.getElementById('gameMinuteAndSecond').innerHTML = `${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec}`

        totalTime--;
        //When the time is over
        if (totalTime < 0) {
            clearInterval(interval);
            document.getElementById('gameMinuteAndSecond').innerHTML = `00 : 00`;
            endGameContainer.style.display = 'flex';
            document.getElementById('endGameScore').innerHTML = score;
            isGameEnd = true;
            isGameStarted = false;
            gameEndSound.play();
            //Clearing the canvas
            ballArray = [];
            ballParticlesArray = [];
            enemyBombArray = [];
        }
    }, 1000)
}

let score = 0;
//Trying to fetch high score from the local storage, if not use 0;
let highScore = localStorage.getItem('highScore') || 0;
document.getElementById('highScore').innerHTML = highScore;
document.getElementById('homeHighScore').innerHTML = highScore;


//Function to update score
const updateScore = (noOfScore) => {
    //If noOfScore is in negative
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

//Main Logic for canvas

const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');

//Set canvas to full Screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//All Elements array
let ballArray = [];
let ballParticlesArray = [];
let enemyBombArray = [];

//Ball Class
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
        
             
                if (window.matchMedia('(max-width: 800px)').matches) {
                  // code pour la version mobile
                  this.speedY = 7.5;                                   // Vitesse de déplacement vertical
                  this.size = Math.floor((Math.random() * 30) + 50);   //Taille aléatoire
                  this.speedX = Math.round((Math.random() - 0.5) * 2); // Vitesse de déplacement horizontal
                  this.speedY -=.0;
                } 
                
                else {
                  // code pour la version desktop
                  this.speedY = 10;                                    // Vitesse de déplacement vertical
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





//Ball Particles Class
function BallParticles(x, y, color) {

    this.x = x;
    this.y = y;
    this.size = Math.floor(Math.random() * 3 + 8);
    this.color = color;

    this.speedY = Math.random() * 2 - 2;
    this.speedX = Math.round((Math.random() - 0.5) * 10);

    //Updating Ball Particle
    this.update = () => {
        //Decrease size if this.size is greater then .2
        if (this.size > .2) {
            this.size -= .1;
        }
        this.y += this.speedY;
        this.x += this.speedX;
    }

    //Rendering or Drawing Ball on the canvas
    this.draw = () => {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }
}


//Enemy Bomb Class
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


            if (window.matchMedia('(max-width: 800px)').matches) {
                // code pour la version mobile
                this.speedY = 7.5;                                                // Vitesse de déplacement vertical
                this.size = Math.floor((Math.random() * 60) + 60);                // taile aleatoire
                this.speedX = Math.round((Math.random() - 0.5) * 2);              // Vitesse de déplacement horizontal
              } 
              
              else {
                // code pour la version desktop
                this.speedY = 10;                                                // Vitesse de déplacement vertical
                this.speedX = Math.round((Math.random() - 0.5) * 4);             // Vitesse de déplacement horizontal
              }

    
   

    //Updating Bomb Position
    this.update = () => {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.speedY -= .1;
    }

    this.draw = () => {
        context.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}


let strikeCount = 1;
//Variable to store when was the last ball sliced
let lastBallSlice;

function renderBalls() {
    for (let i = 0; i < ballArray.length; i++) {
        ballArray[i].draw();
        ballArray[i].update();

        //Detection Collision of Mouse Position and Ball Position
        let distanceBetweenMouseAndBall = Math.hypot(mouseX - ballArray[i].x, mouseY - ballArray[i].y)

        //If Mouse is on the ball i.e Collision
        if (distanceBetweenMouseAndBall - ballArray[i].size < 1) {

            //Rendering Ball Particles 
            for (let index = 0; index < 8; index++) {
                ballParticlesArray.push(new BallParticles(ballArray[i].x, ballArray[i].y, ballArray[i].color));
            }
            let timeNow = new Date().getTime()
            //Subtracting the timenow by lastBallSlice and if less then .5 second then add the strike
            if (timeNow - lastBallSlice < 500) {
                strikeCount += 1;
                document.getElementById('strikeCountDiv').innerHTML = `<h1 class="strikeCount">${strikeCount}x</h1>`
            } else {
                strikeCount = 1;
                document.getElementById('strikeCountDiv').innerHTML = `<h1 class="strikeCount">${strikeCount}x</h1>`
            }
            lastBallSlice = new Date().getTime();
            //If ball size is less than 40 update score to 3 or 5
            let scoreToUpdate = (ballArray[i].size < 40 ? 3 : 5) + strikeCount;
            updateScore(scoreToUpdate)

            //Splicing the ball from the array
            ballArray.splice(i, 1);
            i--;
            return
        }

        //Splice the ball if it reached the bottom of the screen
        if (ballArray[i].y > window.innerHeight + 10) {
            ballArray.splice(i, 1);
            i--;
        }
    }
}


function renderEnemyBombs() {
    for (let i = 0; i < enemyBombArray.length; i++) {
        enemyBombArray[i].draw();
        enemyBombArray[i].update();

        //Detection Collision of Mouse Position and Ball Position
        let distanceBetweenMouseAndEnemy = Math.hypot(mouseX - enemyBombArray[i].x, mouseY - enemyBombArray[i].y)

        //If Mouse is on the ball i.e Collision
        if (distanceBetweenMouseAndEnemy - enemyBombArray[i].size < 0) {

            if (isGamePause) {
                return
            }
            //Clearing Canvas when player touches the bomb
            ballArray = [];
            ballParticlesArray = [];
            isGamePause = true;
            //Count Down for 3 Seconds
            alertTimer();
            updateScore(-7);
            bombTouchSound.play();
            //Splicing the ball from the array
            enemyBombArray.splice(i, 1);
            i--;
            return
        }

        //Splice the bomb when reached the bottom
        if (enemyBombArray[i].y > window.innerHeight + 10) {
            enemyBombArray.splice(i, 1);
            i--;
        }
    }
}



function renderBallParticles() {
    for (let i = 0; i < ballParticlesArray.length; i++) {
        ballParticlesArray[i].draw();
        ballParticlesArray[i].update();

        //If ball particles size is too small splice from the array
        if (ballParticlesArray[i].size <= .2) {
            ballParticlesArray.splice(i, 1);
            i--;
        }
    }
}

let numberOfBallsToRender = [1, 2, 3, 4, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1];

//SetInterval to render the balls on an interval of 1 second
const startRenderingBallsInterval = () => {
    let interval = setInterval(() => {
        //Clear the interval if the game is end.
        if (isGameEnd) {
            clearInterval(interval)
            return;
        }
        //Return if the game is pause
        if (isGamePause) {
            return
        }
        const numberOfBalls = Math.round(Math.random() * numberOfBallsToRender.length);
        let indexOf = numberOfBallsToRender[numberOfBalls];

        //If the index generated is greater then length of numberOfBallsToRender array, throw a bomb
        if (numberOfBalls >= Math.floor(numberOfBallsToRender.length / 2)) {
            enemyBombArray.push(new EnemyBomb())
        }

        //Number of balls to be rendered on the canvas using for loop
        for (let i = 0; i < indexOf; i++) {
            ballArray.push(new Ball())
        }

    }, 1000)
}

//Game Status Variables
let isGameStarted = false;
let isGamePause = false;
let isGameEnd = false;
let backgroundImage = new Image();
backgroundImage.src = "/img/marche-nourriture-rue-nocturne_91128-3589.jpg";
let animationId;

//Animate function to render every....
function animate() {
    
    context.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canevas
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // Dessiner l'image de fond d'écran
    renderBalls();
    renderBallParticles();
    renderEnemyBombs();
    renderMouseLines();
    // Annuler l'animation lorsque le jeu est terminé
    if (isGameEnd) {
        cancelAnimationFrame(animationId);
        return;
    }
    animationId = requestAnimationFrame(animate);
}

// enemyBombArray.push(new EnemyBomb());

let mouseX = 0;
let mouseY = 0;
let prevMouseX = 0;
let prevMouseY = 0;
let isMouseClicked = false;

let linesArray = [];

function renderMouseLines() {
    for (let i = 0; i < linesArray.length; i++) {
        context.strokeStyle = 'white';
        context.beginPath();
        
        context.moveTo(linesArray[i].x, linesArray[i].y);
        context.lineTo(linesArray[i].pMouseX, linesArray[i].pMouseY);
        context.stroke();
        context.lineWidth= 4;
        context.closePath();
    }
    //If the length of this array is greater then 4 splice the first object of this array using shift();
    if (linesArray.length > 4) {
        if (!isSwordSoundPlaying) {
            playSwordSound();  
        }
        linesArray.shift();
        linesArray.shift();
    }
}


//Event listener to detect when left button of mouse is clicked
canvas.addEventListener('mousedown', (e) => {
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMouseClicked = true;
})

//When mouse is moving
canvas.addEventListener('mousemove', (e) => {
    if (isMouseClicked) {
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        linesArray.push({x: mouseX,y:mouseY,pMouseX: prevMouseX,pMouseY: prevMouseY})
    }
})

//When the mouse button is released
canvas.addEventListener('mouseup', () => {
    mouseX = 0;
    mouseY = 0;
    linesArray = [];
    isMouseClicked = false;
})
//When the mouse is out of the tab or window
canvas.addEventListener('mouseout', () => {
    mouseX = 0;
    linesArray = [];
    mouseY = 0;
    isMouseClicked = false;
})

//Function and imports to return home when game is end.
const returnHomeButton = document.getElementById('returnHome');
const endGameContainer = document.getElementById('gameEndDiv');

returnHomeButton.addEventListener('click',()=>{
    if (!isGameEnd) {
        return
    }
    buttonPushSound.play();
    endGameContainer.style.display = 'none';
    startGameContainer.style.display = 'flex';
    inGameContainer.style.display = 'none';
})














