

function Train_IR2() { // IR2 direction Lausanne 1

document.getElementById("UnTexte_c34").innerHTML = '';
	
	
			// IR2
			if ( sens_its120 == 1  && progression_its120 == 1  && train2_its120[0] == 'IR2'   ) 		{ compteur_IR2101  = true; vitesse_voie1 = 26; }
			if ( sens_its119 == 1 && progression_its119 == 1 && train2_its119[0] == 'IR2'  ) 		{ compteur_IR2102  = true; vitesse_voie2 = 26; }
			if ( sens_its118 == 1 && progression_its118 == 1 && train2_its118[0] == 'IR2'  ) 		{ compteur_IR2103  = true; vitesse_voie3 = 26; }
			if ( sens_its17 == 1 && progression_its17 == 1 && train2_its17[0] == 'IR2'  ) 		{ compteur_IR2104  = true; vitesse_voie4 = 26; }
			if ( sens_its117 == 1  && progression_its117 == 1  && train2_its117[0] == 'IR2'   ) 		{ compteur_IR2105  = true; vitesse_voie5 = 26; }
			if ( sens_its8 == 1  && progression_its8 == 1  && train2_its8[0] == 'IR2'   ) 		{ compteur_IR2106  = true; vitesse_voie6 = 26; }
	
			if ( progression_voie1 > 10000 && compteur_IR2101 == true ) { train2_its120[3] = 3; uzz = 0; compteur_IR2101 = false; progression_voie1 = 0; arret_voie1 = 0; vitesse_voie1 = 0; arret_oui_voie1 = false;} 
			if ( progression_voie2 > 10000 && compteur_IR2102 == true ) { train2_its119[3] = 3; uzz = 0; compteur_IR2102 = false; progression_voie2 = 0; arret_voie2 = 0; vitesse_voie2 = 0; arret_oui_voie2 = false;} 
			if ( progression_voie3 > 10000 && compteur_IR2103 == true ) { train2_its118[3] = 3; uzz = 0; compteur_IR2103 = false; progression_voie3 = 0; arret_voie3 = 0; vitesse_voie3 = 0; arret_oui_voie3 = false;}
			if ( progression_voie4 > 10000 && compteur_IR2104 == true ) { train2_its17[3] = 3; uzz = 0; compteur_IR2104 = false; progression_voie4 = 0; arret_voie4 = 0; vitesse_voie4 = 0; arret_oui_voie4 = false;}
			if ( progression_voie5 > 10000 && compteur_IR2105 == true ) { train2_its117[3] = 3; uzz = 0; compteur_IR2105 = false; progression_voie5 = 0; arret_voie5 = 0; vitesse_voie5 = 0; arret_oui_voie5 = false;}
			if ( progression_voie6 > 10000 && compteur_IR2106 == true ) { train2_its8[3] = 3; uzz = 0; compteur_IR2106 = false; progression_voie6 = 0; arret_voie6 = 0; vitesse_voie6 = 0; arret_oui_voie6 = false;}
			
			
			// DEBUT IR2101
			if (compteur_IR2101 == true) { progression_voie1 = progression_voie1 + vitesse_voie1; 
			
			pos_left_voie1_1 = -190; pos_left_voie1_2 = -212; pos_left_voie1_3 = -212; pos_left_voie1_4 = -212; pos_left_voie1_5 = -212;
			pos_left_voie1_6 = -212; pos_left_voie1_7 = -212; pos_left_voie1_8 = -212;
			pos_top_voie1_1 = 195 - cor; pos_top_voie1_2 = 270 - cor; pos_top_voie1_3 = 270 - cor; pos_top_voie1_4 = 270 - cor; pos_top_voie1_5 = 270 - cor;
			pos_top_voie1_6 = 270 - cor; pos_top_voie1_7 = 270 - cor; pos_top_voie1_8 = 270 - cor;
			
			var image_voie1_1 = new Image(); image_voie1_1.onload = function() 	{ document.getElementById("image_voie1_1").src = image_voie1_1.src; } 
			image_voie1_1.src = "image/train/IR2200/1001.php";
			var image_voie1_2 = new Image(); image_voie1_2.onload = function() 	{ document.getElementById("image_voie1_2").src = image_voie1_2.src; } 
			image_voie1_2.src = "image/train/IR2200/1003.php";
			var image_voie1_3 = new Image(); image_voie1_3.onload = function() 	{ document.getElementById("image_voie1_3").src = image_voie1_3.src; } 
			image_voie1_3.src = "image/train/IR2200/1002.php";
			var image_voie1_4 = new Image(); image_voie1_4.onload = function() 	{ document.getElementById("image_voie1_4").src = image_voie1_4.src; } 
			image_voie1_4.src = "image/train/IR2200/1002.php";
			var image_voie1_5 = new Image(); image_voie1_5.onload = function() 	{ document.getElementById("image_voie1_5").src = image_voie1_5.src; } 
			image_voie1_5.src = "image/train/IR2200/1002.php";
			var image_voie1_6 = new Image(); image_voie1_6.onload = function() 	{ document.getElementById("image_voie1_6").src = image_voie1_6.src; } 
			image_voie1_6.src = "image/train/IR2200/1002.php";
			var image_voie1_7 = new Image(); image_voie1_7.onload = function() 	{ document.getElementById("image_voie1_7").src = image_voie1_7.src; } 
			image_voie1_7.src = "image/train/vide.png";
			var image_voie1_8 = new Image(); image_voie1_8.onload = function() 	{ document.getElementById("image_voie1_8").src = image_voie1_8.src; } 
			image_voie1_8.src = "image/train/vide.png";
			}  // FIN IR2101
		
			
			// DEBUT IR2102
			if (compteur_IR2102 == true) { progression_voie2 = progression_voie2 + vitesse_voie2; 
			
			pos_left_voie2_1 = -190; pos_left_voie2_2 = -212; pos_left_voie2_3 = -212; pos_left_voie2_4 = -212; pos_left_voie2_5 = -212;
			pos_left_voie2_6 = -212; pos_left_voie2_7 = -212; pos_left_voie2_8 = -212;
			pos_top_voie2_1 = 195 - cor; pos_top_voie2_2 = 270 - cor; pos_top_voie2_3 = 270 - cor; pos_top_voie2_4 = 270 - cor; pos_top_voie2_5 = 270 - cor;
			pos_top_voie2_6 = 270 - cor; pos_top_voie2_7 = 270 - cor; pos_top_voie2_8 = 270 - cor;
			
			var image_voie2_1 = new Image(); image_voie2_1.onload = function() 	{ document.getElementById("image_voie2_1").src = image_voie2_1.src; } 
			image_voie2_1.src = "image/train/IR2200/1001.php";
			var image_voie2_2 = new Image(); image_voie2_2.onload = function() 	{ document.getElementById("image_voie2_2").src = image_voie2_2.src; } 
			image_voie2_2.src = "image/train/IR2200/1003.php";
			var image_voie2_3 = new Image(); image_voie2_3.onload = function() 	{ document.getElementById("image_voie2_3").src = image_voie2_3.src; } 
			image_voie2_3.src = "image/train/IR2200/1002.php";
			var image_voie2_4 = new Image(); image_voie2_4.onload = function() 	{ document.getElementById("image_voie2_4").src = image_voie2_4.src; } 
			image_voie2_4.src = "image/train/IR2200/1002.php";
			var image_voie2_5 = new Image(); image_voie2_5.onload = function() 	{ document.getElementById("image_voie2_5").src = image_voie2_5.src; } 
			image_voie2_5.src = "image/train/IR2200/1002.php";
			var image_voie2_6 = new Image(); image_voie2_6.onload = function() 	{ document.getElementById("image_voie2_6").src = image_voie2_6.src; } 
			image_voie2_6.src = "image/train/IR2200/1002.php";
			var image_voie2_7 = new Image(); image_voie2_7.onload = function() 	{ document.getElementById("image_voie2_7").src = image_voie2_7.src; } 
			image_voie2_7.src = "image/train/vide.png";
			var image_voie2_8 = new Image(); image_voie2_8.onload = function() 	{ document.getElementById("image_voie2_8").src = image_voie2_8.src; } 
			image_voie2_8.src = "image/train/vide.png";
			}  // FIN IR2102
			
			// DEBUT IR2103
			if (compteur_IR2103 == true) { progression_voie3 = progression_voie3 + vitesse_voie3; 
			
			pos_left_voie3_1 = -478; pos_left_voie3_2 = -478; pos_left_voie3_3 = -478; pos_left_voie3_4 = -478; pos_left_voie3_5 = -478;
			pos_left_voie3_6 = -478; pos_left_voie3_7 = -478; pos_left_voie3_8 = -478;
			pos_top_voie3_1 = 245 - cor; pos_top_voie3_2 = 295 - cor; pos_top_voie3_3 = 295 - cor; pos_top_voie3_4 = 295 - cor; pos_top_voie3_5 = 295 - cor;
			pos_top_voie3_6 = 295 - cor; pos_top_voie3_7 = 295 - cor; pos_top_voie3_8 = 295 - cor;
			
			var image_voie3_1 = new Image(); image_voie3_1.onload = function() 	{ document.getElementById("image_voie3_1").src = image_voie3_1.src; } 
			image_voie3_1.src = "image/train/IR2300/1001.php";
			var image_voie3_2 = new Image(); image_voie3_2.onload = function() 	{ document.getElementById("image_voie3_2").src = image_voie3_2.src; } 
			image_voie3_2.src = "image/train/IR2300/1003.php";
			var image_voie3_3 = new Image(); image_voie3_3.onload = function() 	{ document.getElementById("image_voie3_3").src = image_voie3_3.src; } 
			image_voie3_3.src = "image/train/IR2300/1002.php";
			var image_voie3_4 = new Image(); image_voie3_4.onload = function() 	{ document.getElementById("image_voie3_4").src = image_voie3_4.src; } 
			image_voie3_4.src = "image/train/IR2300/1002.php";
			var image_voie3_5 = new Image(); image_voie3_5.onload = function() 	{ document.getElementById("image_voie3_5").src = image_voie3_5.src; } 
			image_voie3_5.src = "image/train/IR2300/1002.php";
			var image_voie3_6 = new Image(); image_voie3_6.onload = function() 	{ document.getElementById("image_voie3_6").src = image_voie3_6.src; } 
			image_voie3_6.src = "image/train/IR2300/1002.php";
			var image_voie3_7 = new Image(); image_voie3_7.onload = function() 	{ document.getElementById("image_voie3_7").src = image_voie3_7.src; } 
			image_voie3_7.src = "image/train/vide.png";
			var image_voie3_8 = new Image(); image_voie3_8.onload = function() 	{ document.getElementById("image_voie3_8").src = image_voie3_8.src; } 
			image_voie3_8.src = "image/train/vide.png";
			}  // FIN IR2103
			
			
			// DEBUT IR2104
			if (compteur_IR2104 == true) { progression_voie4 = progression_voie4 + vitesse_voie4; 
			
			pos_left_voie4_1 = -478; pos_left_voie4_2 = -478; pos_left_voie4_3 = -478; pos_left_voie4_4 = -478; pos_left_voie4_5 = -478;
			pos_left_voie4_6 = -478; pos_left_voie4_7 = -478; pos_left_voie4_8 = -478;
			pos_top_voie4_1 = 230 - cor; pos_top_voie4_2 = 280 - cor; pos_top_voie4_3 = 280 - cor; pos_top_voie4_4 = 280 - cor; pos_top_voie4_5 = 280 - cor;
			pos_top_voie4_6 = 280 - cor; pos_top_voie4_7 = 280 - cor; pos_top_voie4_8 = 280 - cor;
			
			var image_voie4_1 = new Image(); image_voie4_1.onload = function() 	{ document.getElementById("image_voie4_1").src = image_voie4_1.src; } 
			image_voie4_1.src = "image/train/IR2300/1001.php";
			var image_voie4_2 = new Image(); image_voie4_2.onload = function() 	{ document.getElementById("image_voie4_2").src = image_voie4_2.src; } 
			image_voie4_2.src = "image/train/IR2300/1003.php";
			var image_voie4_3 = new Image(); image_voie4_3.onload = function() 	{ document.getElementById("image_voie4_3").src = image_voie4_3.src; } 
			image_voie4_3.src = "image/train/IR2300/1002.php";
			var image_voie4_4 = new Image(); image_voie4_4.onload = function() 	{ document.getElementById("image_voie4_4").src = image_voie4_4.src; } 
			image_voie4_4.src = "image/train/IR2300/1002.php";
			var image_voie4_5 = new Image(); image_voie4_5.onload = function() 	{ document.getElementById("image_voie4_5").src = image_voie4_5.src; } 
			image_voie4_5.src = "image/train/IR2300/1002.php";
			var image_voie4_6 = new Image(); image_voie4_6.onload = function() 	{ document.getElementById("image_voie4_6").src = image_voie4_6.src; } 
			image_voie4_6.src = "image/train/IR2300/1002.php";
			var image_voie4_7 = new Image(); image_voie4_7.onload = function() 	{ document.getElementById("image_voie4_7").src = image_voie4_7.src; } 
			image_voie4_7.src = "image/train/vide.png";
			var image_voie4_8 = new Image(); image_voie4_8.onload = function() 	{ document.getElementById("image_voie4_8").src = image_voie4_8.src; } 
			image_voie4_8.src = "image/train/vide.png";
			}  // FIN IR2104
			
			// DEBUT IR2105
			if (compteur_IR2105 == true) { progression_voie5 = progression_voie5 + vitesse_voie5; 
			
			pos_left_voie5_1 = -478; pos_left_voie5_2 = -478; pos_left_voie5_3 = -478; pos_left_voie5_4 = -478; pos_left_voie5_5 = -478;
			pos_left_voie5_6 = -478; pos_left_voie5_7 = -478; pos_left_voie5_8 = -478;
			pos_top_voie5_1 = 225 - cor; pos_top_voie5_2 = 275 - cor; pos_top_voie5_3 = 275 - cor; pos_top_voie5_4 = 275 - cor; pos_top_voie5_5 = 275 - cor;
			pos_top_voie5_6 = 275 - cor; pos_top_voie5_7 = 275 - cor; pos_top_voie5_8 = 275 - cor;
			
			var image_voie5_1 = new Image(); image_voie5_1.onload = function() 	{ document.getElementById("image_voie5_1").src = image_voie5_1.src; } 
			image_voie5_1.src = "image/train/IR2300/1001.php";
			var image_voie5_2 = new Image(); image_voie5_2.onload = function() 	{ document.getElementById("image_voie5_2").src = image_voie5_2.src; } 
			image_voie5_2.src = "image/train/IR2300/1003.php";
			var image_voie5_3 = new Image(); image_voie5_3.onload = function() 	{ document.getElementById("image_voie5_3").src = image_voie5_3.src; } 
			image_voie5_3.src = "image/train/IR2300/1002.php";
			var image_voie5_4 = new Image(); image_voie5_4.onload = function() 	{ document.getElementById("image_voie5_4").src = image_voie5_4.src; } 
			image_voie5_4.src = "image/train/IR2300/1002.php";
			var image_voie5_5 = new Image(); image_voie5_5.onload = function() 	{ document.getElementById("image_voie5_5").src = image_voie5_5.src; } 
			image_voie5_5.src = "image/train/IR2300/1002.php";
			var image_voie5_6 = new Image(); image_voie5_6.onload = function() 	{ document.getElementById("image_voie5_6").src = image_voie5_6.src; } 
			image_voie5_6.src = "image/train/IR2300/1002.php";
			var image_voie5_7 = new Image(); image_voie5_7.onload = function() 	{ document.getElementById("image_voie5_7").src = image_voie5_7.src; } 
			image_voie5_7.src = "image/train/vide.png";
			var image_voie5_8 = new Image(); image_voie5_8.onload = function() 	{ document.getElementById("image_voie5_8").src = image_voie5_8.src; } 
			image_voie5_8.src = "image/train/vide.png";
			}  // FIN IR2105
			
			// DEBUT IR2106
			if (compteur_IR2106 == true) { progression_voie6 = progression_voie6 + vitesse_voie6; 
			
			pos_left_voie6_1 = -478; pos_left_voie6_2 = -478; pos_left_voie6_3 = -478; pos_left_voie6_4 = -478; pos_left_voie6_5 = -478;
			pos_left_voie6_6 = -478; pos_left_voie6_7 = -478; pos_left_voie6_8 = -478;
			pos_top_voie6_1 = 225 - cor; pos_top_voie6_2 = 275 - cor; pos_top_voie6_3 = 275 - cor; pos_top_voie6_4 = 275 - cor; pos_top_voie6_5 = 275 - cor;
			pos_top_voie6_6 = 275 - cor; pos_top_voie6_7 = 275 - cor; pos_top_voie6_8 = 275 - cor;
			
			var image_voie6_1 = new Image(); image_voie6_1.onload = function() 	{ document.getElementById("image_voie6_1").src = image_voie6_1.src; } 
			image_voie6_1.src = "image/train/IR2300/1001.php";
			var image_voie6_2 = new Image(); image_voie6_2.onload = function() 	{ document.getElementById("image_voie6_2").src = image_voie6_2.src; } 
			image_voie6_2.src = "image/train/IR2300/1003.php";
			var image_voie6_3 = new Image(); image_voie6_3.onload = function() 	{ document.getElementById("image_voie6_3").src = image_voie6_3.src; } 
			image_voie6_3.src = "image/train/IR2300/1002.php";
			var image_voie6_4 = new Image(); image_voie6_4.onload = function() 	{ document.getElementById("image_voie6_4").src = image_voie6_4.src; } 
			image_voie6_4.src = "image/train/IR2300/1002.php";
			var image_voie6_5 = new Image(); image_voie6_5.onload = function() 	{ document.getElementById("image_voie6_5").src = image_voie6_5.src; } 
			image_voie6_5.src = "image/train/IR2300/1002.php";
			var image_voie6_6 = new Image(); image_voie6_6.onload = function() 	{ document.getElementById("image_voie6_6").src = image_voie6_6.src; } 
			image_voie6_6.src = "image/train/IR2300/1002.php";
			var image_voie6_7 = new Image(); image_voie6_7.onload = function() 	{ document.getElementById("image_voie6_7").src = image_voie6_7.src; } 
			image_voie6_7.src = "image/train/vide.png";
			var image_voie6_8 = new Image(); image_voie6_8.onload = function() 	{ document.getElementById("image_voie6_8").src = image_voie6_8.src; } 
			image_voie6_8.src = "image/train/vide.png";
			}  // FIN IR2106
			
			// Le son du train
			
			if ( train2_its120[3] == 0 && its74 == 1 && arret_oui_voie1 == false && progression_its120 == 1 && train2_its120[0] == 'IR2') { nextSong(3); }
			
			if ( train2_its119[3] == 0 && its56 == 1 && arret_oui_voie2 == false && progression_its119 == 1 && train2_its119[0] == 'IR2') { nextSong(3); }
			
			if ( train2_its118[3] == 0 && its37 == 1 && arret_oui_voie3 == false && progression_its118 == 1 && train2_its118[0] == 'IR2') { nextSong(3); }
			
			if ( train2_its17[3] == 0 && its18 == 1 && arret_oui_voie4 == false &&  progression_its17  == 1 && train2_its17[0] == 'IR2')  { nextSong(3); }
			
			if ( train2_its117[3] == 0 && its103 == 1 && arret_oui_voie5 == false && progression_its117  == 1 && train2_its117[0] == 'IR2') { nextSong(3); }
				
			if ( train2_its8[3] == 0 && its4 == 1 && arret_oui_voie6 == false && progression_its8  == 1 && 		 train2_its8[0] == 'IR2')	{ nextSong(3); }
			
			
			
			
	
}