<?php

	include "connect.php";

	$qr = $sql->query("SELECT * FROM sistema WHERE id='2'");

	while ($row = $qr->fetch_assoc()) {
		echo $row["id"];
		echo "<br>";
		echo $row["user"];
		echo "<br>";
		echo $row["pass"];
	}
?>


<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Teste Mysqli</title>
</head>
<body>
	
</body>
</html>