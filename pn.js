			
function pn() {
			

			
secondes_pn++;  // FERMETURE PN
			
if (secondes_pn == 236) { document.getElementById("une_image_route3").src = 'image/PN/0.png'; } 
if (secondes_pn == 234) { document.getElementById("une_image_route3").src = 'image/PN/5.png'; } 
if (secondes_pn == 232) { document.getElementById("une_image_route3").src = 'image/PN/10.png'; } 
if (secondes_pn == 230) { document.getElementById("une_image_route3").src = 'image/PN/15.png'; } 
if (secondes_pn == 228) { document.getElementById("une_image_route3").src = 'image/PN/20.png'; } 
if (secondes_pn == 226) { document.getElementById("une_image_route3").src = 'image/PN/25.png'; } 
if (secondes_pn == 224) { document.getElementById("une_image_route3").src = 'image/PN/30.png'; } 
if (secondes_pn == 222) { document.getElementById("une_image_route3").src = 'image/PN/35.png'; } 
if (secondes_pn == 220) { document.getElementById("une_image_route3").src = 'image/PN/40.png'; }
if (secondes_pn == 218) { document.getElementById("une_image_route3").src = 'image/PN/45.png'; }
if (secondes_pn == 216) { document.getElementById("une_image_route3").src = 'image/PN/50.png'; }
if (secondes_pn == 214) { document.getElementById("une_image_route3").src = 'image/PN/55.png'; }
if (secondes_pn == 212) { document.getElementById("une_image_route3").src = 'image/PN/60.png'; }
if (secondes_pn == 210) { document.getElementById("une_image_route3").src = 'image/PN/65.png'; }
if (secondes_pn == 208) { document.getElementById("une_image_route3").src = 'image/PN/70.png'; }
if (secondes_pn == 206) { document.getElementById("une_image_route3").src = 'image/PN/75.png'; }
if (secondes_pn == 204) { document.getElementById("une_image_route3").src = 'image/PN/80.png'; }
if (secondes_pn == 202) { document.getElementById("une_image_route3").src = 'image/PN/85.png'; }
if (secondes_pn == 200) { document.getElementById("une_image_route3").src = 'image/PN/90.png'; }


if (secondes_pn == 600) { document.getElementById("une_image_route3").src = 'image/PN/0.png'; } 
if (secondes_pn == 602) { document.getElementById("une_image_route3").src = 'image/PN/5.png'; } 
if (secondes_pn == 604) { document.getElementById("une_image_route3").src = 'image/PN/10.png'; } 
if (secondes_pn == 606) { document.getElementById("une_image_route3").src = 'image/PN/15.png'; } 
if (secondes_pn == 608) { document.getElementById("une_image_route3").src = 'image/PN/20.png'; } 
if (secondes_pn == 610) { document.getElementById("une_image_route3").src = 'image/PN/25.png'; } 
if (secondes_pn == 612) { document.getElementById("une_image_route3").src = 'image/PN/30.png'; } 
if (secondes_pn == 614) { document.getElementById("une_image_route3").src = 'image/PN/35.png'; } 
if (secondes_pn == 616) { document.getElementById("une_image_route3").src = 'image/PN/40.png'; }
if (secondes_pn == 618) { document.getElementById("une_image_route3").src = 'image/PN/45.png'; }
if (secondes_pn == 620) { document.getElementById("une_image_route3").src = 'image/PN/50.png'; }
if (secondes_pn == 622) { document.getElementById("une_image_route3").src = 'image/PN/55.png'; }
if (secondes_pn == 624) { document.getElementById("une_image_route3").src = 'image/PN/60.png'; }
if (secondes_pn == 626) { document.getElementById("une_image_route3").src = 'image/PN/65.png'; }
if (secondes_pn == 628) { document.getElementById("une_image_route3").src = 'image/PN/70.png'; }
if (secondes_pn == 630) { document.getElementById("une_image_route3").src = 'image/PN/75.png'; }
if (secondes_pn == 632) { document.getElementById("une_image_route3").src = 'image/PN/80.png'; }
if (secondes_pn == 634) { document.getElementById("une_image_route3").src = 'image/PN/85.png'; }
if (secondes_pn == 636) { document.getElementById("une_image_route3").src = 'image/PN/90.png'; }

			
			
			// OUVERTURE PN
			
			
			// FEUX
			
			if ( secondes_pn > 1 && secondes_pn < 650 ) {
			
			compteur_feux_pn++;
			if ( compteur_feux_pn >= 0 && compteur_feux_pn <= 15 ) {
			document.getElementById("une_image_route4").src = 'image/PN/feux1.png'; }
			if ( compteur_feux_pn >= 15 && compteur_feux_pn <= 30 ) {
			document.getElementById("une_image_route4").src = 'image/PN/feux2.png'; 
			if ( compteur_feux_pn >= 30 ) { compteur_feux_pn = 0;}}
			
			}
			
			if ( secondes_pn > 650 ) { document.getElementById("une_image_route4").src = 'image/PN/feux0.png'; }
			
			if ( secondes_pn > 10000 ) { secondes_pn = 0; }
			
	
			
}