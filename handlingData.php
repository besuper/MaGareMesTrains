<?php 

header("Content-Type: text/plain");


$chaine = (isset($_POST["chaine"])) ? $_POST["chaine"] : NULL;
$nom = (isset($_POST["nom"])) ? $_POST["nom"] : NULL;

$time = date('d-m-y/H-i');

$ip = $_SERVER["REMOTE_ADDR"];




			
			
try 
{
$bdd = new PDO('mysql:host=database;dbname=magaremestrains', 'root', 'p@ssw0rd');
}
catch (Exception $e)
{
die('Erreur : ' . $e->getMessage());
				}	
				
			
			
			if ( $nom != NULL and $nom != ''  ) { 
			
			
			
			$req = $bdd->prepare('INSERT INTO stat2(
			id, 
			no, 
			nom,
			date1,
			reserve
			)
			VALUES(
			:id, 
			:no, 
			:nom,
			:date1,
			:reserve
			)');
			$req->execute(array(
			'id' => '',
			'no' => $chaine,
			'nom' => $nom,
			'date1' => $time,
			'reserve' => 1
			));
			
			}
			
			
			
			
		



?>