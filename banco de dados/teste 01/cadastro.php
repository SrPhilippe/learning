<?php
	include('conexao.php');

	$nameUser = $_POST['name-user'];
	$cityUser = $_POST['city-user'];

	if (empty($nameUser) || empty($cityUser)) {
		echo 'Nome ou cidade não informado';
	} else {
		$query = mysqli_query($conexao, "INSERT INTO tb_user (name_user, city_user) VALUES ('$nameUser', '$cityUser')") or die(mysqli_error($conexao));

		if ($query) {
			echo "Registrado com Sucesso!";
		}
	}
?>