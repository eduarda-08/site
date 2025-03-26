<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para o namorado mais lindo de todos</title>

    <style>
        body{
            background-color: red;
        }

        .painel{
            margin: auto;
            background-color: white;
            width: 550px;
            height: 550px;
            border-radius: 20px;
            text-align: center;
            padding-top: 50px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        #sim{
            height: 40px;
            width: 60px;
            background-color: red;
            border: 2px solid white;
            border-radius: 10px;
            color: white;
            margin-left: -50px;
        }
        #nao{
            position: absolute;
            height: 40px;
            width: 60px;
            background-color: red;
            border: 2px solid white;
            border-radius: 10px;
            color: white;
            margin-left: 10px;
        }

    </style>

</head>
<body>

    <div class="painel">
        <h1>Para o Namorado Mais Lindo de Todos</h1><br />

        <img src="https://gifman.net/wp-content/uploads/2019/06/ursinho-fofo-apaixonado.gif" alt="">

        <h2>Aceita ficar me aguentando para sempre?</h2>
       

        <a href=""><button id="sim" > Sim! </button></a>
        <button onmouseover="fuja()" id="nao"> Não! </button>
       
    </div>

    <script>
        function fuja(){
            var botaoNao = document.getElementById("nao")

            var larguraJanela = window.innerWidth;
            var alturaJanela = window.innerHeight;

            var maxX = larguraJanela - botaoNao.offsetWidth;
            var maxY = alturaJanela - botaoNao.offsetHeight;

            var aleatorioX = Math.floor(Math.random() * maxX);
            var aleatorioY = Math.floor(Math.random() * maxY);

            botaoNao.style.left = aleatorioX + "px";
            botaoNao.style.top = aleatorioY + "px";


        }
    </script>



   
</body>
</html>
