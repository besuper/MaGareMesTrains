function loadPlayer() {
			var audioPlayer = new Audio();
			audioPlayer.controls="controls";
			audioPlayer.src="son/train_qui_passe.mp3";
			document.getElementById("player").appendChild(audioPlayer);
			
		}	
		
		
		
		var urls = new Array();
		urls[0] = 'son/train_qui_arrive.mp3';
		urls[1] = 'son/train_qui_arrive2.mp3';
		urls[2] = 'son/train_qui_part.mp3';
		urls[3] = 'son/train_qui_passe.mp3';
		urls[4] = 'son/train_qui_passe.mp3'; // au lieu de TGV
		urls[5] = 'son/marchandise2.wav';
		urls[6] = 'son/marf.wav';
		urls[7] = 'son/loc.mp3';
		urls[8] = 'son/pinpon.mp3';
		urls[9] = 'son/coucou1.mp3';
		urls[10] = 'son/princesse.mp3';
		urls[11] = 'son/toutaufond.mp3';
		urls[12] = 'son/domi.mp3';
		urls[13] = 'son/brouillard.mp3';
		urls[14] = 'son/frisson.mp3';
		urls[15] = 'son/isabelle.mp3';
		urls[16] = 'son/voie1-interregio-morges.wav'; // interregio - morges
		urls[17] = 'son/voie2-interregio-morges.wav';
		urls[18] = 'son/voie3-interregio-morges.wav';
		urls[19] = 'son/voie4-interregio-morges.wav';
		urls[20] = 'son/voie1-interregio-yverdon.wav'; // interregio - yverdon
		urls[21] = 'son/voie2-interregio-yverdon.wav';
		urls[22] = 'son/voie3-interregio-yverdon.wav';
		urls[23] = 'son/voie4-interregio-yverdon.wav';
		urls[24] = 'son/voie1-ICN-yverdon.wav'; // ICN Yverdon
		urls[25] = 'son/voie2-ICN-yverdon.wav';
		urls[26] = 'son/voie3-ICN-yverdon.wav';
		urls[27] = 'son/voie4-ICN-yverdon.wav';
		urls[28] = 'son/voie5-ICN-yverdon.wav';
		urls[29] = 'son/voie1-interregio-brig.wav'; // interregio - brig
		urls[30] = 'son/voie2-interregio-brig.wav';
		urls[31] = 'son/voie3-interregio-brig.wav';
		urls[32] = 'son/voie4-interregio-brig.wav';
		urls[33] = 'son/voie5-interregio-brig.wav';
		urls[34] = 'son/voie1-interregio-lucerne.wav'; // interregio - Lucern
		urls[35] = 'son/voie2-interregio-lucerne.wav';
		urls[36] = 'son/voie3-interregio-lucerne.wav';
		urls[37] = 'son/voie4-interregio-lucerne.wav';
		urls[38] = 'son/voie5-interregio-lucerne.wav';
		urls[39] = 'son/mistercoucou.mp3';
		urls[40] = 'son/marie-madelaine.mp3';
		
		
		
		function nextSong(next) { 
			if ( son_ouvert ) {   // la fonction est muette à certain moment
			var audioPlayer = document.getElementsByTagName('audio')[0];
			audioPlayer.src=urls[next];
			audioPlayer.load();
			audioPlayer.play();
			}
			
			
		
			/*
			if ( la_musique == 1 ) { unite_musique = 1455; } // Princesse !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			if ( la_musique == 2 ) { unite_musique = 1435; } // tout au fond de tes yeux !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			if ( la_musique == 3 ) { unite_musique = 1465; } // Dominette !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			if ( la_musique == 4 ) { unite_musique = 1445; } // Frisson d'hiver !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			if ( la_musique == 5 ) { unite_musique = 1410; } // Isabelle !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			if ( la_musique == 6 ) { unite_musique = 1475; } // Mister coucou !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			if ( la_musique == 7 ) { unite_musique = 1435; } // Marie-Madelaine !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			*/
			
			
		}
		
		function nextSong2(next) { // demandé pour Mister Coucou de la soirée mousse et Ampli
			
		var audioPlayer = document.getElementsByTagName('audio')[0];
		audioPlayer.src=urls[next];
		audioPlayer.load();
		audioPlayer.play();
			
		}
		
		
		function annonce(next) { // Annonce en gare
		
		// 101 Interregio Genève
		// 102 Interregio Yverdon
		// 201 ICN Yverdon
		// 301 Interregio Brig
		// 302 Interregio Lucerne
		
		if ( son_ouvert ) { // la fonction est muette à certain moment
		var audioPlayer = document.getElementsByTagName('audio')[0];
		audioPlayer.src=urls[next];
		audioPlayer.load();
		audioPlayer.play();
		}
		}
		
		
		
		
		
		
		
function onclick_page(event) // FONCTION CLIQUE
			{
		
			x = event.clientX;
			y = event.clientY;
			
			//alert(x+"-"+y);
			//nextSong(8);
					
			
			} // fin de la fonction clique		
			
			


		
		




