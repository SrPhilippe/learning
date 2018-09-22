<?php include_once('conexao.php') ?>

<?php
	session_start();
	if (isset($_SESSION['username'])) {
		header("Location: painel.php");
	}

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Página de Cadastro</title>
	<link rel="stylesheet" href="style.css">

	<!-- scripts -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="scripts.js"></script>
</head>
<body>
	<h1 class="current-title-form">Cadastrar</h1>
	<form action="check.php" method="POST">
		<label for="name_user">Usuário</label>
		<input class="form-info" type="text" name="name_user" id="name_user">

		<label for="mail_user">E-mail</label>
		<input class="form-info" type="email" name="mail_user" id="mail_user">

		<label for="password_user">Senha</label>
		<input class="form-info" type="password" name="password_user" id="password_user">

		<label for="repassword_user">Confirmar senha</label>
		<input class="form-info" type="password" name="repassword_user" id="repassword_user">

		<input type="submit" value="Cadastrar">
		<input type="button" value="Fazer Login">
	</form>


	<form action="check.php" method="POST">
		<label for="mail_check">E-mail</label>
		<input class="form-info" type="text" name="mail_check" id="mail_check">

		<label for="password_check">Senha</label>
		<input class="form-info" type="password" name="password_check" id="password_check">

		<input type="submit" value="Fazer Login">
		<input type="button" value="Cadastrar">
	</form>

</body>
</html>