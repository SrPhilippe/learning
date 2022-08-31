<?php
	session_start();
	include 'includes/connection.php';

	if(isset($_SESSION['user'])) {
		header("Location: painel.php");
	}

?>


<!DOCTYPE html>
<html lang="pt-BR">
<?php include 'includes/head.php' ?> <!-- head -->
<body>
	<div id="info-msg">
		<div class="box-msg">
			<p class="msg">
			<?php 

			if (isset($_GET['msg'])) {
				if($_GET['msg'] == 1) {
					echo 'Usuário ou senha não foi preenchido';
				} else if ($_GET['msg'] == 2) {
					echo 'Os dados preenchidos estão incorretos ou não existem';
				} else if ($_GET['msg'] == 3) {
					echo 'Deslogado com sucesso!';
				} else if ($_GET['msg'] == 4) {
					echo 'Algum campo não foi preenchido';
				} else if ($_GET['msg'] == 5) {
					echo 'Este usuário ou e-mail já existe';
				} else if ($_GET['msg'] == 6) {
					echo 'Conta criada com sucesso, agora você pode logar no sistema!';
				}
			}

			?>
			</p>
			<p class="close">X</p>
		</div>
	</div>
	<div id="box-form">
		<form action="includes/verify.php?type=login" method="POST" class="login">
			<p class="desc">Nickname</p>
			<input type="text" name="username">
			<p class="desc">Senha</p>
			<input type="password" name="password">
			<input type="submit" value="Logar"></input>
			<input type="button" value="Registrar"></input>
		</form> <!-- form login -->

		<form action="includes/verify.php?type=register" method="POST" class="register">
			<p class="desc">Nickname</p>
			<input type="text" name="username_c">
			<p class="desc">E-mail</p>
			<input type="email" name="email_c">
			<p class="desc">Senha</p>
			<input type="password" name="password_c">
			<p class="desc">Confirmação de Senha</p>
			<input type="password">
			<input type="submit" value="Registrar"></input>
			<input type="button" value="Logar"></input>
		</form> <!-- form cadastro -->
	</div>
</body>
</html>