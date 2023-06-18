/* ------------------------------------ Criação de eventos  ------------------------------------ */
function inserirEvento()
{
    var n = document.getElementById("nome-evento").value;
    var d = document.getElementById("descricao-evento").value;
    var imprimir = "<h4> "+ n +" </h4> <p>"+ d +" </p> ";
    document.getElementById("eventos").innerHTML +=imprimir;
    
    var n = document.getElementById("nome-evento").value ='';
    var d = document.getElementById("descricao-evento").value= '';
}


/* ------------------------------------ Curiosidade Aniversario  ------------------------------------ */
function comparaEvento()
{
    var aniversario = document.getElementById("data-aniversario").value;
   
    var ano, mes, dia, antes_depois, igual=false;
    aniversario = aniversario.split('-');
    ano =parseInt(aniversario[0]);
    mes =parseInt(aniversario[1]);
    dia =parseInt(aniversario[2]);
    if (aniversario=='')
    {
        document.getElementById("resposta-comparacao-evento").innerHTML =  'Insira valores válidos, por favor!';
    }
    else
    { 
        var olimpiada = new Date(1900, 5 ,14);
        var data_aniversario = new Date(ano,mes,dia);
        
        
    
    
        if ( (ano==1900) && (mes==5) && (dia==14) )
            igual = true;
    
        if (ano > 1900)
            ano = ano - 1900;
        else
            ano = 1900 - ano;
    
        if( mes > 5)
            mes = mes - 5;
        else
            mes = 5 - mes;
    
        if(dia>14)
            dia = dia - 14;
        else
            dia = 14 - dia;
    
        if(igual==true)
            antes_depois = 'A primeira olímpíada em que o esporte Tiro com Arco participou foi em 14/05/1900, <br>ocorreu '+dia+' dia(s), '+mes+' mes(es), e '+ano+' anos antes do seu nascimento!<br>Ou seja, exatamente no mesmo dia! Incrível!';  
        else if(olimpiada>data_aniversario)
            antes_depois = 'Ou seja, a primeira olímpíada em que o esporte Tiro com Arco participou foi em 14/05/1900, <br> ocorreu '+dia+' dia(s), '+mes+' mes(es), e '+ano+' anos depois do seu nascimento!';
        else
            antes_depois = 'Ou seja, a primeira olímpíada em que o esporte Tiro com Arco participou foi em 14/05/1900,<br> ocorreu '+dia+' dia(s), '+mes+' mes(es), e '+ano+' anos antes do seu nascimento!';
    
        document.getElementById("resposta-comparacao-evento").innerHTML =  antes_depois;

    }
   
}