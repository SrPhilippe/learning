<?php
	session_start();
	include 'includes/connection.php';

	if(empty($_SESSION['user'])) {
		header("Location: index.php");
	}

?>


<!DOCTYPE html>
<html lang="pt-BR">
<?php include 'includes/head.php' ?> <!-- head -->
<body>
	<?php include'includes/menu.php' ?> <!-- menu -->
</body>
</html>