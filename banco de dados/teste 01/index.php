<?php include_once('conexao.php'); ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Cadastro Usuário</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<form action="cadastro.php" method="post">
		<p>Nome</p>
		<input type="text" name="name-user">
		<p>Cidade</p>
		<input type="text" name="city-user">
		<input type="submit" value="Cadastrar">
	</form>
	
</body>
</html>