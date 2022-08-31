<?php

$result = array(
	"status" => "",
	"message" => ""
	);

if (isset($_FILES["avatar"])) {
	$file = $_FILES["avatar"];
	$fileName = $_FILES["avatar"]["name"];
	$fileTmpName = $_FILES["avatar"]["tmp_name"];
	$fileSize = $_FILES["avatar"]["size"];
	$fileError = $_FILES["avatar"]["error"];
	$fileType = $_FILES["avatar"]["type"];
	$fileExt = explode(".", $fileName);
	$fileActualExt = strtolower(end($fileExt));

	$result["message"] = $fileName;

	if ($fileError === 0) {
		$fileNameNew = uniqid("", true). "." . "png";
		$fileDestination = "uploads/". $fileNameNew;
		move_uploaded_file($fileTmpName, $fileDestination);
		$result["status"] = "SUCESSO NO UPLOAD!";
	} else {
		$result["status"] = "ERRO NO UPLOAD!";
	}

	exit(json_encode($result, JSON_PRETTY_PRINT));

} else {
	exit("Falha");
}