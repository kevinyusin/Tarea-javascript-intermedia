
   ///////////EJERCICIO 5= Recetas


   function GeneradorRecetas(){
    let accion=['Poner','Desmenuzar','Cortar']
    let ingrediente=['Papa','Carne galactica','Lechuga marina']
    let coccion=['Freir en aceite de foca','Poner a freidora de aire']
    
    let Instruccion=`${Aleatorio(accion)} ${Aleatorio(ingrediente)} ${Aleatorio(coccion)} durante 10 minutos y llevarlo a la cocina molecular `
    
    return Instruccion
    
    
  }
  
  function Aleatorio(lista){
    return lista[Math.floor(Math.random()*lista.length)]
    
  }
  
  
  GeneradorRecetas()