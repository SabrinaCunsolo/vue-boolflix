// MILESTONE 1
// Creare un layout di base con una barra di ricerca composta da un input e un pulsante. Quando l'utente clicca sul pulsante, facciamo una chiamata all'API https://api.themoviedb.org/3/search/movie ricordandoci di passare la nostra API key e la query di ricerca, ossia il testo inserito dall'utente nell'input.
// Con i risultati che riceviamo, visualizziamo in pagina una card per ogni film, stampando per ciascuno:
// titolo
// titolo in lingua originale
// lingua originale
// voto

var app = new Vue ({
    el: '#root',
    data: {
        ricercaUtente: '',
    },
    methods: {
        ricercaFilm () {
            if (this.ricercaUtente != '') {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '1cc0557f53399bc65d80d7a4766365c6',
                        query: 'joker'
                    }
                }).then(results => console.log(results));
            }
        }
    },
    // axios fuori da mounted e dentro methods
    mounted() {
    }

});
