<?php

session_start();
include 'includes/connection.php';

?>
<!DOCTYPE html>
<html lang="pt-BR">
	<title>Configurações</title>
	<?php include'includes/head.php' ?> <!-- head -->
<body>
	<?php include'includes/menu.php' ?> <!-- menu -->
	<div id="box-form">
		<form action="includes/upload.php" method="POST" enctype="multipart/form-data">
			<p class="desc">Imagem de perfil</p>
			<input type="file" name="file" id="file">
			<label for="file" class="input-file">Escolher arquivo</label>
			<input type="submit" value="Salvar">
		</form>
	</div>
</body>
</html>