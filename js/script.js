/*
  Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

*/

/*
  Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato (e seleziona il contatto come “attivo”)
*/

/*
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/


const app = new Vue({


  el: '#app',


  data:{

    user: {
        name: 'Salvo',
    },
    //creo un array di oggetti
    contacts: [

      {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
          },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di dargli da mangiare',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [{
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
          },
              {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
              },
              {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
          },
              {
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent'
              },
              {
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Luisa',
          avatar: '_4',
          visible: true,
          messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
          },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received'
              }
          ],
      },
  ],

  activeContact: -1,

  newMessage: '',



  },

  methods:{
    //creo una funzione in cui do come parametro d'ingresso index
    showMessages(index){
      console.log('contatto numero:', index);
      //questa condizione avrei potuta scriverla direttamente nel click
      this.activeContact = index;
    },

    //creo una funzione che mi permetta di visualizzare l'ultimo messaggio del contatto
    showLastMessage(index){
         let lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;
         if(lastMessage.length > 30){
             lastMessage = lastMessage.substr(0,30)+'...';
         }
        
        return lastMessage;

        //mi puo servire come fosse un console log quando dentro la funzione non ho scritto ancora nulla 
        //return 'lastMessage';
    },

    
    sendMessage(){
        // creo una funzione che pusha all'interno dell'array di messaggi una proprietà vuota collegata al v-model 
        this.contacts[this.activeContact].messages.push({
            date: '10/01/2020 15:30:55',
            message: this.newMessage,
            status: 'sent'
        });

        //resetto l'input 
        this.newMessage = '';

        this.receivedNewMessage();
    },

    
    receivedNewMessage(){
        //creo una funzione che tramite ad una timing function al suo interno invia dopo un 1s un messaggio
        setTimeout(() => {
            this.contacts[this.activeContact].messages.push({
                date: '10/01/2020 15:30:55',
                message: 'okay',
                status: 'received'
            });
        }, 1000);

    }
 




  }


})