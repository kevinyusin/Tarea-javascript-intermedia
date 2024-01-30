

   ///////////EJERCICIO 6= Planetas



   function generarPlaneta() {
    let colores = ["Rojo", "Azul", "Verde", "Amarillo", "Morado", "Naranja"];
    let elementosQuimicos = ["Hidrógeno", "Helio", "Litio", "Oxígeno", "Carbono", "Neón"];
    let fenomenosCosmicos = ["Nebulosa", "Agujero negro", "Anillo de asteroides", "Supernova", "Cúmulo estelar"];
  
    function elegirAleatorio(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
  
    let nombreColor = elegirAleatorio(colores);
    let nombreElementoQuimico = elegirAleatorio(elementosQuimicos);
    let nombreFenomenoCosmico = elegirAleatorio(fenomenosCosmicos);
  
    let nombrePlaneta = `${nombreColor} ${nombreElementoQuimico}`;
    let caracteristicaPlaneta = `${nombreColor} ${nombreFenomenoCosmico}`;
  
    return { nombre: nombrePlaneta, caracteristica: caracteristicaPlaneta };
  }
  
  const planeta = generarPlaneta();
  console.log("Nombre del planeta:", planeta.nombre);
  console.log("Característica del planeta:", planeta.caracteristica);
    
    
  
    
  