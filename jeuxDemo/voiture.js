			
			function voiture() {
			
			// MAN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			
			// MAN 1
			
			man1 = man1 + 1;
			document.getElementById('man1').style.cssText='position: absolute; left: '+man1+'px; top: 290px;';
			if ( man1 > 2600 ) {man1 = -200;}
			
			// LES VOITURES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			
			// chariot 1 1 / 10 secondes
			
			//document.getElementById("UnTexte_c34").innerHTML = chario_voiture_2_1+'/'+chario_voiture_2_2;
			
			if ( les_secondes == 6 ) {
			function getRandomArbitrary2(min2, max2) { choix_voiture_1_1 = Math.random() * (max2 - min2) + min2; 
			choix_voiture_1_1 = Math.round(choix_voiture_1_1); }
			getRandomArbitrary2(1, 7); 
			}

			if ( les_secondes == 7 ) 
			{ var Chario_voiture_1_1 = new Image(); Chario_voiture_1_1.onload = function() 	{ 
			document.getElementById("chario_voiture_1_1").src = Chario_voiture_1_1.src; } 
			Chario_voiture_1_1.src = "image/voiture/voiture_1_"+choix_voiture_1_1+".php"; 
			chario_voiture_1_1 = -300; 
			if ( choix_voiture_1_1 >= 1 && choix_voiture_1_1 <= 5 ) { hauteur_veh_1_1 = 295;}
			if ( choix_voiture_1_1 >= 6 && choix_voiture_1_1 <= 7 ) { hauteur_veh_1_1 = 245;}
			document.getElementById('chario_voiture_1_1').style.cssText='position: absolute; left: '+chario_voiture_1_1+'px; top: '+hauteur_veh_1_1+'px;';
			}
			
			if ( les_secondes > 8 && les_secondes < 23 && chario_voiture_1_1 < 1400) {
			chario_voiture_1_1 = chario_voiture_1_1 + 6; 
			document.getElementById('chario_voiture_1_1').style.cssText='position: absolute; left: '+chario_voiture_1_1+'px; top: '+hauteur_veh_1_1+'px;';
			}
			
			// chariot 1 2 / 22 secondes
			
			if ( les_secondes == 20 ) {
			function getRandomArbitrary2(min2, max2) { choix_voiture_1_2 = Math.random() * (max2 - min2) + min2; 
			choix_voiture_1_2 = Math.round(choix_voiture_1_2); }
			getRandomArbitrary2(1, 7); 
			}

			if ( les_secondes == 21 ) 
			{ var Chario_voiture_1_2 = new Image(); Chario_voiture_1_2.onload = function() 	{ 
			document.getElementById("chario_voiture_1_2").src = Chario_voiture_1_2.src; } 
			Chario_voiture_1_2.src = "image/voiture/voiture_1_"+choix_voiture_1_2+".php"; 
			chario_voiture_1_2 = -300;
			if ( choix_voiture_1_2 >= 1 && choix_voiture_1_2 <= 5 ) { hauteur_veh_1_2 = 295;}
			if ( choix_voiture_1_2 >= 6 && choix_voiture_1_2 <= 7 ) { hauteur_veh_1_2 = 245;}
			document.getElementById('chario_voiture_1_2').style.cssText='position: absolute; left: '+chario_voiture_1_2+'px; top: '+hauteur_veh_1_2+'px;';
			}
			
			if ( les_secondes > 22 && les_secondes < 37  && chario_voiture_1_2 < 1400) {
			chario_voiture_1_2 = chario_voiture_1_2 + 6; 
			document.getElementById('chario_voiture_1_2').style.cssText='position: absolute; left: '+chario_voiture_1_2+'px; top: '+hauteur_veh_1_2+'px;';
			}
			
			// chariot 1 1 / 27 secondes
			
			if ( les_secondes == 25 ) {
			function getRandomArbitrary2(min2, max2) { choix_voiture_1_1 = Math.random() * (max2 - min2) + min2; 
			choix_voiture_1_1 = Math.round(choix_voiture_1_1); }
			getRandomArbitrary2(1, 7); 
			}

			if ( les_secondes == 26 ) 
			{ var Chario_voiture_1_1 = new Image(); Chario_voiture_1_1.onload = function() 	{ 
			document.getElementById("chario_voiture_1_1").src = Chario_voiture_1_1.src; } 
			Chario_voiture_1_1.src = "image/voiture/voiture_1_"+choix_voiture_1_1+".php"; 
			chario_voiture_1_1 = -300;
			if ( choix_voiture_1_1 >= 1 && choix_voiture_1_1 <= 5 ) { hauteur_veh_1_1 = 295;}
			if ( choix_voiture_1_1 >= 6 && choix_voiture_1_1 <= 7 ) { hauteur_veh_1_1 = 245;}
			document.getElementById('chario_voiture_1_1').style.cssText='position: absolute; left: '+chario_voiture_1_1+'px; top: '+hauteur_veh_1_1+'px;';
			}
			
			if ( les_secondes > 27 && les_secondes < 42 && chario_voiture_1_1 < 1400) {
			chario_voiture_1_1 = chario_voiture_1_1 + 6; 
			document.getElementById('chario_voiture_1_1').style.cssText='position: absolute; left: '+chario_voiture_1_1+'px; top: '+hauteur_veh_1_1+'px;';
			}
			
			
			// chariot 1 2 / 37 secondes
			
			if ( les_secondes == 35 ) {
			function getRandomArbitrary2(min2, max2) { choix_voiture_1_2 = Math.random() * (max2 - min2) + min2; 
			choix_voiture_1_2 = Math.round(choix_voiture_1_2); }
			getRandomArbitrary2(1, 7); 
			}

			if ( les_secondes == 36 ) 
			{ var Chario_voiture_1_2 = new Image(); Chario_voiture_1_2.onload = function() 	{ 
			document.getElementById("chario_voiture_1_2").src = Chario_voiture_1_2.src; } 
			Chario_voiture_1_2.src = "image/voiture/voiture_1_"+choix_voiture_1_2+".php"; 
			chario_voiture_1_2 = -300;
			if ( choix_voiture_1_2 >= 1 && choix_voiture_1_2 <= 5 ) { hauteur_veh_1_2 = 295;}
			if ( choix_voiture_1_2 >= 6 && choix_voiture_1_2 <= 7 ) { hauteur_veh_1_2 = 245;}
			document.getElementById('chario_voiture_1_2').style.cssText='position: absolute; left: '+chario_voiture_1_2+'px; top: '+hauteur_veh_1_2+'px;';
			}
			
			if ( les_secondes > 37 && les_secondes < 52 && chario_voiture_1_2 < 1400) {
			chario_voiture_1_2 = chario_voiture_1_2 + 6; 
			document.getElementById('chario_voiture_1_2').style.cssText='position: absolute; left: '+chario_voiture_1_2+'px; top: '+hauteur_veh_1_2+'px;';
			}
			
			
			// chariot 1 1 / 44 secondes
			
			if ( les_secondes == 42 ) {
			function getRandomArbitrary2(min2, max2) { choix_voiture_1_1 = Math.random() * (max2 - min2) + min2; 
			choix_voiture_1_1 = Math.round(choix_voiture_1_1); }
			getRandomArbitrary2(1, 7); 
			}

			if ( les_secondes == 43 ) 
			{ var Chario_voiture_1_1 = new Image(); Chario_voiture_1_1.onload = function() 	{ 
			document.getElementById("chario_voiture_1_1").src = Chario_voiture_1_1.src; } 
			Chario_voiture_1_1.src = "image/voiture/voiture_1_"+choix_voiture_1_1+".php"; 
			chario_voiture_1_1 = -300;
			if ( choix_voiture_1_1 >= 1 && choix_voiture_1_1 <= 5 ) { hauteur_veh_1_1 = 295;}
			if ( choix_voiture_1_1 >= 6 && choix_voiture_1_1 <= 7 ) { hauteur_veh_1_1 = 245;}
			document.getElementById('chario_voiture_1_1').style.cssText='position: absolute; left: '+chario_voiture_1_1+'px; top: '+hauteur_veh_1_1+'px;';
			}
			
			if ( les_secondes > 44 && les_secondes < 59 && chario_voiture_1_1 < 1400) {
			chario_voiture_1_1 = chario_voiture_1_1 + 6; 
			document.getElementById('chario_voiture_1_1').style.cssText='position: absolute; left: '+chario_voiture_1_1+'px; top: '+hauteur_veh_1_1+'px;';
			}
			
			// chariot 2_1 / 4 secondes
			
			if ( les_secondes == 2 ) {
			function getRandomArbitrary2(min2, max2) { choix_voiture_2_1 = Math.random() * (max2 - min2) + min2; 
			choix_voiture_2_1 = Math.round(choix_voiture_2_1); }
			getRandomArbitrary2(1, 7); 
			}

			if ( les_secondes == 3 ) 
			{ var Chario_voiture_2_1 = new Image(); Chario_voiture_2_1.onload = function() 	{ 
			document.getElementById("chario_voiture_2_1").src = Chario_voiture_2_1.src; } 
			Chario_voiture_2_1.src = "image/voiture/voiture_2_"+choix_voiture_2_1+".php"; 
			chario_voiture_2_1 = 1600;
			if ( choix_voiture_2_1 >= 1 && choix_voiture_2_1 <= 5 ) { hauteur_veh_2_1 = 295;}
			if ( choix_voiture_2_1 >= 6 && choix_voiture_2_1 <= 7 ) { hauteur_veh_2_1 = 245;}
			document.getElementById('chario_voiture_2_1').style.cssText='position: absolute; left: '+chario_voiture_2_1+'px; top: '+hauteur_veh_2_1+'px;';
			}
			
			if ( les_secondes > 4 && les_secondes < 19 && chario_voiture_2_1 > -300) {
			chario_voiture_2_1 = chario_voiture_2_1 - 6; 
			document.getElementById('chario_voiture_2_1').style.cssText='position: absolute; left: '+chario_voiture_2_1+'px; top: '+hauteur_veh_2_1+'px;';
			}
			
			// chariot 2_2 / 15 secondes
			
			if ( les_secondes == 13 ) {
			function getRandomArbitrary2(min2, max2) { choix_voiture_2_2 = Math.random() * (max2 - min2) + min2; 
			choix_voiture_2_2 = Math.round(choix_voiture_2_2); }
			getRandomArbitrary2(1, 7); 
			}

			
			if ( les_secondes == 14 ) 
			{ var Chario_voiture_2_2 = new Image(); Chario_voiture_2_2.onload = function() 	{ 
			document.getElementById("chario_voiture_2_2").src = Chario_voiture_2_2.src; } 
			Chario_voiture_2_2.src = "image/voiture/voiture_2_"+choix_voiture_2_2+".php"; 
			chario_voiture_2_2 = 1600;
			if ( choix_voiture_2_2 >= 1 && choix_voiture_2_2 <= 5 ) { hauteur_veh_2_2 = 295;}
			if ( choix_voiture_2_2 >= 6 && choix_voiture_2_2 <= 7 ) { hauteur_veh_2_2 = 245;}
			document.getElementById('chario_voiture_2_2').style.cssText='position: absolute; left: '+chario_voiture_2_2+'px; top: '+hauteur_veh_2_2+'px;';
			}
			
			
			
			if ( les_secondes > 15 && les_secondes < 30 && chario_voiture_2_2 > -300) {
			chario_voiture_2_2 = chario_voiture_2_2 - 6; 
			document.getElementById('chario_voiture_2_2').style.cssText='position: absolute; left: '+chario_voiture_2_2+'px; top: '+hauteur_veh_2_2+'px;';
			}
			
			// chariot 2_1 / 30 secondes
			
			if ( les_secondes == 28 ) {
			function getRandomArbitrary2(min2, max2) { choix_voiture_2_1 = Math.random() * (max2 - min2) + min2; 
			choix_voiture_2_1 = Math.round(choix_voiture_2_1); }
			getRandomArbitrary2(1, 7); 
			}

			if ( les_secondes == 29 ) 
			{ var Chario_voiture_2_1 = new Image(); Chario_voiture_2_1.onload = function() 	{ 
			document.getElementById("chario_voiture_2_1").src = Chario_voiture_2_1.src; } 
			Chario_voiture_2_1.src = "image/voiture/voiture_2_"+choix_voiture_2_1+".php"; 
			chario_voiture_2_1 = 1600;
			if ( choix_voiture_2_1 >= 1 && choix_voiture_2_1 <= 5 ) { hauteur_veh_2_1 = 295;}
			if ( choix_voiture_2_1 >= 6 && choix_voiture_2_1 <= 7 ) { hauteur_veh_2_1 = 245;}
			document.getElementById('chario_voiture_2_1').style.cssText='position: absolute; left: '+chario_voiture_2_1+'px; top: '+hauteur_veh_2_1+'px;';
			}
			
			if ( les_secondes > 30 && les_secondes < 45 && chario_voiture_2_1 > -300) {
			chario_voiture_2_1 = chario_voiture_2_1 - 6; 
			document.getElementById('chario_voiture_2_1').style.cssText='position: absolute; left: '+chario_voiture_2_1+'px; top: '+hauteur_veh_2_1+'px;';
			}
			
			// chariot 2_2 / 40 secondes
			
			if ( les_secondes == 38 ) {
			function getRandomArbitrary2(min2, max2) { choix_voiture_2_2 = Math.random() * (max2 - min2) + min2; 
			choix_voiture_2_2 = Math.round(choix_voiture_2_2); }
			getRandomArbitrary2(1, 7); 
			}

			if ( les_secondes == 39 ) 
			{ var Chario_voiture_2_2 = new Image(); Chario_voiture_2_2.onload = function() 	{ 
			document.getElementById("chario_voiture_2_2").src = Chario_voiture_2_2.src; } 
			Chario_voiture_2_2.src = "image/voiture/voiture_2_"+choix_voiture_2_2+".php"; 
			chario_voiture_2_2 = 1600;
			if ( choix_voiture_2_2 >= 1 && choix_voiture_2_2 <= 5 ) { hauteur_veh_2_2 = 295;}
			if ( choix_voiture_2_2 >= 6 && choix_voiture_2_2 <= 7 ) { hauteur_veh_2_2 = 245;}
			document.getElementById('chario_voiture_2_2').style.cssText='position: absolute; left: '+chario_voiture_2_2+'px; top: '+hauteur_veh_2_2+'px;';
			}
			
			if ( les_secondes > 40 && les_secondes < 55 && chario_voiture_2_2 > -300) {
			chario_voiture_2_2 = chario_voiture_2_2 - 6; 
			}
			
			}