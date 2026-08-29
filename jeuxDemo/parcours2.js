function parcours2() {


if ( point_de_passage_1 == 'z22' && aiguille92 == 1 && aiguille95 == 1 )  	{ 
point_de_passage_1 = '';
if (   	its92 == 1 || its121 == 1 || its95 == 1 || its118 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its106 = 1; its92 = 1; its121 = 1; its19 = 1; its95 = 1; its37 = 1; its118 = 1;  memoire = 1000;
document.getElementById("z10").src = "image/feux/vert_2.png";
document.getElementById("z22").src = "image/feux/vert_2.png";
}
}

	
if ( point_de_passage_1 == 'z22' && aiguille92 == 1 && aiguille95 == 0 )  	{ 
point_de_passage_1 = '';
if (   	its105 == 1 || its19 == 1 || its18 == 1 || its17 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its106 = 1; its92 = 1; its19 = 1; its121 = 1; its18 = 1; its17 = 1;  memoire = 1001;
document.getElementById("z9").src = "image/feux/vert_2.png";
document.getElementById("z22").src = "image/feux/vert_2.png";
}
}


if ( point_de_passage_1 == 'z22' && aiguille92 == 0 && aiguille96 == 1 )  	{ 
point_de_passage_1 = '';
if (   	its105 == 1 || its104 == 1 || its4 == 1 || its8 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its106 = 1; its105 = 1; its104 = 1; its96 = 1; its4 = 1; its8 = 1;  memoire = 1002;
document.getElementById("z17").src = "image/feux/vert_2.png";
document.getElementById("z22").src = "image/feux/vert_2.png";
}
}
	
	
if ( point_de_passage_1 == 'z22' && aiguille92 == 0 && aiguille96 == 0 )  	{ 
point_de_passage_1 = '';
if (   	its105 == 1 || its103 == 1 || its117 == 1 || its104 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its106 = 1; its105 = 1; its104 = 1; its103 = 1; its117 = 1;  memoire = 1003;
document.getElementById("z21").src = "image/feux/vert_2.png";
document.getElementById("z22").src = "image/feux/vert_2.png";
}
}
	
if ( point_de_passage_1 == 'z23' && aiguille82 == 0 && aiguille97 == 0 )  	{ 
point_de_passage_1 = '';
if (   	its101 == 1 || its102 == 1 || its117 == 1 || its103 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its132 = 1; its101 = 1; its102 = 1; its117 = 1;  memoire = 1004;
document.getElementById("z23").src = "image/feux/vert_2.png";
document.getElementById("z20").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z23' && aiguille82 == 0 && aiguille97 == 1 )  	{ 
point_de_passage_1 = '';
if (   	its101 == 1 || its23 == 1 || its4 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its132 = 1; its101 = 1; its97 = 1; its2 = 1; its8 = 1; its23 = 1;  memoire = 1005;
document.getElementById("z23").src = "image/feux/vert_2.png";
document.getElementById("z16").src = "image/feux/vert_2.png";
}
}



if ( point_de_passage_1 == 'z1' && aiguille79 == 0 && aiguille82 == 0 )  	{ // arrivee Yverdon pour voie 4
point_de_passage_1 = '';
if (   	its14 == 1 || its15 == 1 || its16 == 1 || its111 == 1 || its17 == 1 || its17 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its14 = 1; its15 = 1; its16 = 1; its111 = 1; its17 = 1;	memoire = 15;
document.getElementById("z5").src = "image/feux/vert_2.png";
document.getElementById("z1").src = "image/feux/vert_2.png";
//if ( train2_its12[2] == 301)  { nextSong(32); }
//if ( train2_its12[2] == 302)  { nextSong(37); }
}
}

if ( point_de_passage_1 == 'z1' && aiguille79 == 0 && aiguille82 == 1 && aiguille97 == 0 )  	{ // arrivee Yverdon pour voie 5
point_de_passage_1 = '';
if (   	its14 == 1 || its16 == 1 || its101 == 1 || its102 == 1 || its117 == 1 || its117 == 3) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its14 = 1; its15 = 1; its16 = 1; its82 = 1;	its101 = 1; its102 = 1; its117 = 1; memoire = 16;
document.getElementById("z20").src = "image/feux/vert_2.png";
document.getElementById("z1").src = "image/feux/vert_2.png";
//if ( train2_its12[2] == 301)  { nextSong(33); }
//if ( train2_its12[2] == 302)  { nextSong(38);}
}
}

if ( point_de_passage_1 == 'z1' && aiguille79 == 0 && aiguille82 == 1 && aiguille97 == 1  )  	{ // arrivee Yverdon pour voie 6
point_de_passage_1 = '';
if (   	its14 == 1 || its16 == 1 || its101 == 1 || its8 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its14 = 1; its15 = 1; its16 = 1; its82 = 1;	its101 = 1; its97 = 1; its2 = 1; its23 = 1; its8 = 1;  memoire = 161;
document.getElementById("z1").src = "image/feux/vert_2.png";
document.getElementById("z16").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z1' && aiguille79 == 1 && aiguille80 == 0 && aiguille81 == 0 )  	{ // arrivee Yverdon pour  voie 3
point_de_passage_1 = '';
if (   	its14 == 1 || its79 == 1 || its131 == 1 || its33 == 1 || its34 == 1 || its118 == 1 || its118 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its14 = 1; its79 = 1; its32 = 1; its131 = 1; its33 = 1; its34 = 1;	its118 = 1; memoire = 17; 
document.getElementById("z1").src = "image/feux/vert_2.png";
document.getElementById("z6").src = "image/feux/vert_2.png";
//if ( train2_its12[2] == 301)  { nextSong(31); }
//if ( train2_its12[2] == 302)  { nextSong(36); }
}
}

if ( point_de_passage_1 == 'z1' && aiguille79 == 1 && aiguille81 == 1 && aiguille80 == 0 && aiguille93 == 0 )  	{ // arrivee Yverdon pour  voie 2
point_de_passage_1 = '';
if (   	its14 == 1 || its79 == 1 || its131 == 1 || its33 == 1 || its81 == 1 || its54 == 1 || its55 == 1 || its119 == 1 || its119 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its14 = 1; its79 = 1; its32 = 1; its131 = 1; its33 = 1; its81 = 1; its54 = 1; its55 = 1; its119 = 1;  memoire = 18;
document.getElementById("z1").src = "image/feux/vert_2.png";
document.getElementById("z7").src = "image/feux/vert_2.png";
//if ( train2_its12[2] == 301)  { nextSong(30); }
//if ( train2_its12[2] == 302)  { nextSong(35); }
}
}

if ( point_de_passage_1 == 'z1' && aiguille79 == 1 && aiguille81 == 1 && aiguille80 == 0 && aiguille93 == 1 )  	{ // arrivee Yverdon pour  voie 1
point_de_passage_1 = '';
if (   	its14 == 1 || its79 == 1 || its131 == 1 || its33 == 1 || its81 == 1 || its54 == 1 || its93 == 1 || its73 == 1 || its120 == 1 || its120 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its14 = 1; its79 = 1; its32 = 1; its131 = 1; its33 = 1; its81 = 1; its54 = 1; its93 = 1; its73 = 1; its120 = 1; memoire = 181;
document.getElementById("z1").src = "image/feux/vert_2.png";
document.getElementById("z8").src = "image/feux/vert_2.png";
//if ( train2_its12[2] == 301)  { nextSong(29);}
//if ( train2_its12[2] == 302)  { nextSong(34);}
}
}



if ( point_de_passage_1 == 'z20' && its102 == 1)  	{ 
point_de_passage_1 = '';
if (   	its117 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its117 = 1; memoire = 117;
}
}

if ( point_de_passage_1 == 'z21' && its103 == 1)  	{ 
point_de_passage_1 = '';
if (   	its117 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its117 = 1; memoire = 117;
}
}

if ( point_de_passage_1 == 'z5' && its111 == 1)  	{ 
point_de_passage_1 = '';
if (   	its17 == 1 ) 	{ alert('itinéraire occupé 1'); 
document.getElementById("z5").src = "image/feux/rouge_2.png";
z5 = 'rouge';
} 
else { 	its17 = 1; memoire = 1710;
}
}

if ( point_de_passage_1 == 'z9' && its18 == 1)  	{ 
point_de_passage_1 = '';
if (   	its17 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its17 = 1; memoire = 1711;
}
}

if ( point_de_passage_1 == 'z6' && its34 == 1)  	{ 
point_de_passage_1 = '';
if (   	its118 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its118 = 1; memoire = 118;
}
}

if ( point_de_passage_1 == 'z10' && its37 == 1)  	{ 
point_de_passage_1 = '';
if (   	its118 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its118 = 1; memoire = 118;
}
}

if ( point_de_passage_1 == 'z7' && its55 == 1)  	{ 
point_de_passage_1 = '';
if (   	its119 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its119 = 1; memoire = 119;
}
}

if ( point_de_passage_1 == 'z11' && its56 == 1)  	{ 
point_de_passage_1 = '';
if (   	its119 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its119 = 1; memoire = 119;
}
}

if ( point_de_passage_1 == 'z8' && its73 == 1)  	{ 
point_de_passage_1 = '';
if (   	its120 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its120 = 1; memoire = 120;
}
}

if ( point_de_passage_1 == 'z12' && its74 == 1)  	{ 
point_de_passage_1 = '';
if (   	its120 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its120 = 1; memoire = 120;
}
}




if ( point_de_passage_1 == 'z21' && its117 == 1 && aiguille83 == 0 )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages, vérifiez les aiguillages'); 
z9 = 'rouge';
}



if ( point_de_passage_1 == 'z21' && its117 == 1 && aiguille83 == 1 && aiguille84 == 0  )  	{ 
point_de_passage_1 = '';
if (   	its103 == 1 || its104 == 1 || its19 == 1 || its21 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its103 = 1; its104 = 1; its83 = 1; its19 = 1; its20 = 1; its21 = 1; its22 = 1; memoire = 301;
document.getElementById("z21").src = "image/feux/vert_2.png";
document.getElementById("z18").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z21' && its117 == 1 && aiguille83 == 1 && aiguille84 == 1  )  	{ 
point_de_passage_1 = '';
if (   	its103 == 1 || its104 == 1 || its19 == 1 || its39 == 1 || its41 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its103 = 1; its104 = 1; its83 = 1; its19 = 1; its84 = 1; its39 = 1; its40 = 1; its41 = 1; its42 = 1; its43 = 1; memoire = 302;
document.getElementById("z21").src = "image/feux/vert_2.png";
document.getElementById("z13").src = "image/feux/vert_2.png";
}
}


if ( point_de_passage_1 == 'z9' && its17 == 1 && aiguille84 == 0 && aiguille83 == 0 && aiguille92 == 0  )  	{ 
point_de_passage_1 = '';
if (   	its18 == 1 || its121 == 1 || its19 == 1 || its21 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its18 = 1; its121 = 1; its19= 1; its20 = 1; its21 = 1; its22 = 1;  memoire = 310;
document.getElementById("z9").src = "image/feux/vert_2.png";
document.getElementById("z18").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z9' && its17 == 1 && aiguille84 == 1 && aiguille85 == 0 && aiguille92 == 0  )  	{ 
point_de_passage_1 = '';
if (   	its18 == 1 || its121 == 1 || its19 == 1 || its39 == 1 || its41 == 1 || its21 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its18 = 1; its121 = 1; its19= 1; its84 = 1; its39 = 1; its40 = 1; its41 = 1; its42 = 1; its43 = 1;  memoire = 311;
document.getElementById("z9").src = "image/feux/vert_2.png";
document.getElementById("z13").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z9' && its17 == 1 && aiguille84 == 0 && aiguille92 == 1  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z9 = 'rouge';
}

if ( point_de_passage_1 == 'z9' && its17 == 1 && aiguille84 == 1 && aiguille85 == 1  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z9 = 'rouge';
}


if ( point_de_passage_1 == 'z10' && its118 == 1 && aiguille95 == 0 && aiguille84 == 0 && aiguille91 == 0 && aiguille85 == 0 )  	{ 
point_de_passage_1 = '';
if (   	its37 == 1 || its39 == 1 || its41 == 1 || its42 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its37 = 1; its38 = 1; its39= 1; its40 = 1; its41 = 1; its42 = 1; its43 = 1;  memoire = 312;
document.getElementById("z10").src = "image/feux/vert_2.png";
document.getElementById("z13").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z10' && its118 == 1 && aiguille95 == 0 && aiguille84 == 0 && aiguille91 == 1 && aiguille85 == 0 )  	{ 
point_de_passage_1 = '';
if (   	its37 == 1 || its39 == 1 || its41 == 1 || its21 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its37 = 1; its38 = 1; its39 = 1; its40 = 1; its41 = 1; its91 = 1; its21 = 1; its22 = 1;  memoire = 313;
document.getElementById("z10").src = "image/feux/vert_2.png";
document.getElementById("z18").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z10' && its118 == 1 && aiguille95 == 1 && aiguille84 == 0 && aiguille91 == 0 && aiguille92 == 0  )  	{ 
point_de_passage_1 = '';
if (   	its37 == 1 || its19 == 1 || its20 == 1 || its21 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its37 = 1; its95 = 1; its121 = 1; its19 = 1; its20 = 1; its21 = 1; its22 = 1; memoire = 314;
document.getElementById("z10").src = "image/feux/vert_2.png";
document.getElementById("z18").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z10' && its118 == 1 && aiguille95 == 1 && aiguille92 == 1  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z10 = 'rouge';

}

if ( point_de_passage_1 == 'z10' && its118 == 1 && aiguille85 == 1  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z10 = 'rouge';

}



if ( point_de_passage_1 == 'z11' && its119 == 1 && aiguille88 == 1 && aiguille91 == 0 )  	{ 
point_de_passage_1 = '';
if (   	its56 == 1 || its57 == 1 || its58 == 1 || its41 == 1 || its43 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its56 = 1; its57 = 1; its58 = 1; its88 = 1; its41 = 1; its42 = 1; its43 = 1;  memoire = 320;
document.getElementById("z11").src = "image/feux/vert_2.png";
document.getElementById("z13").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z11' && its119 == 1 && aiguille88 == 1 && aiguille91 == 1 )  	{ 
point_de_passage_1 = '';
if (   	its56 == 1 || its57 == 1 || its58 == 1 || its41 == 1 || its21 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its56 = 1; its57 = 1; its58 = 1; its88 = 1; its41 = 1; its91= 1; its21 = 1; its22 = 1;  memoire = 3201;
document.getElementById("z11").src = "image/feux/vert_2.png";
document.getElementById("z18").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z12' && its120 == 1 && aiguille94 == 1 && aiguille88 == 1 && aiguille91 == 0)  	{ 
point_de_passage_1 = '';
if (   	its74 == 1 || its57 == 1 || its58 == 1 || its41 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its74 = 1; its94 = 1; its57 = 1; its58 = 1; its88 = 1; its41 = 1; its42 = 1; its43 = 1; memoire = 3202;
document.getElementById("z12").src = "image/feux/vert_2.png";
document.getElementById("z13").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z12' && its120 == 1 && aiguille94 == 1 && aiguille88 == 1 && aiguille91 == 1)  	{ 
point_de_passage_1 = '';
if (   	its74 == 1 || its57 == 1 || its58 == 1 || its41 == 1 || its21 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its74 = 1; its94 = 1; its57 = 1; its58 = 1; its88 = 1; its41 = 1; its91 = 1; its21 = 1; its22 = 1; memoire = 3203;
document.getElementById("z12").src = "image/feux/vert_2.png";
document.getElementById("z18").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z12' && its120 == 1 && aiguille94 == 0 )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
}

if ( point_de_passage_1 == 'z12' && its120 == 1 && aiguille94 == 1 && aiguille88 == 0 )  	{ 
point_de_passage_1 = '';
aiguille94 = 0;
alert('Sortie impossible, vérifiez les aiguillages'); 
}

if ( point_de_passage_1 == 'z11' && its119 == 1 && aiguille88 == 0 && aiguille91 == 0 && aiguille86 == 0 )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z11 = 'rouge';
}

if ( point_de_passage_1 == 'z11' && its119 == 1 && aiguille86 == 1  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z11 = 'rouge';
}



if ( point_de_passage_1 == 'z3' && aiguille78 == 0 && aiguille93 == 0) { // arrivee genve pour voie 2
point_de_passage_1 = '';
if (   	its51 == 1 || its52 == 1 || its54 == 1 || its55 == 1 || its119 == 1 || its119 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its51 = 1; its52 = 1; its53 = 1; its54 = 1; its55 = 1; its119 = 1; 	 memoire = 37;
document.getElementById("z3").src = "image/feux/vert_2.png";
document.getElementById("z7").src = "image/feux/vert_2.png";
//if ( train2_its50[2] == 301)  { nextSong(30);}
//if ( train2_its50[2] == 302)  { nextSong(35);}
}
}

if ( point_de_passage_1 == 'z3' && aiguille78 == 0 && aiguille93 == 1) { // arrivee genve pour voie voie 1
point_de_passage_1 = '';
if (   	its51 == 1 || its52 == 1 || its54 == 1 || its73 == 1 || its120 == 1 || its120 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its51 = 1; its52 = 1; its53 = 1; its54 = 1; its93 = 1; its73 = 1; its120 = 1;	 memoire = 371;
document.getElementById("z3").src = "image/feux/vert_2.png";
document.getElementById("z8").src = "image/feux/vert_2.png";
//if ( train2_its50[2] == 301)  { nextSong(29); }
//if ( train2_its50[2] == 302)  { nextSong(34); }
}
}


if ( point_de_passage_1 == 'z3' && aiguille78 == 1 && aiguille80 == 0 ) { // arrivee genve pour voie voie 3

point_de_passage_1 = '';
if (   	its51 == 1 || its52 == 1 || its78 == 1 || its131 == 1 || its33 == 1 || its34 == 1 || its118 == 1 || its118 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its51 = 1; its52 = 1; its78 = 1; its131 = 1; its33 = 1; its34 = 1; its118 = 1;	 memoire = 39;
document.getElementById("z3").src = "image/feux/vert_2.png";
document.getElementById("z6").src = "image/feux/vert_2.png";
//if ( train2_its50[2] == 301)  { nextSong(31);}
//if ( train2_its50[2] == 302)  { nextSong(36);}
}
}

if ( point_de_passage_1 == 'z3' && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 0 ) { // arrivee genve pour voie voie 4
point_de_passage_1 = '';
if (   	its51 == 1 || its52 == 1 || its78 == 1 || its131 == 1 || its80 == 1 || its16 == 1 || its111 == 1 || its17 == 1 || its17 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its51 = 1; its52 = 1; its78 = 1; its131 = 1;  its80 = 1; its16 = 1; its111 = 1; its17 = 1;  memoire = 40;
document.getElementById("z3").src = "image/feux/vert_2.png";
document.getElementById("z5").src = "image/feux/vert_2.png";
//if ( train2_its50[2] == 301)  { nextSong(32);}
//if ( train2_its50[2] == 302)  { nextSong(37);}
}
}

if ( point_de_passage_1 == 'z3' && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 0) { // arrivee genve pour voie voie 5
point_de_passage_1 = '';
if (   	its51 == 1 || its52 == 1 || its78 == 1 || its131 == 1 || its80 == 1 || its16 == 1 || its82 == 1 || its101 == 1 || its117 == 1 || its117 == 3) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its51 = 1; its52 = 1; its78 = 1; its131 = 1;  its80 = 1; its16 = 1; its82 = 1; its101 = 1; its102 = 1; its117 = 1; memoire = 41;
document.getElementById("z3").src = "image/feux/vert_2.png";
document.getElementById("z20").src = "image/feux/vert_2.png";
//if ( train2_its50[2] == 301)  { nextSong(33);}
//if ( train2_its50[2] == 302)  { nextSong(38);}
}
}

if ( point_de_passage_1 == 'z3' && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 1 ) { // arrivee genve pour voie voie 6
point_de_passage_1 = ''; 
if (   	its51 == 1 || its52 == 1 || its78 == 1 || its131 == 1 || its80 == 1 || its16 == 1 || its82 == 1 || its101 == 1 || its2 == 1 || its23 == 1 || its8 == 1 ) { alert('Itinéraire occupé ou voie occupée'); } 
else { 	its51 = 1; its52 = 1; its78 = 1; its131 = 1;  its80 = 1; its16 = 1; its82 = 1; its101 = 1; its97 = 1; its2 = 1; its23 = 1; its8 = 1; memoire = 411;
document.getElementById("z3").src = "image/feux/vert_2.png";
document.getElementById("z16").src = "image/feux/vert_2.png";
}
}


if ( point_de_passage_1 == 'z17' && its8 == 1 && aiguille96 == 1 && aiguille83 == 1 && aiguille84 == 0 ) { 
point_de_passage_1 = '';
if (   	its4 == 1 || its104 == 1 || its19 == 1 || its21 == 1  ) { alert('Itinéraire occupé ou voie occupée'); } 
else { 	its8 = 1; its4 = 1; its96 = 1; its104 = 1;  its83 = 1; its19 = 1; its20 = 1; its21 = 1; its22 = 1; memoire = 420;
document.getElementById("z17").src = "image/feux/vert_2.png";
document.getElementById("z18").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z17' && its8 == 1 && aiguille96 == 1 && aiguille83 == 1 && aiguille84 == 1 && aiguille85 == 0 ) { 
point_de_passage_1 = '';
if (   	its4 == 1 || its104 == 1 || its19 == 1 || its39 == 1 || its41 == 1 || its42 == 1 ) { alert('Itinéraire occupé ou voie occupée'); } 
else { 	its4 = 1; its96 = 1; its104 = 1;  its83 = 1; its19 = 1; its84 = 1; its39 = 1; its40 = 1; its41 = 1; its42 = 1; its43 = 1; memoire = 421;
document.getElementById("z17").src = "image/feux/vert_2.png";
document.getElementById("z13").src = "image/feux/vert_2.png";
}
}






if ( point_de_passage_1 == 'z17' && its8 == 1 && aiguille96 == 0)  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z17 = 'rouge';

}

if ( point_de_passage_1 == 'z17' && its8 == 1 && aiguille96 == 1 && aiguille83 == 0  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z16 = 'rouge';

}


if ( point_de_passage_1 == 'z17' && its8 == 1 && aiguille96 == 1 && aiguille83 == 1 && aiguille84 == 1 && aiguille85 == 1 )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z16 = 'rouge';

}


// PARCOUR 2 - PARCOUR 2 - PARCOUR 2 - PARCOUR 2 - PARCOUR 2 - PARCOUR 2 - PARCOUR 2 - PARCOUR 2 - PARCOUR 2 - PARCOUR 2 - PARCOUR 2 - PARCOUR 2

if ( point_de_passage_1 == 'z19' && its7 == 1 && aiguille98 == 0  )  	{ 
point_de_passage_1 = '';
if (   	its6 == 1 || its4 == 1 || its8 == 1 || its23 == 1 || its2 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its6 = 1; its5 = 1; its4 = 1; its8 = 1;	memoire = 500;
document.getElementById("z19").src = "image/feux/vert_2.png";
document.getElementById("z17").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z19' && its7 == 1 && aiguille98 == 1 && aiguille92 == 0  )  	{ 
point_de_passage_1 = '';
if (   	its6 == 1 || its106 == 1 || its104 == 1 || its117 == 1 || its117 == 3) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its6 = 1; its98 = 1; its106 = 1; its105 = 1; its104 = 1; its103 = 1; its117 = 1;	memoire = 501;
document.getElementById("z19").src = "image/feux/vert_2.png";
document.getElementById("z21").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z19' && its7 == 1 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 0 && aiguille83 == 0  )  	{ 
point_de_passage_1 = '';
if (   	its6 == 1 || its106 == 1 || its104 == 1 || its19 == 1 || its17 == 1 || its17 == 3) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its6 = 1; its98 = 1; its106 = 1; its92 = 1; its19= 1; its121 = 1; its18 = 1; its17 = 1;	memoire = 502;
document.getElementById("z19").src = "image/feux/vert_2.png";
document.getElementById("z9").src = "image/feux/vert_2.png";
}
}


if ( point_de_passage_1 == 'z19' && its7 == 1 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 1 && aiguille83 == 0  )  	{ 
point_de_passage_1 = '';
if (   	its6 == 1 || its106 == 1 || its104 == 1 || its19 == 1 || its37 == 1 || its118 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its6 = 1; its98 = 1; its106 = 1; its92 = 1; its19= 1; its121 = 1; its95 = 1; its37 = 1; its118 = 1;	memoire = 503;
document.getElementById("z19").src = "image/feux/vert_2.png";
document.getElementById("z10").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z14' && aiguille85 == 0 && aiguille94 == 0  )  	{ // arrivee lausanne 2 pour voie 2
point_de_passage_1 = '';
if (   	its60 == 1 || its58 == 1 || its57 == 1 || its119 == 1 || its119 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its60 = 1; its59 = 1; its58 = 1; its57 = 1; its56 = 1; its119 = 1; memoire = 510;
document.getElementById("z14").src = "image/feux/vert_2.png";
document.getElementById("z11").src = "image/feux/vert_2.png";
//if ( train2_its61[2] == 101)  { nextSong(17); }
//if ( train2_its61[2] == 102)  { nextSong(21);}
}
}

if ( point_de_passage_1 == 'z14' && aiguille85 == 1 && aiguille84 == 0  )  	{ // arrivee lausanne 2 pour voie 3
point_de_passage_1 = '';
if (   	its60 == 1 || its58 == 1 || its39 == 1 || its37 == 1 || its118 == 1 || its118 == 3) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its60 = 1; its59 = 1; its58 = 1; its85 = 1; its39 = 1; its38 = 1; its37 = 1; its118 = 1; memoire = 511;
document.getElementById("z14").src = "image/feux/vert_2.png";
document.getElementById("z10").src = "image/feux/vert_2.png";
//if ( train2_its61[2] == 101)  { nextSong(18);}
//if ( train2_its61[2] == 102)  { nextSong(22);}
}
}

if ( point_de_passage_1 == 'z14' && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 0  )  	{ // arrivee lausanne 2 pour voie 4
point_de_passage_1 = '';
if (   	its60 == 1 || its58 == 1 || its39 == 1 || its37 == 1 || its19 == 1 || its17 == 1 || its17 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its60 = 1; its59 = 1; its58 = 1; its85 = 1; its39 = 1; its84 = 1; its19 = 1; its121 = 1; its18 = 1; its17 = 1; memoire = 512;
document.getElementById("z14").src = "image/feux/vert_2.png";
document.getElementById("z9").src = "image/feux/vert_2.png";
//if ( train2_its61[2] == 101)  { nextSong(19);}
//if ( train2_its61[2] == 102)  { nextSong(23);}
}
}

if ( point_de_passage_1 == 'z14' && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 0  )  	{ // arrivee lausanne 2 pour voie 5
point_de_passage_1 = '';
if (   	its60 == 1 || its58 == 1 || its39 == 1 || its19 == 1 || its104 == 1 || its117 == 1 || its117 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its60 = 1; its59 = 1; its58 = 1; its85 = 1; its39 = 1; its84 = 1; its19 = 1; its83 = 1; its104 = 1; its103 = 1; its117 = 1; memoire = 513;
document.getElementById("z14").src = "image/feux/vert_2.png";
document.getElementById("z21").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z14' && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 1  )  	{ // arrivee lausanne 2 pour voie 6
point_de_passage_1 = '';
if (   	its60 == 1 || its58 == 1 || its39 == 1 || its19 == 1 || its104 == 1 || its4 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its60 = 1; its59 = 1; its58 = 1; its85 = 1; its39 = 1; its84 = 1; its19 = 1; its83 = 1; its104 = 1; its96 = 1; its4 = 1; its8 = 1;  memoire = 514;
document.getElementById("z14").src = "image/feux/vert_2.png";
document.getElementById("z17").src = "image/feux/vert_2.png";
}
}



if ( point_de_passage_1 == 'z15' && aiguille86 == 1 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 1  )  	{ // de Lasaunne 1 pour voie 6
point_de_passage_1 = ''; 
if (   	its76 == 1 || its58 == 1 || its39 == 1 || its19 == 1 || its104 == 1 || its4 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its76 = 1; its86 = 1; its59 = 1; its58 = 1; its85 = 1; its39 = 1; its84 = 1; its19 = 1; its83 = 1; its104 = 1; its96 = 1; its4 = 1; its8 = 1;  memoire = 520;
document.getElementById("z15").src = "image/feux/vert_2.png";
document.getElementById("z17").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z15' && aiguille86 == 1 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 )  	{ // de Lasaunne 1 pour  voie 5
point_de_passage_1 = ''; 
if (   	its76 == 1 || its58 == 1 || its39 == 1 || its19 == 1 || its104 == 1 || its117 == 1 || its117 == 3 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its76 = 1; its86 = 1; its59 = 1; its58 = 1; its85 = 1; its39 = 1; its84 = 1; its19 = 1; its83 = 1; its104 = 1; its103 = 1; its117 = 1;  memoire = 521;
document.getElementById("z15").src = "image/feux/vert_2.png";
document.getElementById("z21").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z15' && aiguille86 == 1 && aiguille85 == 1 && aiguille84 == 1  )  	{ // de Lasaunne 1 pour  voie 4
point_de_passage_1 = ''; 
if (   	its76 == 1 || its58 == 1 || its39 == 1 || its19 == 1 || its17 == 1 || its17 == 3) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its76 = 1; its86 = 1; its59 = 1; its58 = 1; its85 = 1; its39 = 1; its84 = 1; its19 = 1; its121 = 1; its18 = 1; its17 = 1; memoire = 522;
document.getElementById("z15").src = "image/feux/vert_2.png";
document.getElementById("z9").src = "image/feux/vert_2.png";
//if ( train2_its77[2] == 101)  { nextSong(19); }
//if ( train2_its77[2] == 102)  { nextSong(23);}
}
}

if ( point_de_passage_1 == 'z15' && aiguille86 == 1 && aiguille85 == 1  )  	{ // de Lasaunne 1 pour voie 3
point_de_passage_1 = ''; 
if (   	its76 == 1 || its58 == 1 || its39 == 1 || its118 == 1 || its118 == 3) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its76 = 1; its86 = 1; its59 = 1; its58 = 1; its85 = 1; its39 = 1; its38 = 1; its37 = 1; its118 = 1;  memoire = 523;
document.getElementById("z15").src = "image/feux/vert_2.png";
document.getElementById("z10").src = "image/feux/vert_2.png";
//if ( train2_its77[2] == 101)  { nextSong(18);}
//if ( train2_its77[2] == 102)  { nextSong(22);}
}
}

if ( point_de_passage_1 == 'z15' && aiguille86 == 1  )  	{ // de Lasaunne 1 pour voie 2
point_de_passage_1 = ''; 
if (   	its76 == 1 || its58 == 1 || its119 == 1 || its119 == 3) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its76 = 1; its86 = 1; its59 = 1; its58 = 1; its57 = 1; its56 = 1; its119 = 1;   memoire = 524;
document.getElementById("z15").src = "image/feux/vert_2.png";
document.getElementById("z11").src = "image/feux/vert_2.png";
//if ( train2_its77[2] == 101)  { nextSong(17);}
//if ( train2_its77[2] == 102)  { nextSong(21);}
}
}

if ( point_de_passage_1 == 'z15' && aiguille86 == 0  )  	{ // de Lasaunne 1 pour voie 1
point_de_passage_1 = ''; 
if (   	its76 == 1 || its74 == 1 || its120 == 1 || its120 == 3) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its76 = 1; its75 = 1; its74 = 1; its120 = 1;   memoire = 525;
document.getElementById("z15").src = "image/feux/vert_2.png";
document.getElementById("z12").src = "image/feux/vert_2.png";
//if ( train2_its77[2] == 101)  { nextSong(16);}
//if ( train2_its77[2] == 102)  { nextSong(20);}
}
}


if ( point_de_passage_1 == 'z8' && its120 == 1 && aiguille93 == 0   )  	{ 
point_de_passage_1 = ''; 
if (   	its71 == 1 || its73 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its73 = 1; its72 = 1; its71 = 1; its70 = 1;   memoire = 530;
document.getElementById("z8").src = "image/feux/vert_2.png";
document.getElementById("z4").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z8' && its120 == 1 && aiguille93 == 1 && aiguille81 == 0   )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z8 = 'rouge';

}

if ( point_de_passage_1 == 'z8' && its120 == 1 && aiguille93 == 1 && aiguille81 == 1 && aiguille79 == 0  )  	{ 
point_de_passage_1 = ''; 
if (   	its71 == 1 || its54 == 1 || its33 == 1 || its131 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its73 = 1; its93 = 1; its54 = 1; its81 = 1; its33 = 1; its131 = 1; its32 = 1; its31 = 1; its30 = 1;   memoire = 531;
document.getElementById("z8").src = "image/feux/vert_2.png";
document.getElementById("z2").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z8' && its120 == 1 && aiguille93 == 1 && aiguille81 == 1 && aiguille79 == 1  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z8 = 'rouge';
}


if ( point_de_passage_1 == 'z7' && its119 == 1 && aiguille81 == 0 && aiguille87 == 0 )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z7 = 'rouge';
}


if ( point_de_passage_1 == 'z7' && its119 == 1 && aiguille81 == 0 && aiguille87 == 1 )  	{ 
point_de_passage_1 = ''; 
if (   	its55 == 1 || its54 == 1 || its52 == 1 || its71 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its55 = 1; its54 = 1; its53 = 1; its52 = 1; its87 = 1; its71 = 1; its70 = 1; memoire = 540;
document.getElementById("z7").src = "image/feux/vert_2.png";
document.getElementById("z4").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z7' && its119 == 1 && aiguille81 == 1 && aiguille79 == 1 )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z7 = 'rouge';
}





if ( point_de_passage_1 == 'z7' && its119 == 1 && aiguille81 == 1 && aiguille79 == 0 )  	{ 
point_de_passage_1 = ''; 
if (   	its34 == 1 || its131 == 1 || its31 == 1   ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its55 = 1; its54 = 1; its81 = 1; its33 = 1; its131 = 1; its32 = 1; its31 = 1; its30 = 1; memoire = 541;
document.getElementById("z7").src = "image/feux/vert_2.png";
document.getElementById("z2").src = "image/feux/vert_2.png";
}
}



if ( point_de_passage_1 == 'z6' && its118 == 1 && aiguille78 == 0 && aiguille79 == 0  )  	{ 
point_de_passage_1 = ''; 
if (   	its33 == 1 || its131 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its34 = 1; its33 = 1; its131 = 1; its32 = 1; its31 = 1; its30 = 1;   memoire = 550;
document.getElementById("z6").src = "image/feux/vert_2.png";
document.getElementById("z2").src = "image/feux/vert_2.png";
}
}


if ( point_de_passage_1 == 'z6' && its118 == 1 && aiguille78 == 1 && aiguille87 == 0  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z6 = 'rouge';
}

if ( point_de_passage_1 == 'z6' && its118 == 1 && aiguille78 == 1 && aiguille87 == 1  )  	{ 
point_de_passage_1 = ''; 
if (   	its33 == 1 || its131 == 1 || its52 == 1 || its71 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its34 = 1; its33 = 1; its131 = 1; its78 = 1; its52 = 1; its87 = 1; its71 = 1; its70 = 1;   memoire = 551;
document.getElementById("z6").src = "image/feux/vert_2.png";
document.getElementById("z4").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z6' && its118 == 1 && aiguille78 == 0 && aiguille79 == 1  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z6 = 'rouge';
}

if ( point_de_passage_1 == 'z5' && its17 == 1 && aiguille80 == 0  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages 1'); 
z5 = 'rouge';
}

if ( point_de_passage_1 == 'z5' && its17 == 1 && aiguille80 == 1 && aiguille78 == 0  )  	{ 
point_de_passage_1 = ''; 
if (   	its16 == 1 || its131 == 1  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its111 = 1; its16 = 1; its80 = 1; its131 = 1; its32 = 1; its31 = 1; its30 = 1;   memoire = 560;
document.getElementById("z5").src = "image/feux/vert_2.png";
document.getElementById("z2").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z5' && its17 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 0  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z5 = 'rouge';
}

if ( point_de_passage_1 == 'z5' && its17 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1  )  	{ 
point_de_passage_1 = ''; 
if (   	its16 == 1 || its131 == 1 || its52 == 1 || its71 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its111 = 1; its16 = 1; its80 = 1; its131 = 1; its78 = 1; its52 = 1; its87 = 1; its71 = 1; its70 = 1;   memoire = 561;
document.getElementById("z5").src = "image/feux/vert_2.png";
document.getElementById("z4").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z20' && its117 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1  )  	{ 
point_de_passage_1 = ''; 
if (   	its101 == 1 || its16 == 1 || its131 == 1 || its52 == 1 || its71 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its102 = 1; its101 = 1; its82 = 1; its16 = 1; its80 = 1; its131 = 1; its78 = 1; its52 = 1; its87 = 1; its71 = 1; its70 = 1;   memoire = 570;
document.getElementById("z20").src = "image/feux/vert_2.png";
document.getElementById("z4").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z20' && its117 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 0  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z20 = 'rouge';

}

if ( point_de_passage_1 == 'z20' && its117 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0   )  	{ 
point_de_passage_1 = ''; 
if (   	its101 == 1 || its16 == 1 || its16 == 1 || its131 == 1 || its32 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its102 = 1; its101 = 1; its82 = 1; its16 = 1; its80 = 1; its131 = 1; its32 = 1; its31 = 1; its30 = 1;  memoire = 571;
document.getElementById("z20").src = "image/feux/vert_2.png";
document.getElementById("z2").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z20' && its117 == 1 && aiguille82 == 1 && aiguille80 == 0   )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z20 = 'rouge';

}

if ( point_de_passage_1 == 'z20' && its117 == 1 && aiguille82 == 0    )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z20 = 'rouge';

}


if ( point_de_passage_1 == 'z16' && its8 == 1 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1  )  	{ 
point_de_passage_1 = ''; 
if (   	its101 == 1 || its16 == 1 || its131 == 1 || its52 == 1 || its71 == 1 ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its23 = 1; its2 = 1; its97 = 1; its101 = 1; its82 = 1; its16 = 1; its80 = 1; its131 = 1; its78 = 1; its52 = 1; its87 = 1; its71 = 1; its70 = 1;   memoire = 580;
document.getElementById("z16").src = "image/feux/vert_2.png";
document.getElementById("z4").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z16' && its8 == 1 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z16 = 'rouge';


}

if ( point_de_passage_1 == 'z16' && its8 == 1 && aiguille97 == 0 )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z16 = 'rouge';

}


if ( point_de_passage_1 == 'z16' && its8 == 1 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0 )  	{ 
point_de_passage_1 = ''; 
if (   	its101 == 1 || its16 == 1 || its131 == 1 || its32 == 1 || its31 == 1   ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its23 = 1; its2 = 1; its97 = 1; its101 = 1; its82 = 1; its16 = 1; its80 = 1; its131 = 1; its32 = 1; its31 = 1; its30 = 1; memoire = 581;
document.getElementById("z16").src = "image/feux/vert_2.png";
document.getElementById("z2").src = "image/feux/vert_2.png";
}
}

if ( point_de_passage_1 == 'z16' && its8 == 1 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 0  )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z16 = 'rouge';

}

if ( point_de_passage_1 == 'z16' && its8 == 1 && aiguille97 == 1 && aiguille82 == 0   )  	{ 
point_de_passage_1 = '';
alert('Sortie impossible, vérifiez les aiguillages'); 
z16 = 'rouge';

}

if ( point_de_passage_1 == 'z14' && aiguille94 == 1  )  	{ // de Lasaunne 2 pour  voie 1
point_de_passage_1 = ''; 
if (   	its60 == 1 || its58 == 1 || its57 == 1 || its74 == 1 || its120 == 1 || its120 == 3  ) 	{ alert('Itinéraire occupé ou voie occupée'); } 
else { 	its60 = 1; its59 = 1; its58 = 1; its57 = 1; its94 = 1; its74 = 1; its120 = 1; memoire = 5813;
document.getElementById("z14").src = "image/feux/vert_2.png";
document.getElementById("z12").src = "image/feux/vert_2.png";
//if ( train2_its61[2] == 101)  { nextSong(16); }
//if ( train2_its61[2] == 102)  { nextSong(20); }
}
}




} 

		