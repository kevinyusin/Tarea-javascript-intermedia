
///////////EJERCICIO 1= BANDAS ALEATORIAS

function generarNombreBanda() {
 let bandas1 = ['callejeros', 'rojos', 'sorprendentes', 'grandes', 'perros', 'dinosaurios'];
  let bandas2 = ['los gigantes', 'zapallos', 'galacticos', 'lunares', 'babasonicos', 'fabulosos'];


  let banda1 = bandas1[Math.floor(Math.random() * bandas1.length)];
  let banda2 = bandas2[Math.floor(Math.random() * bandas2.length)];
 

  return `${banda1} ${banda2}`;
}


