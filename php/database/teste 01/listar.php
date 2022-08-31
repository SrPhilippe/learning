<?php 
	include('conexao.php');
	
	$query = mysqli_query($conexao, "SELECT * FROM tb_user") or die("Erro na seleção da tabela");

	$linhas = mysqli_num_rows($sql);

	while($dados = mysqli_fetch_assoc($sql)) {
		echo $dados['name_user'];
	}
?>