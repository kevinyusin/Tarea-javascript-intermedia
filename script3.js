   ///////////EJERCICIO 4 = Tiempo Musical

   function RetornarCanciones (año){
   
    let milnuevesetenta = ['Creedence','Led Zeppelin','The Cure'];     
       let milnuevenoventa=['Soda Estereo','Fabulosos Cadillacs','Rodrigo'];
    
    
    if(año === '1970'){
      return `En el año 1970 los clasicos eran ${milnuevesetenta}`;
    }
    if(año=== '1990'){
      return `En el año 1990 los clasicos eran ${milnuevenoventa}`;
    }
    else{
      return 'Año no valido'
    }
    
  }
  
  RetornarCanciones('1970')
  