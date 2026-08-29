<?php
header ("Content-type: image/png"); 


$image_png = "1005.png"; 
//GD image 
$image = imagecreatefrompng($image_png); 
imagetruecolortopalette($image, false, 255); 
$fond = imagecolorclosestalpha($image, 255, 255, 220, 0); // 255, 255, 255, 0 fonctionne 255, 255, 220
imagecolortransparent($image, $fond); 


imagepng($image);


?>