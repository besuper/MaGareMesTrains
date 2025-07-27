<?php  
session_start();

if (isset($_SESSION['util'])) {
	$nom = htmlspecialchars($_GET['nom']);
}
else
{
$nom = 'Visiteur';
}


try 
{
$bdd = new PDO('mysql:host=database;dbname=magaremestrains', 'root', 'p@ssw0rd');
}
catch (Exception $e)
{
die('Erreur : ' . $e->getMessage());
				}	
				
			$fruits = array();
			$i = 1;
			$reponse = $bdd->query('SELECT * FROM util ORDER BY train DESC');
			
			while ($donnees = $reponse->fetch())
			{
			$nom2 		= $donnees['nom'];
			$train 		= $donnees['train'];
			$nom2 = substr($nom2, 0, 3);  
			$levaiceur = "Bravo ! ".$nom2."... avec ".$train." trains";
			$fruits[$i] = $levaiceur;
			$i++;
			}
			
		
			

?>

<!DOCTYPE html>
<html>
	<head>	
	
	


		
	
        <meta charset="utf-8" />
		<!-- jeux créé par Alain Mettral -->
		
        <title>Ma gare mes trains et le chef</title>
		
		<meta name="language" content="fr" />	


		
		
<script type="text/javascript">
			var date = new Date();
			var heure = date.getHours();
			var minutes = date.getMinutes();
			var secondes = date.getSeconds();
			
			var les_secondes = secondes;
			var les_heures = heure;
			var les_minutes = minutes;
			
			// UNIQUEMENT POUR ALLER DANS LE TEMPS
			
			//les_secondes = 57;
			//les_heures = 3;
			//les_minutes = 1;
			
			var les_secondes_af = 0;
			var les_minutes_af = 0;
			var les_heures_af = 0;
			
			var mon_heure = "00:00:00"
			
			
			var numero_actuel = 10001;
			var appel_fonction = 40; 
			var x = 0;
			var y = 0;
			
			// Déplacement souris
			
			var x1 = 0;
			var y1 = 0;
			
			
			
			
			</script>
			
			<script LANGUAGE="Javascript" SRC="les_variables.js"></script>
			<script LANGUAGE="Javascript" SRC="its1.js"></script> 
			<script LANGUAGE="Javascript" SRC="horaire1.js"></script> 
			<script LANGUAGE="Javascript" SRC="clique.js"></script>
			<script LANGUAGE="Javascript" SRC="touche.js"></script>
			<script LANGUAGE="Javascript" SRC="train1.js"></script> 
			<script LANGUAGE="Javascript" SRC="train2.js"></script> 
			<script LANGUAGE="Javascript" SRC="voiture.js"></script>
			<script LANGUAGE="Javascript" SRC="occupation2.js"></script> 
			<script LANGUAGE="Javascript" SRC="occupation1.js"></script> 
			<script LANGUAGE="Javascript" SRC="son.js"></script> 
			<script LANGUAGE="Javascript" SRC="parcours2.js"></script> 
			<script LANGUAGE="Javascript" SRC="pn.js"></script> 
			<script LANGUAGE="Javascript" SRC="commentaire.js"></script> 
			<script LANGUAGE="Javascript" SRC="personnage.js"></script> 
			<script LANGUAGE="Javascript" SRC="evenement.js"></script> 
			<script LANGUAGE="Javascript" SRC="oXHR.js"></script>
			<script LANGUAGE="Javascript" SRC="fermetureTroncon.js"></script>
			
			
			<script LANGUAGE="Javascript" SRC="ampli.js"></script>
			<script LANGUAGE="Javascript" SRC="audrey.js"></script>
			<script LANGUAGE="Javascript" SRC="eclair.js"></script> 
			<script LANGUAGE="Javascript" SRC="incendie.js"></script>
			<script LANGUAGE="Javascript" SRC="jean_marc.js"></script>
			<script LANGUAGE="Javascript" SRC="marion.js"></script>
			<script LANGUAGE="Javascript" SRC="neige.js"></script>
			<script LANGUAGE="Javascript" SRC="noel.js"></script>
			
			<script LANGUAGE="Javascript" SRC="train_IR2.js"></script>
			<script LANGUAGE="Javascript" SRC="train_IR3.js"></script>
			<script LANGUAGE="Javascript" SRC="afficheScore.js"></script>
			
			
			
			
			<script type="text/javascript">
			
			
			
			nom = <?php echo json_encode($nom); ?>;
			score = 0;
			
			le_nombre_de_train = 0;
			train_retard = 0;
			train_heure = 0;
			
			bravo_score1 = '<?php echo json_encode($fruits[1] ?? ""); ?>'; 
			bravo_score2 = '<?php echo json_encode($fruits[2] ?? ""); ?>';
			bravo_score3 = '<?php echo json_encode($fruits[3] ?? ""); ?>';
			bravo_score4 = '<?php echo json_encode($fruits[4] ?? ""); ?>';
			bravo_score5 = '<?php echo json_encode($fruits[5] ?? ""); ?>';
			bravo_score6 = '<?php echo json_encode($fruits[6] ?? ""); ?>';
			bravo_score7 = '<?php echo json_encode($fruits[7] ?? ""); ?>';
			bravo_score8 = '<?php echo json_encode($fruits[8] ?? ""); ?>';
			bravo_score9 = '<?php echo json_encode($fruits[9] ?? ""); ?>';
			bravo_score10 = '<?php echo json_encode($fruits[10] ?? ""); ?>';
			
			
			
			function affiche_clientchef() { 
			
			
			var image_client = new Image(); image_client.onload = function() 	{ document.getElementById("clientchef").src = image_client.src; } 
			image_client.src = "image/client/"+nom_client+"_"+couleur+".jpg";
			var image_boite = new Image(); image_boite.onload = function() 	{ document.getElementById("boite_textechef").src = image_boite.src; } 
			image_boite.src = "image/client/texte_"+couleur+".jpg";
			document.getElementById('clientchef').style.cssText='position: absolute; left: 400px; top:310px;';
			document.getElementById('boite_textechef').style.cssText='position: absolute; left: 520px; top:310px;';
			document.getElementById('texte1chef').style.cssText='position: absolute; left: 550px; top:310px;';
			document.getElementById('texte2chef').style.cssText='position: absolute; left: 550px; top:330px;';
			document.getElementById('texte3chef').style.cssText='position: absolute; left: 550px; top:350px;';
		
			}
			
			function function_occupation() {
				
			if (pause == 0) {
			les_its(); 
			occupation1();
			occupation2();
			commentaire(); 
			personnage(); 
			evenement(); 
			fermetureTroncon();			
			}
			}
			
			
			function affichage_image() { 
			
			if (pause == 0) {
			pn();
			Train_IR2();
			Train_IR3();
			train1(); 	
			train2(); 
			voiture();
			afficheScore();
		
			// Les animations et événements
			neige();
			jean_marc();
			incendie();
			marion();
			audrey();
			ampli();
			noel();
			leeclair();
			}
			
			// CONTROLE VISUEL ------------------------------------------------------------------------
			
			
			
			document.getElementById("UnTexte_c1").innerHTML = "Nombre de trains :  "+le_nombre_de_train+"";
			
			
			if (minutes_de_retard >= 0 && minutes_de_retard <= 5) {document.getElementById("UnTexte_c2").innerHTML = 'Minutes de retard : <span style="color: green;"><b>	'+minutes_de_retard+' </b><i> max 15</i></span>';}
			
			if (minutes_de_retard >= 6 && minutes_de_retard <= 10) {document.getElementById("UnTexte_c2").innerHTML = 'Minutes de retard : <span style="color: orange;"><b>	'+minutes_de_retard+' </b><i> max 15</i></span>';}
			
			if (minutes_de_retard >= 11 && minutes_de_retard <= 30) {document.getElementById("UnTexte_c2").innerHTML = 'Minutes de retard : <span style="color: red;"><b>	'+minutes_de_retard+' </b><i> max 15</i></span>';}
			
			
			
			
			} 
			
			// lA SOURIS ----------------------------------------------------------------------------
			
			function maF(monMot){
			
			
			clique(monMot); 
			parcours2(); 
			les_its();  
			function_occupation(); 
			
			
			
			}
			
			
			
			function onclick_page(event) // FONCTION CLIQUE
			{
			x = event.clientX;
			y = event.clientY;
			} 
				
function ladate() {
	

 
} 

function la_date2() {

	if (pause == 0) {
	les_secondes++; // CE QUI FAIT AVANCER LE TEMPS -- ATTENTION -- ATTENTION --!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}
	
	if ( les_secondes == 60 ) 		{ les_minutes = les_minutes + 1; les_secondes = 0; }
	if ( les_minutes == 60 ) 		{ les_heures = les_heures + 1; les_minutes = 0; }
	if ( les_heures == 24 ) 		{ les_heures = 0; }
	
if ( les_heures <= 9 )
 {
  les_heures_af = '0'+les_heures;
 }
else
 {
  les_heures_af = les_heures;
 }
 

if ( les_minutes <= 9 )
 {
  les_minutes_af = '0'+les_minutes;
 }
else
 {
  les_minutes_af = les_minutes;
 }
 

if ( les_secondes <= 9 )
 {
  les_secondes_af = '0'+les_secondes;
 }
else
 {
  les_secondes_af = les_secondes;
 }
	
 
 mon_heure =  les_heures_af+':'+les_minutes_af+':'+les_secondes_af;
 document.getElementById("heure1").innerHTML = ""+mon_heure+"";
	
// DEPART A L'HORAIRE DES TRAINS
 
 horaire1(); 
 pn();

} // fin de date2

			
			
			function souris(event)
			{
			x1 = event.clientX;
			y1 = event.clientY;
			
			}

			
			
			// LES TOUCHES -------------------------------------------------------------------------
			
			
			function quelle_touche(evenement) 
			{
			var touche = window.event ? evenement.keyCode : evenement.which;
			
			alert(touche);
			
			//touche_fonction(touche);
					
			}
			
			function pagelogin() {
			document.location.href="https://ma-gare-mes-trains.fr"; 
			}
			
			
</script>
	
</head>
	
<body style="background-color: black;" onclick="onclick_page(event);" onmousemove="souris(event);" onkeyPress="quelle_touche(event);">



	<!-- récupération des touches -->
	<div style="position: absolute; left: 0px; top: -150px;">
	<form name="formulaire" action="/">
	<label for="saisie">Texte : </label>
	<input name="saisie" onkeyPress="quelle_touche(event);" /> 
	<input type="button" name="bouton" value="OK" />
	</form>
	</div>
	
	<div style="position: absolute; left: 150px; top: 150px;" id="player" >
	<a href="#" onclick="loadPlayer()">Load Player</a><br><br><br><br>
	<p>p</p>
	</div>	
	

	<!-- La gare le fond avec Renens -->
	<div id="gare_5" >
	<img src="image/fond/1005.php"
	style="position: absolute; left: 100px; top: 100px;" 
	alt="image" id="la_gare_5" />
	</div>
	
	
	<?php include('includeCirculationFond.php'); ?>


	<!-- La gare 4 la haie qui cache le bas des voitures -->
	<div id="gare_4" >
	<img src="image/fond/1004.php"
	style="position: absolute; left: 100px; top: 100px;" 
	alt="image" id="la_gare_4" />
	</div>
	
	
	<?php include('includeGare3.php'); ?>
	<?php include('includeGare2.php'); ?>
	<?php include('includeAmpli.php'); ?>
	<?php include('includeAudrey.php'); ?>
	<?php include('includeEclair.php'); ?>
	<?php include('includeNoel.php'); ?>
	<?php include('includeNeige.php'); ?>
	<?php include('includeMarion.php'); ?>
	<?php include('includeJean_marc.php'); ?>
	<?php include('includeGare1.php'); ?>

	<!-- La gare 1 -->
	<div id="gare_1" >
	<img src="image/fond/1001.php"
	style="position: absolute; left: 100px; top: 100px;" 
	alt="image1" id="la_gare_1" />
	</div>
	
	<!-- Cache gris bas -->
	<div id="cache" >
	<img src="image/fond/cache_gris.png"
	style="position: absolute; left: 100px; top: 440px;" 
	alt="image" id="cache_gris" />
	</div>
	
	
	
	<!-- quai 1 dessin carré -->
	<div id="quai1" >
	<img src="image/fond/quai2.png"
	style="position: absolute; left: 600px; top: 535px;" 
	alt="image" id="lequai1" />
	</div>
	
	
	<!-- quai 2 dessin carré -->
	<div id="quai2" >
	<img src="image/fond/quai2.png"
	style="position: absolute; left: 600px; top: 625px;" 
	alt="image" id="lequai2" />
	</div>
	
	<!-- quai 3  dessin carré -->
	<div id="quai2" >
	<img src="image/fond/quai1.png"
	style="position: absolute; left: 600px; top: 715px;" 
	alt="image" id="lequai3" />
	</div>
	
	

	<?php include('includePoint.php'); ?>
	
	
	<!-- PN -->
	<div id="route1" >
	<img src="image/PN/route1.png"
	style="position: absolute; left: 1170px; top: 477px;" 
	alt="image" id="une_image_route1" />
	</div>
	
	<div id="route2" >
	<img src="image/PN/route2.png"
	style="position: absolute; left: 1187px; top: 442px;" 
	alt="image" id="une_image_route2" />
	</div>
	
	<div id="route3" >
	<img src="image/PN/1090.php"
	style="position: absolute; left: 1185px; top: 445px; width: 50px;" 
	alt="image" id="une_image_route3" />
	</div>
	
	<div id="route4" >
	<img src="image/PN/feux0.php"
	style="position: absolute; left: 1216px; top: 464px; width: 23px;" 
	alt="image" id="une_image_route4" />
	</div>
	
	
	
	
	
	<div id="cache_droite" >
	<img src="image/fond/cache_droite.jpg"
	style="position: absolute; left: 1299px; top: 100px;" 
	alt="image" id="une_image_cache_droite" />
	</div>
	
	<div id="cache_gauche" >
	<img src="image/fond/cache_gauche.jpg"
	style="position: absolute; left: 0px; top: 100px;" 
	alt="image" id="une_image_cache_gauche" />
	</div>
	
	<div id="cache_haut" >
	<img src="image/fond/cache_haut.jpg"
	style="position: absolute; left: 0px; top: -28px;" 
	alt="image" id="une_image_cache_haut" />
	</div>
	
	
	
	
	
	<div id="lien1" style="position: absolute; left: 120px; top: 90px; color: white; font-size: 20px;"><p id="UnTexte_c40" >MA GARE MES TRAINS (et le chef)</p></div>
	
	<div id="horloge" ><img src="image/fond/horloge.jpg" style="position: absolute; left: 450px; top: 107px;" alt="image" id="une_image_horloge" /></div> <!-- Image horloge -->
	
	<div id="lien11" style="position: absolute; left: 490px; top: 88px; color: white; font-size: 22px;"><p id="heure1" ></p></div> <!-- indication de l'heure du jeux -->
	
	<div id="lien18" style="position: absolute; left: 610px; top: -100px; color: white; font-size: 14px;"> <p id="UnTexte_c25" >Total train :</p> </div> <!-- Affiche total train -->
	
	<div id="lien18" style="position: absolute; left: 730px; top: -95px; color: white; font-size: 12px;"> <p id="UnTexte_c18" >En retard : 0</p> </div> <!-- Affiche retard train -->
	
	<div id="lien18" style="position: absolute; left: 835px; top: -95px; color: white; font-size: 12px;"> <p id="UnTexte_c19" >A l'heure : 0</p> </div> <!-- Affiche a l'heure train -->
	
	<div id="lien18" style="position: absolute; left: 950px; top: -95px; color: white; font-size: 12px;"> <p id="UnTexte_c20" >Score : 0</p> </div> <!-- Affiche scoretrain -->
	
	<div id="lien19" style="position: absolute; left: 1065px; top: -140px; color: white; font-size: 12px;"><p id="UnTexte_c22" >Total retard :</p></div>
	
	<!-- Affichage des scores -->
	
	<!-- A contrôler si demandé ??????????????????????????????????????????????????????????????????????????????????? 52 -->
	<div id="score" style="position: absolute; left: 946px; top: -100px; color: white; font-size: 16px;"> <p id="UnTexte_c52" >Ici les score ?????</p></div>
	
	<!-- Voir si séparer le nom du la valeur nom ???????????????????????????????????????????????????????????????????????????????????????????????????? -->
	<div id="lien18" style="position: absolute; left: 610px; top: 100px; 	color: white; font-size: 14px;"> 	<p id="UnTexte_c1" >Nombre de trains :</p> </div> 
	<div id="lien19" style="position: absolute; left: 830px; top: 100px; 	color: white; font-size: 14px;">	<p id="UnTexte_c2" >Minutes de retard :</p></div>
	<div id="loginnom" style="position: absolute; left: 1030px; top: 100px; color: white; font-size: 16px;"> <p id="UnTexte_c50" ><?php echo $nom; ?></p></div>
	
	<img onclick="pagelogin()" src="image/point/sortie.png" 	style="position: absolute; left: 1235px; top: 110px;" alt="Bouton login" 	title="login" 	id="boutonlogin" />
	
	
	<!-- annuler le parcours -->
	<img onclick="maF('reset')"	src="image/point/bouton3.png" 	style="position: absolute; left: 110px; top: 443px;" alt="reset" 	title="reset" 	id="reset" />
	
	
	
	
	
	<p onclick="maF('texti')" style="position: absolute; left: 730px; top: -90px; color: red; font-size: 14px;" id="texti">Cliquez ici pour passer les explications</p>
	
	
	
	<p style="position: absolute; left: 250px; top: 730px; color: white; font-size: 17px; text-align: center;" id="textedubas";>
	Faites les parcours des trains en cliquant sur les aiguillages <img style="width: 15px; height: 15px;" src="image/point/a0_bleu.png" > puis passez les feux au vert <img style="width: 15px; height: 15px;" src="image/feux/vert_2.png" > en cliquant dessus.<br /> 
	Des événements pourront survenir dans le courant de la journée et compliquer votre travail. <br />
	<span style="font-size: 12px;">Alain Mettral 2015 - <?php echo date("Y"); ?> / Mise à jour: 24.04.2025</span>
	</p>
	
	
	<?php include('includeAffiche.php'); ?>
	<?php include('includeCommentaire.php'); ?>
	
	<img src="image/fond/fleche.php" 	style="position: absolute; left: 100px; top: -200px;" alt="fleche" 	title="fleche" id="fleche" />
	
	
	
	
	
	<!-- Contrôle visuel des donnéees  -->
	
	<div id="lien1" style="position: absolute; left: 2000px; top: 150px; color: black; font-size: 16px;"> 
	
	
	<p>31 = <span id="UnTexte_c31" >31</span></p> <!-- Atriubé -->
	<p>32 = <span id="UnTexte_c32" >32</span></p>
	<p>33 = <span id="UnTexte_c33" >33</span></p>
	<p>34 = <span id="UnTexte_c34" >34</span></p>
	<p>35 = <span id="UnTexte_c35" >35</span></p>
	<p>36 = <span id="UnTexte_c36" >36</span></p>
	<p>37 = <span id="UnTexte_c37" >37</span></p>
	<p>38 = <span id="UnTexte_c38" >38</span></p>
	<p>39 = <span id="UnTexte_c39" >39</span></p>
	<p>40 = <span id="UnTexte_c40" >40</span></p>
	<p>41 = <span id="UnTexte_c41" >41</span></p>
	
	</div>
	
	
	
	
	
	
	
	
	
	
	<script type="text/javascript">		
	
	
// pour lancement du jeux au début mise des feux au vert


its111 = 1; its17 = 1; its18 = 1; its121 = 1; its19 = 1; its20 = 1; its21 = 1; its22 = 1;

z9 = 'vert';
document.getElementById("z5").src = "image/feux/vert_2.png";
document.getElementById("z9").src = "image/feux/vert_2.png";
document.getElementById("z18").src = "image/feux/vert_2.png";

progression_its111 = 9;
occupation_its111= true; sens_its111 = 1;
train2_its111[0] = "ICZ";  train2_its111[1] = 1;  train2_its111[2] = 4;  train2_its111[3] = 0;  train2_its111[4] = 1; train2_its111[5] = '100 IC Lausanne '; train2_its111[6] = 100;



// Fin du lancement du jeux

	

	
	
	
	var timerA = setInterval( 'affichage_image()', 40);  				
	var timerB = setInterval( 'function_occupation()', 1500); 			
	var timerE = setInterval( 'la_date2()', 1000); 
	var timerF = setInterval( 'pn()', 400);
	
	
	loadPlayer();
	
	
	
	
	
	


	
	</script>
	
</body>	

</html>