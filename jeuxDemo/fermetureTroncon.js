			// FERMETURE TRONCON
			
			function fermetureTroncon() {
				
			compteur_evenement2++;
			
			// Fermeture secteur B12 
			/*
			if ( compteur_evenement2 > 5 && compteur_evenement2 < 300 && its15 == 0 ) { its15 = 3; } 
			
			if ( compteur_evenement2 == 10 ) { 
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "ATTENTION Problèmes technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le secteur de voie B12 est fermé pour 5 minutes !";
			affiche_clientchef(); }
			if ( compteur_evenement2 == 15 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			if ( compteur_evenement2 == 300 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "FIN du problème technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le secteur B12 est ouvert !";
			affiche_clientchef(); 
			}
			if ( compteur_evenement2 == 305 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			if ( compteur_evenement2 > 300 && compteur_evenement2 < 302 ) { 
			if ( occupation_its15 == true ) 	{ its15 = 1; }
			if ( occupation_its15 == false ) 	{ its15 = 0; }
			}
			
			
			// Fermeture secteur C42
			
			if ( compteur_evenement2 > 500 && compteur_evenement2 < 800 && its38 == 0 ) { its38 = 3; } 
			
			if ( compteur_evenement2 == 510 ) { 
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "ATTENTION Problèmes technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le secteur de voie C42 est fermé pour 5 minutes !";
			affiche_clientchef(); }
			if ( compteur_evenement2 == 515 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			if ( compteur_evenement2 == 800 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "FIN du problème technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le secteur C42 est ouvert !";
			affiche_clientchef(); 
			}
			if ( compteur_evenement2 == 805 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			if ( compteur_evenement2 > 800 && compteur_evenement2 < 802 ) { 
			if ( occupation_its38 == true ) 	{ its38 = 1; }
			if ( occupation_its38 == false ) 	{ its38 = 0; }
			}
			
			// Fermeture secteur E16
			
			if ( compteur_evenement2 > 1000 && compteur_evenement2 < 1300 && its72 == 0 ) { its72 = 3; } 
			
			if ( compteur_evenement2 == 1010 ) { 
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "ATTENTION Problèmes technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le secteur de voie E16 est fermé pour 5 minutes !";
			affiche_clientchef(); }
			if ( compteur_evenement2 == 1015 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			if ( compteur_evenement2 == 1300 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "FIN du problème technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le secteur E16 est ouvert !";
			affiche_clientchef(); 
			}
			if ( compteur_evenement2 == 1305 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			if ( compteur_evenement2 > 1300 && compteur_evenement2 < 1302 ) { 
			if ( occupation_its72 == true ) 	{ its72 = 1; }
			if ( occupation_its72 == false ) 	{ its72 = 0; }
			}
			
			// Fermeture secteur C42
			
			if ( compteur_evenement2 > 1500 && compteur_evenement2 < 1800 && its38 == 0 ) { its38 = 3; } 
			
			if ( compteur_evenement2 == 1510 ) { 
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "ATTENTION Problèmes technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le secteur de voie C42 est fermé pour 5 minutes !";
			affiche_clientchef(); }
			if ( compteur_evenement2 == 1515 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			if ( compteur_evenement2 == 1800 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "FIN du problème technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le secteur C42 est ouvert !";
			affiche_clientchef(); 
			}
			if ( compteur_evenement2 == 1805 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			if ( compteur_evenement2 > 1800 && compteur_evenement2 < 1802 ) { 
			if ( occupation_its38 == true ) 	{ its38 = 1; }
			if ( occupation_its38 == false ) 	{ its38 = 0; }
			}
			
			
			*/
			
			if ( compteur_evenement2 >  2100) { compteur_evenement2 = 30; } 
			
			
			}