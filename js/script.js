/*
Apriamo la repo e facciamo subito un commit con il solito boilerplate.
Importiamo Vue tramite CDN (possiamo copiarlo dalle slide, da CDNjs oppure dal questa pagina della documentazione ufficiale).
Inizializziamo e montiamo un'app Vue.
Mettiamo in pagina un h1 il cui contenuto testuale deve derivare dai data di Vue.
BONUS: proviamo ad aggiungere un'immagine, derivante anch'essa dai dati di Vue.

*/

// # verifiche JS
console.log('JS OK');
console.log('Vue OK, Vue');

// # inizializzo Vue JS

    //Estrapolo il metodo createApp
    const app = Vue.createApp ({
        data() {
            return {
                message: 'Hello Vue JS',
                imgVueJs: 'img/vuejs-development-malaysia.jpeg'
            }
        }
    });

    //La monto nell'elemento HTML "radice"
    app.mount('#root');
