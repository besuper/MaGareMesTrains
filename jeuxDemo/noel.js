function noel(){
	
	
	if (noel_bol) {
		
		animation_noel++;
			
			if ( animation_noel == 40 ) {
			cadeau1 = 40;
			cadeau2 = 40;
			cadeau3 = 40;
			cadeau4 = 40;
			cadeau5 = 40;
			}
			
		
			if ( animation_noel == 50 ) { 
			document.getElementById('lesapin').style.cssText='position: absolute; left: 600px; top:225px; width: 120px; height: 140px;';
			document.getElementById('lenoel').style.cssText='position: absolute;  left: 700px; top:268px; width: 100px; height: 100px;';
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = 'Un père Noël c\'est perdu dans ma gare, faîte attention !';
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le courant sur certaines voies";
			
			
			
			affiche_clientchef(); 
			}
			
			if ( animation_noel == 170 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			}
			
			if ( animation_noel > 50 && animation_noel < 2200 && its55 == 0 && its119 == 0 && its56 == 0 ) { its119 = 3;}
			if ( animation_noel > 50 && animation_noel < 2200 && its34 == 0 && its118 == 0 && its37 == 0 ) { its118 = 3;}
			if ( animation_noel > 50 && animation_noel < 2200 && its73 == 0 && its120 == 0 && its74 == 0 ) { its120 = 3;}
			
			
			if ( animation_noel == 100 ) { document.getElementById('lenoel').style.cssText='position: absolute;  left: 740px; top:268px; width: 100px; height: 100px;'; }
			if ( animation_noel == 250 ) { document.getElementById('lenoel').style.cssText='position: absolute;  left: 740px; top:270px; width: 140px; height: 140px;'; }
			if ( animation_noel == 500 ) { document.getElementById('lenoel').style.cssText='position: absolute;  left: 780px; top:270px; width: 140px; height: 140px;'; }
			if ( animation_noel == 750 ) { document.getElementById('lenoel').style.cssText='position: absolute;  left: 700px; top:268px; width: 100px; height: 100px;'; }
			if ( animation_noel == 1000 ) { document.getElementById('lenoel').style.cssText='position: absolute;  left: 740px; top:268px; width: 100px; height: 100px;'; }
			if ( animation_noel == 1250 ) { document.getElementById('lenoel').style.cssText='position: absolute;  left: 740px; top:270px; width: 140px; height: 140px;'; }
			if ( animation_noel == 1500 ) { document.getElementById('lenoel').style.cssText='position: absolute;  left: 780px; top:270px; width: 140px; height: 140px;'; }
			if ( animation_noel == 1750 ) { document.getElementById('lenoel').style.cssText='position: absolute;  left: 700px; top:268px; width: 100px; height: 100px;'; }
			if ( animation_noel == 2000 ) { document.getElementById('lenoel').style.cssText='position: absolute;  left: 740px; top:270px; width: 140px; height: 140px;'; }
			
			if ( animation_noel == 2250 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = 'FIN du problème avec le père Noël';
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Toutes les voies sont utilisables !";
			document.getElementById('une_image_tableau_20').style.cssText='position: absolute; left: 330px; top:-100px;'; // boite information voyageur
			document.getElementById('tableau20').style.cssText='position: absolute; left: 420px; top:-100px; color: red; font-size: 14px;'; // texte information voyageur
			document.getElementById("tableau20").innerHTML = ""; // texte information voyageur
			document.getElementById('lesapin').style.cssText='position: absolute; left: 600px; top:-265px; width:150px; height: 100px;'; 
			document.getElementById('lenoel').style.cssText='position: absolute; left: 600px; top:-265px; width:150px; height: 100px;'; 
			if ( occupation_its120 == true ) 	{ its120 = 1; }
			if ( occupation_its120 == false ) 	{ its120 = 0; }
			if ( occupation_its119 == true ) 	{ its119 = 1; }
			if ( occupation_its119 == false ) 	{ its119 = 0; }
			if ( occupation_its118 == true ) 	{ its118 = 1; }
			if ( occupation_its118 == false ) 	{ its118 = 0; }
			
			affiche_clientchef(); }
			
			if ( animation_noel == 2370 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			}
			
			// les cadeaux
			
			if (animation_noel > 120 && animation_noel < 2300 ) {
			cadeau1++; cadeau1++;
			document.getElementById('lecadeau1').style.cssText='position: absolute; left: 390px; top:'+cadeau1+'px; width: 50px; height: 50px;';
			if ( cadeau1 > 500 && animation_noel < 2000 ) {cadeau1 = 100;}
			}
			
			
			if (animation_noel > 150 && animation_noel < 2300 ) {
			cadeau2++; cadeau2++;
			document.getElementById('lecadeau2').style.cssText='position: absolute; left: 450px; top:'+cadeau2+'px; width: 50px; height: 50px;';
			if ( cadeau2 > 550 && animation_noel < 2000 ) {cadeau2 = 100;}
			}
			
			if (animation_noel > 170 && animation_noel < 2300 ) {
			cadeau3++; cadeau3++;
			document.getElementById('lecadeau3').style.cssText='position: absolute; left: 600px; top:'+cadeau3+'px; width: 50px; height: 50px;';
			if ( cadeau3 > 500 && animation_noel < 2000 ) {cadeau3 = 100;}
			}
			
			if (animation_noel > 180 && animation_noel < 2300 ) {
			cadeau4++; cadeau4++;
			document.getElementById('lecadeau4').style.cssText='position: absolute; left: 750px; top:'+cadeau4+'px; width: 50px; height: 50px;';
			if ( cadeau4 > 520 && animation_noel < 2000 ) {cadeau4 = 100;}
			}
			
			if (animation_noel > 100 && animation_noel < 2300 ) {
			cadeau5++; cadeau5++;
			document.getElementById('lecadeau5').style.cssText='position: absolute; left: 900px; top:'+cadeau5+'px; width: 50px; height: 50px;';
			if ( cadeau5 > 500 && animation_noel < 2000 ) {cadeau5 = 100;}
			}
			
			if (animation_noel == 2400 ) {cadeau1 = 0; cadeau2 = 0; cadeau3 = 0; cadeau4 = 0; cadeau5 = 0;
			document.getElementById('lecadeau1').style.cssText='position: absolute; left: 390px; top:-120px; width: 50px; height: 50px;';
			document.getElementById('lecadeau2').style.cssText='position: absolute; left: 390px; top:-120px; width: 50px; height: 50px;';
			document.getElementById('lecadeau3').style.cssText='position: absolute; left: 390px; top:-120px; width: 50px; height: 50px;';
			document.getElementById('lecadeau4').style.cssText='position: absolute; left: 390px; top:-120px; width: 50px; height: 50px;';
			document.getElementById('lecadeau5').style.cssText='position: absolute; left: 390px; top:-120px; width: 50px; height: 50px;';
			}
			
			
			
			if ( animation_noel == 2500 ) { noel_bol = false; compteur_evenement = 1; }
			
		
		
			
		
		
		
		
		
		
		
	
	}
	
}