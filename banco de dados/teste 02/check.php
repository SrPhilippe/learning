<?php 

	include('conexao.php');

// Informações do usuário sendo cadastrado
	if (isset($_POST['name_user'])) {
		$nameUser = $_POST['name_user'];
	}
	if (isset($_POST['mail_user'])) {
		$mailUser = $_POST['mail_user'];
	}
	if (isset($_POST['password_user'])) {
		$password = $_POST['password_user'];
	}
	if (isset($_POST['repassword_user'])) {
		$repassword = $_POST['repassword_user'];
	}
// Informações do usuário sendo logado
	if (isset($_POST['mail_check'])) {
		$mailCheck = $_POST['mail_check'];
	}
	if (isset($_POST['password_check'])) {
		$passwordCheck = $_POST['password_check'];
	}


	// Ações com método GET
	if (isset($_GET['action'])) { $action = $_GET['action']; }

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Cadastrando</title>
</head>
<body>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Open Sans', arial, sans-serif;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	span {
		display: block;
		text-align: center;
		background: #EF4836;
		color: #fff;
		padding: .5em 1em;
		border-radius: 3px;
	}

	button.back {
		padding: .8em 2em;
		cursor: pointer;
		background: #F62459;
		border: none;
		color: #fff;
		font-size: 1em;
	} button.back:hover {
		background-color: #DB0A5B;
	}

	.msg {
		animation: 1s fade;
		margin-bottom: 1em;
	}

	@keyframes fade {
		from { opacity: 0; margin-top: 100px; }
		to   { opacity: 1; margin-top: 0; }
	}

</style>
	<?php 
if (empty($_GET)) {
	if (empty($mailCheck) || empty($passwordCheck)) {
		if (empty($nameUser)) {
			echo '<span class="msg">Nome de usuário não preenchido!</span>';

		} else if (empty($mailUser)) {
			echo '<span class="msg">E-mail do usuário não preenchido!</span>';

		} else if (empty($password)) {
			echo '<span class="msg">Senha do usuário não preenchida!</span>';

		} else if (empty($repassword)) {
			echo '<span class="msg">Confirmação de senha não preenchido!</span>';

		} else {
			$query = mysqli_query($connect, "SELECT * FROM tabela_users WHERE mail_user='$mailUser' OR name_user='$nameUser'");

			if (mysqli_num_rows($query) >= 1) {
			echo '<span class="msg">Usuário ou E-mail já em uso. Por favor selecione outro.</span>';
			} else {
				echo '<span class="msg">Cadastrando...</span>';
				$query = mysqli_query($connect, "INSERT INTO tabela_users (name_user, mail_user, password, password_c) VALUES ('$nameUser', '$mailUser', '$password', '$repassword')");
				if ($query) {
				echo '<span class="msg">Registrado com Sucesso</span>';
				}
			}
		}
	}

	if (empty($nameUser)) {
		if (empty($mailCheck) || empty($passwordCheck)) {
			echo '<span class="msg">E-mail ou senha não foram preenchidos</span>';
		} else {
			$query = mysqli_query($connect, "SELECT * FROM tabela_users WHERE mail_user='$mailCheck' AND password='$passwordCheck'");

		if (mysqli_num_rows($query) <= 0) {
			echo '<span class="msg">Dados Incorretos ou inexistentes</span>';
		} else {
			echo '<span class="msg">Logado com Sucesso!</span>';
			session_start();
			$_SESSION['userMail'] = $mailCheck;
			header('Refresh: 2; URL=painel.php');
			}
		}
	}
}


if (isset($action) && $action == 'denied') {
	echo '<span class="msg">Você precisa estar logado para acessar o painel!</span>';
	header("Refresh: 2, URL=index.php");
}

	?>
	<button class="back" onclick="window.location='index.php'">Voltar</button>
</body>
</html>