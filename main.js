// MILESTONE 2
// 2- sostituire la lingua con una bandierina che identifica il paese.
// Suggerimento: scarichiamo una manciata di bandierine relative alle lingue che vogliamo gestire (attenzione che la lingua è "en", non "us" o "uk" :wink: ). Quindi andremo ad inserire solamente le bandierine che sappiamo di avere, mentre per le altre lingue di cui non abbiamo previsto la bandierina, lasciamo il codice della lingua testuale

var app = new Vue ({
    el: '#root',
    data: {
        ricercaUtente: '',
        arrayRicerca: [],
        starAverage: 5,
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
        }
    },


    // axios fuori da mounted e dentro methods
    mounted() {
    }

});
