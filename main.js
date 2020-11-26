// Milestone 3:
// 1. aggiungiamo la copertina del film o della serie
// al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL
// 2. generare da quella porzione di URL tante dimensioni diverse.
// Dovremo prendere quindi l’URL base delle immagini di TMDB:
// https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare
// (troviamo tutte le dimensioni possibili a questo link:
// https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400 ) per poi aggiungere la
// parte finale dell’URL passata dall’API.
// Esempio di URL che torna la copertina di BORIS:
// https://image.tmdb.org/t/p/w185/s2VDcsMh9ZhjFUxw77uCFDpTuXp.jpg

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
