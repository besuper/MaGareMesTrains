function getXMLHttpRequest() {
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}




function request4(nom, chaine) {
	var xhr = getXMLHttpRequest();
	nom = encodeURIComponent(nom);
	xhr.open("POST", "handlingData.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("nom="+nom+"&chaine="+chaine+"");
}

function request5(nom, le_nombre_de_train, train_retard, train_heure, chaine) {
	var xhr = getXMLHttpRequest();
	nom = encodeURIComponent(nom);
	xhr.open("POST", "handlingData2.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("nom="+nom+"&train="+le_nombre_de_train+"&retard="+train_retard+"&heure="+train_heure+"&chaine="+chaine+"");
}




