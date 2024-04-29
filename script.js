window.onload = function() {
    leggiFile("file.txt", function(error, frasiArray) {
      if (error) {
        console.error("Errore durante la lettura del file:", error);
      } else {
        // Genera un indice casuale nell'intervallo da 0 alla lunghezza dell'array di frasi
        const indiceCasuale = Math.floor(Math.random() * frasiArray.length);
        // Prendi la frase corrispondente all'indice casuale
        const fraseCasuale = frasiArray[indiceCasuale];
        document.getElementById("messaggi").textContent = fraseCasuale;
      }
    });
  };
  
  function leggiFile(nomeFile, callback) {
    fetch(nomeFile)
      .then(response => {
        if (!response.ok) {
          throw new Error("Errore durante il caricamento del file");
        }
        return response.text();
      })
      .then(text => {
        // Split del testo in un array di frasi
        const frasiArray = text.split('\n').filter(Boolean);
        callback(null, frasiArray);
      })
      .catch(error => {
        callback(error, null);
      });
  }
  