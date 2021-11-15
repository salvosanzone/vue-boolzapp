/*
  Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

*/


const app = new Vue({


  el: '#app',


  data:{
    //creo un array di oggetti
    contacts: [
      {
        nome: 'Michele',
        immagine: 'img/avatar_1.jpg'
      },
      {
        nome: 'Fabio',
        immagine: 'img/avatar_2.jpg'
      },
      {
        nome: 'Samuele',
        immagine: 'img/avatar_3.jpg'
      },
      {
        nome: 'Luisa',
        immagine: 'img/avatar_4.jpg'
      },
    ]


  },

  methods:{




  }


})