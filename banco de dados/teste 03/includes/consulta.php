<?php 
$id = $_SESSION['id'];
$sqlImg = "SELECT * FROM users WHERE id='$id'";
$resultImg = mysqli_query($conn, $sqlImg);
while($rowImg = mysqli_fetch_assoc($resultImg)) {
	$path_img = $rowImg['img'];
}



?>