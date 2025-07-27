<?php 

header("Content-Type: text/plain");



$nom = (isset($_POST["nom"])) ? $_POST["nom"] : NULL;
$train = (isset($_POST["train"])) ? $_POST["train"] : NULL;
$retard = (isset($_POST["retard"])) ? $_POST["retard"] : NULL;
$heure = (isset($_POST["heure"])) ? $_POST["heure"] : NULL;
$chaine = (isset($_POST["chaine"])) ? $_POST["chaine"] : NULL;

$time = date('d-m-y/H-i');


			
try 
{
$bdd = new PDO('mysql:host=database;dbname=magaremestrains', 'root', 'p@ssw0rd');
}
catch (Exception $e)
{
die('Erreur : ' . $e->getMessage());
				}	
				
			
			
			
			
			$req = $bdd->prepare('UPDATE util SET train = :train, retard = :retard, heure = :heure, date = :date WHERE nom = :nom');
			$req->execute(array(
			'train' => $train,
			'retard' => $retard,
			'heure' => $heure,
			'date' => $time,
			'nom' => $nom
			));
			
			
			$req = $bdd->prepare('INSERT INTO stat3(
			id, 
			nom,
			train, 
			retard,
			date,
			util
			)
			VALUES(
			:id, 
			:nom, 
			:train,
			:retard,
			:date,
			:util
			)');
			$req->execute(array(
			'id' => '',
			'nom' => $nom,
			'train' => $train,
			'retard' => $retard,
			'date' => $time,
			'util' => $chaine
			));
			
			
			
			
			
			
		



?>