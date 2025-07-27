		
		
		
		
				
	function clique(monMot) {
	
			
			
			if ( monMot == 'pause' ) {
			if (pause == 0) { pause = 1;} 
			else { pause = 0;}
			}
			
			if ( monMot == 'probleme' ) {
			request2('probleme');
			}
			
			
			
			
			if ( monMot == 'intro' ) { 
			compteur_intro = 11;
			}
	
			if ( monMot == 'texti' ) { 
			compteur_intro = 48;
			}
	
			if ( monMot == 'reset' ) { 
			point_de_passage_1 = 'Pa';
			point_de_passage_2 = 'Pa';
			compteur_clique = 0;
			x = 0; y = 0;
			
			
			if (memoire == 500 && 
			occupation_its6 == false && 
			occupation_its5 == false && 
			occupation_its4 == false &&
			occupation_its8 == false
			) { its6 = 0; its5 = 0; its4 = 0; its8 = 0;
			z19 = 'rouge'; z17 = 'rouge';
			document.getElementById("z19").src = "image/feux/rouge_2.png";
			document.getElementById("z17").src = "image/feux/rouge_2.png";
			}
			
			
			if (memoire == 501 && 
			occupation_its6 == false && 
			occupation_its98 == false && 
			occupation_its106 == false &&
			occupation_its105 == false &&
			occupation_its104 == false &&
			occupation_its103 == false &&
			occupation_its117 == false
			) { its6 = 0; its98 = 0; its106 = 0; its105 = 0; its104 = 0; its103 = 0; its117 = 0;
			z19 = 'rouge'; 
			document.getElementById("z19").src = "image/feux/rouge_2.png";
			document.getElementById("z21").src = "image/feux/rouge_2.png";
			aiguille98 = 0;
			}
			
			
			if (memoire == 502 && 
			occupation_its6 == false && 
			occupation_its98 == false && 
			occupation_its106 == false &&
			occupation_its92 == false &&
			occupation_its19 == false &&
			occupation_its121 == false &&
			occupation_its18 == false &&
			occupation_its17 == false
			) { its6 = 0; its98 = 0; its106 = 0; its92 = 0; its19 = 0; its121 = 0; its18 = 0; its17 = 0;
			z19 = 'rouge'; 
			document.getElementById("z19").src = "image/feux/rouge_2.png";
			document.getElementById("z9").src = "image/feux/rouge_2.png";
			aiguille98 = 0;
			aiguille92 = 0;
			}
			
			if (memoire == 503 && 
			occupation_its6 == false && 
			occupation_its98 == false && 
			occupation_its106 == false &&
			occupation_its92 == false &&
			occupation_its19 == false &&
			occupation_its121 == false &&
			occupation_its95 == false &&
			occupation_its37 == false
			) { its6 = 0; its98 = 0; its106 = 0; its92 = 0; its19 = 0; its121 = 0; its95 = 0; its37 = 0;
			z19 = 'rouge'; 
			document.getElementById("z19").src = "image/feux/rouge_2.png";
			document.getElementById("z10").src = "image/feux/rouge_2.png";
			aiguille98 = 0;
			aiguille92 = 0;
			aiguille95 = 0;
			}
			
			if (memoire == 510 && 
			occupation_its60 == false && 
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its57 == false &&
			occupation_its56 == false &&
			occupation_its119 == false
			) { its60 = 0; its59 = 0; its58 = 0; its57 = 0; its56 = 0; its119 = 0;
			z14 = 'rouge'; 
			document.getElementById("z14").src = "image/feux/rouge_2.png";
			document.getElementById("z11").src = "image/feux/rouge_2.png";
			aiguille85 = 0;
			aiguille74 = 0;
			}
			
			if (memoire == 511 && 
			occupation_its60 == false && 
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its85 == false &&
			occupation_its39 == false &&
			occupation_its38 == false &&
			occupation_its37 == false 
			) { its60 = 0; its59 = 0; its58 = 0; its85 = 0; its39 = 0; its38 = 0; its37 = 0;
			z14 = 'rouge'; 
			document.getElementById("z14").src = "image/feux/rouge_2.png";
			document.getElementById("z10").src = "image/feux/rouge_2.png";
			aiguille85 = 0;
			}
			
			if (memoire == 512 && 
			occupation_its60 == false && 
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its85 == false &&
			occupation_its39 == false &&
			occupation_its84 == false &&
			occupation_its19 == false &&
			occupation_its121 == false &&
			occupation_its18 == false 
			) { its60 = 0; its59 = 0; its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its121 = 0; its18 = 0;
			z14 = 'rouge'; 
			document.getElementById("z14").src = "image/feux/rouge_2.png";
			document.getElementById("z9").src = "image/feux/rouge_2.png";
			aiguille85 = 0;
			aiguille84 = 0;
			}
			
			if (memoire == 5813 && 
			occupation_its60 == false && 
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its57 == false &&
			occupation_its94 == false &&
			occupation_its74 == false &&
			occupation_its120 == false
			) { its60 = 0; its59 = 0; its58 = 0; its57 = 0; its94 = 0; its74 = 0; its120 = 0; 
			z14 = 'rouge'; 
			document.getElementById("z14").src = "image/feux/rouge_2.png";
			document.getElementById("z12").src = "image/feux/rouge_2.png";
			aiguille94 = 0;
			}
			
			if (memoire == 513 && 
			occupation_its60 == false && 
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its85 == false &&
			occupation_its39 == false &&
			occupation_its84 == false &&
			occupation_its19 == false &&
			occupation_its83 == false &&
			occupation_its104 == false &&
			occupation_its103 == false 
			) { its60 = 0; its59 = 0; its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its83 = 0; its104 = 0; its103 = 0; 
			z14 = 'rouge'; 
			document.getElementById("z14").src = "image/feux/rouge_2.png";
			aiguille85 = 0;
			aiguille84 = 0;
			aiguille83 = 0;
			}
			
			if (memoire == 514 && 
			occupation_its60 == false && 
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its85 == false &&
			occupation_its39 == false &&
			occupation_its84 == false &&
			occupation_its19 == false &&
			occupation_its83 == false &&
			occupation_its104 == false &&
			occupation_its96 == false &&
			occupation_its4 == false && 
			occupation_its8 == false 
			) { its60 = 0; its59 = 0; its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its83 = 0; its104 = 0; its96 = 0; its4 = 0; its8 = 0; 
			z14 = 'rouge'; z17 = 'rouge';
			document.getElementById("z14").src = "image/feux/rouge_2.png";
			document.getElementById("z17").src = "image/feux/rouge_2.png";
			aiguille85 = 0;
			aiguille84 = 0;
			aiguille83 = 0;
			aiguille96 = 0;
			}
			
			if (memoire == 520 && 
			occupation_its76 == false && 
			occupation_its86 == false &&
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its85 == false &&
			occupation_its39 == false &&
			occupation_its84 == false &&
			occupation_its19 == false &&
			occupation_its83 == false &&
			occupation_its104 == false &&
			occupation_its96 == false &&
			occupation_its4 == false && 
			occupation_its8 == false 
			) { its76 = 0; its86 = 0; its59 = 0; its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its83 = 0; its104 = 0; its96 = 0; its4 = 0; its8 = 0;
			z15 = 'rouge'; z17 = 'rouge';
			document.getElementById("z15").src = "image/feux/rouge_2.png";
			document.getElementById("z17").src = "image/feux/rouge_2.png";
			aiguille85 = 0;
			aiguille84 = 0;
			aiguille83 = 0;
			aiguille96 = 0;
			aiguille86 = 0;
			}
			
			if (memoire == 521 && 
			occupation_its76 == false && 
			occupation_its86 == false &&
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its85 == false &&
			occupation_its39 == false &&
			occupation_its84 == false &&
			occupation_its19 == false &&
			occupation_its83 == false &&
			occupation_its104 == false &&
			occupation_its103 == false 
			) { its76 = 0; its86 = 0; its59 = 0; its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its83 = 0; its104 = 0; its103 = 0;
			z15 = 'rouge'; 
			document.getElementById("z15").src = "image/feux/rouge_2.png";
			aiguille85 = 0;
			aiguille84 = 0;
			aiguille83 = 0;
			aiguille86 = 0;
			}
			
			if (memoire == 522 && 
			occupation_its76 == false && 
			occupation_its86 == false &&
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its85 == false &&
			occupation_its39 == false &&
			occupation_its84 == false &&
			occupation_its19 == false &&
			occupation_its121 == false &&
			occupation_its18 == false 
			) { its76 = 0; its86 = 0; its59 = 0; its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its121 = 0; its18 = 0;
			z15 = 'rouge'; 
			document.getElementById("z15").src = "image/feux/rouge_2.png";
			document.getElementById("z9").src = "image/feux/rouge_2.png";
			aiguille85 = 0;
			aiguille84 = 0;
			aiguille86 = 0;
			}
			
			if (memoire == 523 && 
			occupation_its76 == false && 
			occupation_its86 == false &&
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its85 == false &&
			occupation_its39 == false &&
			occupation_its38 == false &&
			occupation_its37 == false 
			) { its76 = 0; its86 = 0; its59 = 0; its58 = 0; its85 = 0; its39 = 0; its38 = 0; its37 = 0; 
			z15 = 'rouge'; 
			document.getElementById("z15").src = "image/feux/rouge_2.png";
			document.getElementById("z10").src = "image/feux/rouge_2.png";
			aiguille85 = 0;
			aiguille86 = 0;
			}
			
			if (memoire == 524 && 
			occupation_its76 == false && 
			occupation_its86 == false &&
			occupation_its59 == false && 
			occupation_its58 == false &&
			occupation_its57 == false &&
			occupation_its56 == false 
			) { its76 = 1; its86 = 1; its59 = 1; its58 = 1; its57 = 1; its56 = 1;
			z15 = 'rouge'; 
			document.getElementById("z15").src = "image/feux/rouge_2.png";
			document.getElementById("z11").src = "image/feux/rouge_2.png";
			aiguille86 = 0;
			}
			
			if (memoire == 525 && 
			occupation_its76 == false && 
			occupation_its75 == false &&
			occupation_its74 == false
			) { its76 = 0; its75 = 0; its74 = 0; its120 = 0;
			z15 = 'rouge'; 
			document.getElementById("z15").src = "image/feux/rouge_2.png";
			document.getElementById("z12").src = "image/feux/rouge_2.png";
			aiguille86 = 0;
			}
			
			if (memoire == 530 && 
			occupation_its73 == false && 
			occupation_its72 == false &&
			occupation_its71 == false
			) { its73 = 0; its72 = 0; its71 = 0;
			z8 = 'rouge'; 
			document.getElementById("z8").src = "image/feux/rouge_2.png";
			}
			
			if (memoire == 531 && 
			occupation_its73 == false && 
			occupation_its93 == false &&
			occupation_its54 == false && 
			occupation_its81 == false &&
			occupation_its33 == false &&
			occupation_its131 == false &&
			occupation_its32 == false &&
			occupation_its31 == false &&
			occupation_its30 == false
			) { its73 = 0; its93 = 0; its54 = 0; its81 = 0; its33 = 0; its131 = 0; its32 = 0; its31 = 0; its30 = 0; 
			z8 = 'rouge'; 
			document.getElementById("z8").src = "image/feux/rouge_2.png";
			aiguille93 = 0;
			aiguille81 = 0;
			}
			
			if (memoire == 540 && 
			occupation_its55 == false && 
			occupation_its54 == false &&
			occupation_its53 == false && 
			occupation_its52 == false &&
			occupation_its87 == false &&
			occupation_its71 == false &&
			occupation_its70 == false 
			) { its55 = 0; its54 = 0; its53 = 0; its52 = 0; its87 = 0; its71 = 0; its70 = 0; 
			z7 = 'rouge'; 
			document.getElementById("z7").src = "image/feux/rouge_2.png";
			aiguille87 = 0;
			}
			
			if (memoire == 541 && 
			occupation_its55 == false && 
			occupation_its54 == false &&
			occupation_its81 == false && 
			occupation_its33 == false &&
			occupation_its131 == false &&
			occupation_its32 == false &&
			occupation_its31 == false &&
			occupation_its30 == false 
			) { its55 = 0; its54 = 0; its81 = 0; its33 = 0; its131 = 0; its32 = 0; its31 = 0; its30 = 0; 
			z7 = 'rouge'; 
			document.getElementById("z7").src = "image/feux/rouge_2.png";
			aiguille81 = 0;
			}
			
			if (memoire == 550 && 
			occupation_its34 == false && 
			occupation_its33 == false &&
			occupation_its131 == false && 
			occupation_its32 == false &&
			occupation_its31 == false &&
			occupation_its30 == false
			) { its34 = 0; its33 = 0; its131 = 0; its32 = 0; its31 = 0; its30 = 0; 
			z6 = 'rouge'; 
			document.getElementById("z6").src = "image/feux/rouge_2.png";
			}
			
			if (memoire == 551 && 
			occupation_its34 == false && 
			occupation_its33 == false &&
			occupation_its131 == false && 
			occupation_its78 == false &&
			occupation_its52 == false &&
			occupation_its87 == false &&
			occupation_its71 == false &&
			occupation_its70 == false 
			) { its34 = 0; its33 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; its70 = 0;  
			z6 = 'rouge'; 
			document.getElementById("z6").src = "image/feux/rouge_2.png";
			aiguille78 = 0;
			aiguille87 = 0;
			}
			
			if (memoire == 560 && 
			occupation_its111 == false && 
			occupation_its16 == false &&
			occupation_its80 == false && 
			occupation_its131 == false &&
			occupation_its32 == false &&
			occupation_its31 == false &&
			occupation_its30 == false
			) { its111 = 0; its16 = 0; its80 = 0; its131 = 0; its32 = 0; its31 = 0; its30 = 0;
			z5 = 'rouge'; 
			document.getElementById("z5").src = "image/feux/rouge_2.png";
			aiguille80 = 0;
			}
			
			if (memoire == 561 && 
			occupation_its111 == false && 
			occupation_its16 == false &&
			occupation_its80 == false && 
			occupation_its131 == false &&
			occupation_its78 == false &&
			occupation_its52 == false &&
			occupation_its87 == false &&
			occupation_its71 == false &&
			occupation_its70 == false
			) { its111 = 0; its16 = 0; its80 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; its70 = 0;
			z5 = 'rouge'; 
			document.getElementById("z5").src = "image/feux/rouge_2.png";
			aiguille80 = 0;
			aiguille78 = 0;
			aiguille87 = 0;
			}
			
			if (memoire == 570 && 
			occupation_its102 == false && 
			occupation_its101 == false &&
			occupation_its82 == false && 
			occupation_its16 == false &&
			occupation_its80 == false &&
			occupation_its131 == false &&
			occupation_its78 == false &&
			occupation_its52 == false &&
			occupation_its87 == false &&
			occupation_its71 == false &&
			occupation_its70 == false
			) { its102 = 0; its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; its70 = 0;
			z5 = 'rouge'; 
			document.getElementById("z5").src = "image/feux/rouge_2.png";
			aiguille82 = 0;
			aiguille80 = 0;
			aiguille78 = 0;
			aiguille87 = 0;
			}
			
			if (memoire == 571 && 
			occupation_its102 == false && 
			occupation_its101 == false &&
			occupation_its82 == false && 
			occupation_its16 == false &&
			occupation_its80 == false &&
			occupation_its131 == false &&
			occupation_its32 == false &&
			occupation_its31 == false &&
			occupation_its30 == false 
			) { its102 = 0; its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its32 = 0; its31 = 0; its30 = 0;
			z5 = 'rouge'; 
			document.getElementById("z5").src = "image/feux/rouge_2.png";
			aiguille82 = 0;
			aiguille80 = 0;
			}
			
			if (memoire == 580 && 
			occupation_its2 == false && 
			occupation_its97 == false &&
			occupation_its101 == false && 
			occupation_its82 == false &&
			occupation_its16 == false &&
			occupation_its80 == false &&
			occupation_its131 == false &&
			occupation_its78 == false &&
			occupation_its52 == false &&
			occupation_its87 == false &&
			occupation_its71 == false &&
			occupation_its70 == false 
			) { its23 = 0; its2 = 0; its97 = 0; its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; its70 = 0;
			z16 = 'rouge'; 
			document.getElementById("z16").src = "image/feux/rouge_2.png";
			aiguille97 = 0;
			aiguille82 = 0;
			aiguille87 = 0;
			aiguille80 = 0;
			aiguille78 = 0;
			}
			
			if (memoire == 581 && 
			occupation_its2 == false && 
			occupation_its97 == false &&
			occupation_its101 == false && 
			occupation_its82 == false &&
			occupation_its16 == false &&
			occupation_its80 == false &&
			occupation_its131 == false &&
			occupation_its32 == false &&
			occupation_its31 == false &&
			occupation_its30 == false
			) { its23 = 0; its2 = 0; its97 = 0; its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its32 = 0; its31 = 0; its30 = 0;
			z16 = 'rouge'; 
			document.getElementById("z16").src = "image/feux/rouge_2.png";
			aiguille97 = 0;
			aiguille82 = 0;
			aiguille80 = 0;
			}
			
			
			if (memoire == 15 && 
			occupation_its14 == false && 
			occupation_its15 == false &&
			occupation_its16 == false &&
			occupation_its111 == false &&
			occupation_its17 == false
			) { its14 = 0; its15 = 0; its16 = 0; its111 = 0; its17 = 0; z1 = 'rouge'; 
			document.getElementById("z1").src = "image/feux/rouge_2.png";
			document.getElementById("z5").src = "image/feux/rouge_2.png";
			}
			
			
			if (memoire == 16 && 
			occupation_its14 == false && 
			occupation_its15 == false &&
			occupation_its16 == false &&
			occupation_its82 == false &&
			occupation_its101 == false &&
			occupation_its102 == false 
			) { its14 = 0; its15 = 0; its16 = 0; its82 = 0;	its101 = 0; its102 = 0; 
			z1 = 'rouge'; 
			document.getElementById("z1").src = "image/feux/rouge_2.png";
			document.getElementById("z20").src = "image/feux/rouge_2.png";
			}
			
			if (memoire == 17 && 
			occupation_its14 == false && 
			occupation_its79 == false &&
			occupation_its32 == false &&
			occupation_its131 == false &&
			occupation_its33 == false &&
			occupation_its34 == false &&
			occupation_its118 == false
			) { its14 = 0; its79 = 0; its32 = 0; its131 = 0;	its33 = 0; its34 = 0; its118 = 0;
			z1 = 'rouge'; 
			document.getElementById("z1").src = "image/feux/rouge_2.png";
			document.getElementById("z6").src = "image/feux/rouge_2.png";
			}
			
			
			if (memoire == 18 && 
			occupation_its14 == false && 
			occupation_its79 == false &&
			occupation_its32 == false &&
			occupation_its131 == false &&
			occupation_its33 == false &&
			occupation_its81 == false &&
			occupation_its54 == false &&
			occupation_its55 == false   
			) { its14 = 0; its79 = 0; its32 = 0; its131 = 0; its33 = 0; its81 = 0; its54 = 0; its55 = 0; z1 = 'rouge'; 
			document.getElementById("z7").src = "image/feux/rouge_2.png";
			document.getElementById("z1").src = "image/feux/rouge_2.png";}
			
			if (memoire == 181 && 
			occupation_its14 == false && 
			occupation_its79 == false &&
			occupation_its32 == false &&
			occupation_its131 == false &&
			occupation_its33 == false &&
			occupation_its81 == false &&
			occupation_its54 == false &&
			occupation_its122 == false &&
			occupation_its73== false  
			) { its14 = 0; its79 = 0; its32 = 0; its131 = 0; its33 = 0; its81 = 0; its54 = 0; its93 = 0; its73 = 0; z1 = 'rouge'; 
			document.getElementById("z8").src = "image/feux/rouge_2.png";
			document.getElementById("z1").src = "image/feux/rouge_2.png";}
			
			if (memoire == 161 && 
			occupation_its14 == false && 
			occupation_its15 == false &&
			occupation_its16 == false &&
			occupation_its82 == false &&
			occupation_its101 == false &&
			occupation_its125 == false &&
			occupation_its2 == false &&
			occupation_its23 == false
			) { its14 = 0; its15 = 0; its16 = 0; its82 = 0;	its101 = 0; its97 = 0; its2 = 0; its23 = 0; its8 = 0; z1 = 'rouge'; 
			document.getElementById("z1").src = "image/feux/rouge_2.png";
			document.getElementById("z16").src = "image/feux/rouge_2.png";
			aiguille82 = 0; aiguille97 = 0;
			}
			
			if (memoire == 3201 && 
			occupation_its56 == false && 
			occupation_its57 == false &&
			occupation_its58 == false &&
			occupation_its88 == false &&
			occupation_its41 == false &&
			occupation_its91 == false &&
			occupation_its21 == false &&
			occupation_its22 == false
			) { its56 = 0; its57 = 0; its58 = 0; its88 = 0; its41 = 0; its91= 0; its21 = 0; its22 = 0; 
			z11 = 'rouge'; z18 = 'rouge';
			document.getElementById("z11").src = "image/feux/rouge_2.png";
			document.getElementById("z18").src = "image/feux/rouge_2.png";
			aiguille88 = 0;
			aiguille91 = 0;
			}
			
			if (memoire == 3202 && 
			occupation_its74 == false && 
			occupation_its94 == false && 
			occupation_its57 == false &&
			occupation_its58 == false &&
			occupation_its88 == false &&
			occupation_its41 == false &&
			occupation_its42 == false &&
			occupation_its43 == false 
			) { its74 = 0; its94 = 0; its57 = 0; its58 = 0; its88 = 0; its41 = 0; its42 = 0; its43 = 0;
			z13 = 'rouge'; z13 = 'rouge';
			document.getElementById("z12").src = "image/feux/rouge_2.png";
			document.getElementById("z13").src = "image/feux/rouge_2.png";
			aiguille88 = 0;
			aiguille94 = 0;
			}
			
			if (memoire == 3203 && 
			occupation_its74 == false && 
			occupation_its94 == false && 
			occupation_its57 == false &&
			occupation_its58 == false &&
			occupation_its88 == false &&
			occupation_its41 == false &&
			occupation_its91 == false &&
			occupation_its21 == false &&
			occupation_its22 == false 
			) { its74 = 0; its94 = 0; its57 = 0; its58 = 0; its88 = 0; its41 = 0; its91 = 0; its21 = 0; its22 = 0;
			z13 = 'rouge'; z18 = 'rouge';
			document.getElementById("z12").src = "image/feux/rouge_2.png";
			document.getElementById("z18").src = "image/feux/rouge_2.png";
			aiguille88 = 0;
			aiguille94 = 0;
			aiguille91 = 0;
			}
			
			// Nouveau
			
			if (memoire == 1000 && 
			occupation_its106 	== false && 
			occupation_its92 	== false && 
			occupation_its121 	== false &&
			occupation_its19 	== false &&
			occupation_its95 	== false &&
			occupation_its37 	== false &&
			occupation_its118 	== false 
			) { its106 = 0; its92 = 0; its121 = 0; its19 = 0; its95 = 0; its37 = 0; its118 = 0;
			z22 = 'rouge'; z10 = 'rouge';
			document.getElementById("z10").src = "image/feux/rouge_2.png";
			document.getElementById("z22").src = "image/feux/rouge_2.png";
			aiguille92 = 0;
			aiguille95 = 0;
			}
			
			
			if (memoire == 1001 && 
			occupation_its106 	== false && 
			occupation_its92 	== false && 
			occupation_its121 	== false &&
			occupation_its19 	== false &&
			occupation_its18 	== false &&
			occupation_its17 	== false
			) { its106 = 0; its92 = 0; its121 = 0; its19 = 0; its18 = 0; its17 = 0; 
			z22 = 'rouge'; z9 = 'rouge';
			document.getElementById("z9").src = "image/feux/rouge_2.png";
			document.getElementById("z22").src = "image/feux/rouge_2.png";
			aiguille92 = 0;
			aiguille95 = 0;
			}
			
			if (memoire == 1002 && 
			occupation_its106 	== false && 
			occupation_its105 	== false && 
			occupation_its104 	== false &&
			occupation_its96 	== false &&
			occupation_its4 	== false &&
			occupation_its8 	== false
			) { its106 = 0; its105 = 0; its104 = 0; its96 = 0; its4 = 0; its8 = 0; 
			z22 = 'rouge'; z9 = 'rouge';
			document.getElementById("z9").src = "image/feux/rouge_2.png";
			document.getElementById("z22").src = "image/feux/rouge_2.png";
			aiguille92 = 0;
			aiguille96 = 0;
			}
			
			if (memoire == 1003 && 
			occupation_its106 	== false && 
			occupation_its105 	== false && 
			occupation_its104 	== false &&
			occupation_its103 	== false &&
			occupation_its117 	== false 
			) { its106 = 0; its105 = 0; its104 = 0; its103 = 0; its117 = 0; 
			z22 = 'rouge'; z21 = 'rouge';
			document.getElementById("z21").src = "image/feux/rouge_2.png";
			document.getElementById("z22").src = "image/feux/rouge_2.png";
			aiguille92 = 0;
			aiguille96 = 0;
			}
			
			if (memoire == 1004 && 
			occupation_its132 	== false && 
			occupation_its101 	== false && 
			occupation_its102 	== false &&
			occupation_its117 	== false
			) { its132 = 0; its101 = 0; its102 = 0; its117 = 0; 
			z23 = 'rouge'; z20 = 'rouge';
			document.getElementById("z23").src = "image/feux/rouge_2.png";
			document.getElementById("z20").src = "image/feux/rouge_2.png";
			aiguille82 = 0;
			aiguille97 = 0;
			}
			
			if (memoire == 1005 && 
			occupation_its132 	== false && 
			occupation_its101 	== false && 
			occupation_its97 	== false &&
			occupation_its2 	== false &&
			occupation_its8 	== false &&
			occupation_its23 	== false
			) { its132 = 0; its101 = 0; its97 = 0; its2 = 0; its8 = 0; its23 = 0; 
			z23 = 'rouge'; z16 = 'rouge';
			document.getElementById("z23").src = "image/feux/rouge_2.png";
			document.getElementById("z16").src = "image/feux/rouge_2.png";
			aiguille82 = 0;
			aiguille97 = 0;
			}
			
			
			/*
			if (memoire == 120 && 
			occupation_its120 == false 
			) { its120 = 0; z8 = 'rouge'; document.getElementById("z8").src = "image/feux/rouge_2.png";}
			
			if (memoire == 119 && 
			occupation_its119 == false 
			) { its119 = 0; z7 = 'rouge'; document.getElementById("z7").src = "image/feux/rouge_2.png";}
			
			if (memoire == 118 && 
			occupation_its118 == false 
			) { its118 = 0; z6 = 'rouge'; document.getElementById("z6").src = "image/feux/rouge_2.png";}
			
			if (memoire == 1710 && 
			occupation_its17 == false 
			) { its17 = 0; z5 = 'rouge'; document.getElementById("z5").src = "image/feux/rouge_2.png";}
			
			if (memoire == 1711 && 
			occupation_its17 == false 
			) { its17 = 0; z9 = 'rouge'; document.getElementById("z9").src = "image/feux/rouge_2.png";}
			
			if (memoire == 117 && 
			occupation_its117 == false 
			) { its117 = 0; z20 = 'rouge'; document.getElementById("z20").src = "image/feux/rouge_2.png";}
			
			if (memoire == 8 && 
			occupation_its8 == false 
			) { its8 = 0; z16 = 'rouge'; document.getElementById("z16").src = "image/feux/rouge_2.png";}
			*/
			
			if (memoire == 37 &&  
			occupation_its51 == false && 
			occupation_its52 == false &&
			occupation_its53 == false &&
			occupation_its54 == false &&
			occupation_its55 == false &&
			occupation_its119 == false
			) {  its51 = 0; its52 = 0; its53 = 0; its54 = 0; its55 = 0; its119 = 0;
			z3 = 'rouge'; 
			document.getElementById("z7").src = "image/feux/rouge_2.png";
			document.getElementById("z3").src = "image/feux/rouge_2.png"; }
			
			if (memoire == 371 &&  
			occupation_its51 == false && 
			occupation_its52 == false &&
			occupation_its53 == false &&
			occupation_its54 == false &&
			occupation_its122 == false &&
			occupation_its73  == false &&
			occupation_its120 == false
			) {  its51 = 0; its52 = 0; its53 = 0; its54 = 0; its93 = 0; its73 = 0; its120 = 0;
			z3 = 'rouge'; 
			document.getElementById("z3").src = "image/feux/rouge_2.png"; 
			document.getElementById("z8").src = "image/feux/rouge_2.png";
			aiguille93 = 0;}
			
			if (memoire == 39 && 
			occupation_its51 == false && 
			occupation_its52 == false &&
			occupation_its78 == false &&
			occupation_its131 == false &&
			occupation_its33 == false &&
			occupation_its34 == false &&
			occupation_its118 == false
			) { its51 = 0; its52 = 0; its78 = 0; its131 = 0; its33 = 0; its34 = 0; its118 = 0;
			z3 = 'rouge'; 
			document.getElementById("z3").src = "image/feux/rouge_2.png";
			document.getElementById("z6").src = "image/feux/rouge_2.png";
			aiguille78 = 0;}
			
			if (memoire == 40 && 
			occupation_its51 == false && 
			occupation_its52 == false &&
			occupation_its78 == false &&
			occupation_its131 == false &&
			occupation_its80 == false &&
			occupation_its16 == false &&
			occupation_its111 == false &&
			occupation_its17 == false 
			) { its51 = 0; its52 = 0; its78 = 0; its131 = 0;  its80 = 0; its16 = 0; its111 = 0; its17 = 0;
			z3 = 'rouge'; 
			document.getElementById("z3").src = "image/feux/rouge_2.png";
			document.getElementById("z5").src = "image/feux/rouge_2.png";
			aiguille78 = 0; aiguille80 = 0;}
			
			if (memoire == 41 && 
			occupation_its51 	== false && 
			occupation_its52 	== false &&
			occupation_its78 	== false &&
			occupation_its131 	== false &&
			occupation_its80 	== false &&
			occupation_its16 	== false &&
			occupation_its82 	== false &&
			occupation_its101 	== false &&
			occupation_its102 	== false &&
			occupation_its117 == false
			) { its51 = 0; its52 = 0; its78 = 0; its131 = 0;  its80 = 0; its16 = 0; its82 = 0; its101 = 0; its102 = 0; its117 = 0;
			z3 = 'rouge'; 
			document.getElementById("z3").src = "image/feux/rouge_2.png";
			document.getElementById("z20").src = "image/feux/rouge_2.png";
			aiguille78 = 0; aiguille80 = 0; aiguille82 = 0;}
			
			if (memoire == 411 && 
			occupation_its51 	== false && 
			occupation_its52 	== false &&
			occupation_its78 	== false &&
			occupation_its131 	== false &&
			occupation_its80 	== false &&
			occupation_its16 	== false &&
			occupation_its82 	== false &&
			occupation_its101 	== false &&
			occupation_its125 	== false &&
			occupation_its2 	== false &&
			occupation_its23 	== false &&
			occupation_its8 	== false
			) { its51 = 0; its52 = 0; its78 = 0; its131 = 0;  its80 = 0; its16 = 0; its82 = 0; its101 = 0; its97 = 0; its2 = 0; its23 = 0; its8 = 0;
			z3 = 'rouge'; 
			document.getElementById("z3").src = "image/feux/rouge_2.png";
			document.getElementById("z16").src = "image/feux/rouge_2.png";
			aiguille78 = 0; aiguille80 = 0; aiguille82 = 0; aiguille97 = 0;}
			
			if (memoire == 301 && 
			occupation_its103 	== false && 
			occupation_its104 	== false &&
			occupation_its83 	== false &&
			occupation_its19 	== false &&
			occupation_its20 	== false &&
			occupation_its21 	== false &&
			occupation_its22 	== false 
			) { its103 = 0; its104 = 0; its83 = 0; its19 = 0;  its20 = 0; its21 = 0; its22 = 0;
			z21 = 'rouge'; 
			z18 = 'rouge';
			document.getElementById("z21").src = "image/feux/rouge_2.png"; 
			document.getElementById("z18").src = "image/feux/rouge_2.png";
			aiguille83 = 0; }
			
			if (memoire == 302 && 
			occupation_its103 	== false && 
			occupation_its104 	== false &&
			occupation_its83 	== false &&
			occupation_its19 	== false &&
			occupation_its84 	== false &&
			occupation_its39 	== false &&
			occupation_its40 	== false &&
			occupation_its41 	== false &&
			occupation_its42 	== false &&
			occupation_its43 	== false
			) { its103 = 0; its104 = 0; its83 = 0; its19 = 0;  its84 = 0; its39 = 0; its40 = 0; its41 = 0; its42 = 0; its43 = 0;
			z21 = 'rouge'; 
			z13 = 'rouge';
			document.getElementById("z21").src = "image/feux/rouge_2.png"; 
			document.getElementById("z13").src = "image/feux/rouge_2.png";
			aiguille83 = 0; aiguille84 = 0; }
			
			if (memoire == 310 && 
			occupation_its18 	== false && 
			occupation_its121 	== false &&
			occupation_its19 	== false &&
			occupation_its20 	== false &&
			occupation_its21 	== false &&
			occupation_its22 	== false 
			) { its18 = 0; its121 = 0; its19 = 0; its20 = 0;  its21 = 0; its22 = 0; 
			z9 = 'rouge'; 
			z18 = 'rouge';
			document.getElementById("z9").src = "image/feux/rouge_2.png"; 
			document.getElementById("z18").src = "image/feux/rouge_2.png";
			}
			
			if (memoire == 311 && 
			occupation_its18 	== false && 
			occupation_its121 	== false &&
			occupation_its19 	== false &&
			occupation_its84 	== false &&
			occupation_its39 	== false &&
			occupation_its40 	== false &&
			occupation_its41 	== false &&
			occupation_its42 	== false &&
			occupation_its43 	== false
			) { its18 = 0; its121 = 0; its19= 0; its84 = 0; its39 = 0; its40 = 0; its41 = 0; its42 = 0; its43 = 0; 
			z9 = 'rouge'; 
			z13 = 'rouge';
			document.getElementById("z9").src = "image/feux/rouge_2.png"; 
			document.getElementById("z13").src = "image/feux/rouge_2.png";
			aiguille84 = 0;
			}
			
			if (memoire == 312 && 
			occupation_its37 	== false && 
			occupation_its38 	== false &&
			occupation_its39 	== false &&
			occupation_its40 	== false &&
			occupation_its41 	== false &&
			occupation_its42 	== false &&
			occupation_its43 	== false 
			) { its37 = 0; its38 = 0; its39= 0; its40 = 0; its41 = 0; its42 = 0; its43 = 0; 
			z10 = 'rouge'; 
			z13 = 'rouge';
			document.getElementById("z13").src = "image/feux/rouge_2.png";
			}
			
			if (memoire == 313 && 
			occupation_its37 	== false && 
			occupation_its38 	== false &&
			occupation_its39 	== false &&
			occupation_its40 	== false &&
			occupation_its41 	== false &&
			occupation_its91 	== false &&
			occupation_its21 	== false &&
			occupation_its22 	== false 
			) { its37 = 0; its38 = 0; its39 = 0; its40 = 0; its41 = 0; its91 = 0; its21 = 0; its22 = 0; 
			z10 = 'rouge'; 
			z18 = 'rouge';
			document.getElementById("z18").src = "image/feux/rouge_2.png";
			aiguille91 = 0;
			}
			
			if (memoire == 314 && 
			occupation_its37 	== false && 
			occupation_its95 	== false &&
			occupation_its121 	== false &&
			occupation_its19 	== false &&
			occupation_its20 	== false &&
			occupation_its21 	== false &&
			occupation_its22 	== false
			) { its37 = 0; its95 = 0; its121 = 0; its19 = 0; its20 = 0; its21 = 0; its22 = 0; 
			z10 = 'rouge'; 
			z18 = 'rouge';
			document.getElementById("z18").src = "image/feux/rouge_2.png";
			aiguille95 = 0;
			}
			
			if (memoire == 320 && 
			occupation_its56 	== false && 
			occupation_its57 	== false &&
			occupation_its58 	== false &&
			occupation_its88 	== false &&
			occupation_its41 	== false &&
			occupation_its42 	== false &&
			occupation_its43 	== false
			) { its56 = 0; its57 = 0; its58 = 0; its88 = 0; its41 = 0; its42 = 0; its43 = 0; 
			z11 = 'rouge'; 
			z13 = 'rouge';
			document.getElementById("z11").src = "image/feux/rouge_2.png"; 
			document.getElementById("z13").src = "image/feux/rouge_2.png";
			aiguille88 = 0;
			}
			
			if (memoire == 321 && 
			occupation_its56 	== false && 
			occupation_its57 	== false &&
			occupation_its58 	== false &&
			occupation_its59 	== false &&
			occupation_its60 	== false &&
			occupation_its61 	== false
			) { its56 = 0; its57 = 0; its58 = 0; its59 = 0; its60 = 0; its61 = 0;
			z11 = 'rouge'; 
			z14 = 'rouge';
			document.getElementById("z11").src = "image/feux/rouge_2.png"; 
			document.getElementById("z14").src = "image/feux/rouge_2.png";
			}
			
			if (memoire == 330 && 
			occupation_its74 	== false && 
			occupation_its75 	== false &&
			occupation_its76 	== false &&
			occupation_its77 	== false
			) { its74 = 0; its75 = 0; its76 = 0; its77 = 0;
			z12 = 'rouge'; 
			z15 = 'rouge';
			document.getElementById("z12").src = "image/feux/rouge_2.png"; 
			document.getElementById("z15").src = "image/feux/rouge_2.png";
			}
			
			if (memoire == 331 && 
			occupation_its74 	== false && 
			occupation_its94 	== false &&
			occupation_its57 	== false &&
			occupation_its58 	== false &&
			occupation_its59 	== false &&
			occupation_its60 	== false &&
			occupation_its61 	== false 
			) { its74 = 0; its94 = 0; its57 = 0; its58 = 0; its59 = 0; its60 = 0; its61 = 0;
			z12 = 'rouge'; 
			z14 = 'rouge';
			document.getElementById("z12").src = "image/feux/rouge_2.png"; 
			document.getElementById("z14").src = "image/feux/rouge_2.png";
			aiguille94 = 0;
			}
			
			
			if (memoire == 420 && 
			occupation_its8 	== false && 
			occupation_its4 	== false &&
			occupation_its96 	== false &&
			occupation_its104 	== false &&
			occupation_its83 	== false &&
			occupation_its19 	== false &&
			occupation_its20 	== false &&
			occupation_its21 	== false && 
			occupation_its22 	== false 
			) { its4 = 0; its96 = 0; its104 = 0;  its83 = 0; its19 = 0; its20 = 0; its21 = 0; its22 = 0;
			z17 = 'rouge'; 
			z18 = 'rouge';
			document.getElementById("z17").src = "image/feux/rouge_2.png"; 
			document.getElementById("z18").src = "image/feux/rouge_2.png";
			aiguille96 = 0;
			aiguille83 = 0;
			}
			
			if (memoire == 421 && 
			occupation_its8 	== false && 
			occupation_its4 	== false &&
			occupation_its96 	== false &&
			occupation_its104 	== false &&
			occupation_its83 	== false &&
			occupation_its19 	== false &&
			occupation_its84 	== false &&
			occupation_its39 	== false && 
			occupation_its40 	== false && 
			occupation_its41 	== false &&
			occupation_its42 	== false &&
			occupation_its43 	== false
			) { its4 = 0; its96 = 0; its104 = 0;  its83 = 0; its19 = 0; its84 = 0; its39 = 0; its40 = 0; its41 = 0; its42 = 0; its43 = 0;
			z17 = 'rouge'; 
			z13 = 'rouge';
			document.getElementById("z17").src = "image/feux/rouge_2.png"; 
			document.getElementById("z13").src = "image/feux/rouge_2.png";
			aiguille96 = 0;
			aiguille83 = 0;
			aiguille84 = 0;
			}
			}
			
			if ( monMot == 'a86' && its76 == 0 && its59 == 0 ) { 
			if ( aiguille86 == 0 ) {
			aiguille86 = 1;
			}
			else {
			aiguille86 = 0;
			}
			}
					
			if ( monMot == 'a85' && its58 == 0 && its39 == 0) { 
			if ( aiguille85 == 0 && aiguille88 == 0) {
			aiguille85 = 1;
			}
			else {
			aiguille85 = 0;
			}
			}
			
			
			if ( monMot == 'a84' && its39 == 0 && its19 == 0 && its20 == 0 && its38 == 0 && its40 == 0 ) { 
			if ( aiguille84 == 0 && aiguille95 == 0) {
			aiguille84 = 1;
			}
			else {
			aiguille84 = 0;
			}
			}
			
			if ( monMot == 'a83' && its19 == 0 && its104 == 0 && its105 == 0 && its121 == 0 ) { 
			if ( aiguille83 == 0 && aiguille92 == 0) {
			aiguille83 = 1;
			}
			else {
			aiguille83 = 0;
			}
			}
			
			if ( monMot == 'a81' && its54 == 0 && its33 == 0 ) { 
			if ( aiguille81 == 0 && aiguille78 == 0 ) {
			aiguille81 = 1;
			}
			else {
			aiguille81 = 0;
			}
			}
			
			if ( monMot == 'a82' && its101 == 0 && its16 == 0 ) { 
			if ( aiguille82 == 0 ) {
			aiguille82 = 1;
			}
			else {
			aiguille82 = 0;
			}
			}
			
			if ( monMot == 'a79' && its14 == 0 && its32 == 0) { 
			if ( aiguille79 == 0 && aiguille80 == 0) {
			aiguille79 = 1;
			}
			else {
			aiguille79 = 0;
			}
			}
			
			if ( monMot == 'a87' && its52 == 0 && its71 == 0 ) { 
			if ( aiguille87 == 0 && aiguille93 == 0) {
			aiguille87 = 1;
			}
			else {
			aiguille87 = 0;
			}
			}
			
			if ( monMot == 'a91' && its41 == 0 && its21 == 0 ) { 
			if ( aiguille91 == 0 ) {
			aiguille91 = 1;
			}
			else {
			aiguille91 = 0;
			}
			}
			
			if ( monMot == 'a92' && its19 == 0 && its106 == 0 && its20 == 0) { 
			if ( aiguille92 == 0 && aiguille83 == 0) {
			aiguille92 = 1;
			}
			else {
			aiguille92 = 0;
			}
			}
			
			if ( monMot == 'a80' && its16 == 0 && its131 == 0) { 
			if ( aiguille80 == 0 && aiguille79 == 0) {
			aiguille80 = 1;
			}
			else {
			aiguille80 = 0;
			}
			}
			
			if ( monMot == 'a78' && its52 == 0 && its131 == 0 ) { 
			if ( aiguille78 == 0 && aiguille81 == 0 ) {
			aiguille78 = 1;
			}
			else {
			aiguille78 = 0;
			}
			}
			
			if ( monMot == 'a88' && its59 == 0 && its41 == 0 ) { 
			if ( aiguille88 == 0 && aiguille85 == 0) {
			aiguille88 = 1;
			}
			else {
			aiguille88 = 0;
			}
			}
			
			if ( monMot == 'a93' && its73 == 0 && its55 == 0) { 
			if ( aiguille93 == 0 && aiguille87 == 0) {
			aiguille93 = 1;
			}
			else {
			aiguille93 = 0;
			}
			}
			
			if ( monMot == 'a94' && its74 == 0 && its56 == 0 && its57 == 0 ) { 
			if ( aiguille94 == 0 ) {
			aiguille94 = 1;
			}
			else {
			aiguille94 = 0;
			}
			}
			
			if ( monMot == 'a95' && its37 == 0 && its121 == 0) { 
			if ( aiguille95 == 0 && aiguille84 == 0) {
			aiguille95 = 1;
			}
			else {
			aiguille95 = 0;
			}
			}
			
			if ( monMot == 'a96' && its104 == 0 && its4 == 0 && its5 == 0 && its105 == 0) { 
			if ( aiguille96 == 0 && aiguille98 == 0) {
			aiguille96 = 1;
			}
			else {
			aiguille96 = 0;
			}
			}
			
			if ( monMot == 'a97' && its101 == 0 && its2 == 0) { 
			if ( aiguille97 == 0 ) {
			aiguille97 = 1;
			}
			else {
			aiguille97 = 0;
			}
			}
			
			if ( monMot == 'a98' && its106 == 0 && its6 == 0) { 
			if ( aiguille98 == 0 && aiguille96 == 0) {
			aiguille98 = 1;
			}
			else {
			aiguille98 = 0;
			}
			}
			
			
			if ( monMot == 'z1' ) { 
			point_de_passage_1 = 'z1';
			z1 = 'vert'; 
			//document.getElementById("z1").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z2' ) { 
			point_de_passage_1 = 'z2';
			z2 = 'vert'; 
			//document.getElementById("z2").src = "image/feux/vert_2.png";
			}
			
			
			if ( monMot == 'z3' ) { 
			point_de_passage_1 = 'z3'; 
			z3 = 'vert'; 
			//document.getElementById("z3").src = "image/feux/vert_2.png"; 
			}
			
			
			if ( monMot == 'z4' ) { 
			point_de_passage_1 = 'z4';
			z4 = 'vert'; 
			//document.getElementById("z4").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z5' ) { 
			point_de_passage_1 = 'z5'; 
			z5 = 'vert'; 
			//document.getElementById("z5").src = "image/feux/vert_2.png"; 
			}
			
			if ( monMot == 'z6' ) { 
			point_de_passage_1 = 'z6'; 
			z6 = 'vert'; 
			//document.getElementById("z6").src = "image/feux/vert_2.png"; 
			}
			
			if ( monMot == 'z7' ) { 
			point_de_passage_1 = 'z7'; 
			z7 = 'vert'; 
			//document.getElementById("z7").src = "image/feux/vert_2.png"; 
			}
			
			if ( monMot == 'z8' ) { 
			point_de_passage_1 = 'z8';
			z8 = 'vert'; 
			//document.getElementById("z8").src = "image/feux/vert_2.png";
			}
			
			
			if ( monMot == 'z9' ) { 
			point_de_passage_1 = 'z9';
			z9 = 'vert'; 
			//document.getElementById("z9").src = "image/feux/vert_2.png";
			}
			
			
			if ( monMot == 'z10' ) { 
			point_de_passage_1 = 'z10';
			z10 = 'vert'; 
			//document.getElementById("z10").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z11' ) { 
			point_de_passage_1 = 'z11';
			z11 = 'vert'; 
			//document.getElementById("z11").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z12' ) { 
			point_de_passage_1 = 'z12';
			z12 = 'vert'; 
			//document.getElementById("z12").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z13' ) { 
			point_de_passage_1 = 'z13';
			z13 = 'vert'; 
			//document.getElementById("z13").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z14' ) { 
			point_de_passage_1 = 'z14';
			z14 = 'vert'; 
			//document.getElementById("z14").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z15' ) { 
			point_de_passage_1 = 'z15';
			z15 = 'vert'; 
			//document.getElementById("z15").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z16' ) { 
			point_de_passage_1 = 'z16'; 
			z16 = 'vert'; 
			//document.getElementById("z16").src = "image/feux/vert_2.png"; 
			}
			
			if ( monMot == 'z17' ) { 
			point_de_passage_1 = 'z17'; 
			z17 = 'vert'; 
			//document.getElementById("z17").src = "image/feux/vert_2.png"; 
			}
			
			if ( monMot == 'z18' ) { 
			point_de_passage_1 = 'z18';
			z18 = 'vert'; 
			//document.getElementById("z18").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z19' ) { 
			point_de_passage_1 = 'z19';
			z19 = 'vert'; 
			//document.getElementById("z19").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z20' ) { 
			point_de_passage_1 = 'z20'; 
			z20 = 'vert'; 
			//document.getElementById("z20").src = "image/feux/vert_2.png"; 
			}
			
			if ( monMot == 'z21' ) { 
			point_de_passage_1 = 'z21';
			z21 = 'vert'; 
			//document.getElementById("z21").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z22' ) { 
			point_de_passage_1 = 'z22';
			z22 = 'vert'; 
			//document.getElementById("z21").src = "image/feux/vert_2.png";
			}
			
			if ( monMot == 'z23' ) { 
			point_de_passage_1 = 'z23';
			z23 = 'vert'; 
			//document.getElementById("z21").src = "image/feux/vert_2.png";
			}
			
			

} // fin de la fonction clique

		