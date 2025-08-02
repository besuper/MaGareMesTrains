function ampli() {
    if (le_ampli) {
        animation_ampli++;

        if (animation_ampli == 50) {
            son_ouvert = false;
        }

        if (animation_ampli == 100) {
            function getRandomArbitrary3(min3, max3) {
                la_musique = Math.random() * (max3 - min3) + min3;
                la_musique = Math.round(la_musique);
            }
            getRandomArbitrary3(1, 6); // tirage aléatoire du morceaux

            document.getElementById('ampli').style.cssText =
                'position: absolute; left: 600px; top:265px; width:150px; height: 100px;';

            if (la_musique == 1) {
                nextSong2(10);
                unite_musique = 1800;
            } // 10 Princesse 3.52 / fin animation 5800
            if (la_musique == 2) {
                nextSong2(11);
                unite_musique = 1000;
            } // 11 Tout au fond de tes yeux 3.17 / fin animation 5000
            if (la_musique == 3) {
                nextSong2(12);
                unite_musique = 2300;
            } // 12 Domino-Minette 4.06 / fin animation 6300
            if (la_musique == 4) {
                nextSong2(14);
                unite_musique = 1500;
            } // 14 Frisson d'hiver 3.37 / fin animation 5550
            if (la_musique == 5) {
                nextSong2(15);
                unite_musique = 100;
            } // 15 Isabelle 2.42 / fin animation 4100
            if (la_musique == 6) {
                nextSong2(39);
                unite_musique = 2600;
            } // 39 Mister coucou 4.21 / fin animation 6600
            if (la_musique == 7) {
                nextSong2(40);
                unite_musique = 1500;
            } // 40 Marie Madealine 3.16 / fin animation 5500
        }

        if (animation_ampli == 300) {
            couleur = 'jaune';
            document.getElementById('texte2chef').innerHTML =
                'Un groupe <a href="https://www.youtube.com/@mettralalain7651">de musique</a> improvise un concert à la gare  !';
            nom_client = 'Joe';
            document.getElementById('texte1chef').innerHTML = 'Joe: Le chef.';
            document.getElementById('texte3chef').innerHTML =
                'Le courant est coupé sur certaines voies';
            affiche_clientchef();
        }

        if (animation_ampli == 420) {
            document.getElementById('texte1chef').innerHTML = '';
            document.getElementById('texte2chef').innerHTML = '';
            document.getElementById('texte3chef').innerHTML = '';
            document.getElementById('clientchef').style.cssText =
                'position: absolute; left: 400px; top:-250px;';
            document.getElementById('boite_textechef').style.cssText =
                'position: absolute; left: 520px; top:-250px;';
        }

        if (
            animation_ampli > 300 &&
            animation_ampli < 3000 &&
            its73 == 0 &&
            its120 == 0 &&
            its74 == 0
        ) {
            its120 = 3;
        } // voie 1 its120
        if (
            animation_ampli > 300 &&
            animation_ampli < 3000 &&
            its55 == 0 &&
            its119 == 0 &&
            its56 == 0
        ) {
            its119 = 3;
        } // voie 2 its119
        if (
            animation_ampli > 300 &&
            animation_ampli < 3000 &&
            its34 == 0 &&
            its118 == 0 &&
            its37 == 0
        ) {
            its118 = 3;
        } // voie 3 its118

        if (animation_ampli == 3800 + unite_musique) {
            couleur = 'jaune';
            document.getElementById('texte2chef').innerHTML =
                'FIN du problème avec le groupe <a href="https://www.youtube.com/@mettralalain7651">de musique</a>';
            nom_client = 'Joe';
            document.getElementById('texte1chef').innerHTML = 'Joe: Le chef.';
            document.getElementById('texte3chef').innerHTML = 'Toutes les voies sont utilisables !';
            document.getElementById('une_image_tableau_20').style.cssText =
                'position: absolute; left: 330px; top:-100px;'; // boite information voyageur
            document.getElementById('tableau20').style.cssText =
                'position: absolute; left: 420px; top:-100px; color: red; font-size: 14px;'; // texte information voyageur
            document.getElementById('tableau20').innerHTML = ''; // texte information voyageur
            document.getElementById('ampli').style.cssText =
                'position: absolute; left: 600px; top:-265px; width:150px; height: 100px;'; // le groupe disparait
            if (occupation_its120 == true) {
                its120 = 1;
            }
            if (occupation_its120 == false) {
                its120 = 0;
            }
            if (occupation_its119 == true) {
                its119 = 1;
            }
            if (occupation_its119 == false) {
                its119 = 0;
            }
            if (occupation_its118 == true) {
                its118 = 1;
            }
            if (occupation_its118 == false) {
                its118 = 0;
            }

            affiche_clientchef();
        }

        if (animation_ampli == 3920 + unite_musique) {
            document.getElementById('texte1chef').innerHTML = '';
            document.getElementById('texte2chef').innerHTML = '';
            document.getElementById('texte3chef').innerHTML = '';
            document.getElementById('clientchef').style.cssText =
                'position: absolute; left: 400px; top:-250px;';
            document.getElementById('boite_textechef').style.cssText =
                'position: absolute; left: 520px; top:-250px;';
        }

        if (animation_ampli == 4000 + unite_musique) {
            son_ouvert = true;
            le_ampli = false;
            compteur_evenement = 1;
        }
    }
}
