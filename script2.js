     ///////////EJERCICIO 3 = HISTORIAS ABSURDAS

     let nombreBanda = generarNombreBanda();
     console.log(nombreBanda);
     
     
     function generarHistoriaabsurda(){
       
       let  sujetos = ['El pulpo gigante', 'Un pingüino pequeño', 'La tostadora agresiva', 'Un extraterrestre despistado']
        let acciones = ['se enamoró de', 'inventó una máquina para', 'viajó en el tiempo con', 'convirtió todo en gelatina usando']
         let objetos = ['una pizza con anana', 'un sombrero monstruoso', 'una escalera de caracol', 'una silla voladora']
     
         
         
         
       let historia = `${elegirAleatorio(sujetos)} , ${elegirAleatorio(acciones)} , ${elegirAleatorio(objetos)} `
       historia += `Luego ${elegirAleatorio(sujetos)} , ${elegirAleatorio(acciones)} , ${elegirAleatorio(objetos)} `
       
       
     
         return historia
     }
     
     
     function elegirAleatorio(lista){
       
       return lista[Math.floor(Math.random() * lista.length)];
       
     }
     
     generarHistoriaabsurda()