function commentaire() { // commentaire sur le retard des trains, envoi des trains bonnus ?

			// document.getElementById("UnTexte_c37").innerHTML = "";
			
			commentaire_compteur++;
			compteur_intro++;
			
			if ( mauvaise_sortie_bol == true )
			{
			mauvaise_sortie++;
			
			
			if (mauvaise_sortie >= 2 && mauvaise_sortie <= 7) {
			le_texte = 1;
			couleur = 'orange';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef."; 
			if ( le_texte == 1 )  { document.getElementById("texte3").innerHTML = "Mauvaise destination pour un train<br />1 minutes de pénalité !"; }
			affiche_client();
			}
			
			if ( mauvaise_sortie == 8 ) { // On effece les commentaire clients
			document.getElementById("texte1").innerHTML = "";  document.getElementById("texte2").innerHTML = ""; document.getElementById("texte3").innerHTML = ""; 
			document.getElementById('client').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_texte').style.cssText='position: absolute; left: 520px; top:-250px;';
			mauvaise_sortie = 0; mauvaise_sortie_bol = false; retard = retard + 60;
			}
			
			}
		
			/*
			if (t101 > 1 && t101_retard == true ) { train_retard++; t101_retard = false;}
			if (t102 > 1 && t102_retard == true ) { train_retard++; t102_retard = false;}
			if (t103 > 1 && t103_retard == true ) { train_retard++; t103_retard = false;}
			if (t104 > 1 && t104_retard == true ) { train_retard++; t104_retard = false;}
			if (t105 > 1 && t105_retard == true ) { train_retard++; t105_retard = false;}
			if (t106 > 1 && t106_retard == true ) { train_retard++; t106_retard = false;}
			if (t107 > 1 && t107_retard == true ) { train_retard++; t107_retard = false;}
			if (t108 > 1 && t108_retard == true ) { train_retard++; t108_retard = false;}
			if (t109 > 1 && t109_retard == true ) { train_retard++; t109_retard = false;}
			if (t110 > 1 && t110_retard == true ) { train_retard++; t110_retard = false;}
			if (t111 > 1 && t111_retard == true ) { train_retard++; t111_retard = false;}
			if (t112 > 1 && t112_retard == true ) { train_retard++; t112_retard = false;}
			if (t113 > 1 && t113_retard == true ) { train_retard++; t113_retard = false;}
			if (t114 > 1 && t114_retard == true ) { train_retard++; t114_retard = false;}
			if (t115 > 1 && t115_retard == true ) { train_retard++; t115_retard = false;}
			if (t116 > 1 && t116_retard == true ) { train_retard++; t116_retard = false;}
			if (t117 > 1 && t117_retard == true ) { train_retard++; t117_retard = false;}
			if (t118 > 1 && t118_retard == true ) { train_retard++; t118_retard = false;}
			if (t119 > 1 && t119_retard == true ) { train_retard++; t119_retard = false;}
			if (t120 > 1 && t120_retard == true ) { train_retard++; t120_retard = false;}
			if (t121 > 1 && t121_retard == true ) { train_retard++; t121_retard = false;}
			if (t122 > 1 && t122_retard == true ) { train_retard++; t122_retard = false;}
			
			if (t201 > 1 && t201_retard == true ) { train_retard++; t201_retard = false;}
			if (t202 > 1 && t202_retard == true ) { train_retard++; t202_retard = false;}
			if (t203 > 1 && t203_retard == true ) { train_retard++; t203_retard = false;}
			if (t204 > 1 && t204_retard == true ) { train_retard++; t204_retard = false;}
			if (t205 > 1 && t205_retard == true ) { train_retard++; t205_retard = false;}
			if (t206 > 1 && t206_retard == true ) { train_retard++; t206_retard = false;}
			if (t207 > 1 && t207_retard == true ) { train_retard++; t207_retard = false;}
			if (t208 > 1 && t208_retard == true ) { train_retard++; t208_retard = false;}
			if (t209 > 1 && t209_retard == true ) { train_retard++; t209_retard = false;}
			if (t210 > 1 && t210_retard == true ) { train_retard++; t210_retard = false;}
			if (t211 > 1 && t211_retard == true ) { train_retard++; t211_retard = false;}
			if (t212 > 1 && t212_retard == true ) { train_retard++; t212_retard = false;}
			if (t213 > 1 && t213_retard == true ) { train_retard++; t213_retard = false;}
			if (t214 > 1 && t214_retard == true ) { train_retard++; t214_retard = false;}
			if (t215 > 1 && t215_retard == true ) { train_retard++; t215_retard = false;}
			if (t216 > 1 && t216_retard == true ) { train_retard++; t216_retard = false;}
			if (t217 > 1 && t217_retard == true ) { train_retard++; t217_retard = false;}
			if (t218 > 1 && t218_retard == true ) { train_retard++; t218_retard = false;}
			if (t219 > 1 && t219_retard == true ) { train_retard++; t219_retard = false;}
			if (t220 > 1 && t220_retard == true ) { train_retard++; t220_retard = false;}
			if (t221 > 1 && t221_retard == true ) { train_retard++; t221_retard = false;}
			if (t222 > 1 && t222_retard == true ) { train_retard++; t222_retard = false;}
			if (t223 > 1 && t223_retard == true ) { train_retard++; t223_retard = false;}
			
			if (t301 > 1 && t301_retard == true ) { train_retard++; t301_retard = false;}
			if (t302 > 1 && t302_retard == true ) { train_retard++; t302_retard = false;}
			if (t303 > 1 && t303_retard == true ) { train_retard++; t303_retard = false;}
			if (t304 > 1 && t304_retard == true ) { train_retard++; t304_retard = false;}
			if (t305 > 1 && t305_retard == true ) { train_retard++; t305_retard = false;}
			if (t306 > 1 && t306_retard == true ) { train_retard++; t306_retard = false;}
			if (t307 > 1 && t307_retard == true ) { train_retard++; t307_retard = false;}
			if (t308 > 1 && t308_retard == true ) { train_retard++; t308_retard = false;}
			if (t309 > 1 && t309_retard == true ) { train_retard++; t309_retard = false;}
			if (t310 > 1 && t310_retard == true ) { train_retard++; t310_retard = false;}
			if (t311 > 1 && t311_retard == true ) { train_retard++; t311_retard = false;}
			if (t312 > 1 && t312_retard == true ) { train_retard++; t312_retard = false;}
			if (t313 > 1 && t313_retard == true ) { train_retard++; t313_retard = false;}
			if (t314 > 1 && t314_retard == true ) { train_retard++; t314_retard = false;}
			if (t315 > 1 && t315_retard == true ) { train_retard++; t315_retard = false;}
			if (t316 > 1 && t316_retard == true ) { train_retard++; t316_retard = false;}
			if (t317 > 1 && t317_retard == true ) { train_retard++; t317_retard = false;}
			if (t318 > 1 && t318_retard == true ) { train_retard++; t318_retard = false;}
			if (t319 > 1 && t319_retard == true ) { train_retard++; t319_retard = false;}
			if (t320 > 1 && t320_retard == true ) { train_retard++; t320_retard = false;}
			if (t321 > 1 && t321_retard == true ) { train_retard++; t321_retard = false;}
			if (t322 > 1 && t322_retard == true ) { train_retard++; t322_retard = false;}
			
			if (t401 > 1 && t401_retard == true ) { train_retard++; t401_retard = false;}
			if (t402 > 1 && t402_retard == true ) { train_retard++; t402_retard = false;}
			if (t403 > 1 && t403_retard == true ) { train_retard++; t403_retard = false;}
			if (t404 > 1 && t404_retard == true ) { train_retard++; t404_retard = false;}
			if (t405 > 1 && t405_retard == true ) { train_retard++; t405_retard = false;}
			if (t406 > 1 && t406_retard == true ) { train_retard++; t406_retard = false;}
			if (t407 > 1 && t407_retard == true ) { train_retard++; t407_retard = false;}
			if (t408 > 1 && t408_retard == true ) { train_retard++; t408_retard = false;}
			if (t409 > 1 && t409_retard == true ) { train_retard++; t409_retard = false;}
			if (t410 > 1 && t410_retard == true ) { train_retard++; t410_retard = false;}
			if (t411 > 1 && t411_retard == true ) { train_retard++; t411_retard = false;}
			if (t412 > 1 && t412_retard == true ) { train_retard++; t412_retard = false;}
			if (t413 > 1 && t413_retard == true ) { train_retard++; t413_retard = false;}
			if (t414 > 1 && t414_retard == true ) { train_retard++; t414_retard = false;}
			if (t415 > 1 && t415_retard == true ) { train_retard++; t415_retard = false;}
			if (t416 > 1 && t416_retard == true ) { train_retard++; t416_retard = false;}
			if (t417 > 1 && t417_retard == true ) { train_retard++; t417_retard = false;}
			if (t418 > 1 && t418_retard == true ) { train_retard++; t418_retard = false;}
			if (t419 > 1 && t419_retard == true ) { train_retard++; t419_retard = false;}
			if (t420 > 1 && t420_retard == true ) { train_retard++; t420_retard = false;}
			if (t421 > 1 && t421_retard == true ) { train_retard++; t421_retard = false;}
			if (t422 > 1 && t422_retard == true ) { train_retard++; t422_retard = false;}
			*/
			
			
			
			
			
			function getRandomArbitrary(min, max) { le_texte = Math.random() * (max - min) + min; le_texte = Math.round(le_texte); }
			getRandomArbitrary(1, 7); // tirage aléatoire de la phrase
			
			function getRandomArbitrary2(min2, max2) { le_client = Math.random() * (max2 - min2) + min2; le_client = Math.round(le_client); }
			getRandomArbitrary2(1, 4); // tirage aléatoire du client
			
			
			
			
			function affiche_client() {
			
			
			var image_client = new Image(); image_client.onload = function() 	{ document.getElementById("client").src = image_client.src; } 
			image_client.src = "image/client/"+nom_client+"_"+couleur+".jpg";
			var image_boite = new Image(); image_boite.onload = function() 	{ document.getElementById("boite_texte").src = image_boite.src; } 
			image_boite.src = "image/client/texte_"+couleur+".jpg";
			document.getElementById('client').style.cssText='position: absolute; left: 400px; top:200px;';
			document.getElementById('boite_texte').style.cssText='position: absolute; left: 520px; top:200px;';
			document.getElementById('texte1').style.cssText='position: absolute; left: 550px; top:200px;';
			document.getElementById('texte2').style.cssText='position: absolute; left: 550px; top:220px;';
			document.getElementById('texte3').style.cssText='position: absolute; left: 550px; top:240px;';
		
			}
			
			
			
			
			if ( commentaire_compteur == 2 ) { // les client commente
			
			if ( minutes_de_retard <= 4 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "Super cette gare.";
			if ( le_client == 1 ) { nom_client = 'Alexia'; document.getElementById("texte1").innerHTML = "Alexia: Pendulaire avertie."; }
			if ( le_client == 2 ) { nom_client = 'Bertrand'; document.getElementById("texte1").innerHTML = "Bertrand: Passager grande ligne."; }
			if ( le_client == 3 ) { nom_client = 'Steve'; document.getElementById("texte1").innerHTML = "Steve: Voyageur pressé"; }
			if ( le_client == 4 ) { nom_client = 'Marie'; document.getElementById("texte1").innerHTML = "Marie: Pendulaire"; }
			if ( le_texte == 1 )  { document.getElementById("texte3").innerHTML = "Et en plus les toilettes sont propres !"; }
			if ( le_texte == 2 )  { document.getElementById("texte3").innerHTML = "Vraiment génial ces trains !" ; }
			if ( le_texte == 3 )  { document.getElementById("texte3").innerHTML = "Il est fort ce chef !"; }
			if ( le_texte == 4 )  { document.getElementById("texte3").innerHTML = "J'adore passer par là !"; }
			if ( le_texte == 5 )  { document.getElementById("texte3").innerHTML = "Je ne regrette pas ma voiture !"; }
			if ( le_texte == 6 )  { document.getElementById("texte3").innerHTML = "Bien plus vite qu'a pied !"; }
			if ( le_texte == 7 )  { document.getElementById("texte3").innerHTML = "Toujours aussi efficace !"; }
			affiche_client();
			}
			
			if ( minutes_de_retard >= 5 ) {
			couleur = 'orange';
			document.getElementById("texte2").innerHTML = "Mon train est en retard.";
			if ( le_client == 1 ) { nom_client = 'Alexia'; document.getElementById("texte1").innerHTML = "Alexia: Pendulaire avertie."; }
			if ( le_client == 2 ) { nom_client = 'Bertrand'; document.getElementById("texte1").innerHTML = "Bertrand: Passager grande ligne."; }
			if ( le_client == 3 ) { nom_client = 'Steve'; document.getElementById("texte1").innerHTML = "Steve: Voyageur pressé"; }
			if ( le_client == 4 ) { nom_client = 'Marie'; document.getElementById("texte1").innerHTML = "Marie: Pendulaire"; }
			if ( le_texte == 1 )  { document.getElementById("texte3").innerHTML = "Je vais encore être en retard !"; }
			if ( le_texte == 2 )  { document.getElementById("texte3").innerHTML = "Je vais être en retard au travail !" ; }
			if ( le_texte == 3 )  { document.getElementById("texte3").innerHTML = "C'est pas possible !"; }
			if ( le_texte == 4 )  { document.getElementById("texte3").innerHTML = "Je vais rater AQUAPONEY !"; }
			if ( le_texte == 5 )  { document.getElementById("texte3").innerHTML = "Je vais acheter une voiture !"; }
			if ( le_texte == 6 )  { document.getElementById("texte3").innerHTML = "J'y serrais plus vite à pied !"; }
			if ( le_texte == 7 )  { document.getElementById("texte3").innerHTML = "Cette gare à un problème !"; }
			affiche_client();
			}

			} // fin des commentaire clients
			
			if ( commentaire_compteur == 10 ) { // On effece les commentaire clients
			document.getElementById("texte1").innerHTML = "";  document.getElementById("texte2").innerHTML = ""; document.getElementById("texte3").innerHTML = ""; 
			document.getElementById('client').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_texte').style.cssText='position: absolute; left: 520px; top:-250px;';
			}
			
			
			
			
			if ( commentaire_compteur == 40 ) { // le chef Commentaire retard train 
			
			function getRandomArbitrary(min, max) { le_texte = Math.random() * (max - min) + min; le_texte = Math.round(le_texte); }
			getRandomArbitrary(1, 8); // tirage remarque du chef
			
			
			
		
			
			
			
			
			if (minutes_de_retard >= 0 && minutes_de_retard <= 4) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef."; 
			if ( le_texte == 1 )  { document.getElementById("texte3").innerHTML = "Bravo vous êtes vraiment le chef de cette gare  !"; }
			if ( le_texte == 2 )  { document.getElementById("texte3").innerHTML = "Ma gare est citée en exemple !" ; }
			if ( le_texte == 3 )  { document.getElementById("texte3").innerHTML = "Je savais ! vous êtes le meilleur !"; }
			if ( le_texte == 4 )  { document.getElementById("texte3").innerHTML = "Tout roule comme sur des roulettes !  "; }
			if ( le_texte == 5 )  { document.getElementById("texte3").innerHTML = "Les clients sont heureux ! je suis heureux !"; }
			if ( le_texte == 6 )  { document.getElementById("texte3").innerHTML = "Bravo vous êtes formidable !"; }
			if ( le_texte == 7 )  { document.getElementById("texte3").innerHTML = "Quelle belle gestion du trafic !"; }
			if ( le_texte == 8 )  { document.getElementById("texte3").innerHTML = "Bravo regardez-moi ces trains qui circulent !"; }
			affiche_client();
			}
			
			
			
			if (minutes_de_retard >= 5 && minutes_de_retard <= 90) {
			couleur = 'orange';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef."; 
			if ( le_texte == 1 )  { document.getElementById("texte3").innerHTML = "Mais vous faites quoi ?"; }
			if ( le_texte == 2 )  { document.getElementById("texte3").innerHTML = "Faites-moi circuler ces trains à l'heure !" ; }
			if ( le_texte == 3 )  { document.getElementById("texte3").innerHTML = "C'est pas possible, un enfant de 4 ans ferait mieux !"; }
			if ( le_texte == 4 )  { document.getElementById("texte3").innerHTML = "De pire en pire, je n'aurais pas dû vous engager !  "; }
			if ( le_texte == 5 )  { document.getElementById("texte3").innerHTML = "C'est une catastrophe cette circulation !"; }
			if ( le_texte == 6 )  { document.getElementById("texte3").innerHTML = "Les clients sont furieux !"; }
			if ( le_texte == 7 )  { document.getElementById("texte3").innerHTML = "Mais soyez attentif, c'est pourtant simple !"; }
			if ( le_texte == 8 )  { document.getElementById("texte3").innerHTML = "C'est une catastrophe ?<br />On bloque la moitié du réseaux !"; }
			affiche_client();
			}
			
			
			
			} // fin commentaire du chef
			
			
			
			
			if ( commentaire_compteur == 50 ) { // On effece le chef
			document.getElementById("texte1").innerHTML = "";  document.getElementById("texte2").innerHTML = ""; document.getElementById("texte3").innerHTML = ""; 
			document.getElementById('client').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_texte').style.cssText='position: absolute; left: 520px; top:-250px;';
			}
			
			
			
			
			if ( commentaire_compteur > 100 ) 
			{ 
			commentaire_compteur = 0;
			}
			
			// Le nouveau reponsable 
			
			
			if ( compteur_intro > 12 && compteur_intro < 15 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef. 1/9"; 
			document.getElementById("texte3").innerHTML = "Bonjour<br />Vous êtes mon nouveau responsable de circulation des trains ?";
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: 190px; color: red; font-size: 14px;';
			affiche_client();
			} 
			
			if ( compteur_intro > 15 && compteur_intro < 18 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef. 2/9"; 
			document.getElementById("texte3").innerHTML = "Bof ! Bon, je vous demande juste de me faire circuler<br />ces trains à l'heure !";
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: 190px; color: red; font-size: 14px;';
			affiche_client();
			} 
			
			if ( compteur_intro > 18 && compteur_intro < 21 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef. 3/9"; 
			document.getElementById("texte3").innerHTML = 'Vous pouvez tourner les aiguillages en cliquant dessus ! ';
			document.getElementById('fleche').style.cssText='position: absolute; left: 790px; top: 560px;';
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: 190px; color: red; font-size: 14px;';
			affiche_client();
			} 
			
			if ( compteur_intro > 21 && compteur_intro < 24 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef. 4/9"; 
			document.getElementById("texte3").innerHTML = 'Il suffit de cliquer sur les feux pour<br />libéré le passage du train ! ';
			document.getElementById('fleche').style.cssText='position: absolute; left: 1120px; top: 660px;';
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: 190px; color: red; font-size: 14px;';
			affiche_client();
			} 
			
			if ( compteur_intro > 24 && compteur_intro < 27 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef. 5/9"; 
			document.getElementById("texte3").innerHTML = "Vous avez ici les horaires<br />L'indication de l'entrée et de la sortie du train !";
			document.getElementById('fleche').style.cssText='position: absolute; left: 50px; top: 393px;';
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: 190px; color: red; font-size: 14px;';
			affiche_client();
			} 
			
			if ( compteur_intro > 27 && compteur_intro < 30 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef. 6/9"; 
			document.getElementById("texte3").innerHTML = "Les trains sont représenté en rouge !";
			document.getElementById('fleche').style.cssText='position: absolute; left: 780px; top: 580px;';
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: 190px; color: red; font-size: 14px;';
			affiche_client();
			} 
			
			if ( compteur_intro > 30 && compteur_intro < 33 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef. 7/9"; 
			document.getElementById("texte3").innerHTML = "Pour effacer le dernier parcours qui a été créé!<br />Utilisez le bouton rouge !";
			document.getElementById('fleche').style.cssText='position: absolute; left: 50px; top: 470px;';
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: 190px; color: red; font-size: 14px;';
			affiche_client();
			} 
			
			if ( compteur_intro > 33 && compteur_intro < 36 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef. 8/9"; 
			document.getElementById("texte3").innerHTML = "Mais attention pas plus de 20 minutes de retard<br />Ou je vous vire....!";
			document.getElementById('fleche').style.cssText='position: absolute; left: 800px; top: 150px;';
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: 190px; color: red; font-size: 14px;';
			affiche_client();
			} 
			
			if ( compteur_intro > 36 && compteur_intro < 39 ) {
			couleur = 'bleu';
			document.getElementById("texte2").innerHTML = "";
			nom_client = 'Joe'; document.getElementById("texte1").innerHTML = "Joe: Le chef. 9/9"; 
			document.getElementById("texte3").innerHTML = "Allez, je vous passe les commandes, moi j'ai AQUAPONEY !<br />Bonne chance !";
			document.getElementById('fleche').style.cssText='position: absolute; left: 1000px; top: -200px;';
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: 190px; color: red; font-size: 14px;';
			affiche_client();
			} 
			
			if ( compteur_intro > 39 && compteur_intro < 43 ) {
			document.getElementById("texte1").innerHTML = "";  document.getElementById("texte2").innerHTML = ""; document.getElementById("texte3").innerHTML = ""; 
			document.getElementById('client').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_texte').style.cssText='position: absolute; left: 520px; top:-250px;';
			document.getElementById('texti').style.cssText='position: absolute; left: 730px; top: -90px; color: red; font-size: 14px;';
			document.getElementById('fleche').style.cssText='position: absolute; left: 1000px; top: -200px;';
			} 
			
			
			if ( compteur_intro > 1000 ) {
			compteur_intro = 65;
			}

			

}