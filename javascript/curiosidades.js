function mudarCorBackground()
{
    var cores = [ "lavender", "cyan","mistyrose", "aquamarine",
    "lightseagreen", "limegreen", "lightyellow", "indianred", 'white'];
    if (typeof(Storage) !== "undefined") // navegador suporta web storage
    {                  
        if (localStorage.color)  //exite a variavel? SIM
        {
           //muda a posicao do vetor era 0 vira 1
           localStorage.color = Number(localStorage.color) + 1;
            //confere se chegou na posicao final do vetor
            if(localStorage.color==9)
                localStorage.color=0; 
            // preencher corretamente o indice da cor, muda-la
            document.getElementById("corpo").style.backgroundColor = cores[localStorage.color];
           // console.log(localStorage.color);
        }                
        else   //exite a variavel? NÃO
       {
        localStorage.color =0; 
        document.getElementById("corpo").style.backgroundColor = cores[0];
       }  
    }
    else // caso nao possua web storage
    {
        document.getElementById("corpo").style.backgroundColor = cores[6];
    }


}
/////////////////////////////////////////////////////////////////////////////////////////////
function mudarTamanhoLetra()
{
    var letras=['small', 'medium', 'larger']//[ '14px', '16px', '18px'];
    if (typeof(Storage) !== "undefined") // navegador suporta web storage
    {                  
        if (localStorage.letra)  //exite a variavel? SIM
        {
           //muda a posicao do vetor 
           localStorage.letra = Number(localStorage.letra) + 1;

            //confere se chegou na posicao final do vetor
            if(localStorage.letra==3)
                localStorage.letra=0; 
            
            // preencher corretamente o indice da cor, muda-la
            document.getElementById("corpo").style.fontSize = letras[localStorage.letra];
            
        }                
        else   //exite a variavel? NÃO
        {
            localStorage.letra=0;
            document.getElementById("corpo").style.fontSize = letras[localStorage.letra];
        }
    }
    else // caso nao possua web storage
    {
        document.getElementById("corpo").style.fontSize = cores[2];
    }
}
////////////////////////////////////////////////////////////////////////////////////////
function mudarCorLetra()
{
    var cores=['blue', 'red', 'black'];
    if (typeof(Storage) !== "undefined") // navegador suporta web storage
    {                  
        if (localStorage.corletra)  //exite a variavel? SIM
        {
           //muda a posicao do vetor 
           localStorage.corletra = Number(localStorage.corletra) + 1;

            //confere se chegou na posicao final do vetor
            if(localStorage.corletra==3)
                localStorage.corletra=0; 
            
            // preencher corretamente o indice da cor, muda-la
            document.getElementById("escrita").style.color = cores[localStorage.corletra];
            console.log(cores[localStorage.corletra]  );
        }                
        else   //exite a variavel? NÃO
        {
            localStorage.corletra=0;
            document.getElementById("escrita").style.color = cores[localStorage.corletra];
        }
    }
    else // caso nao possua web storage
    {
        document.getElementById("escrita").style.color = cores[0];
    }
}
///////////////////////////////////////////////////////////////////////////////
var foto_Atual = 1;
showSlides(foto_Atual);

// Atualiza o slide pra frente ou pra tras
function atualizaSlide(proximo) 
{
  showSlides(foto_Atual += proximo);
}

// Pontinhos atualizando as fotos do carousel
function slide_Atual(atual) {
  showSlides(foto_Atual = atual);
}

function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > 3) 
  {
    foto_Atual = 1
}
  if (n < 1) 
  {
    foto_Atual = 3;
}
  for (i = 0; i < 3; i++) 
  {
    slides[i].style.display = "none";
  }
  for (i = 0; i < 3; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[foto_Atual-1].style.display = "block";
  dots[foto_Atual-1].className += " active";
}