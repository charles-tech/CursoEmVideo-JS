function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById('txtano');
  var res = window.document.querySelector('div#res');

  if(fano.value.length == 0 || Number(fano.value.length) > ano){
    window.alert('Verifique os dados  e tente novamente.')
  }else{
    var fsex =document.getElementsByName('radsex');
    var idade = ano - fano.value;
    var genero = '';
    var img = window.document.getElementById('imagem');
    
    if(fsex[0].checked){
      genero = 'Homem';
      if(idade >=0 && idade < 10){
        //criança
        img.src = 'img/menino.png'
      }else if(idade < 50){
        //adulto
        img.src = 'img/homem-adulto.png'
      }else if(idade >51){
        //idoso
        
        img.src = 'img/idoso-adulto.png'
      }
    }else if(fsex[1].checked){
      genero = 'Mulher'
      if(idade >=0 && idade < 10){
        //criança
        img.src = 'img/menina.png'
      }else if(idade < 50){
        //adulto
        img.src = 'img/mulher-adulta.png'
      }else{
        //idoso
        img.src = 'img/idosa-adulta.png'
        

        
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  }
}