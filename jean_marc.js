function jean_marc() {
	
// TRAVAUX sur voie 1


			
			if ( travaux1 == true ) {
			
			compteur_travaux_1++;
			
			if ( compteur_travaux_1 == 3 ) {// replacer les éléments
			document.getElementById('image_voie1_8').style.cssText='position: absolute; left: -500px; top:180px; '; 
			compteur_loco_travaux = -500;
			}
				
			if ( compteur_travaux_1 == 5 ) { 
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "ATTENTION Problèmes technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Les voies 1 et 2 sont inutilisables pour 5 minutes !";
			affiche_clientchef(); }
			
			if ( compteur_travaux_1 == 120 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			}
			
			if ( compteur_travaux_1 > 100 && compteur_travaux_1 < 6500 	&& its73 == 0 && its120 == 0 && its74 == 0 ) 	{its120 = 3;}	// voie 1 its120
			if ( compteur_travaux_1 > 100 && compteur_travaux_1 < 6500 	&& its55 == 0 && its119 == 0 && its56 == 0 ) 	{its119 = 3;}	// voie 2 its119
			
				
				
			
				if ( compteur_travaux_1 > 1000 && compteur_travaux_1 < 1800  ) { compteur_loco_travaux++; }
				if ( compteur_travaux_1 > 2200 && compteur_travaux_1 < 2600  ) { compteur_loco_travaux--; }
				if ( compteur_travaux_1 > 2800 && compteur_travaux_1 < 3600  ) { compteur_loco_travaux++; }
				if ( compteur_travaux_1 > 4000 && compteur_travaux_1 < 4200  ) { compteur_loco_travaux++; }
				if ( compteur_travaux_1 > 5200 && compteur_travaux_1 < 6500  ) { compteur_loco_travaux--; }
				document.getElementById('image_voie1_9').style.cssText='position: absolute; left: '+compteur_loco_travaux+'px; top:180px; '; 
			
				
				
			if (compteur_travaux_1 == 1050 ) 	{	
				document.getElementById('p4000').style.cssText='position: absolute; left: 200px; top:280px; width: 68px; height: 160px;';
											}
			if (compteur_travaux_1 == 1500 ) 	{	
				document.getElementById('p4000').style.cssText='position: absolute; left: 800px; top:280px; width: 68px; height: 160px;';
											}
			if (compteur_travaux_1 == 2000 ) 	{	
				document.getElementById('p4000').style.cssText='position: absolute; left: 1200px; top:280px; width: 68px; height: 160px;';
											}
			if (compteur_travaux_1 == 2500 ) 	{	
				document.getElementById('p4000').style.cssText='position: absolute; left: 200px; top:280px; width: 68px; height: 160px;';
											}
			if (compteur_travaux_1 == 3000 ) 	{	
				document.getElementById('p4000').style.cssText='position: absolute; left: 800px; top:280px; width: 68px; height: 160px;';
											}
			if (compteur_travaux_1 == 4000 ) 	{	
				document.getElementById('p4000').style.cssText='position: absolute; left: 1200px; top:280px; width: 68px; height: 160px;';
											}	
			if (compteur_travaux_1 == 5500 ) 	{	
				document.getElementById('p4000').style.cssText='position: absolute; left: 200px; top:280px; width: 68px; height: 160px;';
											}
			if (compteur_travaux_1 == 6000 ) 	{	
				document.getElementById('p4000').style.cssText='position: absolute; left: 800px; top:280px; width: 68px; height: 160px;';
											}
			if (compteur_travaux_1 == 7000 ) 	{	
				document.getElementById('p4000').style.cssText='position: absolute; left: 1200px; top:-300px; width: 68px; height: 160px;';
											}	

			if ( compteur_travaux_1 == 7000 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "FIN du problème technique !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Les voies 1 et 2 sont utilisables !";
			affiche_clientchef(); 
			document.getElementById('une_image_tableau_20').style.cssText='position: absolute; left: 330px; top:-100px;'; // boite information voyageur
			document.getElementById('tableau20').style.cssText='position: absolute; left: 420px; top:-100px; color: red; font-size: 14px;'; // texte information voyageur
			document.getElementById("tableau20").innerHTML = ""; // texte information voyageur
			}
			if ( compteur_travaux_1 == 7100 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			if ( occupation_its120 == true ) 	{ its120 = 1; }
			if ( occupation_its120 == false ) 	{ its120 = 0; }
			if ( occupation_its119 == true ) 	{ its119 = 1; }
			if ( occupation_its119 == false ) 	{ its119 = 0; }
			}
			
			if ( compteur_travaux_1 == 7120 ) {travaux1 = false; compteur_evenement = 1; }
			
			
			
			} // FIN DE TRAVAUX 1






}