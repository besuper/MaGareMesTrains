function audrey() {
	
	
if (la_mousse) {
	
	
	
animation_mousse++;

// placement des éléments

if ( animation_mousse == 5 ) {
document.getElementById('labulle1').style.cssText='position: absolute; left: 700px; top: 400px;'; bulle1 = 400;
document.getElementById('labulle2').style.cssText='position: absolute; left: 700px; top: 400px;'; bulle2 = 400;
document.getElementById('labulle3').style.cssText='position: absolute; left: 700px; top: 400px;'; bulle3 = 400;
document.getElementById('labulle4').style.cssText='position: absolute; left: 700px; top: 400px;'; bulle4 = 400;
document.getElementById('labulle5').style.cssText='position: absolute; left: 700px; top: 400px;'; bulle5 = 400;
document.getElementById('lamousse').style.cssText='position: absolute; left: 100px; top: 400px;'; lamousse = 400;
}
	
	
if (animation_mousse == 10 ) { 
	document.getElementById('laaudrey').style.cssText='position: absolute; left: 560px; top:295px; width:40px; height: 70px;';}

if (animation_mousse > 100 && animation_mousse < 3200 ) { bulle1--; if ( bulle1 < 100 && animation_mousse < 2800) {bulle1 = 400;} }
	document.getElementById('labulle1').style.cssText='position: absolute; left: 230px; top:'+bulle1+'px;';		
			
if (animation_mousse > 150 && animation_mousse < 3200 ) { bulle2--; if ( bulle2 < 100 && animation_mousse < 2600 ) {bulle2 = 400;} }
	document.getElementById('labulle2').style.cssText='position: absolute; left: 430px; top:'+bulle2+'px;';		
			
if (animation_mousse > 180 && animation_mousse < 3200 ) { bulle3--; if ( bulle3 < 100 && animation_mousse < 2700 ) {bulle3 = 400;} }
	document.getElementById('labulle3').style.cssText='position: absolute; left: 1130px; top:'+bulle3+'px;';		
	
if (animation_mousse > 220 && animation_mousse < 3200 ) { bulle4--; if ( bulle4 < 100 && animation_mousse < 2800) {bulle4 = 400;} }
	document.getElementById('labulle4').style.cssText='position: absolute; left: 630px; top:'+bulle4+'px;';	

if (animation_mousse > 250 && animation_mousse < 3200 ) { bulle5--; if ( bulle5 < 100 && animation_mousse < 2700) {bulle5 = 400;} }
	document.getElementById('labulle5').style.cssText='position: absolute; left: 830px; top:'+bulle5+'px;';			
	
	
			if ( animation_mousse == 400 ) {
			son_ouvert = false; nextSong2(9);
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "Audrey organise une soirée mousse à la gare  !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le courant est coupé sur certaines voies !";
			affiche_clientchef(); }
			
			
			if ( animation_mousse > 450 && animation_mousse < 2500 	&& its73 == 0 && its120 == 0 && its74 == 0 ) 	{its120 = 3;}	// voie 1 its120
			if ( animation_mousse > 450 && animation_mousse < 2500 	&& its55 == 0 && its119 == 0 && its56 == 0 ) 	{its119 = 3;}	// voie 2 its119
			if ( animation_mousse > 450 && animation_mousse < 2500 	&& its34 == 0 && its118 == 0 && its37 == 0 ) 	{its118 = 3;}	// voie 3 its118
			
			
			if ( animation_mousse == 520 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';}
			
			// La mousse
			
			if (animation_mousse > 600 && animation_mousse < 800 ) {
			lamousse--;
			document.getElementById('lamousse').style.cssText='position: absolute; left: 100px; top:'+lamousse+'px;';
			if ( lamousse < 280 ) {lamousse = 280;}
			}
			
			if (animation_mousse > 3600 && animation_mousse < 3750 ) {
			lamousse++;
			document.getElementById('lamousse').style.cssText='position: absolute; left: 100px; top:'+lamousse+'px;';
			if ( lamousse > 400 ) {lamousse = 400;}
			}
			
			
			if ( animation_mousse == 3800 ) {
			son_ouvert = true;
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "FIN du problème !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Toutes les voies sont utilisables !";
			document.getElementById('une_image_tableau_20').style.cssText='position: absolute; left: 330px; top:-100px;'; // boite information voyageur
			document.getElementById('tableau20').style.cssText='position: absolute; left: 420px; top:-100px; color: red; font-size: 14px;'; // texte information voyageur
			document.getElementById("tableau20").innerHTML = ""; // texte information voyageur
			affiche_clientchef(); }
			if ( animation_mousse == 3920 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			if ( occupation_its120 == true ) 	{ its120 = 1; }
			if ( occupation_its120 == false ) 	{ its120 = 0; }
			if ( occupation_its119 == true ) 	{ its119 = 1; }
			if ( occupation_its119 == false ) 	{ its119 = 0; }
			if ( occupation_its118 == true ) 	{ its118 = 1; }
			if ( occupation_its118 == false ) 	{ its118 = 0; }
			
			
			
			document.getElementById('laaudrey').style.cssText='position: absolute; left: 560px; top:-250px;';
			}
			
			if ( animation_mousse == 4000 ) { la_mousse = false; compteur_evenement = 1;}
			
			

}	
}