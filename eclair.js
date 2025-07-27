// Laure et le cheval Eclaire

function leeclair() {
	
	
	
	if (eclair_bol) {
		
			eclair++;
			
			if ( eclair > 450 && eclair < 2500 	&& its73 == 0 && its120 == 0 && its74 == 0 ) 	{its120 = 3;}	// voie 1 its120
			if ( eclair > 450 && eclair < 2500 	&& its55 == 0 && its119 == 0 && its56 == 0 ) 	{its119 = 3;}	// voie 2 its119
			if ( eclair > 450 && eclair < 2500 	&& its34 == 0 && its118 == 0 && its37 == 0 ) 	{its118 = 3;}	// voie 3 its118
			
			if ( eclair == 402 ) {
			document.getElementById('leeclair').style.cssText='position: absolute; left: 600px; top:265px; width:150px; height: 100px;';
			document.getElementById('lalaure').style.cssText='position: absolute; left: 570px; top:295px; width:40px; height: 70px;';
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "Laure veut prendre le train avec son cheval !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Par sécurité certaines voies sont fermées";
			
			affiche_clientchef(); }
			if ( eclair == 510 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			
			
			
			if ( eclair == 3500 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "FIN du problème !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Toutes les voies sont utilisables !";
			document.getElementById('une_image_tableau_20').style.cssText='position: absolute; left: 330px; top:-100px;'; // boite information voyageur
			document.getElementById('tableau20').style.cssText='position: absolute; left: 420px; top:-100px; color: red; font-size: 14px;'; // texte information voyageur
			document.getElementById("tableau20").innerHTML = ""; // texte information voyageur
			affiche_clientchef(); }
			if ( eclair == 3610 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			if ( eclair > 3610 && eclair < 3612 ) { 
			
			if ( occupation_its120 == true ) 	{ its120 = 1; }
			if ( occupation_its120 == false ) 	{ its120 = 0; }
			if ( occupation_its119 == true ) 	{ its119 = 1; }
			if ( occupation_its119 == false ) 	{ its119 = 0; }
			if ( occupation_its118 == true ) 	{ its118 = 1; }
			if ( occupation_its118 == false ) 	{ its118 = 0; }
			
			
			document.getElementById('leeclair').style.cssText='position: absolute; left: 600px; top:-268px; width:150px; height: 100px;';
			document.getElementById('lalaure').style.cssText='position: absolute; left: 560px; top:-195px; width:40px; height: 70px;';
			}
			
			if ( eclair == 3700 ) { eclair_bol = false; compteur_evenement = 1;}
			
			
			
			
} 	

	
}