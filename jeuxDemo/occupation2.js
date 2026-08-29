
function occupation2() {
	
	// DEPLACEMENT direction geneve 2
	
	
	//document.getElementById("UnTexte_c35").innerHTML = 'controle sur occupation 2';
	
		// its 70 = direction genève 2 contrôle des sortie
		if (sens_its70 == 2 && occupation_its70) {
		if (train2_its70[4] != 2) {
		mauvaise_sortie_bol = true;	
		}
		}
		
		// its 30 = direction yverdon 3 contrôle des sortie
		if (sens_its30 == 2 && occupation_its30) {
		if (train2_its30[4] != 3) {
		mauvaise_sortie_bol = true;	
		}
		}

// its107

if (sens_its107 == 2 && occupation_its107 ) 			{ progression_its107 = progression_its107 + 1;  }
if (sens_its107 == 2 && its106 == 0 && progression_its107 > 6 ) 		{ progression_its107 = 6; }
if (sens_its107 == 2 && progression_its107 > 6 ) 		{ occupation_its107 = false; occupation_its106 = true; 
train2_its106[0] = train2_its107[0];
train2_its106[1] = train2_its107[1];
train2_its106[2] = train2_its107[2];
train2_its106[3] = train2_its107[3];
train2_its106[4] = train2_its107[4];
train2_its106[5] = train2_its107[5];
train2_its106[6] = train2_its107[6];
sens_its106 = sens_its107;
progression_its107 = 0;
its107 = 0;
}


if ( sens_its107 == 2 && progression_its107 == 1 )  			{ document.getElementById("x56").src = "image/point/a1_gauche.png";  document.getElementById("x57").src = "image/point/a1_rouge.png"; document.getElementById("x58").src = "image/point/a1_rouge.png"; }
if ( sens_its107 == 2 && progression_its107 == 2 )  			{ document.getElementById("x55").src = "image/point/a1_gauche.png";  document.getElementById("x56").src = "image/point/a1_rouge.png"; document.getElementById("x57").src = "image/point/a1_rouge.png"; }
if ( sens_its107 == 2 && progression_its107 == 3 )  			{ document.getElementById("x54").src = "image/point/a1_gauche.png";  document.getElementById("x55").src = "image/point/a1_rouge.png"; document.getElementById("x56").src = "image/point/a1_rouge.png"; }
if ( sens_its107 == 2 && progression_its107 == 4 )  			{ document.getElementById("x53").src = "image/point/a1_gauche.png";  document.getElementById("x54").src = "image/point/a1_rouge.png"; document.getElementById("x55").src = "image/point/a1_rouge.png"; }
if ( sens_its107 == 2 && progression_its107 == 5 )  			{ document.getElementById("x52").src = "image/point/a1_gauche.png";  document.getElementById("x53").src = "image/point/a1_rouge.png"; document.getElementById("x54").src = "image/point/a1_rouge.png"; }
if ( sens_its107 == 2 && progression_its107 == 6 )  			{ document.getElementById("x51").src = "image/point/a1_gauche.png";  document.getElementById("x52").src = "image/point/a1_rouge.png"; document.getElementById("x53").src = "image/point/a1_rouge.png"; }

 


// its6

if (sens_its6 == 2 && occupation_its6 ) 												{ progression_its6 = progression_its6 + 1;  }
if (sens_its6 == 2 && aiguille98 == 0 && aiguille92 == 0 && progression_its6 > 6 ) 		{ occupation_its6 = false; occupation_its5 = true;  
train2_its5[0] = train2_its6[0];
train2_its5[1] = train2_its6[1];
train2_its5[2] = train2_its6[2];
train2_its5[3] = train2_its6[3];
train2_its5[4] = train2_its6[4];
train2_its5[5] = train2_its6[5];
train2_its5[6] = train2_its6[6];
sens_its5 = sens_its6;
progression_its6 = 0;
its7 = 0; its6 = 0;
}

if (sens_its6 == 2 && aiguille98 == 0 && aiguille92 == 0 && occupation_its6 ) 		{
if ( sens_its6 == 2 && progression_its6 == 1 )  			{ document.getElementById("a56").src = "image/point/a1_rouge.png";  document.getElementById("a55").src = "image/point/a1_rouge.png"; document.getElementById("a54").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 2 )  			{ document.getElementById("a55").src = "image/point/a1_rouge.png";  document.getElementById("a54").src = "image/point/a1_rouge.png"; document.getElementById("a53").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 3 )  			{ document.getElementById("a54").src = "image/point/a1_rouge.png";  document.getElementById("a53").src = "image/point/a1_rouge.png"; document.getElementById("a52").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 4 )  			{ document.getElementById("a53").src = "image/point/a1_rouge.png";  document.getElementById("a52").src = "image/point/a1_rouge.png"; document.getElementById("a51").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 5 )  			{ document.getElementById("a52").src = "image/point/a1_rouge.png";  document.getElementById("a51").src = "image/point/a1_rouge.png"; document.getElementById("a50").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 6 )  			{ document.getElementById("a51").src = "image/point/a1_rouge.png";  document.getElementById("a50").src = "image/point/a1_rouge.png"; document.getElementById("a49").src = "image/point/a1_gauche.png"; }
}

if (sens_its6 == 2 && aiguille98 == 1 && aiguille92 == 0 && progression_its6 > 10 ) 		{ occupation_its6 = false; occupation_its105 = true;  
train2_its105[0] = train2_its6[0];
train2_its105[1] = train2_its6[1];
train2_its105[2] = train2_its6[2];
train2_its105[3] = train2_its6[3];
train2_its105[4] = train2_its6[4];
train2_its105[5] = train2_its6[5];
train2_its105[6] = train2_its6[6];
sens_its105 = sens_its6;
progression_its6 = 0;
its7 = 0; its6 = 0; its98 = 0; its106 = 0;
aiguille98 = 0;
}

if (sens_its6 == 2 && aiguille98 == 1 && aiguille92 == 0 && occupation_its6 ) 		{
if ( sens_its6 == 2 && progression_its6 == 1 )  			{ document.getElementById("a56").src = "image/point/a1_rouge.png";  document.getElementById("a55").src = "image/point/a1_rouge.png"; document.getElementById("a54").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 2 )  			{ document.getElementById("a55").src = "image/point/a1_rouge.png";  document.getElementById("a54").src = "image/point/a1_rouge.png"; document.getElementById("a53").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 3 )  			{ document.getElementById("a54").src = "image/point/a1_rouge.png";  document.getElementById("a53").src = "image/point/a1_rouge.png"; document.getElementById("a52").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 4 )  			{ document.getElementById("a53").src = "image/point/a1_rouge.png";  document.getElementById("a52").src = "image/point/a1_rouge.png"; document.getElementById("a51").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 5 )  			{ document.getElementById("a52").src = "image/point/a1_rouge.png";  document.getElementById("a51").src = "image/point/a1_rouge.png"; document.getElementById("a50").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 6 )  			{ document.getElementById("a51").src = "image/point/a1_rouge.png";  document.getElementById("a50").src = "image/point/a1_rouge.png"; document.getElementById("a49").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 7 )  			{ document.getElementById("a50").src = "image/point/a1_rouge.png";  document.getElementById("a49").src = "image/point/a1_rouge.png"; document.getElementById("f60").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 8 )  			{ document.getElementById("a49").src = "image/point/a1_rouge.png";  document.getElementById("f60").src = "image/point/a1_rouge.png"; document.getElementById("f61").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 9 )  			{ document.getElementById("f60").src = "image/point/a1_rouge.png";  document.getElementById("f61").src = "image/point/a1_rouge.png"; document.getElementById("x47").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 10 )  			{ document.getElementById("f61").src = "image/point/a1_rouge.png";  document.getElementById("x47").src = "image/point/a1_rouge.png"; document.getElementById("x46").src = "image/point/a1_gauche.png"; }
}

if (sens_its6 == 2 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 0 && progression_its6 > 18 ) 		{ occupation_its6 = false; occupation_its18 = true;  
train2_its18[0] = train2_its6[0];
train2_its18[1] = train2_its6[1];
train2_its18[2] = train2_its6[2];
train2_its18[3] = train2_its6[3];
train2_its18[4] = train2_its6[4];
train2_its18[5] = train2_its6[5];
train2_its18[6] = train2_its6[6];
sens_its18 = sens_its6;
progression_its6 = 0;
its7 = 0; its6 = 0; its98 = 0; its106 = 0; its92 = 0; its19 = 0; its121 = 0;
aiguille98 = 0; 
aiguille92 = 0; 
}

if (sens_its6 == 2 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 0 && occupation_its6 ) 		{
if ( sens_its6 == 2 && progression_its6 == 1 )  			{ document.getElementById("a56").src = "image/point/a1_rouge.png";  document.getElementById("a55").src = "image/point/a1_rouge.png"; document.getElementById("a54").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 2 )  			{ document.getElementById("a55").src = "image/point/a1_rouge.png";  document.getElementById("a54").src = "image/point/a1_rouge.png"; document.getElementById("a53").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 3 )  			{ document.getElementById("a54").src = "image/point/a1_rouge.png";  document.getElementById("a53").src = "image/point/a1_rouge.png"; document.getElementById("a52").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 4 )  			{ document.getElementById("a53").src = "image/point/a1_rouge.png";  document.getElementById("a52").src = "image/point/a1_rouge.png"; document.getElementById("a51").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 5 )  			{ document.getElementById("a52").src = "image/point/a1_rouge.png";  document.getElementById("a51").src = "image/point/a1_rouge.png"; document.getElementById("a50").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 6 )  			{ document.getElementById("a51").src = "image/point/a1_rouge.png";  document.getElementById("a50").src = "image/point/a1_rouge.png"; document.getElementById("a49").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 7 )  			{ document.getElementById("a50").src = "image/point/a1_rouge.png";  document.getElementById("a49").src = "image/point/a1_rouge.png"; document.getElementById("f60").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 8 )  			{ document.getElementById("a49").src = "image/point/a1_rouge.png";  document.getElementById("f60").src = "image/point/a1_rouge.png"; document.getElementById("f61").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 9 )  			{ document.getElementById("f60").src = "image/point/a1_rouge.png";  document.getElementById("f61").src = "image/point/a1_rouge.png"; document.getElementById("x47").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 10 )  			{ document.getElementById("f61").src = "image/point/a1_rouge.png";  document.getElementById("x47").src = "image/point/a1_rouge.png"; document.getElementById("x46").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 11 )  			{ document.getElementById("x47").src = "image/point/a1_rouge.png";  document.getElementById("x46").src = "image/point/a1_rouge.png"; document.getElementById("f25").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 12 )  			{ document.getElementById("x46").src = "image/point/a1_rouge.png";  document.getElementById("f25").src = "image/point/a1_rouge.png"; document.getElementById("f26").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 13 )  			{ document.getElementById("f25").src = "image/point/a1_rouge.png";  document.getElementById("f26").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 14 )  			{ document.getElementById("f26").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 18 )  			{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b39").src = "image/point/a1_gauche.png"; }
}

if (sens_its6 == 2 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 1 && progression_its6 > 26 ) 		{ occupation_its6 = false; occupation_its118 = true;  
train2_its118[0] = train2_its6[0];
train2_its118[1] = train2_its6[1];
train2_its118[2] = train2_its6[2];
train2_its118[3] = train2_its6[3];
train2_its118[4] = train2_its6[4];
train2_its118[5] = train2_its6[5];
train2_its118[6] = train2_its6[6];
sens_its118 = sens_its6;
progression_its6 = 0;
its7 = 0; its6 = 0; its98 = 0; its106 = 0; its92 = 0; its19 = 0; its121 = 0; its95 = 0; its37 = 0; 
aiguille98 = 0; 
aiguille92 = 0; 
aiguille95 = 0; 
}

if (sens_its6 == 2 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 1 && occupation_its6 ) 		{
if ( sens_its6 == 2 && progression_its6 == 1 )  			{ document.getElementById("a56").src = "image/point/a1_rouge.png";  document.getElementById("a55").src = "image/point/a1_rouge.png"; document.getElementById("a54").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 2 )  			{ document.getElementById("a55").src = "image/point/a1_rouge.png";  document.getElementById("a54").src = "image/point/a1_rouge.png"; document.getElementById("a53").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 3 )  			{ document.getElementById("a54").src = "image/point/a1_rouge.png";  document.getElementById("a53").src = "image/point/a1_rouge.png"; document.getElementById("a52").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 4 )  			{ document.getElementById("a53").src = "image/point/a1_rouge.png";  document.getElementById("a52").src = "image/point/a1_rouge.png"; document.getElementById("a51").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 5 )  			{ document.getElementById("a52").src = "image/point/a1_rouge.png";  document.getElementById("a51").src = "image/point/a1_rouge.png"; document.getElementById("a50").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 6 )  			{ document.getElementById("a51").src = "image/point/a1_rouge.png";  document.getElementById("a50").src = "image/point/a1_rouge.png"; document.getElementById("a49").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 7 )  			{ document.getElementById("a50").src = "image/point/a1_rouge.png";  document.getElementById("a49").src = "image/point/a1_rouge.png"; document.getElementById("f60").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 8 )  			{ document.getElementById("a49").src = "image/point/a1_rouge.png";  document.getElementById("f60").src = "image/point/a1_rouge.png"; document.getElementById("f61").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 9 )  			{ document.getElementById("f60").src = "image/point/a1_rouge.png";  document.getElementById("f61").src = "image/point/a1_rouge.png"; document.getElementById("x47").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 10 )  			{ document.getElementById("f61").src = "image/point/a1_rouge.png";  document.getElementById("x47").src = "image/point/a1_rouge.png"; document.getElementById("x46").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 11 )  			{ document.getElementById("x47").src = "image/point/a1_rouge.png";  document.getElementById("x46").src = "image/point/a1_rouge.png"; document.getElementById("f25").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 12 )  			{ document.getElementById("x46").src = "image/point/a1_rouge.png";  document.getElementById("f25").src = "image/point/a1_rouge.png"; document.getElementById("f26").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 13 )  			{ document.getElementById("f25").src = "image/point/a1_rouge.png";  document.getElementById("f26").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 14 )  			{ document.getElementById("f26").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 18 )  			{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b39").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 19 )  			{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b39").src = "image/point/a1_rouge.png"; document.getElementById("b38").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 20 )  			{ document.getElementById("b39").src = "image/point/a1_rouge.png";  document.getElementById("b38").src = "image/point/a1_rouge.png"; document.getElementById("f70").src = "image/point/a1_gauche.png";  }
if ( sens_its6 == 2 && progression_its6 == 21 )  			{ document.getElementById("b38").src = "image/point/a1_rouge.png";  document.getElementById("f70").src = "image/point/a1_rouge.png"; document.getElementById("f71").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 22 )  			{ document.getElementById("f70").src = "image/point/a1_rouge.png";  document.getElementById("f71").src = "image/point/a1_rouge.png"; document.getElementById("c36").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 23 )  			{ document.getElementById("f71").src = "image/point/a1_rouge.png";  document.getElementById("c36").src = "image/point/a1_rouge.png"; document.getElementById("c35").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 24 )  			{ document.getElementById("c36").src = "image/point/a1_rouge.png";  document.getElementById("c35").src = "image/point/a1_rouge.png"; document.getElementById("c34").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 25 )  			{ document.getElementById("c35").src = "image/point/a1_rouge.png";  document.getElementById("c34").src = "image/point/a1_rouge.png"; document.getElementById("c33").src = "image/point/a1_gauche.png"; }
if ( sens_its6 == 2 && progression_its6 == 26 )  			{ document.getElementById("c34").src = "image/point/a1_rouge.png";  document.getElementById("c33").src = "image/point/a1_rouge.png"; document.getElementById("c32").src = "image/point/a1_gauche.png"; }
}



// its5

if (sens_its5 == 2 && occupation_its5 ) 			{ progression_its5 = progression_its5 + 1;  }
if (sens_its5 == 2 && progression_its5 > 13 ) 		{ occupation_its5 = false; occupation_its4 = true;  
train2_its4[0] = train2_its5[0];
train2_its4[1] = train2_its5[1];
train2_its4[2] = train2_its5[2];
train2_its4[3] = train2_its5[3];
train2_its4[4] = train2_its5[4];
train2_its4[5] = train2_its5[5];
train2_its4[6] = train2_its5[6];
sens_its4 = sens_its5;
progression_its5 = 0;
its5 = 0; 
}

if ( sens_its5 == 2 && progression_its5 == 1 )  			{ document.getElementById("a50").src = "image/point/a1_rouge.png";  document.getElementById("a49").src = "image/point/a1_rouge.png"; document.getElementById("a48").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 2 )  			{ document.getElementById("a49").src = "image/point/a1_rouge.png";  document.getElementById("a48").src = "image/point/a1_rouge.png"; document.getElementById("a47").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 3 )  			{ document.getElementById("a48").src = "image/point/a1_rouge.png";  document.getElementById("a47").src = "image/point/a1_rouge.png"; document.getElementById("a46").src = "image/point/a1_gauche.png";  }
if ( sens_its5 == 2 && progression_its5 == 4 )  			{ document.getElementById("a47").src = "image/point/a1_rouge.png";  document.getElementById("a46").src = "image/point/a1_rouge.png"; document.getElementById("a45").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 5 )  			{ document.getElementById("a46").src = "image/point/a1_rouge.png";  document.getElementById("a45").src = "image/point/a1_rouge.png"; document.getElementById("a44").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 6 )  			{ document.getElementById("a45").src = "image/point/a1_rouge.png";  document.getElementById("a44").src = "image/point/a1_rouge.png"; document.getElementById("a43").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 7 )  			{ document.getElementById("a44").src = "image/point/a1_rouge.png";  document.getElementById("a43").src = "image/point/a1_rouge.png"; document.getElementById("a42").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 8 )  			{ document.getElementById("a43").src = "image/point/a1_rouge.png";  document.getElementById("a42").src = "image/point/a1_rouge.png"; document.getElementById("a41").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 9 )  			{ document.getElementById("a42").src = "image/point/a1_rouge.png";  document.getElementById("a41").src = "image/point/a1_rouge.png"; document.getElementById("a40").src = "image/point/a1_gauche.png";  }
if ( sens_its5 == 2 && progression_its5 == 10 )  			{ document.getElementById("a41").src = "image/point/a1_rouge.png";  document.getElementById("a40").src = "image/point/a1_rouge.png"; document.getElementById("a39").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 11 )  			{ document.getElementById("a40").src = "image/point/a1_rouge.png";  document.getElementById("a39").src = "image/point/a1_rouge.png"; document.getElementById("a38").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 12 )  			{ document.getElementById("a39").src = "image/point/a1_rouge.png";  document.getElementById("a38").src = "image/point/a1_rouge.png"; document.getElementById("a37").src = "image/point/a1_gauche.png"; }
if ( sens_its5 == 2 && progression_its5 == 13 )  			{ document.getElementById("a38").src = "image/point/a1_rouge.png";  document.getElementById("a37").src = "image/point/a1_rouge.png"; document.getElementById("a36").src = "image/point/a1_gauche.png"; }

// its4

if (sens_its4 == 2 && occupation_its4 ) 			{ progression_its4 = progression_its4 + 1;  }
if (sens_its4 == 2 && progression_its4 > 4 ) 		{ occupation_its4 = false; occupation_its8 = true;  
train2_its8[0] = train2_its4[0];
train2_its8[1] = train2_its4[1];
train2_its8[2] = train2_its4[2];
train2_its8[3] = train2_its4[3];
train2_its8[4] = train2_its4[4];
train2_its8[5] = train2_its4[5];
train2_its8[6] = train2_its4[6];
sens_its8 = sens_its4;
progression_its4 = 0;
its4 = 0; 
}

if ( sens_its4 == 2 && progression_its4 == 1 )  			{ document.getElementById("a37").src = "image/point/a1_rouge.png";  document.getElementById("a36").src = "image/point/a1_rouge.png"; document.getElementById("a35").src = "image/point/a1_gauche.png"; }
if ( sens_its4 == 2 && progression_its4 == 2 )  			{ document.getElementById("a36").src = "image/point/a1_rouge.png";  document.getElementById("a35").src = "image/point/a1_rouge.png"; document.getElementById("a34").src = "image/point/a1_gauche.png"; }
if ( sens_its4 == 2 && progression_its4 == 3 )  			{ document.getElementById("a35").src = "image/point/a1_rouge.png";  document.getElementById("a34").src = "image/point/a1_rouge.png"; document.getElementById("a33").src = "image/point/a1_gauche.png";  }
if ( sens_its4 == 2 && progression_its4 == 4 )  			{ document.getElementById("a34").src = "image/point/a1_rouge.png";  document.getElementById("a33").src = "image/point/a1_rouge.png"; document.getElementById("a32").src = "image/point/a1_gauche.png"; }

// its8

if (sens_its8 == 2 && occupation_its8 ) 			{ progression_its8 = progression_its8 + 1;  }
//if ( its23 == 0 &&  progression_its8 > 8) 			{ progression_its8 = 8;}
if (sens_its8 == 2 && progression_its8 > 8 ) 		{ occupation_its8 = false; occupation_its23 = true;  
train2_its23[0] = train2_its8[0];
train2_its23[1] = train2_its8[1];
train2_its23[2] = train2_its8[2];
train2_its23[3] = train2_its8[3];
train2_its23[4] = train2_its8[4];
train2_its23[5] = train2_its8[5];
train2_its23[6] = train2_its8[6];
sens_its23 = sens_its8;
progression_its8 = 0;
}

if ( sens_its8 == 2 && progression_its8 == 1 )  			{ document.getElementById("a33").src = "image/point/a1_rouge.png";  document.getElementById("a32").src = "image/point/a1_rouge.png"; document.getElementById("p8").src = "image/point/a1_gauche.png"; }
if ( sens_its8 == 2 && progression_its8 == 2 )  			{ document.getElementById("a32").src = "image/point/a1_rouge.png";  document.getElementById("p8").src = "image/point/a1_rouge.png"; document.getElementById("p7").src = "image/point/a1_gauche.png"; }
if ( sens_its8 == 2 && progression_its8 == 3 )  			{ document.getElementById("p8").src = "image/point/a1_rouge.png";  document.getElementById("p7").src = "image/point/a1_rouge.png"; document.getElementById("p6").src = "image/point/a1_gauche.png";  }
if ( sens_its8 == 2 && progression_its8 == 4 )  			{ document.getElementById("p7").src = "image/point/a1_rouge.png";  document.getElementById("p6").src = "image/point/a1_rouge.png"; document.getElementById("p5").src = "image/point/a1_gauche.png"; }
if ( sens_its8 == 2 && progression_its8 == 5 )  			{ document.getElementById("p6").src = "image/point/a1_rouge.png";  document.getElementById("p5").src = "image/point/a1_rouge.png"; document.getElementById("p4").src = "image/point/a1_gauche.png"; }
if ( sens_its8 == 2 && progression_its8 == 6 )  			{ document.getElementById("p5").src = "image/point/a1_rouge.png";  document.getElementById("p4").src = "image/point/a1_rouge.png"; document.getElementById("p3").src = "image/point/a1_gauche.png"; }
if ( sens_its8 == 2 && progression_its8 == 7 )  			{ document.getElementById("p4").src = "image/point/a1_rouge.png";  document.getElementById("p3").src = "image/point/a1_rouge.png"; document.getElementById("p2").src = "image/point/a1_gauche.png";  }
if ( sens_its8 == 2 && progression_its8 == 8 )  			{ document.getElementById("p3").src = "image/point/a1_rouge.png";  document.getElementById("p2").src = "image/point/a1_rouge.png"; document.getElementById("p1").src = "image/point/a1_gauche.png"; }


// its23

if (sens_its23 == 2 && occupation_its23 ) 			{ progression_its23 = progression_its23 + 1;  }
if (sens_its23 == 2 && progression_its23 > 3 ) 		{ occupation_its23 = false; occupation_its2 = true;  
train2_its2[0] = train2_its23[0];
train2_its2[1] = train2_its23[1];
train2_its2[2] = train2_its23[2];
train2_its2[3] = train2_its23[3];
train2_its2[4] = train2_its23[4];
train2_its2[5] = train2_its23[5];
train2_its2[6] = train2_its23[6];
sens_its2 = sens_its23;
progression_its23 = 0;
its23 = 0; 
}

if ( sens_its23 == 2 && progression_its23 == 1 )  			{ document.getElementById("p2").src = "image/point/a1_rouge.png";  document.getElementById("p1").src = "image/point/a1_rouge.png"; document.getElementById("a31").src = "image/point/a1_gauche.png"; }
if ( sens_its23 == 2 && progression_its23 == 2 )  			{ document.getElementById("p1").src = "image/point/a1_rouge.png";  document.getElementById("a31").src = "image/point/a1_rouge.png"; document.getElementById("a30").src = "image/point/a1_gauche.png"; }
if ( sens_its23 == 2 && progression_its23 == 3 )  			{ document.getElementById("a31").src = "image/point/a1_rouge.png";  document.getElementById("a30").src = "image/point/a1_rouge.png"; document.getElementById("a29").src = "image/point/a1_gauche.png";  }


// its2

if (sens_its2 == 2 && occupation_its2 ) 																										{ progression_its2 = progression_its2 + 1;  }
if (sens_its2 == 2 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && progression_its2 > 28 ) 	{ occupation_its2 = false; occupation_its70 = true;  
train2_its70[0] = train2_its2[0];
train2_its70[1] = train2_its2[1];
train2_its70[2] = train2_its2[2];
train2_its70[3] = train2_its2[3];
train2_its70[4] = train2_its2[4];
train2_its70[5] = train2_its2[5];
train2_its70[6] = train2_its2[6];
sens_its70 = sens_its2;
progression_its2 = 0;
its2 = 0; its97 = 0; its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; 
aiguille97 = 0; 
aiguille82 = 0; 
aiguille80 = 0; 
aiguille78 = 0; 
aiguille87 = 0; 
}

if (sens_its2 == 2 && occupation_its2 && aiguille97 == 1 && aiguille82 == 1 && aiguille78 == 1 && aiguille87 == 1 && aiguille80 == 1) {
if ( sens_its2 == 2 && progression_its2 == 1 )  			{ document.getElementById("a30").src = "image/point/a1_rouge.png";  document.getElementById("a29").src = "image/point/a1_rouge.png"; document.getElementById("a28").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 2 )  			{ document.getElementById("a29").src = "image/point/a1_rouge.png";  document.getElementById("a28").src = "image/point/a1_rouge.png"; document.getElementById("a27").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 3 )  			{ document.getElementById("a28").src = "image/point/a1_rouge.png";  document.getElementById("a27").src = "image/point/a1_rouge.png"; document.getElementById("a26").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 4 )  			{ document.getElementById("a27").src = "image/point/a1_rouge.png";  document.getElementById("a26").src = "image/point/a1_rouge.png"; document.getElementById("f80").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 5 )  			{ document.getElementById("a26").src = "image/point/a1_rouge.png";  document.getElementById("f80").src = "image/point/a1_rouge.png"; document.getElementById("f81").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 6 )  			{ document.getElementById("f80").src = "image/point/a1_rouge.png";  document.getElementById("f81").src = "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 7 )  			{ document.getElementById("f81").src = "image/point/a1_rouge.png";  document.getElementById("x23").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 8 )  			{ document.getElementById("x23").src = "image/point/a1_rouge.png";  document.getElementById("x22").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 9 )  			{ document.getElementById("x22").src = "image/point/a1_rouge.png";  document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 10 )  			{ document.getElementById("x21").src = "image/point/a1_rouge.png";  document.getElementById("f1").src = "image/point/a1_rouge.png"; document.getElementById("f2").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 11 )  			{ document.getElementById("f1").src = "image/point/a1_rouge.png";  document.getElementById("f2").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 12 )  			{ document.getElementById("f2").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 13 )  			{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 14 )  			{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 15 )  			{ document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 16 )  			{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("f11").src = "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 17 )  			{ document.getElementById("f11").src = "image/point/a1_rouge.png";  document.getElementById("f12").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 18 )  			{ document.getElementById("f12").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 19 )  			{ document.getElementById("c14").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("f13").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 20 )  			{ document.getElementById("c13").src = "image/point/a1_rouge.png";  document.getElementById("f13").src = "image/point/a1_rouge.png"; document.getElementById("f14").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 21 )  			{ document.getElementById("f13").src = "image/point/a1_rouge.png";  document.getElementById("f14").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 22 )  			{ document.getElementById("f14").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 23 )  			{ document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("f15").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 24 )  			{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("f15").src = "image/point/a1_rouge.png"; document.getElementById("f16").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 25 )  			{ document.getElementById("f15").src = "image/point/a1_rouge.png";  document.getElementById("f16").src = "image/point/a1_rouge.png"; document.getElementById("e8").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 26 )  			{ document.getElementById("f16").src = "image/point/a1_rouge.png";  document.getElementById("e8").src = "image/point/a1_rouge.png"; document.getElementById("e7").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 27 )  			{ document.getElementById("e8").src = "image/point/a1_rouge.png";  document.getElementById("e7").src = "image/point/a1_rouge.png"; document.getElementById("e6").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 28 )  			{ document.getElementById("e7").src = "image/point/a1_rouge.png";  document.getElementById("e6").src = "image/point/a1_rouge.png"; document.getElementById("e5").src = "image/point/a1_gauche.png"; }

}

if (sens_its2 == 2 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0 && progression_its2 > 18 ) 	{ occupation_its2 = false; occupation_its32 = true;  
train2_its32[0] = train2_its2[0];
train2_its32[1] = train2_its2[1];
train2_its32[2] = train2_its2[2];
train2_its32[3] = train2_its2[3];
train2_its32[4] = train2_its2[4];
train2_its32[5] = train2_its2[5];
train2_its32[6] = train2_its2[6];
sens_its32 = sens_its2;
progression_its2 = 0;
its2 = 0; its97 = 0; its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0;
aiguille97 = 0; 
aiguille82 = 0; 
aiguille80 = 0;
}

if (sens_its2 == 2 && occupation_its2 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0) {
if ( sens_its2 == 2 && progression_its2 == 1 )  			{ document.getElementById("a30").src = "image/point/a1_rouge.png";  document.getElementById("a29").src = "image/point/a1_rouge.png"; document.getElementById("a28").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 2 )  			{ document.getElementById("a29").src = "image/point/a1_rouge.png";  document.getElementById("a28").src = "image/point/a1_rouge.png"; document.getElementById("a27").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 3 )  			{ document.getElementById("a28").src = "image/point/a1_rouge.png";  document.getElementById("a27").src = "image/point/a1_rouge.png"; document.getElementById("a26").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 4 )  			{ document.getElementById("a27").src = "image/point/a1_rouge.png";  document.getElementById("a26").src = "image/point/a1_rouge.png"; document.getElementById("f80").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 5 )  			{ document.getElementById("a26").src = "image/point/a1_rouge.png";  document.getElementById("f80").src = "image/point/a1_rouge.png"; document.getElementById("f81").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 6 )  			{ document.getElementById("f80").src = "image/point/a1_rouge.png";  document.getElementById("f81").src = "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 7 )  			{ document.getElementById("f81").src = "image/point/a1_rouge.png";  document.getElementById("x23").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 8 )  			{ document.getElementById("x23").src = "image/point/a1_rouge.png";  document.getElementById("x22").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 9 )  			{ document.getElementById("x22").src = "image/point/a1_rouge.png";  document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 10 )  			{ document.getElementById("x21").src = "image/point/a1_rouge.png";  document.getElementById("f1").src = "image/point/a1_rouge.png"; document.getElementById("f2").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 11 )  			{ document.getElementById("f1").src = "image/point/a1_rouge.png";  document.getElementById("f2").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 12 )  			{ document.getElementById("f2").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 13 )  			{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 14 )  			{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 15 )  			{ document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 16 )  			{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("f11").src = "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 17 )  			{ document.getElementById("f11").src = "image/point/a1_rouge.png";  document.getElementById("f12").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_gauche.png"; }
if ( sens_its2 == 2 && progression_its2 == 18 )  			{ document.getElementById("f12").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_gauche.png"; }
}



// its106

if (sens_its106 == 2 && occupation_its106 && aiguille92 == 0 && aiguille96 == 0) 			{ progression_its106 = progression_its106 + 1;  }
if (sens_its106 == 2 && progression_its106 > 4 && aiguille92 == 0 && aiguille96 == 0) 		{ occupation_its106 = false; occupation_its105 = true;  
train2_its105[0] = train2_its106[0];
train2_its105[1] = train2_its106[1];
train2_its105[2] = train2_its106[2];
train2_its105[3] = train2_its106[3];
train2_its105[4] = train2_its106[4];
train2_its105[5] = train2_its106[5];
train2_its105[6] = train2_its106[6];
sens_its105 = sens_its106;
progression_its106 = 0;
its106 = 0; 
}

if ( sens_its106 == 2 && aiguille92 == 0 && aiguille96 == 0 && occupation_its106 ) {
if ( sens_its106 == 2 && progression_its106 == 1 )  			{ document.getElementById("x52").src = "image/point/a1_rouge.png";  document.getElementById("x51").src = "image/point/a1_rouge.png"; document.getElementById("x49").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 2 )  			{ document.getElementById("x51").src = "image/point/a1_rouge.png";  document.getElementById("x49").src = "image/point/a1_rouge.png"; document.getElementById("x48").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 3 )  			{ document.getElementById("x49").src = "image/point/a1_rouge.png";  document.getElementById("x48").src = "image/point/a1_rouge.png"; document.getElementById("x47").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 4 )  			{ document.getElementById("x48").src = "image/point/a1_rouge.png";  document.getElementById("x47").src = "image/point/a1_rouge.png"; document.getElementById("x46").src = "image/point/a1_gauche.png"; }
}

 
if (sens_its106 == 2 && occupation_its106 && aiguille92 == 1 && aiguille95 == 0) 				{ progression_its106 = progression_its106 + 1;  }
if (sens_its106 == 2 && progression_its106 > 11 && aiguille92 == 1 && aiguille95 == 0) 			{ occupation_its106 = false; occupation_its121 = true;  
train2_its121[0] = train2_its106[0];
train2_its121[1] = train2_its106[1];
train2_its121[2] = train2_its106[2];
train2_its121[3] = train2_its106[3];
train2_its121[4] = train2_its106[4];
train2_its121[5] = train2_its106[5];
train2_its121[6] = train2_its106[6];
sens_its121 = sens_its106;
progression_its106 = 0;
its106 = 0; its19 = 0; its92 = 0;
aiguille92 = 0;
}
if ( sens_its106 == 2 && aiguille92 == 1 && aiguille95 == 0 &&  occupation_its106 ) {
if ( sens_its106 == 2 && progression_its106 == 1 )  			{ document.getElementById("x52").src = "image/point/a1_rouge.png";  document.getElementById("x51").src = "image/point/a1_rouge.png"; document.getElementById("x49").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 2 )  			{ document.getElementById("x51").src = "image/point/a1_rouge.png";  document.getElementById("x49").src = "image/point/a1_rouge.png"; document.getElementById("x48").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 3 )  			{ document.getElementById("x49").src = "image/point/a1_rouge.png";  document.getElementById("x48").src = "image/point/a1_rouge.png"; document.getElementById("x47").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 4 )  			{ document.getElementById("x48").src = "image/point/a1_rouge.png";  document.getElementById("x47").src = "image/point/a1_rouge.png"; document.getElementById("x46").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 5 )  			{ document.getElementById("x47").src = "image/point/a1_rouge.png";  document.getElementById("x46").src = "image/point/a1_rouge.png"; document.getElementById("f25").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 6 )  			{ document.getElementById("x46").src = "image/point/a1_rouge.png";  document.getElementById("f25").src = "image/point/a1_rouge.png"; document.getElementById("f26").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 7 )  			{ document.getElementById("f25").src = "image/point/a1_rouge.png";  document.getElementById("f26").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 8 )  			{ document.getElementById("f26").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 9 )  			{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 10 )  			{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 11 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_gauche.png"; }
}


 
if (sens_its106 == 2 && occupation_its106 && aiguille92 == 1 && aiguille95 == 1) 				{ progression_its106 = progression_its106 + 1;  }
if (sens_its106 == 2 && progression_its106 > 19 && aiguille92 == 1 && aiguille95 == 1) 			{ occupation_its106 = false; occupation_its118 = true;  
train2_its118[0] = train2_its106[0];
train2_its118[1] = train2_its106[1];
train2_its118[2] = train2_its106[2];
train2_its118[3] = train2_its106[3];
train2_its118[4] = train2_its106[4];
train2_its118[5] = train2_its106[5];
train2_its118[6] = train2_its106[6];
sens_its118 = sens_its106;
progression_its106 = 0;
its106 = 0; its121 = 0; its19 = 0; its92 = 0; its95 = 0;
aiguille92 = 0; aiguille95 = 0;
}
if ( sens_its106 == 2 && aiguille92 == 1 && aiguille95 == 1 && occupation_its106 ) {
if ( sens_its106 == 2 && progression_its106 == 1 )  			{ document.getElementById("x52").src = "image/point/a1_rouge.png";  document.getElementById("x51").src = "image/point/a1_rouge.png"; document.getElementById("x49").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 2 )  			{ document.getElementById("x51").src = "image/point/a1_rouge.png";  document.getElementById("x49").src = "image/point/a1_rouge.png"; document.getElementById("x48").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 3 )  			{ document.getElementById("x49").src = "image/point/a1_rouge.png";  document.getElementById("x48").src = "image/point/a1_rouge.png"; document.getElementById("x47").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 4 )  			{ document.getElementById("x48").src = "image/point/a1_rouge.png";  document.getElementById("x47").src = "image/point/a1_rouge.png"; document.getElementById("x46").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 5 )  			{ document.getElementById("x47").src = "image/point/a1_rouge.png";  document.getElementById("x46").src = "image/point/a1_rouge.png"; document.getElementById("f25").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 6 )  			{ document.getElementById("x46").src = "image/point/a1_rouge.png";  document.getElementById("f25").src = "image/point/a1_rouge.png"; document.getElementById("f26").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 7 )  			{ document.getElementById("f25").src = "image/point/a1_rouge.png";  document.getElementById("f26").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 8 )  			{ document.getElementById("f26").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 9 )  			{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 10 )  			{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 11 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 12 )  			{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b39").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 13 )  			{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b39").src = "image/point/a1_rouge.png"; document.getElementById("b38").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 14 )  			{ document.getElementById("b39").src = "image/point/a1_rouge.png";  document.getElementById("b38").src = "image/point/a1_rouge.png"; document.getElementById("f70").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 15 )  			{ document.getElementById("b38").src = "image/point/a1_rouge.png";  document.getElementById("f70").src = "image/point/a1_rouge.png"; document.getElementById("f71").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 16 )  			{ document.getElementById("f70").src = "image/point/a1_rouge.png";  document.getElementById("f71").src = "image/point/a1_rouge.png"; document.getElementById("c36").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 17 )  			{ document.getElementById("f71").src = "image/point/a1_rouge.png";  document.getElementById("c36").src = "image/point/a1_rouge.png"; document.getElementById("c35").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 18 )  			{ document.getElementById("c36").src = "image/point/a1_rouge.png";  document.getElementById("c35").src = "image/point/a1_rouge.png"; document.getElementById("c34").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 19 )  			{ document.getElementById("c35").src = "image/point/a1_rouge.png";  document.getElementById("c34").src = "image/point/a1_rouge.png"; document.getElementById("c33").src = "image/point/a1_gauche.png"; }
}

// ici nouvelle 106
 
if (sens_its106 == 2 && occupation_its106 && aiguille92 == 0 && aiguille96 == 1) 				{ progression_its106 = progression_its106 + 1;  }
if (sens_its106 == 2 && progression_its106 > 19 && aiguille92 == 0 && aiguille96 == 1) 			{ occupation_its106 = false; occupation_its8 = true;  
train2_its8[0] = train2_its106[0];
train2_its8[1] = train2_its106[1];
train2_its8[2] = train2_its106[2];
train2_its8[3] = train2_its106[3];
train2_its8[4] = train2_its106[4];
train2_its8[5] = train2_its106[5];
train2_its8[6] = train2_its106[6];
sens_its8 = sens_its106;
progression_its106 = 0;
its106 = 0; its105 = 0; its104 = 0; its96 = 0;
aiguille96 = 0;
}
if ( sens_its106 == 2 && aiguille92 == 0 && aiguille96 == 1 && occupation_its106 ) {
if ( sens_its106 == 2 && progression_its106 == 1 )  			{ document.getElementById("x52").src = "image/point/a1_rouge.png";  document.getElementById("x51").src = "image/point/a1_rouge.png"; document.getElementById("x49").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 2 )  			{ document.getElementById("x51").src = "image/point/a1_rouge.png";  document.getElementById("x49").src = "image/point/a1_rouge.png"; document.getElementById("x48").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 3 )  			{ document.getElementById("x49").src = "image/point/a1_rouge.png";  document.getElementById("x48").src = "image/point/a1_rouge.png"; document.getElementById("x47").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 4 )  			{ document.getElementById("x48").src = "image/point/a1_rouge.png";  document.getElementById("x47").src = "image/point/a1_rouge.png"; document.getElementById("x46").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 5 )  			{ document.getElementById("x47").src = "image/point/a1_rouge.png";  document.getElementById("x46").src = "image/point/a1_rouge.png"; document.getElementById("x45").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 6 )  			{ document.getElementById("x46").src = "image/point/a1_rouge.png";  document.getElementById("x45").src = "image/point/a1_rouge.png"; document.getElementById("x44").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 7 )  			{ document.getElementById("x45").src = "image/point/a1_rouge.png";  document.getElementById("x44").src = "image/point/a1_rouge.png"; document.getElementById("x43").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 8 )  			{ document.getElementById("x44").src = "image/point/a1_rouge.png";  document.getElementById("x43").src = "image/point/a1_rouge.png"; document.getElementById("x42").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 9 )  			{ document.getElementById("x43").src = "image/point/a1_rouge.png";  document.getElementById("x42").src = "image/point/a1_rouge.png"; document.getElementById("x41").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 10 )  			{ document.getElementById("x42").src = "image/point/a1_rouge.png";  document.getElementById("x41").src = "image/point/a1_rouge.png"; document.getElementById("x40").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 11 )  			{ document.getElementById("x41").src = "image/point/a1_rouge.png";  document.getElementById("x40").src = "image/point/a1_rouge.png"; document.getElementById("x39").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 12 )  			{ document.getElementById("x40").src = "image/point/a1_rouge.png";  document.getElementById("x39").src = "image/point/a1_rouge.png"; document.getElementById("x38").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 13 )  			{ document.getElementById("x39").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("x37").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 14 )  			{ document.getElementById("x38").src = "image/point/a1_rouge.png";  document.getElementById("x37").src = "image/point/a1_rouge.png"; document.getElementById("f51").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 15 )  			{ document.getElementById("x37").src = "image/point/a1_rouge.png";  document.getElementById("f51").src = "image/point/a1_rouge.png"; document.getElementById("f50").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 16 )  			{ document.getElementById("f51").src = "image/point/a1_rouge.png";  document.getElementById("f50").src = "image/point/a1_rouge.png"; document.getElementById("a35").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 17 )  			{ document.getElementById("f50").src = "image/point/a1_rouge.png";  document.getElementById("a35").src = "image/point/a1_rouge.png"; document.getElementById("a34").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 18 )  			{ document.getElementById("a35").src = "image/point/a1_rouge.png";  document.getElementById("a34").src = "image/point/a1_rouge.png"; document.getElementById("a33").src = "image/point/a1_gauche.png"; }
if ( sens_its106 == 2 && progression_its106 == 19 )  			{ document.getElementById("a34").src = "image/point/a1_rouge.png";  document.getElementById("a33").src = "image/point/a1_rouge.png"; document.getElementById("a32").src = "image/point/a1_gauche.png"; }
}


// its105

if (sens_its105 == 2 && occupation_its105 ) 			{ progression_its105 = progression_its105 + 1;  }
if (sens_its105 == 2 && progression_its105 > 7 ) 		{ occupation_its105 = false; occupation_its104 = true;  
train2_its104[0] = train2_its105[0];
train2_its104[1] = train2_its105[1];
train2_its104[2] = train2_its105[2];
train2_its104[3] = train2_its105[3];
train2_its104[4] = train2_its105[4];
train2_its104[5] = train2_its105[5];
train2_its104[6] = train2_its105[6];
sens_its104 = sens_its105;
progression_its105 = 0;
its105 = 0; 
}

if ( sens_its105 == 2 && progression_its105 == 1 )  			{ document.getElementById("x47").src = "image/point/a1_rouge.png";  document.getElementById("x46").src = "image/point/a1_rouge.png"; document.getElementById("x45").src = "image/point/a1_gauche.png"; }
if ( sens_its105 == 2 && progression_its105 == 2 )  			{ document.getElementById("x46").src = "image/point/a1_rouge.png";  document.getElementById("x45").src = "image/point/a1_rouge.png"; document.getElementById("x44").src = "image/point/a1_gauche.png"; }
if ( sens_its105 == 2 && progression_its105 == 3 )  			{ document.getElementById("x45").src = "image/point/a1_rouge.png";  document.getElementById("x44").src = "image/point/a1_rouge.png"; document.getElementById("x43").src = "image/point/a1_gauche.png"; }
if ( sens_its105 == 2 && progression_its105 == 4 )  			{ document.getElementById("x44").src = "image/point/a1_rouge.png";  document.getElementById("x43").src = "image/point/a1_rouge.png"; document.getElementById("x42").src = "image/point/a1_gauche.png"; }
if ( sens_its105 == 2 && progression_its105 == 5 )  			{ document.getElementById("x43").src = "image/point/a1_rouge.png";  document.getElementById("x42").src = "image/point/a1_rouge.png"; document.getElementById("x41").src = "image/point/a1_gauche.png"; }
if ( sens_its105 == 2 && progression_its105 == 6 )  			{ document.getElementById("x42").src = "image/point/a1_rouge.png";  document.getElementById("x41").src = "image/point/a1_rouge.png"; document.getElementById("x40").src = "image/point/a1_gauche.png"; }
if ( sens_its105 == 2 && progression_its105 == 7 )  			{ document.getElementById("x41").src = "image/point/a1_rouge.png";  document.getElementById("x40").src = "image/point/a1_rouge.png"; document.getElementById("x39").src = "image/point/a1_gauche.png"; }

// its104

if (sens_its104 == 2 && occupation_its104 ) 			{ progression_its104 = progression_its104 + 1;  }
if (sens_its104 == 2 && progression_its104 > 2 ) 		{ occupation_its104 = false; occupation_its103 = true;  
train2_its103[0] = train2_its104[0];
train2_its103[1] = train2_its104[1];
train2_its103[2] = train2_its104[2];
train2_its103[3] = train2_its104[3];
train2_its103[4] = train2_its104[4];
train2_its103[5] = train2_its104[5];
train2_its103[6] = train2_its104[6];
sens_its103 = sens_its104;
progression_its104 = 0;
its104 = 0; 
}

if ( sens_its104 == 2 && progression_its104 == 1 )  			{ document.getElementById("x40").src = "image/point/a1_rouge.png";  document.getElementById("x39").src = "image/point/a1_rouge.png"; document.getElementById("x38").src = "image/point/a1_gauche.png"; }
if ( sens_its104 == 2 && progression_its104 == 2 )  			{ document.getElementById("x39").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("x37").src = "image/point/a1_gauche.png"; }

// its103

if (sens_its103 == 2 && occupation_its103 ) 			{ progression_its103 = progression_its103 + 1;  }
if (sens_its103 == 2 && progression_its103 > 5 ) 		{ occupation_its103 = false; occupation_its117 = true;  
train2_its117[0] = train2_its103[0];
train2_its117[1] = train2_its103[1];
train2_its117[2] = train2_its103[2];
train2_its117[3] = train2_its103[3];
train2_its117[4] = train2_its103[4];
train2_its117[5] = train2_its103[5];
train2_its117[6] = train2_its103[6];
sens_its117 = sens_its103;
progression_its103 = 0;
its103 = 0; its97 = 0;
}

if ( sens_its103 == 2 && progression_its103 == 1 )  			{ document.getElementById("x38").src = "image/point/a1_rouge.png";  document.getElementById("x37").src = "image/point/a1_rouge.png"; document.getElementById("x36").src = "image/point/a1_gauche.png"; }
if ( sens_its103 == 2 && progression_its103 == 2 )  			{ document.getElementById("x37").src = "image/point/a1_rouge.png";  document.getElementById("x36").src = "image/point/a1_rouge.png"; document.getElementById("x35").src = "image/point/a1_gauche.png"; }
if ( sens_its103 == 2 && progression_its103 == 3 )  			{ document.getElementById("x36").src = "image/point/a1_rouge.png";  document.getElementById("x35").src = "image/point/a1_rouge.png"; document.getElementById("x34").src = "image/point/a1_gauche.png"; }
if ( sens_its103 == 2 && progression_its103 == 4 )  			{ document.getElementById("x35").src = "image/point/a1_rouge.png";  document.getElementById("x34").src = "image/point/a1_rouge.png"; document.getElementById("x33").src = "image/point/a1_gauche.png"; }
if ( sens_its103 == 2 && progression_its103 == 5 )  			{ document.getElementById("x34").src = "image/point/a1_rouge.png";  document.getElementById("x33").src = "image/point/a1_rouge.png"; document.getElementById("x32").src = "image/point/a1_gauche.png"; }

// its117

if (sens_its117 == 2 && occupation_its117 ) 			{ progression_its117 = progression_its117 + 1;  }
if (sens_its117 == 2 && progression_its117 > 8 ) 		{ occupation_its117 = false; occupation_its102 = true;  
train2_its102[0] = train2_its117[0];
train2_its102[1] = train2_its117[1];
train2_its102[2] = train2_its117[2];
train2_its102[3] = train2_its117[3];
train2_its102[4] = train2_its117[4];
train2_its102[5] = train2_its117[5];
train2_its102[6] = train2_its117[6];
sens_its102 = sens_its117;
progression_its117 = 0;
}

if ( sens_its117 == 2 && progression_its117 == 1 )  			{ document.getElementById("x33").src = "image/point/a1_rouge.png";  document.getElementById("x32").src = "image/point/a1_rouge.png"; document.getElementById("o8").src = "image/point/a1_gauche.png"; }
if ( sens_its117 == 2 && progression_its117 == 2 )  			{ document.getElementById("x32").src = "image/point/a1_rouge.png";  document.getElementById("o8").src = "image/point/a1_rouge.png"; document.getElementById("o7").src = "image/point/a1_gauche.png"; }
if ( sens_its117 == 2 && progression_its117 == 3 )  			{ document.getElementById("o8").src = "image/point/a1_rouge.png";  document.getElementById("o7").src = "image/point/a1_rouge.png"; document.getElementById("o6").src = "image/point/a1_gauche.png"; }
if ( sens_its117 == 2 && progression_its117 == 4 )  			{ document.getElementById("o7").src = "image/point/a1_rouge.png";  document.getElementById("o6").src = "image/point/a1_rouge.png"; document.getElementById("o5").src = "image/point/a1_gauche.png"; }
if ( sens_its117 == 2 && progression_its117 == 5 )  			{ document.getElementById("o6").src = "image/point/a1_rouge.png";  document.getElementById("o5").src = "image/point/a1_rouge.png"; document.getElementById("o4").src = "image/point/a1_gauche.png"; }
if ( sens_its117 == 2 && progression_its117 == 6 )  			{ document.getElementById("o5").src = "image/point/a1_rouge.png";  document.getElementById("o4").src = "image/point/a1_rouge.png"; document.getElementById("o3").src = "image/point/a1_gauche.png"; }
if ( sens_its117 == 2 && progression_its117 == 7 )  			{ document.getElementById("o4").src = "image/point/a1_rouge.png";  document.getElementById("o3").src = "image/point/a1_rouge.png"; document.getElementById("o2").src = "image/point/a1_gauche.png"; }
if ( sens_its117 == 2 && progression_its117 == 8 )  			{ document.getElementById("o3").src = "image/point/a1_rouge.png";  document.getElementById("o2").src = "image/point/a1_rouge.png"; document.getElementById("o1").src = "image/point/a1_gauche.png"; }

// its102

if (sens_its102 == 2 && occupation_its102 ) 			{ progression_its102 = progression_its102 + 1;  }
if (sens_its102 == 2 && progression_its102 > 7 ) 		{ occupation_its102 = false; occupation_its101 = true;  
train2_its101[0] = train2_its102[0];
train2_its101[1] = train2_its102[1];
train2_its101[2] = train2_its102[2];
train2_its101[3] = train2_its102[3];
train2_its101[4] = train2_its102[4];
train2_its101[5] = train2_its102[5];
train2_its101[6] = train2_its102[6];
sens_its101 = sens_its102;
progression_its102 = 0;
its102 = 0; 
}

if ( sens_its102 == 2 && progression_its102 == 1 )  			{ document.getElementById("o2").src = "image/point/a1_rouge.png";  document.getElementById("o1").src = "image/point/a1_rouge.png"; document.getElementById("x30").src = "image/point/a1_gauche.png"; }
if ( sens_its102 == 2 && progression_its102 == 2 )  			{ document.getElementById("o1").src = "image/point/a1_rouge.png";  document.getElementById("x30").src = "image/point/a1_rouge.png"; document.getElementById("x29").src = "image/point/a1_gauche.png"; }
if ( sens_its102 == 2 && progression_its102 == 3 )  			{ document.getElementById("x30").src = "image/point/a1_rouge.png";  document.getElementById("x29").src = "image/point/a1_rouge.png"; document.getElementById("x28").src = "image/point/a1_gauche.png"; }
if ( sens_its102 == 2 && progression_its102 == 4 )  			{ document.getElementById("x29").src = "image/point/a1_rouge.png";  document.getElementById("x28").src = "image/point/a1_rouge.png"; document.getElementById("x27").src = "image/point/a1_gauche.png"; }
if ( sens_its102 == 2 && progression_its102 == 5 )  			{ document.getElementById("x28").src = "image/point/a1_rouge.png";  document.getElementById("x27").src = "image/point/a1_rouge.png"; document.getElementById("x26").src = "image/point/a1_gauche.png"; }
if ( sens_its102 == 2 && progression_its102 == 6 )  			{ document.getElementById("x27").src = "image/point/a1_rouge.png";  document.getElementById("x26").src = "image/point/a1_rouge.png"; document.getElementById("x25").src = "image/point/a1_gauche.png"; }
if ( sens_its102 == 2 && progression_its102 == 7 )  			{ document.getElementById("x26").src = "image/point/a1_rouge.png";  document.getElementById("x25").src = "image/point/a1_rouge.png"; document.getElementById("x24").src = "image/point/a1_gauche.png"; }

// its101

if (sens_its101 == 2 && occupation_its101 ) 																						{ progression_its101 = progression_its101 + 1;  }
if (sens_its101 == 2 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && progression_its101 > 24 ) 		{ occupation_its101 = false; occupation_its70 = true;  
train2_its70[0] = train2_its101[0];
train2_its70[1] = train2_its101[1];
train2_its70[2] = train2_its101[2];
train2_its70[3] = train2_its101[3];
train2_its70[4] = train2_its101[4];
train2_its70[5] = train2_its101[5];
train2_its70[6] = train2_its101[6];
sens_its70 = sens_its101;
progression_its101 = 0;
its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; 
aiguille82 = 0; 
aiguille80 = 0; 
aiguille78 = 0; 
aiguille87 = 0; 
}

if (sens_its101 == 2 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && occupation_its101 ) 		{
if ( sens_its101 == 2 && progression_its101 == 1 )  			{ document.getElementById("x25").src = "image/point/a1_rouge.png";  document.getElementById("x24").src = "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 2 )  			{ document.getElementById("x24").src = "image/point/a1_rouge.png";  document.getElementById("x23").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 3 )  			{ document.getElementById("x23").src = "image/point/a1_rouge.png";  document.getElementById("x22").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 4 )  			{ document.getElementById("x22").src = "image/point/a1_rouge.png";  document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 5 )  			{ document.getElementById("x21").src = "image/point/a1_rouge.png";  document.getElementById("f1").src = "image/point/a1_rouge.png"; document.getElementById("f2").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 6 )  			{ document.getElementById("f1").src = "image/point/a1_rouge.png";  document.getElementById("f2").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 7 )  			{ document.getElementById("f2").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 8 )  			{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 9 )  			{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 10 )  			{ document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 11 )  			{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("f11").src = "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 12 )  			{ document.getElementById("f11").src = "image/point/a1_rouge.png";  document.getElementById("f12").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 13 )  			{ document.getElementById("f12").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 14 )  			{ document.getElementById("c14").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("f13").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 15 )  			{ document.getElementById("c13").src = "image/point/a1_rouge.png";  document.getElementById("f13").src = "image/point/a1_rouge.png"; document.getElementById("f14").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 16 )  			{ document.getElementById("f13").src = "image/point/a1_rouge.png";  document.getElementById("f14").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 17 )  			{ document.getElementById("f14").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 18 )  			{ document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("f15").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 19 )  			{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("f15").src = "image/point/a1_rouge.png"; document.getElementById("f16").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 20 )  			{ document.getElementById("f15").src = "image/point/a1_rouge.png";  document.getElementById("f16").src = "image/point/a1_rouge.png"; document.getElementById("e8").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 21 )  			{ document.getElementById("f16").src = "image/point/a1_rouge.png";  document.getElementById("e8").src = "image/point/a1_rouge.png"; document.getElementById("e7").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 22 )  			{ document.getElementById("e8").src = "image/point/a1_rouge.png";  document.getElementById("e7").src = "image/point/a1_rouge.png"; document.getElementById("e6").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 23 )  			{ document.getElementById("e7").src = "image/point/a1_rouge.png";  document.getElementById("e6").src = "image/point/a1_rouge.png"; document.getElementById("e5").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 24 )  			{ document.getElementById("e6").src = "image/point/a1_rouge.png";  document.getElementById("e5").src = "image/point/a1_rouge.png"; document.getElementById("e4").src = "image/point/a1_gauche.png"; }
}

if (sens_its101 == 2 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0 && progression_its101 > 13 ) 		{ occupation_its101 = false; occupation_its32 = true;  
train2_its32[0] = train2_its101[0];
train2_its32[1] = train2_its101[1];
train2_its32[2] = train2_its101[2];
train2_its32[3] = train2_its101[3];
train2_its32[4] = train2_its101[4];
train2_its32[5] = train2_its101[5];
train2_its32[6] = train2_its101[6];
sens_its32 = sens_its101;
progression_its101 = 0;
its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its32 = 0;
aiguille82 = 0; 
aiguille80 = 0; 
}

if (sens_its101 == 2 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0 && occupation_its101 ) 		{
if ( sens_its101 == 2 && progression_its101 == 1 )  			{ document.getElementById("x25").src = "image/point/a1_rouge.png";  document.getElementById("x24").src = "image/point/a1_rouge.png"; document.getElementById("x23").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 2 )  			{ document.getElementById("x24").src = "image/point/a1_rouge.png";  document.getElementById("x23").src = "image/point/a1_rouge.png"; document.getElementById("x22").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 3 )  			{ document.getElementById("x23").src = "image/point/a1_rouge.png";  document.getElementById("x22").src = "image/point/a1_rouge.png"; document.getElementById("x21").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 4 )  			{ document.getElementById("x22").src = "image/point/a1_rouge.png";  document.getElementById("x21").src = "image/point/a1_rouge.png"; document.getElementById("f1").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 5 )  			{ document.getElementById("x21").src = "image/point/a1_rouge.png";  document.getElementById("f1").src = "image/point/a1_rouge.png";  document.getElementById("f2").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 6 )  			{ document.getElementById("f1").src = "image/point/a1_rouge.png";   document.getElementById("f2").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 7 )  			{ document.getElementById("f2").src = "image/point/a1_rouge.png";   document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 8 )  			{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 9 )  			{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 10 )  			{ document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 11 )  			{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("f11").src = "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 12 )  			{ document.getElementById("f11").src = "image/point/a1_rouge.png";  document.getElementById("f12").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_gauche.png"; }
if ( sens_its101 == 2 && progression_its101 == 13 )  			{ document.getElementById("f12").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_gauche.png"; }
}





// its21

if (sens_its21 == 2 && occupation_its21 ) 			{ progression_its21 = progression_its21 + 1;  }
if (sens_its21 == 2 && progression_its21 > 4 ) 		{ occupation_its21 = false; occupation_its20 = true;  
train2_its20[0] = train2_its21[0];
train2_its20[1] = train2_its21[1];
train2_its20[2] = train2_its21[2];
train2_its20[3] = train2_its21[3];
train2_its20[4] = train2_its21[4];
train2_its20[5] = train2_its21[5];
train2_its20[6] = train2_its21[6];
sens_its20 = sens_its21;
progression_its21 = 0;
its21 = 0; 
}

if ( sens_its21 == 2 && progression_its21 == 1 )  			{ document.getElementById("b64").src = "image/point/a1_rouge.png";  document.getElementById("b63").src = "image/point/a1_rouge.png"; document.getElementById("b62").src = "image/point/a1_gauche.png"; }
if ( sens_its21 == 2 && progression_its21 == 2 )  			{ document.getElementById("b63").src = "image/point/a1_rouge.png";  document.getElementById("b62").src = "image/point/a1_rouge.png"; document.getElementById("b61").src = "image/point/a1_gauche.png"; }
if ( sens_its21 == 2 && progression_its21 == 3 )  			{ document.getElementById("b62").src = "image/point/a1_rouge.png";  document.getElementById("b61").src = "image/point/a1_rouge.png"; document.getElementById("b60").src = "image/point/a1_gauche.png";  }
if ( sens_its21 == 2 && progression_its21 == 4 )  			{ document.getElementById("b61").src = "image/point/a1_rouge.png";  document.getElementById("b60").src = "image/point/a1_rouge.png"; document.getElementById("b59").src = "image/point/a1_gauche.png"; }

// its20

if (sens_its20 == 2 && occupation_its20 ) 				{ progression_its20 = progression_its20 + 1;  }
if (sens_its20 == 2 && progression_its20 > 14 ) 		{ occupation_its20 = false; occupation_its19 = true;  
train2_its19[0] = train2_its20[0];
train2_its19[1] = train2_its20[1];
train2_its19[2] = train2_its20[2];
train2_its19[3] = train2_its20[3];
train2_its19[4] = train2_its20[4];
train2_its19[5] = train2_its20[5];
train2_its19[6] = train2_its20[6];
sens_its19 = sens_its20;
progression_its20 = 0;
its20 = 0; 
}

if ( sens_its20 == 2 && progression_its20 == 1 )  			{ document.getElementById("b60").src = "image/point/a1_rouge.png";  document.getElementById("b59").src = "image/point/a1_rouge.png"; document.getElementById("b58").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 2 )  			{ document.getElementById("b59").src = "image/point/a1_rouge.png";  document.getElementById("b58").src = "image/point/a1_rouge.png"; document.getElementById("b57").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 3 )  			{ document.getElementById("b58").src = "image/point/a1_rouge.png";  document.getElementById("b57").src = "image/point/a1_rouge.png"; document.getElementById("b56").src = "image/point/a1_gauche.png";  }
if ( sens_its20 == 2 && progression_its20 == 4 )  			{ document.getElementById("b57").src = "image/point/a1_rouge.png";  document.getElementById("b56").src = "image/point/a1_rouge.png"; document.getElementById("b55").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 5 )  			{ document.getElementById("b56").src = "image/point/a1_rouge.png";  document.getElementById("b55").src = "image/point/a1_rouge.png"; document.getElementById("b54").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 6 )  			{ document.getElementById("b55").src = "image/point/a1_rouge.png";  document.getElementById("b54").src = "image/point/a1_rouge.png"; document.getElementById("b53").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 7 )  			{ document.getElementById("b54").src = "image/point/a1_rouge.png";  document.getElementById("b53").src = "image/point/a1_rouge.png"; document.getElementById("b52").src = "image/point/a1_gauche.png";  }
if ( sens_its20 == 2 && progression_its20 == 8 )  			{ document.getElementById("b53").src = "image/point/a1_rouge.png";  document.getElementById("b52").src = "image/point/a1_rouge.png"; document.getElementById("b51").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 9 )  			{ document.getElementById("b52").src = "image/point/a1_rouge.png";  document.getElementById("b51").src = "image/point/a1_rouge.png"; document.getElementById("b50").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 10 )  			{ document.getElementById("b51").src = "image/point/a1_rouge.png";  document.getElementById("b50").src = "image/point/a1_rouge.png"; document.getElementById("b49").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 11 )  			{ document.getElementById("b50").src = "image/point/a1_rouge.png";  document.getElementById("b49").src = "image/point/a1_rouge.png"; document.getElementById("b48").src = "image/point/a1_gauche.png";  }
if ( sens_its20 == 2 && progression_its20 == 12 )  			{ document.getElementById("b49").src = "image/point/a1_rouge.png";  document.getElementById("b48").src = "image/point/a1_rouge.png"; document.getElementById("b47").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 13 )  			{ document.getElementById("b48").src = "image/point/a1_rouge.png";  document.getElementById("b47").src = "image/point/a1_rouge.png"; document.getElementById("b46").src = "image/point/a1_gauche.png"; }
if ( sens_its20 == 2 && progression_its20 == 14 )  			{ document.getElementById("b47").src = "image/point/a1_rouge.png";  document.getElementById("b46").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_gauche.png"; }


// its19

if (sens_its19 == 2 && occupation_its19 ) 				{ progression_its19 = progression_its19 + 1;  }
if (sens_its19 == 2 && progression_its19 > 5 ) 			{ occupation_its19 = false; occupation_its121 = true;  
train2_its121[0] = train2_its19[0];
train2_its121[1] = train2_its19[1];
train2_its121[2] = train2_its19[2];
train2_its121[3] = train2_its19[3];
train2_its121[4] = train2_its19[4];
train2_its121[5] = train2_its19[5];
train2_its121[6] = train2_its19[6];
sens_its121 = sens_its19;
progression_its19 = 0;
its19 = 0; 
}

if ( sens_its19 == 2 && progression_its19 == 1 )  			{ document.getElementById("b46").src = "image/point/a1_rouge.png";  document.getElementById("b45").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_gauche.png"; }
if ( sens_its19 == 2 && progression_its19 == 2 )  			{ document.getElementById("b45").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_gauche.png"; }
if ( sens_its19 == 2 && progression_its19 == 3 )  			{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_gauche.png";  }
if ( sens_its19 == 2 && progression_its19 == 4 )  			{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_gauche.png"; }
if ( sens_its19 == 2 && progression_its19 == 5 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_gauche.png"; }

// its121

if (sens_its121 == 2 && occupation_its121 ) 				{ progression_its121 = progression_its121 + 1;  }
if (sens_its121 == 2 && progression_its121 > 2 ) 			{ occupation_its121 = false; occupation_its18 = true;  
train2_its18[0] = train2_its121[0];
train2_its18[1] = train2_its121[1];
train2_its18[2] = train2_its121[2];
train2_its18[3] = train2_its121[3];
train2_its18[4] = train2_its121[4];
train2_its18[5] = train2_its121[5];
train2_its18[6] = train2_its121[6];
sens_its18 = sens_its121;
progression_its121 = 0;
its121 = 0; 
}

if ( sens_its121 == 2 && progression_its121 == 1 )  			{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("b39").src = "image/point/a1_gauche.png"; }
if ( sens_its121 == 2 && progression_its121 == 2 )  			{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("b39").src = "image/point/a1_rouge.png"; document.getElementById("b38").src = "image/point/a1_gauche.png"; }

// its18

if (sens_its18 == 2 && occupation_its18 ) 				{ progression_its18 = progression_its18 + 1;  }
if (sens_its18 == 2 && progression_its18 > 6 ) 		    { occupation_its18 = false; occupation_its17 = true;  
train2_its17[0] = train2_its18[0];
train2_its17[1] = train2_its18[1];
train2_its17[2] = train2_its18[2];
train2_its17[3] = train2_its18[3];
train2_its17[4] = train2_its18[4];
train2_its17[5] = train2_its18[5];
train2_its17[6] = train2_its18[6];
sens_its17 = sens_its18;
progression_its18 = 0;
its18 = 0; 
}

if ( sens_its18 == 2 && progression_its18 == 1 )  			{ document.getElementById("b39").src = "image/point/a1_rouge.png";  document.getElementById("b38").src = "image/point/a1_rouge.png"; document.getElementById("b37").src = "image/point/a1_gauche.png"; }
if ( sens_its18 == 2 && progression_its18 == 2 )  			{ document.getElementById("b38").src = "image/point/a1_rouge.png";  document.getElementById("b37").src = "image/point/a1_rouge.png"; document.getElementById("b36").src = "image/point/a1_gauche.png"; }
if ( sens_its18 == 2 && progression_its18 == 3 )  			{ document.getElementById("b37").src = "image/point/a1_rouge.png";  document.getElementById("b36").src = "image/point/a1_rouge.png"; document.getElementById("b35").src = "image/point/a1_gauche.png";  }
if ( sens_its18 == 2 && progression_its18 == 4 )  			{ document.getElementById("b36").src = "image/point/a1_rouge.png";  document.getElementById("b35").src = "image/point/a1_rouge.png"; document.getElementById("b34").src = "image/point/a1_gauche.png"; }
if ( sens_its18 == 2 && progression_its18 == 5 )  			{ document.getElementById("b35").src = "image/point/a1_rouge.png";  document.getElementById("b34").src = "image/point/a1_rouge.png"; document.getElementById("b33").src = "image/point/a1_gauche.png"; }
if ( sens_its18 == 2 && progression_its18 == 6 )  			{ document.getElementById("b34").src = "image/point/a1_rouge.png";  document.getElementById("b33").src = "image/point/a1_rouge.png"; document.getElementById("b32").src = "image/point/a1_gauche.png"; }

// its17

if (sens_its17 == 2 && occupation_its17 ) 				{ progression_its17 = progression_its17 + 1;  }
if (sens_its17 == 2 && progression_its17 > 8 ) 		    { occupation_its17 = false; occupation_its111 = true;  
train2_its111[0] = train2_its17[0];
train2_its111[1] = train2_its17[1];
train2_its111[2] = train2_its17[2];
train2_its111[3] = train2_its17[3];
train2_its111[4] = train2_its17[4];
train2_its111[5] = train2_its17[5];
train2_its111[6] = train2_its17[6];
sens_its111 = sens_its17;
progression_its17 = 0;
}

if ( sens_its17 == 2 && progression_its17 == 1 )  			{ document.getElementById("b33").src = "image/point/a1_rouge.png";  document.getElementById("b32").src = "image/point/a1_rouge.png"; document.getElementById("n8").src = "image/point/a1_gauche.png"; }
if ( sens_its17 == 2 && progression_its17 == 2 )  			{ document.getElementById("b32").src = "image/point/a1_rouge.png";  document.getElementById("n8").src = "image/point/a1_rouge.png"; document.getElementById("n7").src = "image/point/a1_gauche.png"; }
if ( sens_its17 == 2 && progression_its17 == 3 )  			{ document.getElementById("n8").src = "image/point/a1_rouge.png";  document.getElementById("n7").src = "image/point/a1_rouge.png"; document.getElementById("n6").src = "image/point/a1_gauche.png"; }
if ( sens_its17 == 2 && progression_its17 == 4 )  			{ document.getElementById("n7").src = "image/point/a1_rouge.png";  document.getElementById("n6").src = "image/point/a1_rouge.png"; document.getElementById("n5").src = "image/point/a1_gauche.png"; }
if ( sens_its17 == 2 && progression_its17 == 5 )  			{ document.getElementById("n6").src = "image/point/a1_rouge.png";  document.getElementById("n5").src = "image/point/a1_rouge.png"; document.getElementById("n4").src = "image/point/a1_gauche.png"; }
if ( sens_its17 == 2 && progression_its17 == 6 )  			{ document.getElementById("n5").src = "image/point/a1_rouge.png";  document.getElementById("n4").src = "image/point/a1_rouge.png"; document.getElementById("n3").src = "image/point/a1_gauche.png"; }
if ( sens_its17 == 2 && progression_its17 == 7 )  			{ document.getElementById("n4").src = "image/point/a1_rouge.png";  document.getElementById("n3").src = "image/point/a1_rouge.png"; document.getElementById("n2").src = "image/point/a1_gauche.png"; }
if ( sens_its17 == 2 && progression_its17 == 8 )  			{ document.getElementById("n3").src = "image/point/a1_rouge.png";  document.getElementById("n2").src = "image/point/a1_rouge.png"; document.getElementById("n1").src = "image/point/a1_gauche.png"; }

//its111

if (sens_its111 == 2 && occupation_its111 ) 			{ progression_its111 = progression_its111 + 1;  }
if (sens_its111 == 2 && progression_its111 > 11 ) 		{ occupation_its111 = false; occupation_its16 = true;  
train2_its16[0] = train2_its111[0];
train2_its16[1] = train2_its111[1];
train2_its16[2] = train2_its111[2];
train2_its16[3] = train2_its111[3];
train2_its16[4] = train2_its111[4];
train2_its16[5] = train2_its111[5];
train2_its16[6] = train2_its111[6];
sens_its16 = sens_its111;
progression_its111 = 0;
its111 = 0; 
}

if ( sens_its111 == 2 && progression_its111 == 1 )  			{ document.getElementById("n2").src = "image/point/a1_rouge.png";  document.getElementById("n1").src = "image/point/a1_rouge.png"; document.getElementById("b30").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 2 )  			{ document.getElementById("n1").src = "image/point/a1_rouge.png";  document.getElementById("b30").src = "image/point/a1_rouge.png"; document.getElementById("b29").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 3 )  			{ document.getElementById("b30").src = "image/point/a1_rouge.png";  document.getElementById("b29").src = "image/point/a1_rouge.png"; document.getElementById("b28").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 4 )  			{ document.getElementById("b29").src = "image/point/a1_rouge.png";  document.getElementById("b28").src = "image/point/a1_rouge.png"; document.getElementById("b27").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 5 )  			{ document.getElementById("b28").src = "image/point/a1_rouge.png";  document.getElementById("b27").src = "image/point/a1_rouge.png"; document.getElementById("b26").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 6 )  			{ document.getElementById("b27").src = "image/point/a1_rouge.png";  document.getElementById("b26").src = "image/point/a1_rouge.png"; document.getElementById("b25").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 7 )  			{ document.getElementById("b26").src = "image/point/a1_rouge.png";  document.getElementById("b25").src = "image/point/a1_rouge.png"; document.getElementById("b24").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 8 )  			{ document.getElementById("b25").src = "image/point/a1_rouge.png";  document.getElementById("b24").src = "image/point/a1_rouge.png"; document.getElementById("b23").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 9 )  			{ document.getElementById("b24").src = "image/point/a1_rouge.png";  document.getElementById("b23").src = "image/point/a1_rouge.png"; document.getElementById("b22").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 10 )  			{ document.getElementById("b23").src = "image/point/a1_rouge.png";  document.getElementById("b22").src = "image/point/a1_rouge.png"; document.getElementById("b21").src = "image/point/a1_gauche.png"; }
if ( sens_its111 == 2 && progression_its111 == 11 )  			{ document.getElementById("b22").src = "image/point/a1_rouge.png";  document.getElementById("b21").src = "image/point/a1_rouge.png"; document.getElementById("b20").src = "image/point/a1_gauche.png"; }

// its16

if (sens_its16 == 2 && occupation_its16 ) 							{ progression_its16 = progression_its16 + 1;}
if (sens_its16 == 2 && aiguille80 == 0 && progression_its16 > 4 ) 	{ occupation_its16 = false; occupation_its15 = true;  
train2_its15[0] = train2_its16[0];
train2_its15[1] = train2_its16[1];
train2_its15[2] = train2_its16[2];
train2_its15[3] = train2_its16[3];
train2_its15[4] = train2_its16[4];
train2_its15[5] = train2_its16[5];
train2_its15[6] = train2_its16[6];
sens_its15 = sens_its16;
progression_its16 = 0;
its16 = 0; 
}

if (sens_its16 == 2 && aiguille80 == 0 && occupation_its16 ) 	{
if ( sens_its16 == 2 && progression_its16 == 1 )  		{ document.getElementById("b21").src = "image/point/a1_rouge.png";  document.getElementById("b20").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 2 )  		{ document.getElementById("b20").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 3 )  		{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 4 )  		{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_gauche.png";}
}

if (sens_its16 == 2 && aiguille80 == 1 && aiguille78 == 0 && progression_its16 > 8 ) 	{ occupation_its16 = false; occupation_its32 = true;  
train2_its32[0] = train2_its16[0];
train2_its32[1] = train2_its16[1];
train2_its32[2] = train2_its16[2];
train2_its32[3] = train2_its16[3];
train2_its32[4] = train2_its16[4];
train2_its32[5] = train2_its16[5];
train2_its32[6] = train2_its16[6];
sens_its32 = sens_its16;
progression_its16 = 0;
its16 = 0; its80 = 0; its131 = 0; its32 = 0;
aiguille80 = 0; 
}

if (sens_its16 == 2 && aiguille80 == 1 && aiguille78 == 0 && occupation_its16 ) 	{
if ( sens_its16 == 2 && progression_its16 == 1 )  		{ document.getElementById("b21").src = "image/point/a1_rouge.png";  document.getElementById("b20").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 2 )  		{ document.getElementById("b20").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 3 )  		{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 4 )  		{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 5 )  		{ document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 6 )  		{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("f11").src = "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 7 )  		{ document.getElementById("f11").src = "image/point/a1_rouge.png";  document.getElementById("f12").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 8 )  		{ document.getElementById("f12").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_gauche.png"; }
}

if (sens_its16 == 2 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && progression_its16 > 19 ) 	{ occupation_its16 = false; occupation_its70 = true;  
train2_its70[0] = train2_its16[0];
train2_its70[1] = train2_its16[1];
train2_its70[2] = train2_its16[2];
train2_its70[3] = train2_its16[3];
train2_its70[4] = train2_its16[4];
train2_its70[5] = train2_its16[5];
train2_its70[6] = train2_its16[6];
sens_its70 = sens_its16;
progression_its16 = 0;
its16 = 0; its80 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; 
aiguille80 = 0; 
aiguille78 = 0; 
aiguille87 = 0; 
}

if (sens_its16 == 2 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && occupation_its16 ) 	{
if ( sens_its16 == 2 && progression_its16 == 1 )  			{ document.getElementById("b21").src = "image/point/a1_rouge.png";  document.getElementById("b20").src = "image/point/a1_rouge.png"; document.getElementById("b19").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 2 )  			{ document.getElementById("b20").src = "image/point/a1_rouge.png";  document.getElementById("b19").src = "image/point/a1_rouge.png"; document.getElementById("b18").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 3 )  			{ document.getElementById("b19").src = "image/point/a1_rouge.png";  document.getElementById("b18").src = "image/point/a1_rouge.png"; document.getElementById("b17").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 4 )  			{ document.getElementById("b18").src = "image/point/a1_rouge.png";  document.getElementById("b17").src = "image/point/a1_rouge.png"; document.getElementById("b16").src = "image/point/a1_gauche.png";}
if ( sens_its16 == 2 && progression_its16 == 5 )  			{ document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("f11").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 6 )  			{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("f11").src = "image/point/a1_rouge.png"; document.getElementById("f12").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 7 )  			{ document.getElementById("f11").src = "image/point/a1_rouge.png";  document.getElementById("f12").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 8 )  			{ document.getElementById("f12").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 9 )  			{ document.getElementById("c14").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("f13").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 10 )  			{ document.getElementById("c13").src = "image/point/a1_rouge.png";  document.getElementById("f13").src = "image/point/a1_rouge.png"; document.getElementById("f14").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 11 )  			{ document.getElementById("f13").src = "image/point/a1_rouge.png";  document.getElementById("f14").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 12 )  			{ document.getElementById("f14").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 13 )  			{ document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("f15").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 14 )  			{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("f15").src = "image/point/a1_rouge.png"; document.getElementById("f16").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 15 )  			{ document.getElementById("f15").src = "image/point/a1_rouge.png";  document.getElementById("f16").src = "image/point/a1_rouge.png"; document.getElementById("e8").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 16 )  			{ document.getElementById("f16").src = "image/point/a1_rouge.png";  document.getElementById("e8").src = "image/point/a1_rouge.png"; document.getElementById("e7").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 17 )  			{ document.getElementById("e8").src = "image/point/a1_rouge.png";  document.getElementById("e7").src = "image/point/a1_rouge.png"; document.getElementById("e6").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 18 )  			{ document.getElementById("e7").src = "image/point/a1_rouge.png";  document.getElementById("e6").src = "image/point/a1_rouge.png"; document.getElementById("e5").src = "image/point/a1_gauche.png"; }
if ( sens_its16 == 2 && progression_its16 == 19 )  			{ document.getElementById("e6").src = "image/point/a1_rouge.png";  document.getElementById("e5").src = "image/point/a1_rouge.png"; document.getElementById("e4").src = "image/point/a1_gauche.png"; }
}


// its15

if (sens_its15 == 2 && occupation_its15 ) 							{ progression_its15 = progression_its15 + 1; }
if (sens_its15 == 2 && progression_its15 > 8 ) 						{ occupation_its15 = false; occupation_its14 = true;  
train2_its14[0] = train2_its15[0];
train2_its14[1] = train2_its15[1];
train2_its14[2] = train2_its15[2];
train2_its14[3] = train2_its15[3];
train2_its14[4] = train2_its15[4];
train2_its14[5] = train2_its15[5];
train2_its14[6] = train2_its15[6];
sens_its14 = sens_its15;
progression_its15 = 0;
its15 = 0; 
}

if ( sens_its15 == 2 && progression_its15 == 1 )  		{ document.getElementById("b17").src = "image/point/a1_rouge.png";  document.getElementById("b16").src = "image/point/a1_rouge.png"; document.getElementById("b15").src = "image/point/a1_gauche.png";}
if ( sens_its15 == 2 && progression_its15 == 2 )  		{ document.getElementById("b16").src = "image/point/a1_rouge.png";  document.getElementById("b15").src = "image/point/a1_rouge.png"; document.getElementById("b14").src = "image/point/a1_gauche.png";}
if ( sens_its15 == 2 && progression_its15 == 3 )  		{ document.getElementById("b15").src = "image/point/a1_rouge.png";  document.getElementById("b14").src = "image/point/a1_rouge.png"; document.getElementById("b13").src = "image/point/a1_gauche.png";}
if ( sens_its15 == 2 && progression_its15 == 4 )  		{ document.getElementById("b14").src = "image/point/a1_rouge.png";  document.getElementById("b13").src = "image/point/a1_rouge.png"; document.getElementById("b12").src = "image/point/a1_gauche.png";}
if ( sens_its15 == 2 && progression_its15 == 5 )  		{ document.getElementById("b13").src = "image/point/a1_rouge.png";  document.getElementById("b12").src = "image/point/a1_rouge.png"; document.getElementById("b11").src = "image/point/a1_gauche.png";}
if ( sens_its15 == 2 && progression_its15 == 6 )  		{ document.getElementById("b12").src = "image/point/a1_rouge.png";  document.getElementById("b11").src = "image/point/a1_rouge.png"; document.getElementById("b10").src = "image/point/a1_gauche.png";}
if ( sens_its15 == 2 && progression_its15 == 7 )  		{ document.getElementById("b11").src = "image/point/a1_rouge.png";  document.getElementById("b10").src = "image/point/a1_rouge.png"; document.getElementById("b9").src = "image/point/a1_gauche.png";}
if ( sens_its15 == 2 && progression_its15 == 8 )  		{ document.getElementById("b10").src = "image/point/a1_rouge.png";  document.getElementById("b9").src = "image/point/a1_rouge.png"; document.getElementById("b8").src = "image/point/a1_gauche.png";}

// its42

if (sens_its42 == 2 && occupation_its42 ) 							{ progression_its42 = progression_its42 + 1; }
if (sens_its42 == 2 && progression_its42 > 5 ) 						{ occupation_its42 = false; occupation_its41 = true;  
train2_its41[0] = train2_its42[0];
train2_its41[1] = train2_its42[1];
train2_its41[2] = train2_its42[2];
train2_its41[3] = train2_its42[3];
train2_its41[4] = train2_its42[4];
train2_its41[5] = train2_its42[5];
train2_its41[6] = train2_its42[6];
sens_its41 = sens_its42;
progression_its42 = 0;
its42 = 0; 
}

if ( sens_its42 == 2 && progression_its42 == 1 )  			{ document.getElementById("c64").src = "image/point/a1_rouge.png";  document.getElementById("c63").src = "image/point/a1_rouge.png"; document.getElementById("c62").src = "image/point/a1_gauche.png"; }
if ( sens_its42 == 2 && progression_its42 == 2 )  			{ document.getElementById("c63").src = "image/point/a1_rouge.png";  document.getElementById("c62").src = "image/point/a1_rouge.png"; document.getElementById("c61").src = "image/point/a1_gauche.png"; }
if ( sens_its42 == 2 && progression_its42 == 3 )  			{ document.getElementById("c62").src = "image/point/a1_rouge.png";  document.getElementById("c61").src = "image/point/a1_rouge.png"; document.getElementById("c60").src = "image/point/a1_gauche.png";  }
if ( sens_its42 == 2 && progression_its42 == 4 )  			{ document.getElementById("c61").src = "image/point/a1_rouge.png";  document.getElementById("c60").src = "image/point/a1_rouge.png"; document.getElementById("c59").src = "image/point/a1_gauche.png"; }
if ( sens_its42 == 2 && progression_its42 == 5 )  			{ document.getElementById("c60").src = "image/point/a1_rouge.png";  document.getElementById("c59").src = "image/point/a1_rouge.png"; document.getElementById("c58").src = "image/point/a1_gauche.png"; }



// its41

if (sens_its41 == 2 && occupation_its41) 								{ progression_its41 = progression_its41 + 1;} 
if (sens_its41 == 2 && progression_its41 > 2 ) 							{ occupation_its41 = false; occupation_its40 = true; 
train2_its40[0] = train2_its41[0];
train2_its40[1] = train2_its41[1];
train2_its40[2] = train2_its41[2];
train2_its40[3] = train2_its41[3];
train2_its40[4] = train2_its41[4];
train2_its40[5] = train2_its41[5];
train2_its40[6] = train2_its41[6];
sens_its40 = sens_its41;
progression_its41 = 0;
its41 = 0; 
} 

if ( sens_its41 == 2 && progression_its41 == 1 )  			{ document.getElementById("c59").src = "image/point/a1_rouge.png";  document.getElementById("c58").src = "image/point/a1_rouge.png"; document.getElementById("c57").src = "image/point/a1_gauche.png"; }
if ( sens_its41 == 2 && progression_its41 == 2 )  			{ document.getElementById("c58").src = "image/point/a1_rouge.png";  document.getElementById("c57").src = "image/point/a1_rouge.png"; document.getElementById("c56").src = "image/point/a1_gauche.png";  }

// its40

if (sens_its40 == 2 && occupation_its40) 				{ progression_its40 = progression_its40 + 1;} 
if (sens_its40 == 2 && progression_its40 > 7 ) 			{ occupation_its40 = false; occupation_its39 = true;  
train2_its39[0] = train2_its40[0];
train2_its39[1] = train2_its40[1];
train2_its39[2] = train2_its40[2];
train2_its39[3] = train2_its40[3];
train2_its39[4] = train2_its40[4];
train2_its39[5] = train2_its40[5];
train2_its39[6] = train2_its40[6];
sens_its39 = sens_its40;
progression_its40 = 0;
its40 = 0; 
} 

if ( sens_its40 == 2 && progression_its40 == 1 )  			{ document.getElementById("c57").src = "image/point/a1_rouge.png";  document.getElementById("c56").src = "image/point/a1_rouge.png"; document.getElementById("c55").src = "image/point/a1_gauche.png"; }
if ( sens_its40 == 2 && progression_its40 == 2 )  			{ document.getElementById("c56").src = "image/point/a1_rouge.png";  document.getElementById("c55").src = "image/point/a1_rouge.png"; document.getElementById("c54").src = "image/point/a1_gauche.png"; }
if ( sens_its40 == 2 && progression_its40 == 3 )  			{ document.getElementById("c55").src = "image/point/a1_rouge.png";  document.getElementById("c54").src = "image/point/a1_rouge.png"; document.getElementById("c53").src = "image/point/a1_gauche.png"; }
if ( sens_its40 == 2 && progression_its40 == 4 )  			{ document.getElementById("c54").src = "image/point/a1_rouge.png";  document.getElementById("c53").src = "image/point/a1_rouge.png"; document.getElementById("c52").src = "image/point/a1_gauche.png";  }
if ( sens_its40 == 2 && progression_its40 == 5 )  			{ document.getElementById("c53").src = "image/point/a1_rouge.png";  document.getElementById("c52").src = "image/point/a1_rouge.png"; document.getElementById("c51").src = "image/point/a1_gauche.png"; }
if ( sens_its40 == 2 && progression_its40 == 6 )  			{ document.getElementById("c52").src = "image/point/a1_rouge.png";  document.getElementById("c51").src = "image/point/a1_rouge.png"; document.getElementById("c50").src = "image/point/a1_gauche.png"; }
if ( sens_its40 == 2 && progression_its40 == 7 )  			{ document.getElementById("c51").src = "image/point/a1_rouge.png";  document.getElementById("c50").src = "image/point/a1_rouge.png"; document.getElementById("c49").src = "image/point/a1_gauche.png"; }

// its39

if (sens_its39 == 2 && occupation_its39) 				{ progression_its39 = progression_its39 + 1;}
if (sens_its39 == 2 && progression_its39 > 2 ) 			{ occupation_its39 = false; occupation_its38 = true;  
train2_its38[0] = train2_its39[0];
train2_its38[1] = train2_its39[1];
train2_its38[2] = train2_its39[2];
train2_its38[3] = train2_its39[3];
train2_its38[4] = train2_its39[4];
train2_its38[5] = train2_its39[5];
train2_its38[6] = train2_its39[6];
sens_its38 = sens_its39;
progression_its39 = 0;
its39 = 0; 
} 

if ( sens_its39 == 2 && progression_its39 == 1 )  			{ document.getElementById("c50").src = "image/point/a1_rouge.png";  document.getElementById("c49").src = "image/point/a1_rouge.png"; document.getElementById("c48").src = "image/point/a1_gauche.png";  }
if ( sens_its39 == 2 && progression_its39 == 2 )  			{ document.getElementById("c49").src = "image/point/a1_rouge.png";  document.getElementById("c48").src = "image/point/a1_rouge.png"; document.getElementById("c47").src = "image/point/a1_gauche.png"; }

// its38

if (sens_its38 == 2 && occupation_its38) 				{ progression_its38 = progression_its38 + 1;}
if (sens_its38 == 2 && progression_its38 > 10 ) 		{ occupation_its38 = false; occupation_its37 = true;  
train2_its37[0] = train2_its38[0];
train2_its37[1] = train2_its38[1];
train2_its37[2] = train2_its38[2];
train2_its37[3] = train2_its38[3];
train2_its37[4] = train2_its38[4];
train2_its37[5] = train2_its38[5];
train2_its37[6] = train2_its38[6]; 
sens_its37 = sens_its38;
progression_its38 = 0;
its38 = 0; 
}

if ( sens_its38 == 2 && progression_its38 == 1 )  			{ document.getElementById("c48").src = "image/point/a1_rouge.png";  document.getElementById("c47").src = "image/point/a1_rouge.png"; document.getElementById("c46").src = "image/point/a1_gauche.png"; }
if ( sens_its38 == 2 && progression_its38 == 2 )  			{ document.getElementById("c47").src = "image/point/a1_rouge.png";  document.getElementById("c46").src = "image/point/a1_rouge.png"; document.getElementById("c45").src = "image/point/a1_gauche.png"; }
if ( sens_its38 == 2 && progression_its38 == 3 )  			{ document.getElementById("c46").src = "image/point/a1_rouge.png";  document.getElementById("c45").src = "image/point/a1_rouge.png"; document.getElementById("c44").src = "image/point/a1_gauche.png"; }
if ( sens_its38 == 2 && progression_its38 == 4 )  			{ document.getElementById("c45").src = "image/point/a1_rouge.png";  document.getElementById("c44").src = "image/point/a1_rouge.png"; document.getElementById("c43").src = "image/point/a1_gauche.png"; }
if ( sens_its38 == 2 && progression_its38 == 5 )  			{ document.getElementById("c44").src = "image/point/a1_rouge.png";  document.getElementById("c43").src = "image/point/a1_rouge.png"; document.getElementById("c42").src = "image/point/a1_gauche.png";  }
if ( sens_its38 == 2 && progression_its38 == 6 )  			{ document.getElementById("c43").src = "image/point/a1_rouge.png";  document.getElementById("c42").src = "image/point/a1_rouge.png"; document.getElementById("c41").src = "image/point/a1_gauche.png"; }
if ( sens_its38 == 2 && progression_its38 == 7 )  			{ document.getElementById("c42").src = "image/point/a1_rouge.png";  document.getElementById("c41").src = "image/point/a1_rouge.png"; document.getElementById("c40").src = "image/point/a1_gauche.png"; }
if ( sens_its38 == 2 && progression_its38 == 8 )  			{ document.getElementById("c41").src = "image/point/a1_rouge.png";  document.getElementById("c40").src = "image/point/a1_rouge.png"; document.getElementById("c39").src = "image/point/a1_gauche.png"; }
if ( sens_its38 == 2 && progression_its38 == 9 )  			{ document.getElementById("c40").src = "image/point/a1_rouge.png";  document.getElementById("c39").src = "image/point/a1_rouge.png"; document.getElementById("c38").src = "image/point/a1_gauche.png"; }
if ( sens_its38 == 2 && progression_its38 == 10 )  			{ document.getElementById("c39").src = "image/point/a1_rouge.png";  document.getElementById("c38").src = "image/point/a1_rouge.png"; document.getElementById("c37").src = "image/point/a1_gauche.png"; }

// its37

if (sens_its37 == 2 && occupation_its37) 				{ progression_its37 = progression_its37 + 1; }
if (sens_its37 == 2 && progression_its37 > 5 ) 			{ occupation_its37 = false; occupation_its118 = true;  
train2_its118[0] = train2_its37[0];
train2_its118[1] = train2_its37[1];
train2_its118[2] = train2_its37[2];
train2_its118[3] = train2_its37[3];
train2_its118[4] = train2_its37[4];
train2_its118[5] = train2_its37[5];
train2_its118[6] = train2_its37[6];
sens_its118 = sens_its37;
progression_its37 = 0;
its37 = 0; 
}

if ( sens_its37 == 2 && progression_its37 == 1 )  			{ document.getElementById("c38").src = "image/point/a1_rouge.png";  document.getElementById("c37").src = "image/point/a1_rouge.png"; document.getElementById("c36").src = "image/point/a1_gauche.png"; }
if ( sens_its37 == 2 && progression_its37 == 2 )  			{ document.getElementById("c37").src = "image/point/a1_rouge.png";  document.getElementById("c36").src = "image/point/a1_rouge.png"; document.getElementById("c35").src = "image/point/a1_gauche.png";  }
if ( sens_its37 == 2 && progression_its37 == 3 )  			{ document.getElementById("c36").src = "image/point/a1_rouge.png";  document.getElementById("c35").src = "image/point/a1_rouge.png"; document.getElementById("c34").src = "image/point/a1_gauche.png"; }
if ( sens_its37 == 2 && progression_its37 == 4 )  			{ document.getElementById("c35").src = "image/point/a1_rouge.png";  document.getElementById("c34").src = "image/point/a1_rouge.png"; document.getElementById("c33").src = "image/point/a1_gauche.png"; }
if ( sens_its37 == 2 && progression_its37 == 5 )  			{ document.getElementById("c34").src = "image/point/a1_rouge.png";  document.getElementById("c33").src = "image/point/a1_rouge.png"; document.getElementById("c32").src = "image/point/a1_gauche.png"; }

// its118

if (sens_its118 == 2 && occupation_its118 ) 			{ progression_its118 = progression_its118 + 1;  }
if (sens_its118 == 2 && progression_its118 > 8 ) 		{ occupation_its118 = false; occupation_its34 = true;  
train2_its34[0] = train2_its118[0];
train2_its34[1] = train2_its118[1];
train2_its34[2] = train2_its118[2];
train2_its34[3] = train2_its118[3];
train2_its34[4] = train2_its118[4];
train2_its34[5] = train2_its118[5];
train2_its34[6] = train2_its118[6];
sens_its34 = sens_its118;
progression_its118 = 0;
}

if ( sens_its118 == 2 && progression_its118 == 1 )  			{ document.getElementById("c33").src = "image/point/a1_rouge.png";  document.getElementById("c32").src = "image/point/a1_rouge.png"; document.getElementById("m8").src = "image/point/a1_gauche.png"; }
if ( sens_its118 == 2 && progression_its118 == 2 )  			{ document.getElementById("c32").src = "image/point/a1_rouge.png";  document.getElementById("m8").src = "image/point/a1_rouge.png"; document.getElementById("m7").src = "image/point/a1_gauche.png"; }
if ( sens_its118 == 2 && progression_its118 == 3 )  			{ document.getElementById("m8").src = "image/point/a1_rouge.png";  document.getElementById("m7").src = "image/point/a1_rouge.png"; document.getElementById("m6").src = "image/point/a1_gauche.png"; }
if ( sens_its118 == 2 && progression_its118 == 4 )  			{ document.getElementById("m7").src = "image/point/a1_rouge.png";  document.getElementById("m6").src = "image/point/a1_rouge.png"; document.getElementById("m5").src = "image/point/a1_gauche.png"; }
if ( sens_its118 == 2 && progression_its118 == 5 )  			{ document.getElementById("m6").src = "image/point/a1_rouge.png";  document.getElementById("m5").src = "image/point/a1_rouge.png"; document.getElementById("m4").src = "image/point/a1_gauche.png"; }
if ( sens_its118 == 2 && progression_its118 == 6 )  			{ document.getElementById("m5").src = "image/point/a1_rouge.png";  document.getElementById("m4").src = "image/point/a1_rouge.png"; document.getElementById("m3").src = "image/point/a1_gauche.png"; }
if ( sens_its118 == 2 && progression_its118 == 7 )  			{ document.getElementById("m4").src = "image/point/a1_rouge.png";  document.getElementById("m3").src = "image/point/a1_rouge.png"; document.getElementById("m2").src = "image/point/a1_gauche.png"; }
if ( sens_its118 == 2 && progression_its118 == 8 )  			{ document.getElementById("m3").src = "image/point/a1_rouge.png";  document.getElementById("m2").src = "image/point/a1_rouge.png"; document.getElementById("m1").src = "image/point/a1_gauche.png"; }

// its34

if (sens_its34 == 2 && occupation_its34) 						{ progression_its34 = progression_its34 + 1; ligne = 34;}
if (sens_its34 == 2 && progression_its34 > 12 ) 				{ occupation_its34 = false; occupation_its33 = true;  
train2_its33[0] = train2_its34[0];
train2_its33[1] = train2_its34[1];
train2_its33[2] = train2_its34[2];
train2_its33[3] = train2_its34[3];
train2_its33[4] = train2_its34[4];
train2_its33[5] = train2_its34[5];
train2_its33[6] = train2_its34[6];
sens_its33 =     sens_its34;
progression_its34 = 0;
its34 = 0; 
}

if ( sens_its34 == 2 && progression_its34 == 1 )  			{ document.getElementById("m2").src = "image/point/a1_rouge.png";  document.getElementById("m1").src = "image/point/a1_rouge.png"; document.getElementById("c30").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 2 )  			{ document.getElementById("m1").src = "image/point/a1_rouge.png";  document.getElementById("c30").src = "image/point/a1_rouge.png"; document.getElementById("c29").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 3 )  			{ document.getElementById("c30").src = "image/point/a1_rouge.png";  document.getElementById("c29").src = "image/point/a1_rouge.png"; document.getElementById("c28").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 4 )  			{ document.getElementById("c29").src = "image/point/a1_rouge.png";  document.getElementById("c28").src = "image/point/a1_rouge.png"; document.getElementById("c27").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 5 )  			{ document.getElementById("c28").src = "image/point/a1_rouge.png";  document.getElementById("c27").src = "image/point/a1_rouge.png"; document.getElementById("c26").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 6 )  			{ document.getElementById("c27").src = "image/point/a1_rouge.png";  document.getElementById("c26").src = "image/point/a1_rouge.png"; document.getElementById("c25").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 7 )  			{ document.getElementById("c26").src = "image/point/a1_rouge.png";  document.getElementById("c25").src = "image/point/a1_rouge.png"; document.getElementById("c24").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 8 )  			{ document.getElementById("c25").src = "image/point/a1_rouge.png";  document.getElementById("c24").src = "image/point/a1_rouge.png"; document.getElementById("c23").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 9 )  			{ document.getElementById("c24").src = "image/point/a1_rouge.png";  document.getElementById("c23").src = "image/point/a1_rouge.png"; document.getElementById("c22").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 10 )  			{ document.getElementById("c23").src = "image/point/a1_rouge.png";  document.getElementById("c22").src = "image/point/a1_rouge.png"; document.getElementById("c21").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 11 )  			{ document.getElementById("c22").src = "image/point/a1_rouge.png";  document.getElementById("c21").src = "image/point/a1_rouge.png"; document.getElementById("c20").src = "image/point/a1_gauche.png"; }
if ( sens_its34 == 2 && progression_its34 == 12 )  			{ document.getElementById("c21").src = "image/point/a1_rouge.png";  document.getElementById("c20").src = "image/point/a1_rouge.png"; document.getElementById("c19").src = "image/point/a1_gauche.png";}

// its33

if (sens_its33 == 2 && occupation_its33) 			{ progression_its33 = progression_its33 + 1;}
if (sens_its33 == 2 && progression_its33 > 4 ) 		{ occupation_its33 = false; occupation_its131 = true;   
train2_its131[0] = train2_its33[0];
train2_its131[1] = train2_its33[1];
train2_its131[2] = train2_its33[2];
train2_its131[3] = train2_its33[3];
train2_its131[4] = train2_its33[4];
train2_its131[5] = train2_its33[5];
train2_its131[6] = train2_its33[6];
sens_its131 =     sens_its33;
progression_its33 = 0;
its33 = 0; 
}

if ( sens_its33 == 2 && progression_its33 == 1 )  			{ document.getElementById("c20").src = "image/point/a1_rouge.png";  document.getElementById("c19").src = "image/point/a1_rouge.png"; document.getElementById("c18").src = "image/point/a1_gauche.png";}
if ( sens_its33 == 2 && progression_its33 == 2 )  			{ document.getElementById("c19").src = "image/point/a1_rouge.png";  document.getElementById("c18").src = "image/point/a1_rouge.png"; document.getElementById("c17").src = "image/point/a1_gauche.png";}
if ( sens_its33 == 2 && progression_its33 == 3 )  			{ document.getElementById("c18").src = "image/point/a1_rouge.png";  document.getElementById("c17").src = "image/point/a1_rouge.png"; document.getElementById("c16").src = "image/point/a1_gauche.png";}
if ( sens_its33 == 2 && progression_its33 == 4 )  			{ document.getElementById("c17").src = "image/point/a1_rouge.png";  document.getElementById("c16").src = "image/point/a1_rouge.png"; document.getElementById("c15").src = "image/point/a1_gauche.png";}

// its131

if (sens_its131 == 2 && occupation_its131 ) 								{ progression_its131 = progression_its131 + 1;  }
if (sens_its131 == 2 && aiguille78 == 0 &&  progression_its131 > 2 ) 		{ occupation_its131 = false; occupation_its32 = true;  
train2_its32[0] = train2_its131[0];
train2_its32[1] = train2_its131[1];
train2_its32[2] = train2_its131[2];
train2_its32[3] = train2_its131[3];
train2_its32[4] = train2_its131[4];
train2_its32[5] = train2_its131[5];
train2_its32[6] = train2_its131[6];
sens_its32 = sens_its131;
progression_its131 = 0;
its131 = 0; 
}

if (sens_its131 == 2 && aiguille78 == 0 && occupation_its131 ) {
if ( sens_its131 == 2 && progression_its131 == 1 )  			{ document.getElementById("c16").src = "image/point/a1_rouge.png";  document.getElementById("c15").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_gauche.png";}
if ( sens_its131 == 2 && progression_its131 == 2 )  			{ document.getElementById("c15").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_gauche.png";}
}


if (sens_its131 == 2 && aiguille78 == 1 && aiguille87 == 1 && progression_its131 > 13 ) 		{ occupation_its131 = false; occupation_its70 = true;  
train2_its70[0] = train2_its131[0];
train2_its70[1] = train2_its131[1];
train2_its70[2] = train2_its131[2];
train2_its70[3] = train2_its131[3];
train2_its70[4] = train2_its131[4];
train2_its70[5] = train2_its131[5];
train2_its70[6] = train2_its131[6];
sens_its70 = sens_its131;
progression_its131 = 0;
its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; 
aiguille78 = 0; 
aiguille87 = 0; 
}

if (sens_its131 == 2 && aiguille78 == 1 && aiguille87 == 1 && occupation_its131 ) {
if ( sens_its131 == 2 && progression_its131 == 1 )  			{ document.getElementById("c16").src = "image/point/a1_rouge.png";  document.getElementById("c15").src = "image/point/a1_rouge.png"; document.getElementById("c14").src = "image/point/a1_gauche.png";}
if ( sens_its131 == 2 && progression_its131 == 2 )  			{ document.getElementById("c15").src = "image/point/a1_rouge.png";  document.getElementById("c14").src = "image/point/a1_rouge.png"; document.getElementById("c13").src = "image/point/a1_gauche.png";}
if ( sens_its131 == 2 && progression_its131 == 3 )  			{ document.getElementById("c14").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("f13").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 4 )  			{ document.getElementById("c13").src = "image/point/a1_rouge.png";  document.getElementById("f13").src = "image/point/a1_rouge.png"; document.getElementById("f14").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 5 )  			{ document.getElementById("f13").src = "image/point/a1_rouge.png";  document.getElementById("f14").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 6 )  			{ document.getElementById("f14").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 7 )  			{ document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("f15").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 8 )  			{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("f15").src = "image/point/a1_rouge.png"; document.getElementById("f16").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 9 )  			{ document.getElementById("f15").src = "image/point/a1_rouge.png";  document.getElementById("f16").src = "image/point/a1_rouge.png"; document.getElementById("e8").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 10 )  			{ document.getElementById("f16").src = "image/point/a1_rouge.png";  document.getElementById("e8").src = "image/point/a1_rouge.png"; document.getElementById("e7").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 11 )  			{ document.getElementById("e8").src = "image/point/a1_rouge.png";  document.getElementById("e7").src = "image/point/a1_rouge.png"; document.getElementById("e6").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 12 )  			{ document.getElementById("e7").src = "image/point/a1_rouge.png";  document.getElementById("e6").src = "image/point/a1_rouge.png"; document.getElementById("e5").src = "image/point/a1_gauche.png"; }
if ( sens_its131 == 2 && progression_its131 == 13 )  			{ document.getElementById("e6").src = "image/point/a1_rouge.png";  document.getElementById("e5").src = "image/point/a1_rouge.png"; document.getElementById("e4").src = "image/point/a1_gauche.png"; }
}



// its32

if (sens_its32 == 2 && occupation_its32) 			{ progression_its32 = progression_its32 + 1; }
if (sens_its32 == 2 && progression_its32 > 4 ) 		{ occupation_its32 = false; occupation_its31 = true;  
train2_its31[0] = train2_its32[0];
train2_its31[1] = train2_its32[1];
train2_its31[2] = train2_its32[2];
train2_its31[3] = train2_its32[3];
train2_its31[4] = train2_its32[4];
train2_its31[5] = train2_its32[5];
train2_its31[6] = train2_its32[6];
sens_its31 =     sens_its32;
progression_its32 = 0;
its32 = 0; 
}

if ( sens_its32 == 2 && progression_its32 == 1 )  			{ document.getElementById("c14").src = "image/point/a1_rouge.png";  document.getElementById("c13").src = "image/point/a1_rouge.png"; document.getElementById("c12").src = "image/point/a1_gauche.png";}
if ( sens_its32 == 2 && progression_its32 == 2 )  			{ document.getElementById("c13").src = "image/point/a1_rouge.png";  document.getElementById("c12").src = "image/point/a1_rouge.png"; document.getElementById("c11").src = "image/point/a1_gauche.png";}
if ( sens_its32 == 2 && progression_its32 == 3 )  			{ document.getElementById("c12").src = "image/point/a1_rouge.png";  document.getElementById("c11").src = "image/point/a1_rouge.png"; document.getElementById("c10").src = "image/point/a1_gauche.png";}
if ( sens_its32 == 2 && progression_its32 == 4 )  			{ document.getElementById("c11").src = "image/point/a1_rouge.png";  document.getElementById("c10").src = "image/point/a1_rouge.png"; document.getElementById("c9").src = "image/point/a1_gauche.png";}

// its31

if (sens_its31 == 2 && occupation_its31) 							{ progression_its31 = progression_its31 + 1;  }
if (sens_its31 == 2 && progression_its31 > 4 ) 						{ occupation_its31 = false; occupation_its30 = true;  
train2_its30[0] = train2_its31[0];
train2_its30[1] = train2_its31[1];
train2_its30[2] = train2_its31[2];
train2_its30[3] = train2_its31[3];
train2_its30[4] = train2_its31[4];
train2_its30[5] = train2_its31[5];
train2_its30[6] = train2_its31[6];
sens_its30 =     sens_its31;
progression_its31 = 0;
its31 = 0; 
}

if ( sens_its31 == 2 && progression_its31 == 1 )  			{ document.getElementById("c10").src = "image/point/a1_rouge.png";  document.getElementById("c9").src = "image/point/a1_rouge.png"; document.getElementById("c8").src = "image/point/a1_gauche.png";}
if ( sens_its31 == 2 && progression_its31 == 2 )  			{ document.getElementById("c9").src = "image/point/a1_rouge.png";  document.getElementById("c8").src = "image/point/a1_rouge.png"; document.getElementById("c7").src = "image/point/a1_gauche.png";}
if ( sens_its31 == 2 && progression_its31 == 3 )  			{ document.getElementById("c8").src = "image/point/a1_rouge.png";  document.getElementById("c7").src = "image/point/a1_rouge.png"; document.getElementById("c6").src = "image/point/a1_gauche.png";}
if ( sens_its31 == 2 && progression_its31 == 4 )  			{ document.getElementById("c7").src = "image/point/a1_rouge.png";  document.getElementById("c6").src = "image/point/a1_rouge.png"; document.getElementById("c5").src = "image/point/a1_gauche.png";}

// its30

if (sens_its30 == 2 && occupation_its30 ) 							{ progression_its30 = progression_its30 + 1; }
if (sens_its30 == 2 && progression_its30 > 6 ) 						{ occupation_its30 = false;  
progression_its30 = 0;
its30 = 0; document.getElementById("z2").src = "image/feux/rouge_2.png";
}
	
if ( sens_its30 == 2 && progression_its30 == 1 )  			{ document.getElementById("c6").src = "image/point/a1_rouge.png";  document.getElementById("c5").src = "image/point/a1_rouge.png"; document.getElementById("c4").src = "image/point/a1_gauche.png";}
if ( sens_its30 == 2 && progression_its30 == 2 )  			{ document.getElementById("c5").src = "image/point/a1_rouge.png";  document.getElementById("c4").src = "image/point/a1_rouge.png"; document.getElementById("c3").src = "image/point/a1_gauche.png";}
if ( sens_its30 == 2 && progression_its30 == 3 )  			{ document.getElementById("c4").src = "image/point/a1_rouge.png";  document.getElementById("c3").src = "image/point/a1_rouge.png"; document.getElementById("c2").src = "image/point/a1_gauche.png";}
if ( sens_its30 == 2 && progression_its30 == 4 )  			{ document.getElementById("c3").src = "image/point/a1_rouge.png";  document.getElementById("c2").src = "image/point/a1_rouge.png"; document.getElementById("c1").src = "image/point/a1_gauche.png";}
if ( sens_its30 == 2 && progression_its30 == 5 )  			{ document.getElementById("c2").src = "image/point/a1_rouge.png";  document.getElementById("c1").src = "image/point/a1_rouge.png"; document.getElementById("c1").src = "image/point/a1_gauche.png";}
if ( sens_its30 == 2 && progression_its30 == 6 )  			{ document.getElementById("c1").src = "image/point/a1_rouge.png";  document.getElementById("c1").src = "image/point/a1_rouge.png"; document.getElementById("c1").src = "image/point/a1_gauche.png";}

// its61

if (sens_its61 == 2 && occupation_its61) 							{ progression_its61 = progression_its61 + 1; } 
if (sens_its61 == 2 && its60 == 0 && progression_its61 > 4 ) 		{ progression_its61 = 4; }
if (sens_its61 == 2 && progression_its61 > 4 ) 						{ occupation_its61 = false; occupation_its60 = true;
train2_its60[0] = train2_its61[0];
train2_its60[1] = train2_its61[1];
train2_its60[2] = train2_its61[2];
train2_its60[3] = train2_its61[3];
train2_its60[4] = train2_its61[4];
train2_its60[5] = train2_its61[5];
train2_its60[6] = train2_its61[6];
sens_its60 = sens_its61;
progression_its61 = 0;
} 

if ( sens_its61 == 2 && progression_its61 == 1 )  			{ document.getElementById("d66").src = "image/point/a1_rouge.png";  document.getElementById("d66").src = "image/point/a1_rouge.png"; document.getElementById("d66").src = "image/point/a1_rouge.png"; }
if ( sens_its61 == 2 && progression_its61 == 2 )  			{ document.getElementById("d65").src = "image/point/a1_rouge.png";  document.getElementById("d66").src = "image/point/a1_rouge.png"; document.getElementById("d66").src = "image/point/a1_rouge.png"; }
if ( sens_its61 == 2 && progression_its61 == 3 )  			{ document.getElementById("d64").src = "image/point/a1_rouge.png";  document.getElementById("d65").src = "image/point/a1_rouge.png"; document.getElementById("d66").src = "image/point/a1_rouge.png";  }
if ( sens_its61 == 2 && progression_its61 == 4 )  			{ document.getElementById("d63").src = "image/point/a1_gauche.png";  document.getElementById("d64").src = "image/point/a1_rouge.png"; document.getElementById("d65").src = "image/point/a1_rouge.png"; }



// its60

if (sens_its60 == 2 && occupation_its60) 				{ progression_its60 = progression_its60 + 1; } 
if (sens_its60 == 2 && progression_its60 > 6 ) 			{ occupation_its60 = false; occupation_its59 = true;   
train2_its59[0] = train2_its60[0];
train2_its59[1] = train2_its60[1];
train2_its59[2] = train2_its60[2];
train2_its59[3] = train2_its60[3];
train2_its59[4] = train2_its60[4];
train2_its59[5] = train2_its60[5];
train2_its59[6] = train2_its60[6];
sens_its59 = sens_its60;
progression_its60 = 0;
its61 = 0; its60 = 0; 
} 

if ( sens_its60 == 2 && progression_its60 == 1 )  			{ document.getElementById("d64").src = "image/point/a1_rouge.png";  document.getElementById("d63").src = "image/point/a1_rouge.png"; document.getElementById("d62").src = "image/point/a1_gauche.png"; }
if ( sens_its60 == 2 && progression_its60 == 2 )  			{ document.getElementById("d63").src = "image/point/a1_rouge.png";  document.getElementById("d62").src = "image/point/a1_rouge.png"; document.getElementById("d61").src = "image/point/a1_gauche.png"; }
if ( sens_its60 == 2 && progression_its60 == 3 )  			{ document.getElementById("d62").src = "image/point/a1_rouge.png";  document.getElementById("d61").src = "image/point/a1_rouge.png"; document.getElementById("d60").src = "image/point/a1_gauche.png"; }
if ( sens_its60 == 2 && progression_its60 == 4 )  			{ document.getElementById("d61").src = "image/point/a1_rouge.png";  document.getElementById("d60").src = "image/point/a1_rouge.png"; document.getElementById("d59").src = "image/point/a1_gauche.png"; }
if ( sens_its60 == 2 && progression_its60 == 5 )  			{ document.getElementById("d60").src = "image/point/a1_rouge.png";  document.getElementById("d59").src = "image/point/a1_rouge.png"; document.getElementById("d58").src = "image/point/a1_gauche.png"; }
if ( sens_its60 == 2 && progression_its60 == 6 )  			{ document.getElementById("d59").src = "image/point/a1_rouge.png";  document.getElementById("d58").src = "image/point/a1_rouge.png"; document.getElementById("d57").src = "image/point/a1_gauche.png"; }



// its59

if (sens_its59 == 2 && occupation_its59) 				{ progression_its59 = progression_its59 + 1; }
if (sens_its59 == 2 && progression_its59 > 2 ) 			{ occupation_its59 = false; occupation_its58 = true;  
train2_its58[0] = train2_its59[0];
train2_its58[1] = train2_its59[1];
train2_its58[2] = train2_its59[2];
train2_its58[3] = train2_its59[3];
train2_its58[4] = train2_its59[4];
train2_its58[5] = train2_its59[5];
train2_its58[6] = train2_its59[6];
sens_its58 = sens_its59;
progression_its59 = 0; 
its59 = 0; 
} 



if ( sens_its59 == 2 && progression_its59 == 1 )  			{ document.getElementById("d58").src = "image/point/a1_rouge.png";  document.getElementById("d57").src = "image/point/a1_rouge.png"; document.getElementById("d56").src = "image/point/a1_gauche.png"; }
if ( sens_its59 == 2 && progression_its59 == 2 )  			{ document.getElementById("d57").src = "image/point/a1_rouge.png";  document.getElementById("d56").src = "image/point/a1_rouge.png"; document.getElementById("d55").src = "image/point/a1_gauche.png"; }


// its58

if (sens_its58 == 2 && occupation_its58) 								{ progression_its58 = progression_its58 + 1; }
if (sens_its58 == 2 && aiguille85 == 0 && progression_its58 > 5 ) 		{ occupation_its58 = false; occupation_its57 = true;  
train2_its57[0] = train2_its58[0];
train2_its57[1] = train2_its58[1];
train2_its57[2] = train2_its58[2];
train2_its57[3] = train2_its58[3];
train2_its57[4] = train2_its58[4];
train2_its57[5] = train2_its58[5];
train2_its57[6] = train2_its58[6];
sens_its57 = sens_its58;
progression_its58 = 0;
its58 = 0; 
}

if (sens_its58 == 2 && aiguille85 == 0 && occupation_its58 ) 		{
if ( sens_its58 == 2 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rouge.png";  document.getElementById("d55").src = "image/point/a1_rouge.png"; document.getElementById("d54").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rouge.png";  document.getElementById("d54").src = "image/point/a1_rouge.png"; document.getElementById("d53").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rouge.png";  document.getElementById("d53").src = "image/point/a1_rouge.png"; document.getElementById("d52").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rouge.png";  document.getElementById("d52").src = "image/point/a1_rouge.png"; document.getElementById("d51").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rouge.png";  document.getElementById("d51").src = "image/point/a1_rouge.png"; document.getElementById("d50").src = "image/point/a1_gauche.png"; }
}


if (sens_its58 == 2 && aiguille85 == 1 && aiguille84 == 0 && progression_its58 > 9 ) 		{ occupation_its58 = false; occupation_its38 = true;  
train2_its38[0] = train2_its58[0];
train2_its38[1] = train2_its58[1];
train2_its38[2] = train2_its58[2];
train2_its38[3] = train2_its58[3];
train2_its38[4] = train2_its58[4];
train2_its38[5] = train2_its58[5];
train2_its38[6] = train2_its58[6];
sens_its38 = sens_its58;
progression_its58 = 0;
its58 = 0; its85 = 0; its39 = 0; 
aiguille85 = 0; 
}

if (sens_its58  == 2 && aiguille85 == 1 && aiguille84 == 0 && occupation_its58 ) 		{
if ( sens_its58 == 2 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rouge.png";  document.getElementById("d55").src = "image/point/a1_rouge.png"; document.getElementById("d54").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rouge.png";  document.getElementById("d54").src = "image/point/a1_rouge.png"; document.getElementById("d53").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rouge.png";  document.getElementById("d53").src = "image/point/a1_rouge.png"; document.getElementById("d52").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rouge.png";  document.getElementById("d52").src = "image/point/a1_rouge.png"; document.getElementById("d51").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rouge.png";  document.getElementById("d51").src = "image/point/a1_rouge.png"; document.getElementById("d50").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 6 )  			{ document.getElementById("d51").src = "image/point/a1_rouge.png";  document.getElementById("d50").src = "image/point/a1_rouge.png"; document.getElementById("f4").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 7 )  			{ document.getElementById("d50").src = "image/point/a1_rouge.png";  document.getElementById("f4").src = "image/point/a1_rouge.png"; document.getElementById("f3").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 8 )  			{ document.getElementById("f4").src = "image/point/a1_rouge.png";  document.getElementById("f3").src = "image/point/a1_rouge.png"; document.getElementById("c48").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 9 )  			{ document.getElementById("f3").src = "image/point/a1_rouge.png";  document.getElementById("c48").src = "image/point/a1_rouge.png"; document.getElementById("c47").src = "image/point/a1_gauche.png"; }
}

if (sens_its58 == 2 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 0 && progression_its58 > 17 ) 		{ occupation_its58 = false; occupation_its121 = true;  
train2_its121[0] = train2_its58[0];
train2_its121[1] = train2_its58[1];
train2_its121[2] = train2_its58[2];
train2_its121[3] = train2_its58[3];
train2_its121[4] = train2_its58[4];
train2_its121[5] = train2_its58[5];
train2_its121[6] = train2_its58[6];
sens_its121 = sens_its58;
progression_its58 = 0;
its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; 
aiguille85 = 0; 
aiguille84 = 0; 
}

if (sens_its58  == 2 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 0 && occupation_its58 ) 		{
if ( sens_its58 == 2 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rouge.png";  document.getElementById("d55").src = "image/point/a1_rouge.png"; document.getElementById("d54").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rouge.png";  document.getElementById("d54").src = "image/point/a1_rouge.png"; document.getElementById("d53").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rouge.png";  document.getElementById("d53").src = "image/point/a1_rouge.png"; document.getElementById("d52").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rouge.png";  document.getElementById("d52").src = "image/point/a1_rouge.png"; document.getElementById("d51").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rouge.png";  document.getElementById("d51").src = "image/point/a1_rouge.png"; document.getElementById("d50").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 6 )  			{ document.getElementById("d51").src = "image/point/a1_rouge.png";  document.getElementById("d50").src = "image/point/a1_rouge.png"; document.getElementById("f4").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 7 )  			{ document.getElementById("d50").src = "image/point/a1_rouge.png";  document.getElementById("f4").src = "image/point/a1_rouge.png"; document.getElementById("f3").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 8 )  			{ document.getElementById("f4").src = "image/point/a1_rouge.png";  document.getElementById("f3").src = "image/point/a1_rouge.png"; document.getElementById("c48").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 9 )  			{ document.getElementById("f3").src = "image/point/a1_rouge.png";  document.getElementById("c48").src = "image/point/a1_rouge.png"; document.getElementById("c47").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 10 )  			{ document.getElementById("c48").src = "image/point/a1_rouge.png";  document.getElementById("c47").src = "image/point/a1_rouge.png"; document.getElementById("f10").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 11 )  			{ document.getElementById("c47").src = "image/point/a1_rouge.png";  document.getElementById("f10").src = "image/point/a1_rouge.png"; document.getElementById("f9").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 12 )  			{ document.getElementById("f10").src = "image/point/a1_rouge.png";  document.getElementById("f9").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 13 )  			{ document.getElementById("f9").src = "image/point/a1_rouge.png";  document.getElementById("b45").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 14 )  			{ document.getElementById("b45").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_gauche.png";  }
}


if (sens_its58 == 2 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 0 && progression_its58 > 21) 		{ occupation_its58 = false; occupation_its103 = true;  
train2_its103[0] = train2_its58[0];
train2_its103[1] = train2_its58[1];
train2_its103[2] = train2_its58[2];
train2_its103[3] = train2_its58[3];
train2_its103[4] = train2_its58[4];
train2_its103[5] = train2_its58[5];
train2_its103[6] = train2_its58[6];
sens_its103 = sens_its58;
progression_its58 = 0;
its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its83 = 0; its104 = 0; 
aiguille85 = 0; 
aiguille84 = 0; 
aiguille83 = 0; 
}

if (sens_its58  == 2 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 0 && occupation_its58 ) 		{
if ( sens_its58 == 2 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rouge.png";  document.getElementById("d55").src = "image/point/a1_rouge.png"; document.getElementById("d54").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rouge.png";  document.getElementById("d54").src = "image/point/a1_rouge.png"; document.getElementById("d53").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rouge.png";  document.getElementById("d53").src = "image/point/a1_rouge.png"; document.getElementById("d52").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rouge.png";  document.getElementById("d52").src = "image/point/a1_rouge.png"; document.getElementById("d51").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rouge.png";  document.getElementById("d51").src = "image/point/a1_rouge.png"; document.getElementById("d50").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 6 )  			{ document.getElementById("d51").src = "image/point/a1_rouge.png";  document.getElementById("d50").src = "image/point/a1_rouge.png"; document.getElementById("f4").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 7 )  			{ document.getElementById("d50").src = "image/point/a1_rouge.png";  document.getElementById("f4").src = "image/point/a1_rouge.png"; document.getElementById("f3").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 8 )  			{ document.getElementById("f4").src = "image/point/a1_rouge.png";  document.getElementById("f3").src = "image/point/a1_rouge.png"; document.getElementById("c48").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 9 )  			{ document.getElementById("f3").src = "image/point/a1_rouge.png";  document.getElementById("c48").src = "image/point/a1_rouge.png"; document.getElementById("c47").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 10 )  			{ document.getElementById("c48").src = "image/point/a1_rouge.png";  document.getElementById("c47").src = "image/point/a1_rouge.png"; document.getElementById("f10").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 11 )  			{ document.getElementById("c47").src = "image/point/a1_rouge.png";  document.getElementById("f10").src = "image/point/a1_rouge.png"; document.getElementById("f9").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 12 )  			{ document.getElementById("f10").src = "image/point/a1_rouge.png";  document.getElementById("f9").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 13 )  			{ document.getElementById("f9").src = "image/point/a1_rouge.png";  document.getElementById("b45").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 14 )  			{ document.getElementById("b45").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 18 )  			{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("f8").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 19 )  			{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("f8").src = "image/point/a1_rouge.png"; document.getElementById("f7").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 20 )  			{ document.getElementById("f8").src = "image/point/a1_rouge.png";  document.getElementById("f7").src = "image/point/a1_rouge.png"; document.getElementById("x38").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 21 )  			{ document.getElementById("f7").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("x37").src = "image/point/a1_gauche.png"; }
}

if (sens_its58 == 2 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 1 && progression_its58 > 27) 		{ occupation_its58 = false; occupation_its8 = true;  
train2_its8[0] = train2_its58[0];
train2_its8[1] = train2_its58[1];
train2_its8[2] = train2_its58[2];
train2_its8[3] = train2_its58[3];
train2_its8[4] = train2_its58[4];
train2_its8[5] = train2_its58[5];
train2_its8[6] = train2_its58[6];
sens_its8 = sens_its58;
progression_its58 = 0;
its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its83 = 0; its104 = 0; its96 = 0; its4 = 0; 
aiguille85 = 0; 
aiguille84 = 0; 
aiguille83 = 0; 
aiguille96 = 0; 
}

if (sens_its58  == 2 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 1 && occupation_its58 ) 		{
if ( sens_its58 == 2 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rouge.png";  document.getElementById("d55").src = "image/point/a1_rouge.png"; document.getElementById("d54").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rouge.png";  document.getElementById("d54").src = "image/point/a1_rouge.png"; document.getElementById("d53").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rouge.png";  document.getElementById("d53").src = "image/point/a1_rouge.png"; document.getElementById("d52").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rouge.png";  document.getElementById("d52").src = "image/point/a1_rouge.png"; document.getElementById("d51").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rouge.png";  document.getElementById("d51").src = "image/point/a1_rouge.png"; document.getElementById("d50").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 6 )  			{ document.getElementById("d51").src = "image/point/a1_rouge.png";  document.getElementById("d50").src = "image/point/a1_rouge.png"; document.getElementById("f4").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 7 )  			{ document.getElementById("d50").src = "image/point/a1_rouge.png";  document.getElementById("f4").src = "image/point/a1_rouge.png"; document.getElementById("f3").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 8 )  			{ document.getElementById("f4").src = "image/point/a1_rouge.png";  document.getElementById("f3").src = "image/point/a1_rouge.png"; document.getElementById("c48").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 9 )  			{ document.getElementById("f3").src = "image/point/a1_rouge.png";  document.getElementById("c48").src = "image/point/a1_rouge.png"; document.getElementById("c47").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 10 )  			{ document.getElementById("c48").src = "image/point/a1_rouge.png";  document.getElementById("c47").src = "image/point/a1_rouge.png"; document.getElementById("f10").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 11 )  			{ document.getElementById("c47").src = "image/point/a1_rouge.png";  document.getElementById("f10").src = "image/point/a1_rouge.png"; document.getElementById("f9").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 12 )  			{ document.getElementById("f10").src = "image/point/a1_rouge.png";  document.getElementById("f9").src = "image/point/a1_rouge.png"; document.getElementById("b45").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 13 )  			{ document.getElementById("f9").src = "image/point/a1_rouge.png";  document.getElementById("b45").src = "image/point/a1_rouge.png"; document.getElementById("b44").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 14 )  			{ document.getElementById("b45").src = "image/point/a1_rouge.png";  document.getElementById("b44").src = "image/point/a1_rouge.png"; document.getElementById("b43").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rouge.png";  document.getElementById("b43").src = "image/point/a1_rouge.png"; document.getElementById("b42").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rouge.png";  document.getElementById("b42").src = "image/point/a1_rouge.png"; document.getElementById("b41").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rouge.png";  document.getElementById("b41").src = "image/point/a1_rouge.png"; document.getElementById("b40").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 18 )  			{ document.getElementById("b41").src = "image/point/a1_rouge.png";  document.getElementById("b40").src = "image/point/a1_rouge.png"; document.getElementById("f8").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 19 )  			{ document.getElementById("b40").src = "image/point/a1_rouge.png";  document.getElementById("f8").src = "image/point/a1_rouge.png"; document.getElementById("f7").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 20 )  			{ document.getElementById("f8").src = "image/point/a1_rouge.png";  document.getElementById("f7").src = "image/point/a1_rouge.png"; document.getElementById("x38").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 21 )  			{ document.getElementById("f7").src = "image/point/a1_rouge.png";  document.getElementById("x38").src = "image/point/a1_rouge.png"; document.getElementById("x37").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 22 )  			{ document.getElementById("x38").src = "image/point/a1_rouge.png";  document.getElementById("x37").src = "image/point/a1_rouge.png"; document.getElementById("f51").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 23 )  			{ document.getElementById("x37").src = "image/point/a1_rouge.png";  document.getElementById("f51").src = "image/point/a1_rouge.png"; document.getElementById("f50").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 24 )  			{ document.getElementById("f51").src = "image/point/a1_rouge.png";  document.getElementById("f50").src = "image/point/a1_rouge.png"; document.getElementById("a35").src = "image/point/a1_gauche.png";  }
if ( sens_its58 == 2 && progression_its58 == 25 )  			{ document.getElementById("f50").src = "image/point/a1_rouge.png";  document.getElementById("a35").src = "image/point/a1_rouge.png"; document.getElementById("a34").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 26 )  			{ document.getElementById("a35").src = "image/point/a1_rouge.png";  document.getElementById("a34").src = "image/point/a1_rouge.png"; document.getElementById("a33").src = "image/point/a1_gauche.png"; }
if ( sens_its58 == 2 && progression_its58 == 27 )  			{ document.getElementById("a34").src = "image/point/a1_rouge.png";  document.getElementById("a33").src = "image/point/a1_rouge.png"; document.getElementById("a32").src = "image/point/a1_gauche.png";  }
}


// its57

if (sens_its57 == 2 && occupation_its57) 								{ progression_its57 = progression_its57 + 1; }
if (sens_its57 == 2 && aiguille94 == 0 && progression_its57 > 13 ) 		{ occupation_its57 = false; occupation_its56 = true;  
train2_its56[0] = train2_its57[0];
train2_its56[1] = train2_its57[1];
train2_its56[2] = train2_its57[2];
train2_its56[3] = train2_its57[3];
train2_its56[4] = train2_its57[4];
train2_its56[5] = train2_its57[5];
train2_its56[6] = train2_its57[6];
sens_its56 = sens_its57;
progression_its57 = 0;
its57 = 0; 
}

if (sens_its57 == 2 && aiguille94 == 0 && occupation_its57) 		{
if ( sens_its57 == 2 && progression_its57 == 1 )  			{ document.getElementById("d51").src = "image/point/a1_rouge.png";  document.getElementById("d50").src = "image/point/a1_rouge.png"; document.getElementById("d49").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 2 )  			{ document.getElementById("d50").src = "image/point/a1_rouge.png";  document.getElementById("d49").src = "image/point/a1_rouge.png"; document.getElementById("d48").src = "image/point/a1_gauche.png";  }
if ( sens_its57 == 2 && progression_its57 == 3 )  			{ document.getElementById("d49").src = "image/point/a1_rouge.png";  document.getElementById("d48").src = "image/point/a1_rouge.png"; document.getElementById("d47").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 4 )  			{ document.getElementById("d48").src = "image/point/a1_rouge.png";  document.getElementById("d47").src = "image/point/a1_rouge.png"; document.getElementById("d46").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 5 )  			{ document.getElementById("d47").src = "image/point/a1_rouge.png";  document.getElementById("d46").src = "image/point/a1_rouge.png"; document.getElementById("d45").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 6 )  			{ document.getElementById("d46").src = "image/point/a1_rouge.png";  document.getElementById("d45").src = "image/point/a1_rouge.png"; document.getElementById("d44").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 7 )  			{ document.getElementById("d45").src = "image/point/a1_rouge.png";  document.getElementById("d44").src = "image/point/a1_rouge.png"; document.getElementById("d43").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 8 )  			{ document.getElementById("d44").src = "image/point/a1_rouge.png";  document.getElementById("d43").src = "image/point/a1_rouge.png"; document.getElementById("d42").src = "image/point/a1_gauche.png";  }
if ( sens_its57 == 2 && progression_its57 == 9 )  			{ document.getElementById("d43").src = "image/point/a1_rouge.png";  document.getElementById("d42").src = "image/point/a1_rouge.png"; document.getElementById("d41").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 10 )  			{ document.getElementById("d42").src = "image/point/a1_rouge.png";  document.getElementById("d41").src = "image/point/a1_rouge.png"; document.getElementById("d40").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 11 )  			{ document.getElementById("d41").src = "image/point/a1_rouge.png";  document.getElementById("d40").src = "image/point/a1_rouge.png"; document.getElementById("d39").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 12 )  			{ document.getElementById("d40").src = "image/point/a1_rouge.png";  document.getElementById("d39").src = "image/point/a1_rouge.png"; document.getElementById("d38").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 13 )  			{ document.getElementById("d39").src = "image/point/a1_rouge.png";  document.getElementById("d38").src = "image/point/a1_rouge.png"; document.getElementById("d37").src = "image/point/a1_gauche.png"; }
}


if (sens_its57 == 2 && aiguille94 == 1 && progression_its57 > 19 ) 		{ occupation_its57 = false; occupation_its120 = true;  
train2_its120[0] = train2_its57[0];
train2_its120[1] = train2_its57[1];
train2_its120[2] = train2_its57[2];
train2_its120[3] = train2_its57[3];
train2_its120[4] = train2_its57[4];
train2_its120[5] = train2_its57[5];
train2_its120[6] = train2_its57[6];
sens_its120 = sens_its57;
progression_its57 = 0;
its57 = 0; its94 = 0; its74 = 0; 
aiguille94 = 0; 
}

if (sens_its57 == 2 && aiguille94 == 1 && occupation_its57) 		{
if ( sens_its57 == 2 && progression_its57 == 1 )  			{ document.getElementById("d51").src = "image/point/a1_rouge.png";  document.getElementById("d50").src = "image/point/a1_rouge.png"; document.getElementById("d49").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 2 )  			{ document.getElementById("d50").src = "image/point/a1_rouge.png";  document.getElementById("d49").src = "image/point/a1_rouge.png"; document.getElementById("d48").src = "image/point/a1_gauche.png";  }
if ( sens_its57 == 2 && progression_its57 == 3 )  			{ document.getElementById("d49").src = "image/point/a1_rouge.png";  document.getElementById("d48").src = "image/point/a1_rouge.png"; document.getElementById("d47").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 4 )  			{ document.getElementById("d48").src = "image/point/a1_rouge.png";  document.getElementById("d47").src = "image/point/a1_rouge.png"; document.getElementById("d46").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 5 )  			{ document.getElementById("d47").src = "image/point/a1_rouge.png";  document.getElementById("d46").src = "image/point/a1_rouge.png"; document.getElementById("d45").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 6 )  			{ document.getElementById("d46").src = "image/point/a1_rouge.png";  document.getElementById("d45").src = "image/point/a1_rouge.png"; document.getElementById("d44").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 7 )  			{ document.getElementById("d45").src = "image/point/a1_rouge.png";  document.getElementById("d44").src = "image/point/a1_rouge.png"; document.getElementById("d43").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 8 )  			{ document.getElementById("d44").src = "image/point/a1_rouge.png";  document.getElementById("d43").src = "image/point/a1_rouge.png"; document.getElementById("d42").src = "image/point/a1_gauche.png";  }
if ( sens_its57 == 2 && progression_its57 == 9 )  			{ document.getElementById("d43").src = "image/point/a1_rouge.png";  document.getElementById("d42").src = "image/point/a1_rouge.png"; document.getElementById("d41").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 10 )  			{ document.getElementById("d42").src = "image/point/a1_rouge.png";  document.getElementById("d41").src = "image/point/a1_rouge.png"; document.getElementById("d40").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 11 )  			{ document.getElementById("d41").src = "image/point/a1_rouge.png";  document.getElementById("d40").src = "image/point/a1_rouge.png"; document.getElementById("d39").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 12 )  			{ document.getElementById("d40").src = "image/point/a1_rouge.png";  document.getElementById("d39").src = "image/point/a1_rouge.png"; document.getElementById("d38").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 13 )  			{ document.getElementById("d39").src = "image/point/a1_rouge.png";  document.getElementById("d38").src = "image/point/a1_rouge.png"; document.getElementById("d37").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 14 )  			{ document.getElementById("d36").src = "image/point/a1_rouge.png";  document.getElementById("d37").src = "image/point/a1_rouge.png"; document.getElementById("f41").src = "image/point/a1_gauche.png";  }
if ( sens_its57 == 2 && progression_its57 == 15 )  			{ document.getElementById("d37").src = "image/point/a1_rouge.png";  document.getElementById("f41").src = "image/point/a1_rouge.png"; document.getElementById("f40").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 16 )  			{ document.getElementById("f41").src = "image/point/a1_rouge.png";  document.getElementById("f40").src = "image/point/a1_rouge.png"; document.getElementById("e35").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 17 )  			{ document.getElementById("f40").src = "image/point/a1_rouge.png";  document.getElementById("e35").src = "image/point/a1_rouge.png"; document.getElementById("e34").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 18 )  			{ document.getElementById("e33").src = "image/point/a1_rouge.png";  document.getElementById("e34").src = "image/point/a1_rouge.png"; document.getElementById("e33").src = "image/point/a1_gauche.png"; }
if ( sens_its57 == 2 && progression_its57 == 19 )  			{ document.getElementById("e32").src = "image/point/a1_rouge.png";  document.getElementById("e33").src = "image/point/a1_rouge.png"; document.getElementById("e32").src = "image/point/a1_gauche.png"; }
}

// its56

if (sens_its56 == 2 && occupation_its56) 					{ progression_its56 = progression_its56 + 1; }
if (sens_its56 == 2 && progression_its56 > 5  ) 			{ occupation_its56 = false; occupation_its119 = true;  
train2_its119[0] = train2_its56[0];
train2_its119[1] = train2_its56[1];
train2_its119[2] = train2_its56[2];
train2_its119[3] = train2_its56[3];
train2_its119[4] = train2_its56[4];
train2_its119[5] = train2_its56[5];
train2_its119[6] = train2_its56[6];
sens_its119 = sens_its56;
progression_its56 = 0;
its56 = 0; 
}

if ( sens_its56 == 2 && progression_its56 == 1 )  			{ document.getElementById("d38").src = "image/point/a1_rouge.png";  document.getElementById("d37").src = "image/point/a1_rouge.png"; document.getElementById("d36").src = "image/point/a1_gauche.png"; }
if ( sens_its56 == 2 && progression_its56 == 2 )  			{ document.getElementById("d37").src = "image/point/a1_rouge.png";  document.getElementById("d36").src = "image/point/a1_rouge.png"; document.getElementById("d35").src = "image/point/a1_gauche.png";  }
if ( sens_its56 == 2 && progression_its56 == 3 )  			{ document.getElementById("d36").src = "image/point/a1_rouge.png";  document.getElementById("d35").src = "image/point/a1_rouge.png"; document.getElementById("d34").src = "image/point/a1_gauche.png"; }
if ( sens_its56 == 2 && progression_its56 == 4 )  			{ document.getElementById("d35").src = "image/point/a1_rouge.png";  document.getElementById("d34").src = "image/point/a1_rouge.png"; document.getElementById("d33").src = "image/point/a1_gauche.png"; }
if ( sens_its56 == 2 && progression_its56 == 5 )  			{ document.getElementById("d34").src = "image/point/a1_rouge.png";  document.getElementById("d33").src = "image/point/a1_rouge.png"; document.getElementById("d32").src = "image/point/a1_gauche.png"; }

// its119

if (sens_its119 == 2 && occupation_its119 ) 			{ progression_its119 = progression_its119 + 1; }
if (sens_its119 == 2 && progression_its119 > 8 ) 		{ occupation_its119 = false; occupation_its55 = true;  
train2_its55[0] = train2_its119[0];
train2_its55[1] = train2_its119[1];
train2_its55[2] = train2_its119[2];
train2_its55[3] = train2_its119[3];
train2_its55[4] = train2_its119[4];
train2_its55[5] = train2_its119[5];
train2_its55[6] = train2_its119[6];
sens_its55 = sens_its119;
progression_its119 = 0;

}

if ( sens_its119 == 2 && progression_its119 == 1 )  			{ document.getElementById("d33").src = "image/point/a1_rouge.png";  document.getElementById("d32").src = "image/point/a1_rouge.png"; document.getElementById("q8").src = "image/point/a1_gauche.png"; }
if ( sens_its119 == 2 && progression_its119 == 2 )  			{ document.getElementById("d32").src = "image/point/a1_rouge.png";  document.getElementById("q8").src = "image/point/a1_rouge.png"; document.getElementById("q7").src = "image/point/a1_gauche.png"; }
if ( sens_its119 == 2 && progression_its119 == 3 )  			{ document.getElementById("q8").src = "image/point/a1_rouge.png";  document.getElementById("q7").src = "image/point/a1_rouge.png"; document.getElementById("q6").src = "image/point/a1_gauche.png"; }
if ( sens_its119 == 2 && progression_its119 == 4 )  			{ document.getElementById("q7").src = "image/point/a1_rouge.png";  document.getElementById("q6").src = "image/point/a1_rouge.png"; document.getElementById("q5").src = "image/point/a1_gauche.png"; }
if ( sens_its119 == 2 && progression_its119 == 5 )  			{ document.getElementById("q6").src = "image/point/a1_rouge.png";  document.getElementById("q5").src = "image/point/a1_rouge.png"; document.getElementById("q4").src = "image/point/a1_gauche.png"; }
if ( sens_its119 == 2 && progression_its119 == 6 )  			{ document.getElementById("q5").src = "image/point/a1_rouge.png";  document.getElementById("q4").src = "image/point/a1_rouge.png"; document.getElementById("q3").src = "image/point/a1_gauche.png"; }
if ( sens_its119 == 2 && progression_its119 == 7 )  			{ document.getElementById("q4").src = "image/point/a1_rouge.png";  document.getElementById("q3").src = "image/point/a1_rouge.png"; document.getElementById("q2").src = "image/point/a1_gauche.png"; }
if ( sens_its119 == 2 && progression_its119 == 8 )  			{ document.getElementById("q3").src = "image/point/a1_rouge.png";  document.getElementById("q2").src = "image/point/a1_rouge.png"; document.getElementById("q1").src = "image/point/a1_gauche.png"; }


// its55

if (sens_its55 == 2 && occupation_its55) 								{ progression_its55 = progression_its55 + 1; }
if (sens_its55 == 2 && progression_its55 > 8 ) 							{ occupation_its55 = false; occupation_its54 = true;  
train2_its54[0] = train2_its55[0];
train2_its54[1] = train2_its55[1];
train2_its54[2] = train2_its55[2];
train2_its54[3] = train2_its55[3];
train2_its54[4] = train2_its55[4];
train2_its54[5] = train2_its55[5];
train2_its54[6] = train2_its55[6];
sens_its54 = sens_its55;
progression_its55 = 0;
its55 = 0; 
}

if ( sens_its55 == 2 && progression_its55 == 1 )  			{ document.getElementById("q2").src = "image/point/a1_rouge.png";  document.getElementById("q1").src = "image/point/a1_rouge.png"; document.getElementById("d30").src = "image/point/a1_gauche.png"; }
if ( sens_its55 == 2 && progression_its55 == 2 )  			{ document.getElementById("q1").src = "image/point/a1_rouge.png";  document.getElementById("d30").src = "image/point/a1_rouge.png"; document.getElementById("d29").src = "image/point/a1_gauche.png"; }
if ( sens_its55 == 2 && progression_its55 == 3 )  			{ document.getElementById("d30").src = "image/point/a1_rouge.png";  document.getElementById("d29").src = "image/point/a1_rouge.png"; document.getElementById("d28").src = "image/point/a1_gauche.png"; }
if ( sens_its55 == 2 && progression_its55 == 4 )  			{ document.getElementById("d29").src = "image/point/a1_rouge.png";  document.getElementById("d28").src = "image/point/a1_rouge.png"; document.getElementById("d27").src = "image/point/a1_gauche.png"; }
if ( sens_its55 == 2 && progression_its55 == 5 )  			{ document.getElementById("d28").src = "image/point/a1_rouge.png";  document.getElementById("d27").src = "image/point/a1_rouge.png"; document.getElementById("d26").src = "image/point/a1_gauche.png"; }
if ( sens_its55 == 2 && progression_its55 == 6 )  			{ document.getElementById("d27").src = "image/point/a1_rouge.png";  document.getElementById("d26").src = "image/point/a1_rouge.png"; document.getElementById("d25").src = "image/point/a1_gauche.png"; }
if ( sens_its55 == 2 && progression_its55 == 7 )  			{ document.getElementById("d26").src = "image/point/a1_rouge.png";  document.getElementById("d25").src = "image/point/a1_rouge.png"; document.getElementById("d24").src = "image/point/a1_gauche.png"; }
if ( sens_its55 == 2 && progression_its55 == 8 )  			{ document.getElementById("d25").src = "image/point/a1_rouge.png";  document.getElementById("d24").src = "image/point/a1_rouge.png"; document.getElementById("d23").src = "image/point/a1_gauche.png"; }


// its54

if (sens_its54 == 2 && occupation_its54) 								{ progression_its54 = progression_its54 + 1; }
if (sens_its54 == 2 && aiguille81 == 0 && progression_its54 > 4 ) 		{ occupation_its54 = false; occupation_its53 = true;  
train2_its53[0] = train2_its54[0];
train2_its53[1] = train2_its54[1];
train2_its53[2] = train2_its54[2];
train2_its53[3] = train2_its54[3];
train2_its53[4] = train2_its54[4];
train2_its53[5] = train2_its54[5];
train2_its53[6] = train2_its54[6];
sens_its53 = sens_its54;
progression_its54 = 0;
its54 = 0; 
}

if (sens_its54 == 2 && aiguille81 == 0 && occupation_its54) {
if ( sens_its54 == 2 && progression_its54 == 1 )  			{ document.getElementById("d24").src = "image/point/a1_rouge.png";  document.getElementById("d23").src = "image/point/a1_rouge.png"; document.getElementById("d22").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 2 )  			{ document.getElementById("d23").src = "image/point/a1_rouge.png";  document.getElementById("d22").src = "image/point/a1_rouge.png"; document.getElementById("d21").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 3 )  			{ document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_rouge.png"; document.getElementById("d20").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 4 )  			{ document.getElementById("d21").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_rouge.png"; document.getElementById("d19").src = "image/point/a1_gauche.png";}
}

if (sens_its54 == 2 && aiguille81 == 1 && aiguille78 == 0 && aiguille79 == 0 && progression_its54 > 10 ) 		{ occupation_its54 = false; occupation_its131 = true;  
train2_its131[0] = train2_its54[0];
train2_its131[1] = train2_its54[1];
train2_its131[2] = train2_its54[2];
train2_its131[3] = train2_its54[3];
train2_its131[4] = train2_its54[4];
train2_its131[5] = train2_its54[5];
train2_its131[6] = train2_its54[6];
sens_its131 = sens_its54;
progression_its54 = 0;
its54 = 0; its81 = 0; its33 = 0; 
aiguille81 = 0; 
}

if (sens_its54 == 2 && aiguille81 == 1 && aiguille78 == 0 && aiguille79 == 0 && occupation_its54) {
if ( sens_its54 == 2 && progression_its54 == 1 )  			{ document.getElementById("d24").src = "image/point/a1_rouge.png";  document.getElementById("d23").src = "image/point/a1_rouge.png"; document.getElementById("d22").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 2 )  			{ document.getElementById("d23").src = "image/point/a1_rouge.png";  document.getElementById("d22").src = "image/point/a1_rouge.png"; document.getElementById("d21").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 3 )  			{ document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_rouge.png"; document.getElementById("d20").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 4 )  			{ document.getElementById("d21").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_rouge.png"; document.getElementById("d19").src = "image/point/a1_gauche.png";}
if ( sens_its54 == 2 && progression_its54 == 5 )  			{ document.getElementById("d20").src = "image/point/a1_rouge.png";  document.getElementById("d19").src = "image/point/a1_rouge.png"; document.getElementById("f22").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 6 )  			{ document.getElementById("d19").src = "image/point/a1_rouge.png";  document.getElementById("f22").src = "image/point/a1_rouge.png"; document.getElementById("f21").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 7 )  			{ document.getElementById("f22").src = "image/point/a1_rouge.png";  document.getElementById("f21").src = "image/point/a1_rouge.png"; document.getElementById("c18").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 8 )  			{ document.getElementById("f21").src = "image/point/a1_rouge.png";  document.getElementById("c18").src = "image/point/a1_rouge.png"; document.getElementById("c17").src = "image/point/a1_gauche.png";}
if ( sens_its54 == 2 && progression_its54 == 9 )  			{ document.getElementById("c18").src = "image/point/a1_rouge.png";  document.getElementById("c17").src = "image/point/a1_rouge.png"; document.getElementById("c16").src = "image/point/a1_gauche.png"; }
if ( sens_its54 == 2 && progression_its54 == 10 )  			{ document.getElementById("c17").src = "image/point/a1_rouge.png";  document.getElementById("c16").src = "image/point/a1_rouge.png"; document.getElementById("c15").src = "image/point/a1_gauche.png"; }
}


// its53

if (sens_its53 == 2 && occupation_its53) 							{ progression_its53 = progression_its53 + 1; }
if (sens_its53 == 2 && progression_its53 > 7 ) 						{ occupation_its53 = false; occupation_its52 = true;  
train2_its52[0] = train2_its53[0];
train2_its52[1] = train2_its53[1];
train2_its52[2] = train2_its53[2];
train2_its52[3] = train2_its53[3];
train2_its52[4] = train2_its53[4];
train2_its52[5] = train2_its53[5];
train2_its52[6] = train2_its53[6];
sens_its52 =     sens_its53;
progression_its53 = 0;
its53 = 0; 
}

if ( sens_its53 == 2 && progression_its53 == 1 )  			{ document.getElementById("d20").src = "image/point/a1_rouge.png";  document.getElementById("d19").src = "image/point/a1_rouge.png"; document.getElementById("d18").src = "image/point/a1_gauche.png";}
if ( sens_its53 == 2 && progression_its53 == 2 )  			{ document.getElementById("d19").src = "image/point/a1_rouge.png";  document.getElementById("d18").src = "image/point/a1_rouge.png"; document.getElementById("d17").src = "image/point/a1_gauche.png";}
if ( sens_its53 == 2 && progression_its53 == 3 )  			{ document.getElementById("d18").src = "image/point/a1_rouge.png";  document.getElementById("d17").src = "image/point/a1_rouge.png"; document.getElementById("d16").src = "image/point/a1_gauche.png";}
if ( sens_its53 == 2 && progression_its53 == 4 )  			{ document.getElementById("d17").src = "image/point/a1_rouge.png";  document.getElementById("d16").src = "image/point/a1_rouge.png"; document.getElementById("d15").src = "image/point/a1_gauche.png";}
if ( sens_its53 == 2 && progression_its53 == 5 )  			{ document.getElementById("d16").src = "image/point/a1_rouge.png";  document.getElementById("d15").src = "image/point/a1_rouge.png"; document.getElementById("d14").src = "image/point/a1_gauche.png";}
if ( sens_its53 == 2 && progression_its53 == 6 )  			{ document.getElementById("d15").src = "image/point/a1_rouge.png";  document.getElementById("d14").src = "image/point/a1_rouge.png"; document.getElementById("d13").src = "image/point/a1_gauche.png";}
if ( sens_its53 == 2 && progression_its53 == 7 )  			{ document.getElementById("d14").src = "image/point/a1_rouge.png";  document.getElementById("d13").src = "image/point/a1_rouge.png"; document.getElementById("d12").src = "image/point/a1_gauche.png";}



// its52

if (sens_its52 == 2 && occupation_its52) 							{ progression_its52 = progression_its52 + 1; }
if (sens_its52 == 2 && aiguille87 == 0 && progression_its52 > 2 ) 	{ occupation_its52 = false; occupation_its51 = true;  
train2_its51[0] = train2_its52[0];
train2_its51[1] = train2_its52[1];
train2_its51[2] = train2_its52[2];
train2_its51[3] = train2_its52[3];
train2_its51[4] = train2_its52[4];
train2_its51[5] = train2_its52[5];
train2_its51[6] = train2_its52[6];
sens_its51 =     sens_its52;
progression_its52 = 0;
its52 = 0; 
}

if (sens_its52 == 2 && aiguille87 == 0 && occupation_its52 ) 	{ 
if ( sens_its52 == 2 && progression_its52 == 1 )  			{ document.getElementById("d13").src = "image/point/a1_rouge.png";  document.getElementById("d12").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_gauche.png";}
if ( sens_its52 == 2 && progression_its52 == 2 )  			{ document.getElementById("d12").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_gauche.png";}
}

if (sens_its52 == 2 && aiguille87 == 1 && progression_its52 > 9 ) 	{ occupation_its52 = false; occupation_its70 = true;  
train2_its70[0] = train2_its52[0];
train2_its70[1] = train2_its52[1];
train2_its70[2] = train2_its52[2];
train2_its70[3] = train2_its52[3];
train2_its70[4] = train2_its52[4];
train2_its70[5] = train2_its52[5];
train2_its70[6] = train2_its52[6];
sens_its70 =     sens_its52;
progression_its52 = 0;
its52 = 0; its87 = 0; its71 = 0; 
aiguille87 = 0; 
}

if (sens_its52 == 2 && aiguille87 == 1 && occupation_its52 ) 	{ 
if ( sens_its52 == 2 && progression_its52 == 1 )  			{ document.getElementById("d13").src = "image/point/a1_rouge.png";  document.getElementById("d12").src = "image/point/a1_rouge.png"; document.getElementById("d11").src = "image/point/a1_gauche.png";}
if ( sens_its52 == 2 && progression_its52 == 2 )  			{ document.getElementById("d12").src = "image/point/a1_rouge.png";  document.getElementById("d11").src = "image/point/a1_rouge.png"; document.getElementById("d10").src = "image/point/a1_gauche.png";}
if ( sens_its52 == 2 && progression_its52 == 3 )  			{ document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("f15").src = "image/point/a1_gauche.png"; }
if ( sens_its52 == 2 && progression_its52 == 4 )  			{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("f15").src = "image/point/a1_rouge.png"; document.getElementById("f16").src = "image/point/a1_gauche.png"; }
if ( sens_its52 == 2 && progression_its52 == 5 )  			{ document.getElementById("f15").src = "image/point/a1_rouge.png";  document.getElementById("f16").src = "image/point/a1_rouge.png"; document.getElementById("e8").src = "image/point/a1_gauche.png"; }
if ( sens_its52 == 2 && progression_its52 == 6 )  			{ document.getElementById("f16").src = "image/point/a1_rouge.png";  document.getElementById("e8").src = "image/point/a1_rouge.png"; document.getElementById("e7").src = "image/point/a1_gauche.png"; }
if ( sens_its52 == 2 && progression_its52 == 7 )  			{ document.getElementById("e8").src = "image/point/a1_rouge.png";  document.getElementById("e7").src = "image/point/a1_rouge.png"; document.getElementById("e6").src = "image/point/a1_gauche.png"; }
if ( sens_its52 == 2 && progression_its52 == 8 )  			{ document.getElementById("e7").src = "image/point/a1_rouge.png";  document.getElementById("e6").src = "image/point/a1_rouge.png"; document.getElementById("e5").src = "image/point/a1_gauche.png"; }
if ( sens_its52 == 2 && progression_its52 == 9 )  			{ document.getElementById("e6").src = "image/point/a1_rouge.png";  document.getElementById("e5").src = "image/point/a1_rouge.png"; document.getElementById("e4").src = "image/point/a1_gauche.png"; }
}


// its51

if (sens_its51 == 2 && occupation_its51) 							{ progression_its51 = progression_its51 + 1;  }
if (sens_its51 == 2 && progression_its51 > 5 ) 						{ occupation_its51 = false; occupation_its50 = true;  
train2_its50[0] = train2_its51[0];
train2_its50[1] = train2_its51[1];
train2_its50[2] = train2_its51[2];
train2_its50[3] = train2_its51[3];
train2_its50[4] = train2_its51[4];
train2_its50[5] = train2_its51[5];
train2_its50[6] = train2_its51[6];
sens_its50 =     sens_its51;
progression_its51 = 0;
its51 = 0; 
}

if ( sens_its51 == 2 && progression_its51 == 1 )  			{ document.getElementById("d11").src = "image/point/a1_rouge.png";  document.getElementById("d10").src = "image/point/a1_rouge.png"; document.getElementById("d9").src = "image/point/a1_gauche.png";}
if ( sens_its51 == 2 && progression_its51 == 2 )  			{ document.getElementById("d10").src = "image/point/a1_rouge.png";  document.getElementById("d9").src = "image/point/a1_rouge.png"; document.getElementById("d8").src = "image/point/a1_gauche.png";}
if ( sens_its51 == 2 && progression_its51 == 3 )  			{ document.getElementById("d9").src = "image/point/a1_rouge.png";  document.getElementById("d8").src = "image/point/a1_rouge.png"; document.getElementById("d7").src = "image/point/a1_gauche.png";}
if ( sens_its51 == 2 && progression_its51 == 4 )  			{ document.getElementById("d8").src = "image/point/a1_rouge.png";  document.getElementById("d7").src = "image/point/a1_rouge.png"; document.getElementById("d6").src = "image/point/a1_gauche.png";}
if ( sens_its51 == 2 && progression_its51 == 5 )  			{ document.getElementById("d7").src = "image/point/a1_rouge.png";  document.getElementById("d6").src = "image/point/a1_rouge.png"; document.getElementById("d5").src = "image/point/a1_gauche.png";}

// its77

if (sens_its77 == 2 && occupation_its77) 							{ progression_its77 = progression_its77 + 1; } 
if (sens_its77 == 2 && its76 == 0 && progression_its77 > 4 ) 		{ progression_its77 = 4; }
if (sens_its77 == 2 && progression_its77 > 4 ) 						{ occupation_its77 = false; occupation_its76 = true;
train2_its76[0] = train2_its77[0];
train2_its76[1] = train2_its77[1];
train2_its76[2] = train2_its77[2];
train2_its76[3] = train2_its77[3];
train2_its76[4] = train2_its77[4];
train2_its76[5] = train2_its77[5];
train2_its76[6] = train2_its77[6];
sens_its76 = sens_its77;
progression_its77 = 0;

} 

if ( sens_its77 == 2 && progression_its77 == 1 )  			{ document.getElementById("e66").src = "image/point/a1_rouge.png";  document.getElementById("e66").src = "image/point/a1_rouge.png"; document.getElementById("e66").src = "image/point/a1_rouge.png"; }
if ( sens_its77 == 2 && progression_its77 == 2 )  			{ document.getElementById("e65").src = "image/point/a1_rouge.png";  document.getElementById("e66").src = "image/point/a1_rouge.png"; document.getElementById("e66").src = "image/point/a1_rouge.png"; }
if ( sens_its77 == 2 && progression_its77 == 3 )  			{ document.getElementById("e64").src = "image/point/a1_rouge.png";  document.getElementById("e65").src = "image/point/a1_rouge.png"; document.getElementById("e66").src = "image/point/a1_rouge.png";  }
if ( sens_its77 == 2 && progression_its77 == 4 )  			{ document.getElementById("e63").src = "image/point/a1_gauche.png";  document.getElementById("e64").src = "image/point/a1_rouge.png"; document.getElementById("e65").src = "image/point/a1_rouge.png"; }


// its76

if (sens_its76 == 2 && occupation_its76) 										{ progression_its76 = progression_its76 + 1; } 
if (sens_its76 == 2 && aiguille86 == 0 && progression_its76 > 5 ) 				{ occupation_its76 = false; occupation_its75 = true;
train2_its75[0] = train2_its76[0];
train2_its75[1] = train2_its76[1];
train2_its75[2] = train2_its76[2];
train2_its75[3] = train2_its76[3];
train2_its75[4] = train2_its76[4];
train2_its75[5] = train2_its76[5];
train2_its75[6] = train2_its76[6];
sens_its75 = sens_its76;
progression_its76 = 0;
its77 = 0; its76 = 0; 
} 

if (sens_its76 == 2 && aiguille86 == 0 && occupation_its76 ) 				{
if ( sens_its76 == 2 && progression_its76 == 1 )  			{ document.getElementById("e64").src = "image/point/a1_rouge.png";  document.getElementById("e63").src = "image/point/a1_rouge.png"; document.getElementById("e62").src = "image/point/a1_gauche.png"; }
if ( sens_its76 == 2 && progression_its76 == 2 )  			{ document.getElementById("e63").src = "image/point/a1_rouge.png";  document.getElementById("e62").src = "image/point/a1_rouge.png"; document.getElementById("e61").src = "image/point/a1_gauche.png"; }
if ( sens_its76 == 2 && progression_its76 == 3 )  			{ document.getElementById("e62").src = "image/point/a1_rouge.png";  document.getElementById("e61").src = "image/point/a1_rouge.png"; document.getElementById("e60").src = "image/point/a1_gauche.png";  }
if ( sens_its76 == 2 && progression_its76 == 4 )  			{ document.getElementById("e61").src = "image/point/a1_rouge.png";  document.getElementById("e60").src = "image/point/a1_rouge.png"; document.getElementById("e59").src = "image/point/a1_gauche.png"; }
if ( sens_its76 == 2 && progression_its76 == 5 )  			{ document.getElementById("e60").src = "image/point/a1_rouge.png";  document.getElementById("e59").src = "image/point/a1_rouge.png"; document.getElementById("e58").src = "image/point/a1_gauche.png"; }
}

if (sens_its76 == 2 && aiguille86 == 1 && progression_its76 > 9 ) 				{ occupation_its76 = false; occupation_its58 = true;
train2_its58[0] = train2_its76[0];
train2_its58[1] = train2_its76[1];
train2_its58[2] = train2_its76[2];
train2_its58[3] = train2_its76[3];
train2_its58[4] = train2_its76[4];
train2_its58[5] = train2_its76[5];
train2_its58[6] = train2_its76[6];
sens_its58 = sens_its76;
progression_its76 = 0;
its77 = 0; its76 = 0; its86 = 0; its59 = 0; 
aiguille86 = 0; 
} 

if (sens_its76 == 2 && aiguille86 == 1 && occupation_its76 ) 				{
if ( sens_its76 == 2 && progression_its76 == 1 )  			{ document.getElementById("e64").src = "image/point/a1_rouge.png";  document.getElementById("e63").src = "image/point/a1_rouge.png"; document.getElementById("e62").src = "image/point/a1_gauche.png"; }
if ( sens_its76 == 2 && progression_its76 == 2 )  			{ document.getElementById("e63").src = "image/point/a1_rouge.png";  document.getElementById("e62").src = "image/point/a1_rouge.png"; document.getElementById("e61").src = "image/point/a1_gauche.png"; }
if ( sens_its76 == 2 && progression_its76 == 3 )  			{ document.getElementById("e62").src = "image/point/a1_rouge.png";  document.getElementById("e61").src = "image/point/a1_rouge.png"; document.getElementById("e60").src = "image/point/a1_gauche.png";  }
if ( sens_its76 == 2 && progression_its76 == 4 )  			{ document.getElementById("e61").src = "image/point/a1_rouge.png";  document.getElementById("e60").src = "image/point/a1_rouge.png"; document.getElementById("e59").src = "image/point/a1_gauche.png"; }
if ( sens_its76 == 2 && progression_its76 == 5 )  			{ document.getElementById("e60").src = "image/point/a1_rouge.png";  document.getElementById("e59").src = "image/point/a1_rouge.png"; document.getElementById("e58").src = "image/point/a1_gauche.png"; }
if ( sens_its76 == 2 && progression_its76 == 6 )  			{ document.getElementById("e59").src = "image/point/a1_rouge.png";  document.getElementById("e58").src = "image/point/a1_rouge.png"; document.getElementById("f6").src = "image/point/a1_gauche.png"; }
if ( sens_its76 == 2 && progression_its76 == 7 )  			{ document.getElementById("e58").src = "image/point/a1_rouge.png";  document.getElementById("f6").src = "image/point/a1_rouge.png"; document.getElementById("f5").src = "image/point/a1_gauche.png"; }
if ( sens_its76 == 2 && progression_its76 == 8 )  			{ document.getElementById("f6").src = "image/point/a1_rouge.png";  document.getElementById("f5").src = "image/point/a1_rouge.png"; document.getElementById("d56").src = "image/point/a1_gauche.png";  }
if ( sens_its76 == 2 && progression_its76 == 9 )  			{ document.getElementById("f5").src = "image/point/a1_rouge.png";  document.getElementById("d56").src = "image/point/a1_rouge.png"; document.getElementById("d55").src = "image/point/a1_gauche.png"; }
}





// its75

if (sens_its75 == 2 && occupation_its75) 				{ progression_its75 = progression_its75 + 1;}  
if (sens_its75 == 2 && progression_its75 > 22 ) 		{ occupation_its75 = false; occupation_its74 = true;  
train2_its74[0] = train2_its75[0];
train2_its74[1] = train2_its75[1];
train2_its74[2] = train2_its75[2];
train2_its74[3] = train2_its75[3];
train2_its74[4] = train2_its75[4];
train2_its74[5] = train2_its75[5];
train2_its74[6] = train2_its75[6];
sens_its74 = sens_its75;
progression_its75 = 0;
its75 = 0; 
}

if ( sens_its75 == 2 && progression_its75 == 1 )  			{ document.getElementById("e59").src = "image/point/a1_rouge.png";  document.getElementById("e58").src = "image/point/a1_rouge.png"; document.getElementById("e57").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 2 )  			{ document.getElementById("e58").src = "image/point/a1_rouge.png";  document.getElementById("e57").src = "image/point/a1_rouge.png"; document.getElementById("e56").src = "image/point/a1_gauche.png";  }
if ( sens_its75 == 2 && progression_its75 == 3 )  			{ document.getElementById("e57").src = "image/point/a1_rouge.png";  document.getElementById("e56").src = "image/point/a1_rouge.png"; document.getElementById("e55").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 4 )  			{ document.getElementById("e56").src = "image/point/a1_rouge.png";  document.getElementById("e55").src = "image/point/a1_rouge.png"; document.getElementById("e54").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 5 )  			{ document.getElementById("e55").src = "image/point/a1_rouge.png";  document.getElementById("e54").src = "image/point/a1_rouge.png"; document.getElementById("e53").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 6 )  			{ document.getElementById("e54").src = "image/point/a1_rouge.png";  document.getElementById("e53").src = "image/point/a1_rouge.png"; document.getElementById("e52").src = "image/point/a1_gauche.png";  }
if ( sens_its75 == 2 && progression_its75 == 7 )  			{ document.getElementById("e53").src = "image/point/a1_rouge.png";  document.getElementById("e52").src = "image/point/a1_rouge.png"; document.getElementById("e51").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 8 )  			{ document.getElementById("e52").src = "image/point/a1_rouge.png";  document.getElementById("e51").src = "image/point/a1_rouge.png"; document.getElementById("e50").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 9 )  			{ document.getElementById("e51").src = "image/point/a1_rouge.png";  document.getElementById("e50").src = "image/point/a1_rouge.png"; document.getElementById("e49").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 10 )  			{ document.getElementById("e50").src = "image/point/a1_rouge.png";  document.getElementById("e49").src = "image/point/a1_rouge.png"; document.getElementById("e48").src = "image/point/a1_gauche.png";  }
if ( sens_its75 == 2 && progression_its75 == 11 )  			{ document.getElementById("e49").src = "image/point/a1_rouge.png";  document.getElementById("e48").src = "image/point/a1_rouge.png"; document.getElementById("e47").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 12 )  			{ document.getElementById("e48").src = "image/point/a1_rouge.png";  document.getElementById("e47").src = "image/point/a1_rouge.png"; document.getElementById("e46").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 13 )  			{ document.getElementById("e47").src = "image/point/a1_rouge.png";  document.getElementById("e46").src = "image/point/a1_rouge.png"; document.getElementById("e45").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 14 )  			{ document.getElementById("e46").src = "image/point/a1_rouge.png";  document.getElementById("e45").src = "image/point/a1_rouge.png"; document.getElementById("e44").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 15 )  			{ document.getElementById("e45").src = "image/point/a1_rouge.png";  document.getElementById("e44").src = "image/point/a1_rouge.png"; document.getElementById("e43").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 16 )  			{ document.getElementById("e44").src = "image/point/a1_rouge.png";  document.getElementById("e43").src = "image/point/a1_rouge.png"; document.getElementById("e42").src = "image/point/a1_gauche.png";  }
if ( sens_its75 == 2 && progression_its75 == 17 )  			{ document.getElementById("e43").src = "image/point/a1_rouge.png";  document.getElementById("e42").src = "image/point/a1_rouge.png"; document.getElementById("e41").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 18 )  			{ document.getElementById("e42").src = "image/point/a1_rouge.png";  document.getElementById("e41").src = "image/point/a1_rouge.png"; document.getElementById("e40").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 19 )  			{ document.getElementById("e41").src = "image/point/a1_rouge.png";  document.getElementById("e40").src = "image/point/a1_rouge.png"; document.getElementById("e39").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 20 )  			{ document.getElementById("e40").src = "image/point/a1_rouge.png";  document.getElementById("e39").src = "image/point/a1_rouge.png"; document.getElementById("e38").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 21 )  			{ document.getElementById("e39").src = "image/point/a1_rouge.png";  document.getElementById("e38").src = "image/point/a1_rouge.png"; document.getElementById("e37").src = "image/point/a1_gauche.png"; }
if ( sens_its75 == 2 && progression_its75 == 22 )  			{ document.getElementById("e38").src = "image/point/a1_rouge.png";  document.getElementById("e37").src = "image/point/a1_rouge.png"; document.getElementById("e36").src = "image/point/a1_gauche.png"; }


// its74

if (sens_its74 == 2 && occupation_its74) 					{ progression_its74 = progression_its74 + 1; }
if (sens_its74 == 2 && progression_its74 > 4 ) 				{ occupation_its74 = false; occupation_its120 = true; 
train2_its120[0] = train2_its74[0];
train2_its120[1] = train2_its74[1];
train2_its120[2] = train2_its74[2];
train2_its120[3] = train2_its74[3];
train2_its120[4] = train2_its74[4];
train2_its120[5] = train2_its74[5];
train2_its120[6] = train2_its74[6];
sens_its120 = sens_its74;
progression_its74 = 0; 
its74 = 0; 
} 

if ( sens_its74 == 2 && progression_its74 == 1 )  			{ document.getElementById("e37").src = "image/point/a1_rouge.png";  document.getElementById("e36").src = "image/point/a1_rouge.png"; document.getElementById("e35").src = "image/point/a1_gauche.png";  }
if ( sens_its74 == 2 && progression_its74 == 2 )  			{ document.getElementById("e36").src = "image/point/a1_rouge.png";  document.getElementById("e35").src = "image/point/a1_rouge.png"; document.getElementById("e34").src = "image/point/a1_gauche.png"; }
if ( sens_its74 == 2 && progression_its74 == 3 )  			{ document.getElementById("e35").src = "image/point/a1_rouge.png";  document.getElementById("e34").src = "image/point/a1_rouge.png"; document.getElementById("e33").src = "image/point/a1_gauche.png"; }
if ( sens_its74 == 2 && progression_its74 == 4 )  			{ document.getElementById("e34").src = "image/point/a1_rouge.png";  document.getElementById("e33").src = "image/point/a1_rouge.png"; document.getElementById("e32").src = "image/point/a1_gauche.png"; }

// its120

if (sens_its120 == 2 && occupation_its120 ) 			{ progression_its120 = progression_its120 + 1; }
if (sens_its120 == 2 && progression_its120 > 8 ) 		{ occupation_its120 = false; occupation_its73 = true;  
train2_its73[0] = train2_its120[0];
train2_its73[1] = train2_its120[1];
train2_its73[2] = train2_its120[2];
train2_its73[3] = train2_its120[3];
train2_its73[4] = train2_its120[4];
train2_its73[5] = train2_its120[5];
train2_its73[6] = train2_its120[6];
sens_its73 = sens_its120;
progression_its120 = 0;
}

if ( sens_its120 == 2 && progression_its120 == 1 )  			{ document.getElementById("e33").src = "image/point/a1_rouge.png";  document.getElementById("e32").src = "image/point/a1_rouge.png"; document.getElementById("k8").src = "image/point/a1_gauche.png"; }
if ( sens_its120 == 2 && progression_its120 == 2 )  			{ document.getElementById("e32").src = "image/point/a1_rouge.png";  document.getElementById("k8").src = "image/point/a1_rouge.png"; document.getElementById("k7").src = "image/point/a1_gauche.png"; }
if ( sens_its120 == 2 && progression_its120 == 3 )  			{ document.getElementById("k8").src = "image/point/a1_rouge.png";  document.getElementById("k7").src = "image/point/a1_rouge.png"; document.getElementById("k6").src = "image/point/a1_gauche.png"; }
if ( sens_its120 == 2 && progression_its120 == 4 )  			{ document.getElementById("k7").src = "image/point/a1_rouge.png";  document.getElementById("k6").src = "image/point/a1_rouge.png"; document.getElementById("k5").src = "image/point/a1_gauche.png"; }
if ( sens_its120 == 2 && progression_its120 == 5 )  			{ document.getElementById("k6").src = "image/point/a1_rouge.png";  document.getElementById("k5").src = "image/point/a1_rouge.png"; document.getElementById("k4").src = "image/point/a1_gauche.png"; }
if ( sens_its120 == 2 && progression_its120 == 6 )  			{ document.getElementById("k5").src = "image/point/a1_rouge.png";  document.getElementById("k4").src = "image/point/a1_rouge.png"; document.getElementById("k3").src = "image/point/a1_gauche.png"; }
if ( sens_its120 == 2 && progression_its120 == 7 )  			{ document.getElementById("k4").src = "image/point/a1_rouge.png";  document.getElementById("k3").src = "image/point/a1_rouge.png"; document.getElementById("k2").src = "image/point/a1_gauche.png"; }
if ( sens_its120 == 2 && progression_its120 == 8 )  			{ document.getElementById("k3").src = "image/point/a1_rouge.png";  document.getElementById("k2").src = "image/point/a1_rouge.png"; document.getElementById("k1").src = "image/point/a1_gauche.png"; }



// its73

if (sens_its73 == 2 && occupation_its73) 							{ progression_its73 = progression_its73 + 1;}
if (sens_its73 == 2 && aiguille93 == 0 && progression_its73 > 7 ) 	{ occupation_its73 = false; occupation_its72 = true;  
train2_its72[0] = train2_its73[0];
train2_its72[1] = train2_its73[1];
train2_its72[2] = train2_its73[2];
train2_its72[3] = train2_its73[3];
train2_its72[4] = train2_its73[4];
train2_its72[5] = train2_its73[5];
train2_its72[6] = train2_its73[6];
sens_its72 = sens_its73;
progression_its73 = 0;
its73 = 0; 
}

if (sens_its73 == 2 && aiguille93 == 0 && occupation_its73 ) 			{
if ( sens_its73 == 2 && progression_its73 == 1 )  			{ document.getElementById("k2").src = "image/point/a1_rouge.png";  document.getElementById("k1").src = "image/point/a1_rouge.png"; document.getElementById("e30").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 2 )  			{ document.getElementById("k1").src = "image/point/a1_rouge.png";  document.getElementById("e30").src = "image/point/a1_rouge.png"; document.getElementById("e29").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 3 )  			{ document.getElementById("e30").src = "image/point/a1_rouge.png";  document.getElementById("e29").src = "image/point/a1_rouge.png"; document.getElementById("e28").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 4 )  			{ document.getElementById("e29").src = "image/point/a1_rouge.png";  document.getElementById("e28").src = "image/point/a1_rouge.png"; document.getElementById("e27").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 5 )  			{ document.getElementById("e28").src = "image/point/a1_rouge.png";  document.getElementById("e27").src = "image/point/a1_rouge.png"; document.getElementById("e26").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 6 )  			{ document.getElementById("e27").src = "image/point/a1_rouge.png";  document.getElementById("e26").src = "image/point/a1_rouge.png"; document.getElementById("e25").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 7 )  			{ document.getElementById("e26").src = "image/point/a1_rouge.png";  document.getElementById("e25").src = "image/point/a1_rouge.png"; document.getElementById("e24").src = "image/point/a1_gauche.png"; }
}

if (sens_its73 == 2 && aiguille93 == 1 && aiguille81 == 0 && progression_its73 > 13 ) 	{ occupation_its73 = false; occupation_its53 = true;  
train2_its53[0] = train2_its73[0];
train2_its53[1] = train2_its73[1];
train2_its53[2] = train2_its73[2];
train2_its53[3] = train2_its73[3];
train2_its53[4] = train2_its73[4];
train2_its53[5] = train2_its73[5];
train2_its53[6] = train2_its73[6];
sens_its53 = sens_its73;
progression_its73 = 0;
its73 = 0; its93 = 0;  its54 = 0; 
aiguille93 = 0; 
}

if (sens_its73 == 2 && aiguille93 == 1 && aiguille81 == 0 && occupation_its73 ) 			{
if ( sens_its73 == 2 && progression_its73 == 1 )  			{ document.getElementById("k2").src = "image/point/a1_rouge.png";  document.getElementById("k1").src = "image/point/a1_rouge.png"; document.getElementById("e30").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 2 )  			{ document.getElementById("k1").src = "image/point/a1_rouge.png";  document.getElementById("e30").src = "image/point/a1_rouge.png"; document.getElementById("e29").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 3 )  			{ document.getElementById("e30").src = "image/point/a1_rouge.png";  document.getElementById("e29").src = "image/point/a1_rouge.png"; document.getElementById("e28").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 4 )  			{ document.getElementById("e29").src = "image/point/a1_rouge.png";  document.getElementById("e28").src = "image/point/a1_rouge.png"; document.getElementById("e27").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 5 )  			{ document.getElementById("e28").src = "image/point/a1_rouge.png";  document.getElementById("e27").src = "image/point/a1_rouge.png"; document.getElementById("e26").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 6 )  			{ document.getElementById("e27").src = "image/point/a1_rouge.png";  document.getElementById("e26").src = "image/point/a1_rouge.png"; document.getElementById("e25").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 7 )  			{ document.getElementById("e26").src = "image/point/a1_rouge.png";  document.getElementById("e25").src = "image/point/a1_rouge.png"; document.getElementById("e24").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 8 )  			{ document.getElementById("e25").src = "image/point/a1_rouge.png";  document.getElementById("e24").src = "image/point/a1_rouge.png"; document.getElementById("f31").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 9 )  			{ document.getElementById("e24").src = "image/point/a1_rouge.png";  document.getElementById("f31").src = "image/point/a1_rouge.png"; document.getElementById("f30").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 10 )  			{ document.getElementById("f31").src = "image/point/a1_rouge.png";  document.getElementById("f30").src = "image/point/a1_rouge.png"; document.getElementById("d22").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 11 )  			{ document.getElementById("f30").src = "image/point/a1_rouge.png";  document.getElementById("d22").src = "image/point/a1_rouge.png"; document.getElementById("d21").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 12 )  			{ document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_rouge.png"; document.getElementById("d20").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 13 )  			{ document.getElementById("d21").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_rouge.png"; document.getElementById("d19").src = "image/point/a1_gauche.png"; }
}

if (sens_its73 == 2 && aiguille93 == 1 && aiguille81 == 1 && progression_its73 > 19 ) 	{ occupation_its73 = false; occupation_its131 = true;  
train2_its131[0] = train2_its73[0];
train2_its131[1] = train2_its73[1];
train2_its131[2] = train2_its73[2];
train2_its131[3] = train2_its73[3];
train2_its131[4] = train2_its73[4];
train2_its131[5] = train2_its73[5];
train2_its131[6] = train2_its73[6];
sens_its131 = sens_its73;
progression_its73 = 0;
its73 = 0; its93 = 0; its54 = 0; its81 = 0; its33 = 0; 
aiguille93 = 0; 
aiguille81 = 0; 
}

if (sens_its73 == 2 && aiguille93 == 1 && aiguille81 == 1 && occupation_its73 ) 			{
if ( sens_its73 == 2 && progression_its73 == 1 )  			{ document.getElementById("k2").src = "image/point/a1_rouge.png";  document.getElementById("k1").src = "image/point/a1_rouge.png"; document.getElementById("e30").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 2 )  			{ document.getElementById("k1").src = "image/point/a1_rouge.png";  document.getElementById("e30").src = "image/point/a1_rouge.png"; document.getElementById("e29").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 3 )  			{ document.getElementById("e30").src = "image/point/a1_rouge.png";  document.getElementById("e29").src = "image/point/a1_rouge.png"; document.getElementById("e28").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 4 )  			{ document.getElementById("e29").src = "image/point/a1_rouge.png";  document.getElementById("e28").src = "image/point/a1_rouge.png"; document.getElementById("e27").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 5 )  			{ document.getElementById("e28").src = "image/point/a1_rouge.png";  document.getElementById("e27").src = "image/point/a1_rouge.png"; document.getElementById("e26").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 6 )  			{ document.getElementById("e27").src = "image/point/a1_rouge.png";  document.getElementById("e26").src = "image/point/a1_rouge.png"; document.getElementById("e25").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 7 )  			{ document.getElementById("e26").src = "image/point/a1_rouge.png";  document.getElementById("e25").src = "image/point/a1_rouge.png"; document.getElementById("e24").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 8 )  			{ document.getElementById("e25").src = "image/point/a1_rouge.png";  document.getElementById("e24").src = "image/point/a1_rouge.png"; document.getElementById("f31").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 9 )  			{ document.getElementById("e24").src = "image/point/a1_rouge.png";  document.getElementById("f31").src = "image/point/a1_rouge.png"; document.getElementById("f30").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 10 )  			{ document.getElementById("f31").src = "image/point/a1_rouge.png";  document.getElementById("f30").src = "image/point/a1_rouge.png"; document.getElementById("d22").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 11 )  			{ document.getElementById("f30").src = "image/point/a1_rouge.png";  document.getElementById("d22").src = "image/point/a1_rouge.png"; document.getElementById("d21").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 12 )  			{ document.getElementById("d22").src = "image/point/a1_rouge.png";  document.getElementById("d21").src = "image/point/a1_rouge.png"; document.getElementById("d20").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 13 )  			{ document.getElementById("d21").src = "image/point/a1_rouge.png";  document.getElementById("d20").src = "image/point/a1_rouge.png"; document.getElementById("d19").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 14 )  			{ document.getElementById("d20").src = "image/point/a1_rouge.png";  document.getElementById("d19").src = "image/point/a1_rouge.png"; document.getElementById("f22").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 15 )  			{ document.getElementById("d19").src = "image/point/a1_rouge.png";  document.getElementById("f22").src = "image/point/a1_rouge.png"; document.getElementById("f21").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 16 )  			{ document.getElementById("f22").src = "image/point/a1_rouge.png";  document.getElementById("f21").src = "image/point/a1_rouge.png"; document.getElementById("c18").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 17 )  			{ document.getElementById("f21").src = "image/point/a1_rouge.png";  document.getElementById("c18").src = "image/point/a1_rouge.png"; document.getElementById("c17").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 18 )  			{ document.getElementById("c18").src = "image/point/a1_rouge.png";  document.getElementById("c17").src = "image/point/a1_rouge.png"; document.getElementById("c16").src = "image/point/a1_gauche.png"; }
if ( sens_its73 == 2 && progression_its73 == 19 )  			{ document.getElementById("c17").src = "image/point/a1_rouge.png";  document.getElementById("c16").src = "image/point/a1_rouge.png"; document.getElementById("c15").src = "image/point/a1_gauche.png"; }
}



// its72

if (sens_its72 == 2 && occupation_its72) 					{ progression_its72 = progression_its72 + 1;}
if (sens_its72 == 2 && progression_its72 > 15 ) 			{ occupation_its72 = false; occupation_its71 = true;  
train2_its71[0] = train2_its72[0];
train2_its71[1] = train2_its72[1];
train2_its71[2] = train2_its72[2];
train2_its71[3] = train2_its72[3];
train2_its71[4] = train2_its72[4];
train2_its71[5] = train2_its72[5];
train2_its71[6] = train2_its72[6]; 
sens_its71 = sens_its72;
progression_its72 = 0;
its72 = 0; 
}


if ( sens_its72 == 2 && progression_its72 == 1 )  			{ document.getElementById("e25").src = "image/point/a1_rouge.png";  document.getElementById("e24").src = "image/point/a1_rouge.png"; document.getElementById("e23").src = "image/point/a1_gauche.png"; }
if ( sens_its72 == 2 && progression_its72 == 2 )  			{ document.getElementById("e24").src = "image/point/a1_rouge.png";  document.getElementById("e23").src = "image/point/a1_rouge.png"; document.getElementById("e22").src = "image/point/a1_gauche.png"; }
if ( sens_its72 == 2 && progression_its72 == 3 )  			{ document.getElementById("e23").src = "image/point/a1_rouge.png";  document.getElementById("e22").src = "image/point/a1_rouge.png"; document.getElementById("e21").src = "image/point/a1_gauche.png"; }
if ( sens_its72 == 2 && progression_its72 == 4 )  			{ document.getElementById("e22").src = "image/point/a1_rouge.png";  document.getElementById("e21").src = "image/point/a1_rouge.png"; document.getElementById("e20").src = "image/point/a1_gauche.png"; }
if ( sens_its72 == 2 && progression_its72 == 5 )  			{ document.getElementById("e21").src = "image/point/a1_rouge.png";  document.getElementById("e20").src = "image/point/a1_rouge.png"; document.getElementById("e19").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 6 )  			{ document.getElementById("e20").src = "image/point/a1_rouge.png";  document.getElementById("e19").src = "image/point/a1_rouge.png"; document.getElementById("e18").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 7 )  			{ document.getElementById("e19").src = "image/point/a1_rouge.png";  document.getElementById("e18").src = "image/point/a1_rouge.png"; document.getElementById("e17").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 8 )  			{ document.getElementById("e18").src = "image/point/a1_rouge.png";  document.getElementById("e17").src = "image/point/a1_rouge.png"; document.getElementById("e16").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 9 )  			{ document.getElementById("e17").src = "image/point/a1_rouge.png";  document.getElementById("e16").src = "image/point/a1_rouge.png"; document.getElementById("e15").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 10 )  			{ document.getElementById("e16").src = "image/point/a1_rouge.png";  document.getElementById("e15").src = "image/point/a1_rouge.png"; document.getElementById("e14").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 11 )  			{ document.getElementById("e15").src = "image/point/a1_rouge.png";  document.getElementById("e14").src = "image/point/a1_rouge.png"; document.getElementById("e13").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 12 )  			{ document.getElementById("e14").src = "image/point/a1_rouge.png";  document.getElementById("e13").src = "image/point/a1_rouge.png"; document.getElementById("e12").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 13 )  			{ document.getElementById("e13").src = "image/point/a1_rouge.png";  document.getElementById("e12").src = "image/point/a1_rouge.png"; document.getElementById("e11").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 14 )  			{ document.getElementById("e12").src = "image/point/a1_rouge.png";  document.getElementById("e11").src = "image/point/a1_rouge.png"; document.getElementById("e10").src = "image/point/a1_gauche.png";}
if ( sens_its72 == 2 && progression_its72 == 15 )  			{ document.getElementById("e11").src = "image/point/a1_rouge.png";  document.getElementById("e10").src = "image/point/a1_rouge.png"; document.getElementById("e9").src = "image/point/a1_gauche.png";}





// its71

if (sens_its71 == 2 && occupation_its71) 				{ progression_its71 = progression_its71 + 1;}
if (sens_its71 == 2 && progression_its71 > 4 ) 			{ occupation_its71 = false; occupation_its70 = true;  
train2_its70[0] = train2_its71[0];
train2_its70[1] = train2_its71[1];
train2_its70[2] = train2_its71[2];
train2_its70[3] = train2_its71[3];
train2_its70[4] = train2_its71[4];
train2_its70[5] = train2_its71[5];
train2_its70[6] = train2_its71[6];
sens_its70 = sens_its71;
progression_its71 = 0;
its71 = 0; 
}

if ( sens_its71 == 2 && progression_its71 == 1 )  			{ document.getElementById("e10").src = "image/point/a1_rouge.png";  document.getElementById("e9").src = "image/point/a1_rouge.png"; document.getElementById("e8").src = "image/point/a1_gauche.png";}
if ( sens_its71 == 2 && progression_its71 == 2 )  			{ document.getElementById("e9").src = "image/point/a1_rouge.png";  document.getElementById("e8").src = "image/point/a1_rouge.png"; document.getElementById("e7").src = "image/point/a1_gauche.png";}
if ( sens_its71 == 2 && progression_its71 == 3 )  			{ document.getElementById("e8").src = "image/point/a1_rouge.png";  document.getElementById("e7").src = "image/point/a1_rouge.png"; document.getElementById("e6").src = "image/point/a1_gauche.png";}
if ( sens_its71 == 2 && progression_its71 == 4 )  			{ document.getElementById("e7").src = "image/point/a1_rouge.png";  document.getElementById("e6").src = "image/point/a1_rouge.png"; document.getElementById("e5").src = "image/point/a1_gauche.png";}




// its70

if (sens_its70 == 2 && occupation_its70) 				{ progression_its70 = progression_its70 + 1;}
if (sens_its70 == 2 && progression_its70 > 6 ) 			{ occupation_its70 = false; 
progression_its70 = 0;
its70 = 0; document.getElementById("z4").src = "image/feux/rouge_2.png";
}

if ( sens_its70 == 2 && progression_its70 == 1 )  			{ document.getElementById("e6").src = "image/point/a1_rouge.png";  document.getElementById("e5").src = "image/point/a1_rouge.png"; document.getElementById("e4").src = "image/point/a1_gauche.png";}
if ( sens_its70 == 2 && progression_its70 == 2 )  			{ document.getElementById("e5").src = "image/point/a1_rouge.png";  document.getElementById("e4").src = "image/point/a1_rouge.png"; document.getElementById("e3").src = "image/point/a1_gauche.png";}
if ( sens_its70 == 2 && progression_its70 == 3 )  			{ document.getElementById("e4").src = "image/point/a1_rouge.png";  document.getElementById("e3").src = "image/point/a1_rouge.png"; document.getElementById("e2").src = "image/point/a1_gauche.png";}
if ( sens_its70 == 2 && progression_its70 == 4 )  			{ document.getElementById("e3").src = "image/point/a1_rouge.png";  document.getElementById("e2").src = "image/point/a1_rouge.png"; document.getElementById("e1").src = "image/point/a1_gauche.png";}
if ( sens_its70 == 2 && progression_its70 == 5 )  			{ document.getElementById("e2").src = "image/point/a1_rouge.png";  document.getElementById("e1").src = "image/point/a1_rouge.png"; document.getElementById("e1").src = "image/point/a1_gauche.png";}
if ( sens_its70 == 2 && progression_its70 == 6 )  			{ document.getElementById("e1").src = "image/point/a1_rouge.png";  document.getElementById("e1").src = "image/point/a1_rouge.png"; document.getElementById("e1").src = "image/point/a1_gauche.png";}

// its7

if (sens_its7 == 2 && occupation_its7) 					{ progression_its7 = progression_its7 + 1;} 
if (sens_its7 == 2 && its6 == 0 && progression_its7 > 11 ) 		{ progression_its7 = 11; }
if (sens_its7 == 2 && progression_its7 > 11 ) 			{ occupation_its7 = false; occupation_its6 = true;   
train2_its6[0] = train2_its7[0];
train2_its6[1] = train2_its7[1];
train2_its6[2] = train2_its7[2];
train2_its6[3] = train2_its7[3];
train2_its6[4] = train2_its7[4];
train2_its6[5] = train2_its7[5];
train2_its6[6] = train2_its7[6];
sens_its6 = sens_its7;
progression_its7 = 0;
} 


if ( sens_its7 == 2 && progression_its7 == 1 )  			{ document.getElementById("a65").src = "image/point/a1_rouge.png";  document.getElementById("a65").src = "image/point/a1_rouge.png"; document.getElementById("a65").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 2 )  			{ document.getElementById("a64").src = "image/point/a1_rouge.png";  document.getElementById("a65").src = "image/point/a1_rouge.png"; document.getElementById("a65").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 3 )  			{ document.getElementById("a63").src = "image/point/a1_rouge.png";  document.getElementById("a64").src = "image/point/a1_rouge.png"; document.getElementById("a65").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 4 )  			{ document.getElementById("a62").src = "image/point/a1_rouge.png";  document.getElementById("a63").src = "image/point/a1_rouge.png"; document.getElementById("a64").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 5 )  			{ document.getElementById("a61").src = "image/point/a1_rouge.png";  document.getElementById("a62").src = "image/point/a1_rouge.png"; document.getElementById("a63").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 6 )  			{ document.getElementById("a60").src = "image/point/a1_rouge.png";  document.getElementById("a61").src = "image/point/a1_rouge.png"; document.getElementById("a62").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 7 )  			{ document.getElementById("a59").src = "image/point/a1_rouge.png";  document.getElementById("a60").src = "image/point/a1_rouge.png"; document.getElementById("a61").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 8 )  			{ document.getElementById("a58").src = "image/point/a1_gauche.png";  document.getElementById("a59").src = "image/point/a1_rouge.png"; document.getElementById("a60").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 9 )  			{ document.getElementById("a57").src = "image/point/a1_gauche.png";  document.getElementById("a58").src = "image/point/a1_rouge.png"; document.getElementById("a59").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 10 )  			{ document.getElementById("a56").src = "image/point/a1_gauche.png";  document.getElementById("a57").src = "image/point/a1_rouge.png"; document.getElementById("a58").src = "image/point/a1_rouge.png";}
if ( sens_its7 == 2 && progression_its7 == 11 )  			{ document.getElementById("a55").src = "image/point/a1_gauche.png";  document.getElementById("a56").src = "image/point/a1_rouge.png"; document.getElementById("a57").src = "image/point/a1_rouge.png";}



// INITALISATION

if ( sens_its76 == 2 && progression_its76 == 3 )  	{ 
document.getElementById("z15").src = "image/feux/rouge_2.png";
}

if ( sens_its60 == 2 && progression_its60 == 3 )  	{ 
document.getElementById("z14").src = "image/feux/rouge_2.png";
}

if ( sens_its6 == 2 && progression_its6 == 3 )  	{ 
document.getElementById("z19").src = "image/feux/rouge_2.png";
}

if ( sens_its8 == 2 && progression_its8 == 2 )  	{ 
its4 = 0;
document.getElementById("z17").src = "image/feux/rouge_2.png";
}

if ( sens_its117 == 2 && progression_its117 == 2 )  	{ 
document.getElementById("z21").src = "image/feux/rouge_2.png";
its103 = 0;
}

if ( sens_its17 == 2 && progression_its17 == 2 )  	{ 
document.getElementById("z9").src = "image/feux/rouge_2.png";
its18 = 0;
}

if ( sens_its118 == 2 && progression_its118 == 2 )  	{ 
document.getElementById("z10").src = "image/feux/rouge_2.png";
its37 = 0;
}

if ( sens_its119 == 2 && progression_its119 == 2 )  	{ 
document.getElementById("z11").src = "image/feux/rouge_2.png";
its56 = 0;
}

if ( sens_its120 == 2 && progression_its120 == 2 )  	{ 
document.getElementById("z12").src = "image/feux/rouge_2.png";
its74 = 0;
}

if ( sens_its23 == 2 && progression_its23 == 2 )  	{ 
its8 = 0;
document.getElementById("z16").src = "image/feux/rouge_2.png";
}

if ( sens_its102 == 2 && progression_its102 == 2 )  	{ 
document.getElementById("z20").src = "image/feux/rouge_2.png";
its117 = 0;
}

if ( sens_its111 == 2 && progression_its111 == 2 )  	{ 
document.getElementById("z5").src = "image/feux/rouge_2.png";
its17 = 0;
}

if ( sens_its34 == 2 && progression_its34 == 2 )  	{ 
document.getElementById("z6").src = "image/feux/rouge_2.png";
its118 = 0;
}

if ( sens_its55 == 2 && progression_its55 == 2 )  	{ 
document.getElementById("z7").src = "image/feux/rouge_2.png";
document.getElementById("z11").src = "image/feux/rouge_2.png";
its119 = 0;
}

if ( sens_its73 == 2 && progression_its73 == 2 )  	{ 
document.getElementById("z8").src = "image/feux/rouge_2.png";
its120 = 0;
}

// nouvelle ligne

// Les its avec 4 pour les trains en rose

/*

// its107

if (sens_its107 == 4 && occupation_its107 ) 			{ progression_its107 = progression_its107 + 1;  }
if (sens_its107 == 4 && its106 == 0 && progression_its107 > 6 ) 		{ progression_its107 = 6; }
if (sens_its107 == 4 && progression_its107 > 6 ) 		{ occupation_its107 = false; occupation_its106 = true; 
train2_its106[0] = train2_its107[0];
train2_its106[1] = train2_its107[1];
train2_its106[2] = train2_its107[2];
train2_its106[3] = train2_its107[3];
train2_its106[4] = train2_its107[4];
train2_its106[5] = train2_its107[5];
train2_its106[6] = train2_its107[6];
sens_its106 = sens_its107;
progression_its107 = 0;
its107 = 0;
}


if ( sens_its107 == 4 && progression_its107 == 1 )  			{ document.getElementById("x56").src = "image/point/a1_gauche_rose.png";  document.getElementById("x57").src = "image/point/a1_rose.png"; document.getElementById("x58").src = "image/point/a1_rose.png"; }
if ( sens_its107 == 4 && progression_its107 == 2 )  			{ document.getElementById("x55").src = "image/point/a1_gauche_rose.png";  document.getElementById("x56").src = "image/point/a1_rose.png"; document.getElementById("x57").src = "image/point/a1_rose.png"; }
if ( sens_its107 == 4 && progression_its107 == 3 )  			{ document.getElementById("x54").src = "image/point/a1_gauche_rose.png";  document.getElementById("x55").src = "image/point/a1_rose.png"; document.getElementById("x56").src = "image/point/a1_rose.png"; }
if ( sens_its107 == 4 && progression_its107 == 4 )  			{ document.getElementById("x53").src = "image/point/a1_gauche_rose.png";  document.getElementById("x54").src = "image/point/a1_rose.png"; document.getElementById("x55").src = "image/point/a1_rose.png"; }
if ( sens_its107 == 4 && progression_its107 == 5 )  			{ document.getElementById("x52").src = "image/point/a1_gauche_rose.png";  document.getElementById("x53").src = "image/point/a1_rose.png"; document.getElementById("x54").src = "image/point/a1_rose.png"; }
if ( sens_its107 == 4 && progression_its107 == 6 )  			{ document.getElementById("x51").src = "image/point/a1_gauche_rose.png";  document.getElementById("x52").src = "image/point/a1_rose.png"; document.getElementById("x53").src = "image/point/a1_rose.png"; }

 


// its6

if (sens_its6 == 4 && occupation_its6 ) 												{ progression_its6 = progression_its6 + 1;  }
if (sens_its6 == 4 && aiguille98 == 0 && aiguille92 == 0 && progression_its6 > 6 ) 		{ occupation_its6 = false; occupation_its5 = true;  
train2_its5[0] = train2_its6[0];
train2_its5[1] = train2_its6[1];
train2_its5[2] = train2_its6[2];
train2_its5[3] = train2_its6[3];
train2_its5[4] = train2_its6[4];
train2_its5[5] = train2_its6[5];
train2_its5[6] = train2_its6[6];
sens_its5 = sens_its6;
progression_its6 = 0;
its7 = 0; its6 = 0;
}

if (sens_its6 == 4 && aiguille98 == 0 && aiguille92 == 0 && occupation_its6 ) 		{
if ( sens_its6 == 4 && progression_its6 == 1 )  			{ document.getElementById("a56").src = "image/point/a1_rose.png";  document.getElementById("a55").src = "image/point/a1_rose.png"; document.getElementById("a54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 2 )  			{ document.getElementById("a55").src = "image/point/a1_rose.png";  document.getElementById("a54").src = "image/point/a1_rose.png"; document.getElementById("a53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 3 )  			{ document.getElementById("a54").src = "image/point/a1_rose.png";  document.getElementById("a53").src = "image/point/a1_rose.png"; document.getElementById("a52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 4 )  			{ document.getElementById("a53").src = "image/point/a1_rose.png";  document.getElementById("a52").src = "image/point/a1_rose.png"; document.getElementById("a51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 5 )  			{ document.getElementById("a52").src = "image/point/a1_rose.png";  document.getElementById("a51").src = "image/point/a1_rose.png"; document.getElementById("a50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 6 )  			{ document.getElementById("a51").src = "image/point/a1_rose.png";  document.getElementById("a50").src = "image/point/a1_rose.png"; document.getElementById("a49").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its6 == 4 && aiguille98 == 1 && aiguille92 == 0 && progression_its6 > 10 ) 		{ occupation_its6 = false; occupation_its105 = true;  
train2_its105[0] = train2_its6[0];
train2_its105[1] = train2_its6[1];
train2_its105[2] = train2_its6[2];
train2_its105[3] = train2_its6[3];
train2_its105[4] = train2_its6[4];
train2_its105[5] = train2_its6[5];
train2_its105[6] = train2_its6[6];
sens_its105 = sens_its6;
progression_its6 = 0;
its7 = 0; its6 = 0; its98 = 0; its106 = 0;
aiguille98 = 0;
}

if (sens_its6 == 4 && aiguille98 == 1 && aiguille92 == 0 && occupation_its6 ) 		{
if ( sens_its6 == 4 && progression_its6 == 1 )  			{ document.getElementById("a56").src = "image/point/a1_rose.png";  document.getElementById("a55").src = "image/point/a1_rose.png"; document.getElementById("a54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 2 )  			{ document.getElementById("a55").src = "image/point/a1_rose.png";  document.getElementById("a54").src = "image/point/a1_rose.png"; document.getElementById("a53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 3 )  			{ document.getElementById("a54").src = "image/point/a1_rose.png";  document.getElementById("a53").src = "image/point/a1_rose.png"; document.getElementById("a52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 4 )  			{ document.getElementById("a53").src = "image/point/a1_rose.png";  document.getElementById("a52").src = "image/point/a1_rose.png"; document.getElementById("a51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 5 )  			{ document.getElementById("a52").src = "image/point/a1_rose.png";  document.getElementById("a51").src = "image/point/a1_rose.png"; document.getElementById("a50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 6 )  			{ document.getElementById("a51").src = "image/point/a1_rose.png";  document.getElementById("a50").src = "image/point/a1_rose.png"; document.getElementById("a49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 7 )  			{ document.getElementById("a50").src = "image/point/a1_rose.png";  document.getElementById("a49").src = "image/point/a1_rose.png"; document.getElementById("f60").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 8 )  			{ document.getElementById("a49").src = "image/point/a1_rose.png";  document.getElementById("f60").src = "image/point/a1_rose.png"; document.getElementById("f61").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 9 )  			{ document.getElementById("f60").src = "image/point/a1_rose.png";  document.getElementById("f61").src = "image/point/a1_rose.png"; document.getElementById("x47").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 10 )  			{ document.getElementById("f61").src = "image/point/a1_rose.png";  document.getElementById("x47").src = "image/point/a1_rose.png"; document.getElementById("x46").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its6 == 4 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 0 && progression_its6 > 18 ) 		{ occupation_its6 = false; occupation_its18 = true;  
train2_its18[0] = train2_its6[0];
train2_its18[1] = train2_its6[1];
train2_its18[2] = train2_its6[2];
train2_its18[3] = train2_its6[3];
train2_its18[4] = train2_its6[4];
train2_its18[5] = train2_its6[5];
train2_its18[6] = train2_its6[6];
sens_its18 = sens_its6;
progression_its6 = 0;
its7 = 0; its6 = 0; its98 = 0; its106 = 0; its92 = 0; its19 = 0; its121 = 0;
aiguille98 = 0; 
aiguille92 = 0; 
}

if (sens_its6 == 4 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 0 && occupation_its6 ) 		{
if ( sens_its6 == 4 && progression_its6 == 1 )  			{ document.getElementById("a56").src = "image/point/a1_rose.png";  document.getElementById("a55").src = "image/point/a1_rose.png"; document.getElementById("a54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 2 )  			{ document.getElementById("a55").src = "image/point/a1_rose.png";  document.getElementById("a54").src = "image/point/a1_rose.png"; document.getElementById("a53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 3 )  			{ document.getElementById("a54").src = "image/point/a1_rose.png";  document.getElementById("a53").src = "image/point/a1_rose.png"; document.getElementById("a52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 4 )  			{ document.getElementById("a53").src = "image/point/a1_rose.png";  document.getElementById("a52").src = "image/point/a1_rose.png"; document.getElementById("a51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 5 )  			{ document.getElementById("a52").src = "image/point/a1_rose.png";  document.getElementById("a51").src = "image/point/a1_rose.png"; document.getElementById("a50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 6 )  			{ document.getElementById("a51").src = "image/point/a1_rose.png";  document.getElementById("a50").src = "image/point/a1_rose.png"; document.getElementById("a49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 7 )  			{ document.getElementById("a50").src = "image/point/a1_rose.png";  document.getElementById("a49").src = "image/point/a1_rose.png"; document.getElementById("f60").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 8 )  			{ document.getElementById("a49").src = "image/point/a1_rose.png";  document.getElementById("f60").src = "image/point/a1_rose.png"; document.getElementById("f61").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 9 )  			{ document.getElementById("f60").src = "image/point/a1_rose.png";  document.getElementById("f61").src = "image/point/a1_rose.png"; document.getElementById("x47").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 10 )  			{ document.getElementById("f61").src = "image/point/a1_rose.png";  document.getElementById("x47").src = "image/point/a1_rose.png"; document.getElementById("x46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 11 )  			{ document.getElementById("x47").src = "image/point/a1_rose.png";  document.getElementById("x46").src = "image/point/a1_rose.png"; document.getElementById("f25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 12 )  			{ document.getElementById("x46").src = "image/point/a1_rose.png";  document.getElementById("f25").src = "image/point/a1_rose.png"; document.getElementById("f26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 13 )  			{ document.getElementById("f25").src = "image/point/a1_rose.png";  document.getElementById("f26").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 14 )  			{ document.getElementById("f26").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 18 )  			{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b39").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its6 == 4 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 1 && progression_its6 > 26 ) 		{ occupation_its6 = false; occupation_its118 = true;  
train2_its118[0] = train2_its6[0];
train2_its118[1] = train2_its6[1];
train2_its118[2] = train2_its6[2];
train2_its118[3] = train2_its6[3];
train2_its118[4] = train2_its6[4];
train2_its118[5] = train2_its6[5];
train2_its118[6] = train2_its6[6];
sens_its118 = sens_its6;
progression_its6 = 0;
its7 = 0; its6 = 0; its98 = 0; its106 = 0; its92 = 0; its19 = 0; its121 = 0; its95 = 0; its37 = 0; 
aiguille98 = 0; 
aiguille92 = 0; 
aiguille95 = 0; 
}

if (sens_its6 == 4 && aiguille98 == 1 && aiguille92 == 1 && aiguille95 == 1 && occupation_its6 ) 		{
if ( sens_its6 == 4 && progression_its6 == 1 )  			{ document.getElementById("a56").src = "image/point/a1_rose.png";  document.getElementById("a55").src = "image/point/a1_rose.png"; document.getElementById("a54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 2 )  			{ document.getElementById("a55").src = "image/point/a1_rose.png";  document.getElementById("a54").src = "image/point/a1_rose.png"; document.getElementById("a53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 3 )  			{ document.getElementById("a54").src = "image/point/a1_rose.png";  document.getElementById("a53").src = "image/point/a1_rose.png"; document.getElementById("a52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 4 )  			{ document.getElementById("a53").src = "image/point/a1_rose.png";  document.getElementById("a52").src = "image/point/a1_rose.png"; document.getElementById("a51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 5 )  			{ document.getElementById("a52").src = "image/point/a1_rose.png";  document.getElementById("a51").src = "image/point/a1_rose.png"; document.getElementById("a50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 6 )  			{ document.getElementById("a51").src = "image/point/a1_rose.png";  document.getElementById("a50").src = "image/point/a1_rose.png"; document.getElementById("a49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 7 )  			{ document.getElementById("a50").src = "image/point/a1_rose.png";  document.getElementById("a49").src = "image/point/a1_rose.png"; document.getElementById("f60").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 8 )  			{ document.getElementById("a49").src = "image/point/a1_rose.png";  document.getElementById("f60").src = "image/point/a1_rose.png"; document.getElementById("f61").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 9 )  			{ document.getElementById("f60").src = "image/point/a1_rose.png";  document.getElementById("f61").src = "image/point/a1_rose.png"; document.getElementById("x47").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 10 )  			{ document.getElementById("f61").src = "image/point/a1_rose.png";  document.getElementById("x47").src = "image/point/a1_rose.png"; document.getElementById("x46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 11 )  			{ document.getElementById("x47").src = "image/point/a1_rose.png";  document.getElementById("x46").src = "image/point/a1_rose.png"; document.getElementById("f25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 12 )  			{ document.getElementById("x46").src = "image/point/a1_rose.png";  document.getElementById("f25").src = "image/point/a1_rose.png"; document.getElementById("f26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 13 )  			{ document.getElementById("f25").src = "image/point/a1_rose.png";  document.getElementById("f26").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 14 )  			{ document.getElementById("f26").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 18 )  			{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b39").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 19 )  			{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b39").src = "image/point/a1_rose.png"; document.getElementById("b38").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 20 )  			{ document.getElementById("b39").src = "image/point/a1_rose.png";  document.getElementById("b38").src = "image/point/a1_rose.png"; document.getElementById("f70").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its6 == 4 && progression_its6 == 21 )  			{ document.getElementById("b38").src = "image/point/a1_rose.png";  document.getElementById("f70").src = "image/point/a1_rose.png"; document.getElementById("f71").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 22 )  			{ document.getElementById("f70").src = "image/point/a1_rose.png";  document.getElementById("f71").src = "image/point/a1_rose.png"; document.getElementById("c36").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 23 )  			{ document.getElementById("f71").src = "image/point/a1_rose.png";  document.getElementById("c36").src = "image/point/a1_rose.png"; document.getElementById("c35").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 24 )  			{ document.getElementById("c36").src = "image/point/a1_rose.png";  document.getElementById("c35").src = "image/point/a1_rose.png"; document.getElementById("c34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 25 )  			{ document.getElementById("c35").src = "image/point/a1_rose.png";  document.getElementById("c34").src = "image/point/a1_rose.png"; document.getElementById("c33").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its6 == 4 && progression_its6 == 26 )  			{ document.getElementById("c34").src = "image/point/a1_rose.png";  document.getElementById("c33").src = "image/point/a1_rose.png"; document.getElementById("c32").src = "image/point/a1_gauche_rose.png"; }
}



// its5

if (sens_its5 == 4 && occupation_its5 ) 			{ progression_its5 = progression_its5 + 1;  }
if (sens_its5 == 4 && progression_its5 > 13 ) 		{ occupation_its5 = false; occupation_its4 = true;  
train2_its4[0] = train2_its5[0];
train2_its4[1] = train2_its5[1];
train2_its4[2] = train2_its5[2];
train2_its4[3] = train2_its5[3];
train2_its4[4] = train2_its5[4];
train2_its4[5] = train2_its5[5];
train2_its4[6] = train2_its5[6];
sens_its4 = sens_its5;
progression_its5 = 0;
its5 = 0; 
}

if ( sens_its5 == 4 && progression_its5 == 1 )  			{ document.getElementById("a50").src = "image/point/a1_rose.png";  document.getElementById("a49").src = "image/point/a1_rose.png"; document.getElementById("a48").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 2 )  			{ document.getElementById("a49").src = "image/point/a1_rose.png";  document.getElementById("a48").src = "image/point/a1_rose.png"; document.getElementById("a47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 3 )  			{ document.getElementById("a48").src = "image/point/a1_rose.png";  document.getElementById("a47").src = "image/point/a1_rose.png"; document.getElementById("a46").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its5 == 4 && progression_its5 == 4 )  			{ document.getElementById("a47").src = "image/point/a1_rose.png";  document.getElementById("a46").src = "image/point/a1_rose.png"; document.getElementById("a45").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 5 )  			{ document.getElementById("a46").src = "image/point/a1_rose.png";  document.getElementById("a45").src = "image/point/a1_rose.png"; document.getElementById("a44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 6 )  			{ document.getElementById("a45").src = "image/point/a1_rose.png";  document.getElementById("a44").src = "image/point/a1_rose.png"; document.getElementById("a43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 7 )  			{ document.getElementById("a44").src = "image/point/a1_rose.png";  document.getElementById("a43").src = "image/point/a1_rose.png"; document.getElementById("a42").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 8 )  			{ document.getElementById("a43").src = "image/point/a1_rose.png";  document.getElementById("a42").src = "image/point/a1_rose.png"; document.getElementById("a41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 9 )  			{ document.getElementById("a42").src = "image/point/a1_rose.png";  document.getElementById("a41").src = "image/point/a1_rose.png"; document.getElementById("a40").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its5 == 4 && progression_its5 == 10 )  			{ document.getElementById("a41").src = "image/point/a1_rose.png";  document.getElementById("a40").src = "image/point/a1_rose.png"; document.getElementById("a39").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 11 )  			{ document.getElementById("a40").src = "image/point/a1_rose.png";  document.getElementById("a39").src = "image/point/a1_rose.png"; document.getElementById("a38").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 12 )  			{ document.getElementById("a39").src = "image/point/a1_rose.png";  document.getElementById("a38").src = "image/point/a1_rose.png"; document.getElementById("a37").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its5 == 4 && progression_its5 == 13 )  			{ document.getElementById("a38").src = "image/point/a1_rose.png";  document.getElementById("a37").src = "image/point/a1_rose.png"; document.getElementById("a36").src = "image/point/a1_gauche_rose.png"; }

// its4

if (sens_its4 == 4 && occupation_its4 ) 			{ progression_its4 = progression_its4 + 1;  }
if (sens_its4 == 4 && progression_its4 > 4 ) 		{ occupation_its4 = false; occupation_its8 = true;  
train2_its8[0] = train2_its4[0];
train2_its8[1] = train2_its4[1];
train2_its8[2] = train2_its4[2];
train2_its8[3] = train2_its4[3];
train2_its8[4] = train2_its4[4];
train2_its8[5] = train2_its4[5];
train2_its8[6] = train2_its4[6];
sens_its8 = sens_its4;
progression_its4 = 0;
its4 = 0; 
}

if ( sens_its4 == 4 && progression_its4 == 1 )  			{ document.getElementById("a37").src = "image/point/a1_rose.png";  document.getElementById("a36").src = "image/point/a1_rose.png"; document.getElementById("a35").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its4 == 4 && progression_its4 == 2 )  			{ document.getElementById("a36").src = "image/point/a1_rose.png";  document.getElementById("a35").src = "image/point/a1_rose.png"; document.getElementById("a34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its4 == 4 && progression_its4 == 3 )  			{ document.getElementById("a35").src = "image/point/a1_rose.png";  document.getElementById("a34").src = "image/point/a1_rose.png"; document.getElementById("a33").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its4 == 4 && progression_its4 == 4 )  			{ document.getElementById("a34").src = "image/point/a1_rose.png";  document.getElementById("a33").src = "image/point/a1_rose.png"; document.getElementById("a32").src = "image/point/a1_gauche_rose.png"; }

// its8

if (sens_its8 == 4 && occupation_its8 ) 			{ progression_its8 = progression_its8 + 1;  }
if (sens_its8 == 4 && progression_its8 > 8 ) 		{ occupation_its8 = false; occupation_its23 = true;  
train2_its23[0] = train2_its8[0];
train2_its23[1] = train2_its8[1];
train2_its23[2] = train2_its8[2];
train2_its23[3] = train2_its8[3];
train2_its23[4] = train2_its8[4];
train2_its23[5] = train2_its8[5];
train2_its23[6] = train2_its8[6];
sens_its23 = sens_its8;
progression_its8 = 0;
}

if ( sens_its8 == 4 && progression_its8 == 1 )  			{ document.getElementById("a33").src = "image/point/a1_rose.png";  document.getElementById("a32").src = "image/point/a1_rose.png"; document.getElementById("p8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its8 == 4 && progression_its8 == 2 )  			{ document.getElementById("a32").src = "image/point/a1_rose.png";  document.getElementById("p8").src = "image/point/a1_rose.png"; document.getElementById("p7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its8 == 4 && progression_its8 == 3 )  			{ document.getElementById("p8").src = "image/point/a1_rose.png";  document.getElementById("p7").src = "image/point/a1_rose.png"; document.getElementById("p6").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its8 == 4 && progression_its8 == 4 )  			{ document.getElementById("p7").src = "image/point/a1_rose.png";  document.getElementById("p6").src = "image/point/a1_rose.png"; document.getElementById("p5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its8 == 4 && progression_its8 == 5 )  			{ document.getElementById("p6").src = "image/point/a1_rose.png";  document.getElementById("p5").src = "image/point/a1_rose.png"; document.getElementById("p4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its8 == 4 && progression_its8 == 6 )  			{ document.getElementById("p5").src = "image/point/a1_rose.png";  document.getElementById("p4").src = "image/point/a1_rose.png"; document.getElementById("p3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its8 == 4 && progression_its8 == 7 )  			{ document.getElementById("p4").src = "image/point/a1_rose.png";  document.getElementById("p3").src = "image/point/a1_rose.png"; document.getElementById("p2").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its8 == 4 && progression_its8 == 8 )  			{ document.getElementById("p3").src = "image/point/a1_rose.png";  document.getElementById("p2").src = "image/point/a1_rose.png"; document.getElementById("p1").src = "image/point/a1_gauche_rose.png"; }


// its23

if (sens_its23 == 4 && occupation_its23 ) 			{ progression_its23 = progression_its23 + 1;  }
if (sens_its23 == 4 && progression_its23 > 3 ) 		{ occupation_its23 = false; occupation_its2 = true;  
train2_its2[0] = train2_its23[0];
train2_its2[1] = train2_its23[1];
train2_its2[2] = train2_its23[2];
train2_its2[3] = train2_its23[3];
train2_its2[4] = train2_its23[4];
train2_its2[5] = train2_its23[5];
train2_its2[6] = train2_its23[6];
sens_its2 = sens_its23;
progression_its23 = 0;
its23 = 0; 
}

if ( sens_its23 == 4 && progression_its23 == 1 )  			{ document.getElementById("p2").src = "image/point/a1_rose.png";  document.getElementById("p1").src = "image/point/a1_rose.png"; document.getElementById("a31").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its23 == 4 && progression_its23 == 2 )  			{ document.getElementById("p1").src = "image/point/a1_rose.png";  document.getElementById("a31").src = "image/point/a1_rose.png"; document.getElementById("a30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its23 == 4 && progression_its23 == 3 )  			{ document.getElementById("a31").src = "image/point/a1_rose.png";  document.getElementById("a30").src = "image/point/a1_rose.png"; document.getElementById("a29").src = "image/point/a1_gauche_rose.png";  }


// its2

if (sens_its2 == 4 && occupation_its2 ) 																										{ progression_its2 = progression_its2 + 1;  }
if (sens_its2 == 4 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && progression_its2 > 28 ) 	{ occupation_its2 = false; occupation_its70 = true;  
train2_its70[0] = train2_its2[0];
train2_its70[1] = train2_its2[1];
train2_its70[2] = train2_its2[2];
train2_its70[3] = train2_its2[3];
train2_its70[4] = train2_its2[4];
train2_its70[5] = train2_its2[5];
train2_its70[6] = train2_its2[6];
sens_its70 = sens_its2;
progression_its2 = 0;
its2 = 0; its97 = 0; its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; 
aiguille97 = 0; 
aiguille82 = 0; 
aiguille80 = 0; 
aiguille78 = 0; 
aiguille87 = 0; 
}

if (sens_its2 == 4 && occupation_its2 && aiguille97 == 1 && aiguille82 == 1 && aiguille78 == 1 && aiguille87 == 1 && aiguille80 == 1) {
if ( sens_its2 == 4 && progression_its2 == 1 )  			{ document.getElementById("a30").src = "image/point/a1_rose.png";  document.getElementById("a29").src = "image/point/a1_rose.png"; document.getElementById("a28").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 2 )  			{ document.getElementById("a29").src = "image/point/a1_rose.png";  document.getElementById("a28").src = "image/point/a1_rose.png"; document.getElementById("a27").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 3 )  			{ document.getElementById("a28").src = "image/point/a1_rose.png";  document.getElementById("a27").src = "image/point/a1_rose.png"; document.getElementById("a26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 4 )  			{ document.getElementById("a27").src = "image/point/a1_rose.png";  document.getElementById("a26").src = "image/point/a1_rose.png"; document.getElementById("f80").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 5 )  			{ document.getElementById("a26").src = "image/point/a1_rose.png";  document.getElementById("f80").src = "image/point/a1_rose.png"; document.getElementById("f81").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 6 )  			{ document.getElementById("f80").src = "image/point/a1_rose.png";  document.getElementById("f81").src = "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 7 )  			{ document.getElementById("f81").src = "image/point/a1_rose.png";  document.getElementById("x23").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 8 )  			{ document.getElementById("x23").src = "image/point/a1_rose.png";  document.getElementById("x22").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 9 )  			{ document.getElementById("x22").src = "image/point/a1_rose.png";  document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 10 )  			{ document.getElementById("x21").src = "image/point/a1_rose.png";  document.getElementById("f1").src = "image/point/a1_rose.png"; document.getElementById("f2").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 11 )  			{ document.getElementById("f1").src = "image/point/a1_rose.png";  document.getElementById("f2").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 12 )  			{ document.getElementById("f2").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 13 )  			{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 14 )  			{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 15 )  			{ document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 16 )  			{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("f11").src = "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 17 )  			{ document.getElementById("f11").src = "image/point/a1_rose.png";  document.getElementById("f12").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 18 )  			{ document.getElementById("f12").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 19 )  			{ document.getElementById("c14").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("f13").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 20 )  			{ document.getElementById("c13").src = "image/point/a1_rose.png";  document.getElementById("f13").src = "image/point/a1_rose.png"; document.getElementById("f14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 21 )  			{ document.getElementById("f13").src = "image/point/a1_rose.png";  document.getElementById("f14").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 22 )  			{ document.getElementById("f14").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 23 )  			{ document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("f15").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 24 )  			{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("f15").src = "image/point/a1_rose.png"; document.getElementById("f16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 25 )  			{ document.getElementById("f15").src = "image/point/a1_rose.png";  document.getElementById("f16").src = "image/point/a1_rose.png"; document.getElementById("e8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 26 )  			{ document.getElementById("f16").src = "image/point/a1_rose.png";  document.getElementById("e8").src = "image/point/a1_rose.png"; document.getElementById("e7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 27 )  			{ document.getElementById("e8").src = "image/point/a1_rose.png";  document.getElementById("e7").src = "image/point/a1_rose.png"; document.getElementById("e6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 28 )  			{ document.getElementById("e7").src = "image/point/a1_rose.png";  document.getElementById("e6").src = "image/point/a1_rose.png"; document.getElementById("e5").src = "image/point/a1_gauche_rose.png"; }

}

if (sens_its2 == 4 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0 && progression_its2 > 18 ) 	{ occupation_its2 = false; occupation_its32 = true;  
train2_its32[0] = train2_its2[0];
train2_its32[1] = train2_its2[1];
train2_its32[2] = train2_its2[2];
train2_its32[3] = train2_its2[3];
train2_its32[4] = train2_its2[4];
train2_its32[5] = train2_its2[5];
train2_its32[6] = train2_its2[6];
sens_its32 = sens_its2;
progression_its2 = 0;
its2 = 0; its97 = 0; its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0;
aiguille97 = 0; 
aiguille82 = 0; 
aiguille80 = 0;
}

if (sens_its2 == 4 && occupation_its2 && aiguille97 == 1 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0) {
if ( sens_its2 == 4 && progression_its2 == 1 )  			{ document.getElementById("a30").src = "image/point/a1_rose.png";  document.getElementById("a29").src = "image/point/a1_rose.png"; document.getElementById("a28").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 2 )  			{ document.getElementById("a29").src = "image/point/a1_rose.png";  document.getElementById("a28").src = "image/point/a1_rose.png"; document.getElementById("a27").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 3 )  			{ document.getElementById("a28").src = "image/point/a1_rose.png";  document.getElementById("a27").src = "image/point/a1_rose.png"; document.getElementById("a26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 4 )  			{ document.getElementById("a27").src = "image/point/a1_rose.png";  document.getElementById("a26").src = "image/point/a1_rose.png"; document.getElementById("f80").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 5 )  			{ document.getElementById("a26").src = "image/point/a1_rose.png";  document.getElementById("f80").src = "image/point/a1_rose.png"; document.getElementById("f81").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 6 )  			{ document.getElementById("f80").src = "image/point/a1_rose.png";  document.getElementById("f81").src = "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 7 )  			{ document.getElementById("f81").src = "image/point/a1_rose.png";  document.getElementById("x23").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 8 )  			{ document.getElementById("x23").src = "image/point/a1_rose.png";  document.getElementById("x22").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 9 )  			{ document.getElementById("x22").src = "image/point/a1_rose.png";  document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 10 )  			{ document.getElementById("x21").src = "image/point/a1_rose.png";  document.getElementById("f1").src = "image/point/a1_rose.png"; document.getElementById("f2").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 11 )  			{ document.getElementById("f1").src = "image/point/a1_rose.png";  document.getElementById("f2").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 12 )  			{ document.getElementById("f2").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 13 )  			{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 14 )  			{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 15 )  			{ document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 16 )  			{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("f11").src = "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 17 )  			{ document.getElementById("f11").src = "image/point/a1_rose.png";  document.getElementById("f12").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its2 == 4 && progression_its2 == 18 )  			{ document.getElementById("f12").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_gauche_rose.png"; }
}



// its106

if (sens_its106 == 4 && occupation_its106 && aiguille92 == 0 && aiguille96 == 0) 			{ progression_its106 = progression_its106 + 1;  }
if (sens_its106 == 4 && progression_its106 > 4 && aiguille92 == 0 && aiguille96 == 0) 		{ occupation_its106 = false; occupation_its105 = true;  
train2_its105[0] = train2_its106[0];
train2_its105[1] = train2_its106[1];
train2_its105[2] = train2_its106[2];
train2_its105[3] = train2_its106[3];
train2_its105[4] = train2_its106[4];
train2_its105[5] = train2_its106[5];
train2_its105[6] = train2_its106[6];
sens_its105 = sens_its106;
progression_its106 = 0;
its106 = 0; 
}

if ( sens_its106 == 4 && aiguille92 == 0 && aiguille96 == 0 && occupation_its106 ) {
if ( sens_its106 == 4 && progression_its106 == 1 )  			{ document.getElementById("x52").src = "image/point/a1_rose.png";  document.getElementById("x51").src = "image/point/a1_rose.png"; document.getElementById("x49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 2 )  			{ document.getElementById("x51").src = "image/point/a1_rose.png";  document.getElementById("x49").src = "image/point/a1_rose.png"; document.getElementById("x48").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 3 )  			{ document.getElementById("x49").src = "image/point/a1_rose.png";  document.getElementById("x48").src = "image/point/a1_rose.png"; document.getElementById("x47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 4 )  			{ document.getElementById("x48").src = "image/point/a1_rose.png";  document.getElementById("x47").src = "image/point/a1_rose.png"; document.getElementById("x46").src = "image/point/a1_gauche_rose.png"; }
}

 
if (sens_its106 == 4 && occupation_its106 && aiguille92 == 1 && aiguille95 == 0) 				{ progression_its106 = progression_its106 + 1;  }
if (sens_its106 == 4 && progression_its106 > 11 && aiguille92 == 1 && aiguille95 == 0) 			{ occupation_its106 = false; occupation_its121 = true;  
train2_its121[0] = train2_its106[0];
train2_its121[1] = train2_its106[1];
train2_its121[2] = train2_its106[2];
train2_its121[3] = train2_its106[3];
train2_its121[4] = train2_its106[4];
train2_its121[5] = train2_its106[5];
train2_its121[6] = train2_its106[6];
sens_its121 = sens_its106;
progression_its106 = 0;
its106 = 0; its19 = 0; its92 = 0;
aiguille92 = 0;
}
if ( sens_its106 == 4 && aiguille92 == 1 && aiguille95 == 0 &&  occupation_its106 ) {
if ( sens_its106 == 4 && progression_its106 == 1 )  			{ document.getElementById("x52").src = "image/point/a1_rose.png";  document.getElementById("x51").src = "image/point/a1_rose.png"; document.getElementById("x49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 2 )  			{ document.getElementById("x51").src = "image/point/a1_rose.png";  document.getElementById("x49").src = "image/point/a1_rose.png"; document.getElementById("x48").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 3 )  			{ document.getElementById("x49").src = "image/point/a1_rose.png";  document.getElementById("x48").src = "image/point/a1_rose.png"; document.getElementById("x47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 4 )  			{ document.getElementById("x48").src = "image/point/a1_rose.png";  document.getElementById("x47").src = "image/point/a1_rose.png"; document.getElementById("x46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 5 )  			{ document.getElementById("x47").src = "image/point/a1_rose.png";  document.getElementById("x46").src = "image/point/a1_rose.png"; document.getElementById("f25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 6 )  			{ document.getElementById("x46").src = "image/point/a1_rose.png";  document.getElementById("f25").src = "image/point/a1_rose.png"; document.getElementById("f26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 7 )  			{ document.getElementById("f25").src = "image/point/a1_rose.png";  document.getElementById("f26").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 8 )  			{ document.getElementById("f26").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 9 )  			{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 10 )  			{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 11 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_gauche_rose.png"; }
}


 
if (sens_its106 == 4 && occupation_its106 && aiguille92 == 1 && aiguille95 == 1) 				{ progression_its106 = progression_its106 + 1;  }
if (sens_its106 == 4 && progression_its106 > 19 && aiguille92 == 1 && aiguille95 == 1) 			{ occupation_its106 = false; occupation_its118 = true;  
train2_its118[0] = train2_its106[0];
train2_its118[1] = train2_its106[1];
train2_its118[2] = train2_its106[2];
train2_its118[3] = train2_its106[3];
train2_its118[4] = train2_its106[4];
train2_its118[5] = train2_its106[5];
train2_its118[6] = train2_its106[6];
sens_its118 = sens_its106;
progression_its106 = 0;
its106 = 0; its121 = 0; its19 = 0; its92 = 0; its95 = 0;
aiguille92 = 0; aiguille95 = 0;
}
if ( sens_its106 == 4 && aiguille92 == 1 && aiguille95 == 1 && occupation_its106 ) {
if ( sens_its106 == 4 && progression_its106 == 1 )  			{ document.getElementById("x52").src = "image/point/a1_rose.png";  document.getElementById("x51").src = "image/point/a1_rose.png"; document.getElementById("x49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 2 )  			{ document.getElementById("x51").src = "image/point/a1_rose.png";  document.getElementById("x49").src = "image/point/a1_rose.png"; document.getElementById("x48").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 3 )  			{ document.getElementById("x49").src = "image/point/a1_rose.png";  document.getElementById("x48").src = "image/point/a1_rose.png"; document.getElementById("x47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 4 )  			{ document.getElementById("x48").src = "image/point/a1_rose.png";  document.getElementById("x47").src = "image/point/a1_rose.png"; document.getElementById("x46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 5 )  			{ document.getElementById("x47").src = "image/point/a1_rose.png";  document.getElementById("x46").src = "image/point/a1_rose.png"; document.getElementById("f25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 6 )  			{ document.getElementById("x46").src = "image/point/a1_rose.png";  document.getElementById("f25").src = "image/point/a1_rose.png"; document.getElementById("f26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 7 )  			{ document.getElementById("f25").src = "image/point/a1_rose.png";  document.getElementById("f26").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 8 )  			{ document.getElementById("f26").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 9 )  			{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 10 )  			{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 11 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 12 )  			{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b39").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 13 )  			{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b39").src = "image/point/a1_rose.png"; document.getElementById("b38").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 14 )  			{ document.getElementById("b39").src = "image/point/a1_rose.png";  document.getElementById("b38").src = "image/point/a1_rose.png"; document.getElementById("f70").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 15 )  			{ document.getElementById("b38").src = "image/point/a1_rose.png";  document.getElementById("f70").src = "image/point/a1_rose.png"; document.getElementById("f71").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 16 )  			{ document.getElementById("f70").src = "image/point/a1_rose.png";  document.getElementById("f71").src = "image/point/a1_rose.png"; document.getElementById("c36").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 17 )  			{ document.getElementById("f71").src = "image/point/a1_rose.png";  document.getElementById("c36").src = "image/point/a1_rose.png"; document.getElementById("c35").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 18 )  			{ document.getElementById("c36").src = "image/point/a1_rose.png";  document.getElementById("c35").src = "image/point/a1_rose.png"; document.getElementById("c34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 19 )  			{ document.getElementById("c35").src = "image/point/a1_rose.png";  document.getElementById("c34").src = "image/point/a1_rose.png"; document.getElementById("c33").src = "image/point/a1_gauche_rose.png"; }
}

// ici nouvelle 106
 
if (sens_its106 == 4 && occupation_its106 && aiguille92 == 0 && aiguille96 == 1) 				{ progression_its106 = progression_its106 + 1;  }
if (sens_its106 == 4 && progression_its106 > 19 && aiguille92 == 0 && aiguille96 == 1) 			{ occupation_its106 = false; occupation_its8 = true;  
train2_its8[0] = train2_its106[0];
train2_its8[1] = train2_its106[1];
train2_its8[2] = train2_its106[2];
train2_its8[3] = train2_its106[3];
train2_its8[4] = train2_its106[4];
train2_its8[5] = train2_its106[5];
train2_its8[6] = train2_its106[6];
sens_its8 = sens_its106;
progression_its106 = 0;
its106 = 0; its105 = 0; its104 = 0; its96 = 0;
aiguille96 = 0;
}
if ( sens_its106 == 4 && aiguille92 == 0 && aiguille96 == 1 && occupation_its106 ) {
if ( sens_its106 == 4 && progression_its106 == 1 )  			{ document.getElementById("x52").src = "image/point/a1_rose.png";  document.getElementById("x51").src = "image/point/a1_rose.png"; document.getElementById("x49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 2 )  			{ document.getElementById("x51").src = "image/point/a1_rose.png";  document.getElementById("x49").src = "image/point/a1_rose.png"; document.getElementById("x48").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 3 )  			{ document.getElementById("x49").src = "image/point/a1_rose.png";  document.getElementById("x48").src = "image/point/a1_rose.png"; document.getElementById("x47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 4 )  			{ document.getElementById("x48").src = "image/point/a1_rose.png";  document.getElementById("x47").src = "image/point/a1_rose.png"; document.getElementById("x46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 5 )  			{ document.getElementById("x47").src = "image/point/a1_rose.png";  document.getElementById("x46").src = "image/point/a1_rose.png"; document.getElementById("x45").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 6 )  			{ document.getElementById("x46").src = "image/point/a1_rose.png";  document.getElementById("x45").src = "image/point/a1_rose.png"; document.getElementById("x44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 7 )  			{ document.getElementById("x45").src = "image/point/a1_rose.png";  document.getElementById("x44").src = "image/point/a1_rose.png"; document.getElementById("x43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 8 )  			{ document.getElementById("x44").src = "image/point/a1_rose.png";  document.getElementById("x43").src = "image/point/a1_rose.png"; document.getElementById("x42").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 9 )  			{ document.getElementById("x43").src = "image/point/a1_rose.png";  document.getElementById("x42").src = "image/point/a1_rose.png"; document.getElementById("x41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 10 )  			{ document.getElementById("x42").src = "image/point/a1_rose.png";  document.getElementById("x41").src = "image/point/a1_rose.png"; document.getElementById("x40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 11 )  			{ document.getElementById("x41").src = "image/point/a1_rose.png";  document.getElementById("x40").src = "image/point/a1_rose.png"; document.getElementById("x39").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 12 )  			{ document.getElementById("x40").src = "image/point/a1_rose.png";  document.getElementById("x39").src = "image/point/a1_rose.png"; document.getElementById("x38").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 13 )  			{ document.getElementById("x39").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("x37").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 14 )  			{ document.getElementById("x38").src = "image/point/a1_rose.png";  document.getElementById("x37").src = "image/point/a1_rose.png"; document.getElementById("f51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 15 )  			{ document.getElementById("x37").src = "image/point/a1_rose.png";  document.getElementById("f51").src = "image/point/a1_rose.png"; document.getElementById("f50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 16 )  			{ document.getElementById("f51").src = "image/point/a1_rose.png";  document.getElementById("f50").src = "image/point/a1_rose.png"; document.getElementById("a35").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 17 )  			{ document.getElementById("f50").src = "image/point/a1_rose.png";  document.getElementById("a35").src = "image/point/a1_rose.png"; document.getElementById("a34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 18 )  			{ document.getElementById("a35").src = "image/point/a1_rose.png";  document.getElementById("a34").src = "image/point/a1_rose.png"; document.getElementById("a33").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its106 == 4 && progression_its106 == 19 )  			{ document.getElementById("a34").src = "image/point/a1_rose.png";  document.getElementById("a33").src = "image/point/a1_rose.png"; document.getElementById("a32").src = "image/point/a1_gauche_rose.png"; }
}


// its105

if (sens_its105 == 4 && occupation_its105 ) 			{ progression_its105 = progression_its105 + 1;  }
if (sens_its105 == 4 && progression_its105 > 7 ) 		{ occupation_its105 = false; occupation_its104 = true;  
train2_its104[0] = train2_its105[0];
train2_its104[1] = train2_its105[1];
train2_its104[2] = train2_its105[2];
train2_its104[3] = train2_its105[3];
train2_its104[4] = train2_its105[4];
train2_its104[5] = train2_its105[5];
train2_its104[6] = train2_its105[6];
sens_its104 = sens_its105;
progression_its105 = 0;
its105 = 0; 
}

if ( sens_its105 == 4 && progression_its105 == 1 )  			{ document.getElementById("x47").src = "image/point/a1_rose.png";  document.getElementById("x46").src = "image/point/a1_rose.png"; document.getElementById("x45").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its105 == 4 && progression_its105 == 2 )  			{ document.getElementById("x46").src = "image/point/a1_rose.png";  document.getElementById("x45").src = "image/point/a1_rose.png"; document.getElementById("x44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its105 == 4 && progression_its105 == 3 )  			{ document.getElementById("x45").src = "image/point/a1_rose.png";  document.getElementById("x44").src = "image/point/a1_rose.png"; document.getElementById("x43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its105 == 4 && progression_its105 == 4 )  			{ document.getElementById("x44").src = "image/point/a1_rose.png";  document.getElementById("x43").src = "image/point/a1_rose.png"; document.getElementById("x42").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its105 == 4 && progression_its105 == 5 )  			{ document.getElementById("x43").src = "image/point/a1_rose.png";  document.getElementById("x42").src = "image/point/a1_rose.png"; document.getElementById("x41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its105 == 4 && progression_its105 == 6 )  			{ document.getElementById("x42").src = "image/point/a1_rose.png";  document.getElementById("x41").src = "image/point/a1_rose.png"; document.getElementById("x40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its105 == 4 && progression_its105 == 7 )  			{ document.getElementById("x41").src = "image/point/a1_rose.png";  document.getElementById("x40").src = "image/point/a1_rose.png"; document.getElementById("x39").src = "image/point/a1_gauche_rose.png"; }

// its104

if (sens_its104 == 4 && occupation_its104 ) 			{ progression_its104 = progression_its104 + 1;  }
if (sens_its104 == 4 && progression_its104 > 2 ) 		{ occupation_its104 = false; occupation_its103 = true;  
train2_its103[0] = train2_its104[0];
train2_its103[1] = train2_its104[1];
train2_its103[2] = train2_its104[2];
train2_its103[3] = train2_its104[3];
train2_its103[4] = train2_its104[4];
train2_its103[5] = train2_its104[5];
train2_its103[6] = train2_its104[6];
sens_its103 = sens_its104;
progression_its104 = 0;
its104 = 0; 
}

if ( sens_its104 == 4 && progression_its104 == 1 )  			{ document.getElementById("x40").src = "image/point/a1_rose.png";  document.getElementById("x39").src = "image/point/a1_rose.png"; document.getElementById("x38").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its104 == 4 && progression_its104 == 2 )  			{ document.getElementById("x39").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("x37").src = "image/point/a1_gauche_rose.png"; }

// its103

if (sens_its103 == 4 && occupation_its103 ) 			{ progression_its103 = progression_its103 + 1;  }
if (sens_its103 == 4 && progression_its103 > 5 ) 		{ occupation_its103 = false; occupation_its117 = true;  
train2_its117[0] = train2_its103[0];
train2_its117[1] = train2_its103[1];
train2_its117[2] = train2_its103[2];
train2_its117[3] = train2_its103[3];
train2_its117[4] = train2_its103[4];
train2_its117[5] = train2_its103[5];
train2_its117[6] = train2_its103[6];
sens_its117 = sens_its103;
progression_its103 = 0;
its103 = 0; its97 = 0;
}

if ( sens_its103 == 4 && progression_its103 == 1 )  			{ document.getElementById("x38").src = "image/point/a1_rose.png";  document.getElementById("x37").src = "image/point/a1_rose.png"; document.getElementById("x36").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its103 == 4 && progression_its103 == 2 )  			{ document.getElementById("x37").src = "image/point/a1_rose.png";  document.getElementById("x36").src = "image/point/a1_rose.png"; document.getElementById("x35").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its103 == 4 && progression_its103 == 3 )  			{ document.getElementById("x36").src = "image/point/a1_rose.png";  document.getElementById("x35").src = "image/point/a1_rose.png"; document.getElementById("x34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its103 == 4 && progression_its103 == 4 )  			{ document.getElementById("x35").src = "image/point/a1_rose.png";  document.getElementById("x34").src = "image/point/a1_rose.png"; document.getElementById("x33").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its103 == 4 && progression_its103 == 5 )  			{ document.getElementById("x34").src = "image/point/a1_rose.png";  document.getElementById("x33").src = "image/point/a1_rose.png"; document.getElementById("x32").src = "image/point/a1_gauche_rose.png"; }

// its117

if (sens_its117 == 4 && occupation_its117 ) 			{ progression_its117 = progression_its117 + 1;  }
if (sens_its117 == 4 && progression_its117 > 8 ) 		{ occupation_its117 = false; occupation_its102 = true;  
train2_its102[0] = train2_its117[0];
train2_its102[1] = train2_its117[1];
train2_its102[2] = train2_its117[2];
train2_its102[3] = train2_its117[3];
train2_its102[4] = train2_its117[4];
train2_its102[5] = train2_its117[5];
train2_its102[6] = train2_its117[6];
sens_its102 = sens_its117;
progression_its117 = 0;
}

if ( sens_its117 == 4 && progression_its117 == 1 )  			{ document.getElementById("x33").src = "image/point/a1_rose.png";  document.getElementById("x32").src = "image/point/a1_rose.png"; document.getElementById("o8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its117 == 4 && progression_its117 == 2 )  			{ document.getElementById("x32").src = "image/point/a1_rose.png";  document.getElementById("o8").src = "image/point/a1_rose.png"; document.getElementById("o7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its117 == 4 && progression_its117 == 3 )  			{ document.getElementById("o8").src = "image/point/a1_rose.png";  document.getElementById("o7").src = "image/point/a1_rose.png"; document.getElementById("o6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its117 == 4 && progression_its117 == 4 )  			{ document.getElementById("o7").src = "image/point/a1_rose.png";  document.getElementById("o6").src = "image/point/a1_rose.png"; document.getElementById("o5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its117 == 4 && progression_its117 == 5 )  			{ document.getElementById("o6").src = "image/point/a1_rose.png";  document.getElementById("o5").src = "image/point/a1_rose.png"; document.getElementById("o4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its117 == 4 && progression_its117 == 6 )  			{ document.getElementById("o5").src = "image/point/a1_rose.png";  document.getElementById("o4").src = "image/point/a1_rose.png"; document.getElementById("o3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its117 == 4 && progression_its117 == 7 )  			{ document.getElementById("o4").src = "image/point/a1_rose.png";  document.getElementById("o3").src = "image/point/a1_rose.png"; document.getElementById("o2").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its117 == 4 && progression_its117 == 8 )  			{ document.getElementById("o3").src = "image/point/a1_rose.png";  document.getElementById("o2").src = "image/point/a1_rose.png"; document.getElementById("o1").src = "image/point/a1_gauche_rose.png"; }

// its102

if (sens_its102 == 4 && occupation_its102 ) 			{ progression_its102 = progression_its102 + 1;  }
if (sens_its102 == 4 && progression_its102 > 7 ) 		{ occupation_its102 = false; occupation_its101 = true;  
train2_its101[0] = train2_its102[0];
train2_its101[1] = train2_its102[1];
train2_its101[2] = train2_its102[2];
train2_its101[3] = train2_its102[3];
train2_its101[4] = train2_its102[4];
train2_its101[5] = train2_its102[5];
train2_its101[6] = train2_its102[6];
sens_its101 = sens_its102;
progression_its102 = 0;
its102 = 0; 
}

if ( sens_its102 == 4 && progression_its102 == 1 )  			{ document.getElementById("o2").src = "image/point/a1_rose.png";  document.getElementById("o1").src = "image/point/a1_rose.png"; document.getElementById("x30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its102 == 4 && progression_its102 == 2 )  			{ document.getElementById("o1").src = "image/point/a1_rose.png";  document.getElementById("x30").src = "image/point/a1_rose.png"; document.getElementById("x29").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its102 == 4 && progression_its102 == 3 )  			{ document.getElementById("x30").src = "image/point/a1_rose.png";  document.getElementById("x29").src = "image/point/a1_rose.png"; document.getElementById("x28").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its102 == 4 && progression_its102 == 4 )  			{ document.getElementById("x29").src = "image/point/a1_rose.png";  document.getElementById("x28").src = "image/point/a1_rose.png"; document.getElementById("x27").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its102 == 4 && progression_its102 == 5 )  			{ document.getElementById("x28").src = "image/point/a1_rose.png";  document.getElementById("x27").src = "image/point/a1_rose.png"; document.getElementById("x26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its102 == 4 && progression_its102 == 6 )  			{ document.getElementById("x27").src = "image/point/a1_rose.png";  document.getElementById("x26").src = "image/point/a1_rose.png"; document.getElementById("x25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its102 == 4 && progression_its102 == 7 )  			{ document.getElementById("x26").src = "image/point/a1_rose.png";  document.getElementById("x25").src = "image/point/a1_rose.png"; document.getElementById("x24").src = "image/point/a1_gauche_rose.png"; }

// its101

if (sens_its101 == 4 && occupation_its101 ) 																						{ progression_its101 = progression_its101 + 1;  }
if (sens_its101 == 4 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && progression_its101 > 24 ) 		{ occupation_its101 = false; occupation_its70 = true;  
train2_its70[0] = train2_its101[0];
train2_its70[1] = train2_its101[1];
train2_its70[2] = train2_its101[2];
train2_its70[3] = train2_its101[3];
train2_its70[4] = train2_its101[4];
train2_its70[5] = train2_its101[5];
train2_its70[6] = train2_its101[6];
sens_its70 = sens_its101;
progression_its101 = 0;
its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; 
aiguille82 = 0; 
aiguille80 = 0; 
aiguille78 = 0; 
aiguille87 = 0; 
}

if (sens_its101 == 4 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && occupation_its101 ) 		{
if ( sens_its101 == 4 && progression_its101 == 1 )  			{ document.getElementById("x25").src = "image/point/a1_rose.png";  document.getElementById("x24").src = "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 2 )  			{ document.getElementById("x24").src = "image/point/a1_rose.png";  document.getElementById("x23").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 3 )  			{ document.getElementById("x23").src = "image/point/a1_rose.png";  document.getElementById("x22").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 4 )  			{ document.getElementById("x22").src = "image/point/a1_rose.png";  document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 5 )  			{ document.getElementById("x21").src = "image/point/a1_rose.png";  document.getElementById("f1").src = "image/point/a1_rose.png"; document.getElementById("f2").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 6 )  			{ document.getElementById("f1").src = "image/point/a1_rose.png";  document.getElementById("f2").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 7 )  			{ document.getElementById("f2").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 8 )  			{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 9 )  			{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 10 )  			{ document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 11 )  			{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("f11").src = "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 12 )  			{ document.getElementById("f11").src = "image/point/a1_rose.png";  document.getElementById("f12").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 13 )  			{ document.getElementById("f12").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 14 )  			{ document.getElementById("c14").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("f13").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 15 )  			{ document.getElementById("c13").src = "image/point/a1_rose.png";  document.getElementById("f13").src = "image/point/a1_rose.png"; document.getElementById("f14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 16 )  			{ document.getElementById("f13").src = "image/point/a1_rose.png";  document.getElementById("f14").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 17 )  			{ document.getElementById("f14").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 18 )  			{ document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("f15").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 19 )  			{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("f15").src = "image/point/a1_rose.png"; document.getElementById("f16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 20 )  			{ document.getElementById("f15").src = "image/point/a1_rose.png";  document.getElementById("f16").src = "image/point/a1_rose.png"; document.getElementById("e8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 21 )  			{ document.getElementById("f16").src = "image/point/a1_rose.png";  document.getElementById("e8").src = "image/point/a1_rose.png"; document.getElementById("e7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 22 )  			{ document.getElementById("e8").src = "image/point/a1_rose.png";  document.getElementById("e7").src = "image/point/a1_rose.png"; document.getElementById("e6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 23 )  			{ document.getElementById("e7").src = "image/point/a1_rose.png";  document.getElementById("e6").src = "image/point/a1_rose.png"; document.getElementById("e5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 24 )  			{ document.getElementById("e6").src = "image/point/a1_rose.png";  document.getElementById("e5").src = "image/point/a1_rose.png"; document.getElementById("e4").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its101 == 4 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0 && progression_its101 > 13 ) 		{ occupation_its101 = false; occupation_its32 = true;  
train2_its32[0] = train2_its101[0];
train2_its32[1] = train2_its101[1];
train2_its32[2] = train2_its101[2];
train2_its32[3] = train2_its101[3];
train2_its32[4] = train2_its101[4];
train2_its32[5] = train2_its101[5];
train2_its32[6] = train2_its101[6];
sens_its32 = sens_its101;
progression_its101 = 0;
its101 = 0; its82 = 0; its16 = 0; its80 = 0; its131 = 0; its32 = 0;
aiguille82 = 0; 
aiguille80 = 0; 
}

if (sens_its101 == 4 && aiguille82 == 1 && aiguille80 == 1 && aiguille78 == 0 && occupation_its101 ) 		{
if ( sens_its101 == 4 && progression_its101 == 1 )  			{ document.getElementById("x25").src = "image/point/a1_rose.png";  document.getElementById("x24").src = "image/point/a1_rose.png"; document.getElementById("x23").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 2 )  			{ document.getElementById("x24").src = "image/point/a1_rose.png";  document.getElementById("x23").src = "image/point/a1_rose.png"; document.getElementById("x22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 3 )  			{ document.getElementById("x23").src = "image/point/a1_rose.png";  document.getElementById("x22").src = "image/point/a1_rose.png"; document.getElementById("x21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 4 )  			{ document.getElementById("x22").src = "image/point/a1_rose.png";  document.getElementById("x21").src = "image/point/a1_rose.png"; document.getElementById("f1").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 5 )  			{ document.getElementById("x21").src = "image/point/a1_rose.png";  document.getElementById("f1").src = "image/point/a1_rose.png";  document.getElementById("f2").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 6 )  			{ document.getElementById("f1").src = "image/point/a1_rose.png";   document.getElementById("f2").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 7 )  			{ document.getElementById("f2").src = "image/point/a1_rose.png";   document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 8 )  			{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 9 )  			{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 10 )  			{ document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 11 )  			{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("f11").src = "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 12 )  			{ document.getElementById("f11").src = "image/point/a1_rose.png";  document.getElementById("f12").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its101 == 4 && progression_its101 == 13 )  			{ document.getElementById("f12").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_gauche_rose.png"; }
}





// its21

if (sens_its21 == 4 && occupation_its21 ) 			{ progression_its21 = progression_its21 + 1;  }
if (sens_its21 == 4 && progression_its21 > 4 ) 		{ occupation_its21 = false; occupation_its20 = true;  
train2_its20[0] = train2_its21[0];
train2_its20[1] = train2_its21[1];
train2_its20[2] = train2_its21[2];
train2_its20[3] = train2_its21[3];
train2_its20[4] = train2_its21[4];
train2_its20[5] = train2_its21[5];
train2_its20[6] = train2_its21[6];
sens_its20 = sens_its21;
progression_its21 = 0;
its21 = 0; 
}

if ( sens_its21 == 4 && progression_its21 == 1 )  			{ document.getElementById("b64").src = "image/point/a1_rose.png";  document.getElementById("b63").src = "image/point/a1_rose.png"; document.getElementById("b62").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its21 == 4 && progression_its21 == 2 )  			{ document.getElementById("b63").src = "image/point/a1_rose.png";  document.getElementById("b62").src = "image/point/a1_rose.png"; document.getElementById("b61").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its21 == 4 && progression_its21 == 3 )  			{ document.getElementById("b62").src = "image/point/a1_rose.png";  document.getElementById("b61").src = "image/point/a1_rose.png"; document.getElementById("b60").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its21 == 4 && progression_its21 == 4 )  			{ document.getElementById("b61").src = "image/point/a1_rose.png";  document.getElementById("b60").src = "image/point/a1_rose.png"; document.getElementById("b59").src = "image/point/a1_gauche_rose.png"; }

// its20

if (sens_its20 == 4 && occupation_its20 ) 				{ progression_its20 = progression_its20 + 1;  }
if (sens_its20 == 4 && progression_its20 > 14 ) 		{ occupation_its20 = false; occupation_its19 = true;  
train2_its19[0] = train2_its20[0];
train2_its19[1] = train2_its20[1];
train2_its19[2] = train2_its20[2];
train2_its19[3] = train2_its20[3];
train2_its19[4] = train2_its20[4];
train2_its19[5] = train2_its20[5];
train2_its19[6] = train2_its20[6];
sens_its19 = sens_its20;
progression_its20 = 0;
its20 = 0; 
}

if ( sens_its20 == 4 && progression_its20 == 1 )  			{ document.getElementById("b60").src = "image/point/a1_rose.png";  document.getElementById("b59").src = "image/point/a1_rose.png"; document.getElementById("b58").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 2 )  			{ document.getElementById("b59").src = "image/point/a1_rose.png";  document.getElementById("b58").src = "image/point/a1_rose.png"; document.getElementById("b57").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 3 )  			{ document.getElementById("b58").src = "image/point/a1_rose.png";  document.getElementById("b57").src = "image/point/a1_rose.png"; document.getElementById("b56").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its20 == 4 && progression_its20 == 4 )  			{ document.getElementById("b57").src = "image/point/a1_rose.png";  document.getElementById("b56").src = "image/point/a1_rose.png"; document.getElementById("b55").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 5 )  			{ document.getElementById("b56").src = "image/point/a1_rose.png";  document.getElementById("b55").src = "image/point/a1_rose.png"; document.getElementById("b54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 6 )  			{ document.getElementById("b55").src = "image/point/a1_rose.png";  document.getElementById("b54").src = "image/point/a1_rose.png"; document.getElementById("b53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 7 )  			{ document.getElementById("b54").src = "image/point/a1_rose.png";  document.getElementById("b53").src = "image/point/a1_rose.png"; document.getElementById("b52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its20 == 4 && progression_its20 == 8 )  			{ document.getElementById("b53").src = "image/point/a1_rose.png";  document.getElementById("b52").src = "image/point/a1_rose.png"; document.getElementById("b51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 9 )  			{ document.getElementById("b52").src = "image/point/a1_rose.png";  document.getElementById("b51").src = "image/point/a1_rose.png"; document.getElementById("b50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 10 )  			{ document.getElementById("b51").src = "image/point/a1_rose.png";  document.getElementById("b50").src = "image/point/a1_rose.png"; document.getElementById("b49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 11 )  			{ document.getElementById("b50").src = "image/point/a1_rose.png";  document.getElementById("b49").src = "image/point/a1_rose.png"; document.getElementById("b48").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its20 == 4 && progression_its20 == 12 )  			{ document.getElementById("b49").src = "image/point/a1_rose.png";  document.getElementById("b48").src = "image/point/a1_rose.png"; document.getElementById("b47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 13 )  			{ document.getElementById("b48").src = "image/point/a1_rose.png";  document.getElementById("b47").src = "image/point/a1_rose.png"; document.getElementById("b46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its20 == 4 && progression_its20 == 14 )  			{ document.getElementById("b47").src = "image/point/a1_rose.png";  document.getElementById("b46").src = "image/point/a1_rose.png"; document.getElementById("b45").src = "image/point/a1_gauche_rose.png"; }


// its19

if (sens_its19 == 4 && occupation_its19 ) 				{ progression_its19 = progression_its19 + 1;  }
if (sens_its19 == 4 && progression_its19 > 5 ) 			{ occupation_its19 = false; occupation_its121 = true;  
train2_its121[0] = train2_its19[0];
train2_its121[1] = train2_its19[1];
train2_its121[2] = train2_its19[2];
train2_its121[3] = train2_its19[3];
train2_its121[4] = train2_its19[4];
train2_its121[5] = train2_its19[5];
train2_its121[6] = train2_its19[6];
sens_its121 = sens_its19;
progression_its19 = 0;
its19 = 0; 
}

if ( sens_its19 == 4 && progression_its19 == 1 )  			{ document.getElementById("b46").src = "image/point/a1_rose.png";  document.getElementById("b45").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its19 == 4 && progression_its19 == 2 )  			{ document.getElementById("b45").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its19 == 4 && progression_its19 == 3 )  			{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its19 == 4 && progression_its19 == 4 )  			{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its19 == 4 && progression_its19 == 5 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_gauche_rose.png"; }

// its121

if (sens_its121 == 4 && occupation_its121 ) 				{ progression_its121 = progression_its121 + 1;  }
if (sens_its121 == 4 && progression_its121 > 2 ) 			{ occupation_its121 = false; occupation_its18 = true;  
train2_its18[0] = train2_its121[0];
train2_its18[1] = train2_its121[1];
train2_its18[2] = train2_its121[2];
train2_its18[3] = train2_its121[3];
train2_its18[4] = train2_its121[4];
train2_its18[5] = train2_its121[5];
train2_its18[6] = train2_its121[6];
sens_its18 = sens_its121;
progression_its121 = 0;
its121 = 0; 
}

if ( sens_its121 == 4 && progression_its121 == 1 )  			{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("b39").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its121 == 4 && progression_its121 == 2 )  			{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("b39").src = "image/point/a1_rose.png"; document.getElementById("b38").src = "image/point/a1_gauche_rose.png"; }

// its18

if (sens_its18 == 4 && occupation_its18 ) 				{ progression_its18 = progression_its18 + 1;  }
if (sens_its18 == 4 && progression_its18 > 6 ) 		    { occupation_its18 = false; occupation_its17 = true;  
train2_its17[0] = train2_its18[0];
train2_its17[1] = train2_its18[1];
train2_its17[2] = train2_its18[2];
train2_its17[3] = train2_its18[3];
train2_its17[4] = train2_its18[4];
train2_its17[5] = train2_its18[5];
train2_its17[6] = train2_its18[6];
sens_its17 = sens_its18;
progression_its18 = 0;
its18 = 0; 
}

if ( sens_its18 == 4 && progression_its18 == 1 )  			{ document.getElementById("b39").src = "image/point/a1_rose.png";  document.getElementById("b38").src = "image/point/a1_rose.png"; document.getElementById("b37").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its18 == 4 && progression_its18 == 2 )  			{ document.getElementById("b38").src = "image/point/a1_rose.png";  document.getElementById("b37").src = "image/point/a1_rose.png"; document.getElementById("b36").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its18 == 4 && progression_its18 == 3 )  			{ document.getElementById("b37").src = "image/point/a1_rose.png";  document.getElementById("b36").src = "image/point/a1_rose.png"; document.getElementById("b35").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its18 == 4 && progression_its18 == 4 )  			{ document.getElementById("b36").src = "image/point/a1_rose.png";  document.getElementById("b35").src = "image/point/a1_rose.png"; document.getElementById("b34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its18 == 4 && progression_its18 == 5 )  			{ document.getElementById("b35").src = "image/point/a1_rose.png";  document.getElementById("b34").src = "image/point/a1_rose.png"; document.getElementById("b33").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its18 == 4 && progression_its18 == 6 )  			{ document.getElementById("b34").src = "image/point/a1_rose.png";  document.getElementById("b33").src = "image/point/a1_rose.png"; document.getElementById("b32").src = "image/point/a1_gauche_rose.png"; }

// its17

if (sens_its17 == 4 && occupation_its17 ) 				{ progression_its17 = progression_its17 + 1;  }
if (sens_its17 == 4 && progression_its17 > 8 ) 		    { occupation_its17 = false; occupation_its111 = true;  
train2_its111[0] = train2_its17[0];
train2_its111[1] = train2_its17[1];
train2_its111[2] = train2_its17[2];
train2_its111[3] = train2_its17[3];
train2_its111[4] = train2_its17[4];
train2_its111[5] = train2_its17[5];
train2_its111[6] = train2_its17[6];
sens_its111 = sens_its17;
progression_its17 = 0;
}

if ( sens_its17 == 4 && progression_its17 == 1 )  			{ document.getElementById("b33").src = "image/point/a1_rose.png";  document.getElementById("b32").src = "image/point/a1_rose.png"; document.getElementById("n8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its17 == 4 && progression_its17 == 2 )  			{ document.getElementById("b32").src = "image/point/a1_rose.png";  document.getElementById("n8").src = "image/point/a1_rose.png"; document.getElementById("n7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its17 == 4 && progression_its17 == 3 )  			{ document.getElementById("n8").src = "image/point/a1_rose.png";  document.getElementById("n7").src = "image/point/a1_rose.png"; document.getElementById("n6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its17 == 4 && progression_its17 == 4 )  			{ document.getElementById("n7").src = "image/point/a1_rose.png";  document.getElementById("n6").src = "image/point/a1_rose.png"; document.getElementById("n5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its17 == 4 && progression_its17 == 5 )  			{ document.getElementById("n6").src = "image/point/a1_rose.png";  document.getElementById("n5").src = "image/point/a1_rose.png"; document.getElementById("n4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its17 == 4 && progression_its17 == 6 )  			{ document.getElementById("n5").src = "image/point/a1_rose.png";  document.getElementById("n4").src = "image/point/a1_rose.png"; document.getElementById("n3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its17 == 4 && progression_its17 == 7 )  			{ document.getElementById("n4").src = "image/point/a1_rose.png";  document.getElementById("n3").src = "image/point/a1_rose.png"; document.getElementById("n2").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its17 == 4 && progression_its17 == 8 )  			{ document.getElementById("n3").src = "image/point/a1_rose.png";  document.getElementById("n2").src = "image/point/a1_rose.png"; document.getElementById("n1").src = "image/point/a1_gauche_rose.png"; }

//its111

if (sens_its111 == 4 && occupation_its111 ) 			{ progression_its111 = progression_its111 + 1;  }
if (sens_its111 == 4 && progression_its111 > 11 ) 		{ occupation_its111 = false; occupation_its16 = true;  
train2_its16[0] = train2_its111[0];
train2_its16[1] = train2_its111[1];
train2_its16[2] = train2_its111[2];
train2_its16[3] = train2_its111[3];
train2_its16[4] = train2_its111[4];
train2_its16[5] = train2_its111[5];
train2_its16[6] = train2_its111[6];
sens_its16 = sens_its111;
progression_its111 = 0;
its111 = 0; 
}

if ( sens_its111 == 4 && progression_its111 == 1 )  			{ document.getElementById("n2").src = "image/point/a1_rose.png";  document.getElementById("n1").src = "image/point/a1_rose.png"; document.getElementById("b30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 2 )  			{ document.getElementById("n1").src = "image/point/a1_rose.png";  document.getElementById("b30").src = "image/point/a1_rose.png"; document.getElementById("b29").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 3 )  			{ document.getElementById("b30").src = "image/point/a1_rose.png";  document.getElementById("b29").src = "image/point/a1_rose.png"; document.getElementById("b28").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 4 )  			{ document.getElementById("b29").src = "image/point/a1_rose.png";  document.getElementById("b28").src = "image/point/a1_rose.png"; document.getElementById("b27").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 5 )  			{ document.getElementById("b28").src = "image/point/a1_rose.png";  document.getElementById("b27").src = "image/point/a1_rose.png"; document.getElementById("b26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 6 )  			{ document.getElementById("b27").src = "image/point/a1_rose.png";  document.getElementById("b26").src = "image/point/a1_rose.png"; document.getElementById("b25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 7 )  			{ document.getElementById("b26").src = "image/point/a1_rose.png";  document.getElementById("b25").src = "image/point/a1_rose.png"; document.getElementById("b24").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 8 )  			{ document.getElementById("b25").src = "image/point/a1_rose.png";  document.getElementById("b24").src = "image/point/a1_rose.png"; document.getElementById("b23").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 9 )  			{ document.getElementById("b24").src = "image/point/a1_rose.png";  document.getElementById("b23").src = "image/point/a1_rose.png"; document.getElementById("b22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 10 )  			{ document.getElementById("b23").src = "image/point/a1_rose.png";  document.getElementById("b22").src = "image/point/a1_rose.png"; document.getElementById("b21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its111 == 4 && progression_its111 == 11 )  			{ document.getElementById("b22").src = "image/point/a1_rose.png";  document.getElementById("b21").src = "image/point/a1_rose.png"; document.getElementById("b20").src = "image/point/a1_gauche_rose.png"; }

// its16

if (sens_its16 == 4 && occupation_its16 ) 							{ progression_its16 = progression_its16 + 1;}
if (sens_its16 == 4 && aiguille80 == 0 && progression_its16 > 4 ) 	{ occupation_its16 = false; occupation_its15 = true;  
train2_its15[0] = train2_its16[0];
train2_its15[1] = train2_its16[1];
train2_its15[2] = train2_its16[2];
train2_its15[3] = train2_its16[3];
train2_its15[4] = train2_its16[4];
train2_its15[5] = train2_its16[5];
train2_its15[6] = train2_its16[6];
sens_its15 = sens_its16;
progression_its16 = 0;
its16 = 0; 
}

if (sens_its16 == 4 && aiguille80 == 0 && occupation_its16 ) 	{
if ( sens_its16 == 4 && progression_its16 == 1 )  		{ document.getElementById("b21").src = "image/point/a1_rose.png";  document.getElementById("b20").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 2 )  		{ document.getElementById("b20").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 3 )  		{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 4 )  		{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_gauche_rose.png";}
}

if (sens_its16 == 4 && aiguille80 == 1 && aiguille78 == 0 && progression_its16 > 8 ) 	{ occupation_its16 = false; occupation_its32 = true;  
train2_its32[0] = train2_its16[0];
train2_its32[1] = train2_its16[1];
train2_its32[2] = train2_its16[2];
train2_its32[3] = train2_its16[3];
train2_its32[4] = train2_its16[4];
train2_its32[5] = train2_its16[5];
train2_its32[6] = train2_its16[6];
sens_its32 = sens_its16;
progression_its16 = 0;
its16 = 0; its80 = 0; its131 = 0; its32 = 0;
aiguille80 = 0; 
}

if (sens_its16 == 4 && aiguille80 == 1 && aiguille78 == 0 && occupation_its16 ) 	{
if ( sens_its16 == 4 && progression_its16 == 1 )  		{ document.getElementById("b21").src = "image/point/a1_rose.png";  document.getElementById("b20").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 2 )  		{ document.getElementById("b20").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 3 )  		{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 4 )  		{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 5 )  		{ document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 6 )  		{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("f11").src = "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 7 )  		{ document.getElementById("f11").src = "image/point/a1_rose.png";  document.getElementById("f12").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 8 )  		{ document.getElementById("f12").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its16 == 4 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && progression_its16 > 19 ) 	{ occupation_its16 = false; occupation_its70 = true;  
train2_its70[0] = train2_its16[0];
train2_its70[1] = train2_its16[1];
train2_its70[2] = train2_its16[2];
train2_its70[3] = train2_its16[3];
train2_its70[4] = train2_its16[4];
train2_its70[5] = train2_its16[5];
train2_its70[6] = train2_its16[6];
sens_its70 = sens_its16;
progression_its16 = 0;
its16 = 0; its80 = 0; its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; 
aiguille80 = 0; 
aiguille78 = 0; 
aiguille87 = 0; 
}

if (sens_its16 == 4 && aiguille80 == 1 && aiguille78 == 1 && aiguille87 == 1 && occupation_its16 ) 	{
if ( sens_its16 == 4 && progression_its16 == 1 )  			{ document.getElementById("b21").src = "image/point/a1_rose.png";  document.getElementById("b20").src = "image/point/a1_rose.png"; document.getElementById("b19").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 2 )  			{ document.getElementById("b20").src = "image/point/a1_rose.png";  document.getElementById("b19").src = "image/point/a1_rose.png"; document.getElementById("b18").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 3 )  			{ document.getElementById("b19").src = "image/point/a1_rose.png";  document.getElementById("b18").src = "image/point/a1_rose.png"; document.getElementById("b17").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 4 )  			{ document.getElementById("b18").src = "image/point/a1_rose.png";  document.getElementById("b17").src = "image/point/a1_rose.png"; document.getElementById("b16").src = "image/point/a1_gauche_rose.png";}
if ( sens_its16 == 4 && progression_its16 == 5 )  			{ document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("f11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 6 )  			{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("f11").src = "image/point/a1_rose.png"; document.getElementById("f12").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 7 )  			{ document.getElementById("f11").src = "image/point/a1_rose.png";  document.getElementById("f12").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 8 )  			{ document.getElementById("f12").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 9 )  			{ document.getElementById("c14").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("f13").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 10 )  			{ document.getElementById("c13").src = "image/point/a1_rose.png";  document.getElementById("f13").src = "image/point/a1_rose.png"; document.getElementById("f14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 11 )  			{ document.getElementById("f13").src = "image/point/a1_rose.png";  document.getElementById("f14").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 12 )  			{ document.getElementById("f14").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 13 )  			{ document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("f15").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 14 )  			{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("f15").src = "image/point/a1_rose.png"; document.getElementById("f16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 15 )  			{ document.getElementById("f15").src = "image/point/a1_rose.png";  document.getElementById("f16").src = "image/point/a1_rose.png"; document.getElementById("e8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 16 )  			{ document.getElementById("f16").src = "image/point/a1_rose.png";  document.getElementById("e8").src = "image/point/a1_rose.png"; document.getElementById("e7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 17 )  			{ document.getElementById("e8").src = "image/point/a1_rose.png";  document.getElementById("e7").src = "image/point/a1_rose.png"; document.getElementById("e6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 18 )  			{ document.getElementById("e7").src = "image/point/a1_rose.png";  document.getElementById("e6").src = "image/point/a1_rose.png"; document.getElementById("e5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its16 == 4 && progression_its16 == 19 )  			{ document.getElementById("e6").src = "image/point/a1_rose.png";  document.getElementById("e5").src = "image/point/a1_rose.png"; document.getElementById("e4").src = "image/point/a1_gauche_rose.png"; }
}


// its15

if (sens_its15 == 4 && occupation_its15 ) 							{ progression_its15 = progression_its15 + 1; }
if (sens_its15 == 4 && progression_its15 > 8 ) 						{ occupation_its15 = false; occupation_its14 = true;  
train2_its14[0] = train2_its15[0];
train2_its14[1] = train2_its15[1];
train2_its14[2] = train2_its15[2];
train2_its14[3] = train2_its15[3];
train2_its14[4] = train2_its15[4];
train2_its14[5] = train2_its15[5];
train2_its14[6] = train2_its15[6];
sens_its14 = sens_its15;
progression_its15 = 0;
its15 = 0; 
}

if ( sens_its15 == 4 && progression_its15 == 1 )  		{ document.getElementById("b17").src = "image/point/a1_rose.png";  document.getElementById("b16").src = "image/point/a1_rose.png"; document.getElementById("b15").src = "image/point/a1_gauche_rose.png";}
if ( sens_its15 == 4 && progression_its15 == 2 )  		{ document.getElementById("b16").src = "image/point/a1_rose.png";  document.getElementById("b15").src = "image/point/a1_rose.png"; document.getElementById("b14").src = "image/point/a1_gauche_rose.png";}
if ( sens_its15 == 4 && progression_its15 == 3 )  		{ document.getElementById("b15").src = "image/point/a1_rose.png";  document.getElementById("b14").src = "image/point/a1_rose.png"; document.getElementById("b13").src = "image/point/a1_gauche_rose.png";}
if ( sens_its15 == 4 && progression_its15 == 4 )  		{ document.getElementById("b14").src = "image/point/a1_rose.png";  document.getElementById("b13").src = "image/point/a1_rose.png"; document.getElementById("b12").src = "image/point/a1_gauche_rose.png";}
if ( sens_its15 == 4 && progression_its15 == 5 )  		{ document.getElementById("b13").src = "image/point/a1_rose.png";  document.getElementById("b12").src = "image/point/a1_rose.png"; document.getElementById("b11").src = "image/point/a1_gauche_rose.png";}
if ( sens_its15 == 4 && progression_its15 == 6 )  		{ document.getElementById("b12").src = "image/point/a1_rose.png";  document.getElementById("b11").src = "image/point/a1_rose.png"; document.getElementById("b10").src = "image/point/a1_gauche_rose.png";}
if ( sens_its15 == 4 && progression_its15 == 7 )  		{ document.getElementById("b11").src = "image/point/a1_rose.png";  document.getElementById("b10").src = "image/point/a1_rose.png"; document.getElementById("b9").src = "image/point/a1_gauche_rose.png";}
if ( sens_its15 == 4 && progression_its15 == 8 )  		{ document.getElementById("b10").src = "image/point/a1_rose.png";  document.getElementById("b9").src = "image/point/a1_rose.png"; document.getElementById("b8").src = "image/point/a1_gauche_rose.png";}

// its42

if (sens_its42 == 4 && occupation_its42 ) 							{ progression_its42 = progression_its42 + 1; }
if (sens_its42 == 4 && progression_its42 > 5 ) 						{ occupation_its42 = false; occupation_its41 = true;  
train2_its41[0] = train2_its42[0];
train2_its41[1] = train2_its42[1];
train2_its41[2] = train2_its42[2];
train2_its41[3] = train2_its42[3];
train2_its41[4] = train2_its42[4];
train2_its41[5] = train2_its42[5];
train2_its41[6] = train2_its42[6];
sens_its41 = sens_its42;
progression_its42 = 0;
its42 = 0; 
}

if ( sens_its42 == 4 && progression_its42 == 1 )  			{ document.getElementById("c64").src = "image/point/a1_rose.png";  document.getElementById("c63").src = "image/point/a1_rose.png"; document.getElementById("c62").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its42 == 4 && progression_its42 == 2 )  			{ document.getElementById("c63").src = "image/point/a1_rose.png";  document.getElementById("c62").src = "image/point/a1_rose.png"; document.getElementById("c61").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its42 == 4 && progression_its42 == 3 )  			{ document.getElementById("c62").src = "image/point/a1_rose.png";  document.getElementById("c61").src = "image/point/a1_rose.png"; document.getElementById("c60").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its42 == 4 && progression_its42 == 4 )  			{ document.getElementById("c61").src = "image/point/a1_rose.png";  document.getElementById("c60").src = "image/point/a1_rose.png"; document.getElementById("c59").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its42 == 4 && progression_its42 == 5 )  			{ document.getElementById("c60").src = "image/point/a1_rose.png";  document.getElementById("c59").src = "image/point/a1_rose.png"; document.getElementById("c58").src = "image/point/a1_gauche_rose.png"; }



// its41

if (sens_its41 == 4 && occupation_its41) 								{ progression_its41 = progression_its41 + 1;} 
if (sens_its41 == 4 && progression_its41 > 2 ) 							{ occupation_its41 = false; occupation_its40 = true; 
train2_its40[0] = train2_its41[0];
train2_its40[1] = train2_its41[1];
train2_its40[2] = train2_its41[2];
train2_its40[3] = train2_its41[3];
train2_its40[4] = train2_its41[4];
train2_its40[5] = train2_its41[5];
train2_its40[6] = train2_its41[6];
sens_its40 = sens_its41;
progression_its41 = 0;
its41 = 0; 
} 

if ( sens_its41 == 4 && progression_its41 == 1 )  			{ document.getElementById("c59").src = "image/point/a1_rose.png";  document.getElementById("c58").src = "image/point/a1_rose.png"; document.getElementById("c57").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its41 == 4 && progression_its41 == 2 )  			{ document.getElementById("c58").src = "image/point/a1_rose.png";  document.getElementById("c57").src = "image/point/a1_rose.png"; document.getElementById("c56").src = "image/point/a1_gauche_rose.png";  }

// its40

if (sens_its40 == 4 && occupation_its40) 				{ progression_its40 = progression_its40 + 1;} 
if (sens_its40 == 4 && progression_its40 > 7 ) 			{ occupation_its40 = false; occupation_its39 = true;  
train2_its39[0] = train2_its40[0];
train2_its39[1] = train2_its40[1];
train2_its39[2] = train2_its40[2];
train2_its39[3] = train2_its40[3];
train2_its39[4] = train2_its40[4];
train2_its39[5] = train2_its40[5];
train2_its39[6] = train2_its40[6];
sens_its39 = sens_its40;
progression_its40 = 0;
its40 = 0; 
} 

if ( sens_its40 == 4 && progression_its40 == 1 )  			{ document.getElementById("c57").src = "image/point/a1_rose.png";  document.getElementById("c56").src = "image/point/a1_rose.png"; document.getElementById("c55").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its40 == 4 && progression_its40 == 2 )  			{ document.getElementById("c56").src = "image/point/a1_rose.png";  document.getElementById("c55").src = "image/point/a1_rose.png"; document.getElementById("c54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its40 == 4 && progression_its40 == 3 )  			{ document.getElementById("c55").src = "image/point/a1_rose.png";  document.getElementById("c54").src = "image/point/a1_rose.png"; document.getElementById("c53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its40 == 4 && progression_its40 == 4 )  			{ document.getElementById("c54").src = "image/point/a1_rose.png";  document.getElementById("c53").src = "image/point/a1_rose.png"; document.getElementById("c52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its40 == 4 && progression_its40 == 5 )  			{ document.getElementById("c53").src = "image/point/a1_rose.png";  document.getElementById("c52").src = "image/point/a1_rose.png"; document.getElementById("c51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its40 == 4 && progression_its40 == 6 )  			{ document.getElementById("c52").src = "image/point/a1_rose.png";  document.getElementById("c51").src = "image/point/a1_rose.png"; document.getElementById("c50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its40 == 4 && progression_its40 == 7 )  			{ document.getElementById("c51").src = "image/point/a1_rose.png";  document.getElementById("c50").src = "image/point/a1_rose.png"; document.getElementById("c49").src = "image/point/a1_gauche_rose.png"; }

// its39

if (sens_its39 == 4 && occupation_its39) 				{ progression_its39 = progression_its39 + 1;}
if (sens_its39 == 4 && progression_its39 > 2 ) 			{ occupation_its39 = false; occupation_its38 = true;  
train2_its38[0] = train2_its39[0];
train2_its38[1] = train2_its39[1];
train2_its38[2] = train2_its39[2];
train2_its38[3] = train2_its39[3];
train2_its38[4] = train2_its39[4];
train2_its38[5] = train2_its39[5];
train2_its38[6] = train2_its39[6];
sens_its38 = sens_its39;
progression_its39 = 0;
its39 = 0; 
} 

if ( sens_its39 == 4 && progression_its39 == 1 )  			{ document.getElementById("c50").src = "image/point/a1_rose.png";  document.getElementById("c49").src = "image/point/a1_rose.png"; document.getElementById("c48").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its39 == 4 && progression_its39 == 2 )  			{ document.getElementById("c49").src = "image/point/a1_rose.png";  document.getElementById("c48").src = "image/point/a1_rose.png"; document.getElementById("c47").src = "image/point/a1_gauche_rose.png"; }

// its38

if (sens_its38 == 4 && occupation_its38) 				{ progression_its38 = progression_its38 + 1;}
if (sens_its38 == 4 && progression_its38 > 10 ) 		{ occupation_its38 = false; occupation_its37 = true;  
train2_its37[0] = train2_its38[0];
train2_its37[1] = train2_its38[1];
train2_its37[2] = train2_its38[2];
train2_its37[3] = train2_its38[3];
train2_its37[4] = train2_its38[4];
train2_its37[5] = train2_its38[5];
train2_its37[6] = train2_its38[6]; 
sens_its37 = sens_its38;
progression_its38 = 0;
its38 = 0; 
}

if ( sens_its38 == 4 && progression_its38 == 1 )  			{ document.getElementById("c48").src = "image/point/a1_rose.png";  document.getElementById("c47").src = "image/point/a1_rose.png"; document.getElementById("c46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its38 == 4 && progression_its38 == 2 )  			{ document.getElementById("c47").src = "image/point/a1_rose.png";  document.getElementById("c46").src = "image/point/a1_rose.png"; document.getElementById("c45").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its38 == 4 && progression_its38 == 3 )  			{ document.getElementById("c46").src = "image/point/a1_rose.png";  document.getElementById("c45").src = "image/point/a1_rose.png"; document.getElementById("c44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its38 == 4 && progression_its38 == 4 )  			{ document.getElementById("c45").src = "image/point/a1_rose.png";  document.getElementById("c44").src = "image/point/a1_rose.png"; document.getElementById("c43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its38 == 4 && progression_its38 == 5 )  			{ document.getElementById("c44").src = "image/point/a1_rose.png";  document.getElementById("c43").src = "image/point/a1_rose.png"; document.getElementById("c42").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its38 == 4 && progression_its38 == 6 )  			{ document.getElementById("c43").src = "image/point/a1_rose.png";  document.getElementById("c42").src = "image/point/a1_rose.png"; document.getElementById("c41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its38 == 4 && progression_its38 == 7 )  			{ document.getElementById("c42").src = "image/point/a1_rose.png";  document.getElementById("c41").src = "image/point/a1_rose.png"; document.getElementById("c40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its38 == 4 && progression_its38 == 8 )  			{ document.getElementById("c41").src = "image/point/a1_rose.png";  document.getElementById("c40").src = "image/point/a1_rose.png"; document.getElementById("c39").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its38 == 4 && progression_its38 == 9 )  			{ document.getElementById("c40").src = "image/point/a1_rose.png";  document.getElementById("c39").src = "image/point/a1_rose.png"; document.getElementById("c38").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its38 == 4 && progression_its38 == 10 )  			{ document.getElementById("c39").src = "image/point/a1_rose.png";  document.getElementById("c38").src = "image/point/a1_rose.png"; document.getElementById("c37").src = "image/point/a1_gauche_rose.png"; }

// its37

if (sens_its37 == 4 && occupation_its37) 				{ progression_its37 = progression_its37 + 1; }
if (sens_its37 == 4 && progression_its37 > 5 ) 			{ occupation_its37 = false; occupation_its118 = true;  
train2_its118[0] = train2_its37[0];
train2_its118[1] = train2_its37[1];
train2_its118[2] = train2_its37[2];
train2_its118[3] = train2_its37[3];
train2_its118[4] = train2_its37[4];
train2_its118[5] = train2_its37[5];
train2_its118[6] = train2_its37[6];
sens_its118 = sens_its37;
progression_its37 = 0;
its37 = 0; 
}

if ( sens_its37 == 4 && progression_its37 == 1 )  			{ document.getElementById("c38").src = "image/point/a1_rose.png";  document.getElementById("c37").src = "image/point/a1_rose.png"; document.getElementById("c36").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its37 == 4 && progression_its37 == 2 )  			{ document.getElementById("c37").src = "image/point/a1_rose.png";  document.getElementById("c36").src = "image/point/a1_rose.png"; document.getElementById("c35").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its37 == 4 && progression_its37 == 3 )  			{ document.getElementById("c36").src = "image/point/a1_rose.png";  document.getElementById("c35").src = "image/point/a1_rose.png"; document.getElementById("c34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its37 == 4 && progression_its37 == 4 )  			{ document.getElementById("c35").src = "image/point/a1_rose.png";  document.getElementById("c34").src = "image/point/a1_rose.png"; document.getElementById("c33").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its37 == 4 && progression_its37 == 5 )  			{ document.getElementById("c34").src = "image/point/a1_rose.png";  document.getElementById("c33").src = "image/point/a1_rose.png"; document.getElementById("c32").src = "image/point/a1_gauche_rose.png"; }

// its118

if (sens_its118 == 4 && occupation_its118 ) 			{ progression_its118 = progression_its118 + 1;  }
if (sens_its118 == 4 && progression_its118 > 8 ) 		{ occupation_its118 = false; occupation_its34 = true;  
train2_its34[0] = train2_its118[0];
train2_its34[1] = train2_its118[1];
train2_its34[2] = train2_its118[2];
train2_its34[3] = train2_its118[3];
train2_its34[4] = train2_its118[4];
train2_its34[5] = train2_its118[5];
train2_its34[6] = train2_its118[6];
sens_its34 = sens_its118;
progression_its118 = 0;
}

if ( sens_its118 == 4 && progression_its118 == 1 )  			{ document.getElementById("c33").src = "image/point/a1_rose.png";  document.getElementById("c32").src = "image/point/a1_rose.png"; document.getElementById("m8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its118 == 4 && progression_its118 == 2 )  			{ document.getElementById("c32").src = "image/point/a1_rose.png";  document.getElementById("m8").src = "image/point/a1_rose.png"; document.getElementById("m7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its118 == 4 && progression_its118 == 3 )  			{ document.getElementById("m8").src = "image/point/a1_rose.png";  document.getElementById("m7").src = "image/point/a1_rose.png"; document.getElementById("m6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its118 == 4 && progression_its118 == 4 )  			{ document.getElementById("m7").src = "image/point/a1_rose.png";  document.getElementById("m6").src = "image/point/a1_rose.png"; document.getElementById("m5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its118 == 4 && progression_its118 == 5 )  			{ document.getElementById("m6").src = "image/point/a1_rose.png";  document.getElementById("m5").src = "image/point/a1_rose.png"; document.getElementById("m4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its118 == 4 && progression_its118 == 6 )  			{ document.getElementById("m5").src = "image/point/a1_rose.png";  document.getElementById("m4").src = "image/point/a1_rose.png"; document.getElementById("m3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its118 == 4 && progression_its118 == 7 )  			{ document.getElementById("m4").src = "image/point/a1_rose.png";  document.getElementById("m3").src = "image/point/a1_rose.png"; document.getElementById("m2").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its118 == 4 && progression_its118 == 8 )  			{ document.getElementById("m3").src = "image/point/a1_rose.png";  document.getElementById("m2").src = "image/point/a1_rose.png"; document.getElementById("m1").src = "image/point/a1_gauche_rose.png"; }

// its34

if (sens_its34 == 4 && occupation_its34) 						{ progression_its34 = progression_its34 + 1; ligne = 34;}
if (sens_its34 == 4 && progression_its34 > 12 ) 				{ occupation_its34 = false; occupation_its33 = true;  
train2_its33[0] = train2_its34[0];
train2_its33[1] = train2_its34[1];
train2_its33[2] = train2_its34[2];
train2_its33[3] = train2_its34[3];
train2_its33[4] = train2_its34[4];
train2_its33[5] = train2_its34[5];
train2_its33[6] = train2_its34[6];
sens_its33 =     sens_its34;
progression_its34 = 0;
its34 = 0; 
}

if ( sens_its34 == 4 && progression_its34 == 1 )  			{ document.getElementById("m2").src = "image/point/a1_rose.png";  document.getElementById("m1").src = "image/point/a1_rose.png"; document.getElementById("c30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 2 )  			{ document.getElementById("m1").src = "image/point/a1_rose.png";  document.getElementById("c30").src = "image/point/a1_rose.png"; document.getElementById("c29").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 3 )  			{ document.getElementById("c30").src = "image/point/a1_rose.png";  document.getElementById("c29").src = "image/point/a1_rose.png"; document.getElementById("c28").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 4 )  			{ document.getElementById("c29").src = "image/point/a1_rose.png";  document.getElementById("c28").src = "image/point/a1_rose.png"; document.getElementById("c27").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 5 )  			{ document.getElementById("c28").src = "image/point/a1_rose.png";  document.getElementById("c27").src = "image/point/a1_rose.png"; document.getElementById("c26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 6 )  			{ document.getElementById("c27").src = "image/point/a1_rose.png";  document.getElementById("c26").src = "image/point/a1_rose.png"; document.getElementById("c25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 7 )  			{ document.getElementById("c26").src = "image/point/a1_rose.png";  document.getElementById("c25").src = "image/point/a1_rose.png"; document.getElementById("c24").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 8 )  			{ document.getElementById("c25").src = "image/point/a1_rose.png";  document.getElementById("c24").src = "image/point/a1_rose.png"; document.getElementById("c23").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 9 )  			{ document.getElementById("c24").src = "image/point/a1_rose.png";  document.getElementById("c23").src = "image/point/a1_rose.png"; document.getElementById("c22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 10 )  			{ document.getElementById("c23").src = "image/point/a1_rose.png";  document.getElementById("c22").src = "image/point/a1_rose.png"; document.getElementById("c21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 11 )  			{ document.getElementById("c22").src = "image/point/a1_rose.png";  document.getElementById("c21").src = "image/point/a1_rose.png"; document.getElementById("c20").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its34 == 4 && progression_its34 == 12 )  			{ document.getElementById("c21").src = "image/point/a1_rose.png";  document.getElementById("c20").src = "image/point/a1_rose.png"; document.getElementById("c19").src = "image/point/a1_gauche_rose.png";}

// its33

if (sens_its33 == 4 && occupation_its33) 			{ progression_its33 = progression_its33 + 1;}
if (sens_its33 == 4 && progression_its33 > 4 ) 		{ occupation_its33 = false; occupation_its131 = true;   
train2_its131[0] = train2_its33[0];
train2_its131[1] = train2_its33[1];
train2_its131[2] = train2_its33[2];
train2_its131[3] = train2_its33[3];
train2_its131[4] = train2_its33[4];
train2_its131[5] = train2_its33[5];
train2_its131[6] = train2_its33[6];
sens_its131 =     sens_its33;
progression_its33 = 0;
its33 = 0; 
}

if ( sens_its33 == 4 && progression_its33 == 1 )  			{ document.getElementById("c20").src = "image/point/a1_rose.png";  document.getElementById("c19").src = "image/point/a1_rose.png"; document.getElementById("c18").src = "image/point/a1_gauche_rose.png";}
if ( sens_its33 == 4 && progression_its33 == 2 )  			{ document.getElementById("c19").src = "image/point/a1_rose.png";  document.getElementById("c18").src = "image/point/a1_rose.png"; document.getElementById("c17").src = "image/point/a1_gauche_rose.png";}
if ( sens_its33 == 4 && progression_its33 == 3 )  			{ document.getElementById("c18").src = "image/point/a1_rose.png";  document.getElementById("c17").src = "image/point/a1_rose.png"; document.getElementById("c16").src = "image/point/a1_gauche_rose.png";}
if ( sens_its33 == 4 && progression_its33 == 4 )  			{ document.getElementById("c17").src = "image/point/a1_rose.png";  document.getElementById("c16").src = "image/point/a1_rose.png"; document.getElementById("c15").src = "image/point/a1_gauche_rose.png";}

// its131

if (sens_its131 == 4 && occupation_its131 ) 								{ progression_its131 = progression_its131 + 1;  }
if (sens_its131 == 4 && aiguille78 == 0 &&  progression_its131 > 2 ) 		{ occupation_its131 = false; occupation_its32 = true;  
train2_its32[0] = train2_its131[0];
train2_its32[1] = train2_its131[1];
train2_its32[2] = train2_its131[2];
train2_its32[3] = train2_its131[3];
train2_its32[4] = train2_its131[4];
train2_its32[5] = train2_its131[5];
train2_its32[6] = train2_its131[6];
sens_its32 = sens_its131;
progression_its131 = 0;
its131 = 0; 
}

if (sens_its131 == 4 && aiguille78 == 0 && occupation_its131 ) {
if ( sens_its131 == 4 && progression_its131 == 1 )  			{ document.getElementById("c16").src = "image/point/a1_rose.png";  document.getElementById("c15").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_gauche_rose.png";}
if ( sens_its131 == 4 && progression_its131 == 2 )  			{ document.getElementById("c15").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_gauche_rose.png";}
}


if (sens_its131 == 4 && aiguille78 == 1 && aiguille87 == 1 && progression_its131 > 13 ) 		{ occupation_its131 = false; occupation_its70 = true;  
train2_its70[0] = train2_its131[0];
train2_its70[1] = train2_its131[1];
train2_its70[2] = train2_its131[2];
train2_its70[3] = train2_its131[3];
train2_its70[4] = train2_its131[4];
train2_its70[5] = train2_its131[5];
train2_its70[6] = train2_its131[6];
sens_its70 = sens_its131;
progression_its131 = 0;
its131 = 0; its78 = 0; its52 = 0; its87 = 0; its71 = 0; 
aiguille78 = 0; 
aiguille87 = 0; 
}

if (sens_its131 == 4 && aiguille78 == 1 && aiguille87 == 1 && occupation_its131 ) {
if ( sens_its131 == 4 && progression_its131 == 1 )  			{ document.getElementById("c16").src = "image/point/a1_rose.png";  document.getElementById("c15").src = "image/point/a1_rose.png"; document.getElementById("c14").src = "image/point/a1_gauche_rose.png";}
if ( sens_its131 == 4 && progression_its131 == 2 )  			{ document.getElementById("c15").src = "image/point/a1_rose.png";  document.getElementById("c14").src = "image/point/a1_rose.png"; document.getElementById("c13").src = "image/point/a1_gauche_rose.png";}
if ( sens_its131 == 4 && progression_its131 == 3 )  			{ document.getElementById("c14").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("f13").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 4 )  			{ document.getElementById("c13").src = "image/point/a1_rose.png";  document.getElementById("f13").src = "image/point/a1_rose.png"; document.getElementById("f14").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 5 )  			{ document.getElementById("f13").src = "image/point/a1_rose.png";  document.getElementById("f14").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 6 )  			{ document.getElementById("f14").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 7 )  			{ document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("f15").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 8 )  			{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("f15").src = "image/point/a1_rose.png"; document.getElementById("f16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 9 )  			{ document.getElementById("f15").src = "image/point/a1_rose.png";  document.getElementById("f16").src = "image/point/a1_rose.png"; document.getElementById("e8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 10 )  			{ document.getElementById("f16").src = "image/point/a1_rose.png";  document.getElementById("e8").src = "image/point/a1_rose.png"; document.getElementById("e7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 11 )  			{ document.getElementById("e8").src = "image/point/a1_rose.png";  document.getElementById("e7").src = "image/point/a1_rose.png"; document.getElementById("e6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 12 )  			{ document.getElementById("e7").src = "image/point/a1_rose.png";  document.getElementById("e6").src = "image/point/a1_rose.png"; document.getElementById("e5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its131 == 4 && progression_its131 == 13 )  			{ document.getElementById("e6").src = "image/point/a1_rose.png";  document.getElementById("e5").src = "image/point/a1_rose.png"; document.getElementById("e4").src = "image/point/a1_gauche_rose.png"; }
}



// its32

if (sens_its32 == 4 && occupation_its32) 			{ progression_its32 = progression_its32 + 1; }
if (sens_its32 == 4 && progression_its32 > 4 ) 		{ occupation_its32 = false; occupation_its31 = true;  
train2_its31[0] = train2_its32[0];
train2_its31[1] = train2_its32[1];
train2_its31[2] = train2_its32[2];
train2_its31[3] = train2_its32[3];
train2_its31[4] = train2_its32[4];
train2_its31[5] = train2_its32[5];
train2_its31[6] = train2_its32[6];
sens_its31 =     sens_its32;
progression_its32 = 0;
its32 = 0; 
}

if ( sens_its32 == 4 && progression_its32 == 1 )  			{ document.getElementById("c14").src = "image/point/a1_rose.png";  document.getElementById("c13").src = "image/point/a1_rose.png"; document.getElementById("c12").src = "image/point/a1_gauche_rose.png";}
if ( sens_its32 == 4 && progression_its32 == 2 )  			{ document.getElementById("c13").src = "image/point/a1_rose.png";  document.getElementById("c12").src = "image/point/a1_rose.png"; document.getElementById("c11").src = "image/point/a1_gauche_rose.png";}
if ( sens_its32 == 4 && progression_its32 == 3 )  			{ document.getElementById("c12").src = "image/point/a1_rose.png";  document.getElementById("c11").src = "image/point/a1_rose.png"; document.getElementById("c10").src = "image/point/a1_gauche_rose.png";}
if ( sens_its32 == 4 && progression_its32 == 4 )  			{ document.getElementById("c11").src = "image/point/a1_rose.png";  document.getElementById("c10").src = "image/point/a1_rose.png"; document.getElementById("c9").src = "image/point/a1_gauche_rose.png";}

// its31

if (sens_its31 == 4 && occupation_its31) 							{ progression_its31 = progression_its31 + 1;  }
if (sens_its31 == 4 && progression_its31 > 4 ) 						{ occupation_its31 = false; occupation_its30 = true;  
train2_its30[0] = train2_its31[0];
train2_its30[1] = train2_its31[1];
train2_its30[2] = train2_its31[2];
train2_its30[3] = train2_its31[3];
train2_its30[4] = train2_its31[4];
train2_its30[5] = train2_its31[5];
train2_its30[6] = train2_its31[6];
sens_its30 =     sens_its31;
progression_its31 = 0;
its31 = 0; 
}

if ( sens_its31 == 4 && progression_its31 == 1 )  			{ document.getElementById("c10").src = "image/point/a1_rose.png";  document.getElementById("c9").src = "image/point/a1_rose.png"; document.getElementById("c8").src = "image/point/a1_gauche_rose.png";}
if ( sens_its31 == 4 && progression_its31 == 2 )  			{ document.getElementById("c9").src = "image/point/a1_rose.png";  document.getElementById("c8").src = "image/point/a1_rose.png"; document.getElementById("c7").src = "image/point/a1_gauche_rose.png";}
if ( sens_its31 == 4 && progression_its31 == 3 )  			{ document.getElementById("c8").src = "image/point/a1_rose.png";  document.getElementById("c7").src = "image/point/a1_rose.png"; document.getElementById("c6").src = "image/point/a1_gauche_rose.png";}
if ( sens_its31 == 4 && progression_its31 == 4 )  			{ document.getElementById("c7").src = "image/point/a1_rose.png";  document.getElementById("c6").src = "image/point/a1_rose.png"; document.getElementById("c5").src = "image/point/a1_gauche_rose.png";}

// its30

if (sens_its30 == 4 && occupation_its30 ) 							{ progression_its30 = progression_its30 + 1; }
if (sens_its30 == 4 && progression_its30 > 6 ) 						{ occupation_its30 = false;  
progression_its30 = 0;
its30 = 0; document.getElementById("z2").src = "image/feux/rouge_2.png";
}
	
if ( sens_its30 == 4 && progression_its30 == 1 )  			{ document.getElementById("c6").src = "image/point/a1_rose.png";  document.getElementById("c5").src = "image/point/a1_rose.png"; document.getElementById("c4").src = "image/point/a1_gauche_rose.png";}
if ( sens_its30 == 4 && progression_its30 == 2 )  			{ document.getElementById("c5").src = "image/point/a1_rose.png";  document.getElementById("c4").src = "image/point/a1_rose.png"; document.getElementById("c3").src = "image/point/a1_gauche_rose.png";}
if ( sens_its30 == 4 && progression_its30 == 3 )  			{ document.getElementById("c4").src = "image/point/a1_rose.png";  document.getElementById("c3").src = "image/point/a1_rose.png"; document.getElementById("c2").src = "image/point/a1_gauche_rose.png";}
if ( sens_its30 == 4 && progression_its30 == 4 )  			{ document.getElementById("c3").src = "image/point/a1_rose.png";  document.getElementById("c2").src = "image/point/a1_rose.png"; document.getElementById("c1").src = "image/point/a1_gauche_rose.png";}
if ( sens_its30 == 4 && progression_its30 == 5 )  			{ document.getElementById("c2").src = "image/point/a1_rose.png";  document.getElementById("c1").src = "image/point/a1_rose.png"; document.getElementById("c1").src = "image/point/a1_gauche_rose.png";}
if ( sens_its30 == 4 && progression_its30 == 6 )  			{ document.getElementById("c1").src = "image/point/a1_rose.png";  document.getElementById("c1").src = "image/point/a1_rose.png"; document.getElementById("c1").src = "image/point/a1_gauche_rose.png";}

// its61

if (sens_its61 == 4 && occupation_its61) 							{ progression_its61 = progression_its61 + 1; } 
if (sens_its61 == 4 && its60 == 0 && progression_its61 > 4 ) 		{ progression_its61 = 4; }
if (sens_its61 == 4 && progression_its61 > 4 ) 						{ occupation_its61 = false; occupation_its60 = true;
train2_its60[0] = train2_its61[0];
train2_its60[1] = train2_its61[1];
train2_its60[2] = train2_its61[2];
train2_its60[3] = train2_its61[3];
train2_its60[4] = train2_its61[4];
train2_its60[5] = train2_its61[5];
train2_its60[6] = train2_its61[6];
sens_its60 = sens_its61;
progression_its61 = 0;
} 

if ( sens_its61 == 4 && progression_its61 == 1 )  			{ document.getElementById("d66").src = "image/point/a1_rose.png";  document.getElementById("d66").src = "image/point/a1_rose.png"; document.getElementById("d66").src = "image/point/a1_rose.png"; }
if ( sens_its61 == 4 && progression_its61 == 2 )  			{ document.getElementById("d65").src = "image/point/a1_rose.png";  document.getElementById("d66").src = "image/point/a1_rose.png"; document.getElementById("d66").src = "image/point/a1_rose.png"; }
if ( sens_its61 == 4 && progression_its61 == 3 )  			{ document.getElementById("d64").src = "image/point/a1_rose.png";  document.getElementById("d65").src = "image/point/a1_rose.png"; document.getElementById("d66").src = "image/point/a1_rose.png";  }
if ( sens_its61 == 4 && progression_its61 == 4 )  			{ document.getElementById("d63").src = "image/point/a1_gauche_rose.png";  document.getElementById("d64").src = "image/point/a1_rose.png"; document.getElementById("d65").src = "image/point/a1_rose.png"; }



// its60

if (sens_its60 == 4 && occupation_its60) 				{ progression_its60 = progression_its60 + 1; } 
if (sens_its60 == 4 && progression_its60 > 6 ) 			{ occupation_its60 = false; occupation_its59 = true;   
train2_its59[0] = train2_its60[0];
train2_its59[1] = train2_its60[1];
train2_its59[2] = train2_its60[2];
train2_its59[3] = train2_its60[3];
train2_its59[4] = train2_its60[4];
train2_its59[5] = train2_its60[5];
train2_its59[6] = train2_its60[6];
sens_its59 = sens_its60;
progression_its60 = 0;
its61 = 0; its60 = 0; 
} 

if ( sens_its60 == 4 && progression_its60 == 1 )  			{ document.getElementById("d64").src = "image/point/a1_rose.png";  document.getElementById("d63").src = "image/point/a1_rose.png"; document.getElementById("d62").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its60 == 4 && progression_its60 == 2 )  			{ document.getElementById("d63").src = "image/point/a1_rose.png";  document.getElementById("d62").src = "image/point/a1_rose.png"; document.getElementById("d61").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its60 == 4 && progression_its60 == 3 )  			{ document.getElementById("d62").src = "image/point/a1_rose.png";  document.getElementById("d61").src = "image/point/a1_rose.png"; document.getElementById("d60").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its60 == 4 && progression_its60 == 4 )  			{ document.getElementById("d61").src = "image/point/a1_rose.png";  document.getElementById("d60").src = "image/point/a1_rose.png"; document.getElementById("d59").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its60 == 4 && progression_its60 == 5 )  			{ document.getElementById("d60").src = "image/point/a1_rose.png";  document.getElementById("d59").src = "image/point/a1_rose.png"; document.getElementById("d58").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its60 == 4 && progression_its60 == 6 )  			{ document.getElementById("d59").src = "image/point/a1_rose.png";  document.getElementById("d58").src = "image/point/a1_rose.png"; document.getElementById("d57").src = "image/point/a1_gauche_rose.png"; }



// its59

if (sens_its59 == 4 && occupation_its59) 				{ progression_its59 = progression_its59 + 1; }
if (sens_its59 == 4 && progression_its59 > 2 ) 			{ occupation_its59 = false; occupation_its58 = true;  
train2_its58[0] = train2_its59[0];
train2_its58[1] = train2_its59[1];
train2_its58[2] = train2_its59[2];
train2_its58[3] = train2_its59[3];
train2_its58[4] = train2_its59[4];
train2_its58[5] = train2_its59[5];
train2_its58[6] = train2_its59[6];
sens_its58 = sens_its59;
progression_its59 = 0; 
its59 = 0; 
} 



if ( sens_its59 == 4 && progression_its59 == 1 )  			{ document.getElementById("d58").src = "image/point/a1_rose.png";  document.getElementById("d57").src = "image/point/a1_rose.png"; document.getElementById("d56").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its59 == 4 && progression_its59 == 2 )  			{ document.getElementById("d57").src = "image/point/a1_rose.png";  document.getElementById("d56").src = "image/point/a1_rose.png"; document.getElementById("d55").src = "image/point/a1_gauche_rose.png"; }


// its58

if (sens_its58 == 4 && occupation_its58) 								{ progression_its58 = progression_its58 + 1; }
if (sens_its58 == 4 && aiguille85 == 0 && progression_its58 > 5 ) 		{ occupation_its58 = false; occupation_its57 = true;  
train2_its57[0] = train2_its58[0];
train2_its57[1] = train2_its58[1];
train2_its57[2] = train2_its58[2];
train2_its57[3] = train2_its58[3];
train2_its57[4] = train2_its58[4];
train2_its57[5] = train2_its58[5];
train2_its57[6] = train2_its58[6];
sens_its57 = sens_its58;
progression_its58 = 0;
its58 = 0; 
}

if (sens_its58 == 4 && aiguille85 == 0 && occupation_its58 ) 		{
if ( sens_its58 == 4 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rose.png";  document.getElementById("d55").src = "image/point/a1_rose.png"; document.getElementById("d54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rose.png";  document.getElementById("d54").src = "image/point/a1_rose.png"; document.getElementById("d53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rose.png";  document.getElementById("d53").src = "image/point/a1_rose.png"; document.getElementById("d52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rose.png";  document.getElementById("d52").src = "image/point/a1_rose.png"; document.getElementById("d51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rose.png";  document.getElementById("d51").src = "image/point/a1_rose.png"; document.getElementById("d50").src = "image/point/a1_gauche_rose.png"; }
}


if (sens_its58 == 4 && aiguille85 == 1 && aiguille84 == 0 && progression_its58 > 9 ) 		{ occupation_its58 = false; occupation_its38 = true;  
train2_its38[0] = train2_its58[0];
train2_its38[1] = train2_its58[1];
train2_its38[2] = train2_its58[2];
train2_its38[3] = train2_its58[3];
train2_its38[4] = train2_its58[4];
train2_its38[5] = train2_its58[5];
train2_its38[6] = train2_its58[6];
sens_its38 = sens_its58;
progression_its58 = 0;
its58 = 0; its85 = 0; its39 = 0; 
aiguille85 = 0; 
}

if (sens_its58  == 4 && aiguille85 == 1 && aiguille84 == 0 && occupation_its58 ) 		{
if ( sens_its58 == 4 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rose.png";  document.getElementById("d55").src = "image/point/a1_rose.png"; document.getElementById("d54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rose.png";  document.getElementById("d54").src = "image/point/a1_rose.png"; document.getElementById("d53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rose.png";  document.getElementById("d53").src = "image/point/a1_rose.png"; document.getElementById("d52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rose.png";  document.getElementById("d52").src = "image/point/a1_rose.png"; document.getElementById("d51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rose.png";  document.getElementById("d51").src = "image/point/a1_rose.png"; document.getElementById("d50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 6 )  			{ document.getElementById("d51").src = "image/point/a1_rose.png";  document.getElementById("d50").src = "image/point/a1_rose.png"; document.getElementById("f4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 7 )  			{ document.getElementById("d50").src = "image/point/a1_rose.png";  document.getElementById("f4").src = "image/point/a1_rose.png"; document.getElementById("f3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 8 )  			{ document.getElementById("f4").src = "image/point/a1_rose.png";  document.getElementById("f3").src = "image/point/a1_rose.png"; document.getElementById("c48").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 9 )  			{ document.getElementById("f3").src = "image/point/a1_rose.png";  document.getElementById("c48").src = "image/point/a1_rose.png"; document.getElementById("c47").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its58 == 4 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 0 && progression_its58 > 17 ) 		{ occupation_its58 = false; occupation_its121 = true;  
train2_its121[0] = train2_its58[0];
train2_its121[1] = train2_its58[1];
train2_its121[2] = train2_its58[2];
train2_its121[3] = train2_its58[3];
train2_its121[4] = train2_its58[4];
train2_its121[5] = train2_its58[5];
train2_its121[6] = train2_its58[6];
sens_its121 = sens_its58;
progression_its58 = 0;
its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; 
aiguille85 = 0; 
aiguille84 = 0; 
}

if (sens_its58  == 4 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 0 && occupation_its58 ) 		{
if ( sens_its58 == 4 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rose.png";  document.getElementById("d55").src = "image/point/a1_rose.png"; document.getElementById("d54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rose.png";  document.getElementById("d54").src = "image/point/a1_rose.png"; document.getElementById("d53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rose.png";  document.getElementById("d53").src = "image/point/a1_rose.png"; document.getElementById("d52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rose.png";  document.getElementById("d52").src = "image/point/a1_rose.png"; document.getElementById("d51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rose.png";  document.getElementById("d51").src = "image/point/a1_rose.png"; document.getElementById("d50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 6 )  			{ document.getElementById("d51").src = "image/point/a1_rose.png";  document.getElementById("d50").src = "image/point/a1_rose.png"; document.getElementById("f4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 7 )  			{ document.getElementById("d50").src = "image/point/a1_rose.png";  document.getElementById("f4").src = "image/point/a1_rose.png"; document.getElementById("f3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 8 )  			{ document.getElementById("f4").src = "image/point/a1_rose.png";  document.getElementById("f3").src = "image/point/a1_rose.png"; document.getElementById("c48").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 9 )  			{ document.getElementById("f3").src = "image/point/a1_rose.png";  document.getElementById("c48").src = "image/point/a1_rose.png"; document.getElementById("c47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 10 )  			{ document.getElementById("c48").src = "image/point/a1_rose.png";  document.getElementById("c47").src = "image/point/a1_rose.png"; document.getElementById("f10").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 11 )  			{ document.getElementById("c47").src = "image/point/a1_rose.png";  document.getElementById("f10").src = "image/point/a1_rose.png"; document.getElementById("f9").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 12 )  			{ document.getElementById("f10").src = "image/point/a1_rose.png";  document.getElementById("f9").src = "image/point/a1_rose.png"; document.getElementById("b45").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 13 )  			{ document.getElementById("f9").src = "image/point/a1_rose.png";  document.getElementById("b45").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 14 )  			{ document.getElementById("b45").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_gauche_rose.png";  }
}


if (sens_its58 == 4 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 0 && progression_its58 > 21) 		{ occupation_its58 = false; occupation_its103 = true;  
train2_its103[0] = train2_its58[0];
train2_its103[1] = train2_its58[1];
train2_its103[2] = train2_its58[2];
train2_its103[3] = train2_its58[3];
train2_its103[4] = train2_its58[4];
train2_its103[5] = train2_its58[5];
train2_its103[6] = train2_its58[6];
sens_its103 = sens_its58;
progression_its58 = 0;
its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its83 = 0; its104 = 0; 
aiguille85 = 0; 
aiguille84 = 0; 
aiguille83 = 0; 
}

if (sens_its58  == 4 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 0 && occupation_its58 ) 		{
if ( sens_its58 == 4 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rose.png";  document.getElementById("d55").src = "image/point/a1_rose.png"; document.getElementById("d54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rose.png";  document.getElementById("d54").src = "image/point/a1_rose.png"; document.getElementById("d53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rose.png";  document.getElementById("d53").src = "image/point/a1_rose.png"; document.getElementById("d52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rose.png";  document.getElementById("d52").src = "image/point/a1_rose.png"; document.getElementById("d51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rose.png";  document.getElementById("d51").src = "image/point/a1_rose.png"; document.getElementById("d50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 6 )  			{ document.getElementById("d51").src = "image/point/a1_rose.png";  document.getElementById("d50").src = "image/point/a1_rose.png"; document.getElementById("f4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 7 )  			{ document.getElementById("d50").src = "image/point/a1_rose.png";  document.getElementById("f4").src = "image/point/a1_rose.png"; document.getElementById("f3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 8 )  			{ document.getElementById("f4").src = "image/point/a1_rose.png";  document.getElementById("f3").src = "image/point/a1_rose.png"; document.getElementById("c48").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 9 )  			{ document.getElementById("f3").src = "image/point/a1_rose.png";  document.getElementById("c48").src = "image/point/a1_rose.png"; document.getElementById("c47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 10 )  			{ document.getElementById("c48").src = "image/point/a1_rose.png";  document.getElementById("c47").src = "image/point/a1_rose.png"; document.getElementById("f10").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 11 )  			{ document.getElementById("c47").src = "image/point/a1_rose.png";  document.getElementById("f10").src = "image/point/a1_rose.png"; document.getElementById("f9").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 12 )  			{ document.getElementById("f10").src = "image/point/a1_rose.png";  document.getElementById("f9").src = "image/point/a1_rose.png"; document.getElementById("b45").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 13 )  			{ document.getElementById("f9").src = "image/point/a1_rose.png";  document.getElementById("b45").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 14 )  			{ document.getElementById("b45").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 18 )  			{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("f8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 19 )  			{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("f8").src = "image/point/a1_rose.png"; document.getElementById("f7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 20 )  			{ document.getElementById("f8").src = "image/point/a1_rose.png";  document.getElementById("f7").src = "image/point/a1_rose.png"; document.getElementById("x38").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 21 )  			{ document.getElementById("f7").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("x37").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its58 == 4 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 1 && progression_its58 > 27) 		{ occupation_its58 = false; occupation_its8 = true;  
train2_its8[0] = train2_its58[0];
train2_its8[1] = train2_its58[1];
train2_its8[2] = train2_its58[2];
train2_its8[3] = train2_its58[3];
train2_its8[4] = train2_its58[4];
train2_its8[5] = train2_its58[5];
train2_its8[6] = train2_its58[6];
sens_its8 = sens_its58;
progression_its58 = 0;
its58 = 0; its85 = 0; its39 = 0; its84 = 0; its19 = 0; its83 = 0; its104 = 0; its96 = 0; its4 = 0; 
aiguille85 = 0; 
aiguille84 = 0; 
aiguille83 = 0; 
aiguille96 = 0; 
}

if (sens_its58  == 4 && aiguille85 == 1 && aiguille84 == 1 && aiguille83 == 1 && aiguille96 == 1 && occupation_its58 ) 		{
if ( sens_its58 == 4 && progression_its58 == 1 )  			{ document.getElementById("d56").src = "image/point/a1_rose.png";  document.getElementById("d55").src = "image/point/a1_rose.png"; document.getElementById("d54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 2 )  			{ document.getElementById("d55").src = "image/point/a1_rose.png";  document.getElementById("d54").src = "image/point/a1_rose.png"; document.getElementById("d53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 3 )  			{ document.getElementById("d54").src = "image/point/a1_rose.png";  document.getElementById("d53").src = "image/point/a1_rose.png"; document.getElementById("d52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 4 )  			{ document.getElementById("d53").src = "image/point/a1_rose.png";  document.getElementById("d52").src = "image/point/a1_rose.png"; document.getElementById("d51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 5 )  			{ document.getElementById("d52").src = "image/point/a1_rose.png";  document.getElementById("d51").src = "image/point/a1_rose.png"; document.getElementById("d50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 6 )  			{ document.getElementById("d51").src = "image/point/a1_rose.png";  document.getElementById("d50").src = "image/point/a1_rose.png"; document.getElementById("f4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 7 )  			{ document.getElementById("d50").src = "image/point/a1_rose.png";  document.getElementById("f4").src = "image/point/a1_rose.png"; document.getElementById("f3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 8 )  			{ document.getElementById("f4").src = "image/point/a1_rose.png";  document.getElementById("f3").src = "image/point/a1_rose.png"; document.getElementById("c48").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 9 )  			{ document.getElementById("f3").src = "image/point/a1_rose.png";  document.getElementById("c48").src = "image/point/a1_rose.png"; document.getElementById("c47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 10 )  			{ document.getElementById("c48").src = "image/point/a1_rose.png";  document.getElementById("c47").src = "image/point/a1_rose.png"; document.getElementById("f10").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 11 )  			{ document.getElementById("c47").src = "image/point/a1_rose.png";  document.getElementById("f10").src = "image/point/a1_rose.png"; document.getElementById("f9").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 12 )  			{ document.getElementById("f10").src = "image/point/a1_rose.png";  document.getElementById("f9").src = "image/point/a1_rose.png"; document.getElementById("b45").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 13 )  			{ document.getElementById("f9").src = "image/point/a1_rose.png";  document.getElementById("b45").src = "image/point/a1_rose.png"; document.getElementById("b44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 14 )  			{ document.getElementById("b45").src = "image/point/a1_rose.png";  document.getElementById("b44").src = "image/point/a1_rose.png"; document.getElementById("b43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 15 )  			{ document.getElementById("b44").src = "image/point/a1_rose.png";  document.getElementById("b43").src = "image/point/a1_rose.png"; document.getElementById("b42").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 16 )  			{ document.getElementById("b43").src = "image/point/a1_rose.png";  document.getElementById("b42").src = "image/point/a1_rose.png"; document.getElementById("b41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 17 )  			{ document.getElementById("b42").src = "image/point/a1_rose.png";  document.getElementById("b41").src = "image/point/a1_rose.png"; document.getElementById("b40").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 18 )  			{ document.getElementById("b41").src = "image/point/a1_rose.png";  document.getElementById("b40").src = "image/point/a1_rose.png"; document.getElementById("f8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 19 )  			{ document.getElementById("b40").src = "image/point/a1_rose.png";  document.getElementById("f8").src = "image/point/a1_rose.png"; document.getElementById("f7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 20 )  			{ document.getElementById("f8").src = "image/point/a1_rose.png";  document.getElementById("f7").src = "image/point/a1_rose.png"; document.getElementById("x38").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 21 )  			{ document.getElementById("f7").src = "image/point/a1_rose.png";  document.getElementById("x38").src = "image/point/a1_rose.png"; document.getElementById("x37").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 22 )  			{ document.getElementById("x38").src = "image/point/a1_rose.png";  document.getElementById("x37").src = "image/point/a1_rose.png"; document.getElementById("f51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 23 )  			{ document.getElementById("x37").src = "image/point/a1_rose.png";  document.getElementById("f51").src = "image/point/a1_rose.png"; document.getElementById("f50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 24 )  			{ document.getElementById("f51").src = "image/point/a1_rose.png";  document.getElementById("f50").src = "image/point/a1_rose.png"; document.getElementById("a35").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its58 == 4 && progression_its58 == 25 )  			{ document.getElementById("f50").src = "image/point/a1_rose.png";  document.getElementById("a35").src = "image/point/a1_rose.png"; document.getElementById("a34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 26 )  			{ document.getElementById("a35").src = "image/point/a1_rose.png";  document.getElementById("a34").src = "image/point/a1_rose.png"; document.getElementById("a33").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its58 == 4 && progression_its58 == 27 )  			{ document.getElementById("a34").src = "image/point/a1_rose.png";  document.getElementById("a33").src = "image/point/a1_rose.png"; document.getElementById("a32").src = "image/point/a1_gauche_rose.png";  }
}


// its57

if (sens_its57 == 4 && occupation_its57) 								{ progression_its57 = progression_its57 + 1; }
if (sens_its57 == 4 && aiguille94 == 0 && progression_its57 > 13 ) 		{ occupation_its57 = false; occupation_its56 = true;  
train2_its56[0] = train2_its57[0];
train2_its56[1] = train2_its57[1];
train2_its56[2] = train2_its57[2];
train2_its56[3] = train2_its57[3];
train2_its56[4] = train2_its57[4];
train2_its56[5] = train2_its57[5];
train2_its56[6] = train2_its57[6];
sens_its56 = sens_its57;
progression_its57 = 0;
its57 = 0; 
}

if (sens_its57 == 4 && aiguille94 == 0 && occupation_its57) 		{
if ( sens_its57 == 4 && progression_its57 == 1 )  			{ document.getElementById("d51").src = "image/point/a1_rose.png";  document.getElementById("d50").src = "image/point/a1_rose.png"; document.getElementById("d49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 2 )  			{ document.getElementById("d50").src = "image/point/a1_rose.png";  document.getElementById("d49").src = "image/point/a1_rose.png"; document.getElementById("d48").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its57 == 4 && progression_its57 == 3 )  			{ document.getElementById("d49").src = "image/point/a1_rose.png";  document.getElementById("d48").src = "image/point/a1_rose.png"; document.getElementById("d47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 4 )  			{ document.getElementById("d48").src = "image/point/a1_rose.png";  document.getElementById("d47").src = "image/point/a1_rose.png"; document.getElementById("d46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 5 )  			{ document.getElementById("d47").src = "image/point/a1_rose.png";  document.getElementById("d46").src = "image/point/a1_rose.png"; document.getElementById("d45").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 6 )  			{ document.getElementById("d46").src = "image/point/a1_rose.png";  document.getElementById("d45").src = "image/point/a1_rose.png"; document.getElementById("d44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 7 )  			{ document.getElementById("d45").src = "image/point/a1_rose.png";  document.getElementById("d44").src = "image/point/a1_rose.png"; document.getElementById("d43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 8 )  			{ document.getElementById("d44").src = "image/point/a1_rose.png";  document.getElementById("d43").src = "image/point/a1_rose.png"; document.getElementById("d42").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its57 == 4 && progression_its57 == 9 )  			{ document.getElementById("d43").src = "image/point/a1_rose.png";  document.getElementById("d42").src = "image/point/a1_rose.png"; document.getElementById("d41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 10 )  			{ document.getElementById("d42").src = "image/point/a1_rose.png";  document.getElementById("d41").src = "image/point/a1_rose.png"; document.getElementById("d40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 11 )  			{ document.getElementById("d41").src = "image/point/a1_rose.png";  document.getElementById("d40").src = "image/point/a1_rose.png"; document.getElementById("d39").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 12 )  			{ document.getElementById("d40").src = "image/point/a1_rose.png";  document.getElementById("d39").src = "image/point/a1_rose.png"; document.getElementById("d38").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 13 )  			{ document.getElementById("d39").src = "image/point/a1_rose.png";  document.getElementById("d38").src = "image/point/a1_rose.png"; document.getElementById("d37").src = "image/point/a1_gauche_rose.png"; }
}


if (sens_its57 == 4 && aiguille94 == 1 && progression_its57 > 19 ) 		{ occupation_its57 = false; occupation_its120 = true;  
train2_its120[0] = train2_its57[0];
train2_its120[1] = train2_its57[1];
train2_its120[2] = train2_its57[2];
train2_its120[3] = train2_its57[3];
train2_its120[4] = train2_its57[4];
train2_its120[5] = train2_its57[5];
train2_its120[6] = train2_its57[6];
sens_its120 = sens_its57;
progression_its57 = 0;
its57 = 0; its94 = 0; its74 = 0; 
aiguille94 = 0; 
}

if (sens_its57 == 4 && aiguille94 == 1 && occupation_its57) 		{
if ( sens_its57 == 4 && progression_its57 == 1 )  			{ document.getElementById("d51").src = "image/point/a1_rose.png";  document.getElementById("d50").src = "image/point/a1_rose.png"; document.getElementById("d49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 2 )  			{ document.getElementById("d50").src = "image/point/a1_rose.png";  document.getElementById("d49").src = "image/point/a1_rose.png"; document.getElementById("d48").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its57 == 4 && progression_its57 == 3 )  			{ document.getElementById("d49").src = "image/point/a1_rose.png";  document.getElementById("d48").src = "image/point/a1_rose.png"; document.getElementById("d47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 4 )  			{ document.getElementById("d48").src = "image/point/a1_rose.png";  document.getElementById("d47").src = "image/point/a1_rose.png"; document.getElementById("d46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 5 )  			{ document.getElementById("d47").src = "image/point/a1_rose.png";  document.getElementById("d46").src = "image/point/a1_rose.png"; document.getElementById("d45").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 6 )  			{ document.getElementById("d46").src = "image/point/a1_rose.png";  document.getElementById("d45").src = "image/point/a1_rose.png"; document.getElementById("d44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 7 )  			{ document.getElementById("d45").src = "image/point/a1_rose.png";  document.getElementById("d44").src = "image/point/a1_rose.png"; document.getElementById("d43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 8 )  			{ document.getElementById("d44").src = "image/point/a1_rose.png";  document.getElementById("d43").src = "image/point/a1_rose.png"; document.getElementById("d42").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its57 == 4 && progression_its57 == 9 )  			{ document.getElementById("d43").src = "image/point/a1_rose.png";  document.getElementById("d42").src = "image/point/a1_rose.png"; document.getElementById("d41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 10 )  			{ document.getElementById("d42").src = "image/point/a1_rose.png";  document.getElementById("d41").src = "image/point/a1_rose.png"; document.getElementById("d40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 11 )  			{ document.getElementById("d41").src = "image/point/a1_rose.png";  document.getElementById("d40").src = "image/point/a1_rose.png"; document.getElementById("d39").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 12 )  			{ document.getElementById("d40").src = "image/point/a1_rose.png";  document.getElementById("d39").src = "image/point/a1_rose.png"; document.getElementById("d38").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 13 )  			{ document.getElementById("d39").src = "image/point/a1_rose.png";  document.getElementById("d38").src = "image/point/a1_rose.png"; document.getElementById("d37").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 14 )  			{ document.getElementById("d36").src = "image/point/a1_rose.png";  document.getElementById("d37").src = "image/point/a1_rose.png"; document.getElementById("f41").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its57 == 4 && progression_its57 == 15 )  			{ document.getElementById("d37").src = "image/point/a1_rose.png";  document.getElementById("f41").src = "image/point/a1_rose.png"; document.getElementById("f40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 16 )  			{ document.getElementById("f41").src = "image/point/a1_rose.png";  document.getElementById("f40").src = "image/point/a1_rose.png"; document.getElementById("e35").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 17 )  			{ document.getElementById("f40").src = "image/point/a1_rose.png";  document.getElementById("e35").src = "image/point/a1_rose.png"; document.getElementById("e34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 18 )  			{ document.getElementById("e33").src = "image/point/a1_rose.png";  document.getElementById("e34").src = "image/point/a1_rose.png"; document.getElementById("e33").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its57 == 4 && progression_its57 == 19 )  			{ document.getElementById("e32").src = "image/point/a1_rose.png";  document.getElementById("e33").src = "image/point/a1_rose.png"; document.getElementById("e32").src = "image/point/a1_gauche_rose.png"; }
}

// its56

if (sens_its56 == 4 && occupation_its56) 					{ progression_its56 = progression_its56 + 1; }
if (sens_its56 == 4 && progression_its56 > 5  ) 			{ occupation_its56 = false; occupation_its119 = true;  
train2_its119[0] = train2_its56[0];
train2_its119[1] = train2_its56[1];
train2_its119[2] = train2_its56[2];
train2_its119[3] = train2_its56[3];
train2_its119[4] = train2_its56[4];
train2_its119[5] = train2_its56[5];
train2_its119[6] = train2_its56[6];
sens_its119 = sens_its56;
progression_its56 = 0;
its56 = 0; 
}

if ( sens_its56 == 4 && progression_its56 == 1 )  			{ document.getElementById("d38").src = "image/point/a1_rose.png";  document.getElementById("d37").src = "image/point/a1_rose.png"; document.getElementById("d36").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its56 == 4 && progression_its56 == 2 )  			{ document.getElementById("d37").src = "image/point/a1_rose.png";  document.getElementById("d36").src = "image/point/a1_rose.png"; document.getElementById("d35").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its56 == 4 && progression_its56 == 3 )  			{ document.getElementById("d36").src = "image/point/a1_rose.png";  document.getElementById("d35").src = "image/point/a1_rose.png"; document.getElementById("d34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its56 == 4 && progression_its56 == 4 )  			{ document.getElementById("d35").src = "image/point/a1_rose.png";  document.getElementById("d34").src = "image/point/a1_rose.png"; document.getElementById("d33").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its56 == 4 && progression_its56 == 5 )  			{ document.getElementById("d34").src = "image/point/a1_rose.png";  document.getElementById("d33").src = "image/point/a1_rose.png"; document.getElementById("d32").src = "image/point/a1_gauche_rose.png"; }

// its119

if (sens_its119 == 4 && occupation_its119 ) 			{ progression_its119 = progression_its119 + 1; }
if (sens_its119 == 4 && progression_its119 > 8 ) 		{ occupation_its119 = false; occupation_its55 = true;  
train2_its55[0] = train2_its119[0];
train2_its55[1] = train2_its119[1];
train2_its55[2] = train2_its119[2];
train2_its55[3] = train2_its119[3];
train2_its55[4] = train2_its119[4];
train2_its55[5] = train2_its119[5];
train2_its55[6] = train2_its119[6];
sens_its55 = sens_its119;
progression_its119 = 0;

}

if ( sens_its119 == 4 && progression_its119 == 1 )  			{ document.getElementById("d33").src = "image/point/a1_rose.png";  document.getElementById("d32").src = "image/point/a1_rose.png"; document.getElementById("q8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its119 == 4 && progression_its119 == 2 )  			{ document.getElementById("d32").src = "image/point/a1_rose.png";  document.getElementById("q8").src = "image/point/a1_rose.png"; document.getElementById("q7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its119 == 4 && progression_its119 == 3 )  			{ document.getElementById("q8").src = "image/point/a1_rose.png";  document.getElementById("q7").src = "image/point/a1_rose.png"; document.getElementById("q6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its119 == 4 && progression_its119 == 4 )  			{ document.getElementById("q7").src = "image/point/a1_rose.png";  document.getElementById("q6").src = "image/point/a1_rose.png"; document.getElementById("q5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its119 == 4 && progression_its119 == 5 )  			{ document.getElementById("q6").src = "image/point/a1_rose.png";  document.getElementById("q5").src = "image/point/a1_rose.png"; document.getElementById("q4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its119 == 4 && progression_its119 == 6 )  			{ document.getElementById("q5").src = "image/point/a1_rose.png";  document.getElementById("q4").src = "image/point/a1_rose.png"; document.getElementById("q3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its119 == 4 && progression_its119 == 7 )  			{ document.getElementById("q4").src = "image/point/a1_rose.png";  document.getElementById("q3").src = "image/point/a1_rose.png"; document.getElementById("q2").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its119 == 4 && progression_its119 == 8 )  			{ document.getElementById("q3").src = "image/point/a1_rose.png";  document.getElementById("q2").src = "image/point/a1_rose.png"; document.getElementById("q1").src = "image/point/a1_gauche_rose.png"; }


// its55

if (sens_its55 == 4 && occupation_its55) 								{ progression_its55 = progression_its55 + 1; }
if (sens_its55 == 4 && progression_its55 > 8 ) 							{ occupation_its55 = false; occupation_its54 = true;  
train2_its54[0] = train2_its55[0];
train2_its54[1] = train2_its55[1];
train2_its54[2] = train2_its55[2];
train2_its54[3] = train2_its55[3];
train2_its54[4] = train2_its55[4];
train2_its54[5] = train2_its55[5];
train2_its54[6] = train2_its55[6];
sens_its54 = sens_its55;
progression_its55 = 0;
its55 = 0; 
}

if ( sens_its55 == 4 && progression_its55 == 1 )  			{ document.getElementById("q2").src = "image/point/a1_rose.png";  document.getElementById("q1").src = "image/point/a1_rose.png"; document.getElementById("d30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its55 == 4 && progression_its55 == 2 )  			{ document.getElementById("q1").src = "image/point/a1_rose.png";  document.getElementById("d30").src = "image/point/a1_rose.png"; document.getElementById("d29").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its55 == 4 && progression_its55 == 3 )  			{ document.getElementById("d30").src = "image/point/a1_rose.png";  document.getElementById("d29").src = "image/point/a1_rose.png"; document.getElementById("d28").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its55 == 4 && progression_its55 == 4 )  			{ document.getElementById("d29").src = "image/point/a1_rose.png";  document.getElementById("d28").src = "image/point/a1_rose.png"; document.getElementById("d27").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its55 == 4 && progression_its55 == 5 )  			{ document.getElementById("d28").src = "image/point/a1_rose.png";  document.getElementById("d27").src = "image/point/a1_rose.png"; document.getElementById("d26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its55 == 4 && progression_its55 == 6 )  			{ document.getElementById("d27").src = "image/point/a1_rose.png";  document.getElementById("d26").src = "image/point/a1_rose.png"; document.getElementById("d25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its55 == 4 && progression_its55 == 7 )  			{ document.getElementById("d26").src = "image/point/a1_rose.png";  document.getElementById("d25").src = "image/point/a1_rose.png"; document.getElementById("d24").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its55 == 4 && progression_its55 == 8 )  			{ document.getElementById("d25").src = "image/point/a1_rose.png";  document.getElementById("d24").src = "image/point/a1_rose.png"; document.getElementById("d23").src = "image/point/a1_gauche_rose.png"; }


// its54

if (sens_its54 == 4 && occupation_its54) 								{ progression_its54 = progression_its54 + 1; }
if (sens_its54 == 4 && aiguille81 == 0 && progression_its54 > 4 ) 		{ occupation_its54 = false; occupation_its53 = true;  
train2_its53[0] = train2_its54[0];
train2_its53[1] = train2_its54[1];
train2_its53[2] = train2_its54[2];
train2_its53[3] = train2_its54[3];
train2_its53[4] = train2_its54[4];
train2_its53[5] = train2_its54[5];
train2_its53[6] = train2_its54[6];
sens_its53 = sens_its54;
progression_its54 = 0;
its54 = 0; 
}

if (sens_its54 == 4 && aiguille81 == 0 && occupation_its54) {
if ( sens_its54 == 4 && progression_its54 == 1 )  			{ document.getElementById("d24").src = "image/point/a1_rose.png";  document.getElementById("d23").src = "image/point/a1_rose.png"; document.getElementById("d22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 2 )  			{ document.getElementById("d23").src = "image/point/a1_rose.png";  document.getElementById("d22").src = "image/point/a1_rose.png"; document.getElementById("d21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 3 )  			{ document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_rose.png"; document.getElementById("d20").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 4 )  			{ document.getElementById("d21").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_rose.png"; document.getElementById("d19").src = "image/point/a1_gauche_rose.png";}
}

if (sens_its54 == 4 && aiguille81 == 1 && aiguille78 == 0 && aiguille79 == 0 && progression_its54 > 10 ) 		{ occupation_its54 = false; occupation_its131 = true;  
train2_its131[0] = train2_its54[0];
train2_its131[1] = train2_its54[1];
train2_its131[2] = train2_its54[2];
train2_its131[3] = train2_its54[3];
train2_its131[4] = train2_its54[4];
train2_its131[5] = train2_its54[5];
train2_its131[6] = train2_its54[6];
sens_its131 = sens_its54;
progression_its54 = 0;
its54 = 0; its81 = 0; its33 = 0; 
aiguille81 = 0; 
}

if (sens_its54 == 4 && aiguille81 == 1 && aiguille78 == 0 && aiguille79 == 0 && occupation_its54) {
if ( sens_its54 == 4 && progression_its54 == 1 )  			{ document.getElementById("d24").src = "image/point/a1_rose.png";  document.getElementById("d23").src = "image/point/a1_rose.png"; document.getElementById("d22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 2 )  			{ document.getElementById("d23").src = "image/point/a1_rose.png";  document.getElementById("d22").src = "image/point/a1_rose.png"; document.getElementById("d21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 3 )  			{ document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_rose.png"; document.getElementById("d20").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 4 )  			{ document.getElementById("d21").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_rose.png"; document.getElementById("d19").src = "image/point/a1_gauche_rose.png";}
if ( sens_its54 == 4 && progression_its54 == 5 )  			{ document.getElementById("d20").src = "image/point/a1_rose.png";  document.getElementById("d19").src = "image/point/a1_rose.png"; document.getElementById("f22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 6 )  			{ document.getElementById("d19").src = "image/point/a1_rose.png";  document.getElementById("f22").src = "image/point/a1_rose.png"; document.getElementById("f21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 7 )  			{ document.getElementById("f22").src = "image/point/a1_rose.png";  document.getElementById("f21").src = "image/point/a1_rose.png"; document.getElementById("c18").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 8 )  			{ document.getElementById("f21").src = "image/point/a1_rose.png";  document.getElementById("c18").src = "image/point/a1_rose.png"; document.getElementById("c17").src = "image/point/a1_gauche_rose.png";}
if ( sens_its54 == 4 && progression_its54 == 9 )  			{ document.getElementById("c18").src = "image/point/a1_rose.png";  document.getElementById("c17").src = "image/point/a1_rose.png"; document.getElementById("c16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its54 == 4 && progression_its54 == 10 )  			{ document.getElementById("c17").src = "image/point/a1_rose.png";  document.getElementById("c16").src = "image/point/a1_rose.png"; document.getElementById("c15").src = "image/point/a1_gauche_rose.png"; }
}


// its53

if (sens_its53 == 4 && occupation_its53) 							{ progression_its53 = progression_its53 + 1; }
if (sens_its53 == 4 && progression_its53 > 7 ) 						{ occupation_its53 = false; occupation_its52 = true;  
train2_its52[0] = train2_its53[0];
train2_its52[1] = train2_its53[1];
train2_its52[2] = train2_its53[2];
train2_its52[3] = train2_its53[3];
train2_its52[4] = train2_its53[4];
train2_its52[5] = train2_its53[5];
train2_its52[6] = train2_its53[6];
sens_its52 =     sens_its53;
progression_its53 = 0;
its53 = 0; 
}

if ( sens_its53 == 4 && progression_its53 == 1 )  			{ document.getElementById("d20").src = "image/point/a1_rose.png";  document.getElementById("d19").src = "image/point/a1_rose.png"; document.getElementById("d18").src = "image/point/a1_gauche_rose.png";}
if ( sens_its53 == 4 && progression_its53 == 2 )  			{ document.getElementById("d19").src = "image/point/a1_rose.png";  document.getElementById("d18").src = "image/point/a1_rose.png"; document.getElementById("d17").src = "image/point/a1_gauche_rose.png";}
if ( sens_its53 == 4 && progression_its53 == 3 )  			{ document.getElementById("d18").src = "image/point/a1_rose.png";  document.getElementById("d17").src = "image/point/a1_rose.png"; document.getElementById("d16").src = "image/point/a1_gauche_rose.png";}
if ( sens_its53 == 4 && progression_its53 == 4 )  			{ document.getElementById("d17").src = "image/point/a1_rose.png";  document.getElementById("d16").src = "image/point/a1_rose.png"; document.getElementById("d15").src = "image/point/a1_gauche_rose.png";}
if ( sens_its53 == 4 && progression_its53 == 5 )  			{ document.getElementById("d16").src = "image/point/a1_rose.png";  document.getElementById("d15").src = "image/point/a1_rose.png"; document.getElementById("d14").src = "image/point/a1_gauche_rose.png";}
if ( sens_its53 == 4 && progression_its53 == 6 )  			{ document.getElementById("d15").src = "image/point/a1_rose.png";  document.getElementById("d14").src = "image/point/a1_rose.png"; document.getElementById("d13").src = "image/point/a1_gauche_rose.png";}
if ( sens_its53 == 4 && progression_its53 == 7 )  			{ document.getElementById("d14").src = "image/point/a1_rose.png";  document.getElementById("d13").src = "image/point/a1_rose.png"; document.getElementById("d12").src = "image/point/a1_gauche_rose.png";}



// its52

if (sens_its52 == 4 && occupation_its52) 							{ progression_its52 = progression_its52 + 1; }
if (sens_its52 == 4 && aiguille87 == 0 && progression_its52 > 2 ) 	{ occupation_its52 = false; occupation_its51 = true;  
train2_its51[0] = train2_its52[0];
train2_its51[1] = train2_its52[1];
train2_its51[2] = train2_its52[2];
train2_its51[3] = train2_its52[3];
train2_its51[4] = train2_its52[4];
train2_its51[5] = train2_its52[5];
train2_its51[6] = train2_its52[6];
sens_its51 =     sens_its52;
progression_its52 = 0;
its52 = 0; 
}

if (sens_its52 == 4 && aiguille87 == 0 && occupation_its52 ) 	{ 
if ( sens_its52 == 4 && progression_its52 == 1 )  			{ document.getElementById("d13").src = "image/point/a1_rose.png";  document.getElementById("d12").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_gauche_rose.png";}
if ( sens_its52 == 4 && progression_its52 == 2 )  			{ document.getElementById("d12").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_gauche_rose.png";}
}

if (sens_its52 == 4 && aiguille87 == 1 && progression_its52 > 9 ) 	{ occupation_its52 = false; occupation_its70 = true;  
train2_its70[0] = train2_its52[0];
train2_its70[1] = train2_its52[1];
train2_its70[2] = train2_its52[2];
train2_its70[3] = train2_its52[3];
train2_its70[4] = train2_its52[4];
train2_its70[5] = train2_its52[5];
train2_its70[6] = train2_its52[6];
sens_its70 =     sens_its52;
progression_its52 = 0;
its52 = 0; its87 = 0; its71 = 0; 
aiguille87 = 0; 
}

if (sens_its52 == 4 && aiguille87 == 1 && occupation_its52 ) 	{ 
if ( sens_its52 == 4 && progression_its52 == 1 )  			{ document.getElementById("d13").src = "image/point/a1_rose.png";  document.getElementById("d12").src = "image/point/a1_rose.png"; document.getElementById("d11").src = "image/point/a1_gauche_rose.png";}
if ( sens_its52 == 4 && progression_its52 == 2 )  			{ document.getElementById("d12").src = "image/point/a1_rose.png";  document.getElementById("d11").src = "image/point/a1_rose.png"; document.getElementById("d10").src = "image/point/a1_gauche_rose.png";}
if ( sens_its52 == 4 && progression_its52 == 3 )  			{ document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("f15").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its52 == 4 && progression_its52 == 4 )  			{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("f15").src = "image/point/a1_rose.png"; document.getElementById("f16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its52 == 4 && progression_its52 == 5 )  			{ document.getElementById("f15").src = "image/point/a1_rose.png";  document.getElementById("f16").src = "image/point/a1_rose.png"; document.getElementById("e8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its52 == 4 && progression_its52 == 6 )  			{ document.getElementById("f16").src = "image/point/a1_rose.png";  document.getElementById("e8").src = "image/point/a1_rose.png"; document.getElementById("e7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its52 == 4 && progression_its52 == 7 )  			{ document.getElementById("e8").src = "image/point/a1_rose.png";  document.getElementById("e7").src = "image/point/a1_rose.png"; document.getElementById("e6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its52 == 4 && progression_its52 == 8 )  			{ document.getElementById("e7").src = "image/point/a1_rose.png";  document.getElementById("e6").src = "image/point/a1_rose.png"; document.getElementById("e5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its52 == 4 && progression_its52 == 9 )  			{ document.getElementById("e6").src = "image/point/a1_rose.png";  document.getElementById("e5").src = "image/point/a1_rose.png"; document.getElementById("e4").src = "image/point/a1_gauche_rose.png"; }
}


// its51

if (sens_its51 == 4 && occupation_its51) 							{ progression_its51 = progression_its51 + 1;  }
if (sens_its51 == 4 && progression_its51 > 5 ) 						{ occupation_its51 = false; occupation_its50 = true;  
train2_its50[0] = train2_its51[0];
train2_its50[1] = train2_its51[1];
train2_its50[2] = train2_its51[2];
train2_its50[3] = train2_its51[3];
train2_its50[4] = train2_its51[4];
train2_its50[5] = train2_its51[5];
train2_its50[6] = train2_its51[6];
sens_its50 =     sens_its51;
progression_its51 = 0;
its51 = 0; 
}

if ( sens_its51 == 4 && progression_its51 == 1 )  			{ document.getElementById("d11").src = "image/point/a1_rose.png";  document.getElementById("d10").src = "image/point/a1_rose.png"; document.getElementById("d9").src = "image/point/a1_gauche_rose.png";}
if ( sens_its51 == 4 && progression_its51 == 2 )  			{ document.getElementById("d10").src = "image/point/a1_rose.png";  document.getElementById("d9").src = "image/point/a1_rose.png"; document.getElementById("d8").src = "image/point/a1_gauche_rose.png";}
if ( sens_its51 == 4 && progression_its51 == 3 )  			{ document.getElementById("d9").src = "image/point/a1_rose.png";  document.getElementById("d8").src = "image/point/a1_rose.png"; document.getElementById("d7").src = "image/point/a1_gauche_rose.png";}
if ( sens_its51 == 4 && progression_its51 == 4 )  			{ document.getElementById("d8").src = "image/point/a1_rose.png";  document.getElementById("d7").src = "image/point/a1_rose.png"; document.getElementById("d6").src = "image/point/a1_gauche_rose.png";}
if ( sens_its51 == 4 && progression_its51 == 5 )  			{ document.getElementById("d7").src = "image/point/a1_rose.png";  document.getElementById("d6").src = "image/point/a1_rose.png"; document.getElementById("d5").src = "image/point/a1_gauche_rose.png";}

// its77

if (sens_its77 == 4 && occupation_its77) 							{ progression_its77 = progression_its77 + 1; } 
if (sens_its77 == 4 && its76 == 0 && progression_its77 > 4 ) 		{ progression_its77 = 4; }
if (sens_its77 == 4 && progression_its77 > 4 ) 						{ occupation_its77 = false; occupation_its76 = true;
train2_its76[0] = train2_its77[0];
train2_its76[1] = train2_its77[1];
train2_its76[2] = train2_its77[2];
train2_its76[3] = train2_its77[3];
train2_its76[4] = train2_its77[4];
train2_its76[5] = train2_its77[5];
train2_its76[6] = train2_its77[6];
sens_its76 = sens_its77;
progression_its77 = 0;

} 

if ( sens_its77 == 4 && progression_its77 == 1 )  			{ document.getElementById("e66").src = "image/point/a1_rose.png";  document.getElementById("e66").src = "image/point/a1_rose.png"; document.getElementById("e66").src = "image/point/a1_rose.png"; }
if ( sens_its77 == 4 && progression_its77 == 2 )  			{ document.getElementById("e65").src = "image/point/a1_rose.png";  document.getElementById("e66").src = "image/point/a1_rose.png"; document.getElementById("e66").src = "image/point/a1_rose.png"; }
if ( sens_its77 == 4 && progression_its77 == 3 )  			{ document.getElementById("e64").src = "image/point/a1_rose.png";  document.getElementById("e65").src = "image/point/a1_rose.png"; document.getElementById("e66").src = "image/point/a1_rose.png";  }
if ( sens_its77 == 4 && progression_its77 == 4 )  			{ document.getElementById("e63").src = "image/point/a1_gauche_rose.png";  document.getElementById("e64").src = "image/point/a1_rose.png"; document.getElementById("e65").src = "image/point/a1_rose.png"; }


// its76

if (sens_its76 == 4 && occupation_its76) 										{ progression_its76 = progression_its76 + 1; } 
if (sens_its76 == 4 && aiguille86 == 0 && progression_its76 > 5 ) 				{ occupation_its76 = false; occupation_its75 = true;
train2_its75[0] = train2_its76[0];
train2_its75[1] = train2_its76[1];
train2_its75[2] = train2_its76[2];
train2_its75[3] = train2_its76[3];
train2_its75[4] = train2_its76[4];
train2_its75[5] = train2_its76[5];
train2_its75[6] = train2_its76[6];
sens_its75 = sens_its76;
progression_its76 = 0;
its77 = 0; its76 = 0; 
} 

if (sens_its76 == 4 && aiguille86 == 0 && occupation_its76 ) 				{
if ( sens_its76 == 4 && progression_its76 == 1 )  			{ document.getElementById("e64").src = "image/point/a1_rose.png";  document.getElementById("e63").src = "image/point/a1_rose.png"; document.getElementById("e62").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its76 == 4 && progression_its76 == 2 )  			{ document.getElementById("e63").src = "image/point/a1_rose.png";  document.getElementById("e62").src = "image/point/a1_rose.png"; document.getElementById("e61").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its76 == 4 && progression_its76 == 3 )  			{ document.getElementById("e62").src = "image/point/a1_rose.png";  document.getElementById("e61").src = "image/point/a1_rose.png"; document.getElementById("e60").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its76 == 4 && progression_its76 == 4 )  			{ document.getElementById("e61").src = "image/point/a1_rose.png";  document.getElementById("e60").src = "image/point/a1_rose.png"; document.getElementById("e59").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its76 == 4 && progression_its76 == 5 )  			{ document.getElementById("e60").src = "image/point/a1_rose.png";  document.getElementById("e59").src = "image/point/a1_rose.png"; document.getElementById("e58").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its76 == 4 && aiguille86 == 1 && progression_its76 > 9 ) 				{ occupation_its76 = false; occupation_its58 = true;
train2_its58[0] = train2_its76[0];
train2_its58[1] = train2_its76[1];
train2_its58[2] = train2_its76[2];
train2_its58[3] = train2_its76[3];
train2_its58[4] = train2_its76[4];
train2_its58[5] = train2_its76[5];
train2_its58[6] = train2_its76[6];
sens_its58 = sens_its76;
progression_its76 = 0;
its77 = 0; its76 = 0; its86 = 0; its59 = 0; 
aiguille86 = 0; 
} 

if (sens_its76 == 4 && aiguille86 == 1 && occupation_its76 ) 				{
if ( sens_its76 == 4 && progression_its76 == 1 )  			{ document.getElementById("e64").src = "image/point/a1_rose.png";  document.getElementById("e63").src = "image/point/a1_rose.png"; document.getElementById("e62").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its76 == 4 && progression_its76 == 2 )  			{ document.getElementById("e63").src = "image/point/a1_rose.png";  document.getElementById("e62").src = "image/point/a1_rose.png"; document.getElementById("e61").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its76 == 4 && progression_its76 == 3 )  			{ document.getElementById("e62").src = "image/point/a1_rose.png";  document.getElementById("e61").src = "image/point/a1_rose.png"; document.getElementById("e60").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its76 == 4 && progression_its76 == 4 )  			{ document.getElementById("e61").src = "image/point/a1_rose.png";  document.getElementById("e60").src = "image/point/a1_rose.png"; document.getElementById("e59").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its76 == 4 && progression_its76 == 5 )  			{ document.getElementById("e60").src = "image/point/a1_rose.png";  document.getElementById("e59").src = "image/point/a1_rose.png"; document.getElementById("e58").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its76 == 4 && progression_its76 == 6 )  			{ document.getElementById("e59").src = "image/point/a1_rose.png";  document.getElementById("e58").src = "image/point/a1_rose.png"; document.getElementById("f6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its76 == 4 && progression_its76 == 7 )  			{ document.getElementById("e58").src = "image/point/a1_rose.png";  document.getElementById("f6").src = "image/point/a1_rose.png"; document.getElementById("f5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its76 == 4 && progression_its76 == 8 )  			{ document.getElementById("f6").src = "image/point/a1_rose.png";  document.getElementById("f5").src = "image/point/a1_rose.png"; document.getElementById("d56").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its76 == 4 && progression_its76 == 9 )  			{ document.getElementById("f5").src = "image/point/a1_rose.png";  document.getElementById("d56").src = "image/point/a1_rose.png"; document.getElementById("d55").src = "image/point/a1_gauche_rose.png"; }
}





// its75

if (sens_its75 == 4 && occupation_its75) 				{ progression_its75 = progression_its75 + 1;}  
if (sens_its75 == 4 && progression_its75 > 22 ) 		{ occupation_its75 = false; occupation_its74 = true;  
train2_its74[0] = train2_its75[0];
train2_its74[1] = train2_its75[1];
train2_its74[2] = train2_its75[2];
train2_its74[3] = train2_its75[3];
train2_its74[4] = train2_its75[4];
train2_its74[5] = train2_its75[5];
train2_its74[6] = train2_its75[6];
sens_its74 = sens_its75;
progression_its75 = 0;
its75 = 0; 
}

if ( sens_its75 == 4 && progression_its75 == 1 )  			{ document.getElementById("e59").src = "image/point/a1_rose.png";  document.getElementById("e58").src = "image/point/a1_rose.png"; document.getElementById("e57").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 2 )  			{ document.getElementById("e58").src = "image/point/a1_rose.png";  document.getElementById("e57").src = "image/point/a1_rose.png"; document.getElementById("e56").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its75 == 4 && progression_its75 == 3 )  			{ document.getElementById("e57").src = "image/point/a1_rose.png";  document.getElementById("e56").src = "image/point/a1_rose.png"; document.getElementById("e55").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 4 )  			{ document.getElementById("e56").src = "image/point/a1_rose.png";  document.getElementById("e55").src = "image/point/a1_rose.png"; document.getElementById("e54").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 5 )  			{ document.getElementById("e55").src = "image/point/a1_rose.png";  document.getElementById("e54").src = "image/point/a1_rose.png"; document.getElementById("e53").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 6 )  			{ document.getElementById("e54").src = "image/point/a1_rose.png";  document.getElementById("e53").src = "image/point/a1_rose.png"; document.getElementById("e52").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its75 == 4 && progression_its75 == 7 )  			{ document.getElementById("e53").src = "image/point/a1_rose.png";  document.getElementById("e52").src = "image/point/a1_rose.png"; document.getElementById("e51").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 8 )  			{ document.getElementById("e52").src = "image/point/a1_rose.png";  document.getElementById("e51").src = "image/point/a1_rose.png"; document.getElementById("e50").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 9 )  			{ document.getElementById("e51").src = "image/point/a1_rose.png";  document.getElementById("e50").src = "image/point/a1_rose.png"; document.getElementById("e49").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 10 )  			{ document.getElementById("e50").src = "image/point/a1_rose.png";  document.getElementById("e49").src = "image/point/a1_rose.png"; document.getElementById("e48").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its75 == 4 && progression_its75 == 11 )  			{ document.getElementById("e49").src = "image/point/a1_rose.png";  document.getElementById("e48").src = "image/point/a1_rose.png"; document.getElementById("e47").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 12 )  			{ document.getElementById("e48").src = "image/point/a1_rose.png";  document.getElementById("e47").src = "image/point/a1_rose.png"; document.getElementById("e46").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 13 )  			{ document.getElementById("e47").src = "image/point/a1_rose.png";  document.getElementById("e46").src = "image/point/a1_rose.png"; document.getElementById("e45").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 14 )  			{ document.getElementById("e46").src = "image/point/a1_rose.png";  document.getElementById("e45").src = "image/point/a1_rose.png"; document.getElementById("e44").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 15 )  			{ document.getElementById("e45").src = "image/point/a1_rose.png";  document.getElementById("e44").src = "image/point/a1_rose.png"; document.getElementById("e43").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 16 )  			{ document.getElementById("e44").src = "image/point/a1_rose.png";  document.getElementById("e43").src = "image/point/a1_rose.png"; document.getElementById("e42").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its75 == 4 && progression_its75 == 17 )  			{ document.getElementById("e43").src = "image/point/a1_rose.png";  document.getElementById("e42").src = "image/point/a1_rose.png"; document.getElementById("e41").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 18 )  			{ document.getElementById("e42").src = "image/point/a1_rose.png";  document.getElementById("e41").src = "image/point/a1_rose.png"; document.getElementById("e40").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 19 )  			{ document.getElementById("e41").src = "image/point/a1_rose.png";  document.getElementById("e40").src = "image/point/a1_rose.png"; document.getElementById("e39").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 20 )  			{ document.getElementById("e40").src = "image/point/a1_rose.png";  document.getElementById("e39").src = "image/point/a1_rose.png"; document.getElementById("e38").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 21 )  			{ document.getElementById("e39").src = "image/point/a1_rose.png";  document.getElementById("e38").src = "image/point/a1_rose.png"; document.getElementById("e37").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its75 == 4 && progression_its75 == 22 )  			{ document.getElementById("e38").src = "image/point/a1_rose.png";  document.getElementById("e37").src = "image/point/a1_rose.png"; document.getElementById("e36").src = "image/point/a1_gauche_rose.png"; }


// its74

if (sens_its74 == 4 && occupation_its74) 					{ progression_its74 = progression_its74 + 1; }
if (sens_its74 == 4 && progression_its74 > 4 ) 				{ occupation_its74 = false; occupation_its120 = true; 
train2_its120[0] = train2_its74[0];
train2_its120[1] = train2_its74[1];
train2_its120[2] = train2_its74[2];
train2_its120[3] = train2_its74[3];
train2_its120[4] = train2_its74[4];
train2_its120[5] = train2_its74[5];
train2_its120[6] = train2_its74[6];
sens_its120 = sens_its74;
progression_its74 = 0; 
its74 = 0; 
} 

if ( sens_its74 == 4 && progression_its74 == 1 )  			{ document.getElementById("e37").src = "image/point/a1_rose.png";  document.getElementById("e36").src = "image/point/a1_rose.png"; document.getElementById("e35").src = "image/point/a1_gauche_rose.png";  }
if ( sens_its74 == 4 && progression_its74 == 2 )  			{ document.getElementById("e36").src = "image/point/a1_rose.png";  document.getElementById("e35").src = "image/point/a1_rose.png"; document.getElementById("e34").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its74 == 4 && progression_its74 == 3 )  			{ document.getElementById("e35").src = "image/point/a1_rose.png";  document.getElementById("e34").src = "image/point/a1_rose.png"; document.getElementById("e33").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its74 == 4 && progression_its74 == 4 )  			{ document.getElementById("e34").src = "image/point/a1_rose.png";  document.getElementById("e33").src = "image/point/a1_rose.png"; document.getElementById("e32").src = "image/point/a1_gauche_rose.png"; }

// its120

if (sens_its120 == 4 && occupation_its120 ) 			{ progression_its120 = progression_its120 + 1; }
if (sens_its120 == 4 && progression_its120 > 8 ) 		{ occupation_its120 = false; occupation_its73 = true;  
train2_its73[0] = train2_its120[0];
train2_its73[1] = train2_its120[1];
train2_its73[2] = train2_its120[2];
train2_its73[3] = train2_its120[3];
train2_its73[4] = train2_its120[4];
train2_its73[5] = train2_its120[5];
train2_its73[6] = train2_its120[6];
sens_its73 = sens_its120;
progression_its120 = 0;
}

if ( sens_its120 == 4 && progression_its120 == 1 )  			{ document.getElementById("e33").src = "image/point/a1_rose.png";  document.getElementById("e32").src = "image/point/a1_rose.png"; document.getElementById("k8").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its120 == 4 && progression_its120 == 2 )  			{ document.getElementById("e32").src = "image/point/a1_rose.png";  document.getElementById("k8").src = "image/point/a1_rose.png"; document.getElementById("k7").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its120 == 4 && progression_its120 == 3 )  			{ document.getElementById("k8").src = "image/point/a1_rose.png";  document.getElementById("k7").src = "image/point/a1_rose.png"; document.getElementById("k6").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its120 == 4 && progression_its120 == 4 )  			{ document.getElementById("k7").src = "image/point/a1_rose.png";  document.getElementById("k6").src = "image/point/a1_rose.png"; document.getElementById("k5").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its120 == 4 && progression_its120 == 5 )  			{ document.getElementById("k6").src = "image/point/a1_rose.png";  document.getElementById("k5").src = "image/point/a1_rose.png"; document.getElementById("k4").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its120 == 4 && progression_its120 == 6 )  			{ document.getElementById("k5").src = "image/point/a1_rose.png";  document.getElementById("k4").src = "image/point/a1_rose.png"; document.getElementById("k3").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its120 == 4 && progression_its120 == 7 )  			{ document.getElementById("k4").src = "image/point/a1_rose.png";  document.getElementById("k3").src = "image/point/a1_rose.png"; document.getElementById("k2").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its120 == 4 && progression_its120 == 8 )  			{ document.getElementById("k3").src = "image/point/a1_rose.png";  document.getElementById("k2").src = "image/point/a1_rose.png"; document.getElementById("k1").src = "image/point/a1_gauche_rose.png"; }



// its73

if (sens_its73 == 4 && occupation_its73) 													{ progression_its73 = progression_its73 + 1;}
if (sens_its73 == 4 && aiguille93 == 0 && aiguille81 == 0 && progression_its73 > 7 ) 	{ occupation_its73 = false; occupation_its72 = true;  
train2_its72[0] = train2_its73[0];
train2_its72[1] = train2_its73[1];
train2_its72[2] = train2_its73[2];
train2_its72[3] = train2_its73[3];
train2_its72[4] = train2_its73[4];
train2_its72[5] = train2_its73[5];
train2_its72[6] = train2_its73[6];
sens_its72 = sens_its73;
progression_its73 = 0;
its73 = 0; 
}

if (sens_its73 == 4 && aiguille93 == 0 && aiguille81 == 0 && occupation_its73 ) 			{
if ( sens_its73 == 4 && progression_its73 == 1 )  			{ document.getElementById("k2").src = "image/point/a1_rose.png";  document.getElementById("k1").src = "image/point/a1_rose.png"; document.getElementById("e30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 2 )  			{ document.getElementById("k1").src = "image/point/a1_rose.png";  document.getElementById("e30").src = "image/point/a1_rose.png"; document.getElementById("e29").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 3 )  			{ document.getElementById("e30").src = "image/point/a1_rose.png";  document.getElementById("e29").src = "image/point/a1_rose.png"; document.getElementById("e28").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 4 )  			{ document.getElementById("e29").src = "image/point/a1_rose.png";  document.getElementById("e28").src = "image/point/a1_rose.png"; document.getElementById("e27").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 5 )  			{ document.getElementById("e28").src = "image/point/a1_rose.png";  document.getElementById("e27").src = "image/point/a1_rose.png"; document.getElementById("e26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 6 )  			{ document.getElementById("e27").src = "image/point/a1_rose.png";  document.getElementById("e26").src = "image/point/a1_rose.png"; document.getElementById("e25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 7 )  			{ document.getElementById("e26").src = "image/point/a1_rose.png";  document.getElementById("e25").src = "image/point/a1_rose.png"; document.getElementById("e24").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its73 == 4 && aiguille93 == 1 && aiguille81 == 0 && progression_its73 > 13 ) 	{ occupation_its73 = false; occupation_its53 = true;  
train2_its53[0] = train2_its73[0];
train2_its53[1] = train2_its73[1];
train2_its53[2] = train2_its73[2];
train2_its53[3] = train2_its73[3];
train2_its53[4] = train2_its73[4];
train2_its53[5] = train2_its73[5];
train2_its53[6] = train2_its73[6];
sens_its53 = sens_its73;
progression_its73 = 0;
its73 = 0; its93 = 0;  its54 = 0; 
aiguille93 = 0; 
}

if (sens_its73 == 4 && aiguille93 == 1 && aiguille81 == 0 && occupation_its73 ) 			{
if ( sens_its73 == 4 && progression_its73 == 1 )  			{ document.getElementById("k2").src = "image/point/a1_rose.png";  document.getElementById("k1").src = "image/point/a1_rose.png"; document.getElementById("e30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 2 )  			{ document.getElementById("k1").src = "image/point/a1_rose.png";  document.getElementById("e30").src = "image/point/a1_rose.png"; document.getElementById("e29").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 3 )  			{ document.getElementById("e30").src = "image/point/a1_rose.png";  document.getElementById("e29").src = "image/point/a1_rose.png"; document.getElementById("e28").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 4 )  			{ document.getElementById("e29").src = "image/point/a1_rose.png";  document.getElementById("e28").src = "image/point/a1_rose.png"; document.getElementById("e27").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 5 )  			{ document.getElementById("e28").src = "image/point/a1_rose.png";  document.getElementById("e27").src = "image/point/a1_rose.png"; document.getElementById("e26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 6 )  			{ document.getElementById("e27").src = "image/point/a1_rose.png";  document.getElementById("e26").src = "image/point/a1_rose.png"; document.getElementById("e25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 7 )  			{ document.getElementById("e26").src = "image/point/a1_rose.png";  document.getElementById("e25").src = "image/point/a1_rose.png"; document.getElementById("e24").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 8 )  			{ document.getElementById("e25").src = "image/point/a1_rose.png";  document.getElementById("e24").src = "image/point/a1_rose.png"; document.getElementById("f31").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 9 )  			{ document.getElementById("e24").src = "image/point/a1_rose.png";  document.getElementById("f31").src = "image/point/a1_rose.png"; document.getElementById("f30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 10 )  			{ document.getElementById("f31").src = "image/point/a1_rose.png";  document.getElementById("f30").src = "image/point/a1_rose.png"; document.getElementById("d22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 11 )  			{ document.getElementById("f30").src = "image/point/a1_rose.png";  document.getElementById("d22").src = "image/point/a1_rose.png"; document.getElementById("d21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 12 )  			{ document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_rose.png"; document.getElementById("d20").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 13 )  			{ document.getElementById("d21").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_rose.png"; document.getElementById("d19").src = "image/point/a1_gauche_rose.png"; }
}

if (sens_its73 == 4 && aiguille93 == 1 && aiguille81 == 1 && progression_its73 > 19 ) 	{ occupation_its73 = false; occupation_its131 = true;  
train2_its131[0] = train2_its73[0];
train2_its131[1] = train2_its73[1];
train2_its131[2] = train2_its73[2];
train2_its131[3] = train2_its73[3];
train2_its131[4] = train2_its73[4];
train2_its131[5] = train2_its73[5];
train2_its131[6] = train2_its73[6];
sens_its131 = sens_its73;
progression_its73 = 0;
its73 = 0; its93 = 0; its54 = 0; its81 = 0; its33 = 0; 
aiguille93 = 0; 
aiguille81 = 0; 
}

if (sens_its73 == 4 && aiguille93 == 1 && aiguille81 == 1 && occupation_its73 ) 			{
if ( sens_its73 == 4 && progression_its73 == 1 )  			{ document.getElementById("k2").src = "image/point/a1_rose.png";  document.getElementById("k1").src = "image/point/a1_rose.png"; document.getElementById("e30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 2 )  			{ document.getElementById("k1").src = "image/point/a1_rose.png";  document.getElementById("e30").src = "image/point/a1_rose.png"; document.getElementById("e29").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 3 )  			{ document.getElementById("e30").src = "image/point/a1_rose.png";  document.getElementById("e29").src = "image/point/a1_rose.png"; document.getElementById("e28").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 4 )  			{ document.getElementById("e29").src = "image/point/a1_rose.png";  document.getElementById("e28").src = "image/point/a1_rose.png"; document.getElementById("e27").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 5 )  			{ document.getElementById("e28").src = "image/point/a1_rose.png";  document.getElementById("e27").src = "image/point/a1_rose.png"; document.getElementById("e26").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 6 )  			{ document.getElementById("e27").src = "image/point/a1_rose.png";  document.getElementById("e26").src = "image/point/a1_rose.png"; document.getElementById("e25").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 7 )  			{ document.getElementById("e26").src = "image/point/a1_rose.png";  document.getElementById("e25").src = "image/point/a1_rose.png"; document.getElementById("e24").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 8 )  			{ document.getElementById("e25").src = "image/point/a1_rose.png";  document.getElementById("e24").src = "image/point/a1_rose.png"; document.getElementById("f31").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 9 )  			{ document.getElementById("e24").src = "image/point/a1_rose.png";  document.getElementById("f31").src = "image/point/a1_rose.png"; document.getElementById("f30").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 10 )  			{ document.getElementById("f31").src = "image/point/a1_rose.png";  document.getElementById("f30").src = "image/point/a1_rose.png"; document.getElementById("d22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 11 )  			{ document.getElementById("f30").src = "image/point/a1_rose.png";  document.getElementById("d22").src = "image/point/a1_rose.png"; document.getElementById("d21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 12 )  			{ document.getElementById("d22").src = "image/point/a1_rose.png";  document.getElementById("d21").src = "image/point/a1_rose.png"; document.getElementById("d20").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 13 )  			{ document.getElementById("d21").src = "image/point/a1_rose.png";  document.getElementById("d20").src = "image/point/a1_rose.png"; document.getElementById("d19").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 14 )  			{ document.getElementById("d20").src = "image/point/a1_rose.png";  document.getElementById("d19").src = "image/point/a1_rose.png"; document.getElementById("f22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 15 )  			{ document.getElementById("d19").src = "image/point/a1_rose.png";  document.getElementById("f22").src = "image/point/a1_rose.png"; document.getElementById("f21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 16 )  			{ document.getElementById("f22").src = "image/point/a1_rose.png";  document.getElementById("f21").src = "image/point/a1_rose.png"; document.getElementById("c18").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 17 )  			{ document.getElementById("f21").src = "image/point/a1_rose.png";  document.getElementById("c18").src = "image/point/a1_rose.png"; document.getElementById("c17").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 18 )  			{ document.getElementById("c18").src = "image/point/a1_rose.png";  document.getElementById("c17").src = "image/point/a1_rose.png"; document.getElementById("c16").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its73 == 4 && progression_its73 == 19 )  			{ document.getElementById("c17").src = "image/point/a1_rose.png";  document.getElementById("c16").src = "image/point/a1_rose.png"; document.getElementById("c15").src = "image/point/a1_gauche_rose.png"; }
}



// its72

if (sens_its72 == 4 && occupation_its72) 					{ progression_its72 = progression_its72 + 1;}
if (sens_its72 == 4 && progression_its72 > 15 ) 			{ occupation_its72 = false; occupation_its71 = true;  
train2_its71[0] = train2_its72[0];
train2_its71[1] = train2_its72[1];
train2_its71[2] = train2_its72[2];
train2_its71[3] = train2_its72[3];
train2_its71[4] = train2_its72[4];
train2_its71[5] = train2_its72[5];
train2_its71[6] = train2_its72[6]; 
sens_its71 = sens_its72;
progression_its72 = 0;
its72 = 0; 
}


if ( sens_its72 == 4 && progression_its72 == 1 )  			{ document.getElementById("e25").src = "image/point/a1_rose.png";  document.getElementById("e24").src = "image/point/a1_rose.png"; document.getElementById("e23").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its72 == 4 && progression_its72 == 2 )  			{ document.getElementById("e24").src = "image/point/a1_rose.png";  document.getElementById("e23").src = "image/point/a1_rose.png"; document.getElementById("e22").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its72 == 4 && progression_its72 == 3 )  			{ document.getElementById("e23").src = "image/point/a1_rose.png";  document.getElementById("e22").src = "image/point/a1_rose.png"; document.getElementById("e21").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its72 == 4 && progression_its72 == 4 )  			{ document.getElementById("e22").src = "image/point/a1_rose.png";  document.getElementById("e21").src = "image/point/a1_rose.png"; document.getElementById("e20").src = "image/point/a1_gauche_rose.png"; }
if ( sens_its72 == 4 && progression_its72 == 5 )  			{ document.getElementById("e21").src = "image/point/a1_rose.png";  document.getElementById("e20").src = "image/point/a1_rose.png"; document.getElementById("e19").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 6 )  			{ document.getElementById("e20").src = "image/point/a1_rose.png";  document.getElementById("e19").src = "image/point/a1_rose.png"; document.getElementById("e18").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 7 )  			{ document.getElementById("e19").src = "image/point/a1_rose.png";  document.getElementById("e18").src = "image/point/a1_rose.png"; document.getElementById("e17").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 8 )  			{ document.getElementById("e18").src = "image/point/a1_rose.png";  document.getElementById("e17").src = "image/point/a1_rose.png"; document.getElementById("e16").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 9 )  			{ document.getElementById("e17").src = "image/point/a1_rose.png";  document.getElementById("e16").src = "image/point/a1_rose.png"; document.getElementById("e15").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 10 )  			{ document.getElementById("e16").src = "image/point/a1_rose.png";  document.getElementById("e15").src = "image/point/a1_rose.png"; document.getElementById("e14").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 11 )  			{ document.getElementById("e15").src = "image/point/a1_rose.png";  document.getElementById("e14").src = "image/point/a1_rose.png"; document.getElementById("e13").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 12 )  			{ document.getElementById("e14").src = "image/point/a1_rose.png";  document.getElementById("e13").src = "image/point/a1_rose.png"; document.getElementById("e12").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 13 )  			{ document.getElementById("e13").src = "image/point/a1_rose.png";  document.getElementById("e12").src = "image/point/a1_rose.png"; document.getElementById("e11").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 14 )  			{ document.getElementById("e12").src = "image/point/a1_rose.png";  document.getElementById("e11").src = "image/point/a1_rose.png"; document.getElementById("e10").src = "image/point/a1_gauche_rose.png";}
if ( sens_its72 == 4 && progression_its72 == 15 )  			{ document.getElementById("e11").src = "image/point/a1_rose.png";  document.getElementById("e10").src = "image/point/a1_rose.png"; document.getElementById("e9").src = "image/point/a1_gauche_rose.png";}





// its71

if (sens_its71 == 4 && occupation_its71) 				{ progression_its71 = progression_its71 + 1;}
if (sens_its71 == 4 && progression_its71 > 4 ) 			{ occupation_its71 = false; occupation_its70 = true;  
train2_its70[0] = train2_its71[0];
train2_its70[1] = train2_its71[1];
train2_its70[2] = train2_its71[2];
train2_its70[3] = train2_its71[3];
train2_its70[4] = train2_its71[4];
train2_its70[5] = train2_its71[5];
train2_its70[6] = train2_its71[6];
sens_its70 = sens_its71;
progression_its71 = 0;
its71 = 0; 
}

if ( sens_its71 == 4 && progression_its71 == 1 )  			{ document.getElementById("e10").src = "image/point/a1_rose.png";  document.getElementById("e9").src = "image/point/a1_rose.png"; document.getElementById("e8").src = "image/point/a1_gauche_rose.png";}
if ( sens_its71 == 4 && progression_its71 == 2 )  			{ document.getElementById("e9").src = "image/point/a1_rose.png";  document.getElementById("e8").src = "image/point/a1_rose.png"; document.getElementById("e7").src = "image/point/a1_gauche_rose.png";}
if ( sens_its71 == 4 && progression_its71 == 3 )  			{ document.getElementById("e8").src = "image/point/a1_rose.png";  document.getElementById("e7").src = "image/point/a1_rose.png"; document.getElementById("e6").src = "image/point/a1_gauche_rose.png";}
if ( sens_its71 == 4 && progression_its71 == 4 )  			{ document.getElementById("e7").src = "image/point/a1_rose.png";  document.getElementById("e6").src = "image/point/a1_rose.png"; document.getElementById("e5").src = "image/point/a1_gauche_rose.png";}




// its70

if (sens_its70 == 4 && occupation_its70) 				{ progression_its70 = progression_its70 + 1;}
if (sens_its70 == 4 && progression_its70 > 6 ) 			{ occupation_its70 = false; 
progression_its70 = 0;
its70 = 0; document.getElementById("z4").src = "image/feux/rouge_2.png";
}

if ( sens_its70 == 4 && progression_its70 == 1 )  			{ document.getElementById("e6").src = "image/point/a1_rose.png";  document.getElementById("e5").src = "image/point/a1_rose.png"; document.getElementById("e4").src = "image/point/a1_gauche_rose.png";}
if ( sens_its70 == 4 && progression_its70 == 2 )  			{ document.getElementById("e5").src = "image/point/a1_rose.png";  document.getElementById("e4").src = "image/point/a1_rose.png"; document.getElementById("e3").src = "image/point/a1_gauche_rose.png";}
if ( sens_its70 == 4 && progression_its70 == 3 )  			{ document.getElementById("e4").src = "image/point/a1_rose.png";  document.getElementById("e3").src = "image/point/a1_rose.png"; document.getElementById("e2").src = "image/point/a1_gauche_rose.png";}
if ( sens_its70 == 4 && progression_its70 == 4 )  			{ document.getElementById("e3").src = "image/point/a1_rose.png";  document.getElementById("e2").src = "image/point/a1_rose.png"; document.getElementById("e1").src = "image/point/a1_gauche_rose.png";}
if ( sens_its70 == 4 && progression_its70 == 5 )  			{ document.getElementById("e2").src = "image/point/a1_rose.png";  document.getElementById("e1").src = "image/point/a1_rose.png"; document.getElementById("e1").src = "image/point/a1_gauche_rose.png";}
if ( sens_its70 == 4 && progression_its70 == 6 )  			{ document.getElementById("e1").src = "image/point/a1_rose.png";  document.getElementById("e1").src = "image/point/a1_rose.png"; document.getElementById("e1").src = "image/point/a1_gauche_rose.png";}

// its7

if (sens_its7 == 4 && occupation_its7) 					{ progression_its7 = progression_its7 + 1;} 
if (sens_its7 == 4 && its6 == 0 && progression_its7 > 11 ) 		{ progression_its7 = 11; }
if (sens_its7 == 4 && progression_its7 > 11 ) 			{ occupation_its7 = false; occupation_its6 = true;   
train2_its6[0] = train2_its7[0];
train2_its6[1] = train2_its7[1];
train2_its6[2] = train2_its7[2];
train2_its6[3] = train2_its7[3];
train2_its6[4] = train2_its7[4];
train2_its6[5] = train2_its7[5];
train2_its6[6] = train2_its7[6];
sens_its6 = sens_its7;
progression_its7 = 0;
} 


if ( sens_its7 == 4 && progression_its7 == 1 )  			{ document.getElementById("a65").src = "image/point/a1_rose.png";  document.getElementById("a65").src = "image/point/a1_rose.png"; document.getElementById("a65").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 2 )  			{ document.getElementById("a64").src = "image/point/a1_rose.png";  document.getElementById("a65").src = "image/point/a1_rose.png"; document.getElementById("a65").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 3 )  			{ document.getElementById("a63").src = "image/point/a1_rose.png";  document.getElementById("a64").src = "image/point/a1_rose.png"; document.getElementById("a65").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 4 )  			{ document.getElementById("a62").src = "image/point/a1_rose.png";  document.getElementById("a63").src = "image/point/a1_rose.png"; document.getElementById("a64").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 5 )  			{ document.getElementById("a61").src = "image/point/a1_rose.png";  document.getElementById("a62").src = "image/point/a1_rose.png"; document.getElementById("a63").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 6 )  			{ document.getElementById("a60").src = "image/point/a1_rose.png";  document.getElementById("a61").src = "image/point/a1_rose.png"; document.getElementById("a62").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 7 )  			{ document.getElementById("a59").src = "image/point/a1_rose.png";  document.getElementById("a60").src = "image/point/a1_rose.png"; document.getElementById("a61").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 8 )  			{ document.getElementById("a58").src = "image/point/a1_gauche_rose.png";  document.getElementById("a59").src = "image/point/a1_rose.png"; document.getElementById("a60").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 9 )  			{ document.getElementById("a57").src = "image/point/a1_gauche_rose.png";  document.getElementById("a58").src = "image/point/a1_rose.png"; document.getElementById("a59").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 10 )  			{ document.getElementById("a56").src = "image/point/a1_gauche_rose.png";  document.getElementById("a57").src = "image/point/a1_rose.png"; document.getElementById("a58").src = "image/point/a1_rose.png";}
if ( sens_its7 == 4 && progression_its7 == 11 )  			{ document.getElementById("a55").src = "image/point/a1_gauche_rose.png";  document.getElementById("a56").src = "image/point/a1_rose.png"; document.getElementById("a57").src = "image/point/a1_rose.png";}


// LES ANNONCES DES TRAINS

// Direction Genève Yverdon

/*

101 Interrégio - Genève
102 Interrégio - Yverdon


*/

// Iterregio morges 101 fonctionne ok

/*

if ( sens_its75 == 2 && progression_its75 == 2 && train2_its75[2] == 101)  {
document.getElementById("UnTexte_c23").innerHTML = 'Voie 1 101';
annonce(16);
}

if ( sens_its57 == 2 && progression_its57 == 2 && aiguille94 == 0 && train2_its57[2] == 101)  {
document.getElementById("UnTexte_c23").innerHTML = 'Voie 2 101';
annonce(17);
}

if ( sens_its38 == 2 && progression_its38 == 2 && train2_its38[2] == 101 )  {
document.getElementById("UnTexte_c23").innerHTML = 'Voie 3 101';
annonce(18);
}

if ( sens_its18 == 2 && progression_its18 == 2 && train2_its18[2] == 101)  {
document.getElementById("UnTexte_c23").innerHTML = 'Voie 4 101';
annonce(19);
}

// Iterregio yverdon 102
if ( sens_its75 == 2 && progression_its75 == 2 )  { // && train2_its75[2] == 102
document.getElementById("UnTexte_c23").innerHTML = 'Voie 1 102';
annonce(20);
}

if ( sens_its57 == 2 && progression_its57 == 2 && aiguille94 == 0 )  { // && train2_its57[2] == 102
document.getElementById("UnTexte_c23").innerHTML = 'Voie 2 102';
annonce(21);
}

if ( sens_its38 == 2 && progression_its38 == 2  )  { // && train2_its38[2] == 102
document.getElementById("UnTexte_c23").innerHTML = 'Voie 3 102';
annonce(22);
}

if ( sens_its18 == 2 && progression_its18 == 2 )  { // && train2_its18[2] == 102
document.getElementById("UnTexte_c23").innerHTML = 'Voie 4 102';
annonce(23);
}


// ICN yverdon 201
if ( sens_its75 == 2 && progression_its75 == 2 )  { // && train2_its75[2] == 201
document.getElementById("UnTexte_c23").innerHTML = 'Voie 1 201';
annonce(24);
}

if ( sens_its57 == 2 && progression_its57 == 2 && aiguille94 == 0 )  { // && train2_its57[2] == 201
document.getElementById("UnTexte_c23").innerHTML = 'Voie 2 201';
annonce(25);
}

if ( sens_its38 == 2 && progression_its38 == 2  )  { // && train2_its38[2] == 201
document.getElementById("UnTexte_c23").innerHTML = 'Voie 3 - Yverdon';
annonce(26);
}

if ( sens_its18 == 2 && progression_its18 == 2 )  { // && train2_its18[2] == 201
document.getElementById("UnTexte_c23").innerHTML = 'Voie 4 201';
annonce(27);
}

if ( sens_its103 == 2 && progression_its103 == 2 )  { // && train2_its103[2] == 201
document.getElementById("UnTexte_c23").innerHTML = 'Voie 5 201';
annonce(28);
}

// Interregio Brig 301

if ( sens_its54 == 1 && progression_its57 == 2 && aiguille93 == 1 )  { // && train2_its54[2] == 301
document.getElementById("UnTexte_c23").innerHTML = 'Voie 2 301';
annonce(29);
}

if ( sens_its54 == 1 && progression_its57 == 2 && aiguille93 == 0 )  { // && train2_its54[2] == 301
document.getElementById("UnTexte_c23").innerHTML = 'Voie 2 301';
annonce(30);
}

if ( sens_its34 == 1 && progression_its34 == 2 )  { // && train2_its34[2] == 301
document.getElementById("UnTexte_c23").innerHTML = 'Voie 4 301';
annonce(31);
}

if ( sens_its111 == 1 && progression_its111 == 2 )  { // && train2_its111[2] == 301
document.getElementById("UnTexte_c23").innerHTML = 'Voie 4 301';
annonce(32);
}

if ( sens_its102 == 1 && progression_its102 == 2 )  { // && train2_its102[2] == 301
document.getElementById("UnTexte_c23").innerHTML = 'Voie 4 301';
annonce(33);
}



// Interregio Lucerne 302


if ( sens_its54 == 1 && progression_its57 == 2 && aiguille93 == 1 )  { // && train2_its54[2] == 302
document.getElementById("UnTexte_c23").innerHTML = 'Voie 1 302';
annonce(34);
}

if ( sens_its54 == 1 && progression_its57 == 2 && aiguille93 == 0 )  { // && train2_its54[2] == 302
document.getElementById("UnTexte_c23").innerHTML = 'Voie 2 302';
annonce(35);
}

if ( sens_its34 == 1 && progression_its34 == 2 )  { // && train2_its34[2] == 302
document.getElementById("UnTexte_c23").innerHTML = 'Voie 3 302';
annonce(36);
}

if ( sens_its111 == 1 && progression_its111 == 2 )  { // && train2_its111[2] == 302
document.getElementById("UnTexte_c23").innerHTML = 'Voie 4 302';
annonce(37);
}

if ( sens_its102 == 1 && progression_its102 == 2 )  { // && train2_its102[2] == 302
document.getElementById("UnTexte_c23").innerHTML = 'Voie 5 302';
annonce(38);
}





// INITALISATION A QUOI CA SERT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
if ( sens_its76 == 4 && progression_its76 == 3 )  	{ 
document.getElementById("z15").src = "image/feux/rouge_2.png";
}

if ( sens_its60 == 4 && progression_its60 == 3 )  	{ 
document.getElementById("z14").src = "image/feux/rouge_2.png";
}

if ( sens_its6 == 4 && progression_its6 == 3 )  	{ 
document.getElementById("z19").src = "image/feux/rouge_2.png";
}

if ( sens_its8 == 4 && progression_its8 == 2 )  	{ 
its4 = 0;
document.getElementById("z17").src = "image/feux/rouge_2.png";
}

if ( sens_its117 == 4 && progression_its117 == 2 )  	{ 
document.getElementById("z21").src = "image/feux/rouge_2.png";
its103 = 0;
}

if ( sens_its17 == 4 && progression_its17 == 2 )  	{ 
document.getElementById("z9").src = "image/feux/rouge_2.png";
its18 = 0;
}

if ( sens_its118 == 4 && progression_its118 == 2 )  	{ 
document.getElementById("z10").src = "image/feux/rouge_2.png";
its37 = 0;
}

if ( sens_its119 == 4 && progression_its119 == 2 )  	{ 
document.getElementById("z11").src = "image/feux/rouge_2.png";
its56 = 0;
}

if ( sens_its120 == 4 && progression_its120 == 2 )  	{ 
document.getElementById("z12").src = "image/feux/rouge_2.png";
its74 = 0;
}

if ( sens_its23 == 4 && progression_its23 == 2 )  	{ 
its8 = 0;
document.getElementById("z16").src = "image/feux/rouge_2.png";
}

if ( sens_its102 == 4 && progression_its102 == 2 )  	{ 
document.getElementById("z20").src = "image/feux/rouge_2.png";
its117 = 0;
}

if ( sens_its111 == 4 && progression_its111 == 2 )  	{ 
document.getElementById("z5").src = "image/feux/rouge_2.png";
its17 = 0;
}

if ( sens_its34 == 4 && progression_its34 == 2 )  	{ 
document.getElementById("z6").src = "image/feux/rouge_2.png";
its118 = 0;
}

if ( sens_its55 == 4 && progression_its55 == 2 )  	{ 
document.getElementById("z7").src = "image/feux/rouge_2.png";
its119 = 0;
}

if ( sens_its73 == 4 && progression_its73 == 2 )  	{ 
document.getElementById("z8").src = "image/feux/rouge_2.png";
its120 = 0;
}

*/


// fin de nouvelle ligne










} // occupation