
function occupation1() {

// DEPLACEMENT direction Lausanne

//document.getElementById("UnTexte_c34").innerHTML = 'controle sur occupation 1';

// its22 direction lausanne contrôle des sorties
if (sens_its22 == 1 && occupation_its22) {
if (train2_its22[4] != 1) {
mauvaise_sortie_bol = true;	
}
}

// its43 direction lausanne contrôle des sorties
if (sens_its43 == 1 && occupation_its43) {
if (train2_its43[4] != 1) {
mauvaise_sortie_bol = true;	
}
}


// its132

if (sens_its132 == 1 && occupation_its132 && aiguille97 == 0  ) 			{ progression_its132 = progression_its132 + 1; }
if (sens_its132 == 1 && progression_its132 > 4 && aiguille97 == 0) 			{ occupation_its132 = false;  occupation_its102 = true;
train2_its102[0] = train2_its132[0];
train2_its102[1] = train2_its132[1];
train2_its102[2] = train2_its132[2];
train2_its102[3] = train2_its132[3];
train2_its102[4] = train2_its132[4];
train2_its102[5] = train2_its132[5];
train2_its102[6] = train2_its132[6];
sens_its102 = sens_its132;
progression_its132 = 0;
its132 = 0;
document.getElementById("z23").src = "image/feux/rouge_2.png";
}

if ( sens_its132 == 1 && aiguille97 == 0 && occupation_its132 ) {
if ( sens_its132 == 1 && progression_its132 == 1 )  			{ document.getElementById("x16").src = "image/point/a1_rouge.png";  document.getElementById("x17").src = "image/point/a1_rouge.png"; document.getElementById("x19").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 2 )  			{ document.getElementById("x17").src = "image/point/a1_rouge.png";  document.getElementById("x19").src = "image/point/a1_rouge.png"; document.getElementById("x20").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 3 )  			{ document.getElementById("x19").src = "image/point/a1_rouge.png";  document.getElementById("x20").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 4 )  			{ document.getElementById("x20").src = "image/point/a1_rouge.png";  document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_droite.png"; }
}
// nouvelle version
if (sens_its132 == 1 && occupation_its132 && aiguille97 == 1  ) 			{ progression_its132 = progression_its132 + 1; }
if (sens_its132 == 1 && progression_its132 > 13 && aiguille97 == 1) 			{ occupation_its132 = false;  occupation_its8 = true;
train2_its8[0] = train2_its132[0];
train2_its8[1] = train2_its132[1];
train2_its8[2] = train2_its132[2];
train2_its8[3] = train2_its132[3];
train2_its8[4] = train2_its132[4];
train2_its8[5] = train2_its132[5];
train2_its8[6] = train2_its132[6];
sens_its8 = sens_its132;
progression_its132 = 0;
its132 = 0; its97 = 0; its101 = 0; its2 = 0; aiguille97 = 0;
document.getElementById("z23").src = "image/feux/rouge_2.png";
}

if ( sens_its132 == 1 && aiguille97 == 1 && occupation_its132 ) {
if ( sens_its132 == 1 && progression_its132 == 1 )  			{ document.getElementById("x16").src = "image/point/a1_rouge.png";  document.getElementById("x17").src = "image/point/a1_rouge.png"; document.getElementById("x19").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 2 )  			{ document.getElementById("x17").src = "image/point/a1_rouge.png";  document.getElementById("x19").src = "image/point/a1_rouge.png"; document.getElementById("x20").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 3 )  			{ document.getElementById("x19").src = "image/point/a1_rouge.png";  document.getElementById("x20").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 4 )  			{ document.getElementById("x20").src = "image/point/a1_rouge.png";  document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 5 )  			{ document.getElementById("x21").src = "image/point/a1_rouge.png";  document.getElementById("x22").src = "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 6 )  			{ document.getElementById("x22").src = "image/point/a1_rouge.png";  document.getElementById("x23").src = "image/point/a1_rouge.png"; document.getElementById("f81").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 7 )  			{ document.getElementById("x23").src = "image/point/a1_rouge.png";  document.getElementById("f81").src = "image/point/a1_rouge.png"; document.getElementById("f80").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 8 )  			{ document.getElementById("f81").src = "image/point/a1_rouge.png";  document.getElementById("f80").src = "image/point/a1_rouge.png"; document.getElementById("a26").src = "image/point/a1_droite.png"; }

if ( sens_its132 == 1 && progression_its132 == 9 )  			{ document.getElementById("f80").src = "image/point/a1_rouge.png";  document.getElementById("a26").src = "image/point/a1_rouge.png"; document.getElementById("a27").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 10 )  			{ document.getElementById("a26").src = "image/point/a1_rouge.png";  document.getElementById("a27").src = "image/point/a1_rouge.png"; document.getElementById("a28").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 11 )  			{ document.getElementById("a30").src = "image/point/a1_rouge.png";  document.getElementById("a28").src = "image/point/a1_rouge.png"; document.getElementById("a29").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 12 )  			{ document.getElementById("a28").src = "image/point/a1_rouge.png";  document.getElementById("a29").src = "image/point/a1_rouge.png"; document.getElementById("a30").src = "image/point/a1_droite.png"; }
if ( sens_its132 == 1 && progression_its132 == 13 )  			{ document.getElementById("a29").src = "image/point/a1_rouge.png";  document.getElementById("a30").src = "image/point/a1_rouge.png"; document.getElementById("a31").src = "image/point/a1_droite.png"; }
}


// its100

if (sens_its100 == 1 && occupation_its100 ) 							{ progression_its100 = progression_its100 + 1; }
if (sens_its100 == 1 && its132 == 0 && progression_its100 > 6 ) 		{ progression_its100 = 6; }
if (sens_its100 == 1 && progression_its100 > 6 ) 						{ occupation_its100 = false;  occupation_its132 = true;
train2_its132[0] = train2_its100[0];
train2_its132[1] = train2_its100[1];
train2_its132[2] = train2_its100[2];
train2_its132[3] = train2_its100[3];
train2_its132[4] = train2_its100[4];
train2_its132[5] = train2_its100[5];
train2_its132[6] = train2_its100[6];
sens_its132 = sens_its100;
progression_its100 = 0;
its100 = 0;
}

if ( sens_its100 == 1 && progression_its100 == 1 )  			{ document.getElementById("x10").src = "image/point/a1_rouge.png";  document.getElementById("x11").src = "image/point/a1_rouge.png"; document.getElementById("x12").src = "image/point/a1_droite.png"; }
if ( sens_its100 == 1 && progression_its100 == 2 )  			{ document.getElementById("x11").src = "image/point/a1_rouge.png";  document.getElementById("x12").src = "image/point/a1_rouge.png"; document.getElementById("x13").src = "image/point/a1_droite.png"; }
if ( sens_its100 == 1 && progression_its100 == 3 )  			{ document.getElementById("x12").src = "image/point/a1_rouge.png";  document.getElementById("x13").src = "image/point/a1_rouge.png"; document.getElementById("x14").src = "image/point/a1_droite.png"; }
if ( sens_its100 == 1 && progression_its100 == 4 )  			{ document.getElementById("x13").src = "image/point/a1_rouge.png";  document.getElementById("x14").src = "image/point/a1_rouge.png"; document.getElementById("x15").src = "image/point/a1_droite.png"; }
if ( sens_its100 == 1 && progression_its100 == 5 )  			{ document.getElementById("x14").src = "image/point/a1_rouge.png";  document.getElementById("x15").src = "image/point/a1_rouge.png"; document.getElementById("x16").src = "image/point/a1_droite.png"; }
if ( sens_its100 == 1 && progression_its100 == 6 )  			{ document.getElementById("x15").src = "image/point/a1_rouge.png";  document.getElementById("x16").src = "image/point/a1_rouge.png"; document.getElementById("x17").src = "image/point/a1_droite.png"; }

 

// its12

if (sens_its12 == 1 && occupation_its12 ) 							{ progression_its12 = progression_its12 + 1; ligne = 12;}
if (sens_its12 == 1 && its14 == 0 && progression_its12 > 4 ) 		{ progression_its12 = 4; }
if (sens_its12 == 1 && progression_its12 > 4 ) 						{ occupation_its12 = false; occupation_its14 = true;  
train2_its14[0] = train2_its12[0];
train2_its14[1] = train2_its12[1];
train2_its14[2] = train2_its12[2];
train2_its14[3] = train2_its12[3];
train2_its14[4] = train2_its12[4];
train2_its14[5] = train2_its12[5];
train2_its14[6] = train2_its12[6];
sens_its14 = sens_its12;
progression_its12 = 0; 
} 

if ( sens_its12 == 1 && progression_its12 == 1 )  			{ document.getElementById("b1").src = "image/point/a1_rouge.png";  }
if ( sens_its12 == 1 && progression_its12 == 2 )  			{ document.getElementById("b1").src = "image/point/a1_rouge.png";  document.getElementById("b2").src = "image/point/a1_rouge.png"; }
if ( sens_its12 == 1 && progression_its12 == 3 )  			{ document.getElementById("b1").src = "image/point/a1_rouge.png";  document.getElementById("b2").src = "image/point/a1_rouge.png"; document.getElementById("b3").src = "image/point/a1_droite.png";}
if ( sens_its12 == 1 && progression_its12 == 4 )  			{ document.getElementById("b2").src = "image/point/a1_rouge.png";  document.getElementById("b3").src = "image/point/a1_rouge.png"; document.getElementById("b4").src = "image/point/a1_droite.png";}
if ( sens_its12 == 1 && progression_its12 == 4 )  			{ document.getElementById("b2").src = "image/point/a1_rouge.png";  document.getElementById("b3").src = "image/point/a1_rouge.png"; document.getElementById("b4").src = "image/point/a1_droite.png";}

// its14

if (sens_its14 == 1 && occupation_its14) 											{ progression_its14 = progression_its14 + 1; ligne = 14;}
if (sens_its14 == 1 && aiguille79 == 0 && progression_its14 > 3 ) 					{ occupation_its14 = false; occupation_its15 = true;  
train2_its15[0] = train2_its14[0];
train2_its15[1] = train2_its14[1];
train2_its15[2] = train2_its14[2];
train2_its15[3] = train2_its14[3];
train2_its15[4] = train2_its14[4];
train2_its15[5] = train2_its14[5];
train2_its15[6] = train2_its14[6];
sens_its15 = sens_its14;
progression_its14 = 0; 
its12 = 0; its14 = 0; 
} 

if (sens_its14 == 1 && aiguille79 == 1 && progression_its14 > 9 ) 					{ occupation_its14 = false; occupation_its131 = true;  
train2_its131[0] = train2_its14[0];
train2_its131[1] = train2_its14[1];
train2_its131[2] = train2_its14[2];
train2_its131[3] = train2_its14[3];
train2_its131[4] = train2_its14[4];
train2_its131[5] = train2_its14[5];
train2_its131[6] = train2_its14[6];
sens_its131 = sens_its14;
progression_its14 = 0; 
aiguille79 = 0;
its12 = 0; its14 = 0; its79 = 0; its32 = 0; 
} 

if (sens_its14 == 1 && aiguille79 == 0 && occupation_its14 ) {
if ( sens_its14 == 1 && progression_its14 == 1 )  			{ document.getElementById("b3").src = "image/point/a1_rouge.png";  document.getElementById("b4").src = "image/point/a1_rouge.png"; document.getElementById("b5").src = "image/point/a1_droite.png";  }
if ( sens_its14 == 1 && progression_its14 == 2 )  			{ document.getElementById("b4").src = "image/point/a1_rouge.png";  document.getElementById("b5").src = "image/point/a1_rouge.png"; document.getElementById("b6").src = "image/point/a1_droite.png"; }
if ( sens_its14 == 1 && progression_its14 == 3 )  			{  document.getElementById("b5").src = "image/point/a1_rouge.png";  document.getElementById("b6").src = "image/point/a1_rouge.png"; document.getElementById("b7").src = "image/point/a1_droite.png"; }
}

if (sens_its14 == 1 && aiguille79 == 1 && occupation_its14 ) {
if ( sens_its14 == 1 && progression_its14 == 1 )  			{ document.getElementById("b3").src = "image/point/a1_rouge.png";  document.getElementById("b4").src = "image/point/a1_rouge.png"; document.getElementById("b5").src = "image/point/a1_droite.png";  }
if ( sens_its14 == 1 && progression_its14 == 2 )  			{ document.getElementById("b4").src = "image/point/a1_rouge.png";  document.getElementById("b5").src = "image/point/a1_rouge.png"; document.getElementById("b6").src = "image/point/a1_droite.png"; }
if ( sens_its14 == 1 && progression_its14 == 3 )  			{ document.getElementById("b5").src = "image/point/a1_rouge.png";  document.getElementById("b6").src = "image/point/a1_rouge.png"; document.getElementById("b7").src = "image/point/a1_droite.png"; }
if ( sens_its14 == 1 && progression_its14 == 4 )  			{ document.getElementById("b6").src = "image/point/a1_rouge.png";  document.getElementById("b7").src = "image/point/a1_rouge.png"; document.getElementById("f19").src = "image/point/a1_droite.png";  }
if ( sens_its14 == 1 && progression_its14 == 5 )  			{ document.getElementById("b6").src = "image/point/a1_rouge.png";  document.getElementById("f19").src = "image/point/a1_rouge.png"; document.getElementById("f20").src = "image/point/a1_droite.png"; }
if ( sens_its14 == 1 && progression_its14 == 6 )  			{ document.getElementById("f19").src = "image/point/a1_rouge.png";  document.getElementById("f20").src = "image/point/a1_rouge.png"; document.getElementById("c9").src = "image/point/a1_droite.png"; }
if ( sens_its14 == 1 && progression_its14 == 7 )  			{ document.getElementById("f20").src = "image/point/a1_rouge.png";  document.getElementById("c9").src = "image/point/a1_rouge.png"; document.getElementById("c10").src = "image/point/a1_droite.png";  }
if ( sens_its14 == 1 && progression_its14 == 8 )  			{ document.getElementById("c9").src = "image/point/a1_rouge.png";  document.getElementById("c10").src = "image/point/a1_rouge.png"; document.getElementById("c11").src = "image/point/a1_droite.png"; }
if ( sens_its14 == 1 && progression_its14 == 9 )  			{ document.getElementById("c10").src = "image/point/a1_rouge.png";  document.getElementById("c11").src = "image/point/a1_rouge.png"; document.getElementById("c12").src = "image/point/a1_droite.png"; }
}

// its15

if (sens_its15 == 1 && occupation_its15) 											{ progression_its15 = progression_its15 + 1; ligne = 15;}
if (sens_its15 == 1 && progression_its15 > 8 ) 										{ occupation_its15 = false; occupation_its16 = true;  
train2_its16[0] = train2_its15[0];
train2_its16[1] = train2_its15[1];
train2_its16[2] = train2_its15[2];
train2_its16[3] = train2_its15[3];
train2_its16[4] = train2_its15[4];
train2_its16[5] = train2_its15[5];
train2_its16[6] = train2_its15[6];
sens_its16 = sens_its15;
progression_its15 = 0; 
its15 = 0;
} 

if ( sens_its15 == 1 && progression_its15 == 1 )  			{ document.getElementById("b6").src = "image/point/a1_rouge.png";  document.getElementById("b7").src = "image/point/a1_rouge.png"; document.getElementById("b8").src = "image/point/a1_droite.png"; }
if ( sens_its15 == 1 && progression_its15 == 2 )  			{ document.getElementById("b7").src = "image/point/a1_rouge.png";  document.getElementById("b8").src = "image/point/a1_rouge.png"; document.getElementById("b9").src = "image/point/a1_droite.png"; }
if ( sens_its15 == 1 && progression_its15 == 3 )  			{ document.getElementById("b8").src = "image/point/a1_rouge.png";  document.getElementById("b9").src = "image/point/a1_rouge.png"; document.getElementById("b10").src = "image/point/a1_droite.png";  }
if ( sens_its15 == 1 && progression_its15 == 4 )  			{ document.getElementById("b9").src = "image/point/a1_rouge.png";  document.getElementById("b10").src = "image/point/a1_rouge.png"; document.getElementById("b11").src = "image/point/a1_droite.png"; }
if ( sens_its15 == 1 && progression_its15 == 5 )  			{ document.getElementById("b10").src = "image/point/a1_rouge.png";  document.getElementById("b11").src = "image/point/a1_rouge.png"; document.getElementById("b12").src = "image/point/a1_droite.png"; }
if ( sens_its15 == 1 && progression_its15 == 6 )  			{ document.getElementById("b11").src = "image/point/a1_rouge.png";  document.getElementById("b12").src = "image/point/a1_rouge.png"; document.getElementById("b13").src = "image/point/a1_droite.png";  }
if ( sens_its15 == 1 && progression_its15 == 7 )  			{ document.getElementById("b12").src = "image/point/a1_rouge.png";  document.getElementById("b13").src = "image/point/a1_rouge.png"; document.getElementById("b14").src = "image/point/a1_droite.png"; }
if ( sens_its15 == 1 && progression_its15 == 8 )  			{  document.getElementById("b13").src = "image/point/a1_rouge.png";  document.getElementById("b14").src = "image/point/a1_rouge.png"; document.getElementById("b15").src = "image/point/a1_droite.png"; }

// its16 

if (sens_its16 == 1 && occupation_its16) 											{ progression_its16 = progression_its16 + 1;}
if (sens_its16 == 1 && aiguille82 == 0 && progression_its16 > 4 ) 					{ occupation_its16 = false; occupation_its111 = true;  
train2_its111[0] = train2_its16[0];
train2_its111[1] = train2_its16[1];
train2_its111[2] = train2_its16[2];
train2_its111[3] = train2_its16[3];
train2_its111[4] = train2_its16[4];
train2_its111[5] = train2_its16[5];
train2_its111[6] = train2_its16[6];
sens_its111 = sens_its16;
progression_its16 = 0; 
aiguille82 = 0;
its16 = 0;
} 

if (sens_its16 == 1 && aiguille82 == 1 && aiguille97 == 0 && progression_its16 > 9 ) 					{ occupation_its16 = false; occupation_its102 = true;  
train2_its102[0] = train2_its16[0];
train2_its102[1] = train2_its16[1];
train2_its102[2] = train2_its16[2];
train2_its102[3] = train2_its16[3];
train2_its102[4] = train2_its16[4];
train2_its102[5] = train2_its16[5];
train2_its102[6] = train2_its16[6];
sens_its102 = sens_its16;
progression_its16 = 0; 
its16 = 0; its82 = 0; its101 = 0;
aiguille82 = 0;
} 

if (sens_its16 == 1 && aiguille82 == 1 && aiguille97 == 1 && progression_its16 > 17 ) 					{ occupation_its16 = false; occupation_its8 = true;  
train2_its8[0] = train2_its16[0];
train2_its8[1] = train2_its16[1];
train2_its8[2] = train2_its16[2];
train2_its8[3] = train2_its16[3];
train2_its8[4] = train2_its16[4];
train2_its8[5] = train2_its16[5];
train2_its8[6] = train2_its16[6];
sens_its8 = sens_its16;
progression_its16 = 0; 
aiguille82 = 0;
aiguille97 = 0;
its16 = 0; its82 = 0; its101 = 0; its97 = 0; its2 = 0; its23 = 0;
} 

if (sens_its16 == 1 && aiguille82 == 0 && occupation_its16 ) 	{
if ( sens_its16 == 1 && progression_its16 == 1 )  			{ document.getElementById("b14").src = "image/point/a1_rouge.png";  document.getElementById("b15").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 2 )  			{ document.getElementById("b15").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 3 )  			{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_droite.png";  }
if ( sens_its16 == 1 && progression_its16 == 4 )  			{  document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_droite.png"; }

}
if (sens_its16 == 1 && aiguille82 == 1 && aiguille97 == 0 && occupation_its16 ) 	{
if ( sens_its16 == 1 && progression_its16 == 1 )  			{ document.getElementById("b14").src = "image/point/a1_rouge.png";  document.getElementById("b15").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 2 )  			{ document.getElementById("b15").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 3 )  			{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_droite.png";  }
if ( sens_its16 == 1 && progression_its16 == 4 )  			{ document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 5 )  			{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("f2").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 6 )  			{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("f2").src = "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 7 )  			{ document.getElementById("f2").src = "image/point/a1_rouge.png";  document.getElementById("f1").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_droite.png";  }
if ( sens_its16 == 1 && progression_its16 == 8 )  			{ document.getElementById("f1").src = "image/point/a1_rouge.png";  document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 9 )  			{ document.getElementById("x21").src = "image/point/a1_rouge.png";  document.getElementById("x22").src = "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_droite.png"; }
}

if (sens_its16 == 1 && aiguille82 == 1 && aiguille97 == 1 && occupation_its16 ) 	{
	
if ( sens_its16 == 1 && progression_its16 == 1 )  			{ document.getElementById("b14").src = "image/point/a1_rouge.png";  document.getElementById("b15").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 2 )  			{ document.getElementById("b15").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 3 )  			{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_droite.png";  }
if ( sens_its16 == 1 && progression_its16 == 4 )  			{ document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 5 )  			{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("f2").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 6 )  			{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("f2").src = "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 7 )  			{ document.getElementById("f2").src = "image/point/a1_rouge.png";  document.getElementById("f1").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_droite.png";  }
if ( sens_its16 == 1 && progression_its16 == 8 )  			{ document.getElementById("f1").src = "image/point/a1_rouge.png";  document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 9 )  			{ document.getElementById("x21").src = "image/point/a1_rouge.png";  document.getElementById("x22").src = "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 10 )  			{ document.getElementById("x22").src = "image/point/a1_rouge.png";  document.getElementById("x23").src = "image/point/a1_rouge.png"; document.getElementById("f81").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 11 )  			{ document.getElementById("x23").src = "image/point/a1_rouge.png";  document.getElementById("f81").src = "image/point/a1_rouge.png"; document.getElementById("f80").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 12 )  			{ document.getElementById("f81").src = "image/point/a1_rouge.png";  document.getElementById("f80").src = "image/point/a1_rouge.png"; document.getElementById("a26").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 13 )  			{ document.getElementById("f80").src = "image/point/a1_rouge.png";  document.getElementById("a26").src = "image/point/a1_rouge.png"; document.getElementById("a27").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 14 )  			{ document.getElementById("a26").src = "image/point/a1_rouge.png";  document.getElementById("a27").src = "image/point/a1_rouge.png"; document.getElementById("a28").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 15 )  			{ document.getElementById("a27").src = "image/point/a1_rouge.png";  document.getElementById("a28").src = "image/point/a1_rouge.png"; document.getElementById("a29").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 16 )  			{ document.getElementById("a28").src = "image/point/a1_rouge.png";  document.getElementById("a29").src = "image/point/a1_rouge.png"; document.getElementById("a30").src = "image/point/a1_droite.png"; }
if ( sens_its16 == 1 && progression_its16 == 17 )  			{ document.getElementById("a29").src = "image/point/a1_rouge.png";  document.getElementById("a30").src = "image/point/a1_rouge.png"; document.getElementById("a31").src = "image/point/a1_droite.png"; }
}
	



// its111

if (sens_its111 == 1 && occupation_its111) 							{ progression_its111 = progression_its111 + 1; }
if (sens_its111 == 1 && progression_its111 > 11 ) 					{ occupation_its111 = false; occupation_its17 = true;  
train2_its17[0] = train2_its111[0];
train2_its17[1] = train2_its111[1];
train2_its17[2] = train2_its111[2];
train2_its17[3] = train2_its111[3];
train2_its17[4] = train2_its111[4];
train2_its17[5] = train2_its111[5];
train2_its17[6] = train2_its111[6];
sens_its17 = sens_its111;
progression_its111 = 0; 
its111 = 0;
} 

if ( sens_its111 == 1 && progression_its111 == 1 )  			{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("b20").src = "image/point/a1_droite.png"; }
if ( sens_its111 == 1 && progression_its111 == 2 )  			{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("b20").src = "image/point/a1_rouge.png"; document.getElementById("b21").src = "image/point/a1_droite.png"; }
if ( sens_its111 == 1 && progression_its111 == 3 )  			{ document.getElementById("b20").src = "image/point/a1_rouge.png";  document.getElementById("b21").src = "image/point/a1_rouge.png"; document.getElementById("b22").src = "image/point/a1_droite.png";  }
if ( sens_its111 == 1 && progression_its111 == 4 )  			{ document.getElementById("b21").src = "image/point/a1_rouge.png";  document.getElementById("b22").src = "image/point/a1_rouge.png"; document.getElementById("b23").src = "image/point/a1_droite.png"; }
if ( sens_its111 == 1 && progression_its111 == 5 )  			{ document.getElementById("b22").src = "image/point/a1_rouge.png";  document.getElementById("b23").src = "image/point/a1_rouge.png"; document.getElementById("b24").src = "image/point/a1_droite.png"; }
if ( sens_its111 == 1 && progression_its111 == 6 )  			{ document.getElementById("b23").src = "image/point/a1_rouge.png";  document.getElementById("b24").src = "image/point/a1_rouge.png"; document.getElementById("b25").src = "image/point/a1_droite.png"; }
if ( sens_its111 == 1 && progression_its111 == 7 )  			{ document.getElementById("b24").src = "image/point/a1_rouge.png";  document.getElementById("b25").src = "image/point/a1_rouge.png"; document.getElementById("b26").src = "image/point/a1_droite.png";  }
if ( sens_its111 == 1 && progression_its111 == 8 )  			{ document.getElementById("b25").src = "image/point/a1_rouge.png";  document.getElementById("b26").src = "image/point/a1_rouge.png"; document.getElementById("b27").src = "image/point/a1_droite.png"; }
if ( sens_its111 == 1 && progression_its111 == 9 )  			{ document.getElementById("b26").src = "image/point/a1_rouge.png";  document.getElementById("b27").src = "image/point/a1_rouge.png"; document.getElementById("b28").src = "image/point/a1_droite.png"; }
if ( sens_its111 == 1 && progression_its111 == 10 )  			{ document.getElementById("b27").src = "image/point/a1_rouge.png";  document.getElementById("b28").src = "image/point/a1_rouge.png"; document.getElementById("b29").src = "image/point/a1_droite.png"; }
if ( sens_its111 == 1 && progression_its111 == 11 )  			{ document.getElementById("b28").src = "image/point/a1_rouge.png";  document.getElementById("b29").src = "image/point/a1_rouge.png"; document.getElementById("b30").src = "image/point/a1_droite.png";  }
	
// its17

if (sens_its17 == 1 && occupation_its17 ) 							{ progression_its17 = progression_its17 + 1; }
if (sens_its17 == 1 && progression_its17 > 8 ) 						{ occupation_its17 = false; occupation_its18 = true;  
train2_its18[0] = train2_its17[0];
train2_its18[1] = train2_its17[1];
train2_its18[2] = train2_its17[2];
train2_its18[3] = train2_its17[3];
train2_its18[4] = train2_its17[4];
train2_its18[5] = train2_its17[5];
train2_its18[6] = train2_its17[6];
sens_its18 = sens_its17;
progression_its17 = 0;
its17 = 0;
}

if ( sens_its17 == 1 && progression_its17 == 1 )  			{ document.getElementById("b29").src = "image/point/a1_rouge.png";  document.getElementById("b30").src = "image/point/a1_rouge.png"; document.getElementById("n1").src = "image/point/a1_droite.png"; }
if ( sens_its17 == 1 && progression_its17 == 2 )  			{ document.getElementById("b30").src = "image/point/a1_rouge.png";  document.getElementById("n1").src = "image/point/a1_rouge.png"; document.getElementById("n2").src = "image/point/a1_droite.png"; }
if ( sens_its17 == 1 && progression_its17 == 3 )  			{ document.getElementById("n1").src = "image/point/a1_rouge.png";  document.getElementById("n2").src = "image/point/a1_rouge.png"; document.getElementById("n3").src = "image/point/a1_droite.png";  }
if ( sens_its17 == 1 && progression_its17 == 4 )  			{ document.getElementById("n2").src = "image/point/a1_rouge.png";  document.getElementById("n3").src = "image/point/a1_rouge.png"; document.getElementById("n4").src = "image/point/a1_droite.png"; }
if ( sens_its17 == 1 && progression_its17 == 5 )  			{ document.getElementById("n3").src = "image/point/a1_rouge.png";  document.getElementById("n4").src = "image/point/a1_rouge.png"; document.getElementById("n5").src = "image/point/a1_droite.png"; }
if ( sens_its17 == 1 && progression_its17 == 6 )  			{ document.getElementById("n4").src = "image/point/a1_rouge.png";  document.getElementById("n5").src = "image/point/a1_rouge.png"; document.getElementById("n6").src = "image/point/a1_droite.png"; }
if ( sens_its17 == 1 && progression_its17 == 7 )  			{ document.getElementById("n5").src = "image/point/a1_rouge.png";  document.getElementById("n6").src = "image/point/a1_rouge.png"; document.getElementById("n7").src = "image/point/a1_droite.png";  }
if ( sens_its17 == 1 && progression_its17 == 8 )  			{ document.getElementById("n6").src = "image/point/a1_rouge.png";  document.getElementById("n7").src = "image/point/a1_rouge.png"; document.getElementById("n8").src = "image/point/a1_droite.png"; }




// its8

if ( sens_its8 == 1 && occupation_its8  ) 									{ progression_its8 = progression_its8 + 1;  }
if (sens_its8 == 1 && progression_its8 > 8 ) 								{ occupation_its8 = false; occupation_its4 = true;  
train2_its4[0] = train2_its8[0];
train2_its4[1] = train2_its8[1];
train2_its4[2] = train2_its8[2];
train2_its4[3] = train2_its8[3];
train2_its4[4] = train2_its8[4];
train2_its4[5] = train2_its8[5];
train2_its4[6] = train2_its8[6];
sens_its4 = sens_its8;
progression_its8 = 0;
its8 = 0;
}


if ( sens_its8 == 1 && progression_its8 == 1 )  			{ document.getElementById("a30").src = "image/point/a1_rouge.png";  document.getElementById("a31").src = "image/point/a1_rouge.png"; document.getElementById("p1").src = "image/point/a1_droite.png"; }
if ( sens_its8 == 1 && progression_its8 == 2 )  			{ document.getElementById("a31").src = "image/point/a1_rouge.png";  document.getElementById("p1").src = "image/point/a1_rouge.png"; document.getElementById("p2").src = "image/point/a1_droite.png"; }
if ( sens_its8 == 1 && progression_its8 == 3 )  			{ document.getElementById("p1").src = "image/point/a1_rouge.png";  document.getElementById("p2").src = "image/point/a1_rouge.png"; document.getElementById("p3").src = "image/point/a1_droite.png";  }
if ( sens_its8 == 1 && progression_its8 == 4 )  			{ document.getElementById("p2").src = "image/point/a1_rouge.png";  document.getElementById("p3").src = "image/point/a1_rouge.png"; document.getElementById("p4").src = "image/point/a1_droite.png"; }
if ( sens_its8 == 1 && progression_its8 == 5 )  			{ document.getElementById("p3").src = "image/point/a1_rouge.png";  document.getElementById("p4").src = "image/point/a1_rouge.png"; document.getElementById("p5").src = "image/point/a1_droite.png"; }
if ( sens_its8 == 1 && progression_its8 == 6 )  			{ document.getElementById("p4").src = "image/point/a1_rouge.png";  document.getElementById("p5").src = "image/point/a1_rouge.png"; document.getElementById("p6").src = "image/point/a1_droite.png"; }
if ( sens_its8 == 1 && progression_its8 == 7 )  			{ document.getElementById("p5").src = "image/point/a1_rouge.png";  document.getElementById("p6").src = "image/point/a1_rouge.png"; document.getElementById("p7").src = "image/point/a1_droite.png";  }
if ( sens_its8 == 1 && progression_its8 == 8 )  			{ document.getElementById("p6").src = "image/point/a1_rouge.png";  document.getElementById("p7").src = "image/point/a1_rouge.png"; document.getElementById("p8").src = "image/point/a1_droite.png"; }


// its4 A - Nouvelle version sortie -> haut

if ( sens_its4 == 1 && occupation_its4 && aiguille96 == 1 && aiguille83 == 1 && aiguille84 == 0 ) 	{ progression_its4 = progression_its4 + 1; t4 = 1; }
if (sens_its4 == 1  && progression_its4 > 28 && t4 == 1 ) 											{ occupation_its4 = false; occupation_its21 = true;
train2_its21[0] = train2_its4[0];
train2_its21[1] = train2_its4[1];
train2_its21[2] = train2_its4[2];
train2_its21[3] = train2_its4[3];
train2_its21[4] = train2_its4[4];
train2_its21[5] = train2_its4[5];
train2_its21[6] = train2_its4[6];
sens_its21 = sens_its4;
progression_its4 = 0;
aiguille96 = 0; aiguille83 = 0;
its96 = 0; its104 = 0; its4 = 0; its83 = 0; its19 = 0; its20 = 0;
}

if ( sens_its4 == 1 && progression_its4 == 1 && t4 == 1)  				{ document.getElementById("p7").src = "image/point/a1_rouge.png";  document.getElementById("p8").src = "image/point/a1_rouge.png"; document.getElementById("a32").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 2 && t4 == 1)  				{ document.getElementById("p8").src = "image/point/a1_rouge.png";  document.getElementById("a32").src = "image/point/a1_rouge.png"; document.getElementById("a33").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 3 && t4 == 1)  				{ document.getElementById("a32").src = "image/point/a1_rouge.png";  document.getElementById("a33").src = "image/point/a1_rouge.png"; document.getElementById("a34").src = "image/point/a1_droite.png";  }
if ( sens_its4 == 1 && progression_its4 == 4 && t4 == 1)  				{ document.getElementById("a33").src = "image/point/a1_rouge.png";  document.getElementById("a34").src = "image/point/a1_rouge.png"; document.getElementById("a35").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 5 && t4 == 1)  				{ document.getElementById("a34").src = "image/point/a1_rouge.png";  document.getElementById("a35").src = "image/point/a1_rouge.png"; document.getElementById("f50").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 6 && t4 == 1)  				{ document.getElementById("a35").src = "image/point/a1_rouge.png";  document.getElementById("f50").src = "image/point/a1_rouge.png"; document.getElementById("f51").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 7 && t4 == 1)  				{ document.getElementById("f50").src = "image/point/a1_rouge.png";  document.getElementById("f51").src = "image/point/a1_rouge.png"; document.getElementById("x37").src = "image/point/a1_droite.png";  }
if ( sens_its4 == 1 && progression_its4 == 8 && t4 == 1)  				{ document.getElementById("f51").src = "image/point/a1_rouge.png";  document.getElementById("x37").src = "image/point/a1_rouge.png"; document.getElementById("x38").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 9 && t4 == 1)  				{ document.getElementById("x37").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("f7").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 10 && t4 == 1)  				{ document.getElementById("x38").src = "image/point/a1_rouge.png";  document.getElementById("f7").src = "image/point/a1_rouge.png"; document.getElementById("f8").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 11 && t4 == 1)  				{ document.getElementById("f7").src = "image/point/a1_rouge.png";  document.getElementById("f8").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 12 && t4 == 1)  				{ document.getElementById("f8").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 13 && t4 == 1)  				{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 14 && t4 == 1)  				{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 15 && t4 == 1)  				{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 15 && t4 == 1)  				{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 16 && t4 == 1)  				{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b45").src = "image/point/a1_rouge.png"; document.getElementById("b46").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 17 && t4 == 1)  				{ document.getElementById("b45").src = "image/point/a1_rouge.png";  document.getElementById("b46").src = "image/point/a1_rouge.png"; document.getElementById("b47").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 18 && t4 == 1)  				{ document.getElementById("b46").src = "image/point/a1_rouge.png";  document.getElementById("b47").src = "image/point/a1_rouge.png"; document.getElementById("b48").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 19 && t4 == 1)  				{ document.getElementById("b47").src = "image/point/a1_rouge.png";  document.getElementById("b48").src = "image/point/a1_rouge.png"; document.getElementById("b49").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 20 && t4 == 1)  				{ document.getElementById("b48").src = "image/point/a1_rouge.png";  document.getElementById("b49").src = "image/point/a1_rouge.png"; document.getElementById("b50").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 21 && t4 == 1)  				{ document.getElementById("b49").src = "image/point/a1_rouge.png";  document.getElementById("b50").src = "image/point/a1_rouge.png"; document.getElementById("b51").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 22 && t4 == 1)  				{ document.getElementById("b50").src = "image/point/a1_rouge.png";  document.getElementById("b51").src = "image/point/a1_rouge.png"; document.getElementById("b52").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 23 && t4 == 1)  				{ document.getElementById("b51").src = "image/point/a1_rouge.png";  document.getElementById("b52").src = "image/point/a1_rouge.png"; document.getElementById("b53").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 24 && t4 == 1)  				{ document.getElementById("b52").src = "image/point/a1_rouge.png";  document.getElementById("b53").src = "image/point/a1_rouge.png"; document.getElementById("b54").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 25 && t4 == 1)  				{ document.getElementById("b53").src = "image/point/a1_rouge.png";  document.getElementById("b54").src = "image/point/a1_rouge.png"; document.getElementById("b55").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 26 && t4 == 1)  				{ document.getElementById("b54").src = "image/point/a1_rouge.png";  document.getElementById("b55").src = "image/point/a1_rouge.png"; document.getElementById("b56").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 27 && t4 == 1)  				{ document.getElementById("b55").src = "image/point/a1_rouge.png";  document.getElementById("b56").src = "image/point/a1_rouge.png"; document.getElementById("b57").src = "image/point/a1_droite.png";}
if ( sens_its4 == 1 && progression_its4 == 28 && t4 == 1)  				{ document.getElementById("b56").src = "image/point/a1_rouge.png";  document.getElementById("b57").src = "image/point/a1_rouge.png"; document.getElementById("b58").src = "image/point/a1_droite.png";}

// its4 B - Nouvelle version sortie -> bat

if ( sens_its4 == 1 && occupation_its4 && aiguille96 == 1 && aiguille83 == 1 && aiguille84 == 1 ) 	{ progression_its4 = progression_its4 + 1; t4 = 2; }
if (sens_its4 == 1  && progression_its4 > 20 && t4 == 2 ) 											{ occupation_its4 = false; occupation_its40 = true;
train2_its40[0] = train2_its4[0];
train2_its40[1] = train2_its4[1];
train2_its40[2] = train2_its4[2];
train2_its40[3] = train2_its4[3];
train2_its40[4] = train2_its4[4];
train2_its40[5] = train2_its4[5];
train2_its40[6] = train2_its4[6];
sens_its40 = sens_its4;
progression_its4 = 0;
aiguille96 = 0; aiguille83 = 0; aiguille84 = 0;
its96 = 0; its104 = 0; its4 = 0; its83 = 0; its19 = 0; its20 = 0; its84 = 0; its39 = 0;
}

if ( sens_its4 == 1 && progression_its4 == 1 && t4 == 2)  				{ document.getElementById("p7").src = "image/point/a1_rouge.png";  document.getElementById("p8").src = "image/point/a1_rouge.png"; document.getElementById("a32").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 2 && t4 == 2)  				{ document.getElementById("p8").src = "image/point/a1_rouge.png";  document.getElementById("a32").src = "image/point/a1_rouge.png"; document.getElementById("a33").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 3 && t4 == 2)  				{ document.getElementById("a32").src = "image/point/a1_rouge.png";  document.getElementById("a33").src = "image/point/a1_rouge.png"; document.getElementById("a34").src = "image/point/a1_droite.png";  }
if ( sens_its4 == 1 && progression_its4 == 4 && t4 == 2)  				{ document.getElementById("a33").src = "image/point/a1_rouge.png";  document.getElementById("a34").src = "image/point/a1_rouge.png"; document.getElementById("a35").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 5 && t4 == 2)  				{ document.getElementById("a34").src = "image/point/a1_rouge.png";  document.getElementById("a35").src = "image/point/a1_rouge.png"; document.getElementById("f50").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 6 && t4 == 2)  				{ document.getElementById("a35").src = "image/point/a1_rouge.png";  document.getElementById("f50").src = "image/point/a1_rouge.png"; document.getElementById("f51").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 7 && t4 == 2)  				{ document.getElementById("f50").src = "image/point/a1_rouge.png";  document.getElementById("f51").src = "image/point/a1_rouge.png"; document.getElementById("x37").src = "image/point/a1_droite.png";  }
if ( sens_its4 == 1 && progression_its4 == 8 && t4 == 2)  				{ document.getElementById("f51").src = "image/point/a1_rouge.png";  document.getElementById("x37").src = "image/point/a1_rouge.png"; document.getElementById("x38").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 9 && t4 == 2)  				{ document.getElementById("x37").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("f7").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 10 && t4 == 2)  				{ document.getElementById("x38").src = "image/point/a1_rouge.png";  document.getElementById("f7").src = "image/point/a1_rouge.png"; document.getElementById("f8").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 11 && t4 == 2)  				{ document.getElementById("f7").src = "image/point/a1_rouge.png";  document.getElementById("f8").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 12 && t4 == 2)  				{ document.getElementById("f8").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 13 && t4 == 2)  				{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 14 && t4 == 2)  				{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 15 && t4 == 2)  				{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 16 && t4 == 2)  				{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 17 && t4 == 2)  				{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b45").src = "image/point/a1_rouge.png"; document.getElementById("f9").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 18 && t4 == 2)  				{ document.getElementById("b45").src = "image/point/a1_rouge.png";  document.getElementById("f9").src = "image/point/a1_rouge.png"; document.getElementById("f10").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 19 && t4 == 2)  				{ document.getElementById("f9").src = "image/point/a1_rouge.png";  document.getElementById("f10").src = "image/point/a1_rouge.png"; document.getElementById("c47").src = "image/point/a1_droite.png"; }
if ( sens_its4 == 1 && progression_its4 == 20 && t4 == 2)  				{ document.getElementById("f10").src = "image/point/a1_rouge.png";  document.getElementById("c47").src = "image/point/a1_rouge.png"; document.getElementById("c48").src = "image/point/a1_droite.png"; }


// its102

if (sens_its102 == 1 && occupation_its102 ) 			{ progression_its102 = progression_its102 + 1;  }
if (sens_its102 == 1 && progression_its102 > 7 ) 		{ occupation_its102 = false; occupation_its117 = true;  
train2_its117[0] = train2_its102[0];
train2_its117[1] = train2_its102[1];
train2_its117[2] = train2_its102[2];
train2_its117[3] = train2_its102[3];
train2_its117[4] = train2_its102[4];
train2_its117[5] = train2_its102[5];
train2_its117[6] = train2_its102[6];
sens_its117 = sens_its102;
progression_its102 = 0;
its102 = 0;
its101 = 0; 
document.getElementById("z23").src = "image/feux/rouge_2.png";
}

if ( sens_its102 == 1 && progression_its102 == 1 )  			{ document.getElementById("x22").src = "image/point/a1_rouge.png";  document.getElementById("x23").src = "image/point/a1_rouge.png"; document.getElementById("x24").src = "image/point/a1_droite.png"; }
if ( sens_its102 == 1 && progression_its102 == 2 )  			{ document.getElementById("x23").src = "image/point/a1_rouge.png";  document.getElementById("x24").src = "image/point/a1_rouge.png"; document.getElementById("x25").src = "image/point/a1_droite.png"; }
if ( sens_its102 == 1 && progression_its102 == 3 )  			{ document.getElementById("x24").src = "image/point/a1_rouge.png";  document.getElementById("x25").src = "image/point/a1_rouge.png"; document.getElementById("x26").src = "image/point/a1_droite.png"; }
if ( sens_its102 == 1 && progression_its102 == 4 )  			{ document.getElementById("x25").src = "image/point/a1_rouge.png";  document.getElementById("x26").src = "image/point/a1_rouge.png"; document.getElementById("x27").src = "image/point/a1_droite.png"; }
if ( sens_its102 == 1 && progression_its102 == 5 )  			{ document.getElementById("x26").src = "image/point/a1_rouge.png";  document.getElementById("x27").src = "image/point/a1_rouge.png"; document.getElementById("x28").src = "image/point/a1_droite.png"; }
if ( sens_its102 == 1 && progression_its102 == 6 )  			{ document.getElementById("x27").src = "image/point/a1_rouge.png";  document.getElementById("x28").src = "image/point/a1_rouge.png"; document.getElementById("x29").src = "image/point/a1_droite.png"; }
if ( sens_its102 == 1 && progression_its102 == 7 )  			{ document.getElementById("x28").src = "image/point/a1_rouge.png";  document.getElementById("x29").src = "image/point/a1_rouge.png"; document.getElementById("x30").src = "image/point/a1_droite.png"; }




// its117

if (sens_its117 == 1 && occupation_its117 ) 								{ progression_its117 = progression_its117 + 1; }
if (sens_its117 == 1 && progression_its117 > 8 ) 							{ occupation_its117 = false; occupation_its103 = true;  
train2_its103[0] = train2_its117[0];
train2_its103[1] = train2_its117[1];
train2_its103[2] = train2_its117[2];
train2_its103[3] = train2_its117[3];
train2_its103[4] = train2_its117[4];
train2_its103[5] = train2_its117[5];
train2_its103[6] = train2_its117[6];
sens_its103 = sens_its117;
progression_its117 = 0;
its117 = 0;
}

if ( sens_its117 == 1 && progression_its117 == 1 )  			{ document.getElementById("x29").src = "image/point/a1_rouge.png";  document.getElementById("x30").src = "image/point/a1_rouge.png"; document.getElementById("o1").src = "image/point/a1_droite.png"; }
if ( sens_its117 == 1 && progression_its117 == 2 )  			{ document.getElementById("x30").src = "image/point/a1_rouge.png";  document.getElementById("o1").src = "image/point/a1_rouge.png"; document.getElementById("o2").src = "image/point/a1_droite.png"; }
if ( sens_its117 == 1 && progression_its117 == 3 )  			{ document.getElementById("o1").src = "image/point/a1_rouge.png";  document.getElementById("o2").src = "image/point/a1_rouge.png"; document.getElementById("o3").src = "image/point/a1_droite.png";  }
if ( sens_its117 == 1 && progression_its117 == 4 )  			{ document.getElementById("o2").src = "image/point/a1_rouge.png";  document.getElementById("o3").src = "image/point/a1_rouge.png"; document.getElementById("o4").src = "image/point/a1_droite.png"; }
if ( sens_its117 == 1 && progression_its117 == 5 )  			{ document.getElementById("o3").src = "image/point/a1_rouge.png";  document.getElementById("o4").src = "image/point/a1_rouge.png"; document.getElementById("o5").src = "image/point/a1_droite.png"; }
if ( sens_its117 == 1 && progression_its117 == 6 )  			{ document.getElementById("o4").src = "image/point/a1_rouge.png";  document.getElementById("o5").src = "image/point/a1_rouge.png"; document.getElementById("o6").src = "image/point/a1_droite.png"; }
if ( sens_its117 == 1 && progression_its117 == 7 )  			{ document.getElementById("o5").src = "image/point/a1_rouge.png";  document.getElementById("o6").src = "image/point/a1_rouge.png"; document.getElementById("o7").src = "image/point/a1_droite.png";  }
if ( sens_its117 == 1 && progression_its117 == 8 )  			{ document.getElementById("o6").src = "image/point/a1_rouge.png";  document.getElementById("o7").src = "image/point/a1_rouge.png"; document.getElementById("o8").src = "image/point/a1_droite.png"; }

// its103

if (sens_its103 == 1 && occupation_its103 ) 			{ progression_its103 = progression_its103 + 1; }
if (sens_its103 == 1 && progression_its103 > 5 ) 		{ occupation_its103 = false; occupation_its104 = true;  
train2_its104[0] = train2_its103[0];
train2_its104[1] = train2_its103[1];
train2_its104[2] = train2_its103[2];
train2_its104[3] = train2_its103[3];
train2_its104[4] = train2_its103[4];
train2_its104[5] = train2_its103[5];
train2_its104[6] = train2_its103[6];
sens_its104 = sens_its103;
progression_its103 = 0;
its103 = 0;
}

if ( sens_its103 == 1 && progression_its103 == 1 )  			{ document.getElementById("o7").src = "image/point/a1_rouge.png";  document.getElementById("o8").src = "image/point/a1_rouge.png"; document.getElementById("x32").src = "image/point/a1_droite.png"; }
if ( sens_its103 == 1 && progression_its103 == 2 )  			{ document.getElementById("o8").src = "image/point/a1_rouge.png";  document.getElementById("x32").src = "image/point/a1_rouge.png"; document.getElementById("x33").src = "image/point/a1_droite.png"; }
if ( sens_its103 == 1 && progression_its103 == 3 )  			{ document.getElementById("x32").src = "image/point/a1_rouge.png";  document.getElementById("x33").src = "image/point/a1_rouge.png"; document.getElementById("x34").src = "image/point/a1_droite.png";  }
if ( sens_its103 == 1 && progression_its103 == 4 )  			{ document.getElementById("x33").src = "image/point/a1_rouge.png";  document.getElementById("x34").src = "image/point/a1_rouge.png"; document.getElementById("x35").src = "image/point/a1_droite.png"; }
if ( sens_its103 == 1 && progression_its103 == 5 )  			{ document.getElementById("x34").src = "image/point/a1_rouge.png";  document.getElementById("x35").src = "image/point/a1_rouge.png"; document.getElementById("x36").src = "image/point/a1_droite.png"; }

// its104

if (sens_its104 == 1 && occupation_its104 ) 								{ progression_its104 = progression_its104 + 1; }
if (sens_its104 == 1 && aiguille83 == 0 && progression_its104 > 2 ) 		{ occupation_its104 = false; occupation_its105 = true;  
train2_its105[0] = train2_its104[0];
train2_its105[1] = train2_its104[1];
train2_its105[2] = train2_its104[2];
train2_its105[3] = train2_its104[3];
train2_its105[4] = train2_its104[4];
train2_its105[5] = train2_its104[5];
train2_its105[6] = train2_its104[6];
sens_its105 = sens_its104;
progression_its104 = 0;
its104 = 0;
}

if ( sens_its104 == 1 && occupation_its104 && aiguille83 == 0  ) 	{
if ( sens_its104 == 1 && progression_its104 == 1 )  				{ document.getElementById("x35").src = "image/point/a1_rouge.png";  document.getElementById("x36").src = "image/point/a1_rouge.png"; document.getElementById("x37").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 2 )  				{ document.getElementById("x36").src = "image/point/a1_rouge.png";  document.getElementById("x37").src = "image/point/a1_rouge.png"; document.getElementById("x38").src = "image/point/a1_droite.png"; }
}


if (sens_its104 == 1 && aiguille83 == 1 && aiguille84 == 0 && progression_its104 > 8 ) 		{ occupation_its104 = false; occupation_its20 = true;  
train2_its20[0] = train2_its104[0];
train2_its20[1] = train2_its104[1];
train2_its20[2] = train2_its104[2];
train2_its20[3] = train2_its104[3];
train2_its20[4] = train2_its104[4];
train2_its20[5] = train2_its104[5];
train2_its20[6] = train2_its104[6];
sens_its20 = sens_its104;
progression_its104 = 0;
aiguille83 = 0;
its104 = 0; its83 = 0; its19 = 0;
}

if ( sens_its104 == 1 && occupation_its104 && aiguille83 == 1 && aiguille84 == 0 ) {
if ( sens_its104 == 1 && progression_its104 == 1 )  			{ document.getElementById("x37").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("f7").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 2 )  			{ document.getElementById("x38").src = "image/point/a1_rouge.png";  document.getElementById("f7").src = "image/point/a1_rouge.png"; document.getElementById("f8").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 3 )  			{ document.getElementById("f7").src = "image/point/a1_rouge.png";  document.getElementById("f8").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 4 )  			{ document.getElementById("f8").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 5 )  			{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 6 )  			{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 7 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 8 )  			{  document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_droite.png"; }
}

if (sens_its104 == 1 && aiguille83 == 1 && aiguille84 == 1 && progression_its104 > 12 ) 		{ occupation_its104 = false; occupation_its40 = true;  
train2_its40[0] = train2_its104[0];
train2_its40[1] = train2_its104[1];
train2_its40[2] = train2_its104[2];
train2_its40[3] = train2_its104[3];
train2_its40[4] = train2_its104[4];
train2_its40[5] = train2_its104[5];
train2_its40[6] = train2_its104[6];
sens_its40 = sens_its104;
progression_its104 = 0;
aiguille83 = 0;
aiguille84 = 0;
its104 = 0; its83 = 0; its19 = 0; its84 = 0; its39 = 0; 
}

if ( sens_its104 == 1 && occupation_its104 && aiguille83 == 1 && aiguille84 == 1 ) {
if ( sens_its104 == 1 && progression_its104 == 1 )  			{ document.getElementById("x37").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("f7").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 2 )  			{ document.getElementById("x38").src = "image/point/a1_rouge.png";  document.getElementById("f7").src = "image/point/a1_rouge.png"; document.getElementById("f8").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 3 )  			{ document.getElementById("f7").src = "image/point/a1_rouge.png";  document.getElementById("f8").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 4 )  			{ document.getElementById("f8").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 5 )  			{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 6 )  			{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 7 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 8 )  			{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 9 )  			{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b45").src = "image/point/a1_rouge.png"; document.getElementById("f9").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 10 )  			{ document.getElementById("b45").src = "image/point/a1_rouge.png";  document.getElementById("f9").src = "image/point/a1_rouge.png"; document.getElementById("f10").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 11 )  			{ document.getElementById("f9").src = "image/point/a1_rouge.png";  document.getElementById("f10").src = "image/point/a1_rouge.png"; document.getElementById("c47").src = "image/point/a1_droite.png"; }
if ( sens_its104 == 1 && progression_its104 == 12 )  			{ document.getElementById("f10").src = "image/point/a1_rouge.png";  document.getElementById("c47").src = "image/point/a1_rouge.png"; document.getElementById("c48").src = "image/point/a1_droite.png"; }
}


// its105

if (sens_its105 == 1 && occupation_its105 ) 			{ progression_its105 = progression_its105 + 1; }
if (sens_its105 == 1 && progression_its105 > 7 ) 		{ occupation_its105 = false; occupation_its106 = true;  
train2_its106[0] = train2_its105[0];
train2_its106[1] = train2_its105[1];
train2_its106[2] = train2_its105[2];
train2_its106[3] = train2_its105[3];
train2_its106[4] = train2_its105[4];
train2_its106[5] = train2_its105[5];
train2_its106[6] = train2_its105[6];
sens_its106 = sens_its105;
progression_its105 = 0;
its105 = 0; 
}

if ( sens_its105 == 1 && progression_its105 == 1 )  			{ document.getElementById("x37").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("x39").src = "image/point/a1_droite.png"; }
if ( sens_its105 == 1 && progression_its105 == 2 )  			{ document.getElementById("x38").src = "image/point/a1_rouge.png";  document.getElementById("x39").src = "image/point/a1_rouge.png"; document.getElementById("x40").src = "image/point/a1_droite.png"; }
if ( sens_its105 == 1 && progression_its105 == 3 )  			{ document.getElementById("x39").src = "image/point/a1_rouge.png";  document.getElementById("x40").src = "image/point/a1_rouge.png"; document.getElementById("x41").src = "image/point/a1_droite.png"; }
if ( sens_its105 == 1 && progression_its105 == 4 )  			{ document.getElementById("x40").src = "image/point/a1_rouge.png";  document.getElementById("x41").src = "image/point/a1_rouge.png"; document.getElementById("x42").src = "image/point/a1_droite.png"; }
if ( sens_its105 == 1 && progression_its105 == 5 )  			{ document.getElementById("x41").src = "image/point/a1_rouge.png";  document.getElementById("x42").src = "image/point/a1_rouge.png"; document.getElementById("x43").src = "image/point/a1_droite.png"; }
if ( sens_its105 == 1 && progression_its105 == 6 )  			{ document.getElementById("x42").src = "image/point/a1_rouge.png";  document.getElementById("x43").src = "image/point/a1_rouge.png"; document.getElementById("x44").src = "image/point/a1_droite.png"; }
if ( sens_its105 == 1 && progression_its105 == 7 )  			{ document.getElementById("x43").src = "image/point/a1_rouge.png";  document.getElementById("x44").src = "image/point/a1_rouge.png"; document.getElementById("x45").src = "image/point/a1_droite.png"; }

// its106

if (sens_its106 == 1 && occupation_its106 ) 			{ progression_its106 = progression_its106 + 1; }
if (sens_its106 == 1 && progression_its106 > 2 ) 		{ occupation_its106 = false; occupation_its107 = true;  
train2_its107[0] = train2_its106[0];
train2_its107[1] = train2_its106[1];
train2_its107[2] = train2_its106[2];
train2_its107[3] = train2_its106[3];
train2_its107[4] = train2_its106[4];
train2_its107[5] = train2_its106[5];
train2_its107[6] = train2_its106[6];
sens_its107 = sens_its106;
progression_its106 = 0;
its106 = 0; 
}

if ( sens_its106 == 1 && progression_its106 == 1 )  			{ document.getElementById("x44").src = "image/point/a1_rouge.png";  document.getElementById("x45").src = "image/point/a1_rouge.png"; document.getElementById("x46").src = "image/point/a1_droite.png"; }
if ( sens_its106 == 1 && progression_its106 == 2 )  			{ document.getElementById("x45").src = "image/point/a1_rouge.png";  document.getElementById("x46").src = "image/point/a1_rouge.png"; document.getElementById("x47").src = "image/point/a1_droite.png"; }

// its107

if (sens_its107 == 1 && occupation_its107 ) 			{ progression_its107 = progression_its107 + 1; }
if (sens_its107 == 1 && progression_its107 > 11 ) 		{ occupation_its107 = false;  
train2_its107[0] = train2_its107[0];
train2_its107[1] = train2_its107[1];
train2_its107[2] = train2_its107[2];
train2_its107[3] = train2_its107[3];
train2_its107[4] = train2_its107[4];
train2_its107[5] = train2_its107[5];
train2_its107[6] = train2_its107[6];
sens_its107 = sens_its107;
progression_its107 = 11;
its107 = 0;
}

if ( sens_its107 == 1 && progression_its107 == 1 )  			{ document.getElementById("x46").src = "image/point/a1_rouge.png";  document.getElementById("x47").src = "image/point/a1_rouge.png"; document.getElementById("x48").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 2 )  			{ document.getElementById("x47").src = "image/point/a1_rouge.png";  document.getElementById("x48").src = "image/point/a1_rouge.png"; document.getElementById("x49").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 3 )  			{ document.getElementById("x48").src = "image/point/a1_rouge.png";  document.getElementById("x49").src = "image/point/a1_rouge.png"; document.getElementById("x50").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 4 )  			{ document.getElementById("x49").src = "image/point/a1_rouge.png";  document.getElementById("x50").src = "image/point/a1_rouge.png"; document.getElementById("x51").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 5 )  			{ document.getElementById("x50").src = "image/point/a1_rouge.png";  document.getElementById("x51").src = "image/point/a1_rouge.png"; document.getElementById("x52").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 6 )  			{ document.getElementById("x51").src = "image/point/a1_rouge.png";  document.getElementById("x52").src = "image/point/a1_rouge.png"; document.getElementById("x53").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 7 )  			{ document.getElementById("x52").src = "image/point/a1_rouge.png";  document.getElementById("x53").src = "image/point/a1_rouge.png"; document.getElementById("x54").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 8 )  			{ document.getElementById("x53").src = "image/point/a1_rouge.png";  document.getElementById("x54").src = "image/point/a1_rouge.png"; document.getElementById("x55").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 9 )  			{ document.getElementById("x54").src = "image/point/a1_rouge.png";  document.getElementById("x55").src = "image/point/a1_rouge.png"; document.getElementById("x56").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 10 )  			{ document.getElementById("x55").src = "image/point/a1_rouge.png";  document.getElementById("x56").src = "image/point/a1_rouge.png"; document.getElementById("x57").src = "image/point/a1_droite.png"; }
if ( sens_its107 == 1 && progression_its107 == 11 )  			{  document.getElementById("x56").src = "image/point/a1_rouge.png";  document.getElementById("x57").src = "image/point/a1_rouge.png"; document.getElementById("x58").src = "image/point/a1_droite.png"; }
 
// its83

if (sens_its83 == 1 && occupation_its83) 				{ progression_its83 = progression_its83 + 1; }
if (sens_its83 == 1 && progression_its83 > 7 ) 			{ occupation_its83 = false; occupation_its84 = true;  
train2_its84[0] = train2_its83[0];
train2_its84[1] = train2_its83[1];
train2_its84[2] = train2_its83[2];
train2_its84[3] = train2_its83[3];
train2_its84[4] = train2_its83[4];
train2_its84[5] = train2_its83[5];
train2_its84[6] = train2_its83[6];
sens_its84 = sens_its83;
progression_its83 = 0; 
its83 = 0; its19 = 0; 
} 

if ( sens_its83 == 1 && progression_its83 == 1 )  			{ document.getElementById("x37").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("f7").src = "image/point/a1_droite.png";}
if ( sens_its83 == 1 && progression_its83 == 2 )  			{ document.getElementById("x38").src = "image/point/a1_rouge.png";  document.getElementById("f7").src = "image/point/a1_rouge.png"; document.getElementById("f8").src = "image/point/a1_droite.png";}
if ( sens_its83 == 1 && progression_its83 == 3 )  			{ document.getElementById("f7").src = "image/point/a1_rouge.png";  document.getElementById("f8").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_droite.png";}
if ( sens_its83 == 1 && progression_its83 == 4 )  			{ document.getElementById("f8").src = "image/point/a1_rouge.png";   document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_droite.png";}
if ( sens_its83 == 1 && progression_its83 == 5 )  			{ document.getElementById("b40").src = "image/point/a1_rouge.png";   document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_droite.png";}
if ( sens_its83 == 1 && progression_its83 == 6 )  			{ document.getElementById("b41").src = "image/point/a1_rouge.png";   document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_droite.png";}
if ( sens_its83 == 1 && progression_its83 == 7 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";   document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_droite.png";}

// its18

if (sens_its18 == 1 && occupation_its18 ) 			{ progression_its18 = progression_its18 + 1; ligne = 18; }
if (sens_its18 == 1 && progression_its18 > 7 ) 		{ occupation_its18 = false; occupation_its121 = true;  

train2_its121[0] = train2_its18[0];
train2_its121[1] = train2_its18[1];
train2_its121[2] = train2_its18[2];
train2_its121[3] = train2_its18[3];
train2_its121[4] = train2_its18[4];
train2_its121[5] = train2_its18[5];
train2_its121[6] = train2_its18[6];
sens_its121 = sens_its18;
progression_its18 = 0;
its18 = 0;
}


if ( sens_its18 == 1 && progression_its18 == 1 )  		{ document.getElementById("n7").src = "image/point/a1_rouge.png";  document.getElementById("n8").src = "image/point/a1_rouge.png"; document.getElementById("b32").src = "image/point/a1_droite.png";}
if ( sens_its18 == 1 && progression_its18 == 2 )  		{ document.getElementById("n8").src = "image/point/a1_rouge.png";  document.getElementById("b32").src = "image/point/a1_rouge.png"; document.getElementById("b33").src = "image/point/a1_droite.png";}
if ( sens_its18 == 1 && progression_its18 == 3 )  		{ document.getElementById("n8").src = "image/point/a1_rouge.png";  document.getElementById("b32").src = "image/point/a1_rouge.png"; document.getElementById("b33").src = "image/point/a1_droite.png";}
if ( sens_its18 == 1 && progression_its18 == 4 )  		{ document.getElementById("b32").src = "image/point/a1_rouge.png";  document.getElementById("b33").src = "image/point/a1_rouge.png"; document.getElementById("b34").src = "image/point/a1_droite.png";}
if ( sens_its18 == 1 && progression_its18 == 5 )  		{ document.getElementById("b33").src = "image/point/a1_rouge.png";  document.getElementById("b34").src = "image/point/a1_rouge.png"; document.getElementById("b35").src = "image/point/a1_droite.png";}
if ( sens_its18 == 1 && progression_its18 == 6 )  		{ document.getElementById("b34").src = "image/point/a1_rouge.png";  document.getElementById("b35").src = "image/point/a1_rouge.png"; document.getElementById("b36").src = "image/point/a1_droite.png";}
if ( sens_its18 == 1 && progression_its18 == 7 )  		{  document.getElementById("b35").src = "image/point/a1_rouge.png";  document.getElementById("b36").src = "image/point/a1_rouge.png"; document.getElementById("b37").src = "image/point/a1_droite.png";}

// its121

if (sens_its121 == 1 && occupation_its121 ) 				{ progression_its121 = progression_its121 + 1; ligne = 121; }
if (sens_its121 == 1 && progression_its121 > 2 ) 			{ occupation_its121 = false; occupation_its19 = true;  
train2_its19[0] = train2_its121[0];
train2_its19[1] = train2_its121[1];
train2_its19[2] = train2_its121[2];
train2_its19[3] = train2_its121[3];
train2_its19[4] = train2_its121[4];
train2_its19[5] = train2_its121[5];
train2_its19[6] = train2_its121[6];
sens_its19 = sens_its121;
progression_its121 = 0;
its121 = 0;
}


if ( sens_its121 == 1 && progression_its121 == 1 )  	{ document.getElementById("b36").src = "image/point/a1_rouge.png";  document.getElementById("b37").src = "image/point/a1_rouge.png"; document.getElementById("b38").src = "image/point/a1_droite.png";}
if ( sens_its121 == 1 && progression_its121 == 2 )  	{  document.getElementById("b37").src = "image/point/a1_rouge.png";  document.getElementById("b38").src = "image/point/a1_rouge.png"; document.getElementById("b39").src = "image/point/a1_droite.png";}

// its19

if (sens_its19 == 1 && occupation_its19 ) 							{ progression_its19 = progression_its19 + 1; }
if (sens_its19 == 1 && aiguille84 == 0 && progression_its19 > 6 ) 	{ occupation_its19 = false; occupation_its20 = true;  
train2_its20[0] = train2_its19[0];
train2_its20[1] = train2_its19[1];
train2_its20[2] = train2_its19[2];
train2_its20[3] = train2_its19[3];
train2_its20[4] = train2_its19[4];
train2_its20[5] = train2_its19[5];
train2_its20[6] = train2_its19[6];
sens_its20 = sens_its19;
progression_its19 = 0;
its19 = 0; 
}

if (sens_its19 == 1 && aiguille84 == 1 && progression_its19 > 10 ) 	{ occupation_its19 = false; occupation_its40 = true;  
train2_its40[0] = train2_its19[0];
train2_its40[1] = train2_its19[1];
train2_its40[2] = train2_its19[2];
train2_its40[3] = train2_its19[3];
train2_its40[4] = train2_its19[4];
train2_its40[5] = train2_its19[5];
train2_its40[6] = train2_its19[6];
sens_its40 = sens_its19;
progression_its19 = 0;
aiguille84 = 0;
its19 = 0; its84 = 0; its39 = 0;
}

if ( sens_its19 == 1 && occupation_its19 && aiguille84 == 0) 	{
if ( sens_its19 == 1 && progression_its19 == 1 )  				{ document.getElementById("b38").src = "image/point/a1_rouge.png";  document.getElementById("b39").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 2 )  				{ document.getElementById("b39").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 3 )  				{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 4 )  				{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 5 )  				{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 6 )  				{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_droite.png";}
}
if ( sens_its19 == 1 && occupation_its19 && aiguille84 == 1) 	{
if ( sens_its19 == 1 && progression_its19 == 1 )  				{ document.getElementById("b38").src = "image/point/a1_rouge.png";  document.getElementById("b39").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 2 )  				{ document.getElementById("b39").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 3 )  				{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 4 )  				{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 5 )  				{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 6 )  				{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 7 )  				{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b45").src = "image/point/a1_rouge.png"; document.getElementById("f9").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 8 )  				{ document.getElementById("b45").src = "image/point/a1_rouge.png";  document.getElementById("f9").src = "image/point/a1_rouge.png"; document.getElementById("f10").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 9 )  				{ document.getElementById("f9").src = "image/point/a1_rouge.png";   document.getElementById("f10").src = "image/point/a1_rouge.png"; document.getElementById("c47").src = "image/point/a1_droite.png";}
if ( sens_its19 == 1 && progression_its19 == 10 )  				{ document.getElementById("f10").src = "image/point/a1_rouge.png";  document.getElementById("c47").src = "image/point/a1_rouge.png"; document.getElementById("c48").src = "image/point/a1_droite.png";}
}



// its20

if (sens_its20 == 1 && occupation_its20 ) 				{ progression_its20 = progression_its20 + 1; ligne = 20; }
if (sens_its20 == 1 && progression_its20 > 13 ) 		{ occupation_its20 = false; occupation_its21 = true;  
train2_its21[0] = train2_its20[0];
train2_its21[1] = train2_its20[1];
train2_its21[2] = train2_its20[2];
train2_its21[3] = train2_its20[3];
train2_its21[4] = train2_its20[4];
train2_its21[5] = train2_its20[5];
train2_its21[6] = train2_its20[6];
sens_its21 = sens_its20;
progression_its20 = 0;
aiguille83 = 0;
its20 = 0; 
}


if ( sens_its20 == 1 && progression_its20 == 1 )  		{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b45").src = "image/point/a1_rouge.png"; document.getElementById("b46").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 2 )  		{ document.getElementById("b45").src = "image/point/a1_rouge.png";  document.getElementById("b46").src = "image/point/a1_rouge.png"; document.getElementById("b47").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 3 )  		{ document.getElementById("b46").src = "image/point/a1_rouge.png";  document.getElementById("b47").src = "image/point/a1_rouge.png"; document.getElementById("b48").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 4 )  		{ document.getElementById("b47").src = "image/point/a1_rouge.png";  document.getElementById("b48").src = "image/point/a1_rouge.png"; document.getElementById("b49").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 5 )  		{ document.getElementById("b48").src = "image/point/a1_rouge.png";  document.getElementById("b49").src = "image/point/a1_rouge.png"; document.getElementById("b50").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 6 )  		{ document.getElementById("b49").src = "image/point/a1_rouge.png";  document.getElementById("b50").src = "image/point/a1_rouge.png"; document.getElementById("b51").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 7 )  		{ document.getElementById("b50").src = "image/point/a1_rouge.png";  document.getElementById("b51").src = "image/point/a1_rouge.png"; document.getElementById("b52").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 8 )  		{ document.getElementById("b51").src = "image/point/a1_rouge.png";  document.getElementById("b52").src = "image/point/a1_rouge.png"; document.getElementById("b53").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 9 )  		{ document.getElementById("b52").src = "image/point/a1_rouge.png";  document.getElementById("b53").src = "image/point/a1_rouge.png"; document.getElementById("b54").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 10 )  		{ document.getElementById("b53").src = "image/point/a1_rouge.png";  document.getElementById("b54").src = "image/point/a1_rouge.png"; document.getElementById("b55").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 11 )  		{ document.getElementById("b54").src = "image/point/a1_rouge.png";  document.getElementById("b55").src = "image/point/a1_rouge.png"; document.getElementById("b56").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 12 )  		{ document.getElementById("b55").src = "image/point/a1_rouge.png";  document.getElementById("b56").src = "image/point/a1_rouge.png"; document.getElementById("b57").src = "image/point/a1_droite.png";}
if ( sens_its20 == 1 && progression_its20 == 13 )  		{ document.getElementById("b56").src = "image/point/a1_rouge.png";  document.getElementById("b57").src = "image/point/a1_rouge.png"; document.getElementById("b58").src = "image/point/a1_droite.png";}





// its21

if (sens_its21 == 1 && occupation_its21 ) 				{ progression_its21 = progression_its21 + 1; ligne = 21; }
if (sens_its21 == 1 && progression_its21 > 4 ) 			{ occupation_its21 = false; occupation_its22 = true;  
train2_its22[0] = train2_its21[0];
train2_its22[1] = train2_its21[1];
train2_its22[2] = train2_its21[2];
train2_its22[3] = train2_its21[3];
train2_its22[4] = train2_its21[4];
train2_its22[5] = train2_its21[5];
train2_its22[6] = train2_its21[6];
sens_its22 = sens_its21;
progression_its21 = 0;
its21 = 0; 
document.getElementById("z18").src = "image/feux/rouge_2.png";
}

if ( sens_its21 == 1 && progression_its21 == 1 )  		{ document.getElementById("b57").src = "image/point/a1_rouge.png";  document.getElementById("b58").src = "image/point/a1_rouge.png"; document.getElementById("b59").src = "image/point/a1_droite.png";}
if ( sens_its21 == 1 && progression_its21 == 2 )  		{ document.getElementById("b58").src = "image/point/a1_rouge.png";  document.getElementById("b59").src = "image/point/a1_rouge.png"; document.getElementById("b60").src = "image/point/a1_droite.png";}
if ( sens_its21 == 1 && progression_its21 == 3 )  		{ document.getElementById("b59").src = "image/point/a1_rouge.png";  document.getElementById("b60").src = "image/point/a1_rouge.png"; document.getElementById("b61").src = "image/point/a1_droite.png";}
if ( sens_its21 == 1 && progression_its21 == 4 )  		{ document.getElementById("b60").src = "image/point/a1_rouge.png";  document.getElementById("b61").src = "image/point/a1_rouge.png"; document.getElementById("b62").src = "image/point/a1_droite.png";}

// its22

if (sens_its22 == 1 && occupation_its22 ) 							{ progression_its22 = progression_its22 + 1; ligne = 22; }
if (sens_its22 == 1 && progression_its22 > 6 ) 						{ occupation_its22 = false;  
progression_its22 = 0;
its22 = 0; document.getElementById("z18").src = "image/feux/rouge_2.png";
}

if ( sens_its22 == 1 && progression_its22 == 1 )  		{ document.getElementById("b61").src = "image/point/a1_rouge.png";  document.getElementById("b62").src = "image/point/a1_rouge.png"; document.getElementById("b63").src = "image/point/a1_droite.png";}
if ( sens_its22 == 1 && progression_its22 == 2 )  		{ document.getElementById("b62").src = "image/point/a1_rouge.png";  document.getElementById("b63").src = "image/point/a1_rouge.png"; document.getElementById("b64").src = "image/point/a1_droite.png";}
if ( sens_its22 == 1 && progression_its22 == 3 )  		{ document.getElementById("b63").src = "image/point/a1_rouge.png";  document.getElementById("b64").src = "image/point/a1_rouge.png"; document.getElementById("b65").src = "image/point/a1_droite.png";}
if ( sens_its22 == 1 && progression_its22 == 4 )  		{ document.getElementById("b64").src = "image/point/a1_rouge.png";  document.getElementById("b65").src = "image/point/a1_rouge.png"; document.getElementById("b66").src = "image/point/a1_droite.png";}
if ( sens_its22 == 1 && progression_its22 == 5 )  		{ document.getElementById("b65").src = "image/point/a1_rouge.png";  document.getElementById("b66").src = "image/point/a1_rouge.png"; }
if ( sens_its22 == 1 && progression_its22 == 6 )  		{ document.getElementById("b66").src = "image/point/a1_droite.png";  }


// its131

if (sens_its131 == 1 && occupation_its131 ) 				{ progression_its131 = progression_its131 + 1; }
if (sens_its131 == 1 && progression_its131 > 2 ) 			{ occupation_its131 = false; occupation_its33 = true;  
train2_its33[0] = train2_its131[0];
train2_its33[1] = train2_its131[1];
train2_its33[2] = train2_its131[2];
train2_its33[3] = train2_its131[3];
train2_its33[4] = train2_its131[4];
train2_its33[5] = train2_its131[5];
train2_its33[6] = train2_its131[6];
sens_its33 = sens_its131;
progression_its131 = 0;
its131 = 0; 
}

if ( sens_its131 == 1 && progression_its131 == 1 )  		{ document.getElementById("c11").src = "image/point/a1_rouge.png";  document.getElementById("c12").src = "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_droite.png";}
if ( sens_its131 == 1 && progression_its131 == 2 )  		{ document.getElementById("c12").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_droite.png";}


// its33

if (sens_its33 == 1 && occupation_its33 ) 									{ progression_its33 = progression_its33 + 1; }
if (sens_its33 == 1 && aiguille81 == 0 && progression_its33 > 4 ) 			{ occupation_its33 = false; occupation_its34 = true;  
train2_its34[0] = train2_its33[0];
train2_its34[1] = train2_its33[1];
train2_its34[2] = train2_its33[2];
train2_its34[3] = train2_its33[3];
train2_its34[4] = train2_its33[4];
train2_its34[5] = train2_its33[5];
train2_its34[6] = train2_its33[6];
sens_its34 = sens_its33;
progression_its33 = 0;
its33 = 0;
}

if (sens_its33 == 1 && aiguille81 == 1 && aiguille93 == 0 && progression_its33 > 10 ) 			{ occupation_its33 = false; occupation_its55 = true;  
train2_its55[0] = train2_its33[0];
train2_its55[1] = train2_its33[1];
train2_its55[2] = train2_its33[2];
train2_its55[3] = train2_its33[3];
train2_its55[4] = train2_its33[4];
train2_its55[5] = train2_its33[5];
train2_its55[6] = train2_its33[6];
sens_its55= sens_its33;
progression_its33 = 0;
aiguille81 = 0;
its33 = 0; its81 = 0; its54 = 0; 
}

if (sens_its33 == 1 && aiguille81 == 1 && aiguille93 == 1 && progression_its33 > 19 ) 			{ occupation_its33 = false; occupation_its120 = true;  
train2_its120[0] = train2_its33[0];
train2_its120[1] = train2_its33[1];
train2_its120[2] = train2_its33[2];
train2_its120[3] = train2_its33[3];
train2_its120[4] = train2_its33[4];
train2_its120[5] = train2_its33[5];
train2_its120[6] = train2_its33[6];
sens_its120 = sens_its33;
progression_its33 = 0;
aiguille81 = 0;
aiguille93 = 0;
its33 = 0; its81 = 0; its54 = 0; its93 = 0; its73 = 0; 
}


if (sens_its33 == 1 && aiguille81 == 0 && occupation_its33 ) {
if ( sens_its33 == 1 && progression_its33 == 1 )  		{ document.getElementById("c13").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c15").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 2 )  		{ document.getElementById("c14").src = "image/point/a1_rouge.png";  document.getElementById("c15").src = "image/point/a1_rouge.png"; document.getElementById("c16").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 3 )  		{ document.getElementById("c15").src = "image/point/a1_rouge.png";  document.getElementById("c16").src = "image/point/a1_rouge.png"; document.getElementById("c17").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 4 )  		{ document.getElementById("c16").src = "image/point/a1_rouge.png";  document.getElementById("c17").src = "image/point/a1_rouge.png"; document.getElementById("c18").src = "image/point/a1_droite.png";}
}

if (sens_its33 == 1 && aiguille81 == 1 && aiguille93 == 0 && occupation_its33 ) {
if ( sens_its33 == 1 && progression_its33 == 1 )  		{ document.getElementById("c13").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c15").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 2 )  		{ document.getElementById("c14").src = "image/point/a1_rouge.png";  document.getElementById("c15").src = "image/point/a1_rouge.png"; document.getElementById("c16").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 3 )  		{ document.getElementById("c15").src = "image/point/a1_rouge.png";  document.getElementById("c16").src = "image/point/a1_rouge.png"; document.getElementById("c17").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 4 )  		{ document.getElementById("c16").src = "image/point/a1_rouge.png";  document.getElementById("c17").src = "image/point/a1_rouge.png"; document.getElementById("c18").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 5 )  		{ document.getElementById("c17").src = "image/point/a1_rouge.png";  document.getElementById("c18").src = "image/point/a1_rouge.png"; document.getElementById("f21").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 6 )  		{ document.getElementById("c18").src = "image/point/a1_rouge.png";  document.getElementById("f21").src = "image/point/a1_rouge.png"; document.getElementById("f22").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 7 )  		{ document.getElementById("f21").src = "image/point/a1_rouge.png";  document.getElementById("f22").src = "image/point/a1_rouge.png"; document.getElementById("d19").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 8 )  		{ document.getElementById("f22").src = "image/point/a1_rouge.png";  document.getElementById("d19").src = "image/point/a1_rouge.png"; document.getElementById("d20").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 9 )  		{ document.getElementById("d19").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_rouge.png"; document.getElementById("d21").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 10 )  		{ document.getElementById("d20").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_rouge.png"; document.getElementById("d22").src = "image/point/a1_droite.png";}
}
if (sens_its33 == 1 && aiguille81 == 1 && aiguille93 == 1 && occupation_its33 ) {
if ( sens_its33 == 1 && progression_its33 == 1 )  		{ document.getElementById("c13").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c15").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 2 )  		{ document.getElementById("c14").src = "image/point/a1_rouge.png";  document.getElementById("c15").src = "image/point/a1_rouge.png"; document.getElementById("c16").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 3 )  		{ document.getElementById("c15").src = "image/point/a1_rouge.png";  document.getElementById("c16").src = "image/point/a1_rouge.png"; document.getElementById("c17").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 4 )  		{ document.getElementById("c16").src = "image/point/a1_rouge.png";  document.getElementById("c17").src = "image/point/a1_rouge.png"; document.getElementById("c18").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 5 )  		{ document.getElementById("c17").src = "image/point/a1_rouge.png";  document.getElementById("c18").src = "image/point/a1_rouge.png"; document.getElementById("f21").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 6 )  		{ document.getElementById("c18").src = "image/point/a1_rouge.png";  document.getElementById("f21").src = "image/point/a1_rouge.png"; document.getElementById("f22").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 7 )  		{ document.getElementById("f21").src = "image/point/a1_rouge.png";  document.getElementById("f22").src = "image/point/a1_rouge.png"; document.getElementById("d19").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 8 )  		{ document.getElementById("f22").src = "image/point/a1_rouge.png";  document.getElementById("d19").src = "image/point/a1_rouge.png"; document.getElementById("d20").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 9 )  		{ document.getElementById("d19").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_rouge.png"; document.getElementById("d21").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 10 )  		{ document.getElementById("d20").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_rouge.png"; document.getElementById("d22").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 11)  		{ document.getElementById("d21").src = "image/point/a1_rouge.png";  document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("f30").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 12)  		{ document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("f30").src = "image/point/a1_rouge.png";  document.getElementById("f31").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 13)  		{ document.getElementById("f30").src = "image/point/a1_rouge.png";  document.getElementById("f31").src = "image/point/a1_rouge.png";  document.getElementById("e24").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 14)  		{ document.getElementById("f31").src = "image/point/a1_rouge.png";  document.getElementById("e24").src = "image/point/a1_rouge.png";  document.getElementById("e25").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 15)  		{ document.getElementById("e24").src = "image/point/a1_rouge.png";  document.getElementById("e25").src = "image/point/a1_rouge.png";  document.getElementById("e26").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 16)  		{ document.getElementById("e25").src = "image/point/a1_rouge.png";  document.getElementById("e26").src = "image/point/a1_rouge.png";  document.getElementById("e27").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 17)  		{ document.getElementById("e26").src = "image/point/a1_rouge.png";  document.getElementById("e27").src = "image/point/a1_rouge.png";  document.getElementById("e28").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 18)  		{ document.getElementById("e27").src = "image/point/a1_rouge.png";  document.getElementById("e28").src = "image/point/a1_rouge.png";  document.getElementById("e29").src = "image/point/a1_droite.png";}
if ( sens_its33 == 1 && progression_its33 == 19)  		{ document.getElementById("e28").src = "image/point/a1_rouge.png";  document.getElementById("e29").src = "image/point/a1_rouge.png";  document.getElementById("e30").src = "image/point/a1_droite.png";}
}

// its34

if (sens_its34 == 1 && occupation_its34 ) 				{ progression_its34 = progression_its34 + 1; }
if (sens_its34 == 1 && progression_its34 > 12 ) 			{ occupation_its34 = false; occupation_its118 = true;  
train2_its118[0] = train2_its34[0];
train2_its118[1] = train2_its34[1];
train2_its118[2] = train2_its34[2];
train2_its118[3] = train2_its34[3];
train2_its118[4] = train2_its34[4];
train2_its118[5] = train2_its34[5];
train2_its118[6] = train2_its34[6];
sens_its118 = sens_its34;
progression_its34 = 0;
its34 = 0; 
}

if ( sens_its34 == 1 && progression_its34 == 1 )  		{ document.getElementById("c17").src = "image/point/a1_rouge.png";  document.getElementById("c18").src = "image/point/a1_rouge.png"; document.getElementById("c19").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 2 )  		{ document.getElementById("c18").src = "image/point/a1_rouge.png";  document.getElementById("c19").src = "image/point/a1_rouge.png"; document.getElementById("c20").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 3 )  		{ document.getElementById("c19").src = "image/point/a1_rouge.png";  document.getElementById("c20").src = "image/point/a1_rouge.png"; document.getElementById("c21").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 4 )  		{ document.getElementById("c20").src = "image/point/a1_rouge.png";  document.getElementById("c21").src = "image/point/a1_rouge.png"; document.getElementById("c22").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 5 )  		{ document.getElementById("c21").src = "image/point/a1_rouge.png";  document.getElementById("c22").src = "image/point/a1_rouge.png"; document.getElementById("c23").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 6 )  		{ document.getElementById("c22").src = "image/point/a1_rouge.png";  document.getElementById("c23").src = "image/point/a1_rouge.png"; document.getElementById("c24").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 7 )  		{ document.getElementById("c23").src = "image/point/a1_rouge.png";  document.getElementById("c24").src = "image/point/a1_rouge.png"; document.getElementById("c25").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 8 )  		{ document.getElementById("c24").src = "image/point/a1_rouge.png";  document.getElementById("c25").src = "image/point/a1_rouge.png"; document.getElementById("c26").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 9 )  		{ document.getElementById("c25").src = "image/point/a1_rouge.png";  document.getElementById("c26").src = "image/point/a1_rouge.png"; document.getElementById("c27").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 10 )  		{ document.getElementById("c26").src = "image/point/a1_rouge.png";  document.getElementById("c27").src = "image/point/a1_rouge.png"; document.getElementById("c28").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 11 )  		{ document.getElementById("c27").src = "image/point/a1_rouge.png";  document.getElementById("c28").src = "image/point/a1_rouge.png"; document.getElementById("c29").src = "image/point/a1_droite.png";}
if ( sens_its34 == 1 && progression_its34 == 12 )  		{ document.getElementById("c28").src = "image/point/a1_rouge.png";  document.getElementById("c29").src = "image/point/a1_rouge.png"; document.getElementById("c30").src = "image/point/a1_droite.png";}

// its118

if (sens_its118 == 1 && occupation_its118 ) 										{ progression_its118 = progression_its118 + 1; }
if (sens_its118 == 1 && progression_its118 > 8 ) 									{ occupation_its118 = false; occupation_its37 = true;  
train2_its37[0] = train2_its118[0];
train2_its37[1] = train2_its118[1];
train2_its37[2] = train2_its118[2];
train2_its37[3] = train2_its118[3];
train2_its37[4] = train2_its118[4];
train2_its37[5] = train2_its118[5];
train2_its37[6] = train2_its118[6];
sens_its37 = sens_its118;
progression_its118 = 0;
its118 = 0; 
}

if ( sens_its118 == 1 && progression_its118 == 1 )  		{ document.getElementById("c29").src = "image/point/a1_rouge.png";  document.getElementById("c30").src = "image/point/a1_rouge.png"; document.getElementById("m1").src = "image/point/a1_droite.png";}
if ( sens_its118 == 1 && progression_its118 == 2 )  		{ document.getElementById("c30").src = "image/point/a1_rouge.png";  document.getElementById("m1").src = "image/point/a1_rouge.png"; document.getElementById("m2").src = "image/point/a1_droite.png";}
if ( sens_its118 == 1 && progression_its118 == 3 )  		{ document.getElementById("m1").src = "image/point/a1_rouge.png";  document.getElementById("m2").src = "image/point/a1_rouge.png"; document.getElementById("m3").src = "image/point/a1_droite.png";}
if ( sens_its118 == 1 && progression_its118 == 4 )  		{ document.getElementById("m2").src = "image/point/a1_rouge.png";  document.getElementById("m3").src = "image/point/a1_rouge.png"; document.getElementById("m4").src = "image/point/a1_droite.png";}
if ( sens_its118 == 1 && progression_its118 == 5 )  		{ document.getElementById("m3").src = "image/point/a1_rouge.png";  document.getElementById("m4").src = "image/point/a1_rouge.png"; document.getElementById("m5").src = "image/point/a1_droite.png";}
if ( sens_its118 == 1 && progression_its118 == 6 )  		{ document.getElementById("m4").src = "image/point/a1_rouge.png";  document.getElementById("m5").src = "image/point/a1_rouge.png"; document.getElementById("m6").src = "image/point/a1_droite.png";}
if ( sens_its118 == 1 && progression_its118 == 7 )  		{ document.getElementById("m5").src = "image/point/a1_rouge.png";  document.getElementById("m6").src = "image/point/a1_rouge.png"; document.getElementById("m7").src = "image/point/a1_droite.png";}
if ( sens_its118 == 1 && progression_its118 == 8 )  		{ document.getElementById("m6").src = "image/point/a1_rouge.png";  document.getElementById("m7").src = "image/point/a1_rouge.png"; document.getElementById("m8").src = "image/point/a1_droite.png";}

// its37

if (sens_its37 == 1 && occupation_its37 ) 									{ progression_its37 = progression_its37 + 1; }
if (sens_its37 == 1 && aiguille95 == 0 && progression_its37 > 5 ) 			{ occupation_its37 = false; occupation_its38 = true;  
train2_its38[0] = train2_its37[0];
train2_its38[1] = train2_its37[1];
train2_its38[2] = train2_its37[2];
train2_its38[3] = train2_its37[3];
train2_its38[4] = train2_its37[4];
train2_its38[5] = train2_its37[5];
train2_its38[6] = train2_its37[6];
sens_its38 = sens_its37;
progression_its37 = 0;
its37 = 0;
}

if ( sens_its37 == 1 && occupation_its37 && aiguille95 == 0 ) {
if ( sens_its37 == 1 && progression_its37 == 1 )  		{ document.getElementById("m7").src = "image/point/a1_rouge.png";  document.getElementById("m8").src = "image/point/a1_rouge.png"; document.getElementById("c32").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 2 )  		{ document.getElementById("m8").src = "image/point/a1_rouge.png";  document.getElementById("c32").src = "image/point/a1_rouge.png"; document.getElementById("c33").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 3 )  		{ document.getElementById("c32").src = "image/point/a1_rouge.png";  document.getElementById("c33").src = "image/point/a1_rouge.png"; document.getElementById("c34").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 4 )  		{ document.getElementById("c33").src = "image/point/a1_rouge.png";  document.getElementById("c34").src = "image/point/a1_rouge.png"; document.getElementById("c35").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 5 )  		{ document.getElementById("c34").src = "image/point/a1_rouge.png";  document.getElementById("c35").src = "image/point/a1_rouge.png"; document.getElementById("c36").src = "image/point/a1_droite.png";}
}

if (sens_its37 == 1 && aiguille95 == 1 && progression_its37 > 9 ) 			{ occupation_its37 = false; occupation_its19 = true;  
train2_its19[0] = train2_its37[0];
train2_its19[1] = train2_its37[1];
train2_its19[2] = train2_its37[2];
train2_its19[3] = train2_its37[3];
train2_its19[4] = train2_its37[4];
train2_its19[5] = train2_its37[5];
train2_its19[6] = train2_its37[6];
sens_its19 = sens_its37;
progression_its37 = 0;
aiguille95 = 0;
its37 = 0; its95 = 0; its121 = 0;
}

if ( sens_its37 == 1 && occupation_its37 && aiguille95 == 1 ) {
if ( sens_its37 == 1 && progression_its37 == 1 )  		{ document.getElementById("m7").src = "image/point/a1_rouge.png";  document.getElementById("m8").src = "image/point/a1_rouge.png"; document.getElementById("c32").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 2 )  		{ document.getElementById("m8").src = "image/point/a1_rouge.png";  document.getElementById("c32").src = "image/point/a1_rouge.png"; document.getElementById("c33").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 3 )  		{ document.getElementById("c32").src = "image/point/a1_rouge.png";  document.getElementById("c33").src = "image/point/a1_rouge.png"; document.getElementById("c34").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 4 )  		{ document.getElementById("c33").src = "image/point/a1_rouge.png";  document.getElementById("c34").src = "image/point/a1_rouge.png"; document.getElementById("c35").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 5 )  		{ document.getElementById("c34").src = "image/point/a1_rouge.png";  document.getElementById("c35").src = "image/point/a1_rouge.png"; document.getElementById("c36").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 6 )  		{ document.getElementById("c35").src = "image/point/a1_rouge.png";  document.getElementById("c36").src = "image/point/a1_rouge.png"; document.getElementById("f71").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 7 )  		{ document.getElementById("c36").src = "image/point/a1_rouge.png";  document.getElementById("f71").src = "image/point/a1_rouge.png"; document.getElementById("f70").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 8 )  		{ document.getElementById("f71").src = "image/point/a1_rouge.png";  document.getElementById("f70").src = "image/point/a1_rouge.png"; document.getElementById("b38").src = "image/point/a1_droite.png";}
if ( sens_its37 == 1 && progression_its37 == 9 )  		{ document.getElementById("f70").src = "image/point/a1_rouge.png";  document.getElementById("b38").src = "image/point/a1_rouge.png"; document.getElementById("b39").src = "image/point/a1_droite.png";}
}

// its38

if (sens_its38 == 1 && occupation_its38 ) 				{ progression_its38 = progression_its38 + 1; }
if (sens_its38 == 1 && progression_its38 > 10 ) 		{ occupation_its38 = false; occupation_its39 = true;  
train2_its39[0] = train2_its38[0];
train2_its39[1] = train2_its38[1];
train2_its39[2] = train2_its38[2];
train2_its39[3] = train2_its38[3];
train2_its39[4] = train2_its38[4];
train2_its39[5] = train2_its38[5];
train2_its39[6] = train2_its38[6];
sens_its39 = sens_its38;
progression_its38 = 0;
its38 = 0; 
}

if ( sens_its38 == 1 && progression_its38 == 1 )  		{ document.getElementById("c35").src = "image/point/a1_rouge.png";  document.getElementById("c36").src = "image/point/a1_rouge.png"; document.getElementById("c37").src = "image/point/a1_droite.png";}
if ( sens_its38 == 1 && progression_its38 == 2 )  		{ document.getElementById("c36").src = "image/point/a1_rouge.png";  document.getElementById("c37").src = "image/point/a1_rouge.png"; document.getElementById("c38").src = "image/point/a1_droite.png";}
if ( sens_its38 == 1 && progression_its38 == 3 )  		{ document.getElementById("c37").src = "image/point/a1_rouge.png";  document.getElementById("c38").src = "image/point/a1_rouge.png"; document.getElementById("c39").src = "image/point/a1_droite.png";}
if ( sens_its38 == 1 && progression_its38 == 4 )  		{ document.getElementById("c38").src = "image/point/a1_rouge.png";  document.getElementById("c39").src = "image/point/a1_rouge.png"; document.getElementById("c40").src = "image/point/a1_droite.png";}
if ( sens_its38 == 1 && progression_its38 == 5 )  		{ document.getElementById("c39").src = "image/point/a1_rouge.png";  document.getElementById("c40").src = "image/point/a1_rouge.png"; document.getElementById("c41").src = "image/point/a1_droite.png";}
if ( sens_its38 == 1 && progression_its38 == 6 )  		{ document.getElementById("c40").src = "image/point/a1_rouge.png";  document.getElementById("c41").src = "image/point/a1_rouge.png"; document.getElementById("c42").src = "image/point/a1_droite.png";}
if ( sens_its38 == 1 && progression_its38 == 7 )  		{ document.getElementById("c41").src = "image/point/a1_rouge.png";  document.getElementById("c42").src = "image/point/a1_rouge.png"; document.getElementById("c43").src = "image/point/a1_droite.png";}
if ( sens_its38 == 1 && progression_its38 == 8 )  		{ document.getElementById("c42").src = "image/point/a1_rouge.png";  document.getElementById("c43").src = "image/point/a1_rouge.png"; document.getElementById("c44").src = "image/point/a1_droite.png";}
if ( sens_its38 == 1 && progression_its38 == 9 )  		{ document.getElementById("c43").src = "image/point/a1_rouge.png";  document.getElementById("c44").src = "image/point/a1_rouge.png"; document.getElementById("c45").src = "image/point/a1_droite.png";}
if ( sens_its38 == 1 && progression_its38 == 10 )  		{ document.getElementById("c44").src = "image/point/a1_rouge.png";  document.getElementById("c45").src = "image/point/a1_rouge.png"; document.getElementById("c46").src = "image/point/a1_droite.png";}

// its39

if (sens_its39 == 1 && occupation_its39 ) 				{ progression_its39 = progression_its39 + 1; }
if (sens_its39 == 1 && progression_its39 > 2 ) 			{ occupation_its39 = false; occupation_its40 = true;  
train2_its40[0] = train2_its39[0];
train2_its40[1] = train2_its39[1];
train2_its40[2] = train2_its39[2];
train2_its40[3] = train2_its39[3];
train2_its40[4] = train2_its39[4];
train2_its40[5] = train2_its39[5];
train2_its40[6] = train2_its39[6];
sens_its40 = sens_its39;
progression_its39 = 0;
its39 = 0; 
}

if ( sens_its39 == 1 && progression_its39 == 1 )  		{ document.getElementById("c45").src = "image/point/a1_rouge.png";  document.getElementById("c46").src = "image/point/a1_rouge.png"; document.getElementById("c47").src = "image/point/a1_droite.png";}
if ( sens_its39 == 1 && progression_its39 == 2 )  		{ document.getElementById("c46").src = "image/point/a1_rouge.png";  document.getElementById("c47").src = "image/point/a1_rouge.png"; document.getElementById("c48").src = "image/point/a1_droite.png";}

// its40

if (sens_its40 == 1 && occupation_its40 ) 				{ progression_its40 = progression_its40 + 1; }
if (sens_its40 == 1 && progression_its40 > 7 ) 			{ occupation_its40 = false; occupation_its41 = true;  
train2_its41[0] = train2_its40[0];
train2_its41[1] = train2_its40[1];
train2_its41[2] = train2_its40[2];
train2_its41[3] = train2_its40[3];
train2_its41[4] = train2_its40[4];
train2_its41[5] = train2_its40[5];
train2_its41[6] = train2_its40[6];
sens_its41 = sens_its40;
progression_its40 = 0;
its40 = 0; 
}

if ( sens_its40 == 1 && progression_its40 == 1 )  		{ document.getElementById("c47").src = "image/point/a1_rouge.png";  document.getElementById("c48").src = "image/point/a1_rouge.png"; document.getElementById("c49").src = "image/point/a1_droite.png";}
if ( sens_its40 == 1 && progression_its40 == 2 )  		{ document.getElementById("c48").src = "image/point/a1_rouge.png";  document.getElementById("c49").src = "image/point/a1_rouge.png"; document.getElementById("c50").src = "image/point/a1_droite.png";}
if ( sens_its40 == 1 && progression_its40 == 3 )  		{ document.getElementById("c49").src = "image/point/a1_rouge.png";  document.getElementById("c50").src = "image/point/a1_rouge.png"; document.getElementById("c51").src = "image/point/a1_droite.png";}
if ( sens_its40 == 1 && progression_its40 == 4 )  		{ document.getElementById("c50").src = "image/point/a1_rouge.png";  document.getElementById("c51").src = "image/point/a1_rouge.png"; document.getElementById("c52").src = "image/point/a1_droite.png";}
if ( sens_its40 == 1 && progression_its40 == 5 )  		{ document.getElementById("c51").src = "image/point/a1_rouge.png";  document.getElementById("c52").src = "image/point/a1_rouge.png"; document.getElementById("c53").src = "image/point/a1_droite.png";}
if ( sens_its40 == 1 && progression_its40 == 6 )  		{ document.getElementById("c52").src = "image/point/a1_rouge.png";  document.getElementById("c53").src = "image/point/a1_rouge.png"; document.getElementById("c54").src = "image/point/a1_droite.png";}
if ( sens_its40 == 1 && progression_its40 == 7 )  		{ document.getElementById("c53").src = "image/point/a1_rouge.png";  document.getElementById("c54").src = "image/point/a1_rouge.png"; document.getElementById("c55").src = "image/point/a1_droite.png";}

// its41

if (sens_its41 == 1 && occupation_its41 ) 							{ progression_its41 = progression_its41 + 1; }
if (sens_its41 == 1 && aiguille91 == 0 && progression_its41 > 2 ) 	{ occupation_its41 = false; occupation_its42 = true;
train2_its42[0] = train2_its41[0];
train2_its42[1] = train2_its41[1];
train2_its42[2] = train2_its41[2];
train2_its42[3] = train2_its41[3];
train2_its42[4] = train2_its41[4];
train2_its42[5] = train2_its41[5];
train2_its42[6] = train2_its41[6];
sens_its42 = sens_its41;
progression_its41 = 0;
its41 = 0; 
}

if (sens_its41 == 1 && aiguille91 == 0 && occupation_its41 )  {
if ( sens_its41 == 1 && progression_its41 == 1 )  		{ document.getElementById("c54").src = "image/point/a1_rouge.png";  document.getElementById("c55").src = "image/point/a1_rouge.png"; document.getElementById("c56").src = "image/point/a1_droite.png";}
if ( sens_its41 == 1 && progression_its41 == 2 )  		{ document.getElementById("c55").src = "image/point/a1_rouge.png";  document.getElementById("c56").src = "image/point/a1_rouge.png"; document.getElementById("c57").src = "image/point/a1_droite.png";}
}

if (sens_its41 == 1 && aiguille91 == 1 && progression_its41 > 6 ) 	{ occupation_its41 = false; occupation_its22 = true;
train2_its22[0] = train2_its41[0];
train2_its22[1] = train2_its41[1];
train2_its22[2] = train2_its41[2];
train2_its22[3] = train2_its41[3];
train2_its22[4] = train2_its41[4];
train2_its22[5] = train2_its41[5];
train2_its22[6] = train2_its41[6];
sens_its22 = sens_its41;
progression_its41 = 0;
aiguille91 = 0;
its41 = 0; its91 = 0; its21 = 0;
}

if (sens_its41 == 1 && aiguille91 == 1 && occupation_its41 )  {
if ( sens_its41 == 1 && progression_its41 == 1 )  		{ document.getElementById("c56").src = "image/point/a1_rouge.png";  document.getElementById("c57").src = "image/point/a1_rouge.png"; document.getElementById("f24").src = "image/point/a1_droite.png";}
if ( sens_its41 == 1 && progression_its41 == 2 )  		{ document.getElementById("c57").src = "image/point/a1_rouge.png";  document.getElementById("f24").src = "image/point/a1_rouge.png"; document.getElementById("f23").src = "image/point/a1_droite.png";}
if ( sens_its41 == 1 && progression_its41 == 3 )  		{ document.getElementById("f24").src = "image/point/a1_rouge.png";  document.getElementById("f23").src = "image/point/a1_rouge.png"; document.getElementById("b59").src = "image/point/a1_droite.png";}
if ( sens_its41 == 1 && progression_its41 == 4 )  		{ document.getElementById("f23").src = "image/point/a1_rouge.png";  document.getElementById("b59").src = "image/point/a1_rouge.png"; document.getElementById("b60").src = "image/point/a1_droite.png";}
if ( sens_its41 == 1 && progression_its41 == 5 )  		{ document.getElementById("b59").src = "image/point/a1_rouge.png";  document.getElementById("b60").src = "image/point/a1_rouge.png"; document.getElementById("b61").src = "image/point/a1_droite.png";}
if ( sens_its41 == 1 && progression_its41 == 6 )  		{  document.getElementById("b60").src = "image/point/a1_rouge.png";  document.getElementById("b61").src = "image/point/a1_rouge.png"; document.getElementById("b62").src = "image/point/a1_droite.png";}
}


// its42

if (sens_its42 == 1 && occupation_its42 ) 				{ progression_its42 = progression_its42 + 1; }
if (sens_its42 == 1 && progression_its42 > 5 ) 			{ occupation_its42 = false; occupation_its43 = true;
train2_its43[0] = train2_its42[0];
train2_its43[1] = train2_its42[1];
train2_its43[2] = train2_its42[2];
train2_its43[3] = train2_its42[3];
train2_its43[4] = train2_its42[4];
train2_its43[5] = train2_its42[5];
train2_its43[6] = train2_its42[6];
sens_its43 = sens_its42;
progression_its42 = 0;
its42 = 0; 
}


if ( sens_its42 == 1 && progression_its42 == 1 )  		{ document.getElementById("c56").src = "image/point/a1_rouge.png";  document.getElementById("c57").src = "image/point/a1_rouge.png"; document.getElementById("c58").src = "image/point/a1_droite.png";}
if ( sens_its42 == 1 && progression_its42 == 2 )  		{ document.getElementById("c57").src = "image/point/a1_rouge.png";  document.getElementById("c58").src = "image/point/a1_rouge.png"; document.getElementById("c59").src = "image/point/a1_droite.png";}
if ( sens_its42 == 1 && progression_its42 == 3 )  		{ document.getElementById("c58").src = "image/point/a1_rouge.png";  document.getElementById("c59").src = "image/point/a1_rouge.png"; document.getElementById("c60").src = "image/point/a1_droite.png";}
if ( sens_its42 == 1 && progression_its42 == 4 )  		{ document.getElementById("c59").src = "image/point/a1_rouge.png";  document.getElementById("c60").src = "image/point/a1_rouge.png"; document.getElementById("c61").src = "image/point/a1_droite.png";}
if ( sens_its42 == 1 && progression_its42 == 5 )  		{ document.getElementById("c60").src = "image/point/a1_rouge.png";  document.getElementById("c61").src = "image/point/a1_rouge.png"; document.getElementById("c62").src = "image/point/a1_droite.png";}



// its43

if (sens_its43 == 1 && occupation_its43 ) 				{ progression_its43 = progression_its43 + 1; }
if (sens_its43 == 1 && progression_its43 > 6 ) 			{ occupation_its43 = false; 
train2_its43[0] = train2_its43[0];
train2_its43[1] = train2_its43[1];
train2_its43[2] = train2_its43[2];
train2_its43[3] = train2_its43[3];
train2_its43[4] = train2_its43[4];
train2_its43[5] = train2_its43[5];
train2_its43[6] = train2_its43[6];
sens_its43 = sens_its43;
progression_its43 = 0;
its43 = 0; 
}

if ( sens_its43 == 1 && progression_its43 == 1 )  		{ document.getElementById("c61").src = "image/point/a1_rouge.png";  document.getElementById("c62").src = "image/point/a1_rouge.png"; document.getElementById("c63").src = "image/point/a1_droite.png";}
if ( sens_its43 == 1 && progression_its43 == 2 )  		{ document.getElementById("c62").src = "image/point/a1_rouge.png";  document.getElementById("c63").src = "image/point/a1_rouge.png"; document.getElementById("c64").src = "image/point/a1_droite.png";}
if ( sens_its43 == 1 && progression_its43 == 3 )  		{ document.getElementById("c63").src = "image/point/a1_rouge.png";  document.getElementById("c64").src = "image/point/a1_rouge.png"; document.getElementById("c65").src = "image/point/a1_droite.png";}
if ( sens_its43 == 1 && progression_its43 == 4 )  		{ document.getElementById("c64").src = "image/point/a1_rouge.png";  document.getElementById("c65").src = "image/point/a1_rouge.png"; document.getElementById("c66").src = "image/point/a1_droite.png";}
if ( sens_its43 == 1 && progression_its43 == 5 )  		{ document.getElementById("c65").src = "image/point/a1_rouge.png";  document.getElementById("c66").src = "image/point/a1_rouge.png"; document.getElementById("c66").src = "image/point/a1_droite.png";}
if ( sens_its43 == 1 && progression_its43 == 6 )  		{ document.getElementById("c66").src = "image/point/a1_rouge.png";  document.getElementById("c66").src = "image/point/a1_rouge.png"; document.getElementById("c66").src = "image/point/a1_droite.png";}
if ( sens_its43 == 1 && progression_its43 == 5 )		{ document.getElementById("z13").src = "image/feux/rouge_2.png";}
// its50

if (sens_its50 == 1 && occupation_its50 ) 			{ progression_its50 = progression_its50 + 1; ligne = 50; }
if (sens_its50 == 1 && its51 == 0 && progression_its50 > 4 ) 		{ progression_its50 = 4; }
if (sens_its50 == 1 && progression_its50 > 4 ) 		{ occupation_its50 = false; occupation_its51 = true;  
train2_its51[0] = train2_its50[0];
train2_its51[1] = train2_its50[1];
train2_its51[2] = train2_its50[2];
train2_its51[3] = train2_its50[3];
train2_its51[4] = train2_its50[4];
train2_its51[5] = train2_its50[5];
train2_its51[6] = train2_its50[6];
sens_its51 = sens_its50;
progression_its50 = 0;
}
							
if ( sens_its50 == 1 && progression_its50 == 1 ) { document.getElementById("d1").src = "image/point/a1_rouge.png"; }
if ( sens_its50 == 1 && progression_its50 == 2 ) { document.getElementById("d1").src = "image/point/a1_rouge.png"; document.getElementById("d2").src = "image/point/a1_rouge.png";}
if ( sens_its50 == 1 && progression_its50 == 3 ) { document.getElementById("d1").src = "image/point/a1_rouge.png"; document.getElementById("d2").src = "image/point/a1_rouge.png"; document.getElementById("d3").src = "image/point/a1_droite.png";}
if ( sens_its50 == 1 && progression_its50 == 4 ) { document.getElementById("d2").src = "image/point/a1_rouge.png"; document.getElementById("d3").src = "image/point/a1_rouge.png"; document.getElementById("d4").src = "image/point/a1_droite.png";}

// its51
			
if (sens_its51 == 1 && occupation_its51 ) 							{ progression_its51 = progression_its51 + 1; ligne = 51; }
if (sens_its51 == 1 && progression_its51 > 5 ) 						{ occupation_its51 = false; occupation_its52 = true;  
train2_its52[0] = train2_its51[0];
train2_its52[1] = train2_its51[1];
train2_its52[2] = train2_its51[2];
train2_its52[3] = train2_its51[3];
train2_its52[4] = train2_its51[4];
train2_its52[5] = train2_its51[5];
train2_its52[6] = train2_its51[6];
sens_its52 =     sens_its51;
progression_its51 = 0;
its50 = 0; its51 = 0;
}
			
if ( sens_its51 == 1 && progression_its51 == 1 )  		{ document.getElementById("d3").src = "image/point/a1_rouge.png";  document.getElementById("d4").src = "image/point/a1_rouge.png"; document.getElementById("d5").src = "image/point/a1_droite.png";}
if ( sens_its51 == 1 && progression_its51 == 2 )  		{ document.getElementById("d4").src = "image/point/a1_rouge.png";  document.getElementById("d5").src = "image/point/a1_rouge.png"; document.getElementById("d6").src = "image/point/a1_droite.png";}
if ( sens_its51 == 1 && progression_its51 == 3 )  		{ document.getElementById("d5").src = "image/point/a1_rouge.png";  document.getElementById("d6").src = "image/point/a1_rouge.png"; document.getElementById("d7").src = "image/point/a1_droite.png";}
if ( sens_its51 == 1 && progression_its51 == 4 )  		{ document.getElementById("d6").src = "image/point/a1_rouge.png";  document.getElementById("d7").src = "image/point/a1_rouge.png"; document.getElementById("d8").src = "image/point/a1_droite.png";}
if ( sens_its51 == 1 && progression_its51 == 5 )  		{ document.getElementById("d7").src = "image/point/a1_rouge.png";  document.getElementById("d8").src = "image/point/a1_rouge.png"; document.getElementById("d9").src = "image/point/a1_droite.png";}


// its52

if (sens_its52 == 1 && occupation_its52) 								{ progression_its52 = progression_its52 + 1; }
if (sens_its52 == 1 && aiguille78 == 0 && progression_its52 > 2 ) 		{ occupation_its52 = false; occupation_its53 = true;   
train2_its53[0] = train2_its52[0];
train2_its53[1] = train2_its52[1];
train2_its53[2] = train2_its52[2];
train2_its53[3] = train2_its52[3];
train2_its53[4] = train2_its52[4];
train2_its53[5] = train2_its52[5];
train2_its53[6] = train2_its52[6];
sens_its53 =      sens_its52;
progression_its52 = 0;
its52 = 0; 
}

if (sens_its52 == 1 && aiguille78 == 1 && aiguille80 == 0 && progression_its52 > 6 ) 		{ occupation_its52 = false; occupation_its33 = true;   
train2_its33[0] = train2_its52[0];
train2_its33[1] = train2_its52[1];
train2_its33[2] = train2_its52[2];
train2_its33[3] = train2_its52[3];
train2_its33[4] = train2_its52[4];
train2_its33[5] = train2_its52[5];
train2_its33[6] = train2_its52[6];
sens_its33 =      sens_its52;
progression_its52 = 0;
aiguille78 = 0; 
its52 = 0; its78 = 0; its131 = 0; 
}

if (sens_its52 == 1 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 0 && progression_its52 > 12 ) 		{ occupation_its52 = false; occupation_its111 = true;   
train2_its111[0] = train2_its52[0];
train2_its111[1] = train2_its52[1];
train2_its111[2] = train2_its52[2];
train2_its111[3] = train2_its52[3];
train2_its111[4] = train2_its52[4];
train2_its111[5] = train2_its52[5];
train2_its111[6] = train2_its52[6];
sens_its111 =      sens_its52;
progression_its52 = 0;
aiguille78 = 0; 
aiguille80 = 0; 
its52 = 0; its78 = 0; its131 = 0; its80 = 0; its16 = 0; 
}

if (sens_its52 == 1 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 0 && progression_its52 > 17 ) 		{ occupation_its52 = false; occupation_its102 = true;   
train2_its102[0] = train2_its52[0];
train2_its102[1] = train2_its52[1];
train2_its102[2] = train2_its52[2];
train2_its102[3] = train2_its52[3];
train2_its102[4] = train2_its52[4];
train2_its102[5] = train2_its52[5];
train2_its102[6] = train2_its52[6];
sens_its102 =      sens_its52;
progression_its52 = 0;
aiguille78 = 0; 
aiguille80 = 0; 
aiguille82 = 0; 
its52 = 0; its78 = 0; its131 = 0; its80 = 0; its16 = 0; its82 = 0; its101 = 0; 
}

if (sens_its52 == 1 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 1 && progression_its52 > 25 ) 		{ occupation_its52 = false; occupation_its8 = true;   
train2_its8[0] = train2_its52[0];
train2_its8[1] = train2_its52[1];
train2_its8[2] = train2_its52[2];
train2_its8[3] = train2_its52[3];
train2_its8[4] = train2_its52[4];
train2_its8[5] = train2_its52[5];
train2_its8[6] = train2_its52[6];
sens_its8 =      sens_its52;
progression_its52 = 0;
aiguille78 = 0; 
aiguille80 = 0; 
aiguille82 = 0; 
aiguille97 = 0; 
its52 = 0; its78 = 0; its131 = 0; its80 = 0; its16 = 0; its82 = 0; its101 = 0; its97 = 0; its2 = 0; its23 = 0; 
}


if (sens_its52 == 1 && aiguille78 == 0 && occupation_its52 )  {
if ( sens_its52 == 1 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rouge.png";  document.getElementById("d9").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_droite.png";}
}

if (sens_its52 == 1 && aiguille78 == 1 && aiguille80 == 0 && occupation_its52 )  {
if ( sens_its52 == 1 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rouge.png";  document.getElementById("d9").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 3 ) 		{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("f14").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 4 ) 		{ document.getElementById("d11").src =  "image/point/a1_rouge.png"; document.getElementById("f14").src = "image/point/a1_rouge.png"; document.getElementById("f13").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 5 ) 		{ document.getElementById("f14").src = "image/point/a1_rouge.png";  document.getElementById("f13").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 6 ) 		{ document.getElementById("f13").src =  "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_rouge.png";}
}

if ( sens_its52 == 1 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 0 && occupation_its52 )  {
if ( sens_its52 == 1 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rouge.png";  document.getElementById("d9").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 3 ) 		{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("f14").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 4 ) 		{ document.getElementById("d11").src =  "image/point/a1_rouge.png"; document.getElementById("f14").src = "image/point/a1_rouge.png"; document.getElementById("f13").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 5 ) 		{ document.getElementById("f14").src = "image/point/a1_rouge.png";  document.getElementById("f13").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 6 ) 		{ document.getElementById("f13").src =  "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 7 ) 		{ document.getElementById("c13").src =  "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 8 ) 		{ document.getElementById("c14").src =  "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 9 ) 		{ document.getElementById("f12").src =  "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 10 ) 		{ document.getElementById("f11").src =  "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 11 ) 		{ document.getElementById("b16").src =  "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 12 ) 		{ document.getElementById("b17").src =  "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 13 ) 		{ document.getElementById("b18").src =  "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("f2").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 14 ) 		{ document.getElementById("b19").src =  "image/point/a1_rouge.png"; document.getElementById("f2").src = "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 15 ) 		{ document.getElementById("f2").src =  "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 16 ) 		{ document.getElementById("f1").src =  "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 17 ) 		{ document.getElementById("x21").src =  "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_droite.png";}
}

if ( sens_its52 == 1 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 0 && occupation_its52 )  {
if ( sens_its52 == 1 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rouge.png";  document.getElementById("d9").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 3 ) 		{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("f14").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 4 ) 		{ document.getElementById("d11").src =  "image/point/a1_rouge.png"; document.getElementById("f14").src = "image/point/a1_rouge.png"; document.getElementById("f13").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 5 ) 		{ document.getElementById("f14").src = "image/point/a1_rouge.png";  document.getElementById("f13").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 6 ) 		{ document.getElementById("f13").src =  "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 7 ) 		{ document.getElementById("c13").src =  "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 8 ) 		{ document.getElementById("c14").src =  "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 9 ) 		{ document.getElementById("f12").src =  "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 10 ) 		{ document.getElementById("f11").src =  "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 11 ) 		{ document.getElementById("b16").src =  "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 12 ) 		{ document.getElementById("b17").src =  "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_droite.png";}
}

if ( sens_its52 == 1 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 1 && occupation_its52 )  {
	
if ( sens_its52 == 1 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rouge.png";  document.getElementById("d9").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 3 ) 		{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("f14").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 4 ) 		{ document.getElementById("d11").src =  "image/point/a1_rouge.png"; document.getElementById("f14").src = "image/point/a1_rouge.png"; document.getElementById("f13").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 5 ) 		{ document.getElementById("f14").src = "image/point/a1_rouge.png";  document.getElementById("f13").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 6 ) 		{ document.getElementById("f13").src =  "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 7 ) 		{ document.getElementById("c13").src =  "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 8 ) 		{ document.getElementById("c14").src =  "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 9 ) 		{ document.getElementById("f12").src =  "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 10 ) 		{ document.getElementById("f11").src =  "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 11 ) 		{ document.getElementById("b16").src =  "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 12 ) 		{ document.getElementById("b17").src =  "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 13 ) 		{ document.getElementById("b18").src =  "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("f2").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 14 ) 		{ document.getElementById("b19").src =  "image/point/a1_rouge.png"; document.getElementById("f2").src = "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 15 ) 		{ document.getElementById("f2").src =  "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 16 ) 		{ document.getElementById("f1").src =  "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 17 ) 		{ document.getElementById("x21").src =  "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 18 ) 		{ document.getElementById("x22").src =  "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_rouge.png"; document.getElementById("f81").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 19 ) 		{ document.getElementById("x23").src =  "image/point/a1_rouge.png"; document.getElementById("f81").src = "image/point/a1_rouge.png"; document.getElementById("f80").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 20 ) 		{ document.getElementById("f81").src =  "image/point/a1_rouge.png"; document.getElementById("f80").src = "image/point/a1_rouge.png"; document.getElementById("a26").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 21 ) 		{ document.getElementById("f80").src =  "image/point/a1_rouge.png"; document.getElementById("a26").src = "image/point/a1_rouge.png"; document.getElementById("a27").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 22 ) 		{ document.getElementById("a26").src =  "image/point/a1_rouge.png"; document.getElementById("a27").src = "image/point/a1_rouge.png"; document.getElementById("a28").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 23 ) 		{ document.getElementById("a27").src =  "image/point/a1_rouge.png"; document.getElementById("a28").src = "image/point/a1_rouge.png"; document.getElementById("a29").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 24 ) 		{ document.getElementById("a28").src =  "image/point/a1_rouge.png"; document.getElementById("a29").src = "image/point/a1_rouge.png"; document.getElementById("a30").src = "image/point/a1_droite.png";}
if ( sens_its52 == 1 && progression_its52 == 25 ) 		{ document.getElementById("a29").src =  "image/point/a1_rouge.png"; document.getElementById("a30").src = "image/point/a1_rouge.png"; document.getElementById("a31").src = "image/point/a1_droite.png";}
}



// its53

if (sens_its53 == 1 && occupation_its53) 			{ progression_its53 = progression_its53 + 1; ligne = 53;}
if (sens_its53 == 1 && progression_its53 > 8 ) 		{ occupation_its53 = false; occupation_its54 = true;   
train2_its54[0] = train2_its53[0];
train2_its54[1] = train2_its53[1];
train2_its54[2] = train2_its53[2];
train2_its54[3] = train2_its53[3];
train2_its54[4] = train2_its53[4];
train2_its54[5] = train2_its53[5];
train2_its54[6] = train2_its53[6];
sens_its54 =     sens_its53;
progression_its53 = 0;
its53  = 0; 
}

if ( sens_its53 == 1 && progression_its53 == 1 ) 		{ document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_rouge.png"; document.getElementById("d12").src = "image/point/a1_droite.png";}
if ( sens_its53 == 1 && progression_its53 == 2 ) 		{ document.getElementById("d11").src = "image/point/a1_rouge.png"; document.getElementById("d12").src = "image/point/a1_rouge.png"; document.getElementById("d13").src = "image/point/a1_droite.png";}			
if ( sens_its53 == 1 && progression_its53 == 3 )  		{ document.getElementById("d12").src = "image/point/a1_rouge.png";  document.getElementById("d13").src = "image/point/a1_rouge.png";  document.getElementById("d14").src = "image/point/a1_droite.png";}
if ( sens_its53 == 1 && progression_its53 == 4 )  		{ document.getElementById("d13").src = "image/point/a1_rouge.png";  document.getElementById("d14").src = "image/point/a1_rouge.png";  document.getElementById("d15").src = "image/point/a1_droite.png";}
if ( sens_its53 == 1 && progression_its53 == 5 ) 		{ document.getElementById("d14").src = "image/point/a1_rouge.png";  document.getElementById("d15").src = "image/point/a1_rouge.png";  document.getElementById("d16").src = "image/point/a1_droite.png";}
if ( sens_its53 == 1 && progression_its53 == 6 ) 		{ document.getElementById("d15").src = "image/point/a1_rouge.png";  document.getElementById("d16").src = "image/point/a1_rouge.png";  document.getElementById("d17").src = "image/point/a1_droite.png";}
if ( sens_its53 == 1 && progression_its53 == 7 ) 		{ document.getElementById("d16").src = "image/point/a1_rouge.png";  document.getElementById("d17").src = "image/point/a1_rouge.png";  document.getElementById("d18").src = "image/point/a1_droite.png";}
if ( sens_its53 == 1 && progression_its53 == 8 ) 		{ document.getElementById("d17").src = "image/point/a1_rouge.png";  document.getElementById("d18").src = "image/point/a1_rouge.png";  document.getElementById("d19").src = "image/point/a1_droite.png";}

// its54

if (sens_its54 == 1 && occupation_its54) 								{ progression_its54 = progression_its54 + 1; }
if (sens_its54 == 1 && aiguille93 == 0 && progression_its54 > 4 ) 		{ occupation_its54 = false; occupation_its55 = true;  
train2_its55[0] = train2_its54[0];
train2_its55[1] = train2_its54[1];
train2_its55[2] = train2_its54[2];
train2_its55[3] = train2_its54[3];
train2_its55[4] = train2_its54[4];
train2_its55[5] = train2_its54[5];
train2_its55[6] = train2_its54[6];
sens_its55 =     sens_its54;
progression_its54 = 0;
its54 = 0; 
}


if (sens_its54 == 1 && aiguille93 == 1 && progression_its54 > 12 ) 		{ occupation_its54 = false; occupation_its120 = true;  
train2_its120[0] = train2_its54[0];
train2_its120[1] = train2_its54[1];
train2_its120[2] = train2_its54[2];
train2_its120[3] = train2_its54[3];
train2_its120[4] = train2_its54[4];
train2_its120[5] = train2_its54[5];
train2_its120[6] = train2_its54[6];
sens_its120 =     sens_its54;
progression_its54 = 0;
aiguille93 = 0;
its54 = 0; its93 = 0; its73  = 0; 
}

if (sens_its54 == 1 && aiguille93 == 0 && occupation_its54) {
if ( sens_its54 == 1 && progression_its54 == 1) 		{ document.getElementById("d18").src =  "image/point/a1_rouge.png"; document.getElementById("d19").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 2) 		{ document.getElementById("d19").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 3) 		{ document.getElementById("d20").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_rouge.png";  document.getElementById("d22").src = "image/point/a1_droite.png";}			
if ( sens_its54 == 1 && progression_its54 == 4)  		{ document.getElementById("d21").src = "image/point/a1_rouge.png";  document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("d23").src = "image/point/a1_droite.png";}
}

if (sens_its54 == 1 && aiguille93 == 1 && occupation_its54) {
if ( sens_its54 == 1 && progression_its54 == 1) 		{ document.getElementById("d18").src =  "image/point/a1_rouge.png"; document.getElementById("d19").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 2) 		{ document.getElementById("d19").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 3) 		{ document.getElementById("d20").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_rouge.png";  document.getElementById("d22").src = "image/point/a1_droite.png";}	
if ( sens_its54 == 1 && progression_its54 == 4)  		{ document.getElementById("d21").src = "image/point/a1_rouge.png";  document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("f30").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 5)  		{ document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("f30").src = "image/point/a1_rouge.png";  document.getElementById("f31").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 6)  		{ document.getElementById("f30").src = "image/point/a1_rouge.png";  document.getElementById("f31").src = "image/point/a1_rouge.png";  document.getElementById("e24").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 7)  		{ document.getElementById("f31").src = "image/point/a1_rouge.png";  document.getElementById("e24").src = "image/point/a1_rouge.png";  document.getElementById("e25").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 8)  		{ document.getElementById("e24").src = "image/point/a1_rouge.png";  document.getElementById("e25").src = "image/point/a1_rouge.png";  document.getElementById("e26").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 9)  		{ document.getElementById("e25").src = "image/point/a1_rouge.png";  document.getElementById("e26").src = "image/point/a1_rouge.png";  document.getElementById("e27").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 10)  		{ document.getElementById("e26").src = "image/point/a1_rouge.png";  document.getElementById("e27").src = "image/point/a1_rouge.png";  document.getElementById("e28").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 11)  		{ document.getElementById("e27").src = "image/point/a1_rouge.png";  document.getElementById("e28").src = "image/point/a1_rouge.png";  document.getElementById("e29").src = "image/point/a1_droite.png";}
if ( sens_its54 == 1 && progression_its54 == 12)  		{ document.getElementById("e28").src = "image/point/a1_rouge.png";  document.getElementById("e29").src = "image/point/a1_rouge.png";  document.getElementById("e30").src = "image/point/a1_droite.png";}
}

// its120

if (sens_its120 == 1 && occupation_its120) 								{ progression_its120 = progression_its120 + 1; }
if (sens_its120 == 1 && progression_its120 > 8 ) 						{ occupation_its120 = false; occupation_its74 = true;  
train2_its74[0] = train2_its120[0];
train2_its74[1] = train2_its120[1];
train2_its74[2] = train2_its120[2];
train2_its74[3] = train2_its120[3];
train2_its74[4] = train2_its120[4];
train2_its74[5] = train2_its120[5];
train2_its74[6] = train2_its120[6];
sens_its74 =     sens_its120;
progression_its120 = 0;
its120 = 0; 
}

if ( sens_its120 == 1 && progression_its120 == 1 )  			{ document.getElementById("e29").src = "image/point/a1_rouge.png";  document.getElementById("e30").src = "image/point/a1_rouge.png"; document.getElementById("k1").src = "image/point/a1_droite.png"; }
if ( sens_its120 == 1 && progression_its120 == 2 )  			{ document.getElementById("e30").src = "image/point/a1_rouge.png";  document.getElementById("k1").src = "image/point/a1_rouge.png"; document.getElementById("k2").src = "image/point/a1_droite.png"; }
if ( sens_its120 == 1 && progression_its120 == 3 )  			{ document.getElementById("k1").src = "image/point/a1_rouge.png";  document.getElementById("k2").src = "image/point/a1_rouge.png"; document.getElementById("k3").src = "image/point/a1_droite.png";  }
if ( sens_its120 == 1 && progression_its120 == 4 )  			{ document.getElementById("k2").src = "image/point/a1_rouge.png";  document.getElementById("k3").src = "image/point/a1_rouge.png"; document.getElementById("k4").src = "image/point/a1_droite.png"; }
if ( sens_its120 == 1 && progression_its120 == 5 )  			{ document.getElementById("k3").src = "image/point/a1_rouge.png";  document.getElementById("k4").src = "image/point/a1_rouge.png"; document.getElementById("k5").src = "image/point/a1_droite.png"; }
if ( sens_its120 == 1 && progression_its120 == 6 )  			{ document.getElementById("k4").src = "image/point/a1_rouge.png";  document.getElementById("k5").src = "image/point/a1_rouge.png"; document.getElementById("k6").src = "image/point/a1_droite.png"; }
if ( sens_its120 == 1 && progression_its120 == 7 )  			{ document.getElementById("k5").src = "image/point/a1_rouge.png";  document.getElementById("k6").src = "image/point/a1_rouge.png"; document.getElementById("k7").src = "image/point/a1_droite.png";  }
if ( sens_its120 == 1 && progression_its120 == 8 )  			{ document.getElementById("k6").src = "image/point/a1_rouge.png";  document.getElementById("k7").src = "image/point/a1_rouge.png"; document.getElementById("k8").src = "image/point/a1_droite.png"; }

// its74

if (sens_its74 == 1 && occupation_its74) 								{ progression_its74 = progression_its74 + 1; }
if (sens_its74 == 1 && progression_its74 > 18 ) 						{ occupation_its74 = false; occupation_its58 = true;  
train2_its58[0] = train2_its74[0];
train2_its58[1] = train2_its74[1];
train2_its58[2] = train2_its74[2];
train2_its58[3] = train2_its74[3];
train2_its58[4] = train2_its74[4];
train2_its58[5] = train2_its74[5];
train2_its58[6] = train2_its74[6];
sens_its58 =     sens_its74;
progression_its74 = 0;
aiguille94 = 0;
its74 = 0; its94 = 0; its57 = 0; 
}

if ( sens_its74 == 1 && progression_its74 == 1 )  			{ document.getElementById("k7").src = "image/point/a1_rouge.png";  document.getElementById("k8").src = "image/point/a1_rouge.png"; document.getElementById("e32").src = "image/point/a1_droite.png"; }
if ( sens_its74 == 1 && progression_its74 == 2 )  			{ document.getElementById("k8").src = "image/point/a1_rouge.png";  document.getElementById("e32").src = "image/point/a1_rouge.png"; document.getElementById("e33").src = "image/point/a1_droite.png"; }
if ( sens_its74 == 1 && progression_its74 == 3 )  			{ document.getElementById("e32").src = "image/point/a1_rouge.png";  document.getElementById("e33").src = "image/point/a1_rouge.png"; document.getElementById("e34").src = "image/point/a1_droite.png";  }
if ( sens_its74 == 1 && progression_its74 == 4 )  			{ document.getElementById("e33").src = "image/point/a1_rouge.png";  document.getElementById("e34").src = "image/point/a1_rouge.png"; document.getElementById("e35").src = "image/point/a1_droite.png"; }
if ( sens_its74 == 1 && progression_its74 == 5 )  			{ document.getElementById("e34").src = "image/point/a1_rouge.png";  document.getElementById("e35").src = "image/point/a1_rouge.png"; document.getElementById("f40").src = "image/point/a1_droite.png"; }
if ( sens_its74 == 1 && progression_its74 == 6 )  			{ document.getElementById("e35").src = "image/point/a1_rouge.png";  document.getElementById("f40").src = "image/point/a1_rouge.png"; document.getElementById("f41").src = "image/point/a1_droite.png"; }
if ( sens_its74 == 1 && progression_its74 == 7 )  			{ document.getElementById("f40").src = "image/point/a1_rouge.png";  document.getElementById("f41").src = "image/point/a1_rouge.png"; document.getElementById("d37").src = "image/point/a1_droite.png";  }
if ( sens_its74 == 1 && progression_its74 == 8 )  			{ document.getElementById("f41").src = "image/point/a1_rouge.png";  document.getElementById("d37").src = "image/point/a1_rouge.png"; document.getElementById("d38").src = "image/point/a1_droite.png"; }
if ( sens_its74 == 1 && progression_its74 == 9 )  			{ document.getElementById("d38").src = "image/point/a1_rouge.png";  document.getElementById("d39").src = "image/point/a1_rouge.png"; document.getElementById("d40").src = "image/point/a1_droite.png";}
if ( sens_its74 == 1 && progression_its74 == 10 )  			{ document.getElementById("d39").src = "image/point/a1_rouge.png";  document.getElementById("d40").src = "image/point/a1_rouge.png"; document.getElementById("d41").src = "image/point/a1_droite.png";}
if ( sens_its74 == 1 && progression_its74 == 11 )  			{ document.getElementById("d40").src = "image/point/a1_rouge.png";  document.getElementById("d41").src = "image/point/a1_rouge.png"; document.getElementById("d42").src = "image/point/a1_droite.png";}
if ( sens_its74 == 1 && progression_its74 == 12 )  			{ document.getElementById("d41").src = "image/point/a1_rouge.png";  document.getElementById("d42").src = "image/point/a1_rouge.png"; document.getElementById("d43").src = "image/point/a1_droite.png";}
if ( sens_its74 == 1 && progression_its74 == 13 )  			{ document.getElementById("d42").src = "image/point/a1_rouge.png";  document.getElementById("d43").src = "image/point/a1_rouge.png"; document.getElementById("d44").src = "image/point/a1_droite.png";}
if ( sens_its74 == 1 && progression_its74 == 14 )  			{ document.getElementById("d43").src = "image/point/a1_rouge.png";  document.getElementById("d44").src = "image/point/a1_rouge.png"; document.getElementById("d45").src = "image/point/a1_droite.png";}
if ( sens_its74 == 1 && progression_its74 == 15 )  			{ document.getElementById("d44").src = "image/point/a1_rouge.png";  document.getElementById("d45").src = "image/point/a1_rouge.png"; document.getElementById("d46").src = "image/point/a1_droite.png";}
if ( sens_its74 == 1 && progression_its74 == 16 )  			{ document.getElementById("d45").src = "image/point/a1_rouge.png";  document.getElementById("d46").src = "image/point/a1_rouge.png"; document.getElementById("d47").src = "image/point/a1_droite.png";}
if ( sens_its74 == 1 && progression_its74 == 17 )  			{ document.getElementById("d46").src = "image/point/a1_rouge.png";  document.getElementById("d47").src = "image/point/a1_rouge.png"; document.getElementById("d48").src = "image/point/a1_droite.png";}
if ( sens_its74 == 1 && progression_its74 == 18 )  			{ document.getElementById("d47").src = "image/point/a1_rouge.png";  document.getElementById("d48").src = "image/point/a1_rouge.png"; document.getElementById("d49").src = "image/point/a1_droite.png";}


// its55

if (sens_its55 == 1 && occupation_its55) 				{ progression_its55 = progression_its55 + 1; }
if (sens_its55 == 1 && progression_its55 > 7 ) 			{ occupation_its55 = false; occupation_its119 = true;  
train2_its119[0] = train2_its55[0];
train2_its119[1] = train2_its55[1];
train2_its119[2] = train2_its55[2];
train2_its119[3] = train2_its55[3];
train2_its119[4] = train2_its55[4];
train2_its119[5] = train2_its55[5];
train2_its119[6] = train2_its55[6];
sens_its119 = sens_its55;
progression_its55 = 0;
its55 = 0; 
}

if ( sens_its55 == 1 && progression_its55 == 1 )  		{ document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("d23").src = "image/point/a1_rouge.png"; document.getElementById("d24").src = "image/point/a1_droite.png";}
if ( sens_its55 == 1 && progression_its55 == 2 )  		{ document.getElementById("d23").src = "image/point/a1_rouge.png";  document.getElementById("d24").src = "image/point/a1_rouge.png"; document.getElementById("d25").src = "image/point/a1_droite.png";}
if ( sens_its55 == 1 && progression_its55 == 3 )  		{ document.getElementById("d24").src = "image/point/a1_rouge.png";  document.getElementById("d25").src = "image/point/a1_rouge.png"; document.getElementById("d26").src = "image/point/a1_droite.png";}
if ( sens_its55 == 1 && progression_its55 == 4 )  		{ document.getElementById("d25").src = "image/point/a1_rouge.png";  document.getElementById("d26").src = "image/point/a1_rouge.png"; document.getElementById("d27").src = "image/point/a1_droite.png";}
if ( sens_its55 == 1 && progression_its55 == 5 )  		{ document.getElementById("d26").src = "image/point/a1_rouge.png";  document.getElementById("d27").src = "image/point/a1_rouge.png"; document.getElementById("d28").src = "image/point/a1_droite.png";}
if ( sens_its55 == 1 && progression_its55 == 6 )  		{ document.getElementById("d27").src = "image/point/a1_rouge.png";  document.getElementById("d28").src = "image/point/a1_rouge.png"; document.getElementById("d29").src = "image/point/a1_droite.png";}
if ( sens_its55 == 1 && progression_its55 == 7 )  		{ document.getElementById("d28").src = "image/point/a1_rouge.png";  document.getElementById("d29").src = "image/point/a1_rouge.png"; document.getElementById("d30").src = "image/point/a1_droite.png";}

// its119

if (sens_its119 == 1 && occupation_its119 ) 							{ progression_its119 = progression_its119 + 1; ligne = 17;  }
if (sens_its119 == 1 && progression_its119 > 8 ) 						{ occupation_its119 = false; occupation_its56 = true;  
train2_its56[0] = train2_its119[0];
train2_its56[1] = train2_its119[1];
train2_its56[2] = train2_its119[2];
train2_its56[3] = train2_its119[3];
train2_its56[4] = train2_its119[4];
train2_its56[5] = train2_its119[5];
train2_its56[6] = train2_its119[6];
sens_its56 = sens_its119;
progression_its119 = 0;
}

if ( sens_its119 == 1 && progression_its119 == 1 )  			{ document.getElementById("q1").src = "image/point/a1_droite.png";  document.getElementById("d30").src = "image/point/a1_rouge.png"; document.getElementById("d29").src = "image/point/a1_rouge.png"; }
if ( sens_its119 == 1 && progression_its119 == 2 )  			{ document.getElementById("q2").src = "image/point/a1_droite.png";  document.getElementById("q1").src = "image/point/a1_rouge.png"; document.getElementById("d30").src = "image/point/a1_rouge.png"; }
if ( sens_its119 == 1 && progression_its119 == 3 )  			{ document.getElementById("q3").src = "image/point/a1_droite.png";  document.getElementById("q2").src = "image/point/a1_rouge.png"; document.getElementById("q1").src = "image/point/a1_rouge.png";  }
if ( sens_its119 == 1 && progression_its119 == 4 )  			{ document.getElementById("q4").src = "image/point/a1_droite.png";  document.getElementById("q3").src = "image/point/a1_rouge.png"; document.getElementById("q2").src = "image/point/a1_rouge.png"; }
if ( sens_its119 == 1 && progression_its119 == 5 )  			{ document.getElementById("q5").src = "image/point/a1_droite.png";  document.getElementById("q4").src = "image/point/a1_rouge.png"; document.getElementById("q3").src = "image/point/a1_rouge.png"; }
if ( sens_its119 == 1 && progression_its119 == 6 )  			{ document.getElementById("q6").src = "image/point/a1_droite.png";  document.getElementById("q5").src = "image/point/a1_rouge.png"; document.getElementById("q4").src = "image/point/a1_rouge.png"; }
if ( sens_its119 == 1 && progression_its119 == 7 )  			{ document.getElementById("q7").src = "image/point/a1_droite.png";  document.getElementById("q6").src = "image/point/a1_rouge.png"; document.getElementById("q5").src = "image/point/a1_rouge.png";  }
if ( sens_its119 == 1 && progression_its119 == 8 )  			{ document.getElementById("q8").src = "image/point/a1_droite.png";  document.getElementById("q7").src = "image/point/a1_rouge.png"; document.getElementById("q6").src = "image/point/a1_rouge.png"; }


// its56
	
if (sens_its56 == 1 && occupation_its56) 				{ progression_its56 = progression_its56 + 1; ligne = 56; }
if (sens_its56 == 1 && progression_its56 > 5 ) 			{ occupation_its56 = false; occupation_its57 = true;   
train2_its57[0] = train2_its56[0];
train2_its57[1] = train2_its56[1];
train2_its57[2] = train2_its56[2];
train2_its57[3] = train2_its56[3];
train2_its57[4] = train2_its56[4];
train2_its57[5] = train2_its56[5];
train2_its57[6] = train2_its56[6];
sens_its57 = sens_its56;
progression_its56 = 0;
its56 = 0; 
}

if ( sens_its56 == 1 && progression_its56 == 1 )  			{ document.getElementById("q7").src = "image/point/a1_rouge.png";  document.getElementById("q8").src = "image/point/a1_rouge.png"; document.getElementById("d32").src = "image/point/a1_droite.png";}
if ( sens_its56 == 1 && progression_its56 == 2 )  			{ document.getElementById("q8").src = "image/point/a1_rouge.png";  document.getElementById("d32").src = "image/point/a1_rouge.png"; document.getElementById("d33").src = "image/point/a1_droite.png";}
if ( sens_its56 == 1 && progression_its56 == 3 )  			{ document.getElementById("d32").src = "image/point/a1_rouge.png";  document.getElementById("d33").src = "image/point/a1_rouge.png"; document.getElementById("d34").src = "image/point/a1_droite.png";}
if ( sens_its56 == 1 && progression_its56 == 4 )  			{ document.getElementById("d33").src = "image/point/a1_rouge.png";  document.getElementById("d34").src = "image/point/a1_rouge.png"; document.getElementById("d35").src = "image/point/a1_droite.png";}
if ( sens_its56 == 1 && progression_its56 == 5 )  			{ document.getElementById("d34").src = "image/point/a1_rouge.png";  document.getElementById("d35").src = "image/point/a1_rouge.png"; document.getElementById("d36").src = "image/point/a1_droite.png";}



// its57

if (sens_its57 == 1 && occupation_its57) 				{ progression_its57 = progression_its57 + 1; ligne = 57; }
if (sens_its57 == 1 && progression_its57 > 12 ) 			{ occupation_its57 = false; occupation_its58 = true;  
train2_its58[0] = train2_its57[0];
train2_its58[1] = train2_its57[1];
train2_its58[2] = train2_its57[2];
train2_its58[3] = train2_its57[3];
train2_its58[4] = train2_its57[4];
train2_its58[5] = train2_its57[5];
train2_its58[6] = train2_its57[6];
sens_its58 = sens_its57;
progression_its57 = 0;
its57 = 0; 
}

if ( sens_its57 == 1 && progression_its57 == 1 )  			{ document.getElementById("d36").src = "image/point/a1_rouge.png";  document.getElementById("d37").src = "image/point/a1_rouge.png"; document.getElementById("d38").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 2 )  			{ document.getElementById("d37").src = "image/point/a1_rouge.png";  document.getElementById("d38").src = "image/point/a1_rouge.png"; document.getElementById("d39").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 3 )  			{ document.getElementById("d38").src = "image/point/a1_rouge.png";  document.getElementById("d39").src = "image/point/a1_rouge.png"; document.getElementById("d40").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 4 )  			{ document.getElementById("d39").src = "image/point/a1_rouge.png";  document.getElementById("d40").src = "image/point/a1_rouge.png"; document.getElementById("d41").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 5 )  			{ document.getElementById("d40").src = "image/point/a1_rouge.png";  document.getElementById("d41").src = "image/point/a1_rouge.png"; document.getElementById("d42").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 6 )  			{ document.getElementById("d41").src = "image/point/a1_rouge.png";  document.getElementById("d42").src = "image/point/a1_rouge.png"; document.getElementById("d43").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 7 )  			{ document.getElementById("d42").src = "image/point/a1_rouge.png";  document.getElementById("d43").src = "image/point/a1_rouge.png"; document.getElementById("d44").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 8 )  			{ document.getElementById("d43").src = "image/point/a1_rouge.png";  document.getElementById("d44").src = "image/point/a1_rouge.png"; document.getElementById("d45").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 9 )  			{ document.getElementById("d44").src = "image/point/a1_rouge.png";  document.getElementById("d45").src = "image/point/a1_rouge.png"; document.getElementById("d46").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 10 )  			{ document.getElementById("d45").src = "image/point/a1_rouge.png";  document.getElementById("d46").src = "image/point/a1_rouge.png"; document.getElementById("d47").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 11 )  			{ document.getElementById("d46").src = "image/point/a1_rouge.png";  document.getElementById("d47").src = "image/point/a1_rouge.png"; document.getElementById("d48").src = "image/point/a1_droite.png";}
if ( sens_its57 == 1 && progression_its57 == 12 )  			{ document.getElementById("d47").src = "image/point/a1_rouge.png";  document.getElementById("d48").src = "image/point/a1_rouge.png"; document.getElementById("d49").src = "image/point/a1_droite.png";}

// its58

if (sens_its58 == 1 && occupation_its58) 								{ progression_its58 = progression_its58 + 1; ligne = 58;}
if (sens_its58 == 1 && aiguille88 == 0 && progression_its58 > 5 ) 		{ occupation_its58 = false; occupation_its59 = true;  
train2_its59[0] = train2_its58[0];
train2_its59[1] = train2_its58[1];
train2_its59[2] = train2_its58[2];
train2_its59[3] = train2_its58[3];
train2_its59[4] = train2_its58[4];
train2_its59[5] = train2_its58[5];
train2_its59[6] = train2_its58[6];
sens_its59 = sens_its58;
progression_its58 = 0;
its58 = 0; 
}

if (sens_its58 == 1 && aiguille88 == 0 && occupation_its58 ) 	{
if ( sens_its58 == 1 && progression_its58 == 1 )  			{ document.getElementById("d48").src = "image/point/a1_rouge.png";  document.getElementById("d49").src = "image/point/a1_rouge.png"; document.getElementById("d50").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 2 )  			{ document.getElementById("d49").src = "image/point/a1_rouge.png";  document.getElementById("d50").src = "image/point/a1_rouge.png"; document.getElementById("d51").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 3 )  			{ document.getElementById("d50").src = "image/point/a1_rouge.png";  document.getElementById("d51").src = "image/point/a1_rouge.png"; document.getElementById("d52").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 4 )  			{ document.getElementById("d51").src = "image/point/a1_rouge.png";  document.getElementById("d52").src = "image/point/a1_rouge.png"; document.getElementById("d53").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rouge.png";  document.getElementById("d53").src = "image/point/a1_rouge.png"; document.getElementById("d54").src = "image/point/a1_droite.png";}
}

if (sens_its58 == 1 && aiguille88 == 1 && aiguille91 == 0 && progression_its58 > 14 ) 			{ occupation_its58 = false; occupation_its43 = true;  
train2_its43[0] = train2_its58[0];
train2_its43[1] = train2_its58[1];
train2_its43[2] = train2_its58[2];
train2_its43[3] = train2_its58[3];
train2_its43[4] = train2_its58[4];
train2_its43[5] = train2_its58[5];
train2_its43[6] = train2_its58[6];
sens_its43 = sens_its58;
progression_its58 = 0;
aiguille88 = 0;
its58 = 0; its88 = 0; its41 = 0; its42 = 0;
}

if (sens_its58 == 1 && aiguille88 == 1 && aiguille91 == 0 && occupation_its58 ) 	{
if ( sens_its58 == 1 && progression_its58 == 1 )  			{ document.getElementById("d48").src = "image/point/a1_rouge.png";  document.getElementById("d49").src = "image/point/a1_rouge.png"; document.getElementById("d50").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 2 )  			{ document.getElementById("d49").src = "image/point/a1_rouge.png";  document.getElementById("d50").src = "image/point/a1_rouge.png"; document.getElementById("d51").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 3 )  			{ document.getElementById("d50").src = "image/point/a1_rouge.png";  document.getElementById("d51").src = "image/point/a1_rouge.png"; document.getElementById("d52").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 4 )  			{ document.getElementById("d51").src = "image/point/a1_rouge.png";  document.getElementById("d52").src = "image/point/a1_rouge.png"; document.getElementById("d53").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rouge.png";  document.getElementById("d53").src = "image/point/a1_rouge.png"; document.getElementById("d54").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 6 )  			{ document.getElementById("d53").src = "image/point/a1_rouge.png";  document.getElementById("d54").src = "image/point/a1_rouge.png"; document.getElementById("f18").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 7 )  			{ document.getElementById("d54").src = "image/point/a1_rouge.png";  document.getElementById("f18").src = "image/point/a1_rouge.png"; document.getElementById("f17").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 8 )  			{ document.getElementById("f18").src = "image/point/a1_rouge.png";  document.getElementById("f17").src = "image/point/a1_rouge.png"; document.getElementById("c56").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 9 )  			{ document.getElementById("f17").src = "image/point/a1_rouge.png";  document.getElementById("c56").src = "image/point/a1_rouge.png"; document.getElementById("c57").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 10 )  			{ document.getElementById("c56").src = "image/point/a1_rouge.png";  document.getElementById("c57").src = "image/point/a1_rouge.png"; document.getElementById("c58").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 11 )  			{ document.getElementById("c57").src = "image/point/a1_rouge.png";  document.getElementById("c58").src = "image/point/a1_rouge.png"; document.getElementById("c59").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 12 )  			{ document.getElementById("c58").src = "image/point/a1_rouge.png";  document.getElementById("c59").src = "image/point/a1_rouge.png"; document.getElementById("c60").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 13 )  			{ document.getElementById("c59").src = "image/point/a1_rouge.png";  document.getElementById("c60").src = "image/point/a1_rouge.png"; document.getElementById("c61").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 14 )  			{ document.getElementById("c60").src = "image/point/a1_rouge.png";  document.getElementById("c61").src = "image/point/a1_rouge.png"; document.getElementById("c62").src = "image/point/a1_droite.png";}
}

if (sens_its58 == 1 && aiguille88 == 1 && aiguille91 == 1 && progression_its58 > 15 ) 			{ occupation_its58 = false; occupation_its22 = true;  
train2_its22[0] = train2_its58[0];
train2_its22[1] = train2_its58[1];
train2_its22[2] = train2_its58[2];
train2_its22[3] = train2_its58[3];
train2_its22[4] = train2_its58[4];
train2_its22[5] = train2_its58[5];
train2_its22[6] = train2_its58[6];
sens_its22 = sens_its58;
progression_its58 = 0;
aiguille88 = 0;
aiguille91 = 0;
its58 = 0; its88 = 0; its41 = 0; its91 = 0; its21 = 0; 
}

if (sens_its58 == 1 && aiguille88 == 1 && aiguille91 == 1 && occupation_its58 ) 	{
if ( sens_its58 == 1 && progression_its58 == 1 )  			{ document.getElementById("d48").src = "image/point/a1_rouge.png";  document.getElementById("d49").src = "image/point/a1_rouge.png"; document.getElementById("d50").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 2 )  			{ document.getElementById("d49").src = "image/point/a1_rouge.png";  document.getElementById("d50").src = "image/point/a1_rouge.png"; document.getElementById("d51").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 3 )  			{ document.getElementById("d50").src = "image/point/a1_rouge.png";  document.getElementById("d51").src = "image/point/a1_rouge.png"; document.getElementById("d52").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 4 )  			{ document.getElementById("d51").src = "image/point/a1_rouge.png";  document.getElementById("d52").src = "image/point/a1_rouge.png"; document.getElementById("d53").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rouge.png";  document.getElementById("d53").src = "image/point/a1_rouge.png"; document.getElementById("d54").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 6 )  			{ document.getElementById("d53").src = "image/point/a1_rouge.png";  document.getElementById("d54").src = "image/point/a1_rouge.png"; document.getElementById("f18").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 7 )  			{ document.getElementById("d54").src = "image/point/a1_rouge.png";  document.getElementById("f18").src = "image/point/a1_rouge.png"; document.getElementById("f17").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 8 )  			{ document.getElementById("f18").src = "image/point/a1_rouge.png";  document.getElementById("f17").src = "image/point/a1_rouge.png"; document.getElementById("c56").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 9 )  			{ document.getElementById("f17").src = "image/point/a1_rouge.png";  document.getElementById("c56").src = "image/point/a1_rouge.png"; document.getElementById("c57").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 10 )  			{ document.getElementById("c56").src = "image/point/a1_rouge.png";  document.getElementById("c57").src = "image/point/a1_rouge.png"; document.getElementById("f24").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 11 )  			{ document.getElementById("c57").src = "image/point/a1_rouge.png";  document.getElementById("f24").src = "image/point/a1_rouge.png"; document.getElementById("f23").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 12 )  			{ document.getElementById("f24").src = "image/point/a1_rouge.png";  document.getElementById("f23").src = "image/point/a1_rouge.png"; document.getElementById("b59").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 13 )  			{ document.getElementById("f23").src = "image/point/a1_rouge.png";  document.getElementById("b59").src = "image/point/a1_rouge.png"; document.getElementById("b60").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 14 )  			{ document.getElementById("b59").src = "image/point/a1_rouge.png";  document.getElementById("b60").src = "image/point/a1_rouge.png"; document.getElementById("b61").src = "image/point/a1_droite.png";}
if ( sens_its58 == 1 && progression_its58 == 15 )  			{  document.getElementById("b60").src = "image/point/a1_rouge.png";  document.getElementById("b61").src = "image/point/a1_rouge.png"; document.getElementById("b62").src = "image/point/a1_droite.png";}
}

// its59

if (sens_its59 == 1 && occupation_its59) 								{ progression_its59 = progression_its59 + 1; ligne = 59; }
if (sens_its59 == 1 && progression_its59 > 2 ) 							{ occupation_its59 = false; occupation_its60 = true;  
train2_its60[0] = train2_its59[0];
train2_its60[1] = train2_its59[1];
train2_its60[2] = train2_its59[2];
train2_its60[3] = train2_its59[3];
train2_its60[4] = train2_its59[4];
train2_its60[5] = train2_its59[5];
train2_its60[6] = train2_its59[6];
sens_its60 = sens_its59;
progression_its59 = 0; 
its59 = 0; 
} 

if ( sens_its59 == 1 && progression_its59 == 1 )  			{ document.getElementById("d53").src = "image/point/a1_rouge.png";  document.getElementById("d54").src = "image/point/a1_rouge.png"; document.getElementById("d55").src = "image/point/a1_droite.png";}
if ( sens_its59 == 1 && progression_its59 == 2 )  			{ document.getElementById("d54").src = "image/point/a1_rouge.png";  document.getElementById("d55").src = "image/point/a1_rouge.png"; document.getElementById("d56").src = "image/point/a1_droite.png";}

// its60

if (sens_its60 == 1 && occupation_its60) 								{ progression_its60 = progression_its60 + 1; ligne = 60; } 
if (sens_its60 == 1 && progression_its60 > 6 ) 							{ occupation_its60 = false; occupation_its61 = true;   
train2_its61[0] = train2_its60[0];
train2_its61[1] = train2_its60[1];
train2_its61[2] = train2_its60[2];
train2_its61[3] = train2_its60[3];
train2_its61[4] = train2_its60[4];
train2_its61[5] = train2_its60[5];
train2_its61[6] = train2_its60[6];
sens_its61 = sens_its60;
progression_its60 = 0;
its60 = 0; 
} 

if ( sens_its60 == 1 && progression_its60 == 1 )  			{ document.getElementById("d55").src = "image/point/a1_rouge.png";  document.getElementById("d56").src = "image/point/a1_rouge.png"; document.getElementById("d57").src = "image/point/a1_droite.png";}
if ( sens_its60 == 1 && progression_its60 == 2 )  			{ document.getElementById("d56").src = "image/point/a1_rouge.png";  document.getElementById("d57").src = "image/point/a1_rouge.png"; document.getElementById("d58").src = "image/point/a1_droite.png";}
if ( sens_its60 == 1 && progression_its60 == 3 )  			{ document.getElementById("d57").src = "image/point/a1_rouge.png";  document.getElementById("d58").src = "image/point/a1_rouge.png"; document.getElementById("d59").src = "image/point/a1_droite.png";}
if ( sens_its60 == 1 && progression_its60 == 4 )  			{ document.getElementById("d58").src = "image/point/a1_rouge.png";  document.getElementById("d59").src = "image/point/a1_rouge.png"; document.getElementById("d60").src = "image/point/a1_droite.png";}
if ( sens_its60 == 1 && progression_its60 == 5 )  			{ document.getElementById("d59").src = "image/point/a1_rouge.png";  document.getElementById("d60").src = "image/point/a1_rouge.png"; document.getElementById("d61").src = "image/point/a1_droite.png";}
if ( sens_its60 == 1 && progression_its60 == 6 )  			{ document.getElementById("d60").src = "image/point/a1_rouge.png";  document.getElementById("d61").src = "image/point/a1_rouge.png"; document.getElementById("d62").src = "image/point/a1_droite.png";}

// its61

if (sens_its61 == 1 && occupation_its61) 					{ progression_its61 = progression_its61 + 1; ligne = 60; } 
if (sens_its61 == 1 && progression_its61 > 6 ) 				{ occupation_its61 = false;   
} 

if ( sens_its61 == 1 && progression_its61 == 1 )  			{ document.getElementById("d61").src = "image/point/a1_rouge.png";  document.getElementById("d62").src = "image/point/a1_rouge.png"; document.getElementById("d63").src = "image/point/a1_droite.png";}
if ( sens_its61 == 1 && progression_its61 == 2 )  			{ document.getElementById("d62").src = "image/point/a1_rouge.png";  document.getElementById("d63").src = "image/point/a1_rouge.png"; document.getElementById("d64").src = "image/point/a1_droite.png";}
if ( sens_its61 == 1 && progression_its61 == 3 )  			{ document.getElementById("d63").src = "image/point/a1_rouge.png";  document.getElementById("d64").src = "image/point/a1_rouge.png"; document.getElementById("d65").src = "image/point/a1_droite.png";}
if ( sens_its61 == 1 && progression_its61 == 4 )  			{ document.getElementById("d64").src = "image/point/a1_rouge.png";  document.getElementById("d65").src = "image/point/a1_rouge.png"; document.getElementById("d66").src = "image/point/a1_droite.png";}
if ( sens_its61 == 1 && progression_its61 == 5 )  			{ document.getElementById("d65").src = "image/point/a1_rouge.png";  document.getElementById("d66").src = "image/point/a1_rouge.png"; }
if ( sens_its61 == 1 && progression_its61 == 6 )  			{ its61 = 0; document.getElementById("d66").src = "image/point/a1_rouge.png"; }


if ( progression_its12 == 0 ) { document.getElementById("bloc12").innerHTML = "";}
if ( progression_its14 == 0 ) { document.getElementById("bloc14").innerHTML = "";}
if ( progression_its15 == 0 ) { document.getElementById("bloc15").innerHTML = "";}
if ( progression_its16 == 0 ) { document.getElementById("bloc16").innerHTML = "";}
if ( progression_its111 == 0 ) { document.getElementById("bloc111").innerHTML = "";}
if ( progression_its17 == 0 ) { document.getElementById("bloc17").innerHTML = "";}
if ( progression_its18 == 0 ) { document.getElementById("bloc18").innerHTML = "";}
if ( progression_its19 == 0 ) { document.getElementById("bloc19").innerHTML = "";}
if ( progression_its20 == 0 ) { document.getElementById("bloc20").innerHTML = "";}
if ( progression_its21 == 0 ) { document.getElementById("bloc21").innerHTML = "";}

if ( progression_its12 >= 1 ) { document.getElementById("bloc12").innerHTML = ""+train2_its12[5]+""; }
if ( progression_its14 >= 1 ) { document.getElementById("bloc14").innerHTML = ""+train2_its14[5]+""; }
if ( progression_its15 >= 1 ) { document.getElementById("bloc15").innerHTML = ""+train2_its15[5]+""; }
if ( progression_its16 >= 1 ) { document.getElementById("bloc16").innerHTML = ""; }
if ( progression_its111 >= 1 ) { document.getElementById("bloc111").innerHTML = ""+train2_its111[5]+""; }
if ( progression_its17 >= 1 ) { document.getElementById("bloc17").innerHTML = ""+train2_its17[5]+""; }
if ( progression_its18 >= 1 ) { document.getElementById("bloc18").innerHTML = ""+train2_its18[5]+""; }
if ( progression_its19 >= 1 ) { document.getElementById("bloc19").innerHTML = ""; }
if ( progression_its20 >= 1 ) { document.getElementById("bloc20").innerHTML = ""+train2_its20[5]+""; }
if ( progression_its21 >= 1 ) { document.getElementById("bloc21").innerHTML = ""+train2_its21[5]+""; }

if ( progression_its101 == 0 ) { document.getElementById("bloc101").innerHTML = "";}
if ( progression_its102 == 0 ) { document.getElementById("bloc102").innerHTML = "";}
if ( progression_its117 == 0 ) { document.getElementById("bloc117").innerHTML = "";}
if ( progression_its103 == 0 ) { document.getElementById("bloc103").innerHTML = "";}
if ( progression_its104 == 0 ) { document.getElementById("bloc104").innerHTML = "";}
if ( progression_its105 == 0 ) { document.getElementById("bloc105").innerHTML = "";}
if ( progression_its106 == 0 ) { document.getElementById("bloc106").innerHTML = "";}


if ( progression_its101 >= 1 ) { document.getElementById("bloc101").innerHTML = ""; }
if ( progression_its102 >= 1 ) { document.getElementById("bloc102").innerHTML = ""+train2_its102[5]+""; }
if ( progression_its117 >= 1 ) { document.getElementById("bloc117").innerHTML = ""+train2_its117[5]+""; }
if ( progression_its103 >= 1 ) { document.getElementById("bloc103").innerHTML = ""+train2_its103[5]+""; }
if ( progression_its104 >= 1 ) { document.getElementById("bloc104").innerHTML = ""; }
if ( progression_its105 >= 1 ) { document.getElementById("bloc105").innerHTML = ""+train2_its105[5]+""; }
if ( progression_its106 >= 1 ) { document.getElementById("bloc106").innerHTML = ""; }

if ( progression_its30 == 0 ) { document.getElementById("bloc30").innerHTML = "";}
if ( progression_its31 == 0 ) { document.getElementById("bloc31").innerHTML = "";}
if ( progression_its32 == 0 ) { document.getElementById("bloc32").innerHTML = "";}
if ( progression_its131 == 0 ) { document.getElementById("bloc131").innerHTML = "";}
if ( progression_its33 == 0 ) { document.getElementById("bloc33").innerHTML = "";}
if ( progression_its34 == 0 ) { document.getElementById("bloc34").innerHTML = "";}
if ( progression_its118 == 0 ) { document.getElementById("bloc118").innerHTML = "";}

if ( progression_its30 >= 1 ) { document.getElementById("bloc30").innerHTML = ""+train2_its30[5]+""; }
if ( progression_its31 >= 1 ) { document.getElementById("bloc31").innerHTML = ""+train2_its31[5]+""; }
if ( progression_its32 >= 1 ) { document.getElementById("bloc32").innerHTML = ""; }
if ( progression_its131 >= 1 ) { document.getElementById("bloc131").innerHTML = ""; }
if ( progression_its33 >= 1 ) { document.getElementById("bloc33").innerHTML = ""; }
if ( progression_its34 >= 1 ) { document.getElementById("bloc34").innerHTML = ""+train2_its34[5]+""; }
if ( progression_its118 >= 1 ) { document.getElementById("bloc118").innerHTML = ""+train2_its118[5]+""; }

if ( progression_its37 == 0 ) { document.getElementById("bloc37").innerHTML = "";}
if ( progression_its38 == 0 ) { document.getElementById("bloc38").innerHTML = "";}
if ( progression_its40 == 0 ) { document.getElementById("bloc40").innerHTML = "";}
if ( progression_its41 == 0 ) { document.getElementById("bloc41").innerHTML = "";}
if ( progression_its42 == 0 ) { document.getElementById("bloc42").innerHTML = "";}

if ( progression_its37 >= 1 ) { document.getElementById("bloc37").innerHTML = ""+train2_its37[5]+""; }
if ( progression_its38 >= 1 ) { document.getElementById("bloc38").innerHTML = ""+train2_its38[5]+""; }
if ( progression_its40 >= 1 ) { document.getElementById("bloc40").innerHTML = ""+train2_its40[5]+""; }
if ( progression_its41 >= 1 ) { document.getElementById("bloc41").innerHTML = ""; }
if ( progression_its42 >= 1 ) { document.getElementById("bloc42").innerHTML = ""+train2_its42[5]+""; }

if ( progression_its61 == 0 ) { document.getElementById("bloc61").innerHTML = "";}
if ( progression_its60 == 0 ) { document.getElementById("bloc60").innerHTML = "";}
if ( progression_its58 == 0 ) { document.getElementById("bloc58").innerHTML = "";}
if ( progression_its57 == 0 ) { document.getElementById("bloc57").innerHTML = "";}
if ( progression_its56 == 0 ) { document.getElementById("bloc56").innerHTML = "";}

if ( progression_its61 >= 1 ) { document.getElementById("bloc61").innerHTML = ""+train2_its61[5]+""; }
if ( progression_its60 >= 1 ) { document.getElementById("bloc60").innerHTML = ""+train2_its60[5]+""; }
if ( progression_its58 >= 1 ) { document.getElementById("bloc58").innerHTML = ""; }
if ( progression_its57 >= 1 ) { document.getElementById("bloc57").innerHTML = ""+train2_its57[5]+""; }
if ( progression_its56 >= 1 ) { document.getElementById("bloc56").innerHTML = ""+train2_its56[5]+""; }

if ( progression_its119 == 0 ) { document.getElementById("bloc119").innerHTML = "";}
if ( progression_its55 == 0 ) { document.getElementById("bloc55").innerHTML = "";}
if ( progression_its54 == 0 ) { document.getElementById("bloc54").innerHTML = "";}
if ( progression_its53 == 0 ) { document.getElementById("bloc53").innerHTML = "";}
if ( progression_its52 == 0 ) { document.getElementById("bloc52").innerHTML = "";}
if ( progression_its51 == 0 ) { document.getElementById("bloc51").innerHTML = "";}
if ( progression_its50 == 0 ) { document.getElementById("bloc50").innerHTML = "";}

if ( progression_its119 >= 1 ) { document.getElementById("bloc119").innerHTML = ""+train2_its119[5]+""; }
if ( progression_its55 >= 1 ) { document.getElementById("bloc55").innerHTML = ""+train2_its55[5]+""; }
if ( progression_its54 >= 1 ) { document.getElementById("bloc54").innerHTML = ""; }
if ( progression_its53 >= 1 ) { document.getElementById("bloc53").innerHTML = ""+train2_its53[5]+""; }
if ( progression_its52 >= 1 ) { document.getElementById("bloc52").innerHTML = ""; }
if ( progression_its51 >= 1 ) { document.getElementById("bloc51").innerHTML = ""+train2_its51[5]+""; }
if ( progression_its50 >= 1 ) { document.getElementById("bloc50").innerHTML = ""+train2_its50[5]+""; }

if ( progression_its120 == 0 ) { document.getElementById("bloc120").innerHTML = "";}
if ( progression_its77 == 0 ) { document.getElementById("bloc77").innerHTML = "";}
if ( progression_its76 == 0 ) { document.getElementById("bloc76").innerHTML = "";}
if ( progression_its75 == 0 ) { document.getElementById("bloc75").innerHTML = "";}
if ( progression_its74 == 0 ) { document.getElementById("bloc74").innerHTML = "";}

if ( progression_its120 >= 1 ) { document.getElementById("bloc120").innerHTML = ""+train2_its120[5]+""; }
if ( progression_its77 >= 1 ) { document.getElementById("bloc77").innerHTML = ""+train2_its77[5]+""; }
if ( progression_its76 >= 1 ) { document.getElementById("bloc76").innerHTML = ""+train2_its76[5]+""; }
if ( progression_its75 >= 1 ) { document.getElementById("bloc75").innerHTML = ""+train2_its75[5]+""; }
if ( progression_its74 >= 1 ) { document.getElementById("bloc74").innerHTML = ""+train2_its74[5]+""; }

if ( progression_its73 == 0 ) { document.getElementById("bloc73").innerHTML = "";}
if ( progression_its72 == 0 ) { document.getElementById("bloc72").innerHTML = "";}
if ( progression_its71 == 0 ) { document.getElementById("bloc71").innerHTML = "";}

if ( progression_its73 >= 1 ) { document.getElementById("bloc73").innerHTML = ""+train2_its73[5]+""; }
if ( progression_its72 >= 1 ) { document.getElementById("bloc72").innerHTML = ""+train2_its72[5]+""; }
if ( progression_its71 >= 1 ) { document.getElementById("bloc71").innerHTML = ""+train2_its71[5]+""; }

if ( progression_its7 == 0 ) { document.getElementById("bloc7").innerHTML = "";}
if ( progression_its6 == 0 ) { document.getElementById("bloc6").innerHTML = "";}
if ( progression_its5 == 0 ) { document.getElementById("bloc5").innerHTML = "";}
if ( progression_its4 == 0 ) { document.getElementById("bloc4").innerHTML = "";}
if ( progression_its8 == 0 ) { document.getElementById("bloc8").innerHTML = "";}
if ( progression_its2 == 0 ) { document.getElementById("bloc2").innerHTML = "";}

if ( progression_its7 >= 1 ) { document.getElementById("bloc7").innerHTML = ""+train2_its7[5]+""; }
if ( progression_its6 >= 1 ) { document.getElementById("bloc6").innerHTML = ""+train2_its6[5]+""; }
if ( progression_its5 >= 1 ) { document.getElementById("bloc5").innerHTML = ""+train2_its5[5]+""; }
if ( progression_its4 >= 1 ) { document.getElementById("bloc4").innerHTML = ""+train2_its4[5]+""; }
if ( progression_its8 >= 1 ) { document.getElementById("bloc8").innerHTML = ""+train2_its8[5]+""; }
if ( progression_its2 >= 1 ) { document.getElementById("bloc2").innerHTML = ""+train2_its2[5]+""; }

if ( progression_its100 == 0 ) { document.getElementById("bloc121").innerHTML = "";}
if ( progression_its107 == 0 ) { document.getElementById("bloc122").innerHTML = "";}

if ( progression_its100 >= 1 ) { document.getElementById("bloc15").innerHTML = ""+train2_its100[5]+"";}
if ( progression_its107 >= 1 ) { document.getElementById("bloc20").innerHTML = ""+train2_its107[5]+"";}

// INITALISATION




if ( its4 == 1 && sens_its4 == 1 && progression_its4 == 2 ) {
its8 = 0;
document.getElementById("z17").src = "image/feux/rouge_2.png";
}

if ( its103 == 1 && sens_its103 == 1 && progression_its103 == 2 ) {
its117 = 0;
document.getElementById("z21").src = "image/feux/rouge_2.png";
}

if ( its18 == 1 && sens_its18 == 1 && progression_its18 == 2 ) {
its17 = 0;
document.getElementById("z9").src = "image/feux/rouge_2.png";
}

if ( its37 == 1 && sens_its37 == 1 && progression_its37 == 2 ) {
its118 = 0;
document.getElementById("z10").src = "image/feux/rouge_2.png";
}

if ( its56 == 1 && sens_its56 == 1 && progression_its56 == 2 ) {
its119 = 0;
document.getElementById("z11").src = "image/feux/rouge_2.png";
}

if ( its74 == 1 && sens_its74 == 1 && progression_its74 == 2 ) {
its120 = 0;
document.getElementById("z12").src = "image/feux/rouge_2.png";
}

if ( its14 == 1 && sens_its14 == 1 && progression_its14 == 2 ) {
document.getElementById("z1").src = "image/feux/rouge_2.png";
}

if ( its51 == 1 && sens_its51 == 1 && progression_its51 == 2 ) {
document.getElementById("z3").src = "image/feux/rouge_2.png";
}

if ( its8 == 1 && sens_its8 == 1 && progression_its8 == 2 ) {
its23 = 0;
document.getElementById("z16").src = "image/feux/rouge_2.png";
}

if ( its117 == 1 && sens_its117 == 1 && progression_its117 == 2 ) {
its102 = 0;
document.getElementById("z20").src = "image/feux/rouge_2.png";
}

if ( its17 == 1 && sens_its17 == 1 && progression_its17 == 2 ) {
its111 = 0;
document.getElementById("z5").src = "image/feux/rouge_2.png";
}

if ( its118 == 1 && sens_its118 == 1 && progression_its118 == 2 ) {
its34 = 0;
document.getElementById("z6").src = "image/feux/rouge_2.png";
}

if ( its119 == 1 && sens_its119 == 1 && progression_its119 == 2 ) {
its55 = 0;
document.getElementById("z7").src = "image/feux/rouge_2.png";
}

if ( its120 == 1 && sens_its120 == 1 && progression_its120 == 2 ) {
its73 = 0;
document.getElementById("z8").src = "image/feux/rouge_2.png";
}

// Nouvelles lignes

// Avec occupation 3 pour les trains en roses

/*

// its132

if (sens_its132 == 3 && occupation_its132 && aiguille97 == 0  ) 			{ progression_its132 = progression_its132 + 1; }
if (sens_its132 == 3 && progression_its132 > 4 && aiguille97 == 0) 			{ occupation_its132 = false;  occupation_its102 = true;
train2_its102[0] = train2_its132[0];
train2_its102[1] = train2_its132[1];
train2_its102[2] = train2_its132[2];
train2_its102[3] = train2_its132[3];
train2_its102[4] = train2_its132[4];
train2_its102[5] = train2_its132[5];
train2_its102[6] = train2_its132[6];
sens_its102 = sens_its132;
progression_its132 = 0;
its132 = 0;
document.getElementById("z23").src = "image/feux/rouge_2.png";
}

if ( sens_its132 == 3 && aiguille97 == 0 && occupation_its132 ) {
if ( sens_its132 == 3 && progression_its132 == 1 )  			{ document.getElementById("x16").src = "image/point/a1_rose.png";  document.getElementById("x17").src = "image/point/a1_rose.png"; document.getElementById("x19").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 2 )  			{ document.getElementById("x17").src = "image/point/a1_rose.png";  document.getElementById("x19").src = "image/point/a1_rose.png"; document.getElementById("x20").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 3 )  			{ document.getElementById("x19").src = "image/point/a1_rose.png";  document.getElementById("x20").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 4 )  			{ document.getElementById("x20").src = "image/point/a1_rose.png";  document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_droite_rose.png"; }
}
// nouvelle version
if (sens_its132 == 3 && occupation_its132 && aiguille97 == 1  ) 			{ progression_its132 = progression_its132 + 1; }
if (sens_its132 == 3 && progression_its132 > 13 && aiguille97 == 1) 			{ occupation_its132 = false;  occupation_its8 = true;
train2_its8[0] = train2_its132[0];
train2_its8[1] = train2_its132[1];
train2_its8[2] = train2_its132[2];
train2_its8[3] = train2_its132[3];
train2_its8[4] = train2_its132[4];
train2_its8[5] = train2_its132[5];
train2_its8[6] = train2_its132[6];
sens_its8 = sens_its132;
progression_its132 = 0;
its132 = 0; its97 = 0; its101 = 0; its2 = 0; aiguille97 = 0;
document.getElementById("z23").src = "image/feux/rouge_2.png";
}

if ( sens_its132 == 3 && aiguille97 == 1 && occupation_its132 ) {
if ( sens_its132 == 3 && progression_its132 == 1 )  			{ document.getElementById("x16").src = "image/point/a1_rose.png";  document.getElementById("x17").src = "image/point/a1_rose.png"; document.getElementById("x19").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 2 )  			{ document.getElementById("x17").src = "image/point/a1_rose.png";  document.getElementById("x19").src = "image/point/a1_rose.png"; document.getElementById("x20").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 3 )  			{ document.getElementById("x19").src = "image/point/a1_rose.png";  document.getElementById("x20").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 4 )  			{ document.getElementById("x20").src = "image/point/a1_rose.png";  document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 5 )  			{ document.getElementById("x21").src = "image/point/a1_rose.png";  document.getElementById("x22").src = "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 6 )  			{ document.getElementById("x22").src = "image/point/a1_rose.png";  document.getElementById("x23").src = "image/point/a1_rose.png"; document.getElementById("f81").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 7 )  			{ document.getElementById("x23").src = "image/point/a1_rose.png";  document.getElementById("f81").src = "image/point/a1_rose.png"; document.getElementById("f80").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 8 )  			{ document.getElementById("f81").src = "image/point/a1_rose.png";  document.getElementById("f80").src = "image/point/a1_rose.png"; document.getElementById("a26").src = "image/point/a1_droite_rose.png"; }

if ( sens_its132 == 3 && progression_its132 == 9 )  			{ document.getElementById("f80").src = "image/point/a1_rose.png";  document.getElementById("a26").src = "image/point/a1_rose.png"; document.getElementById("a27").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 10 )  			{ document.getElementById("a26").src = "image/point/a1_rose.png";  document.getElementById("a27").src = "image/point/a1_rose.png"; document.getElementById("a28").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 11 )  			{ document.getElementById("a30").src = "image/point/a1_rose.png";  document.getElementById("a28").src = "image/point/a1_rose.png"; document.getElementById("a29").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 12 )  			{ document.getElementById("a28").src = "image/point/a1_rose.png";  document.getElementById("a29").src = "image/point/a1_rose.png"; document.getElementById("a30").src = "image/point/a1_droite_rose.png"; }
if ( sens_its132 == 3 && progression_its132 == 13 )  			{ document.getElementById("a29").src = "image/point/a1_rose.png";  document.getElementById("a30").src = "image/point/a1_rose.png"; document.getElementById("a31").src = "image/point/a1_droite_rose.png"; }
}


// its100

if (sens_its100 == 3 && occupation_its100 ) 							{ progression_its100 = progression_its100 + 1; }
if (sens_its100 == 3 && its132 == 0 && progression_its100 > 6 ) 		{ progression_its100 = 6; }
if (sens_its100 == 3 && progression_its100 > 6 ) 						{ occupation_its100 = false;  occupation_its132 = true;
train2_its132[0] = train2_its100[0];
train2_its132[1] = train2_its100[1];
train2_its132[2] = train2_its100[2];
train2_its132[3] = train2_its100[3];
train2_its132[4] = train2_its100[4];
train2_its132[5] = train2_its100[5];
train2_its132[6] = train2_its100[6];
sens_its132 = sens_its100;
progression_its100 = 0;
its100 = 0;
}

if ( sens_its100 == 3 && progression_its100 == 1 )  			{ document.getElementById("x10").src = "image/point/a1_rose.png";  document.getElementById("x11").src = "image/point/a1_rose.png"; document.getElementById("x12").src = "image/point/a1_droite_rose.png"; }
if ( sens_its100 == 3 && progression_its100 == 2 )  			{ document.getElementById("x11").src = "image/point/a1_rose.png";  document.getElementById("x12").src = "image/point/a1_rose.png"; document.getElementById("x13").src = "image/point/a1_droite_rose.png"; }
if ( sens_its100 == 3 && progression_its100 == 3 )  			{ document.getElementById("x12").src = "image/point/a1_rose.png";  document.getElementById("x13").src = "image/point/a1_rose.png"; document.getElementById("x14").src = "image/point/a1_droite_rose.png"; }
if ( sens_its100 == 3 && progression_its100 == 4 )  			{ document.getElementById("x13").src = "image/point/a1_rose.png";  document.getElementById("x14").src = "image/point/a1_rose.png"; document.getElementById("x15").src = "image/point/a1_droite_rose.png"; }
if ( sens_its100 == 3 && progression_its100 == 5 )  			{ document.getElementById("x14").src = "image/point/a1_rose.png";  document.getElementById("x15").src = "image/point/a1_rose.png"; document.getElementById("x16").src = "image/point/a1_droite_rose.png"; }
if ( sens_its100 == 3 && progression_its100 == 6 )  			{ document.getElementById("x15").src = "image/point/a1_rose.png";  document.getElementById("x16").src = "image/point/a1_rose.png"; document.getElementById("x17").src = "image/point/a1_droite_rose.png"; }

 

// its12

if (sens_its12 == 3 && occupation_its12 ) 							{ progression_its12 = progression_its12 + 1; ligne = 12;}
if (sens_its12 == 3 && its14 == 0 && progression_its12 > 4 ) 		{ progression_its12 = 4; }
if (sens_its12 == 3 && progression_its12 > 4 ) 						{ occupation_its12 = false; occupation_its14 = true;  
train2_its14[0] = train2_its12[0];
train2_its14[1] = train2_its12[1];
train2_its14[2] = train2_its12[2];
train2_its14[3] = train2_its12[3];
train2_its14[4] = train2_its12[4];
train2_its14[5] = train2_its12[5];
train2_its14[6] = train2_its12[6];
sens_its14 = sens_its12;
progression_its12 = 0; 
} 

if ( sens_its12 == 3 && progression_its12 == 1 )  			{ document.getElementById("b1").src = "image/point/a1_rose.png";  }
if ( sens_its12 == 3 && progression_its12 == 2 )  			{ document.getElementById("b1").src = "image/point/a1_rose.png";  document.getElementById("b2").src = "image/point/a1_rose.png"; }
if ( sens_its12 == 3 && progression_its12 == 3 )  			{ document.getElementById("b1").src = "image/point/a1_rose.png";  document.getElementById("b2").src = "image/point/a1_rose.png"; document.getElementById("b3").src = "image/point/a1_droite_rose.png";}
if ( sens_its12 == 3 && progression_its12 == 4 )  			{ document.getElementById("b2").src = "image/point/a1_rose.png";  document.getElementById("b3").src = "image/point/a1_rose.png"; document.getElementById("b4").src = "image/point/a1_droite_rose.png";}
if ( sens_its12 == 3 && progression_its12 == 4 )  			{ document.getElementById("b2").src = "image/point/a1_rose.png";  document.getElementById("b3").src = "image/point/a1_rose.png"; document.getElementById("b4").src = "image/point/a1_droite_rose.png";}

// its14

if (sens_its14 == 3 && occupation_its14) 											{ progression_its14 = progression_its14 + 1; ligne = 14;}
if (sens_its14 == 3 && aiguille79 == 0 && progression_its14 > 3 ) 					{ occupation_its14 = false; occupation_its15 = true;  
train2_its15[0] = train2_its14[0];
train2_its15[1] = train2_its14[1];
train2_its15[2] = train2_its14[2];
train2_its15[3] = train2_its14[3];
train2_its15[4] = train2_its14[4];
train2_its15[5] = train2_its14[5];
train2_its15[6] = train2_its14[6];
sens_its15 = sens_its14;
progression_its14 = 0; 
its12 = 0; its14 = 0; 
} 

if (sens_its14 == 3 && aiguille79 == 1 && progression_its14 > 9 ) 					{ occupation_its14 = false; occupation_its131 = true;  
train2_its131[0] = train2_its14[0];
train2_its131[1] = train2_its14[1];
train2_its131[2] = train2_its14[2];
train2_its131[3] = train2_its14[3];
train2_its131[4] = train2_its14[4];
train2_its131[5] = train2_its14[5];
train2_its131[6] = train2_its14[6];
sens_its131 = sens_its14;
progression_its14 = 0; 
aiguille79 = 0;
its12 = 0; its14 = 0; its79 = 0; its32 = 0; 
} 

if (sens_its14 == 3 && aiguille79 == 0 && occupation_its14 ) {
if ( sens_its14 == 3 && progression_its14 == 1 )  			{ document.getElementById("b3").src = "image/point/a1_rose.png";  document.getElementById("b4").src = "image/point/a1_rose.png"; document.getElementById("b5").src = "image/point/a1_droite_rose.png";  }
if ( sens_its14 == 3 && progression_its14 == 2 )  			{ document.getElementById("b4").src = "image/point/a1_rose.png";  document.getElementById("b5").src = "image/point/a1_rose.png"; document.getElementById("b6").src = "image/point/a1_droite_rose.png"; }
if ( sens_its14 == 3 && progression_its14 == 3 )  			{  document.getElementById("b5").src = "image/point/a1_rose.png";  document.getElementById("b6").src = "image/point/a1_rose.png"; document.getElementById("b7").src = "image/point/a1_droite_rose.png"; }
}

if (sens_its14 == 3 && aiguille79 == 1 && occupation_its14 ) {
if ( sens_its14 == 3 && progression_its14 == 1 )  			{ document.getElementById("b3").src = "image/point/a1_rose.png";  document.getElementById("b4").src = "image/point/a1_rose.png"; document.getElementById("b5").src = "image/point/a1_droite_rose.png";  }
if ( sens_its14 == 3 && progression_its14 == 2 )  			{ document.getElementById("b4").src = "image/point/a1_rose.png";  document.getElementById("b5").src = "image/point/a1_rose.png"; document.getElementById("b6").src = "image/point/a1_droite_rose.png"; }
if ( sens_its14 == 3 && progression_its14 == 3 )  			{ document.getElementById("b5").src = "image/point/a1_rose.png";  document.getElementById("b6").src = "image/point/a1_rose.png"; document.getElementById("b7").src = "image/point/a1_droite_rose.png"; }
if ( sens_its14 == 3 && progression_its14 == 4 )  			{ document.getElementById("b6").src = "image/point/a1_rose.png";  document.getElementById("b7").src = "image/point/a1_rose.png"; document.getElementById("f19").src = "image/point/a1_droite_rose.png";  }
if ( sens_its14 == 3 && progression_its14 == 5 )  			{ document.getElementById("b6").src = "image/point/a1_rose.png";  document.getElementById("f19").src = "image/point/a1_rose.png"; document.getElementById("f20").src = "image/point/a1_droite_rose.png"; }
if ( sens_its14 == 3 && progression_its14 == 6 )  			{ document.getElementById("f19").src = "image/point/a1_rose.png";  document.getElementById("f20").src = "image/point/a1_rose.png"; document.getElementById("c9").src = "image/point/a1_droite_rose.png"; }
if ( sens_its14 == 3 && progression_its14 == 7 )  			{ document.getElementById("f20").src = "image/point/a1_rose.png";  document.getElementById("c9").src = "image/point/a1_rose.png"; document.getElementById("c10").src = "image/point/a1_droite_rose.png";  }
if ( sens_its14 == 3 && progression_its14 == 8 )  			{ document.getElementById("c9").src = "image/point/a1_rose.png";  document.getElementById("c10").src = "image/point/a1_rose.png"; document.getElementById("c11").src = "image/point/a1_droite_rose.png"; }
if ( sens_its14 == 3 && progression_its14 == 9 )  			{ document.getElementById("c10").src = "image/point/a1_rose.png";  document.getElementById("c11").src = "image/point/a1_rose.png"; document.getElementById("c12").src = "image/point/a1_droite_rose.png"; }
}

// its15

if (sens_its15 == 3 && occupation_its15) 											{ progression_its15 = progression_its15 + 1; ligne = 15;}
if (sens_its15 == 3 && progression_its15 > 8 ) 										{ occupation_its15 = false; occupation_its16 = true;  
train2_its16[0] = train2_its15[0];
train2_its16[1] = train2_its15[1];
train2_its16[2] = train2_its15[2];
train2_its16[3] = train2_its15[3];
train2_its16[4] = train2_its15[4];
train2_its16[5] = train2_its15[5];
train2_its16[6] = train2_its15[6];
sens_its16 = sens_its15;
progression_its15 = 0; 
its15 = 0;
} 

if ( sens_its15 == 3 && progression_its15 == 1 )  			{ document.getElementById("b6").src = "image/point/a1_rose.png";  document.getElementById("b7").src = "image/point/a1_rose.png"; document.getElementById("b8").src = "image/point/a1_droite_rose.png"; }
if ( sens_its15 == 3 && progression_its15 == 2 )  			{ document.getElementById("b7").src = "image/point/a1_rose.png";  document.getElementById("b8").src = "image/point/a1_rose.png"; document.getElementById("b9").src = "image/point/a1_droite_rose.png"; }
if ( sens_its15 == 3 && progression_its15 == 3 )  			{ document.getElementById("b8").src = "image/point/a1_rose.png";  document.getElementById("b9").src = "image/point/a1_rose.png"; document.getElementById("b10").src = "image/point/a1_droite_rose.png";  }
if ( sens_its15 == 3 && progression_its15 == 4 )  			{ document.getElementById("b9").src = "image/point/a1_rose.png";  document.getElementById("b10").src = "image/point/a1_rose.png"; document.getElementById("b11").src = "image/point/a1_droite_rose.png"; }
if ( sens_its15 == 3 && progression_its15 == 5 )  			{ document.getElementById("b10").src = "image/point/a1_rose.png";  document.getElementById("b11").src = "image/point/a1_rose.png"; document.getElementById("b12").src = "image/point/a1_droite_rose.png"; }
if ( sens_its15 == 3 && progression_its15 == 6 )  			{ document.getElementById("b11").src = "image/point/a1_rose.png";  document.getElementById("b12").src = "image/point/a1_rose.png"; document.getElementById("b13").src = "image/point/a1_droite_rose.png";  }
if ( sens_its15 == 3 && progression_its15 == 7 )  			{ document.getElementById("b12").src = "image/point/a1_rose.png";  document.getElementById("b13").src = "image/point/a1_rose.png"; document.getElementById("b14").src = "image/point/a1_droite_rose.png"; }
if ( sens_its15 == 3 && progression_its15 == 8 )  			{  document.getElementById("b13").src = "image/point/a1_rose.png";  document.getElementById("b14").src = "image/point/a1_rose.png"; document.getElementById("b15").src = "image/point/a1_droite_rose.png"; }

// its16 

if (sens_its16 == 3 && occupation_its16) 											{ progression_its16 = progression_its16 + 1;}
if (sens_its16 == 3 && aiguille82 == 0 && progression_its16 > 4 ) 					{ occupation_its16 = false; occupation_its111 = true;  
train2_its111[0] = train2_its16[0];
train2_its111[1] = train2_its16[1];
train2_its111[2] = train2_its16[2];
train2_its111[3] = train2_its16[3];
train2_its111[4] = train2_its16[4];
train2_its111[5] = train2_its16[5];
train2_its111[6] = train2_its16[6];
sens_its111 = sens_its16;
progression_its16 = 0; 
aiguille82 = 0;
its16 = 0;
} 

if (sens_its16 == 3 && aiguille82 == 1 && aiguille97 == 0 && progression_its16 > 9 ) 					{ occupation_its16 = false; occupation_its102 = true;  
train2_its102[0] = train2_its16[0];
train2_its102[1] = train2_its16[1];
train2_its102[2] = train2_its16[2];
train2_its102[3] = train2_its16[3];
train2_its102[4] = train2_its16[4];
train2_its102[5] = train2_its16[5];
train2_its102[6] = train2_its16[6];
sens_its102 = sens_its16;
progression_its16 = 0; 
its16 = 0; its82 = 0; its101 = 0;
aiguille82 = 0;
} 

if (sens_its16 == 3 && aiguille82 == 1 && aiguille97 == 1 && progression_its16 > 17 ) 					{ occupation_its16 = false; occupation_its8 = true;  
train2_its8[0] = train2_its16[0];
train2_its8[1] = train2_its16[1];
train2_its8[2] = train2_its16[2];
train2_its8[3] = train2_its16[3];
train2_its8[4] = train2_its16[4];
train2_its8[5] = train2_its16[5];
train2_its8[6] = train2_its16[6];
sens_its8 = sens_its16;
progression_its16 = 0; 
aiguille82 = 0;
aiguille97 = 0;
its16 = 0; its82 = 0; its101 = 0; its97 = 0; its2 = 0; its23 = 0;
} 

if (sens_its16 == 3 && aiguille82 == 0 && occupation_its16 ) 	{
if ( sens_its16 == 3 && progression_its16 == 1 )  			{ document.getElementById("b14").src = "image/point/a1_rose.png";  document.getElementById("b15").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 2 )  			{ document.getElementById("b15").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 3 )  			{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_droite_rose.png";  }
if ( sens_its16 == 3 && progression_its16 == 4 )  			{  document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_droite_rose.png"; }

}
if (sens_its16 == 3 && aiguille82 == 1 && aiguille97 == 0 && occupation_its16 ) 	{
if ( sens_its16 == 3 && progression_its16 == 1 )  			{ document.getElementById("b14").src = "image/point/a1_rose.png";  document.getElementById("b15").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 2 )  			{ document.getElementById("b15").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 3 )  			{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_droite_rose.png";  }
if ( sens_its16 == 3 && progression_its16 == 4 )  			{ document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 5 )  			{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("f2").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 6 )  			{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("f2").src = "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 7 )  			{ document.getElementById("f2").src = "image/point/a1_rose.png";  document.getElementById("f1").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_droite_rose.png";  }
if ( sens_its16 == 3 && progression_its16 == 8 )  			{ document.getElementById("f1").src = "image/point/a1_rose.png";  document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 9 )  			{ document.getElementById("x21").src = "image/point/a1_rose.png";  document.getElementById("x22").src = "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_droite_rose.png"; }
}

if (sens_its16 == 3 && aiguille82 == 1 && aiguille97 == 1 && occupation_its16 ) 	{
	
if ( sens_its16 == 3 && progression_its16 == 1 )  			{ document.getElementById("b14").src = "image/point/a1_rose.png";  document.getElementById("b15").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 2 )  			{ document.getElementById("b15").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 3 )  			{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_droite_rose.png";  }
if ( sens_its16 == 3 && progression_its16 == 4 )  			{ document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 5 )  			{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("f2").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 6 )  			{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("f2").src = "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 7 )  			{ document.getElementById("f2").src = "image/point/a1_rose.png";  document.getElementById("f1").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_droite_rose.png";  }
if ( sens_its16 == 3 && progression_its16 == 8 )  			{ document.getElementById("f1").src = "image/point/a1_rose.png";  document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 9 )  			{ document.getElementById("x21").src = "image/point/a1_rose.png";  document.getElementById("x22").src = "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 10 )  			{ document.getElementById("x22").src = "image/point/a1_rose.png";  document.getElementById("x23").src = "image/point/a1_rose.png"; document.getElementById("f81").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 11 )  			{ document.getElementById("x23").src = "image/point/a1_rose.png";  document.getElementById("f81").src = "image/point/a1_rose.png"; document.getElementById("f80").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 12 )  			{ document.getElementById("f81").src = "image/point/a1_rose.png";  document.getElementById("f80").src = "image/point/a1_rose.png"; document.getElementById("a26").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 13 )  			{ document.getElementById("f80").src = "image/point/a1_rose.png";  document.getElementById("a26").src = "image/point/a1_rose.png"; document.getElementById("a27").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 14 )  			{ document.getElementById("a26").src = "image/point/a1_rose.png";  document.getElementById("a27").src = "image/point/a1_rose.png"; document.getElementById("a28").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 15 )  			{ document.getElementById("a27").src = "image/point/a1_rose.png";  document.getElementById("a28").src = "image/point/a1_rose.png"; document.getElementById("a29").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 16 )  			{ document.getElementById("a28").src = "image/point/a1_rose.png";  document.getElementById("a29").src = "image/point/a1_rose.png"; document.getElementById("a30").src = "image/point/a1_droite_rose.png"; }
if ( sens_its16 == 3 && progression_its16 == 17 )  			{ document.getElementById("a29").src = "image/point/a1_rose.png";  document.getElementById("a30").src = "image/point/a1_rose.png"; document.getElementById("a31").src = "image/point/a1_droite_rose.png"; }
}
	



// its111

if (sens_its111 == 3 && occupation_its111) 							{ progression_its111 = progression_its111 + 1; }
if (sens_its111 == 3 && progression_its111 > 11 ) 					{ occupation_its111 = false; occupation_its17 = true;  
train2_its17[0] = train2_its111[0];
train2_its17[1] = train2_its111[1];
train2_its17[2] = train2_its111[2];
train2_its17[3] = train2_its111[3];
train2_its17[4] = train2_its111[4];
train2_its17[5] = train2_its111[5];
train2_its17[6] = train2_its111[6];
sens_its17 = sens_its111;
progression_its111 = 0; 
its111 = 0;
} 

if ( sens_its111 == 3 && progression_its111 == 1 )  			{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("b20").src = "image/point/a1_droite_rose.png"; }
if ( sens_its111 == 3 && progression_its111 == 2 )  			{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("b20").src = "image/point/a1_rose.png"; document.getElementById("b21").src = "image/point/a1_droite_rose.png"; }
if ( sens_its111 == 3 && progression_its111 == 3 )  			{ document.getElementById("b20").src = "image/point/a1_rose.png";  document.getElementById("b21").src = "image/point/a1_rose.png"; document.getElementById("b22").src = "image/point/a1_droite_rose.png";  }
if ( sens_its111 == 3 && progression_its111 == 4 )  			{ document.getElementById("b21").src = "image/point/a1_rose.png";  document.getElementById("b22").src = "image/point/a1_rose.png"; document.getElementById("b23").src = "image/point/a1_droite_rose.png"; }
if ( sens_its111 == 3 && progression_its111 == 5 )  			{ document.getElementById("b22").src = "image/point/a1_rose.png";  document.getElementById("b23").src = "image/point/a1_rose.png"; document.getElementById("b24").src = "image/point/a1_droite_rose.png"; }
if ( sens_its111 == 3 && progression_its111 == 6 )  			{ document.getElementById("b23").src = "image/point/a1_rose.png";  document.getElementById("b24").src = "image/point/a1_rose.png"; document.getElementById("b25").src = "image/point/a1_droite_rose.png"; }
if ( sens_its111 == 3 && progression_its111 == 7 )  			{ document.getElementById("b24").src = "image/point/a1_rose.png";  document.getElementById("b25").src = "image/point/a1_rose.png"; document.getElementById("b26").src = "image/point/a1_droite_rose.png";  }
if ( sens_its111 == 3 && progression_its111 == 8 )  			{ document.getElementById("b25").src = "image/point/a1_rose.png";  document.getElementById("b26").src = "image/point/a1_rose.png"; document.getElementById("b27").src = "image/point/a1_droite_rose.png"; }
if ( sens_its111 == 3 && progression_its111 == 9 )  			{ document.getElementById("b26").src = "image/point/a1_rose.png";  document.getElementById("b27").src = "image/point/a1_rose.png"; document.getElementById("b28").src = "image/point/a1_droite_rose.png"; }
if ( sens_its111 == 3 && progression_its111 == 10 )  			{ document.getElementById("b27").src = "image/point/a1_rose.png";  document.getElementById("b28").src = "image/point/a1_rose.png"; document.getElementById("b29").src = "image/point/a1_droite_rose.png"; }
if ( sens_its111 == 3 && progression_its111 == 11 )  			{ document.getElementById("b28").src = "image/point/a1_rose.png";  document.getElementById("b29").src = "image/point/a1_rose.png"; document.getElementById("b30").src = "image/point/a1_droite_rose.png";  }
	
// its17

if (sens_its17 == 3 && occupation_its17 ) 							{ progression_its17 = progression_its17 + 1; }
if (sens_its17 == 3 && progression_its17 > 8 ) 						{ occupation_its17 = false; occupation_its18 = true;  
train2_its18[0] = train2_its17[0];
train2_its18[1] = train2_its17[1];
train2_its18[2] = train2_its17[2];
train2_its18[3] = train2_its17[3];
train2_its18[4] = train2_its17[4];
train2_its18[5] = train2_its17[5];
train2_its18[6] = train2_its17[6];
sens_its18 = sens_its17;
progression_its17 = 0;
its17 = 0;
}

if ( sens_its17 == 3 && progression_its17 == 1 )  			{ document.getElementById("b29").src = "image/point/a1_rose.png";  document.getElementById("b30").src = "image/point/a1_rose.png"; document.getElementById("n1").src = "image/point/a1_droite_rose.png"; }
if ( sens_its17 == 3 && progression_its17 == 2 )  			{ document.getElementById("b30").src = "image/point/a1_rose.png";  document.getElementById("n1").src = "image/point/a1_rose.png"; document.getElementById("n2").src = "image/point/a1_droite_rose.png"; }
if ( sens_its17 == 3 && progression_its17 == 3 )  			{ document.getElementById("n1").src = "image/point/a1_rose.png";  document.getElementById("n2").src = "image/point/a1_rose.png"; document.getElementById("n3").src = "image/point/a1_droite_rose.png";  }
if ( sens_its17 == 3 && progression_its17 == 4 )  			{ document.getElementById("n2").src = "image/point/a1_rose.png";  document.getElementById("n3").src = "image/point/a1_rose.png"; document.getElementById("n4").src = "image/point/a1_droite_rose.png"; }
if ( sens_its17 == 3 && progression_its17 == 5 )  			{ document.getElementById("n3").src = "image/point/a1_rose.png";  document.getElementById("n4").src = "image/point/a1_rose.png"; document.getElementById("n5").src = "image/point/a1_droite_rose.png"; }
if ( sens_its17 == 3 && progression_its17 == 6 )  			{ document.getElementById("n4").src = "image/point/a1_rose.png";  document.getElementById("n5").src = "image/point/a1_rose.png"; document.getElementById("n6").src = "image/point/a1_droite_rose.png"; }
if ( sens_its17 == 3 && progression_its17 == 7 )  			{ document.getElementById("n5").src = "image/point/a1_rose.png";  document.getElementById("n6").src = "image/point/a1_rose.png"; document.getElementById("n7").src = "image/point/a1_droite_rose.png";  }
if ( sens_its17 == 3 && progression_its17 == 8 )  			{ document.getElementById("n6").src = "image/point/a1_rose.png";  document.getElementById("n7").src = "image/point/a1_rose.png"; document.getElementById("n8").src = "image/point/a1_droite_rose.png"; }




// its8

if ( sens_its8 == 3 && occupation_its8  ) 									{ progression_its8 = progression_its8 + 1;  }
if (sens_its8 == 3 && progression_its8 > 8 ) 								{ occupation_its8 = false; occupation_its4 = true;  
train2_its4[0] = train2_its8[0];
train2_its4[1] = train2_its8[1];
train2_its4[2] = train2_its8[2];
train2_its4[3] = train2_its8[3];
train2_its4[4] = train2_its8[4];
train2_its4[5] = train2_its8[5];
train2_its4[6] = train2_its8[6];
sens_its4 = sens_its8;
progression_its8 = 0;
its8 = 0;
}


if ( sens_its8 == 3 && progression_its8 == 1 )  			{ document.getElementById("a30").src = "image/point/a1_rose.png";  document.getElementById("a31").src = "image/point/a1_rose.png"; document.getElementById("p1").src = "image/point/a1_droite_rose.png"; }
if ( sens_its8 == 3 && progression_its8 == 2 )  			{ document.getElementById("a31").src = "image/point/a1_rose.png";  document.getElementById("p1").src = "image/point/a1_rose.png"; document.getElementById("p2").src = "image/point/a1_droite_rose.png"; }
if ( sens_its8 == 3 && progression_its8 == 3 )  			{ document.getElementById("p1").src = "image/point/a1_rose.png";  document.getElementById("p2").src = "image/point/a1_rose.png"; document.getElementById("p3").src = "image/point/a1_droite_rose.png";  }
if ( sens_its8 == 3 && progression_its8 == 4 )  			{ document.getElementById("p2").src = "image/point/a1_rose.png";  document.getElementById("p3").src = "image/point/a1_rose.png"; document.getElementById("p4").src = "image/point/a1_droite_rose.png"; }
if ( sens_its8 == 3 && progression_its8 == 5 )  			{ document.getElementById("p3").src = "image/point/a1_rose.png";  document.getElementById("p4").src = "image/point/a1_rose.png"; document.getElementById("p5").src = "image/point/a1_droite_rose.png"; }
if ( sens_its8 == 3 && progression_its8 == 6 )  			{ document.getElementById("p4").src = "image/point/a1_rose.png";  document.getElementById("p5").src = "image/point/a1_rose.png"; document.getElementById("p6").src = "image/point/a1_droite_rose.png"; }
if ( sens_its8 == 3 && progression_its8 == 7 )  			{ document.getElementById("p5").src = "image/point/a1_rose.png";  document.getElementById("p6").src = "image/point/a1_rose.png"; document.getElementById("p7").src = "image/point/a1_droite_rose.png";  }
if ( sens_its8 == 3 && progression_its8 == 8 )  			{ document.getElementById("p6").src = "image/point/a1_rose.png";  document.getElementById("p7").src = "image/point/a1_rose.png"; document.getElementById("p8").src = "image/point/a1_droite_rose.png"; }


// its4

if ( sens_its4 == 3 && occupation_its4  ) 													{ progression_its4 = progression_its4 + 1;  }
if (sens_its4 == 3 && aiguille96 == 1 && aiguille83 == 0 && progression_its4 > 8  ) 		{ occupation_its4 = false; occupation_its105 = true;  
train2_its105[0] = train2_its4[0];
train2_its105[1] = train2_its4[1];
train2_its105[2] = train2_its4[2];
train2_its105[3] = train2_its4[3];
train2_its105[4] = train2_its4[4];
train2_its105[5] = train2_its4[5];
train2_its105[6] = train2_its4[6];
sens_its105 = sens_its4;
progression_its4 = 0;
aiguille96 = 0;
its96 = 0; its104 = 0;
}

if (sens_its4 == 3 && aiguille96 == 1 && aiguille83 == 1 && aiguille84 == 0 && progression_its4 > 15  ) 		{ occupation_its4 = false; occupation_its20 = true;  
train2_its20[0] = train2_its4[0];
train2_its20[1] = train2_its4[1];
train2_its20[2] = train2_its4[2];
train2_its20[3] = train2_its4[3];
train2_its20[4] = train2_its4[4];
train2_its20[5] = train2_its4[5];
train2_its20[6] = train2_its4[6];
sens_its20 = sens_its4;
progression_its4 = 0;
aiguille96 = 0; aiguille83 = 0;
its4 = 0; its96 = 0; its104 = 0;its83 = 0; its19 = 0;
}

if (sens_its4 == 3 && aiguille96 == 1 && aiguille83 == 1 && aiguille84 == 1 && progression_its4 > 19  ) 		{ occupation_its4 = false; occupation_its40 = true;  
train2_its40[0] = train2_its4[0];
train2_its40[1] = train2_its4[1];
train2_its40[2] = train2_its4[2];
train2_its40[3] = train2_its4[3];
train2_its40[4] = train2_its4[4];
train2_its40[5] = train2_its4[5];
train2_its40[6] = train2_its4[6];
sens_its40 = sens_its4;
progression_its4 = 0;
aiguille96 = 0; aiguille83 = 0; aiguille84 = 0;
its4 = 0; its96 = 0; its104 = 0; its83 = 0; its19 = 0; its84 = 0; its39 = 0;
}

if (sens_its4 == 3 && aiguille96 == 1 && occupation_its4  ) 	{
if ( sens_its4 == 3 && progression_its4 == 1 )  				{ document.getElementById("p7").src = "image/point/a1_rose.png";  document.getElementById("p8").src = "image/point/a1_rose.png"; document.getElementById("a32").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 2 )  				{ document.getElementById("p8").src = "image/point/a1_rose.png";  document.getElementById("a32").src = "image/point/a1_rose.png"; document.getElementById("a33").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 3 )  				{ document.getElementById("a32").src = "image/point/a1_rose.png";  document.getElementById("a33").src = "image/point/a1_rose.png"; document.getElementById("a34").src = "image/point/a1_droite_rose.png";  }
if ( sens_its4 == 3 && progression_its4 == 4 )  				{ document.getElementById("a33").src = "image/point/a1_rose.png";  document.getElementById("a34").src = "image/point/a1_rose.png"; document.getElementById("a35").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 5 )  				{ document.getElementById("a34").src = "image/point/a1_rose.png";  document.getElementById("a35").src = "image/point/a1_rose.png"; document.getElementById("f50").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 6 )  				{ document.getElementById("a35").src = "image/point/a1_rose.png";  document.getElementById("f50").src = "image/point/a1_rose.png"; document.getElementById("f51").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 7 )  				{ document.getElementById("f50").src = "image/point/a1_rose.png";  document.getElementById("f51").src = "image/point/a1_rose.png"; document.getElementById("x37").src = "image/point/a1_droite_rose.png";  }
if ( sens_its4 == 3 && progression_its4 == 8 )  				{ document.getElementById("f51").src = "image/point/a1_rose.png";  document.getElementById("x37").src = "image/point/a1_rose.png"; document.getElementById("x38").src = "image/point/a1_droite_rose.png"; }
}

if (sens_its4 == 3 && aiguille96 == 1 && aiguille83 == 1 && aiguille84 == 0 && occupation_its4  ) 	{
if ( sens_its4 == 3 && progression_its4 == 1 )  				{ document.getElementById("p7").src = "image/point/a1_rose.png";  document.getElementById("p8").src = "image/point/a1_rose.png"; document.getElementById("a32").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 2 )  				{ document.getElementById("p8").src = "image/point/a1_rose.png";  document.getElementById("a32").src = "image/point/a1_rose.png"; document.getElementById("a33").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 3 )  				{ document.getElementById("a32").src = "image/point/a1_rose.png";  document.getElementById("a33").src = "image/point/a1_rose.png"; document.getElementById("a34").src = "image/point/a1_droite_rose.png";  }
if ( sens_its4 == 3 && progression_its4 == 4 )  				{ document.getElementById("a33").src = "image/point/a1_rose.png";  document.getElementById("a34").src = "image/point/a1_rose.png"; document.getElementById("a35").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 5 )  				{ document.getElementById("a34").src = "image/point/a1_rose.png";  document.getElementById("a35").src = "image/point/a1_rose.png"; document.getElementById("f50").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 6 )  				{ document.getElementById("a35").src = "image/point/a1_rose.png";  document.getElementById("f50").src = "image/point/a1_rose.png"; document.getElementById("f51").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 7 )  				{ document.getElementById("f50").src = "image/point/a1_rose.png";  document.getElementById("f51").src = "image/point/a1_rose.png"; document.getElementById("x37").src = "image/point/a1_droite_rose.png";  }
if ( sens_its4 == 3 && progression_its4 == 8 )  				{ document.getElementById("f51").src = "image/point/a1_rose.png";  document.getElementById("x37").src = "image/point/a1_rose.png"; document.getElementById("x38").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 9 )  				{ document.getElementById("x37").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("f7").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 10 )  				{ document.getElementById("x38").src = "image/point/a1_rose.png";  document.getElementById("f7").src = "image/point/a1_rose.png"; document.getElementById("f8").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 11 )  				{ document.getElementById("f7").src = "image/point/a1_rose.png";  document.getElementById("f8").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 12 )  				{ document.getElementById("f8").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 13 )  				{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 14 )  				{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 15 )  				{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_droite_rose.png"; }
}
if ( sens_its4 == 3 && aiguille96 == 1 && aiguille83 == 1 && aiguille84 == 1 && occupation_its4  ) 	{
if ( sens_its4 == 3 && progression_its4 == 1 )  				{ document.getElementById("p7").src = "image/point/a1_rose.png";  document.getElementById("p8").src = "image/point/a1_rose.png"; document.getElementById("a32").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 2 )  				{ document.getElementById("p8").src = "image/point/a1_rose.png";  document.getElementById("a32").src = "image/point/a1_rose.png"; document.getElementById("a33").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 3 )  				{ document.getElementById("a32").src = "image/point/a1_rose.png";  document.getElementById("a33").src = "image/point/a1_rose.png"; document.getElementById("a34").src = "image/point/a1_droite_rose.png";  }
if ( sens_its4 == 3 && progression_its4 == 4 )  				{ document.getElementById("a33").src = "image/point/a1_rose.png";  document.getElementById("a34").src = "image/point/a1_rose.png"; document.getElementById("a35").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 5 )  				{ document.getElementById("a34").src = "image/point/a1_rose.png";  document.getElementById("a35").src = "image/point/a1_rose.png"; document.getElementById("f50").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 6 )  				{ document.getElementById("a35").src = "image/point/a1_rose.png";  document.getElementById("f50").src = "image/point/a1_rose.png"; document.getElementById("f51").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 7 )  				{ document.getElementById("f50").src = "image/point/a1_rose.png";  document.getElementById("f51").src = "image/point/a1_rose.png"; document.getElementById("x37").src = "image/point/a1_droite_rose.png";  }
if ( sens_its4 == 3 && progression_its4 == 8 )  				{ document.getElementById("f51").src = "image/point/a1_rose.png";  document.getElementById("x37").src = "image/point/a1_rose.png"; document.getElementById("x38").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 9 )  				{ document.getElementById("x37").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("f7").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 10 )  				{ document.getElementById("x38").src = "image/point/a1_rose.png";  document.getElementById("f7").src = "image/point/a1_rose.png"; document.getElementById("f8").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 11 )  				{ document.getElementById("f7").src = "image/point/a1_rose.png";  document.getElementById("f8").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 12 )  				{ document.getElementById("f8").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 13 )  				{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 14 )  				{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 15 )  				{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 16 )  				{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b45").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 17 )  				{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b45").src = "image/point/a1_rose.png"; document.getElementById("f9").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 18 )  				{ document.getElementById("b45").src = "image/point/a1_rose.png";  document.getElementById("f9").src = "image/point/a1_rose.png"; document.getElementById("f10").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 19 )  				{ document.getElementById("f9").src = "image/point/a1_rose.png";  document.getElementById("f10").src = "image/point/a1_rose.png"; document.getElementById("c47").src = "image/point/a1_droite_rose.png"; }
if ( sens_its4 == 3 && progression_its4 == 20 )  				{ document.getElementById("f10").src = "image/point/a1_rose.png";  document.getElementById("c47").src = "image/point/a1_rose.png"; document.getElementById("c48").src = "image/point/a1_droite_rose.png"; }
}



// its102

if (sens_its102 == 3 && occupation_its102 ) 			{ progression_its102 = progression_its102 + 1;  }
if (sens_its102 == 3 && progression_its102 > 7 ) 		{ occupation_its102 = false; occupation_its117 = true;  
train2_its117[0] = train2_its102[0];
train2_its117[1] = train2_its102[1];
train2_its117[2] = train2_its102[2];
train2_its117[3] = train2_its102[3];
train2_its117[4] = train2_its102[4];
train2_its117[5] = train2_its102[5];
train2_its117[6] = train2_its102[6];
sens_its117 = sens_its102;
progression_its102 = 0;
its102 = 0;
its101 = 0; 
document.getElementById("z23").src = "image/feux/rouge_2.png";
}

if ( sens_its102 == 3 && progression_its102 == 1 )  			{ document.getElementById("x22").src = "image/point/a1_rose.png";  document.getElementById("x23").src = "image/point/a1_rose.png"; document.getElementById("x24").src = "image/point/a1_droite_rose.png"; }
if ( sens_its102 == 3 && progression_its102 == 2 )  			{ document.getElementById("x23").src = "image/point/a1_rose.png";  document.getElementById("x24").src = "image/point/a1_rose.png"; document.getElementById("x25").src = "image/point/a1_droite_rose.png"; }
if ( sens_its102 == 3 && progression_its102 == 3 )  			{ document.getElementById("x24").src = "image/point/a1_rose.png";  document.getElementById("x25").src = "image/point/a1_rose.png"; document.getElementById("x26").src = "image/point/a1_droite_rose.png"; }
if ( sens_its102 == 3 && progression_its102 == 4 )  			{ document.getElementById("x25").src = "image/point/a1_rose.png";  document.getElementById("x26").src = "image/point/a1_rose.png"; document.getElementById("x27").src = "image/point/a1_droite_rose.png"; }
if ( sens_its102 == 3 && progression_its102 == 5 )  			{ document.getElementById("x26").src = "image/point/a1_rose.png";  document.getElementById("x27").src = "image/point/a1_rose.png"; document.getElementById("x28").src = "image/point/a1_droite_rose.png"; }
if ( sens_its102 == 3 && progression_its102 == 6 )  			{ document.getElementById("x27").src = "image/point/a1_rose.png";  document.getElementById("x28").src = "image/point/a1_rose.png"; document.getElementById("x29").src = "image/point/a1_droite_rose.png"; }
if ( sens_its102 == 3 && progression_its102 == 7 )  			{ document.getElementById("x28").src = "image/point/a1_rose.png";  document.getElementById("x29").src = "image/point/a1_rose.png"; document.getElementById("x30").src = "image/point/a1_droite_rose.png"; }




// its117

if (sens_its117 == 3 && occupation_its117 ) 								{ progression_its117 = progression_its117 + 1; }
if (sens_its117 == 3 && progression_its117 > 8 ) 							{ occupation_its117 = false; occupation_its103 = true;  
train2_its103[0] = train2_its117[0];
train2_its103[1] = train2_its117[1];
train2_its103[2] = train2_its117[2];
train2_its103[3] = train2_its117[3];
train2_its103[4] = train2_its117[4];
train2_its103[5] = train2_its117[5];
train2_its103[6] = train2_its117[6];
sens_its103 = sens_its117;
progression_its117 = 0;
its117 = 0;
}

if ( sens_its117 == 3 && progression_its117 == 1 )  			{ document.getElementById("x29").src = "image/point/a1_rose.png";  document.getElementById("x30").src = "image/point/a1_rose.png"; document.getElementById("o1").src = "image/point/a1_droite_rose.png"; }
if ( sens_its117 == 3 && progression_its117 == 2 )  			{ document.getElementById("x30").src = "image/point/a1_rose.png";  document.getElementById("o1").src = "image/point/a1_rose.png"; document.getElementById("o2").src = "image/point/a1_droite_rose.png"; }
if ( sens_its117 == 3 && progression_its117 == 3 )  			{ document.getElementById("o1").src = "image/point/a1_rose.png";  document.getElementById("o2").src = "image/point/a1_rose.png"; document.getElementById("o3").src = "image/point/a1_droite_rose.png";  }
if ( sens_its117 == 3 && progression_its117 == 4 )  			{ document.getElementById("o2").src = "image/point/a1_rose.png";  document.getElementById("o3").src = "image/point/a1_rose.png"; document.getElementById("o4").src = "image/point/a1_droite_rose.png"; }
if ( sens_its117 == 3 && progression_its117 == 5 )  			{ document.getElementById("o3").src = "image/point/a1_rose.png";  document.getElementById("o4").src = "image/point/a1_rose.png"; document.getElementById("o5").src = "image/point/a1_droite_rose.png"; }
if ( sens_its117 == 3 && progression_its117 == 6 )  			{ document.getElementById("o4").src = "image/point/a1_rose.png";  document.getElementById("o5").src = "image/point/a1_rose.png"; document.getElementById("o6").src = "image/point/a1_droite_rose.png"; }
if ( sens_its117 == 3 && progression_its117 == 7 )  			{ document.getElementById("o5").src = "image/point/a1_rose.png";  document.getElementById("o6").src = "image/point/a1_rose.png"; document.getElementById("o7").src = "image/point/a1_droite_rose.png";  }
if ( sens_its117 == 3 && progression_its117 == 8 )  			{ document.getElementById("o6").src = "image/point/a1_rose.png";  document.getElementById("o7").src = "image/point/a1_rose.png"; document.getElementById("o8").src = "image/point/a1_droite_rose.png"; }

// its103

if (sens_its103 == 3 && occupation_its103 ) 			{ progression_its103 = progression_its103 + 1; }
if (sens_its103 == 3 && progression_its103 > 5 ) 		{ occupation_its103 = false; occupation_its104 = true;  
train2_its104[0] = train2_its103[0];
train2_its104[1] = train2_its103[1];
train2_its104[2] = train2_its103[2];
train2_its104[3] = train2_its103[3];
train2_its104[4] = train2_its103[4];
train2_its104[5] = train2_its103[5];
train2_its104[6] = train2_its103[6];
sens_its104 = sens_its103;
progression_its103 = 0;
its103 = 0;
}

if ( sens_its103 == 3 && progression_its103 == 1 )  			{ document.getElementById("o7").src = "image/point/a1_rose.png";  document.getElementById("o8").src = "image/point/a1_rose.png"; document.getElementById("x32").src = "image/point/a1_droite_rose.png"; }
if ( sens_its103 == 3 && progression_its103 == 2 )  			{ document.getElementById("o8").src = "image/point/a1_rose.png";  document.getElementById("x32").src = "image/point/a1_rose.png"; document.getElementById("x33").src = "image/point/a1_droite_rose.png"; }
if ( sens_its103 == 3 && progression_its103 == 3 )  			{ document.getElementById("x32").src = "image/point/a1_rose.png";  document.getElementById("x33").src = "image/point/a1_rose.png"; document.getElementById("x34").src = "image/point/a1_droite_rose.png";  }
if ( sens_its103 == 3 && progression_its103 == 4 )  			{ document.getElementById("x33").src = "image/point/a1_rose.png";  document.getElementById("x34").src = "image/point/a1_rose.png"; document.getElementById("x35").src = "image/point/a1_droite_rose.png"; }
if ( sens_its103 == 3 && progression_its103 == 5 )  			{ document.getElementById("x34").src = "image/point/a1_rose.png";  document.getElementById("x35").src = "image/point/a1_rose.png"; document.getElementById("x36").src = "image/point/a1_droite_rose.png"; }

// its104

if (sens_its104 == 3 && occupation_its104 ) 								{ progression_its104 = progression_its104 + 1; }
if (sens_its104 == 3 && aiguille83 == 0 && progression_its104 > 2 ) 		{ occupation_its104 = false; occupation_its105 = true;  
train2_its105[0] = train2_its104[0];
train2_its105[1] = train2_its104[1];
train2_its105[2] = train2_its104[2];
train2_its105[3] = train2_its104[3];
train2_its105[4] = train2_its104[4];
train2_its105[5] = train2_its104[5];
train2_its105[6] = train2_its104[6];
sens_its105 = sens_its104;
progression_its104 = 0;
its104 = 0;
}

if ( sens_its104 == 3 && occupation_its104 && aiguille83 == 0  ) 	{
if ( sens_its104 == 3 && progression_its104 == 1 )  				{ document.getElementById("x35").src = "image/point/a1_rose.png";  document.getElementById("x36").src = "image/point/a1_rose.png"; document.getElementById("x37").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 2 )  				{ document.getElementById("x36").src = "image/point/a1_rose.png";  document.getElementById("x37").src = "image/point/a1_rose.png"; document.getElementById("x38").src = "image/point/a1_droite_rose.png"; }
}


if (sens_its104 == 3 && aiguille83 == 1 && aiguille84 == 0 && progression_its104 > 8 ) 		{ occupation_its104 = false; occupation_its20 = true;  
train2_its20[0] = train2_its104[0];
train2_its20[1] = train2_its104[1];
train2_its20[2] = train2_its104[2];
train2_its20[3] = train2_its104[3];
train2_its20[4] = train2_its104[4];
train2_its20[5] = train2_its104[5];
train2_its20[6] = train2_its104[6];
sens_its20 = sens_its104;
progression_its104 = 0;
aiguille83 = 0;
its104 = 0; its83 = 0; its19 = 0;
}

if ( sens_its104 == 3 && occupation_its104 && aiguille83 == 1 && aiguille84 == 0 ) {
if ( sens_its104 == 3 && progression_its104 == 1 )  			{ document.getElementById("x37").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("f7").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 2 )  			{ document.getElementById("x38").src = "image/point/a1_rose.png";  document.getElementById("f7").src = "image/point/a1_rose.png"; document.getElementById("f8").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 3 )  			{ document.getElementById("f7").src = "image/point/a1_rose.png";  document.getElementById("f8").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 4 )  			{ document.getElementById("f8").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 5 )  			{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 6 )  			{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 7 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 8 )  			{  document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b45").src = "image/point/a1_droite_rose.png"; }
}

if (sens_its104 == 3 && aiguille83 == 1 && aiguille84 == 1 && progression_its104 > 12 ) 		{ occupation_its104 = false; occupation_its40 = true;  
train2_its40[0] = train2_its104[0];
train2_its40[1] = train2_its104[1];
train2_its40[2] = train2_its104[2];
train2_its40[3] = train2_its104[3];
train2_its40[4] = train2_its104[4];
train2_its40[5] = train2_its104[5];
train2_its40[6] = train2_its104[6];
sens_its40 = sens_its104;
progression_its104 = 0;
aiguille83 = 0;
aiguille84 = 0;
its104 = 0; its83 = 0; its19 = 0; its84 = 0; its39 = 0; 
}

if ( sens_its104 == 3 && occupation_its104 && aiguille83 == 1 && aiguille84 == 1 ) {
if ( sens_its104 == 3 && progression_its104 == 1 )  			{ document.getElementById("x37").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("f7").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 2 )  			{ document.getElementById("x38").src = "image/point/a1_rose.png";  document.getElementById("f7").src = "image/point/a1_rose.png"; document.getElementById("f8").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 3 )  			{ document.getElementById("f7").src = "image/point/a1_rose.png";  document.getElementById("f8").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 4 )  			{ document.getElementById("f8").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 5 )  			{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 6 )  			{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 7 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 8 )  			{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b45").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 9 )  			{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b45").src = "image/point/a1_rose.png"; document.getElementById("f9").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 10 )  			{ document.getElementById("b45").src = "image/point/a1_rose.png";  document.getElementById("f9").src = "image/point/a1_rose.png"; document.getElementById("f10").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 11 )  			{ document.getElementById("f9").src = "image/point/a1_rose.png";  document.getElementById("f10").src = "image/point/a1_rose.png"; document.getElementById("c47").src = "image/point/a1_droite_rose.png"; }
if ( sens_its104 == 3 && progression_its104 == 12 )  			{ document.getElementById("f10").src = "image/point/a1_rose.png";  document.getElementById("c47").src = "image/point/a1_rose.png"; document.getElementById("c48").src = "image/point/a1_droite_rose.png"; }
}


// its105

if (sens_its105 == 3 && occupation_its105 ) 			{ progression_its105 = progression_its105 + 1; }
if (sens_its105 == 3 && progression_its105 > 7 ) 		{ occupation_its105 = false; occupation_its106 = true;  
train2_its106[0] = train2_its105[0];
train2_its106[1] = train2_its105[1];
train2_its106[2] = train2_its105[2];
train2_its106[3] = train2_its105[3];
train2_its106[4] = train2_its105[4];
train2_its106[5] = train2_its105[5];
train2_its106[6] = train2_its105[6];
sens_its106 = sens_its105;
progression_its105 = 0;
its105 = 0; 
}

if ( sens_its105 == 3 && progression_its105 == 1 )  			{ document.getElementById("x37").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("x39").src = "image/point/a1_droite_rose.png"; }
if ( sens_its105 == 3 && progression_its105 == 2 )  			{ document.getElementById("x38").src = "image/point/a1_rose.png";  document.getElementById("x39").src = "image/point/a1_rose.png"; document.getElementById("x40").src = "image/point/a1_droite_rose.png"; }
if ( sens_its105 == 3 && progression_its105 == 3 )  			{ document.getElementById("x39").src = "image/point/a1_rose.png";  document.getElementById("x40").src = "image/point/a1_rose.png"; document.getElementById("x41").src = "image/point/a1_droite_rose.png"; }
if ( sens_its105 == 3 && progression_its105 == 4 )  			{ document.getElementById("x40").src = "image/point/a1_rose.png";  document.getElementById("x41").src = "image/point/a1_rose.png"; document.getElementById("x42").src = "image/point/a1_droite_rose.png"; }
if ( sens_its105 == 3 && progression_its105 == 5 )  			{ document.getElementById("x41").src = "image/point/a1_rose.png";  document.getElementById("x42").src = "image/point/a1_rose.png"; document.getElementById("x43").src = "image/point/a1_droite_rose.png"; }
if ( sens_its105 == 3 && progression_its105 == 6 )  			{ document.getElementById("x42").src = "image/point/a1_rose.png";  document.getElementById("x43").src = "image/point/a1_rose.png"; document.getElementById("x44").src = "image/point/a1_droite_rose.png"; }
if ( sens_its105 == 3 && progression_its105 == 7 )  			{ document.getElementById("x43").src = "image/point/a1_rose.png";  document.getElementById("x44").src = "image/point/a1_rose.png"; document.getElementById("x45").src = "image/point/a1_droite_rose.png"; }

// its106

if (sens_its106 == 3 && occupation_its106 ) 			{ progression_its106 = progression_its106 + 1; }
if (sens_its106 == 3 && progression_its106 > 2 ) 		{ occupation_its106 = false; occupation_its107 = true;  
train2_its107[0] = train2_its106[0];
train2_its107[1] = train2_its106[1];
train2_its107[2] = train2_its106[2];
train2_its107[3] = train2_its106[3];
train2_its107[4] = train2_its106[4];
train2_its107[5] = train2_its106[5];
train2_its107[6] = train2_its106[6];
sens_its107 = sens_its106;
progression_its106 = 0;
its106 = 0; 
}

if ( sens_its106 == 3 && progression_its106 == 1 )  			{ document.getElementById("x44").src = "image/point/a1_rose.png";  document.getElementById("x45").src = "image/point/a1_rose.png"; document.getElementById("x46").src = "image/point/a1_droite_rose.png"; }
if ( sens_its106 == 3 && progression_its106 == 2 )  			{ document.getElementById("x45").src = "image/point/a1_rose.png";  document.getElementById("x46").src = "image/point/a1_rose.png"; document.getElementById("x47").src = "image/point/a1_droite_rose.png"; }

// its107

if (sens_its107 == 3 && occupation_its107 ) 			{ progression_its107 = progression_its107 + 1; }
if (sens_its107 == 3 && progression_its107 > 11 ) 		{ occupation_its107 = false;  
train2_its107[0] = train2_its107[0];
train2_its107[1] = train2_its107[1];
train2_its107[2] = train2_its107[2];
train2_its107[3] = train2_its107[3];
train2_its107[4] = train2_its107[4];
train2_its107[5] = train2_its107[5];
train2_its107[6] = train2_its107[6];
sens_its107 = sens_its107;
progression_its107 = 11;
its107 = 0;
}

if ( sens_its107 == 3 && progression_its107 == 1 )  			{ document.getElementById("x46").src = "image/point/a1_rose.png";  document.getElementById("x47").src = "image/point/a1_rose.png"; document.getElementById("x48").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 2 )  			{ document.getElementById("x47").src = "image/point/a1_rose.png";  document.getElementById("x48").src = "image/point/a1_rose.png"; document.getElementById("x49").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 3 )  			{ document.getElementById("x48").src = "image/point/a1_rose.png";  document.getElementById("x49").src = "image/point/a1_rose.png"; document.getElementById("x50").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 4 )  			{ document.getElementById("x49").src = "image/point/a1_rose.png";  document.getElementById("x50").src = "image/point/a1_rose.png"; document.getElementById("x51").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 5 )  			{ document.getElementById("x50").src = "image/point/a1_rose.png";  document.getElementById("x51").src = "image/point/a1_rose.png"; document.getElementById("x52").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 6 )  			{ document.getElementById("x51").src = "image/point/a1_rose.png";  document.getElementById("x52").src = "image/point/a1_rose.png"; document.getElementById("x53").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 7 )  			{ document.getElementById("x52").src = "image/point/a1_rose.png";  document.getElementById("x53").src = "image/point/a1_rose.png"; document.getElementById("x54").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 8 )  			{ document.getElementById("x53").src = "image/point/a1_rose.png";  document.getElementById("x54").src = "image/point/a1_rose.png"; document.getElementById("x55").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 9 )  			{ document.getElementById("x54").src = "image/point/a1_rose.png";  document.getElementById("x55").src = "image/point/a1_rose.png"; document.getElementById("x56").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 10 )  			{ document.getElementById("x55").src = "image/point/a1_rose.png";  document.getElementById("x56").src = "image/point/a1_rose.png"; document.getElementById("x57").src = "image/point/a1_droite_rose.png"; }
if ( sens_its107 == 3 && progression_its107 == 11 )  			{  document.getElementById("x56").src = "image/point/a1_rose.png";  document.getElementById("x57").src = "image/point/a1_rose.png"; document.getElementById("x58").src = "image/point/a1_droite_rose.png"; }
 
// its83

if (sens_its83 == 3 && occupation_its83) 				{ progression_its83 = progression_its83 + 1; }
if (sens_its83 == 3 && progression_its83 > 7 ) 			{ occupation_its83 = false; occupation_its84 = true;  
train2_its84[0] = train2_its83[0];
train2_its84[1] = train2_its83[1];
train2_its84[2] = train2_its83[2];
train2_its84[3] = train2_its83[3];
train2_its84[4] = train2_its83[4];
train2_its84[5] = train2_its83[5];
train2_its84[6] = train2_its83[6];
sens_its84 = sens_its83;
progression_its83 = 0; 
its83 = 0; its19 = 0; 
} 

if ( sens_its83 == 3 && progression_its83 == 1 )  			{ document.getElementById("x37").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("f7").src = "image/point/a1_droite_rose.png";}
if ( sens_its83 == 3 && progression_its83 == 2 )  			{ document.getElementById("x38").src = "image/point/a1_rose.png";  document.getElementById("f7").src = "image/point/a1_rose.png"; document.getElementById("f8").src = "image/point/a1_droite_rose.png";}
if ( sens_its83 == 3 && progression_its83 == 3 )  			{ document.getElementById("f7").src = "image/point/a1_rose.png";  document.getElementById("f8").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_droite_rose.png";}
if ( sens_its83 == 3 && progression_its83 == 4 )  			{ document.getElementById("f8").src = "image/point/a1_rose.png";   document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_droite_rose.png";}
if ( sens_its83 == 3 && progression_its83 == 5 )  			{ document.getElementById("b40").src = "image/point/a1_rose.png";   document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_droite_rose.png";}
if ( sens_its83 == 3 && progression_its83 == 6 )  			{ document.getElementById("b41").src = "image/point/a1_rose.png";   document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_droite_rose.png";}
if ( sens_its83 == 3 && progression_its83 == 7 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";   document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_droite_rose.png";}

// its18

if (sens_its18 == 3 && occupation_its18 ) 			{ progression_its18 = progression_its18 + 1; ligne = 18; }
if (sens_its18 == 3 && progression_its18 > 7 ) 		{ occupation_its18 = false; occupation_its121 = true;  

train2_its121[0] = train2_its18[0];
train2_its121[1] = train2_its18[1];
train2_its121[2] = train2_its18[2];
train2_its121[3] = train2_its18[3];
train2_its121[4] = train2_its18[4];
train2_its121[5] = train2_its18[5];
train2_its121[6] = train2_its18[6];
sens_its121 = sens_its18;
progression_its18 = 0;
its18 = 0;
}


if ( sens_its18 == 3 && progression_its18 == 1 )  		{ document.getElementById("n7").src = "image/point/a1_rose.png";  document.getElementById("n8").src = "image/point/a1_rose.png"; document.getElementById("b32").src = "image/point/a1_droite_rose.png";}
if ( sens_its18 == 3 && progression_its18 == 2 )  		{ document.getElementById("n8").src = "image/point/a1_rose.png";  document.getElementById("b32").src = "image/point/a1_rose.png"; document.getElementById("b33").src = "image/point/a1_droite_rose.png";}
if ( sens_its18 == 3 && progression_its18 == 3 )  		{ document.getElementById("n9").src = "image/point/a1_rose.png";  document.getElementById("b32").src = "image/point/a1_rose.png"; document.getElementById("b33").src = "image/point/a1_droite_rose.png";}
if ( sens_its18 == 3 && progression_its18 == 4 )  		{ document.getElementById("b32").src = "image/point/a1_rose.png";  document.getElementById("b33").src = "image/point/a1_rose.png"; document.getElementById("b34").src = "image/point/a1_droite_rose.png";}
if ( sens_its18 == 3 && progression_its18 == 5 )  		{ document.getElementById("b33").src = "image/point/a1_rose.png";  document.getElementById("b34").src = "image/point/a1_rose.png"; document.getElementById("b35").src = "image/point/a1_droite_rose.png";}
if ( sens_its18 == 3 && progression_its18 == 6 )  		{ document.getElementById("b34").src = "image/point/a1_rose.png";  document.getElementById("b35").src = "image/point/a1_rose.png"; document.getElementById("b36").src = "image/point/a1_droite_rose.png";}
if ( sens_its18 == 3 && progression_its18 == 7 )  		{  document.getElementById("b35").src = "image/point/a1_rose.png";  document.getElementById("b36").src = "image/point/a1_rose.png"; document.getElementById("b37").src = "image/point/a1_droite_rose.png";}

// its121

if (sens_its121 == 3 && occupation_its121 ) 				{ progression_its121 = progression_its121 + 1; ligne = 121; }
if (sens_its121 == 3 && progression_its121 > 2 ) 			{ occupation_its121 = false; occupation_its19 = true;  
train2_its19[0] = train2_its121[0];
train2_its19[1] = train2_its121[1];
train2_its19[2] = train2_its121[2];
train2_its19[3] = train2_its121[3];
train2_its19[4] = train2_its121[4];
train2_its19[5] = train2_its121[5];
train2_its19[6] = train2_its121[6];
sens_its19 = sens_its121;
progression_its121 = 0;
its121 = 0;
}


if ( sens_its121 == 3 && progression_its121 == 1 )  	{ document.getElementById("b36").src = "image/point/a1_rose.png";  document.getElementById("b37").src = "image/point/a1_rose.png"; document.getElementById("b38").src = "image/point/a1_droite_rose.png";}
if ( sens_its121 == 3 && progression_its121 == 2 )  	{  document.getElementById("b37").src = "image/point/a1_rose.png";  document.getElementById("b38").src = "image/point/a1_rose.png"; document.getElementById("b39").src = "image/point/a1_droite_rose.png";}

// its19

if (sens_its19 == 3 && occupation_its19 ) 							{ progression_its19 = progression_its19 + 1; }
if (sens_its19 == 3 && aiguille84 == 0 && progression_its19 > 6 ) 	{ occupation_its19 = false; occupation_its20 = true;  
train2_its20[0] = train2_its19[0];
train2_its20[1] = train2_its19[1];
train2_its20[2] = train2_its19[2];
train2_its20[3] = train2_its19[3];
train2_its20[4] = train2_its19[4];
train2_its20[5] = train2_its19[5];
train2_its20[6] = train2_its19[6];
sens_its20 = sens_its19;
progression_its19 = 0;
its19 = 0; 
}

if (sens_its19 == 3 && aiguille84 == 1 && progression_its19 > 10 ) 	{ occupation_its19 = false; occupation_its40 = true;  
train2_its40[0] = train2_its19[0];
train2_its40[1] = train2_its19[1];
train2_its40[2] = train2_its19[2];
train2_its40[3] = train2_its19[3];
train2_its40[4] = train2_its19[4];
train2_its40[5] = train2_its19[5];
train2_its40[6] = train2_its19[6];
sens_its40 = sens_its19;
progression_its19 = 0;
aiguille84 = 0;
its19 = 0; its84 = 0; its39 = 0;
}

if ( sens_its19 == 3 && occupation_its19 && aiguille84 == 0) 	{
if ( sens_its19 == 3 && progression_its19 == 1 )  				{ document.getElementById("b38").src = "image/point/a1_rose.png";  document.getElementById("b39").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 2 )  				{ document.getElementById("b39").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 3 )  				{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 4 )  				{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 5 )  				{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 6 )  				{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b45").src = "image/point/a1_droite_rose.png";}
}
if ( sens_its19 == 3 && occupation_its19 && aiguille84 == 1) 	{
if ( sens_its19 == 3 && progression_its19 == 1 )  				{ document.getElementById("b38").src = "image/point/a1_rose.png";  document.getElementById("b39").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 2 )  				{ document.getElementById("b39").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 3 )  				{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 4 )  				{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 5 )  				{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 6 )  				{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b45").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 7 )  				{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b45").src = "image/point/a1_rose.png"; document.getElementById("f9").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 8 )  				{ document.getElementById("b45").src = "image/point/a1_rose.png";  document.getElementById("f9").src = "image/point/a1_rose.png"; document.getElementById("f10").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 9 )  				{ document.getElementById("f9").src = "image/point/a1_rose.png";   document.getElementById("f10").src = "image/point/a1_rose.png"; document.getElementById("c47").src = "image/point/a1_droite_rose.png";}
if ( sens_its19 == 3 && progression_its19 == 10 )  				{ document.getElementById("f10").src = "image/point/a1_rose.png";  document.getElementById("c47").src = "image/point/a1_rose.png"; document.getElementById("c48").src = "image/point/a1_droite_rose.png";}
}



// its20

if (sens_its20 == 3 && occupation_its20 ) 				{ progression_its20 = progression_its20 + 1; ligne = 20; }
if (sens_its20 == 3 && progression_its20 > 13 ) 		{ occupation_its20 = false; occupation_its21 = true;  
train2_its21[0] = train2_its20[0];
train2_its21[1] = train2_its20[1];
train2_its21[2] = train2_its20[2];
train2_its21[3] = train2_its20[3];
train2_its21[4] = train2_its20[4];
train2_its21[5] = train2_its20[5];
train2_its21[6] = train2_its20[6];
sens_its21 = sens_its20;
progression_its20 = 0;
aiguille83 = 0;
its20 = 0; 
}


if ( sens_its20 == 3 && progression_its20 == 1 )  		{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b45").src = "image/point/a1_rose.png"; document.getElementById("b46").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 2 )  		{ document.getElementById("b45").src = "image/point/a1_rose.png";  document.getElementById("b46").src = "image/point/a1_rose.png"; document.getElementById("b47").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 3 )  		{ document.getElementById("b46").src = "image/point/a1_rose.png";  document.getElementById("b47").src = "image/point/a1_rose.png"; document.getElementById("b48").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 4 )  		{ document.getElementById("b47").src = "image/point/a1_rose.png";  document.getElementById("b48").src = "image/point/a1_rose.png"; document.getElementById("b49").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 5 )  		{ document.getElementById("b48").src = "image/point/a1_rose.png";  document.getElementById("b49").src = "image/point/a1_rose.png"; document.getElementById("b50").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 6 )  		{ document.getElementById("b49").src = "image/point/a1_rose.png";  document.getElementById("b50").src = "image/point/a1_rose.png"; document.getElementById("b51").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 7 )  		{ document.getElementById("b50").src = "image/point/a1_rose.png";  document.getElementById("b51").src = "image/point/a1_rose.png"; document.getElementById("b52").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 8 )  		{ document.getElementById("b51").src = "image/point/a1_rose.png";  document.getElementById("b52").src = "image/point/a1_rose.png"; document.getElementById("b53").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 9 )  		{ document.getElementById("b52").src = "image/point/a1_rose.png";  document.getElementById("b53").src = "image/point/a1_rose.png"; document.getElementById("b54").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 10 )  		{ document.getElementById("b53").src = "image/point/a1_rose.png";  document.getElementById("b54").src = "image/point/a1_rose.png"; document.getElementById("b55").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 11 )  		{ document.getElementById("b54").src = "image/point/a1_rose.png";  document.getElementById("b55").src = "image/point/a1_rose.png"; document.getElementById("b56").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 12 )  		{ document.getElementById("b55").src = "image/point/a1_rose.png";  document.getElementById("b56").src = "image/point/a1_rose.png"; document.getElementById("b57").src = "image/point/a1_droite_rose.png";}
if ( sens_its20 == 3 && progression_its20 == 13 )  		{ document.getElementById("b56").src = "image/point/a1_rose.png";  document.getElementById("b57").src = "image/point/a1_rose.png"; document.getElementById("b58").src = "image/point/a1_droite_rose.png";}





// its21

if (sens_its21 == 3 && occupation_its21 ) 				{ progression_its21 = progression_its21 + 1; ligne = 21; }
if (sens_its21 == 3 && progression_its21 > 4 ) 			{ occupation_its21 = false; occupation_its22 = true;  
train2_its22[0] = train2_its21[0];
train2_its22[1] = train2_its21[1];
train2_its22[2] = train2_its21[2];
train2_its22[3] = train2_its21[3];
train2_its22[4] = train2_its21[4];
train2_its22[5] = train2_its21[5];
train2_its22[6] = train2_its21[6];
sens_its22 = sens_its21;
progression_its21 = 0;
its21 = 0; 
document.getElementById("z18").src = "image/feux/rouge_2.png";
}

if ( sens_its21 == 3 && progression_its21 == 1 )  		{ document.getElementById("b57").src = "image/point/a1_rose.png";  document.getElementById("b58").src = "image/point/a1_rose.png"; document.getElementById("b59").src = "image/point/a1_droite_rose.png";}
if ( sens_its21 == 3 && progression_its21 == 2 )  		{ document.getElementById("b58").src = "image/point/a1_rose.png";  document.getElementById("b59").src = "image/point/a1_rose.png"; document.getElementById("b60").src = "image/point/a1_droite_rose.png";}
if ( sens_its21 == 3 && progression_its21 == 3 )  		{ document.getElementById("b59").src = "image/point/a1_rose.png";  document.getElementById("b60").src = "image/point/a1_rose.png"; document.getElementById("b61").src = "image/point/a1_droite_rose.png";}
if ( sens_its21 == 3 && progression_its21 == 4 )  		{ document.getElementById("b60").src = "image/point/a1_rose.png";  document.getElementById("b61").src = "image/point/a1_rose.png"; document.getElementById("b62").src = "image/point/a1_droite_rose.png";}

// its22

if (sens_its22 == 3 && occupation_its22 ) 							{ progression_its22 = progression_its22 + 1; ligne = 22; }
if (sens_its22 == 3 && progression_its22 > 6 ) 						{ occupation_its22 = false;  
progression_its22 = 0;
its22 = 0; document.getElementById("z18").src = "image/feux/rouge_2.png";
}

if ( sens_its22 == 3 && progression_its22 == 1 )  		{ document.getElementById("b61").src = "image/point/a1_rose.png";  document.getElementById("b62").src = "image/point/a1_rose.png"; document.getElementById("b63").src = "image/point/a1_droite_rose.png";}
if ( sens_its22 == 3 && progression_its22 == 2 )  		{ document.getElementById("b62").src = "image/point/a1_rose.png";  document.getElementById("b63").src = "image/point/a1_rose.png"; document.getElementById("b64").src = "image/point/a1_droite_rose.png";}
if ( sens_its22 == 3 && progression_its22 == 3 )  		{ document.getElementById("b63").src = "image/point/a1_rose.png";  document.getElementById("b64").src = "image/point/a1_rose.png"; document.getElementById("b65").src = "image/point/a1_droite_rose.png";}
if ( sens_its22 == 3 && progression_its22 == 4 )  		{ document.getElementById("b64").src = "image/point/a1_rose.png";  document.getElementById("b65").src = "image/point/a1_rose.png"; document.getElementById("b66").src = "image/point/a1_droite_rose.png";}
if ( sens_its22 == 3 && progression_its22 == 5 )  		{ document.getElementById("b65").src = "image/point/a1_rose.png";  document.getElementById("b66").src = "image/point/a1_rose.png"; }
if ( sens_its22 == 3 && progression_its22 == 6 )  		{ document.getElementById("b66").src = "image/point/a1_droite_rose.png";  }


// its131

if (sens_its131 == 3 && occupation_its131 ) 				{ progression_its131 = progression_its131 + 1; }
if (sens_its131 == 3 && progression_its131 > 2 ) 			{ occupation_its131 = false; occupation_its33 = true;  
train2_its33[0] = train2_its131[0];
train2_its33[1] = train2_its131[1];
train2_its33[2] = train2_its131[2];
train2_its33[3] = train2_its131[3];
train2_its33[4] = train2_its131[4];
train2_its33[5] = train2_its131[5];
train2_its33[6] = train2_its131[6];
sens_its33 = sens_its131;
progression_its131 = 0;
its131 = 0; 
}

if ( sens_its131 == 3 && progression_its131 == 1 )  		{ document.getElementById("c11").src = "image/point/a1_rose.png";  document.getElementById("c12").src = "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_droite_rose.png";}
if ( sens_its131 == 3 && progression_its131 == 2 )  		{ document.getElementById("c12").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_droite_rose.png";}


// its33

if (sens_its33 == 3 && occupation_its33 ) 									{ progression_its33 = progression_its33 + 1; }
if (sens_its33 == 3 && aiguille81 == 0 && progression_its33 > 4 ) 			{ occupation_its33 = false; occupation_its34 = true;  
train2_its34[0] = train2_its33[0];
train2_its34[1] = train2_its33[1];
train2_its34[2] = train2_its33[2];
train2_its34[3] = train2_its33[3];
train2_its34[4] = train2_its33[4];
train2_its34[5] = train2_its33[5];
train2_its34[6] = train2_its33[6];
sens_its34 = sens_its33;
progression_its33 = 0;
its33 = 0;
}

if (sens_its33 == 3 && aiguille81 == 1 && aiguille93 == 0 && progression_its33 > 10 ) 			{ occupation_its33 = false; occupation_its55 = true;  
train2_its55[0] = train2_its33[0];
train2_its55[1] = train2_its33[1];
train2_its55[2] = train2_its33[2];
train2_its55[3] = train2_its33[3];
train2_its55[4] = train2_its33[4];
train2_its55[5] = train2_its33[5];
train2_its55[6] = train2_its33[6];
sens_its55= sens_its33;
progression_its33 = 0;
aiguille81 = 0;
its33 = 0; its81 = 0; its54 = 0; 
}

if (sens_its33 == 3 && aiguille81 == 1 && aiguille93 == 1 && progression_its33 > 19 ) 			{ occupation_its33 = false; occupation_its120 = true;  
train2_its120[0] = train2_its33[0];
train2_its120[1] = train2_its33[1];
train2_its120[2] = train2_its33[2];
train2_its120[3] = train2_its33[3];
train2_its120[4] = train2_its33[4];
train2_its120[5] = train2_its33[5];
train2_its120[6] = train2_its33[6];
sens_its120 = sens_its33;
progression_its33 = 0;
aiguille81 = 0;
aiguille93 = 0;
its33 = 0; its81 = 0; its54 = 0; its93 = 0; its73 = 0; 
}


if (sens_its33 == 3 && aiguille81 == 0 && occupation_its33 ) {
if ( sens_its33 == 3 && progression_its33 == 1 )  		{ document.getElementById("c13").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c15").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 2 )  		{ document.getElementById("c14").src = "image/point/a1_rose.png";  document.getElementById("c15").src = "image/point/a1_rose.png"; document.getElementById("c16").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 3 )  		{ document.getElementById("c15").src = "image/point/a1_rose.png";  document.getElementById("c16").src = "image/point/a1_rose.png"; document.getElementById("c17").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 4 )  		{ document.getElementById("c16").src = "image/point/a1_rose.png";  document.getElementById("c17").src = "image/point/a1_rose.png"; document.getElementById("c18").src = "image/point/a1_droite_rose.png";}
}

if (sens_its33 == 3 && aiguille81 == 1 && aiguille93 == 0 && occupation_its33 ) {
if ( sens_its33 == 3 && progression_its33 == 1 )  		{ document.getElementById("c13").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c15").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 2 )  		{ document.getElementById("c14").src = "image/point/a1_rose.png";  document.getElementById("c15").src = "image/point/a1_rose.png"; document.getElementById("c16").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 3 )  		{ document.getElementById("c15").src = "image/point/a1_rose.png";  document.getElementById("c16").src = "image/point/a1_rose.png"; document.getElementById("c17").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 4 )  		{ document.getElementById("c16").src = "image/point/a1_rose.png";  document.getElementById("c17").src = "image/point/a1_rose.png"; document.getElementById("c18").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 5 )  		{ document.getElementById("c17").src = "image/point/a1_rose.png";  document.getElementById("c18").src = "image/point/a1_rose.png"; document.getElementById("f21").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 6 )  		{ document.getElementById("c18").src = "image/point/a1_rose.png";  document.getElementById("f21").src = "image/point/a1_rose.png"; document.getElementById("f22").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 7 )  		{ document.getElementById("f21").src = "image/point/a1_rose.png";  document.getElementById("f22").src = "image/point/a1_rose.png"; document.getElementById("d19").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 8 )  		{ document.getElementById("f22").src = "image/point/a1_rose.png";  document.getElementById("d19").src = "image/point/a1_rose.png"; document.getElementById("d20").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 9 )  		{ document.getElementById("d19").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_rose.png"; document.getElementById("d21").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 10 )  		{ document.getElementById("d20").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_rose.png"; document.getElementById("d22").src = "image/point/a1_droite_rose.png";}
}
if (sens_its33 == 3 && aiguille81 == 1 && aiguille93 == 1 && occupation_its33 ) {
if ( sens_its33 == 3 && progression_its33 == 1 )  		{ document.getElementById("c13").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c15").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 2 )  		{ document.getElementById("c14").src = "image/point/a1_rose.png";  document.getElementById("c15").src = "image/point/a1_rose.png"; document.getElementById("c16").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 3 )  		{ document.getElementById("c15").src = "image/point/a1_rose.png";  document.getElementById("c16").src = "image/point/a1_rose.png"; document.getElementById("c17").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 4 )  		{ document.getElementById("c16").src = "image/point/a1_rose.png";  document.getElementById("c17").src = "image/point/a1_rose.png"; document.getElementById("c18").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 5 )  		{ document.getElementById("c17").src = "image/point/a1_rose.png";  document.getElementById("c18").src = "image/point/a1_rose.png"; document.getElementById("f21").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 6 )  		{ document.getElementById("c18").src = "image/point/a1_rose.png";  document.getElementById("f21").src = "image/point/a1_rose.png"; document.getElementById("f22").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 7 )  		{ document.getElementById("f21").src = "image/point/a1_rose.png";  document.getElementById("f22").src = "image/point/a1_rose.png"; document.getElementById("d19").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 8 )  		{ document.getElementById("f22").src = "image/point/a1_rose.png";  document.getElementById("d19").src = "image/point/a1_rose.png"; document.getElementById("d20").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 9 )  		{ document.getElementById("d19").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_rose.png"; document.getElementById("d21").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 10 )  		{ document.getElementById("d20").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_rose.png"; document.getElementById("d22").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 11)  		{ document.getElementById("d21").src = "image/point/a1_rose.png";  document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("f30").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 12)  		{ document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("f30").src = "image/point/a1_rose.png";  document.getElementById("f31").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 13)  		{ document.getElementById("f30").src = "image/point/a1_rose.png";  document.getElementById("f31").src = "image/point/a1_rose.png";  document.getElementById("e24").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 14)  		{ document.getElementById("f31").src = "image/point/a1_rose.png";  document.getElementById("e24").src = "image/point/a1_rose.png";  document.getElementById("e25").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 15)  		{ document.getElementById("e24").src = "image/point/a1_rose.png";  document.getElementById("e25").src = "image/point/a1_rose.png";  document.getElementById("e26").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 16)  		{ document.getElementById("e25").src = "image/point/a1_rose.png";  document.getElementById("e26").src = "image/point/a1_rose.png";  document.getElementById("e27").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 17)  		{ document.getElementById("e26").src = "image/point/a1_rose.png";  document.getElementById("e27").src = "image/point/a1_rose.png";  document.getElementById("e28").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 18)  		{ document.getElementById("e27").src = "image/point/a1_rose.png";  document.getElementById("e28").src = "image/point/a1_rose.png";  document.getElementById("e29").src = "image/point/a1_droite_rose.png";}
if ( sens_its33 == 3 && progression_its33 == 19)  		{ document.getElementById("e28").src = "image/point/a1_rose.png";  document.getElementById("e29").src = "image/point/a1_rose.png";  document.getElementById("e30").src = "image/point/a1_droite_rose.png";}
}

// its34

if (sens_its34 == 3 && occupation_its34 ) 				{ progression_its34 = progression_its34 + 1; }
if (sens_its34 == 3 && progression_its34 > 12 ) 			{ occupation_its34 = false; occupation_its118 = true;  
train2_its118[0] = train2_its34[0];
train2_its118[1] = train2_its34[1];
train2_its118[2] = train2_its34[2];
train2_its118[3] = train2_its34[3];
train2_its118[4] = train2_its34[4];
train2_its118[5] = train2_its34[5];
train2_its118[6] = train2_its34[6];
sens_its118 = sens_its34;
progression_its34 = 0;
its34 = 0; 
}

if ( sens_its34 == 3 && progression_its34 == 1 )  		{ document.getElementById("c17").src = "image/point/a1_rose.png";  document.getElementById("c18").src = "image/point/a1_rose.png"; document.getElementById("c19").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 2 )  		{ document.getElementById("c18").src = "image/point/a1_rose.png";  document.getElementById("c19").src = "image/point/a1_rose.png"; document.getElementById("c20").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 3 )  		{ document.getElementById("c19").src = "image/point/a1_rose.png";  document.getElementById("c20").src = "image/point/a1_rose.png"; document.getElementById("c21").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 4 )  		{ document.getElementById("c20").src = "image/point/a1_rose.png";  document.getElementById("c21").src = "image/point/a1_rose.png"; document.getElementById("c22").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 5 )  		{ document.getElementById("c21").src = "image/point/a1_rose.png";  document.getElementById("c22").src = "image/point/a1_rose.png"; document.getElementById("c23").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 6 )  		{ document.getElementById("c22").src = "image/point/a1_rose.png";  document.getElementById("c23").src = "image/point/a1_rose.png"; document.getElementById("c24").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 7 )  		{ document.getElementById("c23").src = "image/point/a1_rose.png";  document.getElementById("c24").src = "image/point/a1_rose.png"; document.getElementById("c25").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 8 )  		{ document.getElementById("c24").src = "image/point/a1_rose.png";  document.getElementById("c25").src = "image/point/a1_rose.png"; document.getElementById("c26").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 9 )  		{ document.getElementById("c25").src = "image/point/a1_rose.png";  document.getElementById("c26").src = "image/point/a1_rose.png"; document.getElementById("c27").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 10 )  		{ document.getElementById("c26").src = "image/point/a1_rose.png";  document.getElementById("c27").src = "image/point/a1_rose.png"; document.getElementById("c28").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 11 )  		{ document.getElementById("c27").src = "image/point/a1_rose.png";  document.getElementById("c28").src = "image/point/a1_rose.png"; document.getElementById("c29").src = "image/point/a1_droite_rose.png";}
if ( sens_its34 == 3 && progression_its34 == 12 )  		{ document.getElementById("c28").src = "image/point/a1_rose.png";  document.getElementById("c29").src = "image/point/a1_rose.png"; document.getElementById("c30").src = "image/point/a1_droite_rose.png";}

// its118

if (sens_its118 == 3 && occupation_its118 ) 										{ progression_its118 = progression_its118 + 1; }
if (sens_its118 == 3 && progression_its118 > 8 ) 									{ occupation_its118 = false; occupation_its37 = true;  
train2_its37[0] = train2_its118[0];
train2_its37[1] = train2_its118[1];
train2_its37[2] = train2_its118[2];
train2_its37[3] = train2_its118[3];
train2_its37[4] = train2_its118[4];
train2_its37[5] = train2_its118[5];
train2_its37[6] = train2_its118[6];
sens_its37 = sens_its118;
progression_its118 = 0;
its118 = 0; 
}

if ( sens_its118 == 3 && progression_its118 == 1 )  		{ document.getElementById("c29").src = "image/point/a1_rose.png";  document.getElementById("c30").src = "image/point/a1_rose.png"; document.getElementById("m1").src = "image/point/a1_droite_rose.png";}
if ( sens_its118 == 3 && progression_its118 == 2 )  		{ document.getElementById("c30").src = "image/point/a1_rose.png";  document.getElementById("m1").src = "image/point/a1_rose.png"; document.getElementById("m2").src = "image/point/a1_droite_rose.png";}
if ( sens_its118 == 3 && progression_its118 == 3 )  		{ document.getElementById("m1").src = "image/point/a1_rose.png";  document.getElementById("m2").src = "image/point/a1_rose.png"; document.getElementById("m3").src = "image/point/a1_droite_rose.png";}
if ( sens_its118 == 3 && progression_its118 == 4 )  		{ document.getElementById("m2").src = "image/point/a1_rose.png";  document.getElementById("m3").src = "image/point/a1_rose.png"; document.getElementById("m4").src = "image/point/a1_droite_rose.png";}
if ( sens_its118 == 3 && progression_its118 == 5 )  		{ document.getElementById("m3").src = "image/point/a1_rose.png";  document.getElementById("m4").src = "image/point/a1_rose.png"; document.getElementById("m5").src = "image/point/a1_droite_rose.png";}
if ( sens_its118 == 3 && progression_its118 == 6 )  		{ document.getElementById("m4").src = "image/point/a1_rose.png";  document.getElementById("m5").src = "image/point/a1_rose.png"; document.getElementById("m6").src = "image/point/a1_droite_rose.png";}
if ( sens_its118 == 3 && progression_its118 == 7 )  		{ document.getElementById("m5").src = "image/point/a1_rose.png";  document.getElementById("m6").src = "image/point/a1_rose.png"; document.getElementById("m7").src = "image/point/a1_droite_rose.png";}
if ( sens_its118 == 3 && progression_its118 == 8 )  		{ document.getElementById("m6").src = "image/point/a1_rose.png";  document.getElementById("m7").src = "image/point/a1_rose.png"; document.getElementById("m8").src = "image/point/a1_droite_rose.png";}

// its37

if (sens_its37 == 3 && occupation_its37 ) 									{ progression_its37 = progression_its37 + 1; }
if (sens_its37 == 3 && aiguille95 == 0 && progression_its37 > 5 ) 			{ occupation_its37 = false; occupation_its38 = true;  
train2_its38[0] = train2_its37[0];
train2_its38[1] = train2_its37[1];
train2_its38[2] = train2_its37[2];
train2_its38[3] = train2_its37[3];
train2_its38[4] = train2_its37[4];
train2_its38[5] = train2_its37[5];
train2_its38[6] = train2_its37[6];
sens_its38 = sens_its37;
progression_its37 = 0;
its37 = 0;
}

if ( sens_its37 == 3 && occupation_its37 && aiguille95 == 0 ) {
if ( sens_its37 == 3 && progression_its37 == 1 )  		{ document.getElementById("m7").src = "image/point/a1_rose.png";  document.getElementById("m8").src = "image/point/a1_rose.png"; document.getElementById("c32").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 2 )  		{ document.getElementById("m8").src = "image/point/a1_rose.png";  document.getElementById("c32").src = "image/point/a1_rose.png"; document.getElementById("c33").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 3 )  		{ document.getElementById("c32").src = "image/point/a1_rose.png";  document.getElementById("c33").src = "image/point/a1_rose.png"; document.getElementById("c34").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 4 )  		{ document.getElementById("c33").src = "image/point/a1_rose.png";  document.getElementById("c34").src = "image/point/a1_rose.png"; document.getElementById("c35").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 5 )  		{ document.getElementById("c34").src = "image/point/a1_rose.png";  document.getElementById("c35").src = "image/point/a1_rose.png"; document.getElementById("c36").src = "image/point/a1_droite_rose.png";}
}

if (sens_its37 == 3 && aiguille95 == 1 && progression_its37 > 9 ) 			{ occupation_its37 = false; occupation_its19 = true;  
train2_its19[0] = train2_its37[0];
train2_its19[1] = train2_its37[1];
train2_its19[2] = train2_its37[2];
train2_its19[3] = train2_its37[3];
train2_its19[4] = train2_its37[4];
train2_its19[5] = train2_its37[5];
train2_its19[6] = train2_its37[6];
sens_its19 = sens_its37;
progression_its37 = 0;
aiguille95 = 0;
its37 = 0; its95 = 0; its121 = 0;
}

if ( sens_its37 == 3 && occupation_its37 && aiguille95 == 1 ) {
if ( sens_its37 == 3 && progression_its37 == 1 )  		{ document.getElementById("m7").src = "image/point/a1_rose.png";  document.getElementById("m8").src = "image/point/a1_rose.png"; document.getElementById("c32").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 2 )  		{ document.getElementById("m8").src = "image/point/a1_rose.png";  document.getElementById("c32").src = "image/point/a1_rose.png"; document.getElementById("c33").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 3 )  		{ document.getElementById("c32").src = "image/point/a1_rose.png";  document.getElementById("c33").src = "image/point/a1_rose.png"; document.getElementById("c34").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 4 )  		{ document.getElementById("c33").src = "image/point/a1_rose.png";  document.getElementById("c34").src = "image/point/a1_rose.png"; document.getElementById("c35").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 5 )  		{ document.getElementById("c34").src = "image/point/a1_rose.png";  document.getElementById("c35").src = "image/point/a1_rose.png"; document.getElementById("c36").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 6 )  		{ document.getElementById("c35").src = "image/point/a1_rose.png";  document.getElementById("c36").src = "image/point/a1_rose.png"; document.getElementById("f71").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 7 )  		{ document.getElementById("c36").src = "image/point/a1_rose.png";  document.getElementById("f71").src = "image/point/a1_rose.png"; document.getElementById("f70").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 8 )  		{ document.getElementById("f71").src = "image/point/a1_rose.png";  document.getElementById("f70").src = "image/point/a1_rose.png"; document.getElementById("b38").src = "image/point/a1_droite_rose.png";}
if ( sens_its37 == 3 && progression_its37 == 9 )  		{ document.getElementById("f70").src = "image/point/a1_rose.png";  document.getElementById("b38").src = "image/point/a1_rose.png"; document.getElementById("b39").src = "image/point/a1_droite_rose.png";}
}

// its38

if (sens_its38 == 3 && occupation_its38 ) 				{ progression_its38 = progression_its38 + 1; }
if (sens_its38 == 3 && progression_its38 > 10 ) 		{ occupation_its38 = false; occupation_its39 = true;  
train2_its39[0] = train2_its38[0];
train2_its39[1] = train2_its38[1];
train2_its39[2] = train2_its38[2];
train2_its39[3] = train2_its38[3];
train2_its39[4] = train2_its38[4];
train2_its39[5] = train2_its38[5];
train2_its39[6] = train2_its38[6];
sens_its39 = sens_its38;
progression_its38 = 0;
its38 = 0; 
}

if ( sens_its38 == 3 && progression_its38 == 1 )  		{ document.getElementById("c35").src = "image/point/a1_rose.png";  document.getElementById("c36").src = "image/point/a1_rose.png"; document.getElementById("c37").src = "image/point/a1_droite_rose.png";}
if ( sens_its38 == 3 && progression_its38 == 2 )  		{ document.getElementById("c36").src = "image/point/a1_rose.png";  document.getElementById("c37").src = "image/point/a1_rose.png"; document.getElementById("c38").src = "image/point/a1_droite_rose.png";}
if ( sens_its38 == 3 && progression_its38 == 3 )  		{ document.getElementById("c37").src = "image/point/a1_rose.png";  document.getElementById("c38").src = "image/point/a1_rose.png"; document.getElementById("c39").src = "image/point/a1_droite_rose.png";}
if ( sens_its38 == 3 && progression_its38 == 4 )  		{ document.getElementById("c38").src = "image/point/a1_rose.png";  document.getElementById("c39").src = "image/point/a1_rose.png"; document.getElementById("c40").src = "image/point/a1_droite_rose.png";}
if ( sens_its38 == 3 && progression_its38 == 5 )  		{ document.getElementById("c39").src = "image/point/a1_rose.png";  document.getElementById("c40").src = "image/point/a1_rose.png"; document.getElementById("c41").src = "image/point/a1_droite_rose.png";}
if ( sens_its38 == 3 && progression_its38 == 6 )  		{ document.getElementById("c40").src = "image/point/a1_rose.png";  document.getElementById("c41").src = "image/point/a1_rose.png"; document.getElementById("c42").src = "image/point/a1_droite_rose.png";}
if ( sens_its38 == 3 && progression_its38 == 7 )  		{ document.getElementById("c41").src = "image/point/a1_rose.png";  document.getElementById("c42").src = "image/point/a1_rose.png"; document.getElementById("c43").src = "image/point/a1_droite_rose.png";}
if ( sens_its38 == 3 && progression_its38 == 8 )  		{ document.getElementById("c42").src = "image/point/a1_rose.png";  document.getElementById("c43").src = "image/point/a1_rose.png"; document.getElementById("c44").src = "image/point/a1_droite_rose.png";}
if ( sens_its38 == 3 && progression_its38 == 9 )  		{ document.getElementById("c43").src = "image/point/a1_rose.png";  document.getElementById("c44").src = "image/point/a1_rose.png"; document.getElementById("c45").src = "image/point/a1_droite_rose.png";}
if ( sens_its38 == 3 && progression_its38 == 10 )  		{ document.getElementById("c44").src = "image/point/a1_rose.png";  document.getElementById("c45").src = "image/point/a1_rose.png"; document.getElementById("c46").src = "image/point/a1_droite_rose.png";}

// its39

if (sens_its39 == 3 && occupation_its39 ) 				{ progression_its39 = progression_its39 + 1; }
if (sens_its39 == 3 && progression_its39 > 2 ) 			{ occupation_its39 = false; occupation_its40 = true;  
train2_its40[0] = train2_its39[0];
train2_its40[1] = train2_its39[1];
train2_its40[2] = train2_its39[2];
train2_its40[3] = train2_its39[3];
train2_its40[4] = train2_its39[4];
train2_its40[5] = train2_its39[5];
train2_its40[6] = train2_its39[6];
sens_its40 = sens_its39;
progression_its39 = 0;
its39 = 0; 
}

if ( sens_its39 == 3 && progression_its39 == 1 )  		{ document.getElementById("c45").src = "image/point/a1_rose.png";  document.getElementById("c46").src = "image/point/a1_rose.png"; document.getElementById("c47").src = "image/point/a1_droite_rose.png";}
if ( sens_its39 == 3 && progression_its39 == 2 )  		{ document.getElementById("c46").src = "image/point/a1_rose.png";  document.getElementById("c47").src = "image/point/a1_rose.png"; document.getElementById("c48").src = "image/point/a1_droite_rose.png";}

// its40

if (sens_its40 == 3 && occupation_its40 ) 				{ progression_its40 = progression_its40 + 1; }
if (sens_its40 == 3 && progression_its40 > 7 ) 			{ occupation_its40 = false; occupation_its41 = true;  
train2_its41[0] = train2_its40[0];
train2_its41[1] = train2_its40[1];
train2_its41[2] = train2_its40[2];
train2_its41[3] = train2_its40[3];
train2_its41[4] = train2_its40[4];
train2_its41[5] = train2_its40[5];
train2_its41[6] = train2_its40[6];
sens_its41 = sens_its40;
progression_its40 = 0;
its40 = 0; 
}

if ( sens_its40 == 3 && progression_its40 == 1 )  		{ document.getElementById("c47").src = "image/point/a1_rose.png";  document.getElementById("c48").src = "image/point/a1_rose.png"; document.getElementById("c49").src = "image/point/a1_droite_rose.png";}
if ( sens_its40 == 3 && progression_its40 == 2 )  		{ document.getElementById("c48").src = "image/point/a1_rose.png";  document.getElementById("c49").src = "image/point/a1_rose.png"; document.getElementById("c50").src = "image/point/a1_droite_rose.png";}
if ( sens_its40 == 3 && progression_its40 == 3 )  		{ document.getElementById("c49").src = "image/point/a1_rose.png";  document.getElementById("c50").src = "image/point/a1_rose.png"; document.getElementById("c51").src = "image/point/a1_droite_rose.png";}
if ( sens_its40 == 3 && progression_its40 == 4 )  		{ document.getElementById("c50").src = "image/point/a1_rose.png";  document.getElementById("c51").src = "image/point/a1_rose.png"; document.getElementById("c52").src = "image/point/a1_droite_rose.png";}
if ( sens_its40 == 3 && progression_its40 == 5 )  		{ document.getElementById("c51").src = "image/point/a1_rose.png";  document.getElementById("c52").src = "image/point/a1_rose.png"; document.getElementById("c53").src = "image/point/a1_droite_rose.png";}
if ( sens_its40 == 3 && progression_its40 == 6 )  		{ document.getElementById("c52").src = "image/point/a1_rose.png";  document.getElementById("c53").src = "image/point/a1_rose.png"; document.getElementById("c54").src = "image/point/a1_droite_rose.png";}
if ( sens_its40 == 3 && progression_its40 == 7 )  		{ document.getElementById("c53").src = "image/point/a1_rose.png";  document.getElementById("c54").src = "image/point/a1_rose.png"; document.getElementById("c55").src = "image/point/a1_droite_rose.png";}

// its41

if (sens_its41 == 3 && occupation_its41 ) 							{ progression_its41 = progression_its41 + 1; }
if (sens_its41 == 3 && aiguille91 == 0 && progression_its41 > 2 ) 	{ occupation_its41 = false; occupation_its42 = true;
train2_its42[0] = train2_its41[0];
train2_its42[1] = train2_its41[1];
train2_its42[2] = train2_its41[2];
train2_its42[3] = train2_its41[3];
train2_its42[4] = train2_its41[4];
train2_its42[5] = train2_its41[5];
train2_its42[6] = train2_its41[6];
sens_its42 = sens_its41;
progression_its41 = 0;
its41 = 0; 
}

if (sens_its41 == 3 && aiguille91 == 0 && occupation_its41 )  {
if ( sens_its41 == 3 && progression_its41 == 1 )  		{ document.getElementById("c54").src = "image/point/a1_rose.png";  document.getElementById("c55").src = "image/point/a1_rose.png"; document.getElementById("c56").src = "image/point/a1_droite_rose.png";}
if ( sens_its41 == 3 && progression_its41 == 2 )  		{ document.getElementById("c55").src = "image/point/a1_rose.png";  document.getElementById("c56").src = "image/point/a1_rose.png"; document.getElementById("c57").src = "image/point/a1_droite_rose.png";}
}

if (sens_its41 == 3 && aiguille91 == 1 && progression_its41 > 6 ) 	{ occupation_its41 = false; occupation_its22 = true;
train2_its22[0] = train2_its41[0];
train2_its22[1] = train2_its41[1];
train2_its22[2] = train2_its41[2];
train2_its22[3] = train2_its41[3];
train2_its22[4] = train2_its41[4];
train2_its22[5] = train2_its41[5];
train2_its22[6] = train2_its41[6];
sens_its22 = sens_its41;
progression_its41 = 0;
aiguille91 = 0;
its41 = 0; its91 = 0; its21 = 0;
}

if (sens_its41 == 3 && aiguille91 == 1 && occupation_its41 )  {
if ( sens_its41 == 3 && progression_its41 == 1 )  		{ document.getElementById("c56").src = "image/point/a1_rose.png";  document.getElementById("c57").src = "image/point/a1_rose.png"; document.getElementById("f24").src = "image/point/a1_droite_rose.png";}
if ( sens_its41 == 3 && progression_its41 == 2 )  		{ document.getElementById("c57").src = "image/point/a1_rose.png";  document.getElementById("f24").src = "image/point/a1_rose.png"; document.getElementById("f23").src = "image/point/a1_droite_rose.png";}
if ( sens_its41 == 3 && progression_its41 == 3 )  		{ document.getElementById("f24").src = "image/point/a1_rose.png";  document.getElementById("f23").src = "image/point/a1_rose.png"; document.getElementById("b59").src = "image/point/a1_droite_rose.png";}
if ( sens_its41 == 3 && progression_its41 == 4 )  		{ document.getElementById("f23").src = "image/point/a1_rose.png";  document.getElementById("b59").src = "image/point/a1_rose.png"; document.getElementById("b60").src = "image/point/a1_droite_rose.png";}
if ( sens_its41 == 3 && progression_its41 == 5 )  		{ document.getElementById("b59").src = "image/point/a1_rose.png";  document.getElementById("b60").src = "image/point/a1_rose.png"; document.getElementById("b61").src = "image/point/a1_droite_rose.png";}
if ( sens_its41 == 3 && progression_its41 == 6 )  		{  document.getElementById("b60").src = "image/point/a1_rose.png";  document.getElementById("b61").src = "image/point/a1_rose.png"; document.getElementById("b62").src = "image/point/a1_droite_rose.png";}
}


// its42

if (sens_its42 == 3 && occupation_its42 ) 				{ progression_its42 = progression_its42 + 1; }
if (sens_its42 == 3 && progression_its42 > 5 ) 			{ occupation_its42 = false; occupation_its43 = true;
train2_its43[0] = train2_its42[0];
train2_its43[1] = train2_its42[1];
train2_its43[2] = train2_its42[2];
train2_its43[3] = train2_its42[3];
train2_its43[4] = train2_its42[4];
train2_its43[5] = train2_its42[5];
train2_its43[6] = train2_its42[6];
sens_its43 = sens_its42;
progression_its42 = 0;
its42 = 0; 
}


if ( sens_its42 == 3 && progression_its42 == 1 )  		{ document.getElementById("c56").src = "image/point/a1_rose.png";  document.getElementById("c57").src = "image/point/a1_rose.png"; document.getElementById("c58").src = "image/point/a1_droite_rose.png";}
if ( sens_its42 == 3 && progression_its42 == 2 )  		{ document.getElementById("c57").src = "image/point/a1_rose.png";  document.getElementById("c58").src = "image/point/a1_rose.png"; document.getElementById("c59").src = "image/point/a1_droite_rose.png";}
if ( sens_its42 == 3 && progression_its42 == 3 )  		{ document.getElementById("c58").src = "image/point/a1_rose.png";  document.getElementById("c59").src = "image/point/a1_rose.png"; document.getElementById("c60").src = "image/point/a1_droite_rose.png";}
if ( sens_its42 == 3 && progression_its42 == 4 )  		{ document.getElementById("c59").src = "image/point/a1_rose.png";  document.getElementById("c60").src = "image/point/a1_rose.png"; document.getElementById("c61").src = "image/point/a1_droite_rose.png";}
if ( sens_its42 == 3 && progression_its42 == 5 )  		{ document.getElementById("c60").src = "image/point/a1_rose.png";  document.getElementById("c61").src = "image/point/a1_rose.png"; document.getElementById("c62").src = "image/point/a1_droite_rose.png";}



// its43

if (sens_its43 == 3 && occupation_its43 ) 				{ progression_its43 = progression_its43 + 1; }
if (sens_its43 == 3 && progression_its43 > 6 ) 			{ occupation_its43 = false; 
train2_its43[0] = train2_its43[0];
train2_its43[1] = train2_its43[1];
train2_its43[2] = train2_its43[2];
train2_its43[3] = train2_its43[3];
train2_its43[4] = train2_its43[4];
train2_its43[5] = train2_its43[5];
train2_its43[6] = train2_its43[6];
sens_its43 = sens_its43;
progression_its43 = 0;
its43 = 0; 
}

if ( sens_its43 == 3 && progression_its43 == 1 )  		{ document.getElementById("c61").src = "image/point/a1_rose.png";  document.getElementById("c62").src = "image/point/a1_rose.png"; document.getElementById("c63").src = "image/point/a1_droite_rose.png";}
if ( sens_its43 == 3 && progression_its43 == 2 )  		{ document.getElementById("c62").src = "image/point/a1_rose.png";  document.getElementById("c63").src = "image/point/a1_rose.png"; document.getElementById("c64").src = "image/point/a1_droite_rose.png";}
if ( sens_its43 == 3 && progression_its43 == 3 )  		{ document.getElementById("c63").src = "image/point/a1_rose.png";  document.getElementById("c64").src = "image/point/a1_rose.png"; document.getElementById("c65").src = "image/point/a1_droite_rose.png";}
if ( sens_its43 == 3 && progression_its43 == 4 )  		{ document.getElementById("c64").src = "image/point/a1_rose.png";  document.getElementById("c65").src = "image/point/a1_rose.png"; document.getElementById("c66").src = "image/point/a1_droite_rose.png";}
if ( sens_its43 == 3 && progression_its43 == 5 )  		{ document.getElementById("c65").src = "image/point/a1_rose.png";  document.getElementById("c66").src = "image/point/a1_rose.png"; document.getElementById("c66").src = "image/point/a1_droite_rose.png";}
if ( sens_its43 == 3 && progression_its43 == 6 )  		{ document.getElementById("c66").src = "image/point/a1_rose.png";  document.getElementById("c66").src = "image/point/a1_rose.png"; document.getElementById("c66").src = "image/point/a1_droite_rose.png";}

// its50

if (sens_its50 == 3 && occupation_its50 ) 			{ progression_its50 = progression_its50 + 1; ligne = 50; }
if (sens_its50 == 3 && its51 == 0 && progression_its50 > 4 ) 		{ progression_its50 = 4; }
if (sens_its50 == 3 && progression_its50 > 4 ) 		{ occupation_its50 = false; occupation_its51 = true;  
train2_its51[0] = train2_its50[0];
train2_its51[1] = train2_its50[1];
train2_its51[2] = train2_its50[2];
train2_its51[3] = train2_its50[3];
train2_its51[4] = train2_its50[4];
train2_its51[5] = train2_its50[5];
train2_its51[6] = train2_its50[6];
sens_its51 = sens_its50;
progression_its50 = 0;
}
							
if ( sens_its50 == 3 && progression_its50 == 1 ) { document.getElementById("d1").src = "image/point/a1_rose.png"; }
if ( sens_its50 == 3 && progression_its50 == 2 ) { document.getElementById("d1").src = "image/point/a1_rose.png"; document.getElementById("d2").src = "image/point/a1_rose.png";}
if ( sens_its50 == 3 && progression_its50 == 3 ) { document.getElementById("d1").src = "image/point/a1_rose.png"; document.getElementById("d2").src = "image/point/a1_rose.png"; document.getElementById("d3").src = "image/point/a1_droite_rose.png";}
if ( sens_its50 == 3 && progression_its50 == 4 ) { document.getElementById("d2").src = "image/point/a1_rose.png"; document.getElementById("d3").src = "image/point/a1_rose.png"; document.getElementById("d4").src = "image/point/a1_droite_rose.png";}

// its51
			
if (sens_its51 == 3 && occupation_its51 ) 							{ progression_its51 = progression_its51 + 1; ligne = 51; }
if (sens_its51 == 3 && progression_its51 > 5 ) 						{ occupation_its51 = false; occupation_its52 = true;  
train2_its52[0] = train2_its51[0];
train2_its52[1] = train2_its51[1];
train2_its52[2] = train2_its51[2];
train2_its52[3] = train2_its51[3];
train2_its52[4] = train2_its51[4];
train2_its52[5] = train2_its51[5];
train2_its52[6] = train2_its51[6];
sens_its52 =     sens_its51;
progression_its51 = 0;
its50 = 0; its51 = 0;
}
			
if ( sens_its51 == 3 && progression_its51 == 1 )  		{ document.getElementById("d3").src = "image/point/a1_rose.png";  document.getElementById("d4").src = "image/point/a1_rose.png"; document.getElementById("d5").src = "image/point/a1_droite_rose.png";}
if ( sens_its51 == 3 && progression_its51 == 2 )  		{ document.getElementById("d4").src = "image/point/a1_rose.png";  document.getElementById("d5").src = "image/point/a1_rose.png"; document.getElementById("d6").src = "image/point/a1_droite_rose.png";}
if ( sens_its51 == 3 && progression_its51 == 3 )  		{ document.getElementById("d5").src = "image/point/a1_rose.png";  document.getElementById("d6").src = "image/point/a1_rose.png"; document.getElementById("d7").src = "image/point/a1_droite_rose.png";}
if ( sens_its51 == 3 && progression_its51 == 4 )  		{ document.getElementById("d6").src = "image/point/a1_rose.png";  document.getElementById("d7").src = "image/point/a1_rose.png"; document.getElementById("d8").src = "image/point/a1_droite_rose.png";}
if ( sens_its51 == 3 && progression_its51 == 5 )  		{ document.getElementById("d7").src = "image/point/a1_rose.png";  document.getElementById("d8").src = "image/point/a1_rose.png"; document.getElementById("d9").src = "image/point/a1_droite_rose.png";}


// its52

if (sens_its52 == 3 && occupation_its52) 								{ progression_its52 = progression_its52 + 1; }
if (sens_its52 == 3 && aiguille78 == 0 && progression_its52 > 2 ) 		{ occupation_its52 = false; occupation_its53 = true;   
train2_its53[0] = train2_its52[0];
train2_its53[1] = train2_its52[1];
train2_its53[2] = train2_its52[2];
train2_its53[3] = train2_its52[3];
train2_its53[4] = train2_its52[4];
train2_its53[5] = train2_its52[5];
train2_its53[6] = train2_its52[6];
sens_its53 =      sens_its52;
progression_its52 = 0;
its52 = 0; 
}

if (sens_its52 == 3 && aiguille78 == 1 && aiguille80 == 0 && progression_its52 > 6 ) 		{ occupation_its52 = false; occupation_its33 = true;   
train2_its33[0] = train2_its52[0];
train2_its33[1] = train2_its52[1];
train2_its33[2] = train2_its52[2];
train2_its33[3] = train2_its52[3];
train2_its33[4] = train2_its52[4];
train2_its33[5] = train2_its52[5];
train2_its33[6] = train2_its52[6];
sens_its33 =      sens_its52;
progression_its52 = 0;
aiguille78 = 0; 
its52 = 0; its78 = 0; its131 = 0; 
}

if (sens_its52 == 3 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 0 && progression_its52 > 12 ) 		{ occupation_its52 = false; occupation_its111 = true;   
train2_its111[0] = train2_its52[0];
train2_its111[1] = train2_its52[1];
train2_its111[2] = train2_its52[2];
train2_its111[3] = train2_its52[3];
train2_its111[4] = train2_its52[4];
train2_its111[5] = train2_its52[5];
train2_its111[6] = train2_its52[6];
sens_its111 =      sens_its52;
progression_its52 = 0;
aiguille78 = 0; 
aiguille80 = 0; 
its52 = 0; its78 = 0; its131 = 0; its80 = 0; its16 = 0; 
}

if (sens_its52 == 3 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 0 && progression_its52 > 17 ) 		{ occupation_its52 = false; occupation_its102 = true;   
train2_its102[0] = train2_its52[0];
train2_its102[1] = train2_its52[1];
train2_its102[2] = train2_its52[2];
train2_its102[3] = train2_its52[3];
train2_its102[4] = train2_its52[4];
train2_its102[5] = train2_its52[5];
train2_its102[6] = train2_its52[6];
sens_its102 =      sens_its52;
progression_its52 = 0;
aiguille78 = 0; 
aiguille80 = 0; 
aiguille82 = 0; 
its52 = 0; its78 = 0; its131 = 0; its80 = 0; its16 = 0; its82 = 0; its101 = 0; 
}

if (sens_its52 == 3 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 1 && progression_its52 > 25 ) 		{ occupation_its52 = false; occupation_its8 = true;   
train2_its8[0] = train2_its52[0];
train2_its8[1] = train2_its52[1];
train2_its8[2] = train2_its52[2];
train2_its8[3] = train2_its52[3];
train2_its8[4] = train2_its52[4];
train2_its8[5] = train2_its52[5];
train2_its8[6] = train2_its52[6];
sens_its8 =      sens_its52;
progression_its52 = 0;
aiguille78 = 0; 
aiguille80 = 0; 
aiguille82 = 0; 
aiguille97 = 0; 
its52 = 0; its78 = 0; its131 = 0; its80 = 0; its16 = 0; its82 = 0; its101 = 0; its97 = 0; its2 = 0; its23 = 0; 
}


if (sens_its52 == 3 && aiguille78 == 0 && occupation_its52 )  {
if ( sens_its52 == 3 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rose.png";  document.getElementById("d9").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_droite_rose.png";}
}

if (sens_its52 == 3 && aiguille78 == 1 && aiguille80 == 0 && occupation_its52 )  {
if ( sens_its52 == 3 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rose.png";  document.getElementById("d9").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 3 ) 		{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("f14").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 4 ) 		{ document.getElementById("d11").src =  "image/point/a1_rose.png"; document.getElementById("f14").src = "image/point/a1_rose.png"; document.getElementById("f13").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 5 ) 		{ document.getElementById("f14").src = "image/point/a1_rose.png";  document.getElementById("f13").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 6 ) 		{ document.getElementById("f13").src =  "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_rose.png";}
}

if ( sens_its52 == 3 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 0 && occupation_its52 )  {
if ( sens_its52 == 3 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rose.png";  document.getElementById("d9").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 3 ) 		{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("f14").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 4 ) 		{ document.getElementById("d11").src =  "image/point/a1_rose.png"; document.getElementById("f14").src = "image/point/a1_rose.png"; document.getElementById("f13").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 5 ) 		{ document.getElementById("f14").src = "image/point/a1_rose.png";  document.getElementById("f13").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 6 ) 		{ document.getElementById("f13").src =  "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 7 ) 		{ document.getElementById("c13").src =  "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 8 ) 		{ document.getElementById("c14").src =  "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 9 ) 		{ document.getElementById("f12").src =  "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 10 ) 		{ document.getElementById("f11").src =  "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 11 ) 		{ document.getElementById("b16").src =  "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 12 ) 		{ document.getElementById("b17").src =  "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 13 ) 		{ document.getElementById("b18").src =  "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("f2").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 14 ) 		{ document.getElementById("b19").src =  "image/point/a1_rose.png"; document.getElementById("f2").src = "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 15 ) 		{ document.getElementById("f2").src =  "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 16 ) 		{ document.getElementById("f1").src =  "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 17 ) 		{ document.getElementById("x21").src =  "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_droite_rose.png";}
}

if ( sens_its52 == 3 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 0 && occupation_its52 )  {
if ( sens_its52 == 3 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rose.png";  document.getElementById("d9").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 3 ) 		{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("f14").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 4 ) 		{ document.getElementById("d11").src =  "image/point/a1_rose.png"; document.getElementById("f14").src = "image/point/a1_rose.png"; document.getElementById("f13").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 5 ) 		{ document.getElementById("f14").src = "image/point/a1_rose.png";  document.getElementById("f13").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 6 ) 		{ document.getElementById("f13").src =  "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 7 ) 		{ document.getElementById("c13").src =  "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 8 ) 		{ document.getElementById("c14").src =  "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 9 ) 		{ document.getElementById("f12").src =  "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 10 ) 		{ document.getElementById("f11").src =  "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 11 ) 		{ document.getElementById("b16").src =  "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 12 ) 		{ document.getElementById("b17").src =  "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_droite_rose.png";}
}

if ( sens_its52 == 3 && aiguille78 == 1 && aiguille80 == 1 && aiguille82 == 1 && aiguille97 == 1 && occupation_its52 )  {
	
if ( sens_its52 == 3 && progression_its52 == 1 ) 		{ document.getElementById("d8").src = "image/point/a1_rose.png";  document.getElementById("d9").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 2 ) 		{ document.getElementById("d9").src =  "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 3 ) 		{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("f14").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 4 ) 		{ document.getElementById("d11").src =  "image/point/a1_rose.png"; document.getElementById("f14").src = "image/point/a1_rose.png"; document.getElementById("f13").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 5 ) 		{ document.getElementById("f14").src = "image/point/a1_rose.png";  document.getElementById("f13").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 6 ) 		{ document.getElementById("f13").src =  "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 7 ) 		{ document.getElementById("c13").src =  "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 8 ) 		{ document.getElementById("c14").src =  "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 9 ) 		{ document.getElementById("f12").src =  "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 10 ) 		{ document.getElementById("f11").src =  "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 11 ) 		{ document.getElementById("b16").src =  "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 12 ) 		{ document.getElementById("b17").src =  "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 13 ) 		{ document.getElementById("b18").src =  "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("f2").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 14 ) 		{ document.getElementById("b19").src =  "image/point/a1_rose.png"; document.getElementById("f2").src = "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 15 ) 		{ document.getElementById("f2").src =  "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 16 ) 		{ document.getElementById("f1").src =  "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 17 ) 		{ document.getElementById("x21").src =  "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 18 ) 		{ document.getElementById("x22").src =  "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_rose.png"; document.getElementById("f81").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 19 ) 		{ document.getElementById("x23").src =  "image/point/a1_rose.png"; document.getElementById("f81").src = "image/point/a1_rose.png"; document.getElementById("f80").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 20 ) 		{ document.getElementById("f81").src =  "image/point/a1_rose.png"; document.getElementById("f80").src = "image/point/a1_rose.png"; document.getElementById("a26").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 21 ) 		{ document.getElementById("f80").src =  "image/point/a1_rose.png"; document.getElementById("a26").src = "image/point/a1_rose.png"; document.getElementById("a27").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 22 ) 		{ document.getElementById("a26").src =  "image/point/a1_rose.png"; document.getElementById("a27").src = "image/point/a1_rose.png"; document.getElementById("a28").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 23 ) 		{ document.getElementById("a27").src =  "image/point/a1_rose.png"; document.getElementById("a28").src = "image/point/a1_rose.png"; document.getElementById("a29").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 24 ) 		{ document.getElementById("a28").src =  "image/point/a1_rose.png"; document.getElementById("a29").src = "image/point/a1_rose.png"; document.getElementById("a30").src = "image/point/a1_droite_rose.png";}
if ( sens_its52 == 3 && progression_its52 == 25 ) 		{ document.getElementById("a29").src =  "image/point/a1_rose.png"; document.getElementById("a30").src = "image/point/a1_rose.png"; document.getElementById("a31").src = "image/point/a1_droite_rose.png";}
}



// its53

if (sens_its53 == 3 && occupation_its53) 			{ progression_its53 = progression_its53 + 1; ligne = 53;}
if (sens_its53 == 3 && progression_its53 > 8 ) 		{ occupation_its53 = false; occupation_its54 = true;   
train2_its54[0] = train2_its53[0];
train2_its54[1] = train2_its53[1];
train2_its54[2] = train2_its53[2];
train2_its54[3] = train2_its53[3];
train2_its54[4] = train2_its53[4];
train2_its54[5] = train2_its53[5];
train2_its54[6] = train2_its53[6];
sens_its54 =     sens_its53;
progression_its53 = 0;
its53  = 0; 
}

if ( sens_its53 == 3 && progression_its53 == 1 ) 		{ document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_rose.png"; document.getElementById("d12").src = "image/point/a1_droite_rose.png";}
if ( sens_its53 == 3 && progression_its53 == 2 ) 		{ document.getElementById("d11").src = "image/point/a1_rose.png"; document.getElementById("d12").src = "image/point/a1_rose.png"; document.getElementById("d13").src = "image/point/a1_droite_rose.png";}			
if ( sens_its53 == 3 && progression_its53 == 3 )  		{ document.getElementById("d12").src = "image/point/a1_rose.png";  document.getElementById("d13").src = "image/point/a1_rose.png";  document.getElementById("d14").src = "image/point/a1_droite_rose.png";}
if ( sens_its53 == 3 && progression_its53 == 4 )  		{ document.getElementById("d13").src = "image/point/a1_rose.png";  document.getElementById("d14").src = "image/point/a1_rose.png";  document.getElementById("d15").src = "image/point/a1_droite_rose.png";}
if ( sens_its53 == 3 && progression_its53 == 5 ) 		{ document.getElementById("d14").src = "image/point/a1_rose.png";  document.getElementById("d15").src = "image/point/a1_rose.png";  document.getElementById("d16").src = "image/point/a1_droite_rose.png";}
if ( sens_its53 == 3 && progression_its53 == 6 ) 		{ document.getElementById("d15").src = "image/point/a1_rose.png";  document.getElementById("d16").src = "image/point/a1_rose.png";  document.getElementById("d17").src = "image/point/a1_droite_rose.png";}
if ( sens_its53 == 3 && progression_its53 == 7 ) 		{ document.getElementById("d16").src = "image/point/a1_rose.png";  document.getElementById("d17").src = "image/point/a1_rose.png";  document.getElementById("d18").src = "image/point/a1_droite_rose.png";}
if ( sens_its53 == 3 && progression_its53 == 8 ) 		{ document.getElementById("d17").src = "image/point/a1_rose.png";  document.getElementById("d18").src = "image/point/a1_rose.png";  document.getElementById("d19").src = "image/point/a1_droite_rose.png";}

// its54

if (sens_its54 == 3 && occupation_its54) 								{ progression_its54 = progression_its54 + 1; }
if (sens_its54 == 3 && aiguille93 == 0 && progression_its54 > 4 ) 		{ occupation_its54 = false; occupation_its55 = true;  
train2_its55[0] = train2_its54[0];
train2_its55[1] = train2_its54[1];
train2_its55[2] = train2_its54[2];
train2_its55[3] = train2_its54[3];
train2_its55[4] = train2_its54[4];
train2_its55[5] = train2_its54[5];
train2_its55[6] = train2_its54[6];
sens_its55 =     sens_its54;
progression_its54 = 0;
its54 = 0; 
}


if (sens_its54 == 3 && aiguille93 == 1 && progression_its54 > 12 ) 		{ occupation_its54 = false; occupation_its120 = true;  
train2_its120[0] = train2_its54[0];
train2_its120[1] = train2_its54[1];
train2_its120[2] = train2_its54[2];
train2_its120[3] = train2_its54[3];
train2_its120[4] = train2_its54[4];
train2_its120[5] = train2_its54[5];
train2_its120[6] = train2_its54[6];
sens_its120 =     sens_its54;
progression_its54 = 0;
aiguille93 = 0;
its54 = 0; its93 = 0; its73  = 0; 
}

if (sens_its54 == 3 && aiguille93 == 0 && occupation_its54) {
if ( sens_its54 == 3 && progression_its54 == 1) 		{ document.getElementById("d18").src =  "image/point/a1_rose.png"; document.getElementById("d19").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 2) 		{ document.getElementById("d19").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 3) 		{ document.getElementById("d20").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_rose.png";  document.getElementById("d22").src = "image/point/a1_droite_rose.png";}			
if ( sens_its54 == 3 && progression_its54 == 4)  		{ document.getElementById("d21").src = "image/point/a1_rose.png";  document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("d23").src = "image/point/a1_droite_rose.png";}
}

if (sens_its54 == 3 && aiguille93 == 1 && occupation_its54) {
if ( sens_its54 == 3 && progression_its54 == 1) 		{ document.getElementById("d18").src =  "image/point/a1_rose.png"; document.getElementById("d19").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 2) 		{ document.getElementById("d19").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 3) 		{ document.getElementById("d20").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_rose.png";  document.getElementById("d22").src = "image/point/a1_droite_rose.png";}	
if ( sens_its54 == 3 && progression_its54 == 4)  		{ document.getElementById("d21").src = "image/point/a1_rose.png";  document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("f30").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 5)  		{ document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("f30").src = "image/point/a1_rose.png";  document.getElementById("f31").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 6)  		{ document.getElementById("f30").src = "image/point/a1_rose.png";  document.getElementById("f31").src = "image/point/a1_rose.png";  document.getElementById("e24").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 7)  		{ document.getElementById("f31").src = "image/point/a1_rose.png";  document.getElementById("e24").src = "image/point/a1_rose.png";  document.getElementById("e25").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 8)  		{ document.getElementById("e24").src = "image/point/a1_rose.png";  document.getElementById("e25").src = "image/point/a1_rose.png";  document.getElementById("e26").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 9)  		{ document.getElementById("e25").src = "image/point/a1_rose.png";  document.getElementById("e26").src = "image/point/a1_rose.png";  document.getElementById("e27").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 10)  		{ document.getElementById("e26").src = "image/point/a1_rose.png";  document.getElementById("e27").src = "image/point/a1_rose.png";  document.getElementById("e28").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 11)  		{ document.getElementById("e27").src = "image/point/a1_rose.png";  document.getElementById("e28").src = "image/point/a1_rose.png";  document.getElementById("e29").src = "image/point/a1_droite_rose.png";}
if ( sens_its54 == 3 && progression_its54 == 12)  		{ document.getElementById("e28").src = "image/point/a1_rose.png";  document.getElementById("e29").src = "image/point/a1_rose.png";  document.getElementById("e30").src = "image/point/a1_droite_rose.png";}
}

// its120

if (sens_its120 == 3 && occupation_its120) 								{ progression_its120 = progression_its120 + 1; }
if (sens_its120 == 3 && progression_its120 > 8 ) 						{ occupation_its120 = false; occupation_its74 = true;  
train2_its74[0] = train2_its120[0];
train2_its74[1] = train2_its120[1];
train2_its74[2] = train2_its120[2];
train2_its74[3] = train2_its120[3];
train2_its74[4] = train2_its120[4];
train2_its74[5] = train2_its120[5];
train2_its74[6] = train2_its120[6];
sens_its74 =     sens_its120;
progression_its120 = 0;
its120 = 0; 
}

if ( sens_its120 == 3 && progression_its120 == 1 )  			{ document.getElementById("e29").src = "image/point/a1_rose.png";  document.getElementById("e30").src = "image/point/a1_rose.png"; document.getElementById("k1").src = "image/point/a1_droite_rose.png"; }
if ( sens_its120 == 3 && progression_its120 == 2 )  			{ document.getElementById("e30").src = "image/point/a1_rose.png";  document.getElementById("k1").src = "image/point/a1_rose.png"; document.getElementById("k2").src = "image/point/a1_droite_rose.png"; }
if ( sens_its120 == 3 && progression_its120 == 3 )  			{ document.getElementById("k1").src = "image/point/a1_rose.png";  document.getElementById("k2").src = "image/point/a1_rose.png"; document.getElementById("k3").src = "image/point/a1_droite_rose.png";  }
if ( sens_its120 == 3 && progression_its120 == 4 )  			{ document.getElementById("k2").src = "image/point/a1_rose.png";  document.getElementById("k3").src = "image/point/a1_rose.png"; document.getElementById("k4").src = "image/point/a1_droite_rose.png"; }
if ( sens_its120 == 3 && progression_its120 == 5 )  			{ document.getElementById("k3").src = "image/point/a1_rose.png";  document.getElementById("k4").src = "image/point/a1_rose.png"; document.getElementById("k5").src = "image/point/a1_droite_rose.png"; }
if ( sens_its120 == 3 && progression_its120 == 6 )  			{ document.getElementById("k4").src = "image/point/a1_rose.png";  document.getElementById("k5").src = "image/point/a1_rose.png"; document.getElementById("k6").src = "image/point/a1_droite_rose.png"; }
if ( sens_its120 == 3 && progression_its120 == 7 )  			{ document.getElementById("k5").src = "image/point/a1_rose.png";  document.getElementById("k6").src = "image/point/a1_rose.png"; document.getElementById("k7").src = "image/point/a1_droite_rose.png";  }
if ( sens_its120 == 3 && progression_its120 == 8 )  			{ document.getElementById("k6").src = "image/point/a1_rose.png";  document.getElementById("k7").src = "image/point/a1_rose.png"; document.getElementById("k8").src = "image/point/a1_droite_rose.png"; }

// its74

if (sens_its74 == 3 && occupation_its74) 								{ progression_its74 = progression_its74 + 1; }
if (sens_its74 == 3 && progression_its74 > 18 ) 						{ occupation_its74 = false; occupation_its58 = true;  
train2_its58[0] = train2_its74[0];
train2_its58[1] = train2_its74[1];
train2_its58[2] = train2_its74[2];
train2_its58[3] = train2_its74[3];
train2_its58[4] = train2_its74[4];
train2_its58[5] = train2_its74[5];
train2_its58[6] = train2_its74[6];
sens_its58 =     sens_its74;
progression_its74 = 0;
aiguille94 = 0;
its74 = 0; its94 = 0; its57 = 0; 
}

if ( sens_its74 == 3 && progression_its74 == 1 )  			{ document.getElementById("k7").src = "image/point/a1_rose.png";  document.getElementById("k8").src = "image/point/a1_rose.png"; document.getElementById("e32").src = "image/point/a1_droite_rose.png"; }
if ( sens_its74 == 3 && progression_its74 == 2 )  			{ document.getElementById("k8").src = "image/point/a1_rose.png";  document.getElementById("e32").src = "image/point/a1_rose.png"; document.getElementById("e33").src = "image/point/a1_droite_rose.png"; }
if ( sens_its74 == 3 && progression_its74 == 3 )  			{ document.getElementById("e32").src = "image/point/a1_rose.png";  document.getElementById("e33").src = "image/point/a1_rose.png"; document.getElementById("e34").src = "image/point/a1_droite_rose.png";  }
if ( sens_its74 == 3 && progression_its74 == 4 )  			{ document.getElementById("e33").src = "image/point/a1_rose.png";  document.getElementById("e34").src = "image/point/a1_rose.png"; document.getElementById("e35").src = "image/point/a1_droite_rose.png"; }
if ( sens_its74 == 3 && progression_its74 == 5 )  			{ document.getElementById("e34").src = "image/point/a1_rose.png";  document.getElementById("e35").src = "image/point/a1_rose.png"; document.getElementById("f40").src = "image/point/a1_droite_rose.png"; }
if ( sens_its74 == 3 && progression_its74 == 6 )  			{ document.getElementById("e35").src = "image/point/a1_rose.png";  document.getElementById("f40").src = "image/point/a1_rose.png"; document.getElementById("f41").src = "image/point/a1_droite_rose.png"; }
if ( sens_its74 == 3 && progression_its74 == 7 )  			{ document.getElementById("f40").src = "image/point/a1_rose.png";  document.getElementById("f41").src = "image/point/a1_rose.png"; document.getElementById("d37").src = "image/point/a1_droite_rose.png";  }
if ( sens_its74 == 3 && progression_its74 == 8 )  			{ document.getElementById("f41").src = "image/point/a1_rose.png";  document.getElementById("d37").src = "image/point/a1_rose.png"; document.getElementById("d38").src = "image/point/a1_droite_rose.png"; }
if ( sens_its74 == 3 && progression_its74 == 9 )  			{ document.getElementById("d38").src = "image/point/a1_rose.png";  document.getElementById("d39").src = "image/point/a1_rose.png"; document.getElementById("d40").src = "image/point/a1_droite_rose.png";}
if ( sens_its74 == 3 && progression_its74 == 10 )  			{ document.getElementById("d39").src = "image/point/a1_rose.png";  document.getElementById("d40").src = "image/point/a1_rose.png"; document.getElementById("d41").src = "image/point/a1_droite_rose.png";}
if ( sens_its74 == 3 && progression_its74 == 11 )  			{ document.getElementById("d40").src = "image/point/a1_rose.png";  document.getElementById("d41").src = "image/point/a1_rose.png"; document.getElementById("d42").src = "image/point/a1_droite_rose.png";}
if ( sens_its74 == 3 && progression_its74 == 12 )  			{ document.getElementById("d41").src = "image/point/a1_rose.png";  document.getElementById("d42").src = "image/point/a1_rose.png"; document.getElementById("d43").src = "image/point/a1_droite_rose.png";}
if ( sens_its74 == 3 && progression_its74 == 13 )  			{ document.getElementById("d42").src = "image/point/a1_rose.png";  document.getElementById("d43").src = "image/point/a1_rose.png"; document.getElementById("d44").src = "image/point/a1_droite_rose.png";}
if ( sens_its74 == 3 && progression_its74 == 14 )  			{ document.getElementById("d43").src = "image/point/a1_rose.png";  document.getElementById("d44").src = "image/point/a1_rose.png"; document.getElementById("d45").src = "image/point/a1_droite_rose.png";}
if ( sens_its74 == 3 && progression_its74 == 15 )  			{ document.getElementById("d44").src = "image/point/a1_rose.png";  document.getElementById("d45").src = "image/point/a1_rose.png"; document.getElementById("d46").src = "image/point/a1_droite_rose.png";}
if ( sens_its74 == 3 && progression_its74 == 16 )  			{ document.getElementById("d45").src = "image/point/a1_rose.png";  document.getElementById("d46").src = "image/point/a1_rose.png"; document.getElementById("d47").src = "image/point/a1_droite_rose.png";}
if ( sens_its74 == 3 && progression_its74 == 17 )  			{ document.getElementById("d46").src = "image/point/a1_rose.png";  document.getElementById("d47").src = "image/point/a1_rose.png"; document.getElementById("d48").src = "image/point/a1_droite_rose.png";}
if ( sens_its74 == 3 && progression_its74 == 18 )  			{ document.getElementById("d47").src = "image/point/a1_rose.png";  document.getElementById("d48").src = "image/point/a1_rose.png"; document.getElementById("d49").src = "image/point/a1_droite_rose.png";}


// its55

if (sens_its55 == 3 && occupation_its55) 				{ progression_its55 = progression_its55 + 1; }
if (sens_its55 == 3 && progression_its55 > 7 ) 			{ occupation_its55 = false; occupation_its119 = true;  
train2_its119[0] = train2_its55[0];
train2_its119[1] = train2_its55[1];
train2_its119[2] = train2_its55[2];
train2_its119[3] = train2_its55[3];
train2_its119[4] = train2_its55[4];
train2_its119[5] = train2_its55[5];
train2_its119[6] = train2_its55[6];
sens_its119 = sens_its55;
progression_its55 = 0;
its55 = 0; 
}

if ( sens_its55 == 3 && progression_its55 == 1 )  		{ document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("d23").src = "image/point/a1_rose.png"; document.getElementById("d24").src = "image/point/a1_droite_rose.png";}
if ( sens_its55 == 3 && progression_its55 == 2 )  		{ document.getElementById("d23").src = "image/point/a1_rose.png";  document.getElementById("d24").src = "image/point/a1_rose.png"; document.getElementById("d25").src = "image/point/a1_droite_rose.png";}
if ( sens_its55 == 3 && progression_its55 == 3 )  		{ document.getElementById("d24").src = "image/point/a1_rose.png";  document.getElementById("d25").src = "image/point/a1_rose.png"; document.getElementById("d26").src = "image/point/a1_droite_rose.png";}
if ( sens_its55 == 3 && progression_its55 == 4 )  		{ document.getElementById("d25").src = "image/point/a1_rose.png";  document.getElementById("d26").src = "image/point/a1_rose.png"; document.getElementById("d27").src = "image/point/a1_droite_rose.png";}
if ( sens_its55 == 3 && progression_its55 == 5 )  		{ document.getElementById("d26").src = "image/point/a1_rose.png";  document.getElementById("d27").src = "image/point/a1_rose.png"; document.getElementById("d28").src = "image/point/a1_droite_rose.png";}
if ( sens_its55 == 3 && progression_its55 == 6 )  		{ document.getElementById("d27").src = "image/point/a1_rose.png";  document.getElementById("d28").src = "image/point/a1_rose.png"; document.getElementById("d29").src = "image/point/a1_droite_rose.png";}
if ( sens_its55 == 3 && progression_its55 == 7 )  		{ document.getElementById("d28").src = "image/point/a1_rose.png";  document.getElementById("d29").src = "image/point/a1_rose.png"; document.getElementById("d30").src = "image/point/a1_droite_rose.png";}

// its119

if (sens_its119 == 3 && occupation_its119 ) 							{ progression_its119 = progression_its119 + 1; ligne = 17;  }
if (sens_its119 == 3 && progression_its119 > 8 ) 						{ occupation_its119 = false; occupation_its56 = true;  
train2_its56[0] = train2_its119[0];
train2_its56[1] = train2_its119[1];
train2_its56[2] = train2_its119[2];
train2_its56[3] = train2_its119[3];
train2_its56[4] = train2_its119[4];
train2_its56[5] = train2_its119[5];
train2_its56[6] = train2_its119[6];
sens_its56 = sens_its119;
progression_its119 = 0;
}

if ( sens_its119 == 3 && progression_its119 == 1 )  			{ document.getElementById("q1").src = "image/point/a1_droite_rose.png";  document.getElementById("d30").src = "image/point/a1_rose.png"; document.getElementById("d29").src = "image/point/a1_rose.png"; }
if ( sens_its119 == 3 && progression_its119 == 2 )  			{ document.getElementById("q2").src = "image/point/a1_droite_rose.png";  document.getElementById("q1").src = "image/point/a1_rose.png"; document.getElementById("d30").src = "image/point/a1_rose.png"; }
if ( sens_its119 == 3 && progression_its119 == 3 )  			{ document.getElementById("q3").src = "image/point/a1_droite_rose.png";  document.getElementById("q2").src = "image/point/a1_rose.png"; document.getElementById("q1").src = "image/point/a1_rose.png";  }
if ( sens_its119 == 3 && progression_its119 == 4 )  			{ document.getElementById("q4").src = "image/point/a1_droite_rose.png";  document.getElementById("q3").src = "image/point/a1_rose.png"; document.getElementById("q2").src = "image/point/a1_rose.png"; }
if ( sens_its119 == 3 && progression_its119 == 5 )  			{ document.getElementById("q5").src = "image/point/a1_droite_rose.png";  document.getElementById("q4").src = "image/point/a1_rose.png"; document.getElementById("q3").src = "image/point/a1_rose.png"; }
if ( sens_its119 == 3 && progression_its119 == 6 )  			{ document.getElementById("q6").src = "image/point/a1_droite_rose.png";  document.getElementById("q5").src = "image/point/a1_rose.png"; document.getElementById("q4").src = "image/point/a1_rose.png"; }
if ( sens_its119 == 3 && progression_its119 == 7 )  			{ document.getElementById("q7").src = "image/point/a1_droite_rose.png";  document.getElementById("q6").src = "image/point/a1_rose.png"; document.getElementById("q5").src = "image/point/a1_rose.png";  }
if ( sens_its119 == 3 && progression_its119 == 8 )  			{ document.getElementById("q8").src = "image/point/a1_droite_rose.png";  document.getElementById("q7").src = "image/point/a1_rose.png"; document.getElementById("q6").src = "image/point/a1_rose.png"; }


// its56
	
if (sens_its56 == 3 && occupation_its56) 				{ progression_its56 = progression_its56 + 1; ligne = 56; }
if (sens_its56 == 3 && progression_its56 > 5 ) 			{ occupation_its56 = false; occupation_its57 = true;   
train2_its57[0] = train2_its56[0];
train2_its57[1] = train2_its56[1];
train2_its57[2] = train2_its56[2];
train2_its57[3] = train2_its56[3];
train2_its57[4] = train2_its56[4];
train2_its57[5] = train2_its56[5];
train2_its57[6] = train2_its56[6];
sens_its57 = sens_its56;
progression_its56 = 0;
its56 = 0; 
}

if ( sens_its56 == 3 && progression_its56 == 1 )  			{ document.getElementById("q7").src = "image/point/a1_rose.png";  document.getElementById("q8").src = "image/point/a1_rose.png"; document.getElementById("d32").src = "image/point/a1_droite_rose.png";}
if ( sens_its56 == 3 && progression_its56 == 2 )  			{ document.getElementById("q8").src = "image/point/a1_rose.png";  document.getElementById("d32").src = "image/point/a1_rose.png"; document.getElementById("d33").src = "image/point/a1_droite_rose.png";}
if ( sens_its56 == 3 && progression_its56 == 3 )  			{ document.getElementById("d32").src = "image/point/a1_rose.png";  document.getElementById("d33").src = "image/point/a1_rose.png"; document.getElementById("d34").src = "image/point/a1_droite_rose.png";}
if ( sens_its56 == 3 && progression_its56 == 4 )  			{ document.getElementById("d33").src = "image/point/a1_rose.png";  document.getElementById("d34").src = "image/point/a1_rose.png"; document.getElementById("d35").src = "image/point/a1_droite_rose.png";}
if ( sens_its56 == 3 && progression_its56 == 5 )  			{ document.getElementById("d34").src = "image/point/a1_rose.png";  document.getElementById("d35").src = "image/point/a1_rose.png"; document.getElementById("d36").src = "image/point/a1_droite_rose.png";}



// its57

if (sens_its57 == 3 && occupation_its57) 				{ progression_its57 = progression_its57 + 1; ligne = 57; }
if (sens_its57 == 3 && progression_its57 > 12 ) 			{ occupation_its57 = false; occupation_its58 = true;  
train2_its58[0] = train2_its57[0];
train2_its58[1] = train2_its57[1];
train2_its58[2] = train2_its57[2];
train2_its58[3] = train2_its57[3];
train2_its58[4] = train2_its57[4];
train2_its58[5] = train2_its57[5];
train2_its58[6] = train2_its57[6];
sens_its58 = sens_its57;
progression_its57 = 0;
its57 = 0; 
}

if ( sens_its57 == 3 && progression_its57 == 1 )  			{ document.getElementById("d36").src = "image/point/a1_rose.png";  document.getElementById("d37").src = "image/point/a1_rose.png"; document.getElementById("d38").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 2 )  			{ document.getElementById("d37").src = "image/point/a1_rose.png";  document.getElementById("d38").src = "image/point/a1_rose.png"; document.getElementById("d39").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 3 )  			{ document.getElementById("d38").src = "image/point/a1_rose.png";  document.getElementById("d39").src = "image/point/a1_rose.png"; document.getElementById("d40").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 4 )  			{ document.getElementById("d39").src = "image/point/a1_rose.png";  document.getElementById("d40").src = "image/point/a1_rose.png"; document.getElementById("d41").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 5 )  			{ document.getElementById("d40").src = "image/point/a1_rose.png";  document.getElementById("d41").src = "image/point/a1_rose.png"; document.getElementById("d42").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 6 )  			{ document.getElementById("d41").src = "image/point/a1_rose.png";  document.getElementById("d42").src = "image/point/a1_rose.png"; document.getElementById("d43").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 7 )  			{ document.getElementById("d42").src = "image/point/a1_rose.png";  document.getElementById("d43").src = "image/point/a1_rose.png"; document.getElementById("d44").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 8 )  			{ document.getElementById("d43").src = "image/point/a1_rose.png";  document.getElementById("d44").src = "image/point/a1_rose.png"; document.getElementById("d45").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 9 )  			{ document.getElementById("d44").src = "image/point/a1_rose.png";  document.getElementById("d45").src = "image/point/a1_rose.png"; document.getElementById("d46").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 10 )  			{ document.getElementById("d45").src = "image/point/a1_rose.png";  document.getElementById("d46").src = "image/point/a1_rose.png"; document.getElementById("d47").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 11 )  			{ document.getElementById("d46").src = "image/point/a1_rose.png";  document.getElementById("d47").src = "image/point/a1_rose.png"; document.getElementById("d48").src = "image/point/a1_droite_rose.png";}
if ( sens_its57 == 3 && progression_its57 == 12 )  			{ document.getElementById("d47").src = "image/point/a1_rose.png";  document.getElementById("d48").src = "image/point/a1_rose.png"; document.getElementById("d49").src = "image/point/a1_droite_rose.png";}

// its58

if (sens_its58 == 3 && occupation_its58) 								{ progression_its58 = progression_its58 + 1; ligne = 58;}
if (sens_its58 == 3 && aiguille88 == 0 && progression_its58 > 5 ) 		{ occupation_its58 = false; occupation_its59 = true;  
train2_its59[0] = train2_its58[0];
train2_its59[1] = train2_its58[1];
train2_its59[2] = train2_its58[2];
train2_its59[3] = train2_its58[3];
train2_its59[4] = train2_its58[4];
train2_its59[5] = train2_its58[5];
train2_its59[6] = train2_its58[6];
sens_its59 = sens_its58;
progression_its58 = 0;
its58 = 0; 
}

if (sens_its58 == 3 && aiguille88 == 0 && occupation_its58 ) 	{
if ( sens_its58 == 3 && progression_its58 == 1 )  			{ document.getElementById("d48").src = "image/point/a1_rose.png";  document.getElementById("d49").src = "image/point/a1_rose.png"; document.getElementById("d50").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 2 )  			{ document.getElementById("d49").src = "image/point/a1_rose.png";  document.getElementById("d50").src = "image/point/a1_rose.png"; document.getElementById("d51").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 3 )  			{ document.getElementById("d50").src = "image/point/a1_rose.png";  document.getElementById("d51").src = "image/point/a1_rose.png"; document.getElementById("d52").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 4 )  			{ document.getElementById("d51").src = "image/point/a1_rose.png";  document.getElementById("d52").src = "image/point/a1_rose.png"; document.getElementById("d53").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rose.png";  document.getElementById("d53").src = "image/point/a1_rose.png"; document.getElementById("d54").src = "image/point/a1_droite_rose.png";}
}

if (sens_its58 == 3 && aiguille88 == 1 && aiguille91 == 0 && progression_its58 > 14 ) 			{ occupation_its58 = false; occupation_its43 = true;  
train2_its43[0] = train2_its58[0];
train2_its43[1] = train2_its58[1];
train2_its43[2] = train2_its58[2];
train2_its43[3] = train2_its58[3];
train2_its43[4] = train2_its58[4];
train2_its43[5] = train2_its58[5];
train2_its43[6] = train2_its58[6];
sens_its43 = sens_its58;
progression_its58 = 0;
aiguille88 = 0;
its58 = 0; its88 = 0; its41 = 0; its42 = 0;
}

if (sens_its58 == 3 && aiguille88 == 1 && aiguille91 == 0 && occupation_its58 ) 	{
if ( sens_its58 == 3 && progression_its58 == 1 )  			{ document.getElementById("d48").src = "image/point/a1_rose.png";  document.getElementById("d49").src = "image/point/a1_rose.png"; document.getElementById("d50").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 2 )  			{ document.getElementById("d49").src = "image/point/a1_rose.png";  document.getElementById("d50").src = "image/point/a1_rose.png"; document.getElementById("d51").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 3 )  			{ document.getElementById("d50").src = "image/point/a1_rose.png";  document.getElementById("d51").src = "image/point/a1_rose.png"; document.getElementById("d52").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 4 )  			{ document.getElementById("d51").src = "image/point/a1_rose.png";  document.getElementById("d52").src = "image/point/a1_rose.png"; document.getElementById("d53").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rose.png";  document.getElementById("d53").src = "image/point/a1_rose.png"; document.getElementById("d54").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 6 )  			{ document.getElementById("d53").src = "image/point/a1_rose.png";  document.getElementById("d54").src = "image/point/a1_rose.png"; document.getElementById("f18").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 7 )  			{ document.getElementById("d54").src = "image/point/a1_rose.png";  document.getElementById("f18").src = "image/point/a1_rose.png"; document.getElementById("f17").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 8 )  			{ document.getElementById("f18").src = "image/point/a1_rose.png";  document.getElementById("f17").src = "image/point/a1_rose.png"; document.getElementById("c56").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 9 )  			{ document.getElementById("f17").src = "image/point/a1_rose.png";  document.getElementById("c56").src = "image/point/a1_rose.png"; document.getElementById("c57").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 10 )  			{ document.getElementById("c56").src = "image/point/a1_rose.png";  document.getElementById("c57").src = "image/point/a1_rose.png"; document.getElementById("c58").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 11 )  			{ document.getElementById("c57").src = "image/point/a1_rose.png";  document.getElementById("c58").src = "image/point/a1_rose.png"; document.getElementById("c59").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 12 )  			{ document.getElementById("c58").src = "image/point/a1_rose.png";  document.getElementById("c59").src = "image/point/a1_rose.png"; document.getElementById("c60").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 13 )  			{ document.getElementById("c59").src = "image/point/a1_rose.png";  document.getElementById("c60").src = "image/point/a1_rose.png"; document.getElementById("c61").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 14 )  			{ document.getElementById("c60").src = "image/point/a1_rose.png";  document.getElementById("c61").src = "image/point/a1_rose.png"; document.getElementById("c62").src = "image/point/a1_droite_rose.png";}
}

if (sens_its58 == 3 && aiguille88 == 1 && aiguille91 == 1 && progression_its58 > 15 ) 			{ occupation_its58 = false; occupation_its22 = true;  
train2_its22[0] = train2_its58[0];
train2_its22[1] = train2_its58[1];
train2_its22[2] = train2_its58[2];
train2_its22[3] = train2_its58[3];
train2_its22[4] = train2_its58[4];
train2_its22[5] = train2_its58[5];
train2_its22[6] = train2_its58[6];
sens_its22 = sens_its58;
progression_its58 = 0;
aiguille88 = 0;
aiguille91 = 0;
its58 = 0; its88 = 0; its41 = 0; its91 = 0; its21 = 0; 
}

if (sens_its58 == 3 && aiguille88 == 1 && aiguille91 == 1 && occupation_its58 ) 	{
if ( sens_its58 == 3 && progression_its58 == 1 )  			{ document.getElementById("d48").src = "image/point/a1_rose.png";  document.getElementById("d49").src = "image/point/a1_rose.png"; document.getElementById("d50").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 2 )  			{ document.getElementById("d49").src = "image/point/a1_rose.png";  document.getElementById("d50").src = "image/point/a1_rose.png"; document.getElementById("d51").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 3 )  			{ document.getElementById("d50").src = "image/point/a1_rose.png";  document.getElementById("d51").src = "image/point/a1_rose.png"; document.getElementById("d52").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 4 )  			{ document.getElementById("d51").src = "image/point/a1_rose.png";  document.getElementById("d52").src = "image/point/a1_rose.png"; document.getElementById("d53").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rose.png";  document.getElementById("d53").src = "image/point/a1_rose.png"; document.getElementById("d54").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 6 )  			{ document.getElementById("d53").src = "image/point/a1_rose.png";  document.getElementById("d54").src = "image/point/a1_rose.png"; document.getElementById("f18").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 7 )  			{ document.getElementById("d54").src = "image/point/a1_rose.png";  document.getElementById("f18").src = "image/point/a1_rose.png"; document.getElementById("f17").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 8 )  			{ document.getElementById("f18").src = "image/point/a1_rose.png";  document.getElementById("f17").src = "image/point/a1_rose.png"; document.getElementById("c56").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 9 )  			{ document.getElementById("f17").src = "image/point/a1_rose.png";  document.getElementById("c56").src = "image/point/a1_rose.png"; document.getElementById("c57").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 10 )  			{ document.getElementById("c56").src = "image/point/a1_rose.png";  document.getElementById("c57").src = "image/point/a1_rose.png"; document.getElementById("f24").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 11 )  			{ document.getElementById("c57").src = "image/point/a1_rose.png";  document.getElementById("f24").src = "image/point/a1_rose.png"; document.getElementById("f23").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 12 )  			{ document.getElementById("f24").src = "image/point/a1_rose.png";  document.getElementById("f23").src = "image/point/a1_rose.png"; document.getElementById("b59").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 13 )  			{ document.getElementById("f23").src = "image/point/a1_rose.png";  document.getElementById("b59").src = "image/point/a1_rose.png"; document.getElementById("b60").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 14 )  			{ document.getElementById("b59").src = "image/point/a1_rose.png";  document.getElementById("b60").src = "image/point/a1_rose.png"; document.getElementById("b61").src = "image/point/a1_droite_rose.png";}
if ( sens_its58 == 3 && progression_its58 == 15 )  			{  document.getElementById("b60").src = "image/point/a1_rose.png";  document.getElementById("b61").src = "image/point/a1_rose.png"; document.getElementById("b62").src = "image/point/a1_droite_rose.png";}
}

// its59

if (sens_its59 == 3 && occupation_its59) 								{ progression_its59 = progression_its59 + 1; ligne = 59; }
if (sens_its59 == 3 && progression_its59 > 2 ) 							{ occupation_its59 = false; occupation_its60 = true;  
train2_its60[0] = train2_its59[0];
train2_its60[1] = train2_its59[1];
train2_its60[2] = train2_its59[2];
train2_its60[3] = train2_its59[3];
train2_its60[4] = train2_its59[4];
train2_its60[5] = train2_its59[5];
train2_its60[6] = train2_its59[6];
sens_its60 = sens_its59;
progression_its59 = 0; 
its59 = 0; 
} 

if ( sens_its59 == 3 && progression_its59 == 1 )  			{ document.getElementById("d53").src = "image/point/a1_rose.png";  document.getElementById("d54").src = "image/point/a1_rose.png"; document.getElementById("d55").src = "image/point/a1_droite_rose.png";}
if ( sens_its59 == 3 && progression_its59 == 2 )  			{ document.getElementById("d54").src = "image/point/a1_rose.png";  document.getElementById("d55").src = "image/point/a1_rose.png"; document.getElementById("d56").src = "image/point/a1_droite_rose.png";}

// its60

if (sens_its60 == 3 && occupation_its60) 								{ progression_its60 = progression_its60 + 1; ligne = 60; } 
if (sens_its60 == 3 && progression_its60 > 6 ) 							{ occupation_its60 = false; occupation_its61 = true;   
train2_its61[0] = train2_its60[0];
train2_its61[1] = train2_its60[1];
train2_its61[2] = train2_its60[2];
train2_its61[3] = train2_its60[3];
train2_its61[4] = train2_its60[4];
train2_its61[5] = train2_its60[5];
train2_its61[6] = train2_its60[6];
sens_its61 = sens_its60;
progression_its60 = 0;
its60 = 0; 
} 

if ( sens_its60 == 3 && progression_its60 == 1 )  			{ document.getElementById("d55").src = "image/point/a1_rose.png";  document.getElementById("d56").src = "image/point/a1_rose.png"; document.getElementById("d57").src = "image/point/a1_droite_rose.png";}
if ( sens_its60 == 3 && progression_its60 == 2 )  			{ document.getElementById("d56").src = "image/point/a1_rose.png";  document.getElementById("d57").src = "image/point/a1_rose.png"; document.getElementById("d58").src = "image/point/a1_droite_rose.png";}
if ( sens_its60 == 3 && progression_its60 == 3 )  			{ document.getElementById("d57").src = "image/point/a1_rose.png";  document.getElementById("d58").src = "image/point/a1_rose.png"; document.getElementById("d59").src = "image/point/a1_droite_rose.png";}
if ( sens_its60 == 3 && progression_its60 == 4 )  			{ document.getElementById("d58").src = "image/point/a1_rose.png";  document.getElementById("d59").src = "image/point/a1_rose.png"; document.getElementById("d60").src = "image/point/a1_droite_rose.png";}
if ( sens_its60 == 3 && progression_its60 == 5 )  			{ document.getElementById("d59").src = "image/point/a1_rose.png";  document.getElementById("d60").src = "image/point/a1_rose.png"; document.getElementById("d61").src = "image/point/a1_droite_rose.png";}
if ( sens_its60 == 3 && progression_its60 == 6 )  			{ document.getElementById("d60").src = "image/point/a1_rose.png";  document.getElementById("d61").src = "image/point/a1_rose.png"; document.getElementById("d62").src = "image/point/a1_droite_rose.png";}

// its61

if (sens_its61 == 3 && occupation_its61) 					{ progression_its61 = progression_its61 + 1; ligne = 60; } 
if (sens_its61 == 3 && progression_its61 > 6 ) 				{ occupation_its61 = false;   
} 

if ( sens_its61 == 3 && progression_its61 == 1 )  			{ document.getElementById("d61").src = "image/point/a1_rose.png";  document.getElementById("d62").src = "image/point/a1_rose.png"; document.getElementById("d63").src = "image/point/a1_droite_rose.png";}
if ( sens_its61 == 3 && progression_its61 == 2 )  			{ document.getElementById("d62").src = "image/point/a1_rose.png";  document.getElementById("d63").src = "image/point/a1_rose.png"; document.getElementById("d64").src = "image/point/a1_droite_rose.png";}
if ( sens_its61 == 3 && progression_its61 == 3 )  			{ document.getElementById("d63").src = "image/point/a1_rose.png";  document.getElementById("d64").src = "image/point/a1_rose.png"; document.getElementById("d65").src = "image/point/a1_droite_rose.png";}
if ( sens_its61 == 3 && progression_its61 == 4 )  			{ document.getElementById("d64").src = "image/point/a1_rose.png";  document.getElementById("d65").src = "image/point/a1_rose.png"; document.getElementById("d66").src = "image/point/a1_droite_rose.png";}
if ( sens_its61 == 3 && progression_its61 == 5 )  			{ document.getElementById("d65").src = "image/point/a1_rose.png";  document.getElementById("d66").src = "image/point/a1_rose.png"; }
if ( sens_its61 == 3 && progression_its61 == 6 )  			{ its61 = 0; document.getElementById("d66").src = "image/point/a1_rose.png"; }




if ( its4 == 1 && sens_its4 == 3 && progression_its4 == 2 ) {
its8 = 0;
document.getElementById("z17").src = "image/feux/rouge_2.png";
}

if ( its103 == 1 && sens_its103 == 3 && progression_its103 == 2 ) {
its117 = 0;
document.getElementById("z21").src = "image/feux/rouge_2.png";
}

if ( its18 == 1 && sens_its18 == 3 && progression_its18 == 2 ) {
its17 = 0;
document.getElementById("z9").src = "image/feux/rouge_2.png";
}

if ( its37 == 1 && sens_its37 == 3 && progression_its37 == 2 ) {
its118 = 0;
document.getElementById("z10").src = "image/feux/rouge_2.png";
}

if ( its56 == 1 && sens_its56 == 3 && progression_its56 == 2 ) {
its119 = 0;
document.getElementById("z11").src = "image/feux/rouge_2.png";
}

if ( its74 == 1 && sens_its74 == 3 && progression_its74 == 2 ) {
its120 = 0;
document.getElementById("z12").src = "image/feux/rouge_2.png";
}

if ( its14 == 1 && sens_its14 == 3 && progression_its14 == 2 ) {
document.getElementById("z1").src = "image/feux/rouge_2.png";
}

if ( its51 == 1 && sens_its51 == 3 && progression_its51 == 2 ) {
document.getElementById("z3").src = "image/feux/rouge_2.png";
}

if ( its8 == 1 && sens_its8 == 3 && progression_its8 == 2 ) {
its23 = 0;
document.getElementById("z16").src = "image/feux/rouge_2.png";
}

if ( its117 == 1 && sens_its117 == 3 && progression_its117 == 2 ) {
its102 = 0;
document.getElementById("z20").src = "image/feux/rouge_2.png";
}

if ( its17 == 1 && sens_its17 == 3 && progression_its17 == 2 ) {
its111 = 0;
document.getElementById("z5").src = "image/feux/rouge_2.png";
}

if ( its118 == 1 && sens_its118 == 3 && progression_its118 == 2 ) {
its34 = 0;
document.getElementById("z6").src = "image/feux/rouge_2.png";
}

if ( its119 == 1 && sens_its119 == 3 && progression_its119 == 2 ) {
its55 = 0;
document.getElementById("z7").src = "image/feux/rouge_2.png";
}

if ( its120 == 1 && sens_its120 == 3 && progression_its120 == 2 ) {
its73 = 0;
document.getElementById("z8").src = "image/feux/rouge_2.png";
}

// fin de nouvelle lignes

*/

} // occupation