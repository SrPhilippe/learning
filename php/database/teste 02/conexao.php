<?php 
	

	$connect = mysqli_connect('localhost', 'root', '') or die('Erro');
	$db = mysqli_select_db($connect, 'banco') or die('Erro');

?>