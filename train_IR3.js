

function Train_IR3() { // IR3 direction Yverdon


			// IR3
			if ( sens_its120 == 2 && progression_its120 == 1 && train2_its120[0] == 'IR3' ) 	{ compteur_IR3201  = true; vitesse_voie1 = 26; }
			if ( sens_its119 == 2 && progression_its119 == 1 && train2_its119[0] == 'IR3' ) 	{ compteur_IR3202  = true; vitesse_voie2 = 26; }
			if ( sens_its118 == 2 && progression_its118 == 1 && train2_its118[0] == 'IR3' ) 	{ compteur_IR3203  = true; vitesse_voie3 = 26; }
			if ( sens_its17 == 2 && progression_its17 == 1 && train2_its17[0] == 'IR3' ) 	{ compteur_IR3204  = true; vitesse_voie4 = 26; }
			if ( sens_its117 == 2 && progression_its117 == 1 && train2_its117[0] == 'IR3' ) 		{ compteur_IR3205  = true; vitesse_voie5 = 26; }
			if ( sens_its8 == 2 && progression_its8 == 1 && train2_its8[0] == 'IR3' ) 		{ compteur_IR3206  = true; vitesse_voie6 = 26; }
			
			
			
			// IR3
			if ( progression_voie1 > 10000 && compteur_IR3201 == true ) { train2_its120[3] = 3; uzz = 0; compteur_IR3201 = false; progression_voie1 = 0; arret_voie1 = 0; vitesse_voie1 = 0; arret_oui_voie1 = false;}
			if ( progression_voie2 > 10000 && compteur_IR3202 == true ) { train2_its119[3] = 3; uzz = 0;compteur_IR3202 = false; progression_voie2 = 0; arret_voie2 = 0; vitesse_voie2 = 0; arret_oui_voie2 = false;} // cette ligne
			if ( progression_voie3 > 10000 && compteur_IR3203 == true ) { train2_its118[3] = 3; uzz = 0;compteur_IR3203 = false; progression_voie3 = 0; arret_voie3 = 0; vitesse_voie3 = 0; arret_oui_voie3 = false;}
			if ( progression_voie4 > 10000 && compteur_IR3204 == true ) { train2_its17[3] = 3; uzz = 0;compteur_IR3204 = false; progression_voie4 = 0; arret_voie4 = 0; vitesse_voie4 = 0; arret_oui_voie4 = false;}
			if ( progression_voie5 > 10000 && compteur_IR3205 == true ) { train2_its117[3] = 3; uzz = 0;compteur_IR3205 = false; progression_voie5 = 0; arret_voie5 = 0; vitesse_voie5 = 0; arret_oui_voie5 = false;}
			if ( progression_voie6 > 10000 && compteur_IR3206 == true ) { train2_its8[3] = 3; uzz = 0;compteur_IR3206 = false; progression_voie6 = 0; arret_voie6 = 0; vitesse_voie6 = 0; arret_oui_voie6 = false;}
			
	
			
			// DEBUT IR3201
			if (compteur_IR3201 == true) { progression_voie1 = progression_voie1 + vitesse_voie1;
		
			pos_left_voie1_1 = 300; pos_left_voie1_2 = 338; pos_left_voie1_3 = 338; pos_left_voie1_4 = 338; pos_left_voie1_5 = 338;
			pos_left_voie1_6 = 60; pos_left_voie1_7 = 60; pos_left_voie1_8 = 60;
			pos_top_voie1_1 = 227; pos_top_voie1_2 = 220; pos_top_voie1_3 = 220; pos_top_voie1_4 = 220; pos_top_voie1_5 = 220;
			pos_top_voie1_6 = 210; pos_top_voie1_7 = 265 - cor; pos_top_voie1_8 = 265 - cor;
			
			var image_voie1_1 = new Image(); image_voie1_1.onload = function() 	{ document.getElementById("image_voie1_1").src = image_voie1_1.src; } 
			image_voie1_1.src = "image/train/IR3200/1004.php";
			var image_voie1_2 = new Image(); image_voie1_2.onload = function() 	{ document.getElementById("image_voie1_2").src = image_voie1_2.src; } 
			image_voie1_2.src = "image/train/IR3200/1002.php";
			var image_voie1_3 = new Image(); image_voie1_3.onload = function() 	{ document.getElementById("image_voie1_3").src = image_voie1_3.src; } 
			image_voie1_3.src = "image/train/IR3200/1002.php";
			var image_voie1_4 = new Image(); image_voie1_4.onload = function() 	{ document.getElementById("image_voie1_4").src = image_voie1_4.src; } 
			image_voie1_4.src = "image/train/IR3200/1002.php";
			var image_voie1_5 = new Image(); image_voie1_5.onload = function() 	{ document.getElementById("image_voie1_5").src = image_voie1_5.src; } 
			image_voie1_5.src = "image/train/IR3200/1002.php";
			var image_voie1_6 = new Image(); image_voie1_6.onload = function() 	{ document.getElementById("image_voie1_6").src = image_voie1_6.src; } 
			image_voie1_6.src = "image/train/IR3200/1001.php";
			var image_voie1_7 = new Image(); image_voie1_7.onload = function() 	{ document.getElementById("image_voie1_7").src = image_voie1_7.src; } 
			image_voie1_7.src = "image/train/vide.php";
			var image_voie1_8 = new Image(); image_voie1_8.onload = function() 	{ document.getElementById("image_voie1_8").src = image_voie1_8.src; } 
			image_voie1_8.src = "image/train/vide.php";
			}  // FIN IR3201
			
			// DEBUT IR3202
			if (compteur_IR3202 == true) { progression_voie2 = progression_voie2 + vitesse_voie2;
			
			
		
			pos_left_voie2_1 = 300; pos_left_voie2_2 = 338; pos_left_voie2_3 = 338; pos_left_voie2_4 = 338; pos_left_voie2_5 = 338;
			pos_left_voie2_6 = 60; pos_left_voie2_7 = 60; pos_left_voie2_8 = 60;
			pos_top_voie2_1 = 227; pos_top_voie2_2 = 220; pos_top_voie2_3 = 220; pos_top_voie2_4 = 220; pos_top_voie2_5 = 220;
			pos_top_voie2_6 = 210; pos_top_voie2_7 = 255 - cor; pos_top_voie2_8 = 255 - cor;
			
			var image_voie2_1 = new Image(); image_voie2_1.onload = function() 	{ document.getElementById("image_voie2_1").src = image_voie2_1.src; } 
			image_voie2_1.src = "image/train/IR3200/1004.php";
			var image_voie2_2 = new Image(); image_voie2_2.onload = function() 	{ document.getElementById("image_voie2_2").src = image_voie2_2.src; } 
			image_voie2_2.src = "image/train/IR3200/1002.php";
			var image_voie2_3 = new Image(); image_voie2_3.onload = function() 	{ document.getElementById("image_voie2_3").src = image_voie2_3.src; } 
			image_voie2_3.src = "image/train/IR3200/1002.php";
			var image_voie2_4 = new Image(); image_voie2_4.onload = function() 	{ document.getElementById("image_voie2_4").src = image_voie2_4.src; } 
			image_voie2_4.src = "image/train/IR3200/1002.php";
			var image_voie2_5 = new Image(); image_voie2_5.onload = function() 	{ document.getElementById("image_voie2_5").src = image_voie2_5.src; } 
			image_voie2_5.src = "image/train/IR3200/1002.php";
			var image_voie2_6 = new Image(); image_voie2_6.onload = function() 	{ document.getElementById("image_voie2_6").src = image_voie2_6.src; } 
			image_voie2_6.src = "image/train/IR3200/1001.php";
			var image_voie2_7 = new Image(); image_voie2_7.onload = function() 	{ document.getElementById("image_voie2_7").src = image_voie2_7.src; } 
			image_voie2_7.src = "image/train/vide.php";
			var image_voie2_8 = new Image(); image_voie2_8.onload = function() 	{ document.getElementById("image_voie2_8").src = image_voie2_8.src; } 
			image_voie2_8.src = "image/train/vide.php";
			}  // FIN IR3202
			
			// DEBUT IR3203
			if (compteur_IR3203 == true) { progression_voie3 = progression_voie3 + vitesse_voie3;
		
			pos_left_voie3_1 = 401; pos_left_voie3_2 = 455; pos_left_voie3_3 = 455; pos_left_voie3_4 = 455; pos_left_voie3_5 = 440;
			pos_left_voie3_6 = 60; pos_left_voie3_7 = 60; pos_left_voie3_8 = 60;
			pos_top_voie3_1 = 225; pos_top_voie3_2 = 225; pos_top_voie3_3 = 225; pos_top_voie3_4 = 225; pos_top_voie3_5 = 225;
			pos_top_voie3_6 = 220; pos_top_voie3_7 = 255 - cor; pos_top_voie3_8 = 255 - cor;
			
			var image_voie3_1 = new Image(); image_voie3_1.onload = function() 	{ document.getElementById("image_voie3_1").src = image_voie3_1.src; } 
			image_voie3_1.src = "image/train/IR3300/1004.php";
			var image_voie3_2 = new Image(); image_voie3_2.onload = function() 	{ document.getElementById("image_voie3_2").src = image_voie3_2.src; } 
			image_voie3_2.src = "image/train/IR3300/1002.php";
			var image_voie3_3 = new Image(); image_voie3_3.onload = function() 	{ document.getElementById("image_voie3_3").src = image_voie3_3.src; } 
			image_voie3_3.src = "image/train/IR3300/1002.php";
			var image_voie3_4 = new Image(); image_voie3_4.onload = function() 	{ document.getElementById("image_voie3_4").src = image_voie3_4.src; } 
			image_voie3_4.src = "image/train/IR3300/1002.php";
			var image_voie3_5 = new Image(); image_voie3_5.onload = function() 	{ document.getElementById("image_voie3_5").src = image_voie3_5.src; } 
			image_voie3_5.src = "image/train/IR3300/1002.php";
			var image_voie3_6 = new Image(); image_voie3_6.onload = function() 	{ document.getElementById("image_voie3_6").src = image_voie3_6.src; } 
			image_voie3_6.src = "image/train/IR3300/1001.php";
			var image_voie3_7 = new Image(); image_voie3_7.onload = function() 	{ document.getElementById("image_voie3_7").src = image_voie3_7.src; } 
			image_voie3_7.src = "image/train/vide.php";
			var image_voie3_8 = new Image(); image_voie3_8.onload = function() 	{ document.getElementById("image_voie3_8").src = image_voie3_8.src; } 
			image_voie3_8.src = "image/train/vide.php";
			}  // FIN IR3203
			
			// DEBUT IR3204
			if (compteur_IR3204 == true) { progression_voie4 = progression_voie4 + vitesse_voie4;
		
			pos_left_voie4_1 = 401; pos_left_voie4_2 = 455; pos_left_voie4_3 = 455; pos_left_voie4_4 = 455; pos_left_voie4_5 = 440;
			pos_left_voie4_6 = 60; pos_left_voie4_7 = 60; pos_left_voie4_8 = 60;
			pos_top_voie4_1 = 225; pos_top_voie4_2 = 225; pos_top_voie4_3 = 225; pos_top_voie4_4 = 225; pos_top_voie4_5 = 225;
			pos_top_voie4_6 = 220; pos_top_voie4_7 = 290 - cor; pos_top_voie4_8 = 290 - cor;
			
			var image_voie4_1 = new Image(); image_voie4_1.onload = function() 	{ document.getElementById("image_voie4_1").src = image_voie4_1.src; } 
			image_voie4_1.src = "image/train/IR3300/1004.php";
			var image_voie4_2 = new Image(); image_voie4_2.onload = function() 	{ document.getElementById("image_voie4_2").src = image_voie4_2.src; } 
			image_voie4_2.src = "image/train/IR3300/1002.php";
			var image_voie4_3 = new Image(); image_voie4_3.onload = function() 	{ document.getElementById("image_voie4_3").src = image_voie4_3.src; } 
			image_voie4_3.src = "image/train/IR3300/1002.php";
			var image_voie4_4 = new Image(); image_voie4_4.onload = function() 	{ document.getElementById("image_voie4_4").src = image_voie4_4.src; } 
			image_voie4_4.src = "image/train/IR3300/1002.php";
			var image_voie4_5 = new Image(); image_voie4_5.onload = function() 	{ document.getElementById("image_voie4_5").src = image_voie4_5.src; } 
			image_voie4_5.src = "image/train/IR3300/1002.php";
			var image_voie4_6 = new Image(); image_voie4_6.onload = function() 	{ document.getElementById("image_voie4_6").src = image_voie4_6.src; } 
			image_voie4_6.src = "image/train/IR3300/1001.php";
			var image_voie4_7 = new Image(); image_voie4_7.onload = function() 	{ document.getElementById("image_voie4_7").src = image_voie4_7.src; } 
			image_voie4_7.src = "image/train/vide.php";
			var image_voie4_8 = new Image(); image_voie4_8.onload = function() 	{ document.getElementById("image_voie4_8").src = image_voie4_8.src; } 
			image_voie4_8.src = "image/train/vide.php";
			}  // FIN IR3204
			
			// DEBUT IR3205
			if (compteur_IR3205 == true) { progression_voie5 = progression_voie5 + vitesse_voie5;
		
			pos_left_voie5_1 = 401; pos_left_voie5_2 = 455; pos_left_voie5_3 = 455; pos_left_voie5_4 = 455; pos_left_voie5_5 = 440;
			pos_left_voie5_6 = 60; pos_left_voie5_7 = 60; pos_left_voie5_8 = 60;
			pos_top_voie5_1 = 225; pos_top_voie5_2 = 225; pos_top_voie5_3 = 225; pos_top_voie5_4 = 225; pos_top_voie5_5 = 225;
			pos_top_voie5_6 = 220; pos_top_voie5_7 = 290 - cor; pos_top_voie5_8 = 290 - cor;
			
			var image_voie5_1 = new Image(); image_voie5_1.onload = function() 	{ document.getElementById("image_voie5_1").src = image_voie5_1.src; } 
			image_voie5_1.src = "image/train/IR3300/1004.php";
			var image_voie5_2 = new Image(); image_voie5_2.onload = function() 	{ document.getElementById("image_voie5_2").src = image_voie5_2.src; } 
			image_voie5_2.src = "image/train/IR3300/1002.php";
			var image_voie5_3 = new Image(); image_voie5_3.onload = function() 	{ document.getElementById("image_voie5_3").src = image_voie5_3.src; } 
			image_voie5_3.src = "image/train/IR3300/1002.php";
			var image_voie5_4 = new Image(); image_voie5_4.onload = function() 	{ document.getElementById("image_voie5_4").src = image_voie5_4.src; } 
			image_voie5_4.src = "image/train/IR3300/1002.php";
			var image_voie5_5 = new Image(); image_voie5_5.onload = function() 	{ document.getElementById("image_voie5_5").src = image_voie5_5.src; } 
			image_voie5_5.src = "image/train/IR3300/1002.php";
			var image_voie5_6 = new Image(); image_voie5_6.onload = function() 	{ document.getElementById("image_voie5_6").src = image_voie5_6.src; } 
			image_voie5_6.src = "image/train/IR3300/1001.php";
			var image_voie5_7 = new Image(); image_voie5_7.onload = function() 	{ document.getElementById("image_voie5_7").src = image_voie5_7.src; } 
			image_voie5_7.src = "image/train/vide.php";
			var image_voie5_8 = new Image(); image_voie5_8.onload = function() 	{ document.getElementById("image_voie5_8").src = image_voie5_8.src; } 
			image_voie5_8.src = "image/train/vide.php";
			}  // FIN IR3205
			
			// DEBUT IR3206
			if (compteur_IR3206 == true) { progression_voie6 = progression_voie6 + vitesse_voie6;
		
			pos_left_voie6_1 = 401; pos_left_voie6_2 = 455; pos_left_voie6_3 = 455; pos_left_voie6_4 = 455; pos_left_voie6_5 = 440;
			pos_left_voie6_6 = 60; pos_left_voie6_7 = 60; pos_left_voie6_8 = 60;
			pos_top_voie6_1 = 225; pos_top_voie6_2 = 225; pos_top_voie6_3 = 225; pos_top_voie6_4 = 225; pos_top_voie6_5 = 225;
			pos_top_voie6_6 = 220; pos_top_voie6_7 = 290 - cor; pos_top_voie6_8 = 290 - cor;
			
			var image_voie6_1 = new Image(); image_voie6_1.onload = function() 	{ document.getElementById("image_voie6_1").src = image_voie6_1.src; } 
			image_voie6_1.src = "image/train/IR3300/1004.php";
			var image_voie6_2 = new Image(); image_voie6_2.onload = function() 	{ document.getElementById("image_voie6_2").src = image_voie6_2.src; } 
			image_voie6_2.src = "image/train/IR3300/1002.php";
			var image_voie6_3 = new Image(); image_voie6_3.onload = function() 	{ document.getElementById("image_voie6_3").src = image_voie6_3.src; } 
			image_voie6_3.src = "image/train/IR3300/1002.php";
			var image_voie6_4 = new Image(); image_voie6_4.onload = function() 	{ document.getElementById("image_voie6_4").src = image_voie6_4.src; } 
			image_voie6_4.src = "image/train/IR3300/1002.php";
			var image_voie6_5 = new Image(); image_voie6_5.onload = function() 	{ document.getElementById("image_voie6_5").src = image_voie6_5.src; } 
			image_voie6_5.src = "image/train/IR3300/1002.php";
			var image_voie6_6 = new Image(); image_voie6_6.onload = function() 	{ document.getElementById("image_voie6_6").src = image_voie6_6.src; } 
			image_voie6_6.src = "image/train/IR3300/1001.php";
			var image_voie6_7 = new Image(); image_voie6_7.onload = function() 	{ document.getElementById("image_voie6_7").src = image_voie6_7.src; } 
			image_voie6_7.src = "image/train/vide.php";
			var image_voie6_8 = new Image(); image_voie6_8.onload = function() 	{ document.getElementById("image_voie6_8").src = image_voie6_8.src; } 
			image_voie6_8.src = "image/train/vide.php";
			}  // FIN IR3206
			
			
			// Le son du train
			
			if ( train2_its120[3] == 0 && its74 == 1 && arret_oui_voie1 == false && progression_its120 == 1 && train2_its120[0] == 'IR3') { nextSong(3); }
			
			if ( train2_its119[3] == 0 && its56 == 1 && arret_oui_voie2 == false && progression_its119 == 1 && train2_its119[0] == 'IR3') { nextSong(3); }
			
			if ( train2_its118[3] == 0 && its37 == 1 && arret_oui_voie3 == false && progression_its118 == 1 && train2_its118[0] == 'IR3') { nextSong(3); }
			
			if ( train2_its17[3] == 0 && its18 == 1 && arret_oui_voie4 == false &&  progression_its17  == 1 && train2_its17[0] == 'IR3')  { nextSong(3); }
			
			if ( train2_its117[3] == 0 && its103 == 1 && arret_oui_voie5 == false && progression_its117  == 1 && train2_its117[0] == 'IR3') { nextSong(3); }
				
			if ( train2_its8[3] == 0 && its4 == 1 && arret_oui_voie6 == false && progression_its8  == 1 && 		 train2_its8[0] == 'IR3')	{ nextSong(3); }
			
			
			
			
			
			
	
}