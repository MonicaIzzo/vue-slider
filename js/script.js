/*
# Carosello Vue JS

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue e un array di oggetti. Le immagini sono le stesse della volta scorsa.
:avviso: Attenzione: ricordate di copiare il template HTML dall'esercizio precedente aiutandovi con la console.

Bonus:
1 - al click su una thumb, visualizzare in grande l'immagine corrispondente
2 - applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3 - quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Se stiamo ripetendo della logica possiamo aiutarci sicuramente centralizzando il codice!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe.

<br>
<br>

- **0**
  - Ricreo il template statico della pagina
- **1**
  - Mi riporto l'arrey di oggetto sotto data
- **2**
  - 
- **3**
  - 
  **4**
  - 
 **5**
  - 
**FINE**  .

*/

// # verifiche JS
console.log('JS OK')
console.log('Vue OK, Vue');

// # inizializzo Vue JS

    //Estrapolo il metodo createApp
    const {createApp} = Vue;

    //inizializzo Vue JS
    const app = createApp({
        data() {
            return {
                imgVueJs: "vuejs-development-malaysia.jpeg"
            }
        }
    });

    //La monto nell'elemento HTML "radice"
    app.mount('#root');
