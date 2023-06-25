/*
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue e un array di oggetti. Le immagini sono le stesse della volta scorsa.
Attenzione: ricordate di copiare il template HTML dall'esercizio precedente aiutandovi con la console. ???? NON HO CAPITO PERCHÉ CI CHIEDE DI FARE COSI

Bonus:
1 - al click su una thumb, visualizzare in grande l'immagine corrispondente
2 - applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3 - quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

- **0**
  - Ricreo il template statico della pagina
- **1**
  - Svuoto il template
- **2**
  - Mi riporto l'arrey di oggetto sotto data
- **3**
  - 
  **4**
  - 
 **5**
  - 
**FINE**  

*/

// # verifiche JS
console.log('JS OK');
console.log('Vue OK, Vue');

// # inizializzo Vue JS

    //Estrapolo il metodo createApp
/*    const app = Vue.createApp ({
        name: 'Carousel',
        images() {
            return {
                CurrentIndex: 0,
                image: images.image
                }
            },
        });
*/

    const app = Vue.createApp({
        name: 'Carousel',
        data() {
        return {
            currentIndex: 0,
            pictures: ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/05.webp', 'img/05.webp']
            }
        },
    });    


    //La monto nell'elemento HTML "radice"
    app.mount('#carousel');
