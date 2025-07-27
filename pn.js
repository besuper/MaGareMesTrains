			
function pn() {
			

			
secondes_pn++;  // FERMETURE PN
			
if (secondes_pn == 236) { document.getElementById("une_image_route3").src = 'image/PN/1000.php'; } 
if (secondes_pn == 234) { document.getElementById("une_image_route3").src = 'image/PN/1005.php'; } 
if (secondes_pn == 232) { document.getElementById("une_image_route3").src = 'image/PN/1010.php'; } 
if (secondes_pn == 230) { document.getElementById("une_image_route3").src = 'image/PN/1015.php'; } 
if (secondes_pn == 228) { document.getElementById("une_image_route3").src = 'image/PN/1020.php'; } 
if (secondes_pn == 226) { document.getElementById("une_image_route3").src = 'image/PN/1025.php'; } 
if (secondes_pn == 224) { document.getElementById("une_image_route3").src = 'image/PN/1030.php'; } 
if (secondes_pn == 222) { document.getElementById("une_image_route3").src = 'image/PN/1035.php'; } 
if (secondes_pn == 220) { document.getElementById("une_image_route3").src = 'image/PN/1040.php'; }
if (secondes_pn == 218) { document.getElementById("une_image_route3").src = 'image/PN/1045.php'; }
if (secondes_pn == 216) { document.getElementById("une_image_route3").src = 'image/PN/1050.php'; }
if (secondes_pn == 214) { document.getElementById("une_image_route3").src = 'image/PN/1055.php'; }
if (secondes_pn == 212) { document.getElementById("une_image_route3").src = 'image/PN/1060.php'; }
if (secondes_pn == 210) { document.getElementById("une_image_route3").src = 'image/PN/1065.php'; }
if (secondes_pn == 208) { document.getElementById("une_image_route3").src = 'image/PN/1070.php'; }
if (secondes_pn == 206) { document.getElementById("une_image_route3").src = 'image/PN/1075.php'; }
if (secondes_pn == 204) { document.getElementById("une_image_route3").src = 'image/PN/1080.php'; }
if (secondes_pn == 202) { document.getElementById("une_image_route3").src = 'image/PN/1085.php'; }
if (secondes_pn == 200) { document.getElementById("une_image_route3").src = 'image/PN/1090.php'; }


if (secondes_pn == 600) { document.getElementById("une_image_route3").src = 'image/PN/1000.php'; } 
if (secondes_pn == 602) { document.getElementById("une_image_route3").src = 'image/PN/1005.php'; } 
if (secondes_pn == 604) { document.getElementById("une_image_route3").src = 'image/PN/1010.php'; } 
if (secondes_pn == 606) { document.getElementById("une_image_route3").src = 'image/PN/1015.php'; } 
if (secondes_pn == 608) { document.getElementById("une_image_route3").src = 'image/PN/1020.php'; } 
if (secondes_pn == 610) { document.getElementById("une_image_route3").src = 'image/PN/1025.php'; } 
if (secondes_pn == 612) { document.getElementById("une_image_route3").src = 'image/PN/1030.php'; } 
if (secondes_pn == 614) { document.getElementById("une_image_route3").src = 'image/PN/1035.php'; } 
if (secondes_pn == 616) { document.getElementById("une_image_route3").src = 'image/PN/1040.php'; }
if (secondes_pn == 618) { document.getElementById("une_image_route3").src = 'image/PN/1045.php'; }
if (secondes_pn == 620) { document.getElementById("une_image_route3").src = 'image/PN/1050.php'; }
if (secondes_pn == 622) { document.getElementById("une_image_route3").src = 'image/PN/1055.php'; }
if (secondes_pn == 624) { document.getElementById("une_image_route3").src = 'image/PN/1060.php'; }
if (secondes_pn == 626) { document.getElementById("une_image_route3").src = 'image/PN/1065.php'; }
if (secondes_pn == 628) { document.getElementById("une_image_route3").src = 'image/PN/1070.php'; }
if (secondes_pn == 630) { document.getElementById("une_image_route3").src = 'image/PN/1075.php'; }
if (secondes_pn == 632) { document.getElementById("une_image_route3").src = 'image/PN/1080.php'; }
if (secondes_pn == 634) { document.getElementById("une_image_route3").src = 'image/PN/1085.php'; }
if (secondes_pn == 636) { document.getElementById("une_image_route3").src = 'image/PN/1090.php'; }

			
			
			// OUVERTURE PN
			
			
			// FEUX
			
			if ( secondes_pn > 1 && secondes_pn < 650 ) {
			
			compteur_feux_pn++;
			if ( compteur_feux_pn >= 0 && compteur_feux_pn <= 15 ) {
			document.getElementById("une_image_route4").src = 'image/PN/feux1.php'; }
			if ( compteur_feux_pn >= 15 && compteur_feux_pn <= 30 ) {
			document.getElementById("une_image_route4").src = 'image/PN/feux2.php'; 
			if ( compteur_feux_pn >= 30 ) { compteur_feux_pn = 0;}}
			
			}
			
			if ( secondes_pn > 650 ) { document.getElementById("une_image_route4").src = 'image/PN/feux0.php'; }
			
			if ( secondes_pn > 10000 ) { secondes_pn = 0; }
			
	
			
}