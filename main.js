// Milestone 4:
// Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp,
// creando un layout completo simil-Netflix:
// ● Un header che contiene logo e search bar
// ● Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma
// di “card” in cui lo sfondo è rappresentato dall’immagine di copertina ( consiglio
// la poster_path con w342 )
// ● Andando con il mouse sopra una card (on hover), appaiono le informazioni
// aggiuntive già prese nei punti precedenti più la overview

var app = new Vue ({
    el: '#root',
    data: {
        ricercaUtente: '',
        arrayRicerca: [],
        starAverage: 5,
        // array per Flags
        mieFlags: ['de', 'en', 'es', 'fr', 'it', 'ja'],
        // creo array condiviso per film e serie tv
        arrayCondiviso: [],
        film: [],
        serieTv: []
    },
    methods: {
        ricercaFilm () {
            if (this.ricercaUtente != '') {
                // film
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '1cc0557f53399bc65d80d7a4766365c6',
                        query: this.ricercaUtente
                    }
                }).then((results) => {
                    // console.log(results.data.results);
                    this.arrayRicerca = results.data.results

                    this.arrayRicerca.forEach((film) => {
                        film.vote_average = Math.round(film.vote_average / 2);
                        // console.log(film.vote_average);

                    })
                });

                // serie tv
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '1cc0557f53399bc65d80d7a4766365c6',
                        query: this.ricercaUtente
                    }
                }).then((results) => {
                    // console.log(results.data.results);
                    this.arrayRicerca = results.data.results
                    this.arrayCondiviso = [];
                    this.arrayCondiviso = this.film.concat(this.serieTv);

                    this.arrayRicerca.forEach((film) => {
                        film.vote_average = Math.round(film.vote_average / 2);
                        // console.log(film.vote_average);

                    })
                });

            }
        },
        // ricerca img da sistemare parte serie tv
        ricercaPoster (element) {
            let poster = 'imgNotFound.jpg';
            if (element.poster_path != null) {
                poster = 'https://image.tmdb.org/t/p/' + 'w342' + element.poster_path;
            }
            return poster;
        }

    },


    // axios fuori da mounted e dentro methods
    mounted() {
    }

});
