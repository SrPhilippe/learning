<?php
session_start();

$id = $_SESSION['id'];

include 'connection.php';

if (isset($_FILES['file'])) {
	$file = $_FILES['file'];

	$fileName = $_FILES['file']['name'];
	$fileTmpName = $_FILES['file']['tmp_name'];
	$fileSize = $_FILES['file']['size'];
	$fileError = $_FILES['file']['error'];
	$fileType = $_FILES['file']['type'];

	$fileExt = explode('.', $fileName);
	$fileActualExt = strtolower(end($fileExt));

	$allowed = array('jpg', 'jpeg', 'png');

	if (in_array($fileActualExt, $allowed)) {
		if ($fileError === 0) {
			if ($fileSize < 10000000) {
				$fileNewName = $_SESSION['id'] . '.' . $fileActualExt;
				$fileDestination = '../uploads/' . $fileNewName;
				move_uploaded_file($fileTmpName, $fileDestination);
				$sql = "UPDATE users SET img='$fileNewName' WHERE id='$id'";
				$select = mysqli_query($conn, $sql);
				header("Location: ../configuracoes.php?upload=success");
			} else {
				echo 'Arquivo muito grande! Adicine um arquivo com menos de '. '500000kb<br>';
				echo 'Seu arquivo atual possuí: '. $fileSize . ' kb';
			}
		} else {
			echo 'Problema com o upload';
		}
	} else {
		echo 'Você não pode enviar este tipo de arquivo!';
	}

} else {

}


?>