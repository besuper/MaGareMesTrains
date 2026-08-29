			var numero_dynamique = 101;
			
			var compteur_IR2101 = false;
			var progression_IR2101 = 0;
			var vitesse_IR2101 = 26;
			var arret_IR2101 = 0;
			
			var compteur_IR2102 = false;
			var progression_IR2102 = 0;
			var vitesse_IR2102 = 26;
			var arret_IR2102 = 0;
			
			var compteur_IR2103 = false;
			var progression_IR2103 = 0;
			var vitesse_IR2103 = 26;
			var arret_IR2103 = 0;
			
			var compteur_IR2104 = false;
			var progression_IR2104 = 0;
			var vitesse_IR2104 = 26;
			var arret_IR2104 = 0;

			var compteur_IR2105 = false;
			var progression_IR2105 = 0;
			var vitesse_IR2105 = 26;
			var arret_IR2105 = 0;
			
			var compteur_IR2106 = false;
			var progression_IR2106 = 0;
			var vitesse_IR2106 = 26;
			var arret_IR2106 = 0;
			
			var affiche601 = false; var train601 = 0; var t601 = 0; var train_depart601 = ''; var t601_retard = true;
			var affiche602 = false; var train602 = 0; var t602 = 0; var train_depart602 = ''; var t602_retard = true;
			
			var compteur_IR3201 = false;
			var progression_IR3201 = 0;
			var vitesse_IR3201 = 26;
			var arret_IR3201 = 0;
			
			var compteur_IR3202 = false;
			var progression_IR3202 = 0;
			var vitesse_IR3202 = 26;
			var arret_IR3202 = 0;
			
			var compteur_IR3203 = false;
			var progression_IR3203 = 0;
			var vitesse_IR3203 = 26;
			var arret_IR3203 = 0;
			
			var compteur_IR3204 = false;
			var progression_IR3204 = 0;
			var vitesse_IR3204 = 26;
			var arret_IR3204 = 0;
			
			var compteur_IR3205 = false;
			var progression_IR3205 = 0;
			var vitesse_IR3205 = 26;
			var arret_IR3205 = 0;
			
			var compteur_IR3206 = false;
			var progression_IR3206 = 0;
			var vitesse_IR3206 = 26;
			var arret_IR3206 = 0;
			
			var affiche611 = false; var train611 = 0; var t611 = 0; var train_depart611 = ''; var t611_retard = true;
			var affiche612 = false; var train612 = 0; var t612 = 0; var train_depart612 = ''; var t612_retard = true;
			
			var bravo_score1 = '';
			var bravo_score2 = '';
			var bravo_score3 = '';
			var bravo_score4 = '';
			var bravo_score5 = '';
			var bravo_score6 = '';
			var bravo_score7 = '';
			var bravo_score8 = '';
			var bravo_score9 = '';
			var bravo_score10 = '';
			
			var rapide = 2;
			var moyen = 2;
			var lent = 3;
			
			var mauvaise_sortie = 0;
			var mauvaise_sortie_bol = false;
			
			var t4 = 0;
			
			var train_heure = 0;
			var train_retard = 0;
			var train_percent = 0;
			
			var son_ouvert = true;
			
			var compteur_clique = 0;
			
			// la neige
			var animation_neige_bol = false;
			var animation_neige = 0;
			var cielneige = -120;
			var laneige1 = -250;
			var laneige2 = -550;
			var fondneige = 700;
			var machine = 1300;
			
			// travaux Jean-Marc
			var travaux1 = false;
			var compteur_travaux_1 = 0;
			var compteur_loco_travaux = -500;
			
			// Incendie
			var incendie_intervention = false;
			var intervention = -2000;
			
			// Marion les ballons
			var les_ballons = false;
			var animation_marion = 0;
			var ballon = 230;
			
			// Audrey soirée mousse
			var la_mousse = false;
			var animation_mousse = 0;
			var bulle1 = 300;
			var bulle2 = 300;
			var bulle3 = 300;
			var bulle4 = 300;
			var bulle5 = 300;
			var lamousse = 300;
			
			// Ampli
			var le_ampli = false;
			var animation_ampli = 0;
			var unite_musique = 0;
			var la_musique = 1;
			var min3 = 0; 
			var max3 = 0;
			
			// Noel
			var noel_bol = false;
			var animation_noel = 0;
			var cadeau1 = 100;
			var cadeau2 = 100;
			var cadeau3 = 100;
			var cadeau4 = 100;
			var cadeau5 = 100;
			
			// Oslo
			var oslo_bol = false;
			var animation_oslo = 0;
			
			// Eclair
			
			var eclair_bol = false;
			var eclair = 0;
		
			
			var nom = 'Visiteur';
			var score = 0;
			var pause = 0;
			
			var options = 0;
			// Heure
			var date = new Date();
			var heure = date.getHours();
			var minutes = date.getMinutes();
			var secondes = date.getSeconds();
			var les_secondes = secondes;
			var les_heures = heure;
			var les_minutes = minutes;
			var les_secondes_af = 0;
			var les_minutes_af = 0;
			var les_heures_af = 0;
			var mon_heure = "00:00:00";
			
			var date2 = new Date();
			var heure2 = date2.getHours();
			var heure3;
			
			var min2 = 0;
			var max2 = 0;
			
			var chario_voiture_1_1 = -400;
			var choix_voiture_1_1 = 1;
			
			var chario_voiture_1_2 = -400;
			var choix_voiture_1_2 = 1;
			
			var chario_voiture_2_1 = -400;
			var choix_voiture_2_1 = 1;
			
			var chario_voiture_2_2 = -400;
			var choix_voiture_2_2 = 1;
			
			var hauteur_veh_1_1 = 295;
			var hauteur_veh_1_2 = 295;
			var hauteur_veh_2_1 = 295;
			var hauteur_veh_2_2 = 295;
			
			
			var compteurTemps = 0;
			var compteur_feux_pn = 0;
			var chaine = 0;
			var retard = 0;
			var notrain = 100;
			var a2, a15, a35, a55, a72;
			
			var tempref = 20;
			var niveau = 2;
			var le_niveau_choisi = 2;
			var ligne2 = 0;
			var memoire = 0;
			
			
			var compteur_intro = 11; 
			
			var compteur_evenement = 0; 
			var compteur_evenement2 = -130; 
			
			
			var min = 1;
			var max = 5;
			
			
			
			var cor = 50;
			
			var dynamique = 1;
			
			var aiguille88 = 0;
			var aiguille87 = 0;
			var aiguille86 = 0;
			var aiguille85 = 0;
			var aiguille84 = 0;
			var aiguille83 = 0;
			var aiguille82 = 0;
			var aiguille81 = 0;
			var aiguille80 = 0;
			var aiguille79 = 0;
			var aiguille78 = 0;
			var aiguille91 = 0;
			var aiguille92 = 0;
			
			var aiguille93 = 0;
			var aiguille94 = 0;
			var aiguille95 = 0;
			var aiguille96 = 0;
			var aiguille97 = 0;
			var aiguille98 = 0;
			
			// LES TRAINS 101
			
			var affiche101 = false;
			var affiche102 = false;
			var affiche103 = false;
			var affiche104 = false;
			var affiche105 = false;
			var affiche106 = false;
			var affiche107 = false;
			var affiche108 = false;
			var affiche109 = false;
			var affiche110 = false;
			var affiche111 = false;
			var affiche112 = false;
			var affiche113 = false;
			var affiche114 = false;
			var affiche115 = false;
			var affiche116 = false;
			var affiche117 = false;
			var affiche118 = false;
			var affiche119 = false;
			var affiche120 = false;
			var affiche121 = false;
			var affiche122 = false;
			
			var train101 = 0;
			var train102 = 0;
			var train103 = 0;
			var train104 = 0;
			var train105 = 0;
			var train106 = 0;
			var train107 = 0;
			var train108 = 0;
			var train109 = 0;
			var train110 = 0;
			var train111 = 0;
			var train112 = 0;
			var train113 = 0;
			var train114 = 0;
			var train115 = 0;
			var train116 = 0;
			var train117 = 0;
			var train118 = 0;
			var train119 = 0;
			var train120 = 0;
			var train121 = 0;
			var train122 = 0;
		
			var t100 = 0;
			var t101 = 0;
			var t102 = 0;
			var t103 = 0;
			var t104 = 0;
			var t105 = 0;
			var t106 = 0;
			var t107 = 0;
			var t108 = 0;
			var t109 = 0;
			var t110 = 0;
			var t111 = 0;
			var t112 = 0;
			var t113 = 0;
			var t114 = 0;
			var t115 = 0;
			var t116 = 0;
			var t117 = 0;
			var t118 = 0;
			var t119 = 0;
			var t120 = 0;
			var t121 = 0;
			var t122 = 0;
		
			var train_depart101 = '';
			var train_depart102 = '';
			var train_depart103 = '';
			var train_depart104 = '';
			var train_depart105 = '';
			var train_depart106 = '';
			var train_depart107 = '';
			var train_depart108 = '';
			var train_depart109 = '';
			var train_depart110 = '';
			var train_depart111 = '';
			var train_depart112 = '';
			var train_depart113 = '';
			var train_depart114 = '';
			var train_depart115 = '';
			var train_depart116 = '';
			var train_depart117 = '';
			var train_depart118 = '';
			var train_depart119 = '';
			var train_depart120 = '';
			var train_depart121 = '';
			var train_depart122 = '';
			
			// LES TRAINS 201
			
			var affiche201 = false;
			var affiche202 = false;
			var affiche203 = false;
			var affiche204 = false;
			var affiche205 = false;
			var affiche206 = false;
			var affiche207 = false;
			var affiche208 = false;
			var affiche209 = false;
			var affiche210 = false;
			var affiche211 = false;
			var affiche212 = false;
			var affiche213 = false;
			var affiche214 = false;
			var affiche215 = false;
			var affiche216 = false;
			var affiche217 = false;
			var affiche218 = false;
			var affiche219 = false;
			var affiche220 = false;
			var affiche221 = false;
			var affiche222 = false;
			
			var train201 = 0;
			var train202 = 0;
			var train203 = 0;
			var train204 = 0;
			var train205 = 0;
			var train206 = 0;
			var train207 = 0;
			var train208 = 0;
			var train209 = 0;
			var train210 = 0;
			var train211 = 0;
			var train212 = 0;
			var train213 = 0;
			var train214 = 0;
			var train215 = 0;
			var train216 = 0;
			var train217 = 0;
			var train218 = 0;
			var train219 = 0;
			var train220 = 0;
			var train221 = 0;
			var train222 = 0;
		
			var t201 = 0;
			var t201 = 0;
			var t202 = 0;
			var t203 = 0;
			var t204 = 0;
			var t205 = 0;
			var t206 = 0;
			var t207 = 0;
			var t208 = 0;
			var t209 = 0;
			var t210 = 0;
			var t211 = 0;
			var t212 = 0;
			var t213 = 0;
			var t214 = 0;
			var t215 = 0;
			var t216 = 0;
			var t217 = 0;
			var t218 = 0;
			var t219 = 0;
			var t220 = 0;
			var t221 = 0;
			var t222 = 0;
			var t223 = 0;
		
			var train_depart201 = '';
			var train_depart202 = '';
			var train_depart203 = '';
			var train_depart204 = '';
			var train_depart205 = '';
			var train_depart206 = '';
			var train_depart207 = '';
			var train_depart208 = '';
			var train_depart209 = '';
			var train_depart210 = '';
			var train_depart211 = '';
			var train_depart212 = '';
			var train_depart213 = '';
			var train_depart214 = '';
			var train_depart215 = '';
			var train_depart216 = '';
			var train_depart217 = '';
			var train_depart218 = '';
			var train_depart219 = '';
			var train_depart220 = '';
			var train_depart221 = '';
			var train_depart222 = '';
			
			// LES TRAINS 301
			
			var affiche301 = false;
			var affiche302 = false;
			var affiche303 = false;
			var affiche304 = false;
			var affiche305 = false;
			var affiche306 = false;
			var affiche307 = false;
			var affiche308 = false;
			var affiche309 = false;
			var affiche310 = false;
			var affiche311 = false;
			var affiche312 = false;
			var affiche313 = false;
			var affiche314 = false;
			var affiche315 = false;
			var affiche316 = false;
			var affiche317 = false;
			var affiche318 = false;
			var affiche319 = false;
			var affiche320 = false;
			var affiche321 = false;
			var affiche322 = false;
			
			var train301 = 0;
			var train302 = 0;
			var train303 = 0;
			var train304 = 0;
			var train305 = 0;
			var train306 = 0;
			var train307 = 0;
			var train308 = 0;
			var train309 = 0;
			var train310 = 0;
			var train311 = 0;
			var train312 = 0;
			var train313 = 0;
			var train314 = 0;
			var train315 = 0;
			var train316 = 0;
			var train317 = 0;
			var train318 = 0;
			var train319 = 0;
			var train320 = 0;
			var train321 = 0;
			var train322 = 0;
		
			var t301 = 0;
			var t301 = 0;
			var t302 = 0;
			var t303 = 0;
			var t304 = 0;
			var t305 = 0;
			var t306 = 0;
			var t307 = 0;
			var t308 = 0;
			var t309 = 0;
			var t310 = 0;
			var t311 = 0;
			var t312 = 0;
			var t313 = 0;
			var t314 = 0;
			var t315 = 0;
			var t316 = 0;
			var t317 = 0;
			var t318 = 0;
			var t319 = 0;
			var t320 = 0;
			var t321 = 0;
			var t322 = 0;
		
			var train_depart301 = '';
			var train_depart302 = '';
			var train_depart303 = '';
			var train_depart304 = '';
			var train_depart305 = '';
			var train_depart306 = '';
			var train_depart307 = '';
			var train_depart308 = '';
			var train_depart309 = '';
			var train_depart310 = '';
			var train_depart311 = '';
			var train_depart312 = '';
			var train_depart313 = '';
			var train_depart314 = '';
			var train_depart315 = '';
			var train_depart316 = '';
			var train_depart317 = '';
			var train_depart318 = '';
			var train_depart319 = '';
			var train_depart320 = '';
			var train_depart321 = '';
			var train_depart322 = '';
			
			// LES TRAINS 401
			
			var affiche401 = false;
			var affiche402 = false;
			var affiche403 = false;
			var affiche404 = false;
			var affiche405 = false;
			var affiche406 = false;
			var affiche407 = false;
			var affiche408 = false;
			var affiche409 = false;
			var affiche410 = false;
			var affiche411 = false;
			var affiche412 = false;
			var affiche413 = false;
			var affiche414 = false;
			var affiche415 = false;
			var affiche416 = false;
			var affiche417 = false;
			var affiche418 = false;
			var affiche419 = false;
			var affiche420 = false;
			var affiche421 = false;
			var affiche422 = false;
			
			var train401 = 0;
			var train402 = 0;
			var train403 = 0;
			var train404 = 0;
			var train405 = 0;
			var train406 = 0;
			var train407 = 0;
			var train408 = 0;
			var train409 = 0;
			var train410 = 0;
			var train411 = 0;
			var train412 = 0;
			var train413 = 0;
			var train414 = 0;
			var train415 = 0;
			var train416 = 0;
			var train417 = 0;
			var train418 = 0;
			var train419 = 0;
			var train420 = 0;
			var train421 = 0;
			var train422 = 0;
		
			var t401 = 0;
			var t402 = 0;
			var t403 = 0;
			var t404 = 0;
			var t405 = 0;
			var t406 = 0;
			var t407 = 0;
			var t408 = 0;
			var t409 = 0;
			var t410 = 0;
			var t411 = 0;
			var t412 = 0;
			var t413 = 0;
			var t414 = 0;
			var t415 = 0;
			var t416 = 0;
			var t417 = 0;
			var t418 = 0;
			var t419 = 0;
			var t420 = 0;
			var t421 = 0;
			var t422 = 0;
		
			var train_depart401 = '';
			var train_depart402 = '';
			var train_depart403 = '';
			var train_depart404 = '';
			var train_depart405 = '';
			var train_depart406 = '';
			var train_depart407 = '';
			var train_depart408 = '';
			var train_depart409 = '';
			var train_depart410 = '';
			var train_depart411 = '';
			var train_depart412 = '';
			var train_depart413 = '';
			var train_depart414 = '';
			var train_depart415 = '';
			var train_depart416 = '';
			var train_depart417 = '';
			var train_depart418 = '';
			var train_depart419 = '';
			var train_depart420 = '';
			var train_depart421 = '';
			var train_depart422 = '';
			
			// LES TRAINS 501
			
			var affiche501 = false;
			var affiche502 = false;
			var affiche503 = false;
			var affiche504 = false;
			var affiche505 = false;
			var affiche506 = false;
			var affiche507 = false;
			var affiche508 = false;
			var affiche509 = false;
			var affiche510 = false;
			var affiche511 = false;
			var affiche512 = false;
			var affiche513 = false;
			var affiche514 = false;
			var affiche515 = false;
			var affiche516 = false;
			var affiche517 = false;
			var affiche518 = false;
			var affiche519 = false;
			var affiche520 = false;
			var affiche521 = false;
			var affiche522 = false;
			var affiche523 = false;
			var affiche524 = false;
			var affiche525 = false;
			var affiche526 = false;
			var affiche527 = false;
			var affiche528 = false;
			var affiche529 = false;
			
			
			var train501 = 0;
			var train502 = 0;
			var train503 = 0;
			var train504 = 0;
			var train505 = 0;
			var train506 = 0;
			var train507 = 0;
			var train508 = 0;
			var train509 = 0;
			var train510 = 0;
			var train511 = 0;
			var train512 = 0;
			var train513 = 0;
			var train514 = 0;
			var train515 = 0;
			var train516 = 0;
			var train517 = 0;
			var train518 = 0;
			var train519 = 0;
			var train520 = 0;
			var train521 = 0;
			var train522 = 0;
			var train523 = 0;
			var train524 = 0;
			var train525 = 0;
			var train526 = 0;
			var train527 = 0;
			var train528 = 0;
			var train529 = 0;
		
			var t501 = 0;
			var t502 = 0;
			var t503 = 0;
			var t504 = 0;
			var t505 = 0;
			var t506 = 0;
			var t507 = 0;
			var t508 = 0;
			var t509 = 0;
			var t510 = 0;
			var t511 = 0;
			var t512 = 0;
			var t513 = 0;
			var t514 = 0;
			var t515 = 0;
			var t516 = 0;
			var t517 = 0;
			var t518 = 0;
			var t519 = 0;
			var t520 = 0;
			var t521 = 0;
			var t522 = 0;
			var t523 = 0;
			var t524 = 0;
			var t525 = 0;
			var t526 = 0;
			var t527 = 0;
			var t528 = 0;
			var t529 = 0;
		
			var train_depart501 = '';
			var train_depart502 = '';
			var train_depart503 = '';
			var train_depart504 = '';
			var train_depart505 = '';
			var train_depart506 = '';
			var train_depart507 = '';
			var train_depart508 = '';
			var train_depart509 = '';
			var train_depart510 = '';
			var train_depart511 = '';
			var train_depart512 = '';
			var train_depart513 = '';
			var train_depart514 = '';
			var train_depart515 = '';
			var train_depart516 = '';
			var train_depart517 = '';
			var train_depart518 = '';
			var train_depart519 = '';
			var train_depart520 = '';
			var train_depart521 = '';
			var train_depart522 = '';
			var train_depart523 = '';
			var train_depart524 = '';
			var train_depart525 = '';
			var train_depart526 = '';
			var train_depart527 = '';
			var train_depart528 = '';
			var train_depart529 = '';
			
			var t100_retard = true; 
			var t101_retard = true;
			var t102_retard = true;
			var t103_retard = true;
			var t104_retard = true;
			var t105_retard = true;
			var t106_retard = true;
			var t107_retard = true;
			var t108_retard = true;
			var t109_retard = true;
			var t110_retard = true;
			var t111_retard = true;
			var t112_retard = true;
			var t113_retard = true;
			var t114_retard = true;
			var t115_retard = true;
			var t116_retard = true;
			var t117_retard = true;
			var t118_retard = true;
			var t119_retard = true;
			var t120_retard = true;
			var t121_retard = true;
			var t122_retard = true;
			
			var t201_retard = true;
			var t201_retard = true;
			var t202_retard = true;
			var t203_retard = true;
			var t204_retard = true;
			var t205_retard = true;
			var t206_retard = true;
			var t207_retard = true;
			var t208_retard = true;
			var t209_retard = true;
			var t210_retard = true;
			var t211_retard = true;
			var t212_retard = true;
			var t213_retard = true;
			var t214_retard = true;
			var t215_retard = true;
			var t216_retard = true;
			var t217_retard = true;
			var t218_retard = true;
			var t219_retard = true;
			var t220_retard = true;
			var t221_retard = true;
			var t222_retard = true;
			var t223_retard = true;
			
			var t301_retard = true;
			var t301_retard = true;
			var t302_retard = true;
			var t303_retard = true;
			var t304_retard = true;
			var t305_retard = true;
			var t306_retard = true;
			var t307_retard = true;
			var t308_retard = true;
			var t309_retard = true;
			var t310_retard = true;
			var t311_retard = true;
			var t312_retard = true;
			var t313_retard = true;
			var t314_retard = true;
			var t315_retard = true;
			var t316_retard = true;
			var t317_retard = true;
			var t318_retard = true;
			var t319_retard = true;
			var t320_retard = true;
			var t321_retard = true;
			var t322_retard = true;
			
			var t401_retard = true;
			var t402_retard = true;
			var t403_retard = true;
			var t404_retard = true;
			var t405_retard = true;
			var t406_retard = true;
			var t407_retard = true;
			var t408_retard = true;
			var t409_retard = true;
			var t410_retard = true;
			var t411_retard = true;
			var t412_retard = true;
			var t413_retard = true;
			var t414_retard = true;
			var t415_retard = true;
			var t416_retard = true;
			var t417_retard = true;
			var t418_retard = true;
			var t419_retard = true;
			var t420_retard = true;
			var t421_retard = true;
			var t422_retard = true;
			
			var t501_retard = true;
			var t502_retard = true;
			var t503_retard = true;
			var t504_retard = true;
			var t505_retard = true;
			var t506_retard = true;
			var t507_retard = true;
			var t508_retard = true;
			var t509_retard = true;
			var t510_retard = true;
			var t511_retard = true;
			var t512_retard = true;
			var t513_retard = true;
			var t514_retard = true;
			var t515_retard = true;
			var t516_retard = true;
			var t517_retard = true;
			var t518_retard = true;
			var t519_retard = true;
			var t520_retard = true;
			var t521_retard = true;
			var t522_retard = true;
			var t523_retard = true;
			var t524_retard = true;
			var t525_retard = true;
			var t526_retard = true;
			var t527_retard = true;
			var t528_retard = true;
			var t529_retard = true;
			
			
			
			var z1 = 'rouge';
			var z2 = 'rouge';
			var z3 = 'rouge';
			var z4 = 'rouge';
			var z5 = 'rouge';
			var z6 = 'rouge';
			var z7 = 'rouge';
			var z8 = 'rouge';
			var z9 = 'rouge';
			var z10 = 'rouge';
			var z11 = 'rouge';
			var z12 = 'rouge';
			var z13 = 'rouge';
			var z14 = 'rouge';
			var z15 = 'rouge';
			var z16 = 'rouge';
			var z17 = 'rouge';
			var z18 = 'rouge';
			var z19 = 'rouge';
			var z20 = 'rouge';
			var z21 = 'rouge';
			var z22 = 'rouge';
			var z23 = 'rouge';
			
			
			
			
			var its1 = 0;
			var its2 = 0;
			var its3 = 0;
			var its4 = 0;
			var its5 = 0;
			var its6 = 0;
			var its7 = 0;
			var its8 = 0;
			var its9 = 0;
			var its10 = 0;
			var its11 = 0;
			var its12 = 0;
			var its13 = 0;
			var its14 = 0;
			var its15 = 0;
			var its16 = 0;
			var its17 = 0;
			var its18 = 0;
			var its19 = 0;
			var its20 = 0;
			var its21 = 0;
			var its22 = 0;
			var its23 = 0;
			
			var its29 = 0;
			var its30 = 0;
			var its31 = 0;
			var its32 = 0;
			var its33 = 0;
			var its34 = 0;
			var its35 = 0;
			var its36 = 0;
			var its37 = 0;
			var its38 = 0;
			var its39 = 0;
			var its40 = 0;
			var its41 = 0;
			var its42 = 0;
			var its43 = 0;
			var its44 = 0;
			var its45 = 0;
			var its46 = 0;
			var its47 = 0;
			var its48 = 0;
			var its49 = 0;
			var its50 = 0;
			var its51 = 0;
			var its52 = 0;
			var its53 = 0;
			var its54 = 0;
			var its55 = 0;
			var its56 = 0;
			var its57 = 0;
			var its58 = 0;
			var its59 = 0;
			var its60 = 0;
			var its61 = 0;
			var its62 = 0;
			var its63 = 0;
			var its64 = 0;
			var its65 = 0;
			var its66 = 0;
			var its67 = 0;
			var its68 = 0;
			var its69 = 0;
			var its70 = 0;
			var its71 = 0;
			var its72 = 0;
			var its73 = 0;
			var its74 = 0;
			var its75 = 0;
			var its76 = 0;
			var its77 = 0;
			var its78 = 0;
			var its79 = 0;
			var its80 = 0;
			var its81 = 0;
			var its82 = 0;
			var its83 = 0;
			var its84 = 0;
			var its85 = 0;
			var its86 = 0;
			var its87 = 0;
			var its88 = 0;
			var its89 = 0;
			var its90 = 0;
			var its91 = 0;
			var its92 = 0;
			var its93 = 0;
			var its94 = 0;
			var its95 = 0;
			var its96 = 0;
			var its97 = 0;
			var its98 = 0;
			var its99 = 0;
			var its100 = 0;
			var its101 = 0;
			var its102 = 0;
			var its103 = 0;
			var its104 = 0;
			var its105 = 0;
			var its106 = 0;
			var its107 = 0;
			var its108 = 0;
			var its109 = 0;
			var its110 = 0;
			var its111 = 0;
			var its112 = 0;
			var its113 = 0;
			var its114 = 0;
			var its115 = 0;
			var its116 = 0;
			var its117 = 0;
			var its118 = 0;
			var its119 = 0;
			var its120 = 0;
			var its121 = 0;
			var its93 = 0;
			var its94 = 0;
			var its95 = 0;
			var its97 = 0;
			var its96 = 0;
			var its98 = 0;
			var its128 = 0;
			var its129 = 0;
			var its130 = 0;
			var its131 = 0;
			var its132 = 0;
		
			
			
			var progression_its1 = 0;
			var progression_its2 = 0;
			var progression_its3 = 0;
			var progression_its4 = 0;
			var progression_its5 = 0;
			var progression_its6 = 0;
			var progression_its7 = 0;
			var progression_its8 = 0;
			var progression_its9 = 0;
			var progression_its10 = 0;
			var progression_its11 = 0;
			var progression_its12 = 0;
			var progression_its13 = 0;
			var progression_its14 = 0;
			var progression_its15 = 0;
			var progression_its16 = 0;
			var progression_its17 = 0;
			var progression_its18 = 0;
			var progression_its19 = 0;
			var progression_its20 = 0;
			var progression_its21 = 0;
			var progression_its22 = 0;
			var progression_its23 = 0;
			
			var progression_its29 = 0;
			var progression_its30 = 0;
			var progression_its31 = 0;
			var progression_its32 = 0;
			var progression_its33 = 0;
			var progression_its34 = 0;
			var progression_its35 = 0;
			var progression_its36 = 0;
			var progression_its37 = 0;
			var progression_its38 = 0;
			var progression_its39 = 0;
			var progression_its40 = 0;
			var progression_its41 = 0;
			var progression_its42 = 0;
			var progression_its43 = 0;
			var progression_its44 = 0;
			var progression_its45 = 0;
			var progression_its46 = 0;
			var progression_its47 = 0;
			var progression_its48 = 0;
			var progression_its49 = 0;
			var progression_its50 = 0;
			var progression_its51 = 0;
			var progression_its52 = 0;
			var progression_its53 = 0;
			var progression_its54 = 0;
			var progression_its55 = 0;
			var progression_its56 = 0;
			var progression_its57 = 0;
			var progression_its58 = 0;
			var progression_its59 = 0;
			var progression_its60 = 0;
			var progression_its61 = 0;
			var progression_its62 = 0;
			var progression_its63 = 0;
			var progression_its64 = 0;
			var progression_its65 = 0;
			var progression_its66 = 0;
			var progression_its67 = 0;
			var progression_its68 = 0;
			var progression_its69 = 0;
			var progression_its70 = 0;
			var progression_its71 = 0;
			var progression_its72 = 0;
			var progression_its73 = 0;
			var progression_its74 = 0;
			var progression_its75 = 0;
			var progression_its76 = 0;
			var progression_its77 = 0;
			var progression_its78 = 0;
			var progression_its79 = 0;
			var progression_its80 = 0;
			var progression_its81 = 0;
			var progression_its82 = 0;
			var progression_its83 = 0;
			var progression_its84 = 0;
			var progression_its85 = 0;
			var progression_its86 = 0;
			var progression_its87 = 0;
			var progression_its88 = 0;
			var progression_its89 = 0;
			var progression_its90 = 0;
			var progression_its91 = 0;
			var progression_its92 = 0;
			var progression_its93 = 0;
			var progression_its94 = 0;
			var progression_its95 = 0;
			var progression_its96 = 0;
			var progression_its97 = 0;
			var progression_its98 = 0;
			var progression_its99 = 0;
			var progression_its100 = 0;
			var progression_its101 = 0;
			var progression_its102 = 0;
			var progression_its103 = 0;
			var progression_its104 = 0;
			var progression_its105 = 0;
			var progression_its106 = 0;
			var progression_its107 = 0;
			var progression_its108 = 0;
			var progression_its111 = 0;
			var progression_its117 = 0;
			var progression_its118 = 0;
			var progression_its119 = 0;
			var progression_its120 = 0;
			var progression_its121 = 0;
			var progression_its122 = 0;
			var progression_its125 = 0;
			var progression_its131 = 0;
			var progression_its132 = 0;
			
			// 0 = type du train (ICN)
			// 1 = ?
			// 2 = déclenchement de son d'annonce hors service actuellement
			// 3 = Arret à 1 ou 0 
			// 4 = Chiffre 59 ? récurant à chaque entrée pas trouvé utilié 1 = lausanne 2 = Genève 3 = Yverdon // contrôle des sorties
			// 5 = Nom du train --> RE 107 Lausanne
			// 6 = Numéro du train ex 107
			
			var train2_its1 = new Array("na", 0, 0, 0, "na", 0, 0);   
			var train2_its2 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its3 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its4 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its5 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its6 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its7 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its8 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its9 = new Array("na", 0, 0, 0, "na", 0, 0);
		
			var train2_its10 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its11 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its12 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its13 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its14 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its15 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its16 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its17 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its18 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its19 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its20 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its21 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its22 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its23 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its29 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its30 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its31 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its32 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its33 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its34 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its35 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its36 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its37 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its38 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its39 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its40 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its41 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its42 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its43 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its44 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its45 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its46 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its47 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its48 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its49 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its50 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its51 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its52 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its53 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its54 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its55 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its56 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its57 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its58 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its59 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its60 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its61 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its62 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its63 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its64 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its65 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its66 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its67 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its68 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its69 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its70 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its71 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its72 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its73 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its74 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its75 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its76 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its77 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its78 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its79 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its80 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its81 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its82 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its83 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its84 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its85 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its86 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its87 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its88 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its89 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its90 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its91 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its92 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its93 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its94 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its95 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its96 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its97 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its98 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its99 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its100 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its101 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its102 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its103 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its104 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its105 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its106 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its107 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its108 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its111 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its117 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its118 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its119 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its120 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its121 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its122 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its125 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			var train2_its131 = new Array("na", 0, 0, 0, "na", 0, 0);
			var train2_its132 = new Array("na", 0, 0, 0, "na", 0, 0);
			
			
			
			var sens_its1 = 0;
			var sens_its2 = 0;
			var sens_its3 = 0;
			var sens_its4 = 0;
			var sens_its5 = 0;
			var sens_its6 = 0;
			var sens_its7 = 0;
			var sens_its8 = 0;
			var sens_its9 = 0;
			var sens_its10 = 0;
			var sens_its11 = 0;
			var sens_its12 = 0;
			var sens_its13 = 0;
			var sens_its14 = 0;
			var sens_its15 = 0;
			var sens_its16 = 0;
			var sens_its17 = 0;
			var sens_its18 = 0;
			var sens_its19 = 0;
			var sens_its20 = 0;
			var sens_its21 = 0;
			var sens_its22 = 0;
			var sens_its23 = 0;
			
			var sens_its29 = 0;
			var sens_its30 = 0;
			var sens_its31 = 0;
			var sens_its32 = 0;
			var sens_its33 = 0;
			var sens_its34 = 0;
			var sens_its35 = 0;
			var sens_its36 = 0;
			var sens_its37 = 0;
			var sens_its38 = 0;
			var sens_its39 = 0;
			var sens_its40 = 0;
			var sens_its41 = 0;
			var sens_its42 = 0;
			var sens_its43 = 0;
			var sens_its44 = 0;
			var sens_its45 = 0;
			var sens_its46 = 0;
			var sens_its47 = 0;
			var sens_its48 = 0;
			var sens_its49 = 0;
			var sens_its50 = 0;
			var sens_its51 = 0;
			var sens_its52 = 0;
			var sens_its53 = 0;
			var sens_its54 = 0;
			var sens_its55 = 0;
			var sens_its56 = 0;
			var sens_its57 = 0;
			var sens_its58 = 0;
			var sens_its59 = 0;
			var sens_its60 = 0;
			var sens_its61 = 0;
			var sens_its62 = 0;
			var sens_its63 = 0;
			var sens_its64 = 0;
			var sens_its65 = 0;
			var sens_its66 = 0;
			var sens_its67 = 0;
			var sens_its68 = 0;
			var sens_its69 = 0;
			var sens_its70 = 0;
			var sens_its71 = 0;
			var sens_its72 = 0;
			var sens_its73 = 0;
			var sens_its74 = 0;
			var sens_its75 = 0;
			var sens_its76 = 0;
			var sens_its77 = 0;
			var sens_its78 = 0;
			var sens_its79 = 0;
			var sens_its80 = 0;
			var sens_its81 = 0;
			var sens_its82 = 0;
			var sens_its83 = 0;
			var sens_its84 = 0;
			var sens_its85 = 0;
			var sens_its86 = 0;
			var sens_its87 = 0;
			var sens_its88 = 0;
			var sens_its89 = 0;
			var sens_its90 = 0;
			var sens_its91 = 0;
			var sens_its92 = 0;
			var sens_its93 = 0;
			var sens_its94 = 0;
			var sens_its95 = 0;
			var sens_its96 = 0;
			var sens_its97 = 0;
			var sens_its98 = 0;
			var sens_its99 = 0;
			var sens_its100 = 0;
			var sens_its101 = 0;
			var sens_its102 = 0;
			var sens_its103 = 0;
			var sens_its104 = 0;
			var sens_its105 = 0;
			var sens_its106 = 0;
			var sens_its107 = 0;
			var sens_its108 = 0;
			var sens_its109 = 0;
			var sens_its110 = 0;
			
			var sens_its111 = 0;
			var sens_its117 = 0;
			var sens_its118 = 0;
			var sens_its119 = 0;
			var sens_its120 = 0;
			var sens_its121 = 0;
			var sens_its122 = 0;
			
			var sens_its131 = 0;
			var sens_its132 = 0;
			
			
			
			
			var occupation_its1 = false;
			var occupation_its2 = false;
			var occupation_its3 = false;
			var occupation_its4 = false;
			var occupation_its5 = false;
			var occupation_its6 = false;
			var occupation_its7 = false;
			var occupation_its8 = false;
			var occupation_its9 = false;
			var occupation_its10 = false;
			var occupation_its11 = false;
			var occupation_its12 = false;
			var occupation_its13 = false;
			var occupation_its14 = false;
			var occupation_its15 = false;
			var occupation_its16 = false;
			var occupation_its17 = false;
			var occupation_its18 = false;
			var occupation_its19 = false;
			var occupation_its20 = false;
			var occupation_its21 = false;
			var occupation_its22 = false;
			var occupation_its23 = false;
			var occupation_its29 = false;
			var occupation_its30 = false;
			var occupation_its31 = false;
			var occupation_its32 = false;
			var occupation_its33 = false;
			var occupation_its34 = false;
			var occupation_its35 = false;
			var occupation_its36 = false;
			var occupation_its37 = false;
			var occupation_its38 = false;
			var occupation_its39 = false;
			var occupation_its40 = false;
			var occupation_its41 = false;
			var occupation_its42 = false;
			var occupation_its43 = false;
			var occupation_its44 = false;
			var occupation_its45 = false;
			var occupation_its46 = false;
			var occupation_its47 = false;
			var occupation_its48 = false;
			var occupation_its49 = false;
			var occupation_its50 = false;
			var occupation_its51 = false;
			var occupation_its52 = false;
			var occupation_its53 = false;
			var occupation_its54 = false;
			var occupation_its55 = false;
			var occupation_its56 = false;
			var occupation_its57 = false;
			var occupation_its58 = false;
			var occupation_its59 = false;
			var occupation_its60 = false;
			var occupation_its61 = false;
			var occupation_its62 = false;
			var occupation_its63 = false;
			var occupation_its64 = false;
			var occupation_its65 = false;
			var occupation_its66 = false;
			var occupation_its67 = false;
			var occupation_its68 = false;
			var occupation_its69 = false;
			var occupation_its70 = false;
			var occupation_its71 = false;
			var occupation_its72 = false;
			var occupation_its73 = false;
			var occupation_its74 = false;
			var occupation_its75 = false;
			var occupation_its76 = false;
			var occupation_its77 = false;
			var occupation_its78 = false;
			var occupation_its79 = false;
			var occupation_its80 = false;
			var occupation_its81 = false;
			var occupation_its82 = false;
			var occupation_its83 = false;
			var occupation_its84 = false;
			var occupation_its85 = false;
			var occupation_its86 = false;
			var occupation_its87 = false;
			var occupation_its88 = false;
			var occupation_its89 = false;
			var occupation_its90 = false;
			var occupation_its91 = false;
			var occupation_its92 = false;
			var occupation_its93 = false;
			var occupation_its94 = false;
			var occupation_its95 = false;
			var occupation_its96 = false;
			var occupation_its97 = false;
			var occupation_its98 = false;
			var occupation_its99 = false;
			var occupation_its100 = false;
			var occupation_its101 = false;
			var occupation_its102 = false;
			var occupation_its103 = false;
			var occupation_its104 = false;
			var occupation_its105 = false;
			var occupation_its106 = false;
			var occupation_its107 = false;
			var occupation_its108 = false;
			
			
			var occupation_its111 = false;
			var occupation_its117 = false;
			var occupation_its118 = false;
			var occupation_its119 = false;
			var occupation_its120 = false;
			var occupation_its121 = false;
			var occupation_its122 = false;
			var occupation_its125 = false;
			
			var occupation_its131 = false;
			var occupation_its132 = false;
			
			
			var next = 0; // piste audio
			
			
			var punto1 = -1300;
			var bus = -2000;
			var police = -100;
			var pompier = 1500;
			var compteur_feux_bleu = 0;
			var man1 = 1;
			
			var minutes_de_retard = 0;
			var le_nombre_de_train = 0;
			
			var ligne = 0;
			var ligne2 = 0;
			
			
			var point_de_passage_1;
			var point_de_passage_2;
			
			var sens = 1;
			
			var la_variable = 1; // 0 manuelle // 1 automatique
			
			
			var compteur_SP101 = false;
			var progression_SP101 = 0;
			var vitesse_SP101 = 26;
			var arret_SP101 = 0;
			
			var compteur_SP102 = false;
			var progression_SP102 = 0;
			var vitesse_SP102 = 26;
			var arret_SP102 = 0;
			
			var compteur_SP103 = false;
			var progression_SP103 = 0;
			var vitesse_SP103 = 26;
			var arret_SP103 = 0;
			
			var compteur_SP104 = false;
			var progression_SP104 = 0;
			var vitesse_SP104 = 26;
			var arret_SP104 = 0;

			var compteur_SP105 = false;
			var progression_SP105 = 0;
			var vitesse_SP105 = 26;
			var arret_SP105 = 0;
			
			var compteur_SP106 = false;
			var progression_SP106 = 0;
			var vitesse_SP106 = 26;
			var arret_SP106 = 0;
			
			var compteur_SP201 = false;
			var progression_SP201 = 0;
			var vitesse_SP201 = 26;
			var arret_SP201 = 0;
			
			var compteur_SP202 = false;
			var progression_SP202 = 0;
			var vitesse_SP202 = 26;
			var arret_SP202 = 0;
			
			var compteur_SP203 = false;
			var progression_SP203 = 0;
			var vitesse_SP203 = 26;
			var arret_SP203 = 0;
			
			var compteur_SP204 = false;
			var progression_SP204 = 0;
			var vitesse_SP204 = 26;
			var arret_SP204 = 0;
			
			var compteur_SP205 = false;
			var progression_SP205 = 0;
			var vitesse_SP205 = 26;
			var arret_SP205 = 0;
			
			var compteur_SP206 = false;
			var progression_SP206 = 0;
			var vitesse_SP206 = 26;
			var arret_SP206 = 0;
			
			var compteur_ICN101 = false;
			var progression_ICN101 = 0;
			var vitesse_ICN101 = 26;
			var arret_ICN101 = 0;
			
			var compteur_ICN102 = false;
			var progression_ICN102 = 0;
			var vitesse_ICN102 = 26;
			var arret_ICN102 = 0;
			
			var compteur_ICN103 = false;
			var progression_ICN103 = 0;
			var vitesse_ICN103 = 26;
			var arret_ICN103 = 0;
			
			var compteur_ICN104 = false;
			var progression_ICN104 = 0;
			var vitesse_ICN104 = 26;
			var arret_ICN104 = 0;

			var compteur_ICN105 = false;
			var progression_ICN105 = 0;
			var vitesse_ICN105 = 26;
			var arret_ICN105 = 0;
			
			var compteur_ICN106 = false;
			var progression_ICN106 = 0;
			var vitesse_ICN106 = 26;
			var arret_ICN106 = 0;
			
			var compteur_ICN201 = false;
			var progression_ICN201 = 0;
			var vitesse_ICN201 = 26;
			var arret_ICN201 = 0;
			
			var compteur_ICN202 = false;
			var progression_ICN202 = 0;
			var vitesse_ICN202 = 26;
			var arret_ICN202 = 0;
			
			var compteur_ICN203 = false;
			var progression_ICN203 = 0;
			var vitesse_ICN203 = 26;
			var arret_ICN203 = 0;
			
			var compteur_ICN204 = false;
			var progression_ICN204 = 0;
			var vitesse_ICN204 = 26;
			var arret_ICN204 = 0;
			
			var compteur_ICN205 = false;
			var progression_ICN205 = 0;
			var vitesse_ICN205 = 26;
			var arret_ICN205 = 0;
			
			var compteur_ICN206 = false;
			var progression_ICN206 = 0;
			var vitesse_ICN206 = 26;
			var arret_ICN206 = 0;
			
			var compteur_MARA101 = false;
			var progression_MARA101 = 0;
			var vitesse_MARA101 = 15;
			var arret_MARA101 = 0;

			var compteur_MARA102 = false;
			var progression_MARA102 = 0;
			var vitesse_MARA102 = 15;
			var arret_MARA102 = 0;

			var compteur_MARA103 = false;
			var progression_MARA103 = 0;
			var vitesse_MARA103 = 15;
			var arret_MARA103 = 0;

			var compteur_MARA104 = false;
			var progression_MARA104 = 0;
			var vitesse_MARA104 = 15;
			var arret_MARA104 = 0;

			var compteur_MARA105 = false;
			var progression_MARA105 = 0;
			var vitesse_MARA105 = 15;
			var arret_MARA105 = 0;
			
			var compteur_MARA106 = false;
			var progression_MARA106 = 0;
			var vitesse_MARA106 = 15;
			var arret_MARA106 = 0;
			
			var compteur_MARA201 = false;
			var progression_MARA201 = 0;
			var vitesse_MARA201 = 15;
			var arret_MARA201 = 0;

			var compteur_MARA202 = false;
			var progression_MARA202 = 0;
			var vitesse_MARA202 = 15;
			var arret_MARA202 = 0;

			var compteur_MARA203 = false;
			var progression_MARA203 = 0;
			var vitesse_MARA203 = 15;
			var arret_MARA203 = 0;

			var compteur_MARA204 = false;
			var progression_MARA204 = 0;
			var vitesse_MARA204 = 15;
			var arret_MARA204 = 0;
			
			var compteur_MARA205 = false;
			var progression_MARA205 = 0;
			var vitesse_MARA205 = 15;
			var arret_MARA205 = 0;
			
			var compteur_MARA206 = false;
			var progression_MARA206 = 0;
			var vitesse_MARA206 = 15;
			var arret_MARA206 = 0;
			
			var compteur_MARB101 = false;
			var progression_MARB101 = 0;
			var vitesse_MARB101 = 15;
			var arret_MARB101 = 0;
			
			var compteur_MARB102 = false;
			var progression_MARB102 = 0;
			var vitesse_MARB102 = 15;
			var arret_MARB102 = 0;

			var compteur_MARB103 = false;
			var progression_MARB103 = 0;
			var vitesse_MARB103 = 15;
			var arret_MARB103 = 0;

			var compteur_MARB104 = false;
			var progression_MARB104 = 0;
			var vitesse_MARB104 = 15;
			var arret_MARB104 = 0;

			var compteur_MARB105 = false;
			var progression_MARB105 = 0;
			var vitesse_MARB105 = 15;
			var arret_MARB105 = 0;
			
			var compteur_MARB106 = false;
			var progression_MARB106 = 0;
			var vitesse_MARB106 = 15;
			var arret_MARB106 = 0;
			
			var compteur_MARB201 = false;
			var progression_MARB201 = 0;
			var vitesse_MARB201 = 15;
			var arret_MARB201 = 0;

			var compteur_MARB202 = false;
			var progression_MARB202 = 0;
			var vitesse_MARB202 = 15;
			var arret_MARB202 = 0;

			var compteur_MARB203 = false;
			var progression_MARB203 = 0;
			var vitesse_MARB203 = 15;
			var arret_MARB203 = 0;

			var compteur_MARB204 = false;
			var progression_MARB204 = 0;
			var vitesse_MARB204 = 15;
			var arret_MARB204 = 0;
			
			var compteur_MARB205 = false;
			var progression_MARB205 = 0;
			var vitesse_MARB205 = 15;
			var arret_MARB205 = 0;
			
			var compteur_MARB206 = false;
			var progression_MARB206 = 0;
			var vitesse_MARB206 = 15;
			var arret_MARB206 = 0;
			
			var compteur_MARC101 = false;
			var progression_MARC101 = 0;
			var vitesse_MARC101 = 15;
			var arret_MARC101 = 0;
			
			var compteur_MARC102 = false;
			var progression_MARC102 = 0;
			var vitesse_MARC102 = 15;
			var arret_MARC102 = 0;

			var compteur_MARC103 = false;
			var progression_MARC103 = 0;
			var vitesse_MARC103 = 15;
			var arret_MARC103 = 0;

			var compteur_MARC104 = false;
			var progression_MARC104 = 0;
			var vitesse_MARC104 = 15;
			var arret_MARC104 = 0;

			var compteur_MARC105 = false;
			var progression_MARC105 = 0;
			var vitesse_MARC105 = 15;
			var arret_MARC105 = 0;
			
			var compteur_MARC106 = false;
			var progression_MARC106 = 0;
			var vitesse_MARC106 = 15;
			var arret_MARC106 = 0;
			
			var compteur_MARC201 = false;
			var progression_MARC201 = 0;
			var vitesse_MARC201 = 15;
			var arret_MARC201 = 0;

			var compteur_MARC202 = false;
			var progression_MARC202 = 0;
			var vitesse_MARC202 = 15;
			var arret_MARC202 = 0;

			var compteur_MARC203 = false;
			var progression_MARC203 = 0;
			var vitesse_MARC203 = 15;
			var arret_MARC203 = 0;

			var compteur_MARC204 = false;
			var progression_MARC204 = 0;
			var vitesse_MARC204 = 15;
			var arret_MARC204 = 0;
			
			var compteur_MARC205 = false;
			var progression_MARC205 = 0;
			var vitesse_MARC205 = 15;
			var arret_MARC205 = 0;
			
			var compteur_MARC206 = false;
			var progression_MARC206 = 0;
			var vitesse_MARC206 = 15;
			var arret_MARC206 = 0;
			
			var compteur_MARD101 = false;
			var progression_MARD101 = 0;
			var vitesse_MARD101 = 15;
			var arret_MARD101 = 0;
			
			var compteur_MARD102 = false;
			var progression_MARD102 = 0;
			var vitesse_MARD102 = 15;
			var arret_MARD102 = 0;

			var compteur_MARD103 = false;
			var progression_MARD103 = 0;
			var vitesse_MARD103 = 15;
			var arret_MARD103 = 0;

			var compteur_MARD104 = false;
			var progression_MARD104 = 0;
			var vitesse_MARD104 = 15;
			var arret_MARD104 = 0;

			var compteur_MARD105 = false;
			var progression_MARD105 = 0;
			var vitesse_MARD105 = 15;
			var arret_MARD105 = 0;
			
			var compteur_MARD106 = false;
			var progression_MARD106 = 0;
			var vitesse_MARD106 = 15;
			var arret_MARD106 = 0;
			
			
			var compteur_MARD201 = false;
			var progression_MARD201 = 0;
			var vitesse_MARD201 = 15;
			var arret_MARD201 = 0;

			var compteur_MARD202 = false;
			var progression_MARD202 = 0;
			var vitesse_MARD202 = 15;
			var arret_MARD202 = 0;

			var compteur_MARD203 = false;
			var progression_MARD203 = 0;
			var vitesse_MARD203 = 15;
			var arret_MARD203 = 0;

			var compteur_MARD204 = false;
			var progression_MARD204 = 0;
			var vitesse_MARD204 = 15;
			var arret_MARD204 = 0;
			
			var compteur_MARD205 = false;
			var progression_MARD205 = 0;
			var vitesse_MARD205 = 15;
			var arret_MARD205 = 0;
			
			var compteur_MARD206 = false;
			var progression_MARD206 = 0;
			var vitesse_MARD206 = 15;
			var arret_MARD206 = 0;
			
			var compteur_ICZ101 = false;
			var progression_ICZ101 = 0;
			var vitesse_ICZ101 = 24;
			var arret_ICZ101 = 0;
			
			var compteur_ICZ102 = false;
			var progression_ICZ102 = 0;
			var vitesse_ICZ102 = 24;
			var arret_ICZ102 = 0;

			var compteur_ICZ103 = false;
			var progression_ICZ103 = 0;
			var vitesse_ICZ103 = 24;
			var arret_ICZ103 = 0;

			var compteur_ICZ104 = false;
			var progression_ICZ104 = 0;
			var vitesse_ICZ104 = 24;
			var arret_ICZ104 = 0;

			var compteur_ICZ105 = false;
			var progression_ICZ105 = 0;
			var vitesse_ICZ105 = 24;
			var arret_ICZ105 = 0;
			
			var compteur_ICZ106 = false;
			var progression_ICZ106 = 0;
			var vitesse_ICZ106 = 24;
			var arret_ICZ106 = 0;
			
			var compteur_ICZ201 = false;
			var progression_ICZ201 = 0;
			var vitesse_ICZ201 = 26;
			var arret_ICZ201 = 0;
			
			var compteur_ICZ202 = false;
			var progression_ICZ202 = 0;
			var vitesse_ICZ202 = 26;
			var arret_ICZ202 = 0;
			
			var compteur_ICZ203 = false;
			var progression_ICZ203 = 0;
			var vitesse_ICZ203 = 26;
			var arret_ICZ203 = 0;
			
			var compteur_ICZ204 = false;
			var progression_ICZ204 = 0;
			var vitesse_ICZ204 = 26;
			var arret_ICZ204 = 0;
			
			var compteur_ICZ205 = false;
			var progression_ICZ205 = 0;
			var vitesse_ICZ205 = 26;
			var arret_ICZ205 = 0;
			
			var compteur_ICZ206 = false;
			var progression_ICZ206 = 0;
			var vitesse_ICZ206 = 26;
			var arret_ICZ206 = 0;
			
			var compteur_S101 = false;
			var progression_S101 = 0;
			var vitesse_S101 = 26;
			var arret_S101 = 0;

			var compteur_S102 = false;
			var progression_S102 = 0;
			var vitesse_S102 = 26;
			var arret_S102 = 0;

			var compteur_S103 = false;
			var progression_S103 = 0;
			var vitesse_S103 = 26;
			var arret_S103 = 0;

			var compteur_S104 = false;
			var progression_S104 = 0;
			var vitesse_S104 = 26;
			var arret_S104 = 0;

			var compteur_S105 = false;
			var progression_S105 = 0;
			var vitesse_S105 = 26;
			var arret_S105 = 0;
			
			var compteur_S106 = false;
			var progression_S106 = 0;
			var vitesse_S106 = 26;
			var arret_S106 = 0;
			
			var compteur_D201 = false;
			var progression_D201 = 0;
			var vitesse_D201 = 26;
			var arret_D201 = 0;

			var compteur_D202 = false;
			var progression_D202 = 0;
			var vitesse_D202 = 26;
			var arret_D202 = 0;

			var compteur_D203 = false;
			var progression_D203 = 0;
			var vitesse_D203 = 26;
			var arret_D203 = 0;

			var compteur_D204 = false;
			var progression_D204 = 0;
			var vitesse_D204 = 26;
			var arret_D204 = 0;

			var compteur_D205 = false;
			var progression_D205 = 0;
			var vitesse_D205 = 26;
			var arret_D205 = 0;
			
			var compteur_D206 = false;
			var progression_D206 = 0;
			var vitesse_D206 = 26;
			var arret_D206 = 0;

			var compteur_IR201 = false;
			var progression_IR201 = 0;
			var vitesse_IR201 = 26;
			var arret_IR201 = 0;

			var compteur_IR202 = false;
			var progression_IR202 = 0;
			var vitesse_IR202 = 26;
			var arret_IR202 = 0;

			var compteur_IR203 = false;
			var progression_IR203 = 0;
			var vitesse_IR203 = 26;
			var arret_IR203 = 0;

			var compteur_IR204 = false;
			var progression_IR204 = 0;
			var vitesse_IR204 = 26;
			var arret_IR204 = 0;

			var compteur_IR205 = false;
			var progression_IR205 = 0;
			var vitesse_IR205 = 26;
			var arret_IR205 = 0;
			
			var compteur_IR206 = false;
			var progression_IR206 = 0;
			var vitesse_IR206 = 26;
			var arret_IR206 = 0;
			
			var compteur_IR101 = false;
			var progression_IR101 = 0;
			var vitesse_IR101 = 26;
			var arret_IR101 = 0;
			
			var compteur_IR102 = false;
			var progression_IR102 = 0;
			var vitesse_IR102 = 26;
			var arret_IR102 = 0;
			
			var compteur_IR103 = false;
			var progression_IR103 = 0;
			var vitesse_IR103 = 26;
			var arret_IR103 = 0;
			
			var compteur_IR104 = false;
			var progression_IR104 = 0;
			var vitesse_IR104 = 26;
			var arret_IR104 = 0;
			
			var compteur_IR105 = false;
			var progression_IR105 = 0;
			var vitesse_IR105 = 26;
			var arret_IR105 = 0;
			
			var compteur_IR106 = false;
			var progression_IR106 = 0;
			var vitesse_IR106 = 26;
			var arret_IR106 = 0;
			
			var compteur_S201 = false;
			var progression_S201 = 0;
			var vitesse_S201 = 26;
			var arret_S201 = 0;
			
			var compteur_S202 = false;
			var progression_S202 = 0;
			var vitesse_S202 = 26;
			var arret_S202 = 0;
			
			var compteur_S203 = false;
			var progression_S203 = 0;
			var vitesse_S203 = 26;
			var arret_S203 = 0;
			
			var compteur_S204 = false;
			var progression_S204 = 0;
			var vitesse_S204 = 26;
			var arret_S204 = 0;
			
			var compteur_S205 = false;
			var progression_S205 = 0;
			var vitesse_S205 = 26;
			var arret_S205 = 0;
			
			var compteur_S206 = false;
			var progression_S206 = 0;
			var vitesse_S206 = 26;
			var arret_S206 = 0;
			
			var compteur_RE201 = false;
			var progression_RE201 = 0;
			var vitesse_RE201 = 26;
			var arret_RE201 = 0;
			
			var compteur_RE202 = false;
			var progression_RE202 = 0;
			var vitesse_RE202 = 26;
			var arret_RE202 = 0;
			
			var compteur_RE203 = false;
			var progression_RE203 = 0;
			var vitesse_RE203 = 26;
			var arret_RE203 = 0;
			
			var compteur_RE204 = false;
			var progression_RE204 = 0;
			var vitesse_RE204 = 26;
			var arret_RE204 = 0;
			
			var compteur_RE205 = false;
			var progression_RE205 = 0;
			var vitesse_RE205 = 26;
			var arret_RE205 = 0;
			
			var compteur_RE206 = false;
			var progression_RE206 = 0;
			var vitesse_RE206 = 26;
			var arret_RE206 = 0;
			
			var compteur_RE101 = false;
			var progression_RE101 = 0;
			var vitesse_RE101 = 26;
			var arret_RE101 = 0;
			
			var compteur_RE102 = false;
			var progression_RE102 = 0;
			var vitesse_RE102 = 26;
			var arret_RE102 = 0;
			
			var compteur_RE103 = false;
			var progression_RE103 = 0;
			var vitesse_RE103 = 26;
			var arret_RE103 = 0;
			
			var compteur_RE104 = false;
			var progression_RE104 = 0;
			var vitesse_RE104 = 26;
			var arret_RE104 = 0;
			
			var compteur_RE105 = false;
			var progression_RE105 = 0;
			var vitesse_RE105 = 26;
			var arret_RE105 = 0;
			
			var compteur_RE106 = false;
			var progression_RE106 = 0;
			var vitesse_RE106 = 26;
			var arret_RE106 = 0;
			
			var compteur_D101 = false;
			var progression_D101 = 0;
			var vitesse_D101 = 26;
			var arret_D101 = 0;
			
			var compteur_D102 = false;
			var progression_D102 = 0;
			var vitesse_D102 = 26;
			var arret_D102 = 0;
			
			var compteur_D103 = false;
			var progression_D103 = 0;
			var vitesse_D103 = 26;
			var arret_D103 = 0;
			
			var compteur_D104 = false;
			var progression_D104 = 0;
			var vitesse_D104 = 26;
			var arret_D104 = 0;
			
			var compteur_D105 = false;
			var progression_D105 = 0;
			var vitesse_D105 = 26;
			var arret_D105 = 0;
			
			var compteur_D106 = false;
			var progression_D106 = 0;
			var vitesse_D106 = 26;
			var arret_D106 = 0;
			
			var compteur_TGV101 = false;
			var progression_TGV101 = 0;
			var vitesse_TGV101 = 26;
			var arret_TGV101 = 0;
			
			var compteur_TGV102 = false;
			var progression_TGV102 = 0;
			var vitesse_TGV102 = 26;
			var arret_TGV102 = 0;
			
			var compteur_TGV103 = false;
			var progression_TGV103 = 0;
			var vitesse_TGV103 = 26;
			var arret_TGV103 = 0;
			
			var compteur_TGV104 = false;
			var progression_TGV104 = 0;
			var vitesse_TGV104 = 26;
			var arret_TGV104 = 0;
			
			var compteur_TGV105 = false;
			var progression_TGV105 = 0;
			var vitesse_TGV105 = 26;
			var arret_TGV105 = 0;
			
			var compteur_TGV106 = false;
			var progression_TGV106 = 0;
			var vitesse_TGV106 = 26;
			var arret_TGV106 = 0;
			
			var compteur_TGV201 = false;
			var progression_TGV201 = 0;
			var vitesse_TGV201 = 26;
			var arret_TGV201 = 0;
			
			var compteur_TGV202 = false;
			var progression_TGV202 = 0;
			var vitesse_TGV202 = 26;
			var arret_TGV202 = 0;
			
			var compteur_TGV203 = false;
			var progression_TGV203 = 0;
			var vitesse_TGV203 = 26;
			var arret_TGV203 = 0;
			
			var compteur_TGV204 = false;
			var progression_TGV204 = 0;
			var vitesse_TGV204 = 26;
			var arret_TGV204 = 0;
			
			var compteur_TGV205 = false;
			var progression_TGV205 = 0;
			var vitesse_TGV205 = 26;
			var arret_TGV205 = 0;
			
			var compteur_TGV206 = false;
			var progression_TGV206 = 0;
			var vitesse_TGV206 = 26;
			var arret_TGV206 = 0;
			
			var compteur_MARE101 = false;
			var progression_MARE101 = 0;
			var vitesse_MARE101 = 26;
			var arret_MARE101 = 0;
			
			var compteur_MARE102 = false;
			var progression_MARE102 = 0;
			var vitesse_MARE102 = 26;
			var arret_MARE102 = 0;
			
			var compteur_MARE103 = false;
			var progression_MARE103 = 0;
			var vitesse_MARE103 = 26;
			var arret_MARE103 = 0;
			
			var compteur_MARE104 = false;
			var progression_MARE104 = 0;
			var vitesse_MARE104 = 26;
			var arret_MARE104 = 0;
			
			var compteur_MARE105 = false;
			var progression_MARE105 = 0;
			var vitesse_MARE105 = 26;
			var arret_MARE105 = 0;
			
			var compteur_MARE106 = false;
			var progression_MARE106 = 0;
			var vitesse_MARE106 = 26;
			var arret_MARE106 = 0;
			
			var compteur_MARE201 = false;
			var progression_MARE201 = 0;
			var vitesse_MARE201 = 26;
			var arret_MARE201 = 0;
			
			var compteur_MARE202 = false;
			var progression_MARE202 = 0;
			var vitesse_MARE202 = 26;
			var arret_MARE202 = 0;
			
			var compteur_MARE203 = false;
			var progression_MARE203 = 0;
			var vitesse_MARE203 = 26;
			var arret_MARE203 = 0;
			
			var compteur_MARE204 = false;
			var progression_MARE204 = 0;
			var vitesse_MARE204 = 26;
			var arret_MARE204 = 0;
			
			var compteur_MARE205 = false;
			var progression_MARE205 = 0;
			var vitesse_MARE205 = 26;
			var arret_MARE205 = 0;
			
			var compteur_MARE206 = false;
			var progression_MARE206 = 0;
			var vitesse_MARE206 = 26;
			var arret_MARE206 = 0;
			
			var compteur_MARF101 = false;
			var progression_MARF101 = 0;
			var vitesse_MARF101 = 26;
			var arret_MARF101 = 0;
			
			var compteur_MARF102 = false;
			var progression_MARF102 = 0;
			var vitesse_MARF102 = 26;
			var arret_MARF102 = 0;
			
			var compteur_MARF103 = false;
			var progression_MARF103 = 0;
			var vitesse_MARF103 = 26;
			var arret_MARF103 = 0;
			
			var compteur_MARF104 = false;
			var progression_MARF104 = 0;
			var vitesse_MARF104 = 26;
			var arret_MARF104 = 0;
			
			var compteur_MARF105 = false;
			var progression_MARF105 = 0;
			var vitesse_MARF105 = 26;
			var arret_MARF105 = 0;
			
			var compteur_MARF106 = false;
			var progression_MARF106 = 0;
			var vitesse_MARF106 = 26;
			var arret_MARF106 = 0;
			
			var compteur_MARF201 = false;
			var progression_MARF201 = 0;
			var vitesse_MARF201 = 26;
			var arret_MARF201 = 0;
			
			var compteur_MARF202 = false;
			var progression_MARF202 = 0;
			var vitesse_MARF202 = 26;
			var arret_MARF202 = 0;
			
			var compteur_MARF203 = false;
			var progression_MARF203 = 0;
			var vitesse_MARF203 = 26;
			var arret_MARF203 = 0;
			
			var compteur_MARF204 = false;
			var progression_MARF204 = 0;
			var vitesse_MARF204 = 26;
			var arret_MARF204 = 0;
			
			var compteur_MARF205 = false;
			var progression_MARF205 = 0;
			var vitesse_MARF205 = 26;
			var arret_MARF205 = 0;
			
			var compteur_MARF206 = false;
			var progression_MARF206 = 0;
			var vitesse_MARF206 = 26;
			var arret_MARF206 = 0;
			
			var compteur_MARF101 = false;
			var progression_MARF101 = 0;
			var vitesse_MARF101 = 26;
			var arret_MARF101 = 0;
			
			var compteur_MARF102 = false;
			var progression_MARF102 = 0;
			var vitesse_MARF102 = 26;
			var arret_MARF102 = 0;
			
			var compteur_MARF103 = false;
			var progression_MARF103 = 0;
			var vitesse_MARF103 = 26;
			var arret_MARF103 = 0;
			
			var compteur_MARF104 = false;
			var progression_MARF104 = 0;
			var vitesse_MARF104 = 26;
			var arret_MARF104 = 0;
			
			var compteur_MARF105 = false;
			var progression_MARF105 = 0;
			var vitesse_MARF105 = 26;
			var arret_MARF105 = 0;
			
			var compteur_MARF106 = false;
			var progression_MARF106 = 0;
			var vitesse_MARF106 = 26;
			var arret_MARF106 = 0;
			
			var compteur_MARF201 = false;
			var progression_MARF201 = 0;
			var vitesse_MARF201 = 26;
			var arret_MARF201 = 0;
			
			var compteur_MARF202 = false;
			var progression_MARF202 = 0;
			var vitesse_MARF202 = 26;
			var arret_MARF202 = 0;
			
			var compteur_MARF203 = false;
			var progression_MARF203 = 0;
			var vitesse_MARF203 = 26;
			var arret_MARF203 = 0;
			
			var compteur_MARF204 = false;
			var progression_MARF204 = 0;
			var vitesse_MARF204 = 26;
			var arret_MARF204 = 0;
			
			var compteur_MARF205 = false;
			var progression_MARF205 = 0;
			var vitesse_MARF205 = 26;
			var arret_MARF205 = 0;
			
			var compteur_MARF206 = false;
			var progression_MARF206 = 0;
			var vitesse_MARF206 = 26;
			var arret_MARF206 = 0;
			
			var compteur_LOC101 = false;
			var progression_LOC101 = 0;
			var vitesse_LOC101 = 26;
			var arret_LOC101 = 0;
			
			var compteur_LOC102 = false;
			var progression_LOC102 = 0;
			var vitesse_LOC102 = 26;
			var arret_LOC102 = 0;
			
			var compteur_LOC103 = false;
			var progression_LOC103 = 0;
			var vitesse_LOC103 = 26;
			var arret_LOC103 = 0;
			
			var compteur_LOC104 = false;
			var progression_LOC104 = 0;
			var vitesse_LOC104 = 26;
			var arret_LOC104 = 0;
			
			var compteur_LOC105 = false;
			var progression_LOC105 = 0;
			var vitesse_LOC105 = 26;
			var arret_LOC105 = 0;
			
			var compteur_LOC106 = false;
			var progression_LOC106 = 0;
			var vitesse_LOC106 = 26;
			var arret_LOC106 = 0;
			
			var compteur_LOC201 = false;
			var progression_LOC201 = 0;
			var vitesse_LOC201 = 26;
			var arret_LOC201 = 0;
			
			var compteur_LOC202 = false;
			var progression_LOC202 = 0;
			var vitesse_LOC202 = 26;
			var arret_LOC202 = 0;
			
			var compteur_LOC203 = false;
			var progression_LOC203 = 0;
			var vitesse_LOC203 = 26;
			var arret_LOC203 = 0;
			
			var compteur_LOC204 = false;
			var progression_LOC204 = 0;
			var vitesse_LOC204 = 26;
			var arret_LOC204 = 0;
			
			var compteur_LOC205 = false;
			var progression_LOC205 = 0;
			var vitesse_LOC205 = 26;
			var arret_LOC205 = 0;
			
			var compteur_LOC206 = false;
			var progression_LOC206 = 0;
			var vitesse_LOC206 = 26;
			var arret_LOC206 = 0;
			
			var compteur_FLE101 = false;
			var progression_FLE101 = 0;
			var vitesse_FLE101 = 26;
			var arret_FLE101 = 0;
			
			var compteur_FLE102 = false;
			var progression_FLE102 = 0;
			var vitesse_FLE102 = 26;
			var arret_FLE102 = 0;
			
			var compteur_FLE103 = false;
			var progression_FLE103 = 0;
			var vitesse_FLE103 = 26;
			var arret_FLE103 = 0;
			
			var compteur_FLE104 = false;
			var progression_FLE104 = 0;
			var vitesse_FLE104 = 26;
			var arret_FLE104 = 0;
			
			var compteur_FLE105 = false;
			var progression_FLE105 = 0;
			var vitesse_FLE105 = 26;
			var arret_FLE105 = 0;
			
			var compteur_FLE106 = false;
			var progression_FLE106 = 0;
			var vitesse_FLE106 = 26;
			var arret_FLE106 = 0;
			
			var compteur_FLE201 = false;
			var progression_FLE201 = 0;
			var vitesse_FLE201 = 26;
			var arret_FLE201 = 0;
			
			var compteur_FLE202 = false;
			var progression_FLE202 = 0;
			var vitesse_FLE202 = 26;
			var arret_FLE202 = 0;
			
			var compteur_FLE203 = false;
			var progression_FLE203 = 0;
			var vitesse_FLE203 = 26;
			var arret_FLE203 = 0;
			
			var compteur_FLE204 = false;
			var progression_FLE204 = 0;
			var vitesse_FLE204 = 26;
			var arret_FLE204 = 0;
			
			var compteur_FLE205 = false;
			var progression_FLE205 = 0;
			var vitesse_FLE205 = 26;
			var arret_FLE205 = 0;
			
			var compteur_FLE206 = false;
			var progression_FLE206 = 0;
			var vitesse_FLE206 = 26;
			var arret_FLE206 = 0;
			
			
			var compteur_IRV201 = false;
			var progression_IRV201 = 0;
			var vitesse_IRV201 = 26;
			var arret_IRV201 = 0;
			
			var compteur_IRV202 = false;
			var progression_IRV202 = 0;
			var vitesse_IRV202 = 26;
			var arret_IRV202 = 0;
			
			var compteur_IRV203 = false;
			var progression_IRV203 = 0;
			var vitesse_IRV203 = 26;
			var arret_IRV203 = 0;
			
			var compteur_IRV204 = false;
			var progression_IRV204 = 0;
			var vitesse_IRV204 = 26;
			var arret_IRV204 = 0;
			
			var compteur_IRV205 = false;
			var progression_IRV205 = 0;
			var vitesse_IRV205 = 26;
			var arret_IRV205 = 0;
			
			var compteur_IRV206 = false;
			var progression_IRV206 = 0;
			var vitesse_IRV206 = 26;
			var arret_IRV206 = 0;
			
			var compteur_IRV101 = false;
			var progression_IRV101 = 0;
			var vitesse_IRV101 = 26;
			var arret_IRV101 = 0;
			
			var compteur_IRV102 = false;
			var progression_IRV102 = 0;
			var vitesse_IRV102 = 26;
			var arret_IRV102 = 0;
			
			var compteur_IRV103 = false;
			var progression_IRV103 = 0;
			var vitesse_IRV103 = 26;
			var arret_IRV103 = 0;
			
			var compteur_IRV104 = false;
			var progression_IRV104 = 0;
			var vitesse_IRV104 = 26;
			var arret_IRV104 = 0;
			
			var compteur_IRV105 = false;
			var progression_IRV105 = 0;
			var vitesse_IRV105 = 26;
			var arret_IRV105 = 0;
			
			var compteur_IRV106 = false;
			var progression_IRV106 = 0;
			var vitesse_IRV106 = 26;
			var arret_IRV106 = 0;
			
			var compteur_IRVC201 = false;
			var progression_IRVC201 = 0;
			var vitesse_IRVC201 = 26;
			var arret_IRVC201 = 0;
			
			var compteur_IRVC202 = false;
			var progression_IRVC202 = 0;
			var vitesse_IRVC202 = 26;
			var arret_IRVC202 = 0;
			
			var compteur_IRVC203 = false;
			var progression_IRVC203 = 0;
			var vitesse_IRVC203 = 26;
			var arret_IRVC203 = 0;
			
			var compteur_IRVC204 = false;
			var progression_IRVC204 = 0;
			var vitesse_IRVC204 = 26;
			var arret_IRVC204 = 0;
			
			var compteur_IRVC205 = false;
			var progression_IRVC205 = 0;
			var vitesse_IRVC205 = 26;
			var arret_IRVC205 = 0;
			
			var compteur_IRVC206 = false;
			var progression_IRVC206 = 0;
			var vitesse_IRVC206 = 26;
			var arret_IRVC206 = 0;
			
			var compteur_IRVC101 = false;
			var progression_IRVC101 = 0;
			var vitesse_IRVC101 = 26;
			var arret_IRVC101 = 0;
			
			var compteur_IRVC102 = false;
			var progression_IRVC102 = 0;
			var vitesse_IRVC102 = 26;
			var arret_IRVC102 = 0;
			
			var compteur_IRVC103 = false;
			var progression_IRVC103 = 0;
			var vitesse_IRVC103 = 26;
			var arret_IRVC103 = 0;
			
			var compteur_IRVC104 = false;
			var progression_IRVC104 = 0;
			var vitesse_IRVC104 = 26;
			var arret_IRVC104 = 0;
			
			var compteur_IRVC105 = false;
			var progression_IRVC105 = 0;
			var vitesse_IRVC105 = 26;
			var arret_IRVC105 = 0;
			
			var compteur_IRVC106 = false;
			var progression_IRVC106 = 0;
			var vitesse_IRVC106 = 26;
			var arret_IRVC106 = 0;
			
			var compteur_POST101 = false;
			var progression_POST101 = 0;
			var vitesse_POST101 = 26;
			var arret_POST101 = 0;
			
			var compteur_POST102 = false;
			var progression_POST102 = 0;
			var vitesse_POST102 = 26;
			var arret_POST102 = 0;
			
			var compteur_POST103 = false;
			var progression_POST103 = 0;
			var vitesse_POST103 = 26;
			var arret_POST103 = 0;
			
			var compteur_POST104 = false;
			var progression_POST104 = 0;
			var vitesse_POST104 = 26;
			var arret_POST104 = 0;
			
			var compteur_POST105 = false;
			var progression_POST105 = 0;
			var vitesse_POST105 = 26;
			var arret_POST105 = 0;
			
			var compteur_POST106 = false;
			var progression_POST106 = 0;
			var vitesse_POST106 = 26;
			var arret_POST106 = 0;
			
			var compteur_POST201 = false;
			var progression_POST201 = 0;
			var vitesse_POST201 = 26;
			var arret_POST201 = 0;
			
			var compteur_POST202 = false;
			var progression_POST202 = 0;
			var vitesse_POST202 = 26;
			var arret_POST202 = 0;
			
			var compteur_POST203 = false;
			var progression_POST203 = 0;
			var vitesse_POST203 = 26;
			var arret_POST203 = 0;
			
			var compteur_POST204 = false;
			var progression_POST204 = 0;
			var vitesse_POST204 = 26;
			var arret_POST204 = 0;
			
			var compteur_POST205 = false;
			var progression_POST205 = 0;
			var vitesse_POST205 = 26;
			var arret_POST205 = 0;
			
			var compteur_POST206 = false;
			var progression_POST206 = 0;
			var vitesse_POST206 = 26;
			var arret_POST206 = 0;
			
			
			
			
			
			
			var compteur_KN101 = false;
			var progression_KN101 = 0;
			var vitesse_KN101 = 26;
			var arret_KN101 = 0;
			
			var compteur_KN102 = false;
			var progression_KN102 = 0;
			var vitesse_KN102 = 26;
			var arret_KN102 = 0;
			
			var compteur_KN103 = false;
			var progression_KN103 = 0;
			var vitesse_KN103 = 26;
			var arret_KN103 = 0;
			
			var compteur_KN104 = false;
			var progression_KN104 = 0;
			var vitesse_KN104 = 26;
			var arret_KN104 = 0;
			
			var compteur_KN105 = false;
			var progression_KN105 = 0;
			var vitesse_KN105 = 26;
			var arret_KN105 = 0;
			
			var compteur_KN106 = false;
			var progression_KN106 = 0;
			var vitesse_KN106 = 26;
			var arret_KN106 = 0;
			
			var compteur_KN201 = false;
			var progression_KN201 = 0;
			var vitesse_KN201 = 26;
			var arret_KN201 = 0;
			
			var compteur_KN202 = false;
			var progression_KN202 = 0;
			var vitesse_KN202 = 26;
			var arret_KN202 = 0;
			
			var compteur_KN203 = false;
			var progression_KN203 = 0;
			var vitesse_KN203 = 26;
			var arret_KN203 = 0;
			
			var compteur_KN204 = false;
			var progression_KN204 = 0;
			var vitesse_KN204 = 26;
			var arret_KN204 = 0;
			
			var compteur_KN205 = false;
			var progression_KN205 = 0;
			var vitesse_KN205 = 26;
			var arret_KN205 = 0;
			
			var compteur_KN206 = false;
			var progression_KN206 = 0;
			var vitesse_KN206 = 26;
			var arret_KN206 = 0;
			
			
			
			
			var progression_voie1 = 0;
			var progression_voie2 = 0;
			var progression_voie3 = 0;
			var progression_voie4 = 0;
			var progression_voie5 = 0;
			var progression_voie6 = 0;
			
			var vitesse_voie1 = 0;
			var vitesse_voie2 = 0;
			var vitesse_voie3 = 0;
			var vitesse_voie4 = 0;
			var vitesse_voie5 = 0;
			var vitesse_voie6 = 0;
			
			var arret_voie1 = 0;
			var arret_voie2 = 0;
			var arret_voie3 = 0;
			var arret_voie4 = 0;
			var arret_voie5 = 0;
			var arret_voie6 = 0;
			
			
			var chariot_voie1_1 = 0;
			var chariot_voie1_2 = 0;
			var chariot_voie1_3 = 0;
			var chariot_voie1_4 = 0;
			var chariot_voie1_5 = 0;
			var chariot_voie1_6 = 0;
			var chariot_voie1_7 = 0;
			var chariot_voie1_8 = 0;
			
			var pos_left_voie1_1 = 0;
			var pos_left_voie1_2 = 0;
			var pos_left_voie1_3 = 0;
			var pos_left_voie1_4 = 0;
			var pos_left_voie1_5 = 0;
			var pos_left_voie1_6 = 0;
			var pos_left_voie1_7 = 0;
			var pos_left_voie1_8 = 0;
			
			var pos_top_voie1_1 = 100;
			var pos_top_voie1_2 = 100;
			var pos_top_voie1_3 = 100;
			var pos_top_voie1_4 = 100;
			var pos_top_voie1_5 = 100;
			var pos_top_voie1_6 = 100;
			var pos_top_voie1_7 = 100;
			var pos_top_voie1_8 = 100;
			
			var chariot_voie2_1 = 0;
			var chariot_voie2_2 = 0;
			var chariot_voie2_3 = 0;
			var chariot_voie2_4 = 0;
			var chariot_voie2_5 = 0;
			var chariot_voie2_6 = 0;
			var chariot_voie2_7 = 0;
			var chariot_voie2_8 = 0;
			
			var pos_left_voie2_1 = 0;
			var pos_left_voie2_2 = 0;
			var pos_left_voie2_3 = 0;
			var pos_left_voie2_4 = 0;
			var pos_left_voie2_5 = 0;
			var pos_left_voie2_6 = 0;
			var pos_left_voie2_7 = 0;
			var pos_left_voie2_8 = 0;
			
			var pos_top_voie2_1 = 100;
			var pos_top_voie2_2 = 100;
			var pos_top_voie2_3 = 100;
			var pos_top_voie2_4 = 100;
			var pos_top_voie2_5 = 100;
			var pos_top_voie2_6 = 100;
			var pos_top_voie2_7 = 100;
			var pos_top_voie2_8 = 100;
			
			var chariot_voie3_1 = 0;
			var chariot_voie3_2 = 0;
			var chariot_voie3_3 = 0;
			var chariot_voie3_4 = 0;
			var chariot_voie3_5 = 0;
			var chariot_voie3_6 = 0;
			var chariot_voie3_7 = 0;
			var chariot_voie3_8 = 0;
			
			var pos_left_voie3_1 = 0;
			var pos_left_voie3_2 = 0;
			var pos_left_voie3_3 = 0;
			var pos_left_voie3_4 = 0;
			var pos_left_voie3_5 = 0;
			var pos_left_voie3_6 = 0;
			var pos_left_voie3_7 = 0;
			var pos_left_voie3_8 = 0;
			
			var pos_top_voie3_1 = 100;
			var pos_top_voie3_2 = 100;
			var pos_top_voie3_3 = 100;
			var pos_top_voie3_4 = 100;
			var pos_top_voie3_5 = 100;
			var pos_top_voie3_6 = 100;
			var pos_top_voie3_7 = 100;
			var pos_top_voie3_8 = 100;
			
			var chariot_voie4_1 = 0;
			var chariot_voie4_2 = 0;
			var chariot_voie4_3 = 0;
			var chariot_voie4_4 = 0;
			var chariot_voie4_5 = 0;
			var chariot_voie4_6 = 0;
			var chariot_voie4_7 = 0;
			var chariot_voie4_8 = 0;
			
			var pos_left_voie4_1 = 0;
			var pos_left_voie4_2 = 0;
			var pos_left_voie4_3 = 0;
			var pos_left_voie4_4 = 0;
			var pos_left_voie4_5 = 0;
			var pos_left_voie4_6 = 0;
			var pos_left_voie4_7 = 0;
			var pos_left_voie4_8 = 0;
			
			var pos_top_voie4_1 = 100;
			var pos_top_voie4_2 = 100;
			var pos_top_voie4_3 = 100;
			var pos_top_voie4_4 = 100;
			var pos_top_voie4_5 = 100;
			var pos_top_voie4_6 = 100;
			var pos_top_voie4_7 = 100;
			var pos_top_voie4_8 = 100;
			
			var chariot_voie5_1 = 0;
			var chariot_voie5_2 = 0;
			var chariot_voie5_3 = 0;
			var chariot_voie5_4 = 0;
			var chariot_voie5_5 = 0;
			var chariot_voie5_6 = 0;
			var chariot_voie5_7 = 0;
			var chariot_voie5_8 = 0;
			
			var pos_left_voie5_1 = 0;
			var pos_left_voie5_2 = 0;
			var pos_left_voie5_3 = 0;
			var pos_left_voie5_4 = 0;
			var pos_left_voie5_5 = 0;
			var pos_left_voie5_6 = 0;
			var pos_left_voie5_7 = 0;
			var pos_left_voie5_8 = 0;
			
			var pos_top_voie5_1 = 100;
			var pos_top_voie5_2 = 100;
			var pos_top_voie5_3 = 100;
			var pos_top_voie5_4 = 100;
			var pos_top_voie5_5 = 100;
			var pos_top_voie5_6 = 100;
			var pos_top_voie5_7 = 100;
			var pos_top_voie5_8 = 100;
			
			var chariot_voie6_1 = 0;
			var chariot_voie6_2 = 0;
			var chariot_voie6_3 = 0;
			var chariot_voie6_4 = 0;
			var chariot_voie6_5 = 0;
			var chariot_voie6_6 = 0;
			var chariot_voie6_7 = 0;
			var chariot_voie6_8 = 0;
			
			var pos_left_voie6_1 = 0;
			var pos_left_voie6_2 = 0;
			var pos_left_voie6_3 = 0;
			var pos_left_voie6_4 = 0;
			var pos_left_voie6_5 = 0;
			var pos_left_voie6_6 = 0;
			var pos_left_voie6_7 = 0;
			var pos_left_voie6_8 = 0;
			
			var pos_top_voie6_1 = 100;
			var pos_top_voie6_2 = 100;
			var pos_top_voie6_3 = 100;
			var pos_top_voie6_4 = 100;
			var pos_top_voie6_5 = 100;
			var pos_top_voie6_6 = 100;
			var pos_top_voie6_7 = 100;
			var pos_top_voie6_8 = 100;
			
			
			var arret_oui_voie1 = false;
			var arret_oui_voie2 = false;
			var arret_oui_voie3 = false;
			var arret_oui_voie4 = false;
			var arret_oui_voie5 = false;
			var arret_oui_voie6 = false;
			
			var correction_arret_voie1 = 0;
			var correction_arret_voie2 = 0;
			var correction_arret_voie3 = 0;
			var correction_arret_voie4 = 0;
			var correction_arret_voie5 = 0;
			var correction_arret_voie6 = 0;
			
			var x_voie1 = 0; // variable utilisée
			var x_voie2 = 0;
			var x_voie3 = 0;
			var x_voie4 = 0;
			var x_voie5 = 0;
			var x_voie6 = 0;
			
			
			
			var le_texte = 0;
			var le_client = 0;
			var min, max;
			var min2, max2;
			var commentaire_compteur = -400;
			var couleur = 'bleu';
			var nom_client = 'Alexia';
			
			var secondes_pn = 600;
			
			var personnage_compteur_voie1 = 0;
			var personnage_compteur_voie2 = 0;
			var personnage_compteur_voie3 = 0;
			var personnage_compteur_voie4 = 0;
			var personnage_compteur_voie5 = 0;
			
			var voie1 = false;
			var voie2 = false;
			var voie3 = false;
			var voie4 = false;
			var voie5 = false;
			var voie6 = false;
			
			var personnage_voie1 = new Array();
			
			
			var uzz = 0; // utilisée
			
			

			
			