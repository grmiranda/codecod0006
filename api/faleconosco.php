<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	header("Content-Type: application/json; charset=UTF-8");
	
	$the_request = &$_POST;
	
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$nome = $request->_nome;
	$assunto = $request->_assunto;
	$email = $request->_email;
	$conteudo = $request->_mensagem;
	
	$assuntoEmail = "CodeOnDemand - FaleConosco";
		
	$mensagem = "<!DOCTYPE html>
		<html>
		<head>
		    <meta charset='utf-8'>
		    <title>Fale Conosco</title>
		    <style media='screen'>
		        .header {
					color: white;
		            border-top-left-radius: 5px;
		            border-top-right-radius: 5px;
		            background-color: #4682B4	;
		            padding: 10px;
		            text-align: center;
		        }
		        .body {
		            border-top-width: thin;
		            border-top-style: solid;
		            border-bottom-width: thin;
		            border-bottom-style: solid;
		            border-color: #e6e6e6;
		            padding: 20px;
		            font-family: Arial;
		        }
		        .link {
		            color: black;
		            text-decoration: none;
		        }
		        
		    </style>
		</head>
		<body style='width: 500px'>
		    <header class='header'>
		        <center> <h2> <b> Fale Conosco </b> </center>
		    </header>
		    <div class='body'>
		        <h3>$assunto</h3>
		        <p>Eu,<b> $nome </b>.</p>
		        <p style='margin-right: 5px;'>$conteudo</p>
		        <br><br>
		        Mensagem enviada por:<b style='color: #4b4b4b'> $nome </b>($email)
		    </div>
		</body>
		</html>";
	
	$header = "MIME-Version: 1.0\n";
	$header .= "Content-type: text/html; charset=UTF-8 charset=iso-8859-1\n";
	$header .= "FROM: contato@codeondemand.com.br\n";
	
	mail("cleybsonc@gmail.com", $assuntoEmail, $mensagem, $header);
	mail("seuze.rick@gmail.com", $assuntoEmail, $mensagem, $header);

	
?>