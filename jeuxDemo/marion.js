			function marion() {



			// Marion
			
			if (les_ballons) {
			
			animation_marion++;
			
			if (animation_marion == 50) {
			ballon = 230;
			document.getElementById('leballon').style.cssText='position: absolute; left: 530px; top:'+ballon+'px; width:100px; height: 100px;';
			document.getElementById('lamarion').style.cssText='position: absolute; left: 570px; top:295px; width:40px; height: 70px;';
			}
			
			if (animation_marion > 400 && animation_marion < 600 ) {
			ballon--;
			if ( ballon < 105 ) { ballon = 105;}
			document.getElementById('leballon').style.cssText='position: absolute; left: 530px; top:'+ballon+'px; width:100px; height: 100px;';
			document.getElementById('lamarion').style.cssText='position: absolute; left: 570px; top:295px; width:40px; height: 70px;';
			}
			
			if ( animation_marion == 650 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "Marion à lâché ces ballons dans la linge de contact !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Le courant est coupé sur certaines voies";
			affiche_clientchef(); }
			if ( animation_marion == 770 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			}
			
			
			if ( animation_marion > 450 && animation_marion < 3600 	&& its73 == 0 && its120 == 0 && its74 == 0 ) 	{its120 = 3;}	// voie 1 its120
			if ( animation_marion > 450 && animation_marion < 3600 	&& its55 == 0 && its119 == 0 && its56 == 0 ) 	{its119 = 3;}	// voie 2 its119
			if ( animation_marion > 450 && animation_marion < 3600 	&& its34 == 0 && its118 == 0 && its37 == 0 ) 	{its118 = 3;}	// voie 3 its118
			
			
			
			
			if ( animation_marion == 3600 ) {
			couleur = 'jaune';
			document.getElementById("texte2chef").innerHTML = "FIN du problème !";
			nom_client = 'Joe'; document.getElementById("texte1chef").innerHTML = "Joe: Le chef."; 
			document.getElementById("texte3chef").innerHTML = "Toutes les voies sont utilisables !";
			document.getElementById('une_image_tableau_20').style.cssText='position: absolute; left: 330px; top:-100px;'; // boite information voyageur
			document.getElementById('tableau20').style.cssText='position: absolute; left: 420px; top:-100px; color: red; font-size: 14px;'; // texte information voyageur
			document.getElementById("tableau20").innerHTML = ""; // texte information voyageur
			affiche_clientchef(); 
			document.getElementById('leballon').style.cssText='position: absolute; left: 600px; top:-268px; width:150px; height: 100px;';
			document.getElementById('lamarion').style.cssText='position: absolute; left: 560px; top:-195px; width:40px; height: 70px;';
			}
			if ( animation_marion == 3720 ) { 
			document.getElementById("texte1chef").innerHTML = "";  document.getElementById("texte2chef").innerHTML = ""; document.getElementById("texte3chef").innerHTML = ""; 
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:-250px;'; document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:-250px;';
			if ( occupation_its120 == true ) 	{ its120 = 1; }
			if ( occupation_its120 == false ) 	{ its120 = 0; }
			if ( occupation_its119 == true ) 	{ its119 = 1; }
			if ( occupation_its119 == false ) 	{ its119 = 0; }
			if ( occupation_its118 == true ) 	{ its118 = 1; }
			if ( occupation_its118 == false ) 	{ its118 = 0; }
			
			
			
			}
			
			if ( animation_marion == 3730 ) { les_ballons = false; compteur_evenement = 1; }
			
			
			
			
			}
			
			
			
			
			}