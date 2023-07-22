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
console.log("JS OK");
console.log("Vue OK, Vue");

// # inizializzo Vue JS

//Estrapolo il metodo createApp
/*  const app = Vue.createApp({
        name: 'Carousel',
        data() {
        return {
            currentIndex: 0,
            pictures: images
            }
        },
    });  
*/
const app = Vue.createApp({
  name: "Carousel",
  data() {
    return {
      autoPlay: null,
      currentIndex: 0,
      pictures: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  computed: {
    isLastPicture() {
      return this.currentIndex === this.pictures.length - 1;
    },
  },
  methods: {
    goToNext() {
      if (this.isLastPicture) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    goToPrev() {
      if (this.currentIndex) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.pictures.length - 1;
      }
    },
    setCurrentIndex(targetIndex) {
      this.currentIndex = targetIndex;
    },
    stopAutoPlay() {
      clearInterval(this.autoPlay);
    },
    startAutoPlay() {
      this.autoPlay = setInterval(this.goToNext, 3000);
    },
  },
  mounted() {
    this.startAutoPlay();
  },
});
//La monto nell'elemento HTML "radice"
app.mount("#carousel");
