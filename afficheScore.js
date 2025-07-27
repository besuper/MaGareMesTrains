



function afficheScore() {

bravo_compteur = 0;

document.getElementById('Le_score1').style.cssText='position: absolute; left: 550px; top: 137px; font-size: 23px; color: red;';

document.getElementById('Le_score1').innerHTML = '';

if (bravo_compteur > 1000 ) {
document.getElementById('Le_score1').innerHTML = bravo_score1;	
}

if (bravo_compteur > 1200 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 1300 ) {
document.getElementById('Le_score1').innerHTML = bravo_score2;	
}

if (bravo_compteur > 1500 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 1600 ) {
document.getElementById('Le_score1').innerHTML = bravo_score3;	
}

if (bravo_compteur > 1800 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 1900 ) {
document.getElementById('Le_score1').innerHTML = bravo_score4;	
}

if (bravo_compteur > 2100 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 2200 ) {
document.getElementById('Le_score1').innerHTML = bravo_score5;	
}

if (bravo_compteur > 2400 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 2500 ) {
document.getElementById('Le_score1').innerHTML = bravo_score6;	
}

if (bravo_compteur > 2700 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 2800 ) {
document.getElementById('Le_score1').innerHTML = bravo_score7;	
}

if (bravo_compteur > 3000 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 3100 ) {
document.getElementById('Le_score1').innerHTML = bravo_score8;	
}

if (bravo_compteur > 3300 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 3400 ) {
document.getElementById('Le_score1').innerHTML = bravo_score9;	
}

if (bravo_compteur > 3600 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 3700 ) {
document.getElementById('Le_score1').innerHTML = bravo_score10;	
}

if (bravo_compteur > 3900 ) {
document.getElementById('Le_score1').innerHTML = '';	
}

if (bravo_compteur > 6000 ) {
bravo_compteur = 0;	
}



}