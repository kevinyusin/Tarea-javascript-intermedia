  //EMOJI

function convertirAEmoji(emocion) {

    switch (emocion) {
        case "feliz":
            return "😃";
        case "triste":
            return "😢";
        case "sorprendido":
            return "😯";
        case "enojado":
            return "😠 ";
        case "asustado":
            return "😱 ";
        default:
            return "No reconozco esa emoción";
    }
  }
  
 
  let emocion = "";
  let mensajeEmoji = convertirAEmoji(emocion);
  console.log(mensajeEmoji);
  



  