<?php

include_once('conexao.php');

session_start();

if (empty($_SESSION['userMail'])) {
	header("location: check.php?action=denied");
}

$userMail = $_SESSION['userMail'];

	$query = mysqli_query($connect, "SELECT * FROM tabela_users WHERE mail_user='$userMail'") or die("ERRO");

	$linhas = mysqli_num_rows($query);

	while($dados = mysqli_fetch_assoc($query)) {
		$_SESSION['userName'] = $dados['name_user'];
		$_SESSION['idUser'] = $dados['id'];
	}

	$idUser = $_SESSION['idUser'];

	// Upload imagem

	$msg = false;

	if (isset($_FILES['arquivo'])) {

		$extensao = strtolower(substr($_FILES['arquivo']['name'], -4));
		$novoNome = $idUser . $extensao;
		$diretorio = 'upload/';

		move_uploaded_file($_FILES['arquivo']['tmp_name'], $diretorio.$novoNome);
	}

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Painel</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<?php echo 'Bem-vindo(a) '. $_SESSION['userName']; ?>

	<form action="painel.php" method="post" enctype="multipart/form-data">
		<input type="file" name="arquivo">
		<input type="submit" value="salvar">
	</form>
	<a href="logout.php">Desconectar</a>
</body>
</html>