/*
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            listaSpesa: [
                {
                    nomeProdotto: 'pasta',
                    comprato: false 
                },
                {
                    nomeProdotto: 'pane',
                    comprato: false 
                },
                {
                    nomeProdotto: 'insalata',
                    comprato: false 
                },
                {
                    nomeProdotto: 'torta',
                    comprato: false 
                },
                {
                    nomeProdotto: 'acqua',
                    comprato: false 
                }
            ]
        }
    },
    methods: {
        inserisciProdotti(){
            const nuovo = {
                nomeProdotto: this.nuovoProdotto,
                comprato: false
            }
            this.listaSpesa.push(nuovo);
            this.nuovoProdotto = '';
        },
        prodottoComprato(index){
            this.listaSpesa[index].comprato = true;
        },
        prodottoEliminato(index){
            this.listaSpesa.splice(index, 1);
        }
    }
}).mount('#app');