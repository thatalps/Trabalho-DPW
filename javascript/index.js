/* ------------------------------------ CALENDARIO  ------------------------------------ */

//VETORES
var nome_mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var meses_dias = [31,28,31,30,31,30,31,31,30,31,30,31];
//var d_semana_nome = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

//VARIAVEIS
var dia_hoje, mes, ano, primeiro_dia, d_semana, id_item, inicio=1;

//DATA DE HOJE
var data = new Date();
dia_hoje = data.getDate();
mes = data.getMonth();
ano = data.getFullYear();

//PRIMEIRO DIA DO MES E O SEU RESPECTIVO DIA DA SEMANA.
primeiro_dia = new Date(ano, mes, 1);
d_semana = primeiro_dia.getDay();

//confere dia da semana e diz qual quadrado ele começa
switch(d_semana){
    case 0: //domingo
        inicio=1;
        break;
    case 1: //segunda
        inicio=2;
        break;
    case 2: //terca
        inicio=3;
        break;
    case 3: //quarta
        inicio=4;
        break;
    case 4: //quinta
        inicio=5;
        break;
    case 5: //sexta
        inicio=6;
        break;
    case 6: //sabado
        inicio=7;
        break;
}

//coloca o nome do mes na pagina
document.getElementById("nome_mes").innerHTML= nome_mes[mes]

////////////////////////////////////VARIAVEIS DE AUXILIO
//variavel que indica o dia do mês que preenche o calendario
var cont=1; 
//variavel temporaria que indica qual é o numero da caixa que tem que ser destacada como dia de hoje
var temp;

//looping que preenche o calendario
for(var i=inicio ; cont<= meses_dias[mes]; i++)
{ 
    //indica qual caixa preencher
    id_item = "item-"+ i;

    //preenche a caixa com o dia e o dia da semana, pelo menos por enquanto ***********************
    document.getElementById(id_item).innerHTML= cont ;//+ '<br>'+  d_semana_nome[d_semana] ;

    //soma um pra indicar o proximo dia
    cont =cont+1;

    //Caso o dia preenchido seja o dia de hoje, guarda a proxima posição
    //Pois o id_tem correspondente só vai ser adicionado no ínicio do proximo looping
    if ( cont == dia_hoje)
        temp = i+1;
}

//COLORE O FUNDO E MUDA A COR DO QUADRADO DO DIA DE HOJE
document.getElementById("item-"+temp).style.backgroundColor = '#3b6eaa';
document.getElementById("item-"+temp).style.color = 'White';

//REMOVE A ULTIMA FILEIRA DO CALENDARIO QUANDO NAO É USADA!
if (i <=36)
    {document.getElementById("item-36").style.opacity= '0%';
     document.getElementById("item-37").style.opacity= '0%';
     document.getElementById("item-38").style.opacity= '0%';
     document.getElementById("item-39").style.opacity= '0%';
     document.getElementById("item-40").style.opacity= '0%';
     document.getElementById("item-41").style.opacity= '0%';
     document.getElementById("item-42").style.opacity= '0%';
    }



/* ----------------------------------  WEB STORAGE INDEX ------------------------------------ */
            // Para limpar (Firefox): histórico -> dados offline de sites

                if (typeof(Storage) !== "undefined") // navegador suporta web storage
                {                  
                    if (localStorage.num_foto)  //exite a variavel? SIM
                    {
                        localStorage.num_foto = Number(localStorage.num_foto) + 1;

                        if(localStorage.num_foto==4)
                            localStorage.num_foto=1;
                    }                
                    else   //exite a variavel? NÃO
                        localStorage.num_foto =1;    

                    //Apos criar a variavel, ou após preencher corretamente o numero da foto
                    //Preencher a foto:
                    document.getElementById("img-size-3").src = 'Imagens/home' + localStorage.num_foto + ".jpg";
                }
                else // caso nao possua web storage
                {
                    document.getElementById("img-size-3").src = 'Imagens/home1.jpg';
                }

            
