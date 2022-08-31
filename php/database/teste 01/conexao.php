<?php

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'banco';

$conexao = mysqli_connect($host, $user, $pass) or die('Erro de conexão com banco de dados');
$banco = mysqli_select_db($conexao, $db) or die('O banco de dados '. '"<b>'. $db. '</b>"'. ' não existe ou não é válido.');

 ?>