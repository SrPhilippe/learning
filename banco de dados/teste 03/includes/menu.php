<?php include_once 'includes/consulta.php'; ?>
	<nav id="menu">
		<ul>
			<li><a href="painel.php"><i class="fa fa-home"></i>Home</a></li>
			<li><a href="">item 2</a></li>
			<li><a href="">item 3</a></li>
			<li><a href="">item 4</a></li>
			<li><a href="">item 5</a></li>
		</ul>
		
		<ul>
			<li><a href="">
				<div class="img-profile">
					<img src="uploads/<?php echo $path_img ?>" alt="">
				</div>
				<?php echo $_SESSION['user'] ?></a>
				<ul>
					<li><a href="">Item 1</a></li>
					<li><a href="">Item 2</a></li>
					<li><a href="">Item 3</a></li>
					<li><a href="configuracoes.php"><i class="fa fa-cog"></i>Configurações</a></li>
					<li><a href="includes/logout.php"><i class="fa fa-sign-out"></i>Sair</a></li>
				</ul>
			</li>
		</ul>
	</nav>