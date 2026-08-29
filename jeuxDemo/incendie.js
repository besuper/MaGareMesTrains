function incendie(){
	
if (incendie_intervention) { // INCENDIE INTERVENTION
			
			// Police intervention
			
			intervention++;
			
			// placement des éléments
			if (intervention == 3) { police = -100; pompier = 1500;} 
			
			
			if (intervention == -1700 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_1.php'; } 
			if (intervention == -1500 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_2.php'; } 
			if (intervention == -1300 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_3.php'; } 
			if (intervention == -1100 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_4.php'; } 
			if (intervention == -900 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_5.php'; } 
			if (intervention == -700 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_6.php'; } 
			if (intervention == -500 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_7.php'; } 
			if (intervention == -300 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_8.php'; } 
			
			if (intervention == 4600 ) { document.getElementById("la_gare_5").src = 'image/fond/1005.php'; }
			if (intervention == 4400 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_1.php'; } 
			if (intervention == 4200 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_2.php'; } 
			if (intervention == 4000 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_3.php'; } 
			if (intervention == 3800 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_4.php'; } 
			if (intervention == 3600 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_5.php'; } 
			if (intervention == 3400 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_6.php'; } 
			if (intervention == 3200 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_7.php'; } 
			if (intervention == 3000 ) { document.getElementById("la_gare_5").src = 'image/fond/Renens_incendie_8.php'; } 
			
			if ( intervention == -120 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "Incendie en face de la gare !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Par sécurité les voies 2, 3, 5, 6 sont fermées !";
			document.getElementById('une_image_tableau_20').style.cssText='position: absolute; left: 330px; top:347px;'; // boite information voyageur
			
			affiche_clientchef(); }
			if ( intervention == 1 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			}
			
			if ( intervention > 1 && intervention < 3000 && its102 == 0 && its117 == 0 && its103 == 0 ) {
			its117 = 3;}
			
			if ( intervention > 1 && intervention < 3000 && its34 == 0 && its118 == 0 && its37 == 0 ) {
			its118 = 3;}
			
			if ( intervention > 1 && intervention < 3000 && its55 == 0 && its119 == 0 && its56 == 0 ) {
			its119 = 3;}
			
			if ( intervention > 1 && intervention < 3000 && its23 == 0 && its8 == 0 && its4 == 0 ) {
			its8 = 3;}
			
			
			if (intervention == 0 ) 	{ nextSong(8); }
			if (intervention == 530 ) 	{ nextSong(8); }
			
			if ( intervention > 20 ) { police = police + 5; }
			document.getElementById('police1').style.cssText='position: absolute; left: '+police+'px; top: 285px;';
			if ( police > 620 && intervention < 5300 ) {police = 620;}
			
			if ( police > 1500 ) { police = 1500; }
			
			
			compteur_feux_bleu++;
			if ( compteur_feux_bleu >= 0 && compteur_feux_bleu <= 10 ) {
			document.getElementById("police1").src = 'image/voiture/police1.php'; }
			if ( compteur_feux_bleu >= 11 && compteur_feux_bleu <= 20 ) {
			document.getElementById("police1").src = 'image/voiture/police2.php'; 
			compteur_feux_bleu = 0;}
			
			// Pompier intervention
			
			if ( intervention > 550 ) { pompier = pompier - 5; }
			document.getElementById('pompier1').style.cssText='position: absolute; left: '+pompier+'px; top: 267px;';
			if ( pompier < 780 && intervention < 5200 ) {pompier = 780;}
			
			compteur_feux_bleu++;
			if ( compteur_feux_bleu >= 0 && compteur_feux_bleu <= 10 ) {
			document.getElementById("pompier1").src = 'image/voiture/pompier2.php'; }
			if ( compteur_feux_bleu >= 11 && compteur_feux_bleu <= 20 ) {
			document.getElementById("pompier1").src = 'image/voiture/pompier1.php'; 
			compteur_feux_bleu = 0;}
			
			if ( pompier < -600 ) { pompier =  -600; }
			
			if ( intervention == 4600 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "FIN du problème !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Les voies 2, 3, 5, 6 sont utilisables !";
			document.getElementById('une_image_tableau_20').style.cssText='position: absolute; left: 330px; top:-100px;'; // boite information voyageur
			document.getElementById('tableau20').style.cssText='position: absolute; left: 420px; top:-100px; color: red; font-size: 14px;'; // texte information voyageur
			document.getElementById("tableau20").innerHTML = ""; // texte information voyageur
			affiche_clientchef(); }
			if ( intervention == 4720 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			if ( occupation_its120 == true ) 	{ its117 = 1; }
			if ( occupation_its120 == false ) 	{ its117 = 0; }
			if ( occupation_its119 == true ) 	{ its118 = 1; }
			if ( occupation_its119 == false ) 	{ its118 = 0; }
			if ( occupation_its119 == true ) 	{ its119 = 1; }
			if ( occupation_its119 == false ) 	{ its119 = 0; }
			if ( occupation_its120 == true ) 	{ its8 = 1; }
			if ( occupation_its120 == false ) 	{ its8 = 0; }
			}
			
			if ( intervention == 5800 ) { incendie_intervention = false; compteur_evenement = 1; police = -150; pompier = 1500;}
			
			
			
			} // FIN INTERVENTION	
	
	
			
	
	
	
	
	
}