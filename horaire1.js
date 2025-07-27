function horaire1() {
	
// version du 19.04.25

document.getElementById("une_image_tableau_1").src = "image/affichage/tableau_bleu.png";
document.getElementById("une_image_tableau_2").src = "image/affichage/tableau_bleu.png";
document.getElementById("une_image_tableau_3").src = "image/affichage/tableau_bleu.png";

document.getElementById("une_image_tableau_4").src = "image/affichage/tableau_bleu.png";
document.getElementById("une_image_tableau_5").src = "image/affichage/tableau_bleu.png";
document.getElementById("une_image_tableau_6").src = "image/affichage/tableau_bleu.png";

document.getElementById("une_image_tableau_7").src = "image/affichage/tableau_bleu.png";
document.getElementById("une_image_tableau_8").src = "image/affichage/tableau_bleu.png";
document.getElementById("une_image_tableau_9").src = "image/affichage/tableau_bleu.png";

document.getElementById("tableau1").innerHTML = "";
document.getElementById("tableau2").innerHTML = "";
document.getElementById("tableau3").innerHTML = "";

document.getElementById("tableau4").innerHTML = "";
document.getElementById("tableau5").innerHTML = "";
document.getElementById("tableau6").innerHTML = "";

document.getElementById("tableau7").innerHTML = "";
document.getElementById("tableau8").innerHTML = "";
document.getElementById("tableau9").innerHTML = "";

date2 = new Date();
heure2 = date2.getHours();
heure3 = heure2 +1;

dynamique = 0;
numero_dynamique = 101;

rapide = 1;
moyen = 2;
lent = 2;



// MARC  Lausanne 418 / 1 min / vu
t418 = Math.floor(train418 / 60); if ( train_depart418 == 'parti' || train_depart418 == 'nonparti') { train418++; }
if (les_minutes == 57 || les_minutes == 58 || les_minutes == 59 || les_minutes == 0 || affiche418 == true) {
dynamique++; affiche418 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";

if (les_minutes == 57 || les_minutes == 58 || les_minutes == 59) {
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure3+'h01 MAR '+numero_dynamique+' Genève --> Lausanne '; 
}
if (les_minutes == 0) {
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h01 MAR '+numero_dynamique+' Genève --> Lausanne ';
}
}

if (t418 >= lent && affiche418 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h01 MAR '+numero_dynamique+' Genève --> Lausanne <span style="color: orange">+'+t418+' min</span> '; }
if (t418 > 5 && affiche418 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h01 MAR '+numero_dynamique+' Genève --> Lausanne <span style="color: red">+'+t418+'  min</span> '; } 

if (les_minutes == 1 && les_secondes == 1 || train_depart418 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "MARC";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its50[6] = 418;
train_depart418 = 'parti'; } else { train_depart418 = 'nonparti'; }	
}

if ( train2_its103[6] == 418 || train2_its18[6] == 418 || train2_its37[6] == 418 || train2_its56[6] == 418 || train2_its74[6] == 418  || train2_its4[6] == 418) {
if ( affiche418 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t418 = 0; train418 = 0; train_depart418 = ''; affiche418 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 418 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 418 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// S1  Lausanne --> Yverdon / 102 / 2 min / vu
t102 = Math.floor(train102 / 60); if ( train_depart102 == 'parti' || train_depart102 == 'nonparti') { train102++; }
if (les_minutes == 57 || les_minutes == 58 || les_minutes == 59 || les_minutes == 0 || les_minutes == 1 || affiche102 == true) {
dynamique++; affiche102 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";

if (les_minutes == 57 || les_minutes == 58 || les_minutes == 59) {
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure3+'h02 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay'; 
}
if (les_minutes == 0 || les_minutes == 1) {
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h02 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay '; 
}
}

if (t102 >= moyen && affiche102 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h02 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: orange">+'+t102+' min</span> '; }
if (t102 > 5 && affiche102 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h02 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: red">+'+t102+' min</span> '; } 

if (les_minutes == 2 && les_secondes == 1 || train_depart102 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "S";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'REG' +numero_dynamique+' Yverdon'; train2_its61[6] = 102;
train_depart102 = 'parti'; } else { train_depart102 = 'nonparti'; }	
}

if ( train2_its102[6] == 102 || train2_its111[6] == 102 || train2_its34[6] == 102 || train2_its55[6] == 102 || train2_its73[6] == 102 || train2_its23[6] == 102 ) {
if ( affiche102 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t102 = 0; train102 = 0; train_depart102 = ''; affiche102 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 102 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 102 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Genève    / 320 / 3 min / vu
t320 = Math.floor(train320 / 60); if ( train_depart320 == 'parti' || train_depart320 == 'nonparti') { train320++; }
if (les_minutes == 0 || les_minutes == 1 || les_minutes == 2 || affiche320 == true) {

dynamique++; affiche320 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h03 MAR '+numero_dynamique+' Lausanne --> Genève '; }
if (t320 >= lent && affiche320 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h03 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: orange">+'+t320+' min</span> '; }
if (t320 > 5 && affiche320 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h03 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: red">+'+t320+' min</span> '; } 

if (les_minutes == 3 && les_secondes == 1 || train_depart320 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "MARA";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 2; train2_its61[5] = 'MAR '+numero_dynamique+' Genève'; train2_its61[6] = 320;
train_depart320 = 'parti'; } else { train_depart320 = 'nonparti'; }	
}

if ( train2_its102[6] == 320 || train2_its111[6] == 320 || train2_its34[6] == 320 || train2_its55[6] == 320 || train2_its73[6] == 320 || train2_its23[6] == 320 ) {
if ( affiche320 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t320 = 0; train320 = 0; train_depart320 = ''; affiche320 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 320 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 320 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// RE  Lausanne 107 / 4 min / vu
t107 = Math.floor(train107 / 60); if ( train_depart107 == 'parti' || train_depart107 == 'nonparti') { train107++; }
if (les_minutes == 0 || les_minutes == 1 || les_minutes == 2 || les_minutes == 2 || affiche107 == true) {
dynamique++; affiche107 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h04 RE '+numero_dynamique+' Genève --> Lausanne Romont Lucerne '; }
if (t107 >= moyen && affiche107 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h04 RE '+numero_dynamique+' Genève --> Lausanne Romont Lucerne <span style="color: orange">+'+t107+' min</span> '; }
if (t107 > 5 && affiche107 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h04 RE '+numero_dynamique+' Genève --> Lausanne Romont Lucerne <span style="color: red">+'+t107+' min</span> '; } 

if (les_minutes == 3 && les_secondes == 1 || train_depart107 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "RE";  train2_its50[1] = 1;  train2_its50[2] = 302;  train2_its50[3] = 1;  train2_its50[4] = 1; train2_its50[5] = 'RE '+numero_dynamique+' Lausanne'; train2_its50[6] = 107;
train_depart107 = 'parti'; } else { train_depart107 = 'nonparti'; }	
}

if ( train2_its103[6] == 107 || train2_its18[6] == 107 || train2_its37[6] == 107 || train2_its56[6] == 107 || train2_its74[6] == 107  || train2_its4[6] == 107) {
if ( affiche107 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t107 = 0; train107 = 0; train_depart107 = ''; affiche107 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'RE 107 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'RE 107 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IR2  Genève-Lausanne 601 / 5 min
t601 = Math.floor(train601 / 60); if ( train_depart601 == 'parti' || train_depart601 == 'nonparti') { train601++; }
if (les_minutes == 1 || les_minutes == 2 || les_minutes == 3 || les_minutes == 4 || affiche601 == true) {
dynamique++; affiche601 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h05 IR2 '+numero_dynamique+' Genève --> Lausanne Romont Lucerne '; }
if (t601 >= rapide && affiche601 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h05 IR2 '+numero_dynamique+' Genève --> Lausanne Romont Lucerne <span style="color: orange">+'+t601+' min</span> '; }
if (t601 > 5 && affiche601 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h05 IR2 '+numero_dynamique+' Genève --> Lausanne Romont Lucerne <span style="color: red">+'+t601+' min</span> '; } 

if (les_minutes == 5 && les_secondes == 1 || train_depart601 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "IR2";  train2_its50[1] = 1;  train2_its50[2] = 302;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'IR2 '+numero_dynamique+' Lausanne'; train2_its50[6] = 601;
train_depart601 = 'parti'; } else { train_depart601 = 'nonparti'; }	
}

if ( train2_its103[6] == 601 || train2_its18[6] == 601 || train2_its37[6] == 601 || train2_its56[6] == 601 || train2_its74[6] == 601  || train2_its4[6] == 601) {
if ( affiche601 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t601 = 0; train601 = 0; train_depart601 = ''; affiche601 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'IR2 601 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR2 601 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IR3  Lausanne --> Yverdon Neuchâtel Bienne / 611 / 4 min
t611 = Math.floor(train611 / 60); if ( train_depart611 == 'parti' || train_depart611 == 'nonparti') { train611++; }
if (les_minutes == 0 || les_minutes == 1 || les_minutes == 2 || les_minutes == 3 || affiche611 == true) {
dynamique++; affiche611 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h04 IR3 '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne  '; }
if (t611 >= moyen && affiche611 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h04 IR3 '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne <span style="color: orange">+'+t611+' min</span> '; }
if (t611 > 5 && affiche611 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h04 IR3 '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne <span style="color: red">+'+t611+' min</span> '; } 


if (les_minutes == 4 && les_secondes == 1 || train_depart611 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "IR3";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 0;  train2_its77[4] = 3; train2_its77[5] = 'IR3 '+numero_dynamique+' Yverdon'; train2_its77[6] = 611;
train_depart611 = 'parti'; } else { train_depart611 = 'nonparti'; }	
}

if ( train2_its102[6] == 611 || train2_its111[6] == 611 || train2_its34[6] == 611 || train2_its55[6] == 611 || train2_its73[6] == 611 || train2_its23[6] == 611 ) {
if ( affiche611 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t611 = 0; train611 = 0; train_depart611 = ''; affiche611 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'IR3 611 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR3 611 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S1  Lausanne --> Yverdon Cossonay Chavornay / 511 / 4 min
t511 = Math.floor(train511 / 60); if ( train_depart511 == 'parti' || train_depart511 == 'nonparti') { train511++; }
if (les_minutes == 0 || les_minutes == 1 || les_minutes == 2 || les_minutes == 3 || affiche511 == true) {
dynamique++; affiche511 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h04 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay  '; }
if (t511 >= moyen && affiche511 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h04 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: orange">+'+t511+' min</span> '; }
if (t511 > 5 && affiche511 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h04 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: red">+'+t511+' min</span> '; } 


if (les_minutes == 4 && les_secondes == 1 || train_depart511 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "S";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'REG '+numero_dynamique+' Yverdon'; train2_its61[6] = 511;
train_depart511 = 'parti'; } else { train_depart511 = 'nonparti'; }	
}

if ( train2_its102[6] == 511 || train2_its111[6] == 511 || train2_its34[6] == 511 || train2_its55[6] == 511 || train2_its73[6] == 511 || train2_its23[6] == 511 ) {
if ( affiche511 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t511 = 0; train511 = 0; train_depart511 = ''; affiche511 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 511 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 511 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// ICN  Lausanne 416 / 5 min / vu
t416 = Math.floor(train416 / 60); if ( train_depart416 == 'parti' || train_depart416 == 'nonparti') { train416++; }
if (les_minutes == 1 || les_minutes == 2 || les_minutes == 3 || les_minutes == 4 || affiche416 == true) {
dynamique++; affiche416 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h05 ICN '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t416 >= rapide && affiche416 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h05 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t416+' min</span> '; }
if (t416 > 5 && affiche416 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h05 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t416+' min</span> '; } 


if (les_minutes == 5 && les_secondes == 1 || train_depart416 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "ICN";  train2_its12[1] = 1;  train2_its12[2] = 35;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'ICN '+numero_dynamique+' Lausanne'; train2_its12[6] = 416;
train_depart416 = 'parti'; } else { train_depart416 = 'nonparti'; }	
}

if ( train2_its103[6] == 416 || train2_its18[6] == 416 || train2_its37[6] == 416 || train2_its56[6] == 416 || train2_its74[6] == 416 || train2_its4[6] == 416 ) {
if ( affiche416 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t416 = 0; train416 = 0; train_depart416 = ''; affiche416 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'ICN 416 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'ICN 416 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MARB  Lausanne 501 / 6 min / vu
t501 = Math.floor(train501 / 60); if ( train_depart501 == 'parti' || train_depart501 == 'nonparti') { train501++; }
if (les_minutes == 1 || les_minutes == 2 || les_minutes == 3 || les_minutes == 4 || les_minutes == 5 || affiche501 == true) {
dynamique++; affiche501 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h06 MAR '+numero_dynamique+' Genève --> Lausanne '; }
if (t501 >= lent && affiche501 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h06 MAR '+numero_dynamique+' Genève --> Lausanne <span style="color: orange">+'+t501+' min</span> '; }
if (t501 > 5 && affiche501 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h06 MAR '+numero_dynamique+' Genève --> Lausanne <span style="color: red">+'+t501+' min</span> '; }

if (les_minutes == 6 &&  les_secondes == 1  || train_depart501 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "MARB";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its50[6] = 501;
train_depart501 = 'parti'; } else { train_depart501 = 'nonparti'; }	
}

if ( train2_its103[6] == 501 || train2_its18[6] == 501 || train2_its37[6] == 501 || train2_its56[6] == 501 || train2_its74[6] == 501  || train2_its4[6] == 501) {
if ( affiche501 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t501 = 0; train501 = 0; train_depart501 = ''; affiche501 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 501 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 501 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne 512 / 6 min / 
t512 = Math.floor(train512 / 60); if ( train_depart512 == 'parti' || train_depart512 == 'nonparti') { train512++; }
if (les_minutes == 1 || les_minutes == 2 || les_minutes == 3 || les_minutes == 4 || les_minutes == 5 || affiche512 == true) {
dynamique++; affiche512 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h06 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle '; }
if (t512 >= moyen && affiche512 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h06 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: orange">+'+t512+' min</span> '; }
if (t512 > 5 && affiche512 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h06 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: red">+'+t512+' min</span> '; } 

if (les_minutes == 6 && les_secondes == 1 || train_depart512 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "S";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 1;  train2_its50[4] = 1; train2_its50[5] = 'REG '+numero_dynamique+' Lausanne'; train2_its50[6] = 512;
train_depart512 = 'parti'; } else { train_depart512 = 'nonparti'; }	
}

if ( train2_its103[6] == 512 || train2_its18[6] == 512 || train2_its37[6] == 512 || train2_its56[6] == 512 || train2_its74[6] == 512 || train2_its4[6] == 512 ) {
if ( affiche512 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t512 = 0; train512 = 0; train_depart512 = ''; affiche512 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'REG 512 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 512 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IR  Lausanne --> Genève     510 / 7 min / vu
t510 = Math.floor(train510 / 60); if ( train_depart510 == 'parti' || train_depart510 == 'nonparti') { train510++; }
if (les_minutes == 2 || les_minutes == 3 || les_minutes == 4 || les_minutes == 5 || les_minutes == 6 || affiche510 == true) {
dynamique++; affiche510 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h07 IR '+numero_dynamique+' Lausanne --> Genève Morges Nyon '; }
if (t510 >= rapide && affiche510 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h07 IR '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: orange">+'+t510+' min</span> '; }
if (t510 > 5 && affiche510 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h07 IR '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: red">+'+t510+' min</span> '; } 


if (les_minutes == 7 && les_secondes == 1 || train_depart510 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "IRV";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 0;  train2_its77[4] = 2; train2_its77[5] = 'IR '+numero_dynamique+' Genève'; train2_its77[6] = 510;
train_depart510 = 'parti'; } else { train_depart510 = 'nonparti'; }	
}
if ( train2_its102[6] == 510 || train2_its111[6] == 510 || train2_its34[6] == 510 || train2_its55[6] == 510 || train2_its73[6] == 510 || train2_its23[6] == 510 ) {
if ( affiche510 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t510 = 0; train510 = 0; train_depart510 = ''; affiche510 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'IR 510 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR 510 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne 414 / 7 min / vu
t414 = Math.floor(train414 / 60); if ( train_depart414 == 'parti' || train_depart414 == 'nonparti') { train414++; }
if (les_minutes == 2 || les_minutes == 3 || les_minutes == 4 || les_minutes == 5 || les_minutes == 6 || affiche414 == true) {
dynamique++; affiche414 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h07 MAR '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t414 >= lent && affiche414 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h07 MAR '+numero_dynamique+' Yverdon --> Lausanne  <span style="color: orange">+'+t414+' min</span> '; }
if (t414 > 5 && affiche414 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h07 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t414+' min</span> '; } 


if (les_minutes == 7 && les_secondes == 1 || train_depart414 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "POST";  train2_its12[1] = 1;  train2_its12[2] = 33;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 414;
train_depart414 = 'parti'; le_nombre_de_train++;} else { train_depart414 = 'nonparti'; }	
}

if ( train2_its103[6] == 414 || train2_its18[6] == 414 || train2_its37[6] == 414 || train2_its56[6] == 414 || train2_its74[6] == 414 || train2_its4[6] == 414 ) {
if ( affiche414 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t414 = 0; train414 = 0; train_depart414 = ''; affiche414 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 414 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 414 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Genève    / 412 / 8 min / vu
t412 = Math.floor(train412 / 60); if ( train_depart412 == 'parti' || train_depart412 == 'nonparti') { train412++; }
if (les_minutes == 4 || les_minutes == 5 || les_minutes == 6 || les_minutes == 7 || affiche412 == true) {
dynamique++; affiche412 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h08 MAR '+numero_dynamique+' Lausanne --> Genève '; }
if (t412 >= lent && affiche412 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h08 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: orange">+'+t412+' min</span> '; }
if (t412 > 5 && affiche412 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h08 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: red">+'+t412+' min</span> '; } 


if (les_minutes == 8 && les_secondes == 1 || train_depart412 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "MARF";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 2; train2_its61[5] = 'MAR '+numero_dynamique+' Genève'; train2_its61[6] = 412;
train_depart412 = 'parti'; } else { train_depart412 = 'nonparti'; }	
}

if ( train2_its102[6] == 412 || train2_its111[6] == 412 || train2_its34[6] == 412 || train2_its55[6] == 412 || train2_its73[6] == 412 || train2_its23[6] == 412 ) {
if ( affiche412 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t412 = 0; train412 = 0; train_depart412 = ''; affiche412 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, '412 MAR Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 412 Genève');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// LOC  Lausanne 422 / 8 min / vu
t422 = Math.floor(train422 / 60); if ( train_depart422 == 'parti' || train_depart422 == 'nonparti') { train422++; }
if (les_minutes == 3 || les_minutes == 4 || les_minutes == 5 || les_minutes == 6 || les_minutes == 7 || affiche422 == true) {
dynamique++; affiche422 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h08 MAR '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t422 >= lent && affiche422 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h08 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t422+' min</span> '; }
if (t422 > 5 && affiche422 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h08 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t422+' min</span> '; }


if (les_minutes == 8 && les_secondes == 1 || train_depart422 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "LOC";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 422;
train_depart422 = 'parti'; } else { train_depart422 = 'nonparti'; }	
}

if ( train2_its103[6] == 422 || train2_its18[6] == 422 || train2_its37[6] == 422 || train2_its56[6] == 422 || train2_its74[6] == 422 || train2_its4[6] == 422) {
if ( affiche422 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t422 = 0; train422 = 0; train_depart422 = ''; affiche422 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 422 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 422 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// 9 minutes

// S3 / Yverdon 502 / 9 min / vu
t502 = Math.floor(train502 / 60); if ( train_depart502 == 'parti' || train_depart502 == 'nonparti') { train502++; }
if (les_minutes == 4 || les_minutes == 5 || les_minutes == 6 || les_minutes == 7 || les_minutes == 8 || affiche502 == true) {
dynamique++; affiche502 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h09 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay'; }
if (t502 >= moyen && affiche502 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h09 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: orange">+'+t502+' min</span> '; }
if (t502 > 5 && affiche502 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h09 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: red">+'+t502+' min</span> '; } 


if (les_minutes == 9 && les_secondes == 1 || train_depart502 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "S";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'REG '+numero_dynamique+' Yverdon'; train2_its61[6] = 502;
train_depart502 = 'parti'; } else { train_depart502 = 'nonparti'; }	
}

if ( train2_its102[6] == 502 || train2_its111[6] == 502 || train2_its34[6] == 502 || train2_its55[6] == 502 || train2_its73[6] == 502 || train2_its23[6] == 502 ) {
if ( affiche502 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t502 = 0; train502 = 0; train_depart502 = ''; affiche502 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 502 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 502 Yverdon');
le_nombre_de_train++; 
}
}


numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// 10 min


// IR  Lausanne Fribourg Bern 211 / 10 min / vu
t211 = Math.floor(train211 / 60); if ( train_depart211 == 'parti' || train_depart211 == 'nonparti') { train211++; }
if (les_minutes == 5 || les_minutes == 6 || les_minutes == 7 || les_minutes == 8 || les_minutes == 9 || affiche211 == true) {
dynamique++; affiche211 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h10 IR '+numero_dynamique+' Genève --> Lausanne Fribourg Bern '; }
if (t211 >= rapide && affiche211 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h10 IR '+numero_dynamique+' Genève --> Lausanne Fribourg Bern <span style="color: orange">+'+t211+' min</span> '; }
if (t211 > 5 && affiche211 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h10 IR '+numero_dynamique+' Genève --> Lausanne Fribourg Bern <span style="color: red">+'+t211+' min</span> '; } 


if (les_minutes == 10 && les_secondes == 1 || train_depart211 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "IRVC";  train2_its50[1] = 1;  train2_its50[2] = 301;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'IR '+numero_dynamique+' Lausanne'; train2_its50[6] = 211;
train_depart211 = 'parti'; } else { train_depart211 = 'nonparti'; }	
}

if ( train2_its103[6] == 211 || train2_its18[6] == 211 || train2_its37[6] == 211 || train2_its56[6] == 211 || train2_its74[6] == 211 || train2_its4[6] == 211 ) {
if ( affiche211 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t211 = 0; train211 = 0; train_depart211 = ''; affiche211 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'IR 211 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR 211 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Yverdon / 413 / 10 min / vu
t413 = Math.floor(train413 / 60); if ( train_depart413 == 'parti' || train_depart413 == 'nonparti') { train413++; }
if (les_minutes == 5 || les_minutes == 6 || les_minutes == 7 || les_minutes == 8 || les_minutes == 9 || affiche413 == true) {
dynamique++; affiche413 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h10 MAR '+numero_dynamique+' Lausanne --> Yverdon '; }
if (t413 >= lent && affiche413 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h10 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: orange">+'+t413+' min</span> '; }
if (t413 > 5 && affiche413 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h10 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: red">+'+t413+' min</span> '; }

if (les_minutes == 10 && les_secondes == 1 || train_depart413 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "KN";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 3; train2_its61[5] = 'MAR '+numero_dynamique+' Yverdon'; train2_its61[6] = 413;
train_depart413 = 'parti'; } else { train_depart413 = 'nonparti'; }	
}

if ( train2_its102[6] == 413 || train2_its111[6] == 413 || train2_its34[6] == 413 || train2_its55[6] == 413 || train2_its73[6] == 413 || train2_its23[6] == 413 ) {
if ( affiche413 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t413 = 0; train413 = 0; train_depart413 = ''; affiche413 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 413 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 413 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}




// S1  Lausanne --> Yverdon Cossonay Chavornay / 202 / 11 min / vu
t202 = Math.floor(train202 / 60); if ( train_depart202 == 'parti' || train_depart202 == 'nonparti') { train202++; }
if (les_minutes == 6 || les_minutes == 7 || les_minutes == 8 || les_minutes == 9 || les_minutes == 10 || affiche202 == true) {
dynamique++; affiche202 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h11 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay  '; }
if (t202 >= moyen && affiche202 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h11 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: orange">+'+t202+' min</span> '; }
if (t202 > 5 && affiche202 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h11 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: red">+'+t202+' min</span> '; } 


if (les_minutes == 11 && les_secondes == 1 || train_depart202 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "S";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'REG '+numero_dynamique+' Yverdon'; train2_its61[6] = 202;
train_depart202 = 'parti'; } else { train_depart202 = 'nonparti'; }	
}

if ( train2_its102[6] == 202 || train2_its111[6] == 202 || train2_its34[6] == 202 || train2_its55[6] == 202 || train2_its73[6] == 202 || train2_its23[6] == 202 ) {
if ( affiche202 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t202 = 0; train202 = 0; train_depart202 = ''; affiche202 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 202 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 202 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IC  Lausanne / 12 min / vu
t301 = Math.floor(train301 / 60); if ( train_depart301 == 'parti' || train_depart301 == 'nonparti') { train301++; }
if (les_minutes == 7 || les_minutes == 8 || les_minutes == 9 || les_minutes == 10 || les_minutes == 11 || affiche301 == true) {
dynamique++; affiche301 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h12 IC '+numero_dynamique+' Genève --> Lausanne Bern Zurich '; }
if (t301 >= rapide && affiche301 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h12 IC '+numero_dynamique+' Genève --> Lausanne Bern Zurich <span style="color: orange">+'+t301+' min</span> '; }
if (t301 > 5 && affiche301 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h12 IC '+numero_dynamique+' Genève --> Lausanne Bern Zurich <span style="color: red">+'+t301+' min</span> '; } 


if (les_minutes == 12 && les_secondes == 1 || train_depart301 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "ICZ";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'IC '+numero_dynamique+' Lausanne'; train2_its50[6] = 301;
train_depart301 = 'parti'; } else { train_depart301 = 'nonparti'; }	
}

if ( train2_its103[6] == 301 || train2_its18[6] == 301 || train2_its37[6] == 301 || train2_its56[6] == 301 || train2_its74[6] == 301 || train2_its4[6] == 301 ) {
if ( affiche301 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t301 = 0; train301 = 0; train_depart301 = ''; affiche301 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'IC 301 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IC 301 Lausanne');
le_nombre_de_train++; 
}
}


numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// INT Lausanne  410 / 13 min / vu
t410 = Math.floor(train410 / 60); if ( train_depart410 == 'parti' || train_depart410 == 'nonparti') { train410++; }
if (les_minutes == 9 || les_minutes == 10 || les_minutes == 11 || les_minutes == 12 || affiche410 == true) {
dynamique++; affiche410 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h13 INT '+numero_dynamique+' Genève --> Lausanne Montreux Sion '; }
if (t410 >= rapide && affiche410 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h13 INT '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: orange">+'+t410+' min</span> '; }
if (t410 > 5 && affiche410 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h13 INT '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: red">+'+t410+' min</span> '; } 


if (les_minutes == 13 && les_secondes == 1 || train_depart410 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "IRVC";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'INT '+numero_dynamique+' Lausanne'; train2_its50[6] = 410;
train_depart410 = 'parti'; } else { train_depart410 = 'nonparti'; }	
}

if ( train2_its103[6] == 410 || train2_its18[6] == 410 || train2_its37[6] == 410 || train2_its56[6] == 410 || train2_its74[6] == 410 || train2_its4[6] == 410 ) {
if ( affiche410 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t410 = 0; train410 = 0; train_depart410 = ''; affiche410 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, '410 INT Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'INT 410 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// IR  Lausanne --> Genève     103 / 14 min / vu
t103 = Math.floor(train103 / 60); if ( train_depart103 == 'parti' || train_depart103 == 'nonparti') { train103++; }
if (les_minutes == 9 || les_minutes == 10 || les_minutes == 11 || les_minutes == 12 || les_minutes == 13 || affiche103 == true) {
dynamique++; affiche103 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h14 IR '+numero_dynamique+' Lausanne --> Genève Morges Nyon '; }
if (t103 >= rapide && affiche103 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h14 IR '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: orange">+'+t103+' min</span> '; }
if (t103 > 5 && affiche103 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h14 IR '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: red">+'+t103+' min</span> '; } 


if (les_minutes == 14 && les_secondes == 1 || train_depart103 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "IRV";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 0;  train2_its77[4] = 2; train2_its77[5] = 'IR '+numero_dynamique+' Genève'; train2_its77[6] = 103;
train_depart103 = 'parti'; } else { train_depart103 = 'nonparti'; }	
}
if ( train2_its102[6] == 103 || train2_its111[6] == 103 || train2_its34[6] == 103 || train2_its55[6] == 103 || train2_its73[6] == 103 || train2_its23[6] == 103 ) {
if ( affiche103 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t103 = 0; train103 = 0; train_depart103 = ''; affiche103 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'IR 103 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR 103 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// TGV  Lausanne 207 / 14 min / vu
t207 = Math.floor(train207 / 60); if ( train_depart207 == 'parti' || train_depart207 == 'nonparti') { train207++; }
if (les_minutes == 9 || les_minutes == 10 || les_minutes == 11 || les_minutes == 12 || les_minutes == 13 || affiche207 == true) {
dynamique++; affiche207 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h14 TGV '+numero_dynamique+' Yverdon --> Lausanne'; }
if (t207 >= rapide && affiche207 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h14 TGV '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t207+' min</span> '; }
if (t207 > 5 && affiche207 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h14 TGV '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t207+' min</span> '; } 


if (les_minutes == 14 && les_secondes == 1 || train_depart207 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "TGV";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'TGV '+numero_dynamique+' Lausanne'; train2_its12[6] = 207;
train_depart207 = 'parti'; } else { train_depart207 = 'nonparti'; }	
}

if ( train2_its103[6] == 207 || train2_its18[6] == 207 || train2_its37[6] == 207 || train2_its56[6] == 207 || train2_its74[6] == 207 || train2_its4[6] == 207 ) {
if ( affiche207 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t207 = 0; train207 = 0; train_depart207 = ''; affiche207 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'TGV 207 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'TGV 207 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// S1  Yverdon / 406 / 15 min / vu
t406 = Math.floor(train406 / 60); if ( train_depart406 == 'parti' || train_depart406 == 'nonparti') { train406++; }
if (les_minutes == 10 || les_minutes == 11 || les_minutes == 12 || les_minutes == 13 || les_minutes == 14 || affiche406 == true) {
dynamique++; affiche406 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h15 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay'; }
if (t406 >= moyen && affiche406 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h15 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: orange">+'+t406+' min</span> '; }
if (t406 > 5 && affiche406 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h15 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: red">+'+t406+' min</span> '; } 


if (les_minutes == 15 && les_secondes == 1 || train_depart406 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "S";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'REG '+numero_dynamique+' Yverdon'; train2_its61[6] = 406;
train_depart406 = 'parti'; } else { train_depart406 = 'nonparti'; }	
}

if ( train2_its102[6] == 406 || train2_its111[6] == 406 || train2_its34[6] == 406 || train2_its55[6] == 406 || train2_its73[6] == 406 || train2_its23[6] == 406 ) {
if ( affiche406 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t406 = 0; train406 = 0; train_depart406 = ''; affiche406 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 406 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 406 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne --> Genève 503 / 16 min vu
t503 = Math.floor(train503 / 60); if ( train_depart503 == 'parti' || train_depart503 == 'nonparti') { train503++; }
if (les_minutes == 11 || les_minutes == 12 || les_minutes == 13 || les_minutes == 14 || les_minutes == 15 || affiche503 == true) {
dynamique++; affiche503 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h16 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand'; }
if (t503 >= moyen && affiche503 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h16 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand <span style="color: orange">+'+t503+' min</span> '; }
if (t503 > 5 && affiche503 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h16 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand <span style="color: red">+'+t503+' min</span> '; } 


if (les_minutes == 16 && les_secondes == 1 || train_depart503 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "D";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 1;  train2_its77[4] = 2; train2_its77[5] = 'REG '+numero_dynamique+' Genève'; train2_its77[6] = 503;
train_depart503 = 'parti'; } else { train_depart503 = 'nonparti'; }	
}

if ( train2_its102[6] == 503 || train2_its111[6] == 503 || train2_its34[6] == 503 || train2_its55[6] == 503 || train2_its73[6] == 503 || train2_its23[6] == 503 ) {
if ( affiche503 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t503 = 0; train503 = 0; train_depart503 = ''; affiche503 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 503 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 503 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// SP  Lausanne 404 / 16 min
t404 = Math.floor(train404 / 60); if ( train_depart404 == 'parti' || train_depart404 == 'nonparti') { train404++; }
if (les_minutes == 13 || les_minutes == 13 || les_minutes == 13 || les_minutes == 14 || les_minutes == 15 || affiche404 == true) {
dynamique++; affiche404 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h16 SP '+numero_dynamique+' Genève --> Lausanne - train spécial '; }
if (t404 >= rapide && affiche404 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h16 SP '+numero_dynamique+' Genève --> Lausanne - train spécial <span style="color: orange">+'+t404+' min</span> '; }
if (t404 > 5 && affiche404 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h16 SP '+numero_dynamique+' Genève --> Lausanne - train spécial <span style="color: red">+'+t404+' min</span> '; } 


if (les_minutes == 16 && les_secondes == 1 || train_depart404 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "SP";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'SP '+numero_dynamique+' Lausanne'; train2_its50[6] = 404;
train_depart404 = 'parti'; } else { train_depart404 = 'nonparti'; }	
}

if ( train2_its103[6] == 404 || train2_its18[6] == 404 || train2_its37[6] == 404 || train2_its56[6] == 404 || train2_its74[6] == 404 || train2_its4[6] == 404 ) {
if ( affiche404 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t404 = 0; train404 = 0; train_depart404 = ''; affiche404 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'SP 404 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'SP 404 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Genève    / 420 / 17 min /
t420 = Math.floor(train420 / 60); if ( train_depart420 == 'parti' || train_depart420 == 'nonparti') { train420++; }
if (les_minutes == 13 || les_minutes == 14 || les_minutes == 15 || les_minutes == 16 || affiche420 == true) {
dynamique++; affiche420 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h17 MAR '+numero_dynamique+' Lausanne --> Genève '; }
if (t420 >= lent && affiche420 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h17 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: orange">+'+t420+' min</span> '; }
if (t420 > 5 && affiche420 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h17 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: red">+'+t420+' min</span> '; } 


if (les_minutes == 17 && les_secondes == 1 || train_depart420 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "MARE";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 2; train2_its61[5] = 'MAR '+numero_dynamique+' Genève'; train2_its61[6] = 420;
train_depart420 = 'parti'; le_nombre_de_train++;} else { train_depart420 = 'nonparti'; }	
}

if ( train2_its102[6] == 420 || train2_its111[6] == 420 || train2_its34[6] == 420 || train2_its55[6] == 420 || train2_its73[6] == 420 || train2_its23[6] == 420 ) {
if ( affiche420 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t420 = 0; train420 = 0; train_depart420 = ''; affiche420 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 420 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 420 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne 402 / 18 min 
t402 = Math.floor(train402 / 60); if ( train_depart402 == 'parti' || train_depart402 == 'nonparti') { train402++; }
if (les_minutes == 13 || les_minutes == 14 || les_minutes == 15 || les_minutes == 16 || les_minutes == 17 || affiche402 == true) {
dynamique++; affiche402 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h18 MAR '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t402 >= lent && affiche402 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h18 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t402+' min</span> '; }
if (t402 > 5 && affiche402 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h18 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t402+' min</span> '; } 


if (les_minutes == 18 && les_secondes == 1 || train_depart402 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "POST";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 402;
train_depart402 = 'parti'; } else { train_depart402 = 'nonparti'; }	
}

if ( train2_its103[6] == 402 || train2_its18[6] == 402 || train2_its37[6] == 402 || train2_its56[6] == 402 || train2_its74[6] == 402 || train2_its4[6] == 402 ) {
if ( affiche402 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t402 = 0; train402 = 0; train_depart402 = ''; affiche402 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 402 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 402 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// INT  Lausanne --> Yverdon / 401 / 19 min
t401 = Math.floor(train401 / 60); if ( train_depart401 == 'parti' || train_depart401 == 'nonparti') { train401++; }
if (les_minutes == 14 || les_minutes == 15 || les_minutes == 16 || les_minutes == 17 || les_minutes == 18 || affiche401 == true) {
dynamique++; affiche401 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h19 INT '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne '; }
if (t401 >= rapide && affiche401 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h19 INT '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne <span style="color: orange">+'+t401+' min</span> '; }
if (t401 > 5 && affiche401 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h19 INT '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne <span style="color: red">+'+t401+' min</span> '; }

if (les_minutes == 19 && les_secondes == 1 || train_depart401 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "IRVC";  train2_its61[1] = 1;  train2_its61[2] = 102;  train2_its61[3] = 0;  train2_its61[4] = 3; train2_its61[5] = 'INT '+numero_dynamique+' Yverdon'; train2_its61[6] = 401;
train_depart401 = 'parti'; } else { train_depart401 = 'nonparti'; }	
}

if ( train2_its102[6] == 401 || train2_its111[6] == 401 || train2_its34[6] == 401 || train2_its55[6] == 401 || train2_its73[6] == 401 || train2_its23[6] == 401 ) {
if ( affiche401 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t401 = 0; train401 = 0; train_depart401 = ''; affiche401 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'INT 401 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'INT 401 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// ICN  Lausanne 321 / 19 min 
t321 = Math.floor(train321 / 60); if ( train_depart321 == 'parti' || train_depart321 == 'nonparti') { train321++; }
if (les_minutes == 14 || les_minutes == 15 || les_minutes == 16 || les_minutes == 17 || les_minutes == 18 || affiche321 == true) {
dynamique++; affiche321 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h19 ICN '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t321 >= rapide && affiche321 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h19 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t321+' min</span> '; }
if (t321 > 5 && affiche321 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h19 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t321+' min</span> '; } 


if (les_minutes == 19 && les_secondes == 1 || train_depart321 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "ICN";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'ICN '+numero_dynamique+' Lausanne'; train2_its12[6] = 321;
train_depart321 = 'parti'; } else { train_depart321 = 'nonparti'; }	
}

if ( train2_its103[6] == 321 || train2_its18[6] == 321 || train2_its37[6] == 321 || train2_its56[6] == 321 || train2_its74[6] == 321 || train2_its4[6] == 321 ) {
if ( affiche321 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t321 = 0; train321 = 0; train_depart321 = ''; affiche321 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'ICN 321 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'ICN 321 Lausanne');
le_nombre_de_train++; 
}
}


numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// 20 min

// S  Lausanne 208 / 20 min / 
t208 = Math.floor(train208 / 60); if ( train_depart208 == 'parti' || train_depart208 == 'nonparti') { train208++; }
if (les_minutes == 15 || les_minutes == 16 || les_minutes == 17 || les_minutes == 18 || les_minutes == 19 || affiche208 == true) {
dynamique++; affiche208 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h20 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle '; }
if (t208 >= moyen && affiche208 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h20 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: orange">+'+t208+' min</span> '; }
if (t208 > 5 && affiche208 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h20 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle<span style="color: red">+'+t208+' min</span> '; } 

if (les_minutes == 20 && les_secondes == 1 || train_depart208 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "S";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 1;  train2_its50[4] = 1; train2_its50[5] = 'REG '+numero_dynamique+' Lausanne'; train2_its50[6] = 208;
train_depart208 = 'parti'; } else { train_depart208 = 'nonparti'; }	
}

if ( train2_its103[6] == 208 || train2_its18[6] == 208 || train2_its37[6] == 208 || train2_its56[6] == 208 || train2_its74[6] == 208 || train2_its4[6] == 208 ) {
if ( affiche208 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t208 = 0; train208 = 0; train_depart208 = ''; affiche208 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'REG 208 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 208 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne --> Genève    Morges Nyon  319 / 21 min
t319 = Math.floor(train319 / 60); if ( train_depart319 == 'parti' || train_depart319 == 'nonparti') { train319++; }
if (les_minutes == 16 || les_minutes == 17 || les_minutes == 18 || les_minutes == 19 || les_minutes == 20 || affiche319 == true) {
dynamique++; affiche319 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h21 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand '; }
if (t319 >= moyen && affiche319 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h21 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand <span style="color: orange">+'+t319+' min</span> '; }
if (t319 > 5 && affiche319 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h21 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand <span style="color: red">+'+t319+' min</span> '; } 


if (les_minutes == 21 && les_secondes == 1 || train_depart319 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "D";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 1;  train2_its77[4] = 2; train2_its77[5] = 'REG '+numero_dynamique+' Genève'; train2_its77[6] = 319;
train_depart319 = 'parti'; } else { train_depart319 = 'nonparti'; }	
}

if ( train2_its102[6] == 319 || train2_its111[6] == 319 || train2_its34[6] == 319 || train2_its55[6] == 319 || train2_its73[6] == 319 || train2_its23[6] == 319 ) {
if ( affiche319 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t319 = 0; train319 = 0; train_depart319 = ''; affiche319 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 319 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 319 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// ICN  Lausanne --> Yverdon 317 / 22 min
t317 = Math.floor(train317 / 60); if ( train_depart317 == 'parti' || train_depart317 == 'nonparti') { train317++; }
if (les_minutes == 17 || les_minutes == 18 || les_minutes == 19 || les_minutes == 20 || les_minutes == 21 || affiche317 == true) {
dynamique++; affiche317 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h22 ICN '+numero_dynamique+' Lausanne --> Yverdon Bienne Zurich '; }
if (t317 >= rapide && affiche317 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h22 ICN '+numero_dynamique+' Lausanne --> Yverdon Bienne Zurich <span style="color: orange">+'+t317+' min</span> '; }
if (t317 > 5 && affiche317 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h22 ICN '+numero_dynamique+' Lausanne --> Yverdon Bienne Zurich <span style="color: red">+'+t317+' min</span> '; } 

if (les_minutes == 22 && les_secondes == 1 || train_depart317 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "ICN";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'ICN '+numero_dynamique+' Yverdon'; train2_its61[6] = 317;
train_depart317 = 'parti'; } else { train_depart317 = 'nonparti'; }	
}

if ( train2_its23[6] == 317 || train2_its102[6] == 317 || train2_its111[6] == 317 || train2_its34[6] == 317 || train2_its55[6] == 317 || train2_its73[6] == 317 ) {
if ( affiche317 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t317 = 0; train317 = 0; train_depart317 = ''; affiche317 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'ICN 317 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'ICN 317 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// LOC  Lausanne 315 / 23 min /
t315 = Math.floor(train315 / 60); if ( train_depart315 == 'parti' || train_depart315 == 'nonparti') { train315++; }
if (les_minutes == 18 || les_minutes == 19 || les_minutes == 20 || les_minutes == 21 || les_minutes == 22 || affiche315 == true) {
dynamique++; affiche315 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h23 MAR '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t315 >= lent && affiche315 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h23 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t315+' min</span> '; }
if (t315 > 5 && affiche315 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h23 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t315+' min</span> '; }


if (les_minutes == 23 && les_secondes == 1 || train_depart315 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "LOC";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 315;
train_depart315 = 'parti'; } else { train_depart315 = 'nonparti'; }	
}

if ( train2_its103[6] == 315 || train2_its18[6] == 315 || train2_its37[6] == 315 || train2_its56[6] == 315 || train2_its74[6] == 315 || train2_its4[6] == 315) {
if ( affiche315 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t315 = 0; train315 = 0; train_depart315 = ''; affiche315 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 315 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 315 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Genève    / 312 / 24 min /
t312 = Math.floor(train312 / 60); if ( train_depart312 == 'parti' || train_depart312 == 'nonparti') { train312++; }
if (les_minutes == 19 || les_minutes == 20 || les_minutes == 21 || les_minutes == 22 || les_minutes == 23 || affiche312 == true) {
dynamique++; affiche312 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h24 MAR '+numero_dynamique+' Dépôt --> Genève '; }
if (t312 >= lent && affiche312 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h24 MAR '+numero_dynamique+' Dépôt --> Genève <span style="color: orange">+'+t312+' min</span> '; }
if (t312 > 5 && affiche312 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h24 MAR '+numero_dynamique+' Dépôt --> Genève <span style="color: red">+'+t312+' min</span> '; } 

if (les_minutes == 23 && les_secondes == 50 ) {secondes_pn = 0; }
if (les_minutes == 24 && les_secondes == 1 || train_depart312 == 'nonparti' ) {	
if ( its7 == 0 ) { its7 = 1; occupation_its7 = true; sens_its7 = 2;
train2_its7[0] = "POST";  train2_its7[1] = 1;  train2_its7[2] = 0;  train2_its7[3] = 0;  train2_its7[4] = 2; train2_its7[5] = 'MAR '+numero_dynamique+' Genève'; train2_its7[6] = 312;
train_depart312 = 'parti'; } else { train_depart312 = 'nonparti'; }	
}

if ( train2_its102[6] == 312 || train2_its111[6] == 312 || train2_its34[6] == 312 || train2_its55[6] == 312 || train2_its73[6] == 312 || train2_its23[6] == 312 ) {
if ( affiche312 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t312 = 0; train312 = 0; train_depart312 = ''; affiche312 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 312 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 312 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// 25 min

// IC  Lausanne  504 / 25 min / vu
t504 = Math.floor(train504 / 60); if ( train_depart504 == 'parti' || train_depart504 == 'nonparti') { train504++; }
if (les_minutes == 20 || les_minutes == 21 || les_minutes == 22 || les_minutes == 23 || les_minutes == 24 || affiche504 == true) {
dynamique++; affiche504 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h25 IC '+numero_dynamique+' Genève --> Lausanne Bern Zurich '; }
if (t504 >= rapide && affiche504 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h25 IC '+numero_dynamique+' Genève --> Lausanne Bern Zurich <span style="color: orange">+'+t504+' min</span> '; }
if (t504 > 5 && affiche504 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h25 IC '+numero_dynamique+' Genève --> Lausanne Bern Zurich <span style="color: red">+'+t504+' min</span> '; } 


if (les_minutes == 25 && les_secondes == 1 || train_depart504 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "ICZ";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'IC '+numero_dynamique+' Lausanne'; train2_its50[6] = 504;
train_depart504 = 'parti'; } else { train_depart504 = 'nonparti'; }	
}

if ( train2_its103[6] == 504 || train2_its18[6] == 504 || train2_its37[6] == 504 || train2_its56[6] == 504 || train2_its74[6] == 504 || train2_its4[6] == 504 ) {
if ( affiche504 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t504 = 0; train504 = 0; train_depart504 = ''; affiche504 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'IC 504 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IC 504 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// TGV  Lausanne --> Yverdon  / 421 / 25 min neu
t421 = Math.floor(train421 / 60); if ( train_depart421 == 'parti' || train_depart421 == 'nonparti') { train421++; }
if (les_minutes == 20 || les_minutes == 21 || les_minutes == 22 || les_minutes == 23 || les_minutes == 24 || affiche421 == true) {
dynamique++; affiche421 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h25 TGV '+numero_dynamique+' Lausanne --> Yverdon Dijon Paris '; }
if (t421 >= rapide && affiche421 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h25 TGV '+numero_dynamique+' Lausanne --> Yverdon Dijon Paris <span style="color: orange">+'+t421+' min</span> '; }
if (t421 > 5 && affiche421 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h25 TGV '+numero_dynamique+' Lausanne --> Yverdon Dijon Paris <span style="color: red">+'+t421+' min</span> '; } 


if (les_minutes == 24 && les_secondes == 50 ) {secondes_pn = 0; }
if (les_minutes == 25 && les_secondes == 1 || train_depart421 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "TGV";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 0;  train2_its77[4] = 3; train2_its77[5] = 'TGV '+numero_dynamique+' Yverdon'; train2_its77[6] = 421;
train_depart421 = 'parti'; } else { train_depart421 = 'nonparti'; }	
}

if ( train2_its102[6] == 421 || train2_its111[6] == 421 || train2_its34[6] == 421 || train2_its55[6] == 421 || train2_its73[6] == 421 || train2_its23[6] == 421 ) {
if ( affiche421 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t421 = 0; train421 = 0; train_depart421 = ''; affiche421 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'TGV 421 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'TGV 421 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne / 218 / 25 min
t218 = Math.floor(train218 / 60); if ( train_depart218 == 'parti' || train_depart218 == 'nonparti') { train218++; }
if (les_minutes == 20 || les_minutes == 21 || les_minutes == 22 || les_minutes == 23 || les_minutes == 24 || affiche218 == true) {
dynamique++; affiche218 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h25 REG '+numero_dynamique+' Genève --> Lausanne Montreux Sion'; }
if (t218 >= rapide && affiche218 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h25 REG '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: orange">+'+t218+' min</span> '; }
if (t218 > 5 && affiche218 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h25 REG '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: red">+'+t218+' min</span> '; } 

if (les_minutes == 25 && les_secondes == 1 || train_depart218 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "IR";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = ''+numero_dynamique+' REG Lausanne'; train2_its50[6] = 218;
train_depart218 = 'parti'; } else { train_depart218 = 'nonparti'; }	
}

if ( train2_its103[6] == 218 || train2_its18[6] == 218 || train2_its37[6] == 218 || train2_its56[6] == 218 || train2_its74[6] == 218 || train2_its4[6] == 218 ) {
if ( affiche218 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t218 = 0; train218 = 0; train_depart218 = ''; affiche218 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'REG 218 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 218 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MARA  Lausanne 311 / 26 min /
t311 = Math.floor(train311 / 60); if ( train_depart311 == 'parti' || train_depart311 == 'nonparti') { train311++; }
if (les_minutes == 21 || les_minutes == 22 || les_minutes == 23 || les_minutes == 24 || les_minutes == 25 || affiche311 == true) {
dynamique++; affiche311 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h26 MAR '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t311 >= lent && affiche311 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h26 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t311+' min</span> '; }
if (t311 > 5 && affiche311 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h26 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t311+' min</span> '; }

if (les_minutes == 26 && les_secondes == 1 || train_depart311 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "MARA";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 311;
train_depart311 = 'parti'; } else { train_depart311 = 'nonparti'; }	
}

if ( train2_its103[6] == 311 || train2_its18[6] == 311 || train2_its37[6] == 311 || train2_its56[6] == 311 || train2_its74[6] == 311 || train2_its4[6] == 311) {
if ( affiche311 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t311 = 0; train311 = 0; train_depart311 = ''; affiche311 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 311 Lausannee'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 311 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// RE  Lausanne --> Genève     205 / 27 min
t205 = Math.floor(train205 / 60); if ( train_depart205 == 'parti' || train_depart205 == 'nonparti') { train205++; }
if (les_minutes == 21 || les_minutes == 22 || les_minutes == 23 || les_minutes == 24 || les_minutes == 25 || affiche205 == true) {
dynamique++; affiche205 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h27 RE '+numero_dynamique+' Lausanne --> Genève Morges Nyon '; }
if (t205 >= moyen && affiche205 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h27 RE '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: orange">+'+t205+' min</span> '; }
if (t205 > 5 && affiche205 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h27 RE '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: red">+'+t205+' min</span> '; } 

if (les_minutes == 26 && les_secondes == 1 || train_depart205 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "RE";  train2_its77[1] = 1;  train2_its77[2] = 101;  train2_its77[3] = 1;  train2_its77[4] = 2; train2_its77[5] = 'RE '+numero_dynamique+' Genève'; train2_its77[6] = 205;
train_depart205 = 'parti'; } else { train_depart205 = 'nonparti'; }	
}

if ( train2_its102[6] == 205 || train2_its111[6] == 205 || train2_its34[6] == 205 || train2_its55[6] == 205 || train2_its73[6] == 205 || train2_its23[6] == 205 ) {
if ( affiche205 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t205 = 0; train205 = 0; train_depart205 = ''; affiche205 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'RE 205 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'RE 205 Genève');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// ICN  Lausanne 505 / 27 min 
t505 = Math.floor(train505 / 60); if ( train_depart505 == 'parti' || train_depart505 == 'nonparti') { train505++; }
if (les_minutes == 22 || les_minutes == 23 || les_minutes == 24 || les_minutes == 25 || les_minutes == 26 || affiche505 == true) {
dynamique++; affiche505 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h27 ICN '+numero_dynamique+' Yverdon --> Lausanne'; }
if (t505 >= rapide && affiche505 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h27 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t505+' min</span> '; }
if (t505 > 5 && affiche505 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h27 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t505+' min</span> '; } 

if (les_minutes == 27 && les_secondes == 1 || train_depart505 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "ICN";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'ICN '+numero_dynamique+' Lausanne'; train2_its12[6] = 505;
train_depart505 = 'parti'; } else { train_depart505 = 'nonparti'; }	
}

if ( train2_its103[6] == 505 || train2_its18[6] == 505 || train2_its37[6] == 505 || train2_its56[6] == 505 || train2_its74[6] == 505 || train2_its4[6] == 505 ) {
if ( affiche505 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t505 = 0; train505 = 0; train_depart505 = ''; affiche505 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'ICN 505 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'ICN 505 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// 28 min

// MAR  Lausanne 309 / 28 min /
t309 = Math.floor(train309 / 60); if ( train_depart309 == 'parti' || train_depart309 == 'nonparti') { train309++; }
if (les_minutes == 23 || les_minutes == 24 || les_minutes == 25 || les_minutes == 26 || les_minutes == 27 || affiche309 == true) {
dynamique++; affiche309 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h28 MAR '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t309 >= lent && affiche309 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h28 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t309+' min</span> '; }
if (t309 > 5 && affiche309 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h28 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t309+' min</span> '; }

if (les_minutes == 28 && les_secondes == 1 || train_depart309 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "MARB";  train2_its12[1] = 1;  train2_its12[2] = 4;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 309;
train_depart309 = 'parti'; } else { train_depart309 = 'nonparti'; }	
}

if ( train2_its103[6] == 309 || train2_its18[6] == 309 || train2_its37[6] == 309 || train2_its56[6] == 309 || train2_its74[6] == 309 || train2_its4[6] == 309) {
if ( affiche309 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t309 = 0; train309 = 0; train_depart309 = ''; affiche309 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 309 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 309 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IR  Lausanne --> Yverdon  / 28 min
t307 = Math.floor(train307 / 60); if ( train_depart307 == 'parti' || train_depart307 == 'nonparti') { train307++; }
if (les_minutes == 24 || les_minutes == 25 || les_minutes == 26 || les_minutes == 27 || affiche307 == true) {
dynamique++; affiche307 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h28 IR '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne '; }
if (t307 >= moyen && affiche307 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h28 IR '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne <span style="color: orange">+'+t307+' min</span> '; }
if (t307 > 5 && affiche307 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h28 IR '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne <span style="color: red">+'+t307+' min</span> '; } 


if (les_minutes == 28 && les_secondes == 1 || train_depart307 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "IR";  train2_its61[1] = 1;  train2_its61[2] = 4;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'IR '+numero_dynamique+' Yverdon'; train2_its61[6] = 307;
train_depart307 = 'parti'; le_nombre_de_train++;} else { train_depart307 = 'nonparti'; }	
}

if ( train2_its23[6] == 307 || train2_its102[6] == 307 || train2_its111[6] == 307 || train2_its34[6] == 307 || train2_its55[6] == 307 || train2_its73[6] == 307 ) {
if ( affiche307 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t307 = 0; train307 = 0; train_depart307 = ''; affiche307 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'IR 307 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR 307 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Yverdon / 506 / 29 min / vu
t506 = Math.floor(train506 / 60); if ( train_depart506 == 'parti' || train_depart506 == 'nonparti') { train506++; }
if (les_minutes == 24 || les_minutes == 25 || les_minutes == 26 || les_minutes == 27 || les_minutes == 28 || affiche506 == true) {
dynamique++; affiche506 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h29 MAR '+numero_dynamique+' Lausanne --> Yverdon '; }
if (t506 >= lent && affiche506 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h29 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: orange">+'+t506+' min</span> '; }
if (t506 > 5 && affiche506 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h29 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: red">+'+t506+' min</span> '; }

if (les_minutes == 29 && les_secondes == 1 || train_depart506 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "KN";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 3; train2_its61[5] = 'MAR '+numero_dynamique+' Yverdon'; train2_its61[6] = 506;
train_depart506 = 'parti'; } else { train_depart506 = 'nonparti'; }	
}

if ( train2_its102[6] == 506 || train2_its111[6] == 506 || train2_its34[6] == 506 || train2_its55[6] == 506 || train2_its73[6] == 506 || train2_its23[6] == 506 ) {
if ( affiche506 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t506 = 0; train506 = 0; train_depart506 = ''; affiche506 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 506 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 506 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// RE  Lausanne 322 / 30 min
t322 = Math.floor(train322 / 60); if ( train_depart322 == 'parti' || train_depart322 == 'nonparti') { train322++; }
if (les_minutes == 25 || les_minutes == 26 || les_minutes == 27 || les_minutes == 28 || les_minutes == 29 || affiche322 == true) {
dynamique++; affiche322 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h30 RE '+numero_dynamique+' Genève --> Lausanne Montreux Sion'; }
if (t322 >= moyen && affiche322 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h30 RE '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: orange">+'+t322+' min</span> '; }
if (t322 > 5 && affiche322 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h30 RE '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: red">+'+t322+' min</span> '; } 


if (les_minutes == 30 && les_secondes == 1 || train_depart322 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "RE";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 1;  train2_its50[4] = 1; train2_its50[5] = 'RE '+numero_dynamique+' Lausanne'; train2_its50[6] = 322;
train_depart322 = 'parti'; } else { train_depart322 = 'nonparti'; }	
}

if ( train2_its103[6] == 322 || train2_its18[6] == 322 || train2_its37[6] == 322 || train2_its56[6] == 322 || train2_its74[6] == 322 || train2_its4[6] == 322 ) {
if ( affiche322 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t322 = 0; train322 = 0; train_depart322 = ''; affiche322 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'RE 322 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'RE 322 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Yverdon / 303 / 31 min /
t303 = Math.floor(train303 / 60); if ( train_depart303 == 'parti' || train_depart303 == 'nonparti') { train303++; }
if (les_minutes == 26 || les_minutes == 27 || les_minutes == 28 || les_minutes == 29 || les_minutes == 30 || affiche303 == true) {
dynamique++; affiche303 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h31 MAR '+numero_dynamique+' Lausanne --> Yverdon'; }
if (t303 >= lent && affiche303 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h31 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: orange">+'+t303+' min</span> '; }
if (t303 > 5 && affiche303 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h31 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: red">+'+t303+' min</span> '; } 


if (les_minutes == 31 && les_secondes == 1 || train_depart303 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "KN";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 0;  train2_its77[4] = 3; train2_its77[5] = 'MAR '+numero_dynamique+' Yverdon'; train2_its77[6] = 303;
train_depart303 = 'parti'; } else { train_depart303 = 'nonparti'; }	
}



if ( train2_its102[6] == 303 || train2_its111[6] == 303 || train2_its34[6] == 303 || train2_its55[6] == 303 || train2_its73[6] == 303 || train2_its23[6] == 303 ) {
if ( affiche303 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t303 = 0; train303 = 0; train_depart303 = ''; affiche303 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 303 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 303 Yverdon');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// INT  Lausanne --> Genève    / 507 / 31 min /
t507 = Math.floor(train507 / 60); if ( train_depart507 == 'parti' || train_depart507 == 'nonparti') { train507++; }
if (les_minutes == 26 || les_minutes == 27 || les_minutes == 28 || les_minutes == 29 || les_minutes == 30 || affiche507 == true) {
dynamique++; affiche507 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h31 INT '+numero_dynamique+' Lausanne --> Genève Morges Nyon '; }
if (t507 >= rapide && affiche507 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h31 INT '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: orange">+'+t507+' min</span> '; }
if (t507 > 5 && affiche507 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h31 INT '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: red">+'+t507+' min</span> '; } 


if (les_minutes == 31 && les_secondes == 1 || train_depart507 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "IRVC";  train2_its77[1] = 1;  train2_its77[2] = 101;  train2_its77[3] = 0;  train2_its77[4] = 2; train2_its77[5] = 'INT '+numero_dynamique+' Genève'; train2_its77[6] = 507;
train_depart507 = 'parti'; } else { train_depart507 = 'nonparti'; }	
}

if ( train2_its102[6] == 507 || train2_its111[6] == 507 || train2_its34[6] == 507 || train2_its55[6] == 507 || train2_its73[6] == 507 || train2_its23[6] == 507 ) {
if ( affiche507 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t507 = 0; train507 = 0; train_depart507 = ''; affiche507 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'INT 507 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'INT 507 Genève');
le_nombre_de_train++; 
}
}

// IR2  Genève-Lausanne 602 / 31 min
t602 = Math.floor(train602 / 60); if ( train_depart602 == 'parti' || train_depart602 == 'nonparti') { train602++; }
if (les_minutes == 27 || les_minutes == 28 || les_minutes == 29 || les_minutes == 30 || affiche602 == true) {
dynamique++; affiche602 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h31 IR2 '+numero_dynamique+' Genève --> Lausanne Romont Lucerne '; }
if (t602 >= rapide && affiche602 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h31 IR2 '+numero_dynamique+' Genève --> Lausanne Romont Lucerne <span style="color: orange">+'+t602+' min</span> '; }
if (t602 > 5 && affiche602 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h31 IR2 '+numero_dynamique+' Genève --> Lausanne Romont Lucerne <span style="color: red">+'+t602+' min</span> '; } 

if (les_minutes == 31 && les_secondes == 1 || train_depart602 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "IR2";  train2_its50[1] = 1;  train2_its50[2] = 302;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'IR2 '+numero_dynamique+' Lausanne'; train2_its50[6] = 602;
train_depart602 = 'parti'; } else { train_depart602 = 'nonparti'; }	
}

if ( train2_its103[6] == 602 || train2_its18[6] == 602 || train2_its37[6] == 602 || train2_its56[6] == 602 || train2_its74[6] == 602  || train2_its4[6] == 602) {
if ( affiche602 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t602 = 0; train602 = 0; train_depart602 = ''; affiche602 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'IR2 602 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR 602 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne --> Genève     313 / 32 min
t313 = Math.floor(train313 / 60); if ( train_depart313 == 'parti' || train_depart313 == 'nonparti') { train313++; }
if (les_minutes == 27 || les_minutes == 28 || les_minutes == 29 || les_minutes == 30 || les_minutes == 31 || affiche313 == true) {
dynamique++; affiche313 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h32 REG '+numero_dynamique+' Lausanne --> Genève Morges Nyon '; }
if (t313 >= moyen && affiche313 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h32 REG '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: orange">+'+t313+' min</span> '; }
if (t313 > 5 && affiche313 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h32 REG '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: red">+'+t313+' min</span> '; } 


if (les_minutes == 32 && les_secondes == 1 || train_depart313 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "D";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 1;  train2_its77[4] = 2; train2_its77[5] = 'REG '+numero_dynamique+' Genève'; train2_its77[6] = 313;
train_depart313 = 'parti'; } else { train_depart313 = 'nonparti'; }	
}

if ( train2_its102[6] == 313 || train2_its111[6] == 313 || train2_its34[6] == 313 || train2_its55[6] == 313 || train2_its73[6] == 313 || train2_its23[6] == 313 ) {
if ( affiche313 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t313 = 0; train313 = 0; train_depart313 = ''; affiche313 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 313 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 313 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// SP  Lausanne 508 / 33 min
t508 = Math.floor(train508 / 60); if ( train_depart508 == 'parti' || train_depart508 == 'nonparti') { train508++; }
if (les_minutes == 30 || les_minutes == 30 || les_minutes == 30 || les_minutes == 31 || les_minutes == 32 || affiche508 == true) {
dynamique++; affiche508 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h33 SP '+numero_dynamique+' Genève --> Lausanne - train spécial '; }
if (t508 >= rapide && affiche508 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h33 SP '+numero_dynamique+' Genève --> Lausanne - train spécial <span style="color: orange">+'+t508+' min</span> '; }
if (t508 > 5 && affiche508 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h33 SP '+numero_dynamique+' Genève --> Lausanne - train spécial <span style="color: red">+'+t508+' min</span> '; } 


if (les_minutes == 33 && les_secondes == 1 || train_depart508 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "SP";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'SP '+numero_dynamique+' Lausanne'; train2_its50[6] = 508;
train_depart508 = 'parti'; } else { train_depart508 = 'nonparti'; }	
}

if ( train2_its103[6] == 508 || train2_its18[6] == 508 || train2_its37[6] == 508 || train2_its56[6] == 508 || train2_its74[6] == 508 || train2_its4[6] == 508 ) {
if ( affiche508 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t508 = 0; train508 = 0; train_depart508 = ''; affiche508 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'SP 508 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'SP 508 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// POST  Lausanne 221 / 34 min /
t221 = Math.floor(train221 / 60); if ( train_depart221 == 'parti' || train_depart221 == 'nonparti') { train221++; }
if (les_minutes == 30 || les_minutes == 31 || les_minutes == 32 || les_minutes == 33 || affiche221 == true) {
dynamique++; affiche221 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h34 MAR '+numero_dynamique+' Genève --> Lausanne '; }
if (t221 >= lent && affiche221 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h34 MAR '+numero_dynamique+' Genève --> Lausanne <span style="color: orange">+'+t221+' min</span> '; }
if (t221 > 5 && affiche221 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h34 MAR '+numero_dynamique+' Genève --> Lausanne <span style="color: red">+'+t221+' min</span> '; }


if (les_minutes == 34 && les_secondes == 1 || train_depart221 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "POST";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its50[6] = 221;
train_depart221 = 'parti'; } else { train_depart221 = 'nonparti'; }	
}

if ( train2_its103[6] == 221 || train2_its18[6] == 221 || train2_its37[6] == 221 || train2_its56[6] == 221 || train2_its74[6] == 221 || train2_its4[6] == 221) {
if ( affiche221 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t221 = 0; train221 = 0; train_depart221 = ''; affiche221 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 221 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 221 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IR  Lausanne 217 / 35 min 
t217 = Math.floor(train217 / 60); if ( train_depart217 == 'parti' || train_depart217 == 'nonparti') { train217++; }
if (les_minutes == 30 || les_minutes == 31 || les_minutes == 32 || les_minutes == 33 || les_minutes == 34 || affiche217 == true) {
dynamique++; affiche217 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h35 IR '+numero_dynamique+' Genève --> Lausanne Bern Lucerne'; }
if (t217 >= rapide && affiche217 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h35 IR '+numero_dynamique+' Genève --> Lausanne Bern Lucerne <span style="color: orange">+'+t217+' min</span> '; }
if (t217 > 5 && affiche217 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h35 IR '+numero_dynamique+' Genève --> Lausanne Bern Lucerne <span style="color: red">+'+t217+' min</span> '; } 


if (les_minutes == 35 && les_secondes == 1 || train_depart217 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "IR";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'IR '+numero_dynamique+' Lausanne'; train2_its50[6] = 217;
train_depart217 = 'parti'; } else { train_depart217 = 'nonparti'; }	
}

if ( train2_its103[6] == 217 || train2_its18[6] == 217 || train2_its37[6] == 217 || train2_its56[6] == 217 || train2_its74[6] == 217  || train2_its4[6] == 217 ) {
if ( affiche217 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t217 = 0; train217 = 0; train_depart217 = ''; affiche217 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'IR 217 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR 217 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IR3  Lausanne --> Yverdon Neuchâtel Bienne / 612 / 35 min
t612 = Math.floor(train612 / 60); if ( train_depart612 == 'parti' || train_depart612 == 'nonparti') { train612++; }
if (les_minutes == 31 || les_minutes == 32 || les_minutes == 33 || les_minutes == 34 || affiche612 == true) {
dynamique++; affiche612 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h35 IR3 '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne  '; }
if (t612 >= rapide && affiche612 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h35 IR3 '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne <span style="color: orange">+'+t612+' min</span> '; }
if (t612 > 5 && affiche612 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h35 IR3 '+numero_dynamique+' Lausanne --> Yverdon Neuchâtel Bienne <span style="color: red">+'+t612+' min</span> '; } 


if (les_minutes == 35 && les_secondes == 1 || train_depart612 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "IR3";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 0;  train2_its77[4] = 3; train2_its77[5] = 'IR3 '+numero_dynamique+' Yverdon'; train2_its77[6] = 612;
train_depart612 = 'parti'; } else { train_depart612 = 'nonparti'; }	
}

if ( train2_its102[6] == 612 || train2_its111[6] == 612 || train2_its34[6] == 612 || train2_its55[6] == 612 || train2_its73[6] == 612 || train2_its23[6] == 612 ) {
if ( affiche612 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t612 = 0; train612 = 0; train_depart612 = ''; affiche612 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'IR3 612 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR3 612 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S1  Vallorbe/ 406 / 35 min / vu
t509 = Math.floor(train509 / 60); if ( train_depart509 == 'parti' || train_depart509 == 'nonparti') { train509++; }
if (les_minutes == 30 || les_minutes == 31 || les_minutes == 32 || les_minutes == 33 || les_minutes == 34 || affiche509 == true) {
dynamique++; affiche509 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h35 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay'; }
if (t509 >= moyen && affiche509 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h35 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: orange">+'+t509+' min</span> '; }
if (t509 > 5 && affiche509 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h35 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: red">+'+t509+' min</span> '; } 


if (les_minutes == 35 && les_secondes == 1 || train_depart509 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "S";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'REG '+numero_dynamique+' Yverdon'; train2_its61[6] = 509;
train_depart509 = 'parti'; } else { train_depart509 = 'nonparti'; }	
}

if ( train2_its102[6] == 509 || train2_its111[6] == 509 || train2_its34[6] == 509 || train2_its55[6] == 509 || train2_its73[6] == 509 || train2_its23[6] == 509 ) {
if ( affiche509 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t509 = 0; train509 = 0; train_depart509 = ''; affiche509 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 509 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 509 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// TGV  Lausanne --> Genève    / 220 / 36 min / neu
t220 = Math.floor(train220 / 60); if ( train_depart220 == 'parti' || train_depart220 == 'nonparti') { train220++; }
if (les_minutes == 31 || les_minutes == 32 || les_minutes == 33 || les_minutes == 34 || les_minutes == 35 || affiche220 == true) {
dynamique++; affiche220 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h36 TGV '+numero_dynamique+' Lausanne --> Genève Lyon Paris '; }
if (t220 >= rapide && affiche220 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h36 TGV '+numero_dynamique+' Lausanne --> Genève Lyon Paris <span style="color: orange">+'+t220+' min</span> '; }
if (t220 > 5 && affiche220 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h36 TGV '+numero_dynamique+' Lausanne --> Genève Lyon Paris <span style="color: red">+'+t220+' min</span> '; } 


if (les_minutes == 36 && les_secondes == 1 || train_depart220 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "TGV";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 0;  train2_its77[4] = 2; train2_its77[5] = 'TGV '+numero_dynamique+' Genève'; train2_its77[6] = 220;
train_depart220 = 'parti'; } else { train_depart220 = 'nonparti'; }	
}

if ( train2_its102[6] == 220 || train2_its111[6] == 220 || train2_its34[6] == 220 || train2_its55[6] == 220 || train2_its73[6] == 220 || train2_its23[6] == 220 ) {
if ( affiche220 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t220 = 0; train220 = 0; train_depart220 = ''; affiche220 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'TGV 220 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 220 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// S  Lausanne --> Genève     513 / 37 min
t513 = Math.floor(train513 / 60); if ( train_depart513 == 'parti' || train_depart513 == 'nonparti') { train513++; }
if (les_minutes == 32 || les_minutes == 33 || les_minutes == 34 || les_minutes == 35 || les_minutes == 36 || affiche513 == true) {
dynamique++; affiche513 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h37 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand '; }
if (t513 >= moyen && affiche513 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h37 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand <span style="color: orange">+'+t513+' min</span> '; }
if (t513 > 5 && affiche513 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h37 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand <span style="color: red">+'+t513+' min</span> '; } 


if (les_minutes == 37 && les_secondes == 1 || train_depart513 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "D";  train2_its77[1] = 1;  train2_its77[2] = 0;  train2_its77[3] = 1;  train2_its77[4] = 2; train2_its77[5] = 'REG '+numero_dynamique+' Genève'; train2_its77[6] = 513;
train_depart513 = 'parti'; } else { train_depart513 = 'nonparti'; }	
}

if ( train2_its102[6] == 513 || train2_its111[6] == 513 || train2_its34[6] == 513 || train2_its55[6] == 513 || train2_its73[6] == 513 || train2_its23[6] == 513 ) {
if ( affiche513 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t513 = 0; train513 = 0; train_depart513 = ''; affiche513 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 513 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 513 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// MAR  Lausanne --> Yverdon / 216 / 37 min /
t216 = Math.floor(train216 / 60); if ( train_depart216 == 'parti' || train_depart216 == 'nonparti') { train216++; }
if (les_minutes == 32 || les_minutes == 33 || les_minutes == 34 || les_minutes == 35 || les_minutes == 36 || affiche216 == true) {
dynamique++; affiche216 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h37 MAR '+numero_dynamique+' Lausanne --> Yverdon'; }
if (t216 >= lent && affiche216 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h37 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: orange">+'+t216+' min</span> '; }
if (t216 > 5 && affiche216 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h37 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: red">+'+t216+' min</span> '; } 


if (les_minutes == 37 && les_secondes == 1 || train_depart216 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "FLE";  train2_its61[1] = 1;  train2_its61[2] = 4;  train2_its61[3] = 0;  train2_its61[4] = 3; train2_its61[5] = 'MAR '+numero_dynamique+' Yverdon'; train2_its61[6] = 216;
train_depart216 = 'parti'; } else { train_depart216 = 'nonparti'; }	
}

if ( train2_its102[6] == 216 || train2_its111[6] == 216 || train2_its34[6] == 216 || train2_its55[6] == 216 || train2_its73[6] == 216 || train2_its23[6] == 216 ) {
if ( affiche216 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t216 = 0; train216 = 0; train_depart216 = ''; affiche216 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 216 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 216 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// IR  Lausanne  215 / 38 min /
t215 = Math.floor(train215 / 60); if ( train_depart215 == 'parti' || train_depart215 == 'nonparti') { train215++; }
if (les_minutes == 33 || les_minutes == 34 || les_minutes == 35 || les_minutes == 36 || les_minutes == 37 || affiche215 == true) {
dynamique++; affiche215 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h38 IR '+numero_dynamique+' Genève --> Lausanne Fribourg Bern '; }
if (t215 >= rapide && affiche215 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h38 IR '+numero_dynamique+' Genève --> Lausanne Fribourg Bern <span style="color: orange">+'+t215+' min</span> '; }
if (t215 > 5 && affiche215 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h38 IR '+numero_dynamique+' Genève --> Lausanne Fribourg Bern <span style="color: red">+'+t215+' min</span> '; }


if (les_minutes == 38 && les_secondes == 1 || train_depart215 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "IR";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'IR '+numero_dynamique+' Lausanne'; train2_its50[6] = 215;
train_depart215 = 'parti'; } else { train_depart215 = 'nonparti'; }	
}


if ( train2_its103[6] == 215 || train2_its18[6] == 215 || train2_its37[6] == 215 || train2_its56[6] == 215 || train2_its74[6] == 215 || train2_its4[6] == 215) {
if ( affiche215 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t215 = 0; train215 = 0; train_depart215 = ''; affiche215 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'IR 215 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR 215 Lausanne');
le_nombre_de_train++;  
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// INT  Lausanne --> Genève    / 214 / 38 min /
t214 = Math.floor(train214 / 60); if ( train_depart214 == 'parti' || train_depart214 == 'nonparti') { train214++; }
if (les_minutes == 33 || les_minutes == 34 || les_minutes == 35 || les_minutes == 36 || les_minutes == 37 || affiche214 == true) {
dynamique++; affiche214 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h38 INT '+numero_dynamique+' Lausanne --> Genève Morges Nyon '; }
if (t214 >= rapide && affiche214 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h38 INT '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: orange">+'+t214+' min</span> '; }
if (t214 > 5 && affiche214 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h38 INT '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: red">+'+t214+' min</span> '; } 


if (les_minutes == 38 && les_secondes == 1 || train_depart214 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "IRVC";  train2_its77[1] = 1;  train2_its77[2] = 101;  train2_its77[3] = 0;  train2_its77[4] = 2; train2_its77[5] = 'INT '+numero_dynamique+' Genève'; train2_its77[6] = 214;
train_depart214 = 'parti'; } else { train_depart214 = 'nonparti'; }	
}

if ( train2_its102[6] == 214 || train2_its111[6] == 214 || train2_its34[6] == 214 || train2_its55[6] == 214 || train2_its73[6] == 214 || train2_its23[6] == 214 ) {
if ( affiche214 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t214 = 0; train214 = 0; train_depart214 = ''; affiche214 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'INT 214 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'INT 214 Genève');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne --> Genève    / 212 / 39 min /
t212 = Math.floor(train212 / 60); if ( train_depart212 == 'parti' || train_depart212 == 'nonparti') { train212++; }
if (les_minutes == 34 || les_minutes == 35 || les_minutes == 36 || les_minutes == 37 || les_minutes == 38 || affiche212 == true) {
dynamique++; affiche212 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h39 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand '; }
if (t212 >= moyen && affiche212 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h39 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand <span style="color: orange">+'+t212+' min</span> '; }

if (t212 > 5 && affiche212 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h39 REG '+numero_dynamique+' Lausanne --> Genève Morges Allamand <span style="color: red">+'+t212+' min</span> '; } 


if (les_minutes == 39 && les_secondes == 1 || train_depart212 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "D";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 2; train2_its61[5] = 'REG '+numero_dynamique+' Genève'; train2_its61[6] = 212;
train_depart212 = 'parti'; } else { train_depart212 = 'nonparti'; }	
}

if ( train2_its102[6] == 212 || train2_its111[6] == 212 || train2_its34[6] == 212 || train2_its55[6] == 212 || train2_its73[6] == 212 || train2_its23[6] == 212 ) {
if ( affiche212 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t212 = 0; train212 = 0; train_depart212 = ''; affiche212 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 212 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 212 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// 40 min

// MARA  Lausanne 210 / 40 min /
t210 = Math.floor(train210 / 60); if ( train_depart210 == 'parti' || train_depart210 == 'nonparti') { train210++; }
if (les_minutes == 36 || les_minutes == 37 || les_minutes == 38 || les_minutes == 39 || affiche210 == true) {
dynamique++; affiche210 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h40 MAR '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t210 >= lent && affiche210 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h40 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t210+' min</span> '; }
if (t210 > 5 && affiche210 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h40 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t210+' min</span> '; }


if (les_minutes == 40 && les_secondes == 1 || train_depart210 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "MARA";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 210;
train_depart210 = 'parti'; } else { train_depart210 = 'nonparti'; }	
}

if ( train2_its103[6] == 210 || train2_its18[6] == 210 || train2_its37[6] == 210 || train2_its56[6] == 210 || train2_its74[6] == 210 || train2_its4[6] == 210) {
if ( affiche210 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t210 = 0; train210 = 0; train_depart210 = ''; affiche210 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 210 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 210 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// LOC  Lausanne --> Genève    / 203 / 40 min /
t203 = Math.floor(train203 / 60); if ( train_depart203 == 'parti' || train_depart203 == 'nonparti') { train203++; }
if (les_minutes == 35 || les_minutes == 36 || les_minutes == 37 || les_minutes == 38 || les_minutes == 39 || affiche203 == true) {
dynamique++; affiche203 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h40 MAR '+numero_dynamique+' Dépôt --> Genève   '; }
if (t203 >= lent && affiche203 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h40 MAR '+numero_dynamique+' Dépôt --> Genève    <span style="color: orange">+'+t203+' min</span> '; }
if (t203 > 5 && affiche203 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h40 MAR '+numero_dynamique+' Dépôt --> Genève     <span style="color: red">+'+t203+' min</span> '; } 

if (les_minutes == 39 && les_secondes == 50 ) {secondes_pn = 0; }
if (les_minutes == 40 && les_secondes == 1 || train_depart203 == 'nonparti' ) {	
if ( its7 == 0 ) { its7 = 1; occupation_its7 = true; sens_its7 = 2;
train2_its7[0] = "LOC";  train2_its7[1] = 1;  train2_its7[2] = 0;  train2_its7[3] = 0;  train2_its7[4] = 2; train2_its7[5] = 'MAR '+numero_dynamique+' Genève'; train2_its7[6] = 203;
train_depart203 = 'parti'; } else { train_depart203 = 'nonparti'; }	
}



if ( train2_its102[6] == 203 || train2_its111[6] == 203 || train2_its34[6] == 203 || train2_its55[6] == 203 || train2_its73[6] == 203 || train2_its23[6] == 203 ) {
if ( affiche203 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t203 = 0; train203 = 0; train_depart203 = ''; affiche203 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 203 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 203 Genève');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// ICN  Lausanne 204 / 41 min 
t204 = Math.floor(train204 / 60); if ( train_depart204 == 'parti' || train_depart204 == 'nonparti') { train204++; }
if (les_minutes == 36 || les_minutes == 37 || les_minutes == 38 || les_minutes == 39 || les_minutes == 40 || affiche204 == true) {
dynamique++; affiche204 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h41 ICN '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t204 >= rapide && affiche204 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h41 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t204+' min</span> '; }
if (t204 > 5 && affiche204 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h41 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t204+' min</span> '; } 


if (les_minutes == 41 && les_secondes == 1 || train_depart204 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "ICN";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'ICN '+numero_dynamique+' Lausanne'; train2_its12[6] = 204;
train_depart204 = 'parti'; } else { train_depart204 = 'nonparti'; }	
}

if ( train2_its103[6] == 204 || train2_its18[6] == 204 || train2_its37[6] == 204 || train2_its56[6] == 204 || train2_its74[6] == 204 || train2_its4[6] == 204 ) {
if ( affiche204 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t204 = 0; train204 = 0; train_depart204 = ''; affiche204 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'ICN 204 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'ICN 204 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne / 523 / 42 min
t523 = Math.floor(train523 / 60); if ( train_depart523 == 'parti' || train_depart523 == 'nonparti') { train523++; }
if (les_minutes == 37 || les_minutes == 38 || les_minutes == 39 || les_minutes == 40 || les_minutes == 41 || affiche523 == true) {
dynamique++; affiche523 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h42 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle'; }
if (t523 >= moyen && affiche523 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h42 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: orange">+'+t523+' min</span> '; }
if (t523 > 5 && affiche523 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h42 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: red">+'+t523+' min</span> '; } 

if (les_minutes == 42 && les_secondes == 1 || train_depart523 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "S";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 1;  train2_its50[4] = 1; train2_its50[5] = ''+numero_dynamique+' REG Lausanne'; train2_its50[6] = 523;
train_depart523 = 'parti'; } else { train_depart523 = 'nonparti'; }	
}

if ( train2_its103[6] == 523 || train2_its18[6] == 523 || train2_its37[6] == 523 || train2_its56[6] == 523 || train2_its74[6] == 523 || train2_its4[6] == 523 ) {
if ( affiche523 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t523 = 0; train523 = 0; train_depart523 = ''; affiche523 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'REG 523 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 523 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IC  Lausanne --> Genève     120 / 42 min / 
t120 = Math.floor(train120 / 60); if ( train_depart120 == 'parti' || train_depart120 == 'nonparti') { train120++; }
if (les_minutes == 37 || les_minutes == 38 || les_minutes == 39 || les_minutes == 40 || les_minutes == 41 || affiche120 == true) {
dynamique++; affiche120 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h42 IC '+numero_dynamique+' Lausanne --> Genève Genève-aéroport '; }
if (t120 >= rapide && affiche120 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h42 IC '+numero_dynamique+' Lausanne --> Genève Genève-aéroport <span style="color: orange">+'+t120+' min</span> '; }
if (t120 > 5 && affiche120 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h42 IC '+numero_dynamique+' Lausanne --> Genève Genève-aéroport <span style="color: red">+'+t120+' min</span> '; } 


if (les_minutes == 42 && les_secondes == 1 || train_depart120 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "ICZ";  train2_its77[1] = 1;  train2_its77[2] = 101;  train2_its77[3] = 0;  train2_its77[4] = 2; train2_its77[5] = ''+numero_dynamique+' IC Genève'; train2_its77[6] = 120;
train_depart120 = 'parti'; } else { train_depart120 = 'nonparti'; }	
}

if ( train2_its102[6] == 120 || train2_its111[6] == 120 || train2_its34[6] == 120 || train2_its55[6] == 120 || train2_its73[6] == 120 || train2_its23[6] == 120 ) {
if ( affiche120 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t120 = 0; train120 = 0; train_depart120 = ''; affiche120 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'IC 120 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IC 120 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// TGV  Lausanne --> Yverdon  / 515 / 42 min neu
t515 = Math.floor(train515 / 60); if ( train_depart515 == 'parti' || train_depart515 == 'nonparti') { train515++; }
if (les_minutes == 36 || les_minutes == 37 || les_minutes == 38 || les_minutes == 39 || les_minutes == 40 || affiche515 == true) {
dynamique++; affiche515 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h42 TGV '+numero_dynamique+' Lausanne --> Yverdon Dijon Paris '; }
if (t515 >= rapide && affiche515 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h42 TGV '+numero_dynamique+' Lausanne --> Yverdon Dijon Paris <span style="color: orange">+'+t515+' min</span> '; }
if (t515 > 5 && affiche515 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h42 TGV '+numero_dynamique+' Lausanne --> Yverdon Dijon Paris <span style="color: red">+'+t515+' min</span> '; } 


if (les_minutes == 41 && les_secondes == 50 ) {secondes_pn = 0; }
if (les_minutes == 42 && les_secondes == 1 || train_depart515 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "TGV";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 3; train2_its61[5] = 'TGV '+numero_dynamique+' Yverdon'; train2_its61[6] = 515;
train_depart515 = 'parti'; } else { train_depart515 = 'nonparti'; }	
}

if ( train2_its102[6] == 515 || train2_its111[6] == 515 || train2_its34[6] == 515 || train2_its55[6] == 515 || train2_its73[6] == 515 || train2_its23[6] == 515 ) {
if ( affiche515 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t515 = 0; train515 = 0; train_depart515 = ''; affiche515 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'TGV 515 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'TGV 515 Yverdon');
le_nombre_de_train++; 
}
}

// POST  Lausanne 516 / 43 min /
t516 = Math.floor(train516 / 60); if ( train_depart516 == 'parti' || train_depart516 == 'nonparti') { train516++; }
if (les_minutes == 39 || les_minutes == 40 || les_minutes == 41 || les_minutes == 42 || affiche516 == true) {
dynamique++; affiche516 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h43 MAR '+numero_dynamique+' Genève --> Lausanne '; }
if (t516 >= lent && affiche516 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h43 MAR '+numero_dynamique+' Genève --> Lausanne <span style="color: orange">+'+t516+' min</span> '; }
if (t516 > 5 && affiche516 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h43 MAR '+numero_dynamique+' Genève --> Lausanne <span style="color: red">+'+t516+' min</span> '; }

if (les_minutes == 43 && les_secondes == 1 || train_depart516 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "POST";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its50[6] = 516;
train_depart516 = 'parti'; } else { train_depart516 = 'nonparti'; }	
}

if ( train2_its103[6] == 516 || train2_its18[6] == 516 || train2_its37[6] == 516 || train2_its56[6] == 516 || train2_its74[6] == 516 || train2_its4[6] == 516) {
if ( affiche516 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t516 = 0; train516 = 0; train_depart516 = ''; affiche516 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 516 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 516 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Yverdon / 517 / 44 min
t517 = Math.floor(train517 / 60); if ( train_depart517 == 'parti' || train_depart517 == 'nonparti') { train517++; }
if (les_minutes == 39 || les_minutes == 40 || les_minutes == 41 || les_minutes == 42 || les_minutes == 43 || affiche517 == true) {
dynamique++; affiche517 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h44 MAR '+numero_dynamique+' Lausanne --> Yverdon '; }
if (t517 >= lent && affiche517 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h44 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: orange">+'+t517+' min</span> '; }
if (t517 > 5 && affiche517 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h44 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: red">+'+t517+' min</span> '; }

if (les_minutes == 44 && les_secondes == 1 || train_depart517 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "KN";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 3; train2_its61[5] = 'MAR '+numero_dynamique+' Yverdon'; train2_its61[6] = 517;
train_depart517 = 'parti'; } else { train_depart517 = 'nonparti'; }	
}

if ( train2_its102[6] == 517 || train2_its111[6] == 517 || train2_its34[6] == 517 || train2_its55[6] == 517 || train2_its73[6] == 517 || train2_its23[6] == 517 ) {
if ( affiche517 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t517 = 0; train517 = 0; train_depart517 = ''; affiche517 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 517 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 517 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// RE  Lausanne 122 / 45 min /
t122 = Math.floor(train122 / 60); if ( train_depart122 == 'parti' || train_depart122 == 'nonparti') { train122++; }
if (les_minutes == 40 || les_minutes == 41 || les_minutes == 42 || les_minutes == 43 || les_minutes == 44 || affiche122 == true) {
dynamique++; affiche122 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h45 RE '+numero_dynamique+' Genève --> Lausanne Fribourg Bern'; }
if (t122 >= moyen && affiche122 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h45 RE '+numero_dynamique+' Genève --> Lausanne Fribourg Bern <span style="color: orange">+'+t122+' min</span> '; }
if (t122 > 5 && affiche122 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h45 RE '+numero_dynamique+' Genève --> Lausanne Fribourg Bern <span style="color: red">+'+t122+' min</span> '; }

if (les_minutes == 45 && les_secondes == 1 || train_depart122 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "RE";  train2_its50[1] = 1;  train2_its50[2] = 4;  train2_its50[3] = 1;  train2_its50[4] = 1; train2_its50[5] = 'RE '+numero_dynamique+' Lausanne'; train2_its50[6] = 122;
train_depart122 = 'parti'; } else { train_depart122 = 'nonparti'; }	
}

if ( train2_its103[6] == 122 || train2_its18[6] == 122 || train2_its37[6] == 122 || train2_its56[6] == 122 || train2_its74[6] == 122 || train2_its4[6] == 122) {
if ( affiche122 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t122 = 0; train122 = 0; train_depart122 = ''; affiche122 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'RE 122 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'RE 122 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IC  Lausanne --> Genève  / 121 / 45 min /
t121 = Math.floor(train121 / 60); if ( train_depart121 == 'parti' || train_depart121 == 'nonparti') { train121++; }
if (les_minutes == 40 || les_minutes == 41 || les_minutes == 42 || les_minutes == 43 || les_minutes == 44 || affiche121 == true) {
dynamique++; affiche121 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h45 IC '+numero_dynamique+' Lausanne --> Genève Genève-aéroport'; }
if (t121 >= rapide && affiche121 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h45 IC '+numero_dynamique+' Lausanne --> Genève Genève-aéroport <span style="color: orange">+'+t121+' min</span> '; }
if (t121 > 5 && affiche121 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h45 IC '+numero_dynamique+' Lausanne --> Genève Genève-aéroport <span style="color: red">+'+t121+' min</span> '; } 

if (les_minutes == 45 && les_secondes == 1 || train_depart121 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "ICZ";  train2_its61[1] = 1;  train2_its61[2] = 4;  train2_its61[3] = 0;  train2_its61[4] = 2; train2_its61[5] = 'IC '+numero_dynamique+' Genève'; train2_its61[6] = 121;
train_depart121 = 'parti'; } else { train_depart121 = 'nonparti'; }	
}

if ( train2_its102[6] == 121 || train2_its111[6] == 121 || train2_its34[6] == 121 || train2_its55[6] == 121 || train2_its73[6] == 121 || train2_its23[6] == 121 ) {
if ( affiche121 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t121 = 0; train121 = 0; train_depart121 = ''; affiche121 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'IC 121 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IC 121 Genève');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// SP  Lausanne 518 / 45 min
t518 = Math.floor(train518 / 60); if ( train_depart518 == 'parti' || train_depart518 == 'nonparti') { train518++; }
if (les_minutes == 41 || les_minutes == 42 || les_minutes == 43 || les_minutes == 44 || affiche518 == true) {
dynamique++; affiche518 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h45 SP '+numero_dynamique+' Genève --> Lausanne - train spécial'; }
if (t518 >= rapide && affiche518 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h45 SP '+numero_dynamique+' Genève --> Lausanne - train spécial <span style="color: orange">+'+t518+' min</span> '; }
if (t518 > 5 && affiche518 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h45 SP '+numero_dynamique+' Genève --> Lausanne - train spécial <span style="color: red">+'+t518+' min</span> '; } 


if (les_minutes == 45 && les_secondes == 1 || train_depart518 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "SP";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'SP '+numero_dynamique+' Lausanne'; train2_its50[6] = 518;
train_depart518 = 'parti'; } else { train_depart518 = 'nonparti'; }	
}

if ( train2_its103[6] == 518 || train2_its18[6] == 518 || train2_its37[6] == 518 || train2_its56[6] == 518 || train2_its74[6] == 518 || train2_its4[6] == 518 ) {
if ( affiche518 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t518 = 0; train518 = 0; train_depart518 = ''; affiche518 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'SP 518 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'SP 518 Lausanne');
le_nombre_de_train++;
}
}

// 47 min

// ICN  Lausanne --> Yverdon 104 / 47 min
t104 = Math.floor(train104 / 60); if ( train_depart104 == 'parti' || train_depart104 == 'nonparti') { train104++; }
if (les_minutes == 42 || les_minutes == 43 || les_minutes == 44 || les_minutes == 45 || les_minutes == 46 || affiche104 == true) {
dynamique++; affiche104 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h47 ICN '+numero_dynamique+' Lausanne --> Yverdon Bienne Zurich '; }
if (t104 >= moyen && affiche104 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h47 ICN '+numero_dynamique+' Lausanne --> Yverdon Bienne Zurich <span style="color: orange">+'+t104+' min</span> '; }
if (t104 > 5 && affiche104 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h47 ICN '+numero_dynamique+' Lausanne --> Yverdon Bienne Zurich <span style="color: red">+'+t104+' min</span> '; } 

if (les_minutes == 47 && les_secondes == 1 || train_depart104 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "ICN";  train2_its61[1] = 1;  train2_its61[2] = 4;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'ICN '+numero_dynamique+' Yverdon'; train2_its61[6] = 104;
train_depart104 = 'parti'; } else { train_depart104 = 'nonparti'; }	
}

if ( train2_its23[6] == 104 || train2_its102[6] == 104 || train2_its111[6] == 104 || train2_its34[6] == 104 || train2_its55[6] == 104 || train2_its73[6] == 104 ) {
if ( affiche104 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t104 = 0; train104 = 0; train_depart104 = ''; affiche104 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'ICN 104 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'ICN 104 Yverdon');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// REG  Lausanne --> Genève    / 119 / 47 min /
t119 = Math.floor(train119 / 60); if ( train_depart119 == 'parti' || train_depart119 == 'nonparti') { train119++; }
if (les_minutes == 42 || les_minutes == 43 || les_minutes == 44 || les_minutes == 45 || les_minutes == 46 || affiche119 == true) {
dynamique++; affiche119 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h47 REG '+numero_dynamique+' Lausanne --> Genève Morges Nyon '; }
if (t119 >= moyen && affiche119 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h47 REG '+numero_dynamique+' Lausanne --> Genève Morges Nyon  <span style="color: orange">+'+t119+' min</span> '; }
if (t119 > 5 && affiche119 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h47 REG '+numero_dynamique+' Lausanne --> Genève Morges Nyon  <span style="color: red">+'+t119+' min</span> '; } 

if (les_minutes == 47 && les_secondes == 1 || train_depart119 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "S";  train2_its61[1] = 1;  train2_its61[2] = 4;  train2_its61[3] = 1;  train2_its61[4] = 2; train2_its61[5] = 'REG '+numero_dynamique+' Genève'; train2_its61[6] = 119;
train_depart119 = 'parti'; } else { train_depart119 = 'nonparti'; }	
}

if ( train2_its102[6] == 119 || train2_its111[6] == 119 || train2_its34[6] == 119 || train2_its55[6] == 119 || train2_its73[6] == 119 || train2_its23[6] == 119 ) {
if ( affiche119 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t119 = 0; train119 = 0; train_depart119 = ''; affiche119 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 119 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 119 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne 318 / 49 min 
t318 = Math.floor(train318 / 60); if ( train_depart318 == 'parti' || train_depart318 == 'nonparti') { train318++; }
if (les_minutes == 44 || les_minutes == 45 || les_minutes == 46 || les_minutes == 47 || les_minutes == 48 || affiche318 == true) {
dynamique++; affiche318 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h49 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle '; }
if (t318 >= moyen && affiche318 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h49 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: orange">+'+t318+' min</span> '; }
if (t318 > 5 && affiche318 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h49 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: red">+'+t318+' min</span> '; } 

if (les_minutes == 49 && les_secondes == 1 || train_depart318 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "D";  train2_its50[1] = 1;  train2_its50[2] = 4;  train2_its50[3] = 1;  train2_its50[4] = 1; train2_its50[5] = 'REG '+numero_dynamique+' Lausanne'; train2_its50[6] = 318;
train_depart318 = 'parti'; } else { train_depart318 = 'nonparti'; }	
}

if ( train2_its103[6] == 318 || train2_its18[6] == 318 || train2_its37[6] == 318 || train2_its56[6] == 318 || train2_its74[6] == 318 || train2_its4[6] == 318 ) {
if ( affiche318 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t318 = 0; train318 = 0; train_depart318 = ''; affiche318 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'REG 318 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 318 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Genève    / 519 / 50 min /
t519 = Math.floor(train519 / 60); if ( train_depart519 == 'parti' || train_depart519 == 'nonparti') { train519++; }
if (les_minutes == 46 || les_minutes == 47 || les_minutes == 48 || les_minutes == 49 || affiche519 == true) {
dynamique++; affiche519 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h50 MAR '+numero_dynamique+' Lausanne --> Genève '; }
if (t519 >= lent && affiche519 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h50 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: orange">+'+t519+' min</span> '; }
if (t519 > 5 && affiche519 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h50 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: red">+'+t519+' min</span> '; } 


if (les_minutes == 50 && les_secondes == 1 || train_depart519 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "MARE";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 2; train2_its61[5] = 'MAR '+numero_dynamique+' Genève'; train2_its61[6] = 519;
train_depart519 = 'parti'; le_nombre_de_train++;} else { train_depart519 = 'nonparti'; }	
}

if ( train2_its102[6] == 519 || train2_its111[6] == 519 || train2_its34[6] == 519 || train2_its55[6] == 519 || train2_its73[6] == 519 || train2_its23[6] == 519 ) {
if ( affiche519 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t519 = 0; train519 = 0; train_depart519 = ''; affiche519 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 519 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 519 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// LOC  Lausanne  / 50 min /
t118 = Math.floor(train118 / 60); if ( train_depart118 == 'parti' || train_depart118 == 'nonparti') { train118++; }
if (les_minutes == 46 || les_minutes == 47 || les_minutes == 48 || les_minutes == 49 || affiche118 == true) {
dynamique++; affiche118 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h50 MAR '+numero_dynamique+' Yverdon --> Lausanne    '; }
if (t118 >= lent && affiche118 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h50 MAR '+numero_dynamique+' Yverdon --> Lausanne    <span style="color: orange">+'+t118+' min</span> '; }
if (t118 > 5 && affiche118 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h50 MAR '+numero_dynamique+' Yverdon --> Lausanne    <span style="color: red">+'+t118+' min</span> '; }

if (les_minutes == 50 && les_secondes == 1 || train_depart118 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "LOC";  train2_its12[1] = 1;  train2_its12[2] = 4;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 118;
train_depart118 = 'parti'; } else { train_depart118 = 'nonparti'; }	
}

if ( train2_its103[6] == 118 || train2_its18[6] == 118 || train2_its37[6] == 118 || train2_its56[6] == 118 || train2_its74[6] == 118 || train2_its4[6] == 118) {
if ( affiche118 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t118 = 0; train118 = 0; train_depart118 = ''; affiche118 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 118 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 118 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne / 520 / 51 min
t520 = Math.floor(train520 / 60); if ( train_depart520 == 'parti' || train_depart520 == 'nonparti') { train520++; }
if (les_minutes == 46 || les_minutes == 47 || les_minutes == 48 || les_minutes == 49 || les_minutes == 50 || affiche520 == true) {
dynamique++; affiche520 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h51 RE '+numero_dynamique+' Genève --> Lausanne Montreux Sion'; }
if (t520 >= rapide && affiche520 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h51 RE '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: orange">+'+t520+' min</span> '; }
if (t520 > 5 && affiche520 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h51 RE '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: red">+'+t520+' min</span> '; } 

if (les_minutes == 51 && les_secondes == 1 || train_depart520 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "IR";  train2_its50[1] = 1;  train2_its50[2] = 0;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = 'REG '+numero_dynamique+' Lausanne'; train2_its50[6] = 520;
train_depart520 = 'parti'; } else { train_depart520 = 'nonparti'; }	
}

if ( train2_its103[6] == 520 || train2_its18[6] == 520 || train2_its37[6] == 520 || train2_its56[6] == 520 || train2_its74[6] == 520 || train2_its4[6] == 520 ) {
if ( affiche520 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t520 = 0; train520 = 0; train_depart520 = ''; affiche520 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'REG 520 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 520 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Genève    / 117 / 51 min /
t117 = Math.floor(train117 / 60); if ( train_depart117 == 'parti' || train_depart117 == 'nonparti') { train117++; }
if (les_minutes == 47 || les_minutes == 48 || les_minutes == 49 || les_minutes == 50 || affiche117 == true) {
dynamique++; affiche117 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h51 MAR '+numero_dynamique+' Lausanne --> Genève   '; }
if (t117 >= lent && affiche117 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h51 MAR '+numero_dynamique+' Lausanne --> Genève    <span style="color: orange">+'+t117+' min</span> '; }
if (t117 > 5 && affiche117 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h51 MAR '+numero_dynamique+' Lausanne --> Genève     <span style="color: red">+'+t117+' min</span> '; } 

if (les_minutes == 51 && les_secondes == 1 || train_depart117 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "MARB";  train2_its61[1] = 1;  train2_its61[2] = 4;  train2_its61[3] = 0;  train2_its61[4] = 2; train2_its61[5] = 'MAR '+numero_dynamique+' Genève'; train2_its61[6] = 117;
train_depart117 = 'parti'; } else { train_depart117 = 'nonparti'; }	
}

if ( train2_its102[6] == 117 || train2_its111[6] == 117 || train2_its34[6] == 117 || train2_its55[6] == 117 || train2_its73[6] == 117 || train2_its23[6] == 117 ) {
if ( affiche117 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t117 = 0; train117 = 0; train_depart117 = ''; affiche117 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 117 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 117 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne 309 / 52 min /
t521 = Math.floor(train521 / 60); if ( train_depart521 == 'parti' || train_depart521 == 'nonparti') { train521++; }
if (les_minutes == 47 || les_minutes == 48 || les_minutes == 49 || les_minutes == 50 || les_minutes == 51 || affiche521 == true) {
dynamique++; affiche521 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h52 MAR '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t521 >= lent && affiche521 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h52 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t521+' min</span> '; }
if (t521 > 5 && affiche521 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h52 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t521+' min</span> '; }

if (les_minutes == 52 && les_secondes == 1 || train_depart521 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "MARB";  train2_its12[1] = 1;  train2_its12[2] = 4;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 521;
train_depart521 = 'parti'; } else { train_depart521 = 'nonparti'; }	
}

if ( train2_its103[6] == 521 || train2_its18[6] == 521 || train2_its37[6] == 521 || train2_its56[6] == 521 || train2_its74[6] == 521 || train2_its4[6] == 521) {
if ( affiche521 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t521 = 0; train521 = 0; train_depart521 = ''; affiche521 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 521 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 521 Lausanne');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}


// TGV  Lausanne --> Genève    / 522 / 52 min /
t522 = Math.floor(train522 / 60); if ( train_depart522 == 'parti' || train_depart522 == 'nonparti') { train522++; }
if (les_minutes == 47 || les_minutes == 48 || les_minutes == 49 || les_minutes == 50 || les_minutes == 51 || affiche522 == true) {
dynamique++; affiche522 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h52 TGV '+numero_dynamique+' Lausanne --> Genève Lyon Paris '; }
if (t522 >= rapide && affiche522 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h52 TGV '+numero_dynamique+' Lausanne --> Genève Lyon Paris <span style="color: orange">+'+t522+' min</span> '; }
if (t522 > 5 && affiche522 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h52 TGV '+numero_dynamique+' Lausanne --> Genève Lyon Paris <span style="color: red">+'+t522+' min</span> '; } 


if (les_minutes == 52 && les_secondes == 1 || train_depart522 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "TGV";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 2; train2_its61[5] = 'TGV '+numero_dynamique+' Genève'; train2_its61[6] = 522;
train_depart522 = 'parti'; } else { train_depart522 = 'nonparti'; }	
}

if ( train2_its102[6] == 522 || train2_its111[6] == 522 || train2_its34[6] == 522 || train2_its55[6] == 522 || train2_its73[6] == 522 || train2_its23[6] == 522 ) {
if ( affiche522 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t522 = 0; train522 = 0; train_depart522 = ''; affiche522 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'TGV 522 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'TGV 522 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IR  Lausanne --> Genève    / 116 / 52 min /
t116 = Math.floor(train116 / 60); if ( train_depart116 == 'parti' || train_depart116 == 'nonparti') { train116++; }
if (les_minutes == 47 || les_minutes == 48 || les_minutes == 49 || les_minutes == 50 || les_minutes == 51 || affiche116 == true) {
dynamique++; affiche116 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h52 IR '+numero_dynamique+' Lausanne --> Genève Morges Nyon '; }
if (t116 >= rapide && affiche116 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h52 IR '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: orange">+'+t116+' min</span> '; }
if (t116 > 5 && affiche116 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h52 IR '+numero_dynamique+' Lausanne --> Genève Morges Nyon <span style="color: red">+'+t116+' min</span> '; } 

if (les_minutes == 52 && les_secondes == 1 || train_depart116 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "IR";  train2_its77[1] = 1;  train2_its77[2] = 101;  train2_its77[3] = 0;  train2_its77[4] = 2; train2_its77[5] = 'IR '+numero_dynamique+' Genève'; train2_its77[6] = 116;
train_depart116 = 'parti'; } else { train_depart116 = 'nonparti'; }	
}

if ( train2_its102[6] == 116 || train2_its111[6] == 116 || train2_its34[6] == 116 || train2_its55[6] == 116 || train2_its73[6] == 116 || train2_its23[6] == 116 ) {
if ( affiche116 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t116 = 0; train116 = 0; train_depart116 = ''; affiche116 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'IR 116 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IR 116 Genève');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// RE  Lausanne --> Genève     / 106 / 53 min
t106 = Math.floor(train106 / 60); if ( train_depart106 == 'parti' || train_depart106 == 'nonparti') { train106++; }
if (les_minutes == 49 || les_minutes == 50 || les_minutes == 51 || les_minutes == 52 || affiche106 == true) {
dynamique++; affiche106 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h53 RE '+numero_dynamique+' Lausanne --> Genève Morges Nyon '; }
if (t106 >= moyen && affiche106 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h53 RE '+numero_dynamique+' Lausanne --> Genève Morges Nyon  <span style="color: orange">+'+t106+' min</span> '; }
if (t106 > 5 && affiche106 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h53 RE '+numero_dynamique+' Lausanne --> Genève Morges Nyon  <span style="color: red">+'+t106+' min</span> '; } 

if (les_minutes == 53 && les_secondes == 1 || train_depart106 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "RE";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 2; train2_its61[5] = 'RE '+numero_dynamique+' Genève'; train2_its61[6] = 106;
train_depart106 = 'parti'; } else { train_depart106 = 'nonparti'; }	
}

if ( train2_its102[6] == 106 || train2_its111[6] == 106 || train2_its34[6] == 106 || train2_its55[6] == 106 || train2_its73[6] == 106 || train2_its23[6] == 106 ) {
if ( affiche106 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t106 = 0; train106 = 0; train_depart106 = ''; affiche106 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'RE 106 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'RE 106 Genève');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne 408 / 53 min 
t408 = Math.floor(train408 / 60); if ( train_depart408 == 'parti' || train_depart408 == 'nonparti') { train408++; }
if (les_minutes == 48 || les_minutes == 49 || les_minutes == 50 || les_minutes == 51 || les_minutes == 52 || affiche408 == true) {
dynamique++; affiche408 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h53 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle'; }
if (t408 >= moyen && affiche408 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h53 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: orange">+'+t408+' min</span> '; }
if (t408 > 5 && affiche408 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h53 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: red">+'+t408+' min</span> '; } 

if (les_minutes == 53 && les_secondes == 1 || train_depart408 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "S";  train2_its50[1] = 1;  train2_its50[2] = 4;  train2_its50[3] = 1;  train2_its50[4] = 1; train2_its50[5] = 'REG '+numero_dynamique+' Lausanne'; train2_its50[6] = 408;
train_depart408 = 'parti'; } else { train_depart408 = 'nonparti'; }	
}

if ( train2_its103[6] == 408 || train2_its18[6] == 408 || train2_its37[6] == 408 || train2_its56[6] == 408 || train2_its74[6] == 408  || train2_its4[6] == 408) {
if ( affiche408 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t408 = 0; train408 = 0; train_depart408 = ''; affiche408 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'REG 408 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 408 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// ICN  Lausanne 524 / 54 min 
t524 = Math.floor(train524 / 60); if ( train_depart524 == 'parti' || train_depart524 == 'nonparti') { train524++; }
if (les_minutes == 49 || les_minutes == 50 || les_minutes == 51 || les_minutes == 52 || les_minutes == 53 || affiche524 == true) {
dynamique++; affiche524 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h54 ICN '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t524 >= rapide && affiche524 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h54 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t524+' min</span> '; }
if (t524 > 5 && affiche524 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h54 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t524+' min</span> '; } 


if (les_minutes == 54 && les_secondes == 1 || train_depart524 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "ICN";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'ICN '+numero_dynamique+' Lausanne'; train2_its12[6] = 524;
train_depart524 = 'parti'; } else { train_depart524 = 'nonparti'; }	
}

if ( train2_its103[6] == 524 || train2_its18[6] == 524 || train2_its37[6] == 524 || train2_its56[6] == 524 || train2_its74[6] == 524 || train2_its4[6] == 524 ) {
if ( affiche524 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t524 = 0; train524 = 0; train_depart524 = ''; affiche524 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'ICN 524 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'ICN 524 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Yverdon / 525 / 54 min
t525 = Math.floor(train525 / 60); if ( train_depart525 == 'parti' || train_depart525 == 'nonparti') { train525++; }
if (les_minutes == 49 || les_minutes == 50 || les_minutes == 51 || les_minutes == 52 || les_minutes == 53 || affiche525 == true) {
dynamique++; affiche525 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h54 MAR '+numero_dynamique+' Lausanne --> Yverdon '; }
if (t525 >= lent && affiche525 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h54 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: orange">+'+t525+' min</span> '; }
if (t525 > 5 && affiche525 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h54 MAR '+numero_dynamique+' Lausanne --> Yverdon <span style="color: red">+'+t525+' min</span> '; }

if (les_minutes == 54 && les_secondes == 1 || train_depart525 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "KN";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 0;  train2_its61[4] = 3; train2_its61[5] = 'MAR '+numero_dynamique+' Yverdon'; train2_its61[6] = 525;
train_depart525 = 'parti'; } else { train_depart525 = 'nonparti'; }	
}

if ( train2_its102[6] == 525 || train2_its111[6] == 525 || train2_its34[6] == 525 || train2_its55[6] == 525 || train2_its73[6] == 525 || train2_its23[6] == 525 ) {
if ( affiche525 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t525 = 0; train525 = 0; train_depart525 = ''; affiche525 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 525 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 525 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne 115 / 55 min /
t115 = Math.floor(train115 / 60); if ( train_depart115 == 'parti' || train_depart115 == 'nonparti') { train115++; }
if (les_minutes == 51 || les_minutes == 52 || les_minutes == 53 || les_minutes == 54 || affiche115 == true) {
dynamique++; affiche115 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h55 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle '; }
if (t115 >= moyen && affiche115 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h55 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: orange">+'+t115+' min</span> '; }
if (t115 > 5 && affiche115 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h55 REG '+numero_dynamique+' Genève --> Lausanne Cully Aigle <span style="color: red">+'+t115+' min</span> '; }

if (les_minutes == 55 && les_secondes == 1 || train_depart115 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "D";  train2_its50[1] = 1;  train2_its50[2] = 4;  train2_its50[3] = 1;  train2_its50[4] = 1; train2_its50[5] = 'REG '+numero_dynamique+' Lausanne'; train2_its50[6] = 115;
train_depart115 = 'parti'; } else { train_depart115 = 'nonparti'; }	
}


if ( train2_its103[6] == 115 || train2_its18[6] == 115 || train2_its37[6] == 115 || train2_its56[6] == 115 || train2_its74[6] == 115 || train2_its4[6] == 115) {
if ( affiche115 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t115 = 0; train115 = 0; train_depart115 = ''; affiche115 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'REG 115 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 115 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne --> Genève    / 114 / 55 min /
t114 = Math.floor(train114 / 60); if ( train_depart114 == 'parti' || train_depart114 == 'nonparti') { train114++; }
if (les_minutes == 50 || les_minutes == 51 || les_minutes == 52 || les_minutes == 53 || les_minutes == 54 || affiche114 == true) {
dynamique++; affiche114 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h55 MAR '+numero_dynamique+' Lausanne --> Genève '; }
if (t114 >= lent && affiche114 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h55 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: orange">+'+t114+' min</span> '; }
if (t114 > 5 && affiche114 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h55 MAR '+numero_dynamique+' Lausanne --> Genève <span style="color: red">+'+t114+' min</span> '; } 

if (les_minutes == 55 && les_secondes == 1 || train_depart114 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "KN";  train2_its77[1] = 1;  train2_its77[2] = 4;  train2_its77[3] = 0;  train2_its77[4] = 2; train2_its77[5] = 'MAR '+numero_dynamique+' Genève'; train2_its77[6] = 114;
train_depart114 = 'parti'; } else { train_depart114 = 'nonparti'; }	
}


if ( train2_its102[6] == 114 || train2_its111[6] == 114 || train2_its34[6] == 114 || train2_its55[6] == 114 || train2_its73[6] == 114 || train2_its23[6] == 114 ) {
if ( affiche114 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t114 = 0; train114 = 0; train_depart114 = ''; affiche114 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'MAR 114 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 114 Genève');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S1  Vallorbe/ 526 / 56 min
t526 = Math.floor(train526 / 60); if ( train_depart526 == 'parti' || train_depart526 == 'nonparti') { train526++; }
if (les_minutes == 51 || les_minutes == 52 || les_minutes == 53 || les_minutes == 54 || les_minutes == 55 || affiche526 == true) {
dynamique++; affiche526 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_blanc.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h56 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay'; }
if (t526 >= moyen && affiche526 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h56 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: orange">+'+t526+' min</span> '; }
if (t526 > 5 && affiche526 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h56 REG '+numero_dynamique+' Lausanne --> Yverdon Cossonay Chavornay <span style="color: red">+'+t526+' min</span> '; } 


if (les_minutes == 56 && les_secondes == 1 || train_depart526 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "S";  train2_its61[1] = 1;  train2_its61[2] = 0;  train2_its61[3] = 1;  train2_its61[4] = 3; train2_its61[5] = 'REG '+numero_dynamique+' Yverdon'; train2_its61[6] = 526;
train_depart526 = 'parti'; } else { train_depart526 = 'nonparti'; }	
}

if ( train2_its102[6] == 526 || train2_its111[6] == 526 || train2_its34[6] == 526 || train2_its55[6] == 526 || train2_its73[6] == 526 || train2_its23[6] == 526 ) {
if ( affiche526 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t526 = 0; train526 = 0; train_depart526 = ''; affiche526 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'REG 526 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 526 Yverdon');
le_nombre_de_train++; 
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// INT Lausanne 111 / 56 min /
t111 = Math.floor(train111 / 60); if ( train_depart111 == 'parti' || train_depart111 == 'nonparti') { train111++; }
if (les_minutes == 51 || les_minutes == 52 || les_minutes == 53 || les_minutes == 54 || les_minutes == 55 || affiche111 == true) {
dynamique++; affiche111 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h56 INT '+numero_dynamique+' Yverdon --> Lausanne Montreux Sion '; }
if (t111 >= rapide && affiche111 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h56 INT '+numero_dynamique+' Yverdon --> Lausanne Montreux Sion <span style="color: orange">+'+t111+' min</span> '; }
if (t111 > 5 && affiche111 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h56 INT '+numero_dynamique+' Yverdon --> Lausanne Montreux Sion <span style="color: red">+'+t111+' min</span> '; }

if (les_minutes == 56 && les_secondes == 1 || train_depart111 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "ICN";  train2_its12[1] = 1;  train2_its12[2] = 302;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'INT '+numero_dynamique+' Lausanne'; train2_its12[6] = 111;
train_depart111 = 'parti'; } else { train_depart111 = 'nonparti'; }	
}

if ( train2_its103[6] == 111 || train2_its18[6] == 111 || train2_its37[6] == 111 || train2_its56[6] == 111 || train2_its74[6] == 111 || train2_its4[6] == 111) {
if ( affiche111 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t111 = 0; train111 = 0; train_depart111 = ''; affiche111 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'INT 111 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'INT 111 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// MAR  Lausanne 527 / 57 min 
t527 = Math.floor(train527 / 60); if ( train_depart527 == 'parti' || train_depart527 == 'nonparti') { train527++; }
if (les_minutes == 52 || les_minutes == 53 || les_minutes == 54 || les_minutes == 55 || les_minutes == 56 || affiche527 == true) {
dynamique++; affiche527 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_noir.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h57 MAR '+numero_dynamique+' Yverdon --> Lausanne '; }
if (t527 >= lent && affiche527 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h57 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t527+' min</span> '; }
if (t527 > 5 && affiche527 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h57 MAR '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t527+' min</span> '; } 


if (les_minutes == 57 && les_secondes == 1 || train_depart527 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "POST";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'MAR '+numero_dynamique+' Lausanne'; train2_its12[6] = 527;
train_depart527 = 'parti'; } else { train_depart527 = 'nonparti'; }	
}

if ( train2_its103[6] == 527 || train2_its18[6] == 527 || train2_its37[6] == 527 || train2_its56[6] == 527 || train2_its74[6] == 527 || train2_its4[6] == 527 ) {
if ( affiche527 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t527 = 0; train527 = 0; train_depart527 = ''; affiche527 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'MAR 527 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'MAR 527 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// TGV  Lausanne --> Yverdon / 110 / 57 min / neu
t110 = Math.floor(train110 / 60); if ( train_depart110 == 'parti' || train_depart110 == 'nonparti') { train110++; }
if (les_minutes == 53 || les_minutes == 54 || les_minutes == 55 || affiche110 == true) {
dynamique++; affiche110 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h57 TGV '+numero_dynamique+' Lausanne --> Yverdon Dijon Paris '; }
if (t110 >= rapide && affiche110 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h57 TGV '+numero_dynamique+' Lausanne --> Yverdon Dijon Paris <span style="color: orange">+'+t110+' min</span> '; }
if (t110 > 5 && affiche110 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h57 TGV '+numero_dynamique+' Lausanne --> Yverdon Dijon Paris <span style="color: red">+'+t110+' min</span> '; } 

if (les_minutes == 56 && les_secondes == 1 || train_depart110 == 'nonparti' ) {	
if ( its77 == 0 ) { its77 = 1; occupation_its77 = true; sens_its77 = 2;
train2_its77[0] = "TGV";  train2_its77[1] = 1;  train2_its77[2] = 4;  train2_its77[3] = 0;  train2_its77[4] = 3; train2_its77[5] = 'TGV '+numero_dynamique+' Yverdon'; train2_its77[6] = 110;
train_depart110 = 'parti'; } else { train_depart110 = 'nonparti'; }	
}

if ( train2_its102[6] == 110 || train2_its111[6] == 110 || train2_its34[6] == 110 || train2_its55[6] == 110 || train2_its73[6] == 110 || train2_its23[6] == 110 ) {
if ( affiche110 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t110 = 0; train110 = 0; train_depart110 = ''; affiche110 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'TGV 110 Yverdon'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'TGV 110 Yverdon');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// IC  Lausanne --> Genève    / 109 / 57 min /
t109 = Math.floor(train109 / 60); if ( train_depart109 == 'parti' || train_depart109 == 'nonparti') { train109++; }
if (les_minutes == 53 || les_minutes == 54 || les_minutes == 55 || les_minutes == 56 || affiche109 == true) {
dynamique++; affiche109 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h57 IC '+numero_dynamique+' Lausanne --> Genève Genève-aéroport'; }
if (t109 >= rapide && affiche109 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h57 IC '+numero_dynamique+' Lausanne --> Genève Genève-aéroport <span style="color: orange">+'+t109+' min</span> '; }
if (t109 > 5 && affiche109 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h57 IC '+numero_dynamique+' Lausanne --> Genève Genève-aéroport <span style="color: red">+'+t109+' min</span> '; } 

if (les_minutes == 57 && les_secondes == 1 || train_depart109 == 'nonparti' ) {	
if ( its61 == 0 ) { its61 = 1; occupation_its61 = true; sens_its61 = 2;
train2_its61[0] = "ICZ";  train2_its61[1] = 1;  train2_its61[2] = 4;  train2_its61[3] = 0;  train2_its61[4] = 2; train2_its61[5] = 'IC '+numero_dynamique+' Genève'; train2_its61[6] = 109;
train_depart109 = 'parti'; le_nombre_de_train++;} else { train_depart109 = 'nonparti'; }	
}

if ( train2_its102[6] == 109 || train2_its111[6] == 109 || train2_its34[6] == 109 || train2_its55[6] == 109 || train2_its73[6] == 109 || train2_its23[6] == 109 ) {
if ( affiche109 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t109 = 0; train109 = 0; train_depart109 = ''; affiche109 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png';
request4(nom, 'IC 109 Genève'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'IC 109 Genève');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// S  Lausanne 411 / 58 min
t411 = Math.floor(train411 / 60); if ( train_depart411 == 'parti' || train_depart411 == 'nonparti') { train411++; }
if (les_minutes == 54 || les_minutes == 55 || les_minutes == 56 || les_minutes == 57 || affiche411 == true) {
dynamique++; affiche411 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h58 RE '+numero_dynamique+' Genève --> Lausanne Montreux Sion '; }
if (t411 >= rapide && affiche411 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h58 RE '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: orange">+'+t411+' min</span> '; }
if (t411 > 5 && affiche411 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h58 RE '+numero_dynamique+' Genève --> Lausanne Montreux Sion <span style="color: red">+'+t411+' min</span> '; } 

if (les_minutes == 58 && les_secondes == 1 || train_depart411 == 'nonparti' ) {	
if ( its50 == 0 ) { its50 = 1; occupation_its50 = true; sens_its50 = 1;
train2_its50[0] = "D";  train2_its50[1] = 1;  train2_its50[2] = 4;  train2_its50[3] = 0;  train2_its50[4] = 1; train2_its50[5] = ''+numero_dynamique+' REG Lausanne'; train2_its50[6] = 411;
train_depart411 = 'parti'; } else { train_depart411 = 'nonparti'; }	
}

if ( train2_its103[6] == 411 || train2_its18[6] == 411 || train2_its37[6] == 411 || train2_its56[6] == 411 || train2_its74[6] == 411  || train2_its4[6] == 411) {
if ( affiche411 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t411 = 0; train411 = 0; train_depart411 = ''; affiche411 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'REG 411 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'REG 411 Lausanne');
le_nombre_de_train++;
}
}

numero_dynamique++; if ( dynamique > 11 ) { dynamique = 11;}

// ICN  Lausanne 524 / 59 min 
t528 = Math.floor(train528 / 60); if ( train_depart528 == 'parti' || train_depart528 == 'nonparti') { train528++; }
if (les_minutes == 54 || les_minutes == 55 || les_minutes == 56 || les_minutes == 57 || les_minutes == 58 || affiche528 == true) {
dynamique++; affiche528 = true;
document.getElementById("une_image_tableau_"+dynamique+"").src = "image/affichage/tableau_rouge.png";
document.getElementById("tableau"+dynamique+"").innerHTML 				= +heure2+'h59 ICN '+numero_dynamique+' Yverdon --> Lausanne'; }
if (t528 >= rapide && affiche528 == true) 
{retard++; document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h59 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: orange">+'+t528+' min</span> '; }
if (t528 > 5 && affiche528 == true) 
{			document.getElementById("tableau"+dynamique+"").innerHTML 	= +heure2+'h59 ICN '+numero_dynamique+' Yverdon --> Lausanne <span style="color: red">+'+t528+' min</span> '; } 


if (les_minutes == 59 && les_secondes == 1 || train_depart528 == 'nonparti' ) {	
if ( its12 == 0 ) { its12 = 1; occupation_its12 = true; sens_its12 = 1;
train2_its12[0] = "ICN";  train2_its12[1] = 1;  train2_its12[2] = 0;  train2_its12[3] = 0;  train2_its12[4] = 1; train2_its12[5] = 'ICN '+numero_dynamique+' Lausanne'; train2_its12[6] = 528;
train_depart528 = 'parti'; } else { train_depart528 = 'nonparti'; }	
}

if ( train2_its103[6] == 528 || train2_its18[6] == 528 || train2_its37[6] == 528 || train2_its56[6] == 528 || train2_its74[6] == 528 || train2_its4[6] == 528 ) {
if ( affiche528 == true ) {
document.getElementById("tableau"+dynamique+"").innerHTML = ""; t528 = 0; train528 = 0; train_depart528 = ''; affiche528 = false;
document.getElementById("une_image_tableau_"+dynamique+"").src = 'image/affichage/tableau_bleu.png'; 
request4(nom, 'ICN 528 Lausanne'); request5(nom, le_nombre_de_train, minutes_de_retard, train_heure, 'ICN 528 Lausanne');
le_nombre_de_train++;
}
}

if ( dynamique > 11 ) { dynamique = 11;}





			

			// Rapport aux trains
			/*
			
			if ( train_depart101 == 'parti' || train_depart101 == 'nonparti') { train101++; }
			if ( train_depart102 == 'parti' || train_depart102 == 'nonparti') { train102++; }
			if ( train_depart103 == 'parti' || train_depart103 == 'nonparti') { train103++; }
			if ( train_depart104 == 'parti' || train_depart104 == 'nonparti') { train104++; }
			if ( train_depart105 == 'parti' || train_depart105 == 'nonparti') { train105++; }
			if ( train_depart106 == 'parti' || train_depart106 == 'nonparti') { train106++; }
			if ( train_depart107 == 'parti' || train_depart107 == 'nonparti') { train107++; }
			if ( train_depart108 == 'parti' || train_depart108 == 'nonparti') { train108++; }
			if ( train_depart109 == 'parti' || train_depart109 == 'nonparti') { train109++; }
			if ( train_depart110 == 'parti' || train_depart110 == 'nonparti') { train110++; }
			if ( train_depart111 == 'parti' || train_depart111 == 'nonparti') { train111++; }
			if ( train_depart112 == 'parti' || train_depart112 == 'nonparti') { train112++; }
			if ( train_depart113 == 'parti' || train_depart113 == 'nonparti') { train113++; }
			if ( train_depart114 == 'parti' || train_depart114 == 'nonparti') { train114++; }
			if ( train_depart115 == 'parti' || train_depart115 == 'nonparti') { train115++; }
			if ( train_depart116 == 'parti' || train_depart116 == 'nonparti') { train116++; }
			if ( train_depart117 == 'parti' || train_depart117 == 'nonparti') { train117++; }
			if ( train_depart118 == 'parti' || train_depart118 == 'nonparti') { train118++; }
			if ( train_depart119 == 'parti' || train_depart119 == 'nonparti') { train119++; }
			if ( train_depart120 == 'parti' || train_depart120 == 'nonparti') { train120++; }
			if ( train_depart121 == 'parti' || train_depart121 == 'nonparti') { train121++; }
			if ( train_depart122 == 'parti' || train_depart122 == 'nonparti') { train122++; }
			
			if ( train_depart201 == 'parti' || train_depart201 == 'nonparti') { train201++; }
			if ( train_depart202 == 'parti' || train_depart202 == 'nonparti') { train202++; }
			if ( train_depart203 == 'parti' || train_depart203 == 'nonparti') { train203++; }
			if ( train_depart204 == 'parti' || train_depart204 == 'nonparti') { train204++; }
			if ( train_depart205 == 'parti' || train_depart205 == 'nonparti') { train205++; }
			if ( train_depart206 == 'parti' || train_depart206 == 'nonparti') { train206++; }
			if ( train_depart207 == 'parti' || train_depart207 == 'nonparti') { train207++; }
			if ( train_depart208 == 'parti' || train_depart208 == 'nonparti') { train208++; }
			if ( train_depart209 == 'parti' || train_depart209 == 'nonparti') { train209++; }
			if ( train_depart210 == 'parti' || train_depart210 == 'nonparti') { train210++; }
			if ( train_depart211 == 'parti' || train_depart211 == 'nonparti') { train211++; }
			if ( train_depart212 == 'parti' || train_depart212 == 'nonparti') { train212++; }
			if ( train_depart213 == 'parti' || train_depart213 == 'nonparti') { train213++; }
			if ( train_depart214 == 'parti' || train_depart214 == 'nonparti') { train214++; }
			if ( train_depart215 == 'parti' || train_depart215 == 'nonparti') { train215++; }
			if ( train_depart216 == 'parti' || train_depart216 == 'nonparti') { train216++; }
			if ( train_depart217 == 'parti' || train_depart217 == 'nonparti') { train217++; }
			if ( train_depart218 == 'parti' || train_depart218 == 'nonparti') { train218++; }
			if ( train_depart219 == 'parti' || train_depart219 == 'nonparti') { train219++; }
			if ( train_depart220 == 'parti' || train_depart220 == 'nonparti') { train220++; }
			if ( train_depart221 == 'parti' || train_depart221 == 'nonparti') { train221++; }
			if ( train_depart222 == 'parti' || train_depart222 == 'nonparti') { train222++; }
			
			if ( train_depart301 == 'parti' || train_depart301 == 'nonparti') { train301++; }
			if ( train_depart302 == 'parti' || train_depart302 == 'nonparti') { train302++; }
			if ( train_depart303 == 'parti' || train_depart303 == 'nonparti') { train303++; }
			if ( train_depart304 == 'parti' || train_depart304 == 'nonparti') { train304++; }
			if ( train_depart305 == 'parti' || train_depart305 == 'nonparti') { train305++; }
			if ( train_depart306 == 'parti' || train_depart306 == 'nonparti') { train306++; }
			if ( train_depart307 == 'parti' || train_depart307 == 'nonparti') { train307++; }
			if ( train_depart308 == 'parti' || train_depart308 == 'nonparti') { train308++; }
			if ( train_depart309 == 'parti' || train_depart309 == 'nonparti') { train309++; }
			if ( train_depart310 == 'parti' || train_depart310 == 'nonparti') { train310++; }
			if ( train_depart311 == 'parti' || train_depart311 == 'nonparti') { train311++; }
			if ( train_depart312 == 'parti' || train_depart312 == 'nonparti') { train312++; }
			if ( train_depart313 == 'parti' || train_depart313 == 'nonparti') { train313++; }
			if ( train_depart314 == 'parti' || train_depart314 == 'nonparti') { train314++; }
			if ( train_depart315 == 'parti' || train_depart315 == 'nonparti') { train315++; }
			if ( train_depart316 == 'parti' || train_depart316 == 'nonparti') { train316++; }
			if ( train_depart317 == 'parti' || train_depart317 == 'nonparti') { train317++; }
			if ( train_depart318 == 'parti' || train_depart318 == 'nonparti') { train318++; }
			if ( train_depart319 == 'parti' || train_depart319 == 'nonparti') { train319++; }
			if ( train_depart320 == 'parti' || train_depart320 == 'nonparti') { train320++; }
			if ( train_depart321 == 'parti' || train_depart321 == 'nonparti') { train321++; }
			if ( train_depart322 == 'parti' || train_depart322 == 'nonparti') { train322++; }
			
			if ( train_depart401 == 'parti' || train_depart401 == 'nonparti') { train401++; }
			if ( train_depart402 == 'parti' || train_depart402 == 'nonparti') { train402++; }
			if ( train_depart403 == 'parti' || train_depart403 == 'nonparti') { train403++; }
			if ( train_depart404 == 'parti' || train_depart404 == 'nonparti') { train404++; }
			if ( train_depart405 == 'parti' || train_depart405 == 'nonparti') { train405++; }
			if ( train_depart406 == 'parti' || train_depart406 == 'nonparti') { train406++; }
			if ( train_depart407 == 'parti' || train_depart407 == 'nonparti') { train407++; }
			if ( train_depart408 == 'parti' || train_depart408 == 'nonparti') { train408++; }
			if ( train_depart409 == 'parti' || train_depart409 == 'nonparti') { train409++; }
			if ( train_depart410 == 'parti' || train_depart410 == 'nonparti') { train410++; }
			if ( train_depart411 == 'parti' || train_depart411 == 'nonparti') { train411++; }
			if ( train_depart412 == 'parti' || train_depart412 == 'nonparti') { train412++; }
			if ( train_depart413 == 'parti' || train_depart413 == 'nonparti') { train413++; }
			if ( train_depart414 == 'parti' || train_depart414 == 'nonparti') { train414++; }
			if ( train_depart415 == 'parti' || train_depart415 == 'nonparti') { train415++; }
			if ( train_depart416 == 'parti' || train_depart416 == 'nonparti') { train416++; }
			if ( train_depart417 == 'parti' || train_depart417 == 'nonparti') { train417++; } 
			if ( train_depart418 == 'parti' || train_depart418 == 'nonparti') { train418++; } 
			
			if ( train_depart420 == 'parti' || train_depart420 == 'nonparti') { train420++; } 
			if ( train_depart421 == 'parti' || train_depart421 == 'nonparti') { train421++; } 
			if ( train_depart422 == 'parti' || train_depart422 == 'nonparti') { train422++; } 
			
			if ( train_depart501 == 'parti' || train_depart501 == 'nonparti') { train501++; } 
			if ( train_depart502 == 'parti' || train_depart502 == 'nonparti') { train502++; } 
			if ( train_depart503 == 'parti' || train_depart503 == 'nonparti') { train503++; } 
			if ( train_depart504 == 'parti' || train_depart504 == 'nonparti') { train504++; } 
			if ( train_depart505 == 'parti' || train_depart505 == 'nonparti') { train505++; } 
			if ( train_depart506 == 'parti' || train_depart506 == 'nonparti') { train506++; } 
			if ( train_depart507 == 'parti' || train_depart507 == 'nonparti') { train507++; } 
			if ( train_depart508 == 'parti' || train_depart508 == 'nonparti') { train508++; } 
			if ( train_depart509 == 'parti' || train_depart509 == 'nonparti') { train509++; } 
			if ( train_depart510 == 'parti' || train_depart510 == 'nonparti') { train510++; } 
			if ( train_depart511 == 'parti' || train_depart511 == 'nonparti') { train511++; } 
			if ( train_depart512 == 'parti' || train_depart512 == 'nonparti') { train512++; } 
			if ( train_depart513 == 'parti' || train_depart513 == 'nonparti') { train513++; } 
			if ( train_depart514 == 'parti' || train_depart514 == 'nonparti') { train514++; } 
			if ( train_depart515 == 'parti' || train_depart515 == 'nonparti') { train515++; } 
			if ( train_depart516 == 'parti' || train_depart516 == 'nonparti') { train516++; } 
			if ( train_depart517 == 'parti' || train_depart517 == 'nonparti') { train517++; } 
			if ( train_depart518 == 'parti' || train_depart518 == 'nonparti') { train518++; } 
			if ( train_depart519 == 'parti' || train_depart519 == 'nonparti') { train519++; } 
			if ( train_depart520 == 'parti' || train_depart520 == 'nonparti') { train520++; } 
			if ( train_depart521 == 'parti' || train_depart521 == 'nonparti') { train521++; } 
			if ( train_depart522 == 'parti' || train_depart522 == 'nonparti') { train522++; } 
			if ( train_depart523 == 'parti' || train_depart523 == 'nonparti') { train523++; } 
			if ( train_depart524 == 'parti' || train_depart524 == 'nonparti') { train524++; } 
			if ( train_depart525 == 'parti' || train_depart525 == 'nonparti') { train525++; } 
			if ( train_depart526 == 'parti' || train_depart526 == 'nonparti') { train526++; } 
			if ( train_depart527 == 'parti' || train_depart527 == 'nonparti') { train527++; } 
			if ( train_depart528 == 'parti' || train_depart528 == 'nonparti') { train528++; } 
			if ( train_depart529 == 'parti' || train_depart529 == 'nonparti') { train529++; } 
			
			if ( train_depart601 == 'parti' || train_depart601 == 'nonparti') { train601++; } 
			
			
			

			// On envoie le resulat du score
			if ( le_nombre_de_train > 1 ) {
			train_percent = Math.floor(100*train_retard/le_nombre_de_train);
			train_percent = 100 - train_percent;
			if ( train_percent <= 0 ) { train_percent = 0;}
			}
			
			*/	
			
			minutes_de_retard = Math.floor(retard / 60);


			if ( minutes_de_retard >= 20) {
				retard = 0;
			
			alert("Retard maximum atteint !");
			window.location = 'https://ma-gare-mes-trains.fr/jeuxDemo/toilette.php';
			}
			

		
}

