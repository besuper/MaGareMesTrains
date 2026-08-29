function neige() {
	
			
	
			// LA NEIGE
			
			if (animation_neige_bol == true) {
			animation_neige++;
			
			// REINITIALISER LES VALEUR
			
			if ( animation_neige == 5 ) {
			document.getElementById('lecielneige').style.cssText='position: absolute; left: 100px; top: -120px; width: 1200px; height: 50px;';
			document.getElementById('laneige1').style.cssText='position: absolute; left: 100px; top: -320px; width: 1200px; height: 300px;';
			document.getElementById('laneige2').style.cssText='position: absolute; left: 100px; top: -320px; width: 1200px; height: 300px;';
			document.getElementById('laneige-fond').style.cssText='position: absolute; left: 100px; top: 700px; width: 1200px; height: 50px;';
			document.getElementById('leski1').style.cssText='position: absolute; left: 140px; top: -270px; width: 80px; height: 100px;';
			document.getElementById('leski2').style.cssText='position: absolute; left: 140px; top: -270px; width: 80px; height: 100px;';
			document.getElementById('leski3').style.cssText='position: absolute; left: 140px; top: -270px; width: 80px; height: 100px;';
			document.getElementById('legas').style.cssText='position: absolute; left: 400px; top: -220px; width: 300px; height: 260px;';
			document.getElementById('lamachine').style.cssText='position: absolute; left: 1300px; top: 170px; width: 500px; height: 300px;';
			cielneige = -120;
			laneige1 = -250;
			laneige2 = -550;
			fondneige = 700;
			machine = 1300;
			}
			
			
			if ( animation_neige > 10 && animation_neige < 250 ) { // le ciel
			cielneige++;	
			document.getElementById('lecielneige').style.cssText='position: absolute; left: 100px; top:'+cielneige+'px; width: 1200px; height: 50px;';
			}
			
			
			
			if ( animation_neige > 350 && animation_neige < 2800 ) { // la neige
			laneige1++;
			laneige1++;
			laneige2++;
			laneige2++;
			document.getElementById('laneige1').style.cssText='position: absolute; left: 100px; top:'+laneige1+'px; width: 1200px; height: 300px;';
			document.getElementById('laneige2').style.cssText='position: absolute; left: 100px; top:'+laneige2+'px; width: 1200px; height: 300px;';
			if ( laneige1 > 400 ) { laneige1 = -200;}
			if ( laneige2 > 400 ) { laneige2 = -200;}
			}
			
			if ( animation_neige == 600 ) { 
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = 'De fortes chutes de neige bloque la gare !';
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Certaines voies sont fermées !";
			
			
			affiche_clientchef();
			}
			
			if ( animation_neige > 600 && animation_neige < 3000 	&& its73 == 0 && its120 == 0 && its74 == 0 ) 	{its120 = 3;}	// voie 1 its120
			if ( animation_neige > 600 && animation_neige < 3000 	&& its55 == 0 && its119 == 0 && its56 == 0 ) 	{its119 = 3;}	// voie 2 its119
			if ( animation_neige > 600 && animation_neige < 3000 	&& its34 == 0 && its118 == 0 && its37 == 0 ) 	{its118 = 3;}	// voie 3 its118
			
			
			
			
			if ( animation_neige == 730 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			}
			
			
			if ( animation_neige > 700 && animation_neige < 1075 ) { // le fond
			fondneige--;	
			document.getElementById('laneige-fond').style.cssText='position: absolute; left: 100px; top:'+fondneige+'px; width: 1200px; height: 50px;';
			}
			
			if ( animation_neige == 1180 ) { // Skieur 2
			document.getElementById('leski2').style.cssText='position: absolute; left: 440px; top: 270px; width: 80px; height: 100px;';
			}
			
			if ( animation_neige == 1230 ) { // les gas
			document.getElementById('legas').style.cssText='position: absolute; left: 400px; top: 220px; width: 300px; height: 260px;';
			}
			
			if ( animation_neige == 1280 ) { // Skieur 1
			document.getElementById('leski1').style.cssText='position: absolute; left: 140px; top: 270px; width: 80px; height: 100px;';
			}
			
			if ( animation_neige == 1320 ) { // Skieur 3
			document.getElementById('leski3').style.cssText='position: absolute; left: 640px; top: 270px; width: 80px; height: 100px;';
			}
			
			if ( animation_neige > 1320 && animation_neige < 1820 ) { // la machine
			machine--;	
			document.getElementById('lamachine').style.cssText='position: absolute; left: '+machine+'px; top:170px; width: 500px; height: 300px;';
			}
			
			if ( animation_neige == 1230 ) { // les gas
			document.getElementById('legas').style.cssText='position: absolute; left: 500px; top: 220px; width: 300px; height: 260px;';
			}
			
			if ( animation_neige > 1950 && animation_neige < 2150 ) { // la machine
			machine++;	
			document.getElementById('lamachine').style.cssText='position: absolute; left: '+machine+'px; top:170px; width: 500px; height: 300px;';
			}
			
			if ( animation_neige == 1950 ) { // les gas
			document.getElementById('legas').style.cssText='position: absolute; left: 600px; top: 220px; width: 300px; height: 260px;';
			}
			
			if ( animation_neige > 2300 && animation_neige < 2450 ) { // la machine
			machine--;	
			document.getElementById('lamachine').style.cssText='position: absolute; left: '+machine+'px; top:170px; width: 500px; height: 300px;';
			}
			
			if ( animation_neige == 2300 ) { // les gas
			document.getElementById('legas').style.cssText='position: absolute; left: 450px; top: 220px; width: 300px; height: 260px;';
			}
			
			if ( animation_neige > 2800 ) { // la neige s'arrête
			laneige1++;
			laneige1++;
			laneige2++;
			laneige2++;
			document.getElementById('laneige1').style.cssText='position: absolute; left: 100px; top:'+laneige1+'px; width: 1200px; height: 300px;';
			document.getElementById('laneige2').style.cssText='position: absolute; left: 100px; top:'+laneige2+'px; width: 1200px; height: 300px;';
			if ( laneige1 > 400 ) { laneige1 = 400;}
			if ( laneige2 > 400 ) { laneige2 = 400;}
			}
			
			
			if ( animation_neige > 2900 && animation_neige < 3150 ) { // la machine
			machine++;	
			document.getElementById('lamachine').style.cssText='position: absolute; left: '+machine+'px; top:170px; width: 500px; height: 300px;';
			}
			
			if ( animation_neige == 2900 ) { // les gas
			document.getElementById('legas').style.cssText='position: absolute; left: 350px; top: 220px; width: 300px; height: 260px;';
			}
			
			if ( animation_neige == 2920 ) { // Skieur 1
			document.getElementById('leski1').style.cssText='position: absolute; left: 140px; top: -270px; width: 80px; height: 100px;';
			}
			
			if ( animation_neige > 3250 && animation_neige < 3400 ) { // la machine
			machine--;	
			document.getElementById('lamachine').style.cssText='position: absolute; left: '+machine+'px; top:170px; width: 500px; height: 300px;';
			}
			
			if ( animation_neige == 3270 ) { // les gas
			document.getElementById('legas').style.cssText='position: absolute; left: 350px; top: 220px; width: 300px; height: 260px;';
			}
			
			if ( animation_neige == 3290 ) { // Skieur 2
			document.getElementById('leski2').style.cssText='position: absolute; left: 140px; top: -270px; width: 80px; height: 100px;';
			}
			
			
			if ( animation_neige > 3600 && animation_neige < 3950 ) { // la machine sort
			machine++;	
			document.getElementById('lamachine').style.cssText='position: absolute; left: '+machine+'px; top:170px; width: 500px; height: 300px;';
			}
			
			if ( animation_neige == 3630 ) { // les gas
			document.getElementById('legas').style.cssText='position: absolute; left: 350px; top: -220px; width: 300px; height: 260px;';
			}
			
			if ( animation_neige == 3650 ) { // Skieur 3
			document.getElementById('leski3').style.cssText='position: absolute; left: 140px; top: -270px; width: 80px; height: 100px;';
			}
			
			if ( animation_neige > 3800 && animation_neige < 4000 ) { // le fond
			fondneige++;	
			document.getElementById('laneige-fond').style.cssText='position: absolute; left: 100px; top:'+fondneige+'px; width: 1200px; height: 50px;';
			}
			
			if ( animation_neige == 4000 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = 'FIN du problème avec la neige !</a>';
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Les voies sont utilisables !";
			document.getElementById('une_image_tableau_20').style.cssText='position: absolute; left: 330px; top:-100px;'; // boite information voyageur
			document.getElementById('tableau20').style.cssText='position: absolute; left: 420px; top:-100px; color: red; font-size: 14px;'; // texte information voyageur
			document.getElementById("tableau20").innerHTML = ""; // texte information voyageur
			affiche_clientchef(); 
			if ( occupation_its120 == true ) 	{ its120 = 1; }
			if ( occupation_its120 == false ) 	{ its120 = 0; }
			if ( occupation_its119 == true ) 	{ its119 = 1; }
			if ( occupation_its119 == false ) 	{ its119 = 0; }
			if ( occupation_its118 == true ) 	{ its118 = 1; }
			if ( occupation_its118 == false ) 	{ its118 = 0; }
			
			
			
			}
			
			if ( animation_neige == 4120 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			}
			
			
			if ( animation_neige > 4100 && animation_neige < 4250 ) { // le ciel
			cielneige--;	
			document.getElementById('lecielneige').style.cssText='position: absolute; left: 100px; top:'+cielneige+'px; width: 1200px; height: 50px;';
			}
			
			if (animation_neige == 4300 ) {animation_neige_bol = false; compteur_evenement = 1;} // fin animation neige
			
			} 
	
	
}