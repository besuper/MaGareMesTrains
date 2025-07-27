function evenement() { // le déclenchement des événement
			
			compteur_evenement++; 
			
			
			
			
			
			if ( compteur_evenement == 90 ) {
			function getRandomArbitrary(min, max) { programme_evenement = Math.random() * (max - min) + min; programme_evenement = Math.round(programme_evenement); }
			getRandomArbitrary(1, 8); 
			
			
			
			if (programme_evenement == 1) { travaux1 				= true; compteur_travaux_1 	= 1; 	 }
			if (programme_evenement == 2) { eclair_bol 				= true; eclair 				= 1; 	 }
			if (programme_evenement == 3) { la_mousse 				= true; animation_mousse 	= 1; 	 }
			if (programme_evenement == 4) { les_ballons 			= true; animation_marion 	= 1; 	 }
			if (programme_evenement == 5) { le_ampli 				= true; animation_ampli 	= 1; 	 }
			if (programme_evenement == 6) { animation_neige_bol 	= true; animation_neige 	= 1; 	 }
			if (programme_evenement == 7) { incendie_intervention 	= true; intervention 		= -2000; }
			if (programme_evenement == 8) { noel_bol 				= true; animation_noel      = 1; 	 }
			}
			
			
			
			
			if ( compteur_evenement > 500 ) { compteur_evenement = 1; }
			
			
			
			
}