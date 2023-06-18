/* ------------------------------- VETORES UTEIS -------------------------------------*/
var vetor_perguntas =['Quantos círculos tem o alvo?',
    'O arco e flecha antigamente eram usados para que?',
    'Qual afirmativa abaixo pode ser considerada verdadeira?',
    'Qual foi ano que o tiro com arco entrou nas Olimpíadas?',
    'Qual é o nome do esporte que usa arco e flecha?',
    'Qual é a pontuação máxima de cada tiro com arco?',
    'Quantas cores são exibidas no arco?',
    ' Qual a profissão do homem responsável por trazer esse esporte para o Brasil? ',
    ' O tiro com arco é disputado apenas em:',
    'Qual princesa da Disney é conhecida por ter talento no esporte Tiro com Arco?',
    'Em que ano o Brasil conquistou sua primeira medalha no mundial de tiro com arco na modalidade em duplas?',
    'Qual o personagem da série Riverdale que pratica Tiro com Arco?',
    'As flechas podem ser feitas de:',
    'Qual o nome do atleta de Tiro com Arco que venceu a etapa do campeonato mundial em 2022?',
    'Qual personagem listado abaixo utiliza o arco e a flecha?',
    'Aonde foi fundada a Federação Metropolitana de Arco e Flecha?',
    'De qual foi país foi a campeã na modalidade tiro com arco nas olimpíadas de 2020?',
    'Qual o nome do povo popularmente conhecido no brasil por usar arco e flecha?',
    'Quando são os próximos jogos Panamericanos?',
    'Aonde são os próximos jogos Panamericanos?'];

var respostas_a = [ '10', 'Para colher maças.','A quantidade de pontos obtida quando a flecha acerta a cor azul no arco (3 e 4 pontos).', '2006', 'Tiro com Arco', '100', '10', 'Cozinheiro', 'provas individuais e por equipes(masculinas e femininas).', 'Cinderela', '2017', 'Betty', 'Madeira', 'Joana Marques', 'Bob Esponja', 'Rio de janeiro', 'Espanha', 'Paulistas', '2023', 'La Paz, Bolívia'];
var respostas_b = [ '4', 'Para caçar formigas.', 'A quantidade de pontos obtida quando a flecha acerta a cor azul no arco(5 e 6 pontos).', '1900', 'Tiro ao alvo', '80', '6', 'Comentarista', 'provas por equipes de 3 arqueiros cada.', 'Merida', '2022', 'Archie', 'Aluminio', 'Felipe Abrãao', 'Robin Hood', 'São Paulo','China', 'Cariocas', '2026', 'Montevidéu, Uruguai'];
var respostas_c =[ '5', 'Para caça e guerra.', 'A maior quantidade de pontos é obtida quando a flecha acerta a cor vermelho no arco (7 e 8 pontos)', '1978', 'Arqueiro verde', '50', '5', 'Comissário de Voo', 'provas individuais e por equipes femininas.', 'Tiana', '2019', 'Veronica', 'Plástico', 'Marcos Paulo da Silva', 'Patolino', 'Bahia', 'Japão', 'Indígenas', '2024', 'Tokyo, Japão'];
var respostas_d =[ '8', 'Para palitar os dentes.', 'A maior quantidade de pontos é obtida quando a flecha acerta a cor amarela no arco (7 a 8 pontos).', '1878', 'Arco e flecha', '10', '3', 'Jornalista', 'provas individuais e por equipes masculinas.', 'Melody', '2016', 'Cheryl', 'Cobre', 'Marcus D Almeida', 'Gumball', 'Santa Catarina', 'Coréia do Sul', 'Massapê', '2025', 'Santiago, Chile'];

var respostas_certas = ['10','Para caça e guerra.', 'A quantidade de pontos obtida quando a flecha acerta a cor azul no arco(5 e 6 pontos).', '1900','Tiro com Arco', '10', '5','Comissário de Voo', 'provas individuais e por equipes(masculinas e femininas).','Merida', '2022', 'Cheryl', 'Aluminio', 'Marcus D Almeida','Robin Hood','Rio de janeiro','Coréia do Sul','Indígenas','2023','Santiago, Chile'];
    


/* ------------------------------- FUNCões ---------------------------------------*/
function sorteia_numero_aleatorio()
{
    localStorage.string_perguntas_usadas='';
    localStorage.posicao_atual=0;
    var cont=0;
    var num_random=0;
    var vetor_auxiliar = [-1,-1,-1,-1,-1];
    while(cont!=5)
    {
        num_random = Math.floor(Math.random() * 20);//sorteia numero //0, 2, 3
        if(vetor_auxiliar.includes(num_random)==false)
        {
            vetor_auxiliar[cont] = num_random;
            localStorage.posicao_atual= Number(localStorage.posicao_atual)+1;
            cont++;
        }
    }
    localStorage.string_perguntas_usadas = vetor_auxiliar; 
}

function sorteia_numero_aleatorio_exceto_as_que_ja_existem()
{
    var cont=0;
    var num_random=0;
    var vetor_auxiliar = [-1,-1,-1,-1,-1];
    var vetor_auxiliar2 = localStorage.string_perguntas_usadas.split(","); 
    vetor_auxiliar2 = vetor_auxiliar2.map(Number);

    
    //console.log( "vetor-> " +localStorage.string_perguntas_usadas+' pos-atual ->'+localStorage.posicao_atual);

    while(cont!=5)
    {
        num_random = Math.floor(Math.random() * 20);//sorteia numero //0, 2, 3
        if(  (vetor_auxiliar.includes(num_random)==false) && (vetor_auxiliar2.includes(num_random)==false)  )
        {
            vetor_auxiliar[cont] = num_random;
            localStorage.posicao_atual= Number(localStorage.posicao_atual)+1;
            cont++;
        }
    }
    localStorage.string_perguntas_usadas = vetor_auxiliar +","+ localStorage.string_perguntas_usadas; 

}

function preencher_quiz(vet)//recebe string de perguntas usadas
{
   vet = vet.split(",");//0, 2, 4, 7  10
   var pergunta, a,b,c,d;
   var conteudo=''; 
   for(var i=0;i<5;i++)
   {
       pergunta = vetor_perguntas[vet[i]];
       a = respostas_a[vet[i]];
       b =respostas_b[vet[i]];
       c =respostas_c[vet[i]];
       d =respostas_d[vet[i]];
       //constroi cada pergunta
       conteudo = conteudo +' <h1>'+pergunta+"</h1> <br>   <input type='radio' name='p"+i+"' value='"+a+"' ></input>"+ a +"</label> <br> <label class='input-"+ i+"' > <input type='radio' name='p"+i+"' value='"+b+"' ></input>"+ b +"</label> <br> <label class='input-"+ i+"'> <input type='radio' name='p"+i+"' value='"+c+"' ></input>"+ c +"</label> <br> <label class='input-"+ i+"' > <input type='radio' name='p"+i+"' value='"+d+"' ></input>"+ d +"</label>";
    }

   document.getElementById("quiz").innerHTML = conteudo + '<br><br><input type="button" value="Ver Respostas!" id="btn-resposta" onclick="responderQuiz()" > ';
}
  

function responderQuiz()
{  
    var opc_marcadas=0;
    var inputs = document.getElementsByTagName("input");
    

    //Conta quantas inputs foram marcadas na pagina
    for(var i=0; i<5;i++)//0 1 2 3 4 //5->sair
    {
        for(var j=i*4; j < 4+4*i ;j++)//roda as 4inputs j=16, j<20
        {
           if( inputs[j].checked == true)
           {
            opc_marcadas++;
           }
        }
    }
    if(opc_marcadas<5)
    {
        alert("Preencha as 5 questões do quiz!");
    }
    else // caso estejam as 5 marcadas
    {
        localStorage.cont_acertos =Number(0);
        var vetor_auxiliar = localStorage.string_perguntas_usadas.split(",");
        vetor_auxiliar = vetor_auxiliar.map(Number);

        //corrigir questões
        for(var i=0; i<5;i++)//0 1 2 3 4 //5->sair
        {
            //console.log(respostas_certas[string_perguntas_usadas[i]]);
            for(var j=i*4; j < 4+4*i ;j++)//roda as 4inputs j=16, j<20
            {
                if( inputs[j].checked == true)
                {
                   if(inputs[j].value==respostas_certas[vetor_auxiliar[i]])
                        localStorage.cont_acertos++;
                }
            }
        }
        //console.log("Acertos->");
        //console.log(localStorage.cont_acertos);
        //console.log( "vetor-> " +localStorage.string_perguntas_usadas+' pos-atual ->'+localStorage.posicao_atual);

        var max = localStorage.cont_acertos*20;
        move(max);
        document.getElementById("porcentagem-quiz").innerHTML = "<br>Você acertou " + (localStorage.cont_acertos)*20 +"% das questões!<br>";

        if(localStorage.posicao_atual==20)
        {   localStorage.clear();
            sorteia_numero_aleatorio();
        }
        else
        {
            sorteia_numero_aleatorio_exceto_as_que_ja_existem();
        }

        preencher_quiz(localStorage.string_perguntas_usadas);
    }
}

var i = 0;
function move(max) {
    if (i == 0) {
      i = 1;
      var bar = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 5);
      function frame() {
        if (width >= max ) 
        {
          clearInterval(id);
          i = 0;
        } else 
        {
          width++;
          bar.style.width = width + "%";
          
        }
      }
    }
  }

/* ------------------------------- principal -------------------------------------*/
    // navegador suporta web storage
    if (typeof(Storage) !== "undefined") 
    {                  
        if(!localStorage.string_perguntas_usadas)  //exite a variavel? Não
        {
            sorteia_numero_aleatorio();
            preencher_quiz(localStorage.string_perguntas_usadas);
        }
        else // existe sim
        {
            preencher_quiz(localStorage.string_perguntas_usadas);
        }
            
    }
    else
    {
        document.getElementById("quiz").innerHTML = '<br> <h1> Navegador não suporta WebStorage! </h1> <br> ';
    }