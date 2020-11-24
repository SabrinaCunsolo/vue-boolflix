// MILESTONE 2
// La seconda milestone è a sua volta suddivisa in 3 punti:
// 1- sostituire il voto numerico su base 10 in un voto su base 5 e visualizzare in totale 5 stelline, di cui tante piene quanto è il voto arrotondato (non gestiamo stelline a metà). Ad esempio, se il voto è 8.2, dobbiamo visualizzare 4 stelline piene e 1 stellina vuota (in totale sempre 5)

var app = new Vue ({
    el: '#root',
    data: {
        ricercaUtente: '',
        arrayRicerca: [],
    },
    methods: {
        ricercaFilm () {
            if (this.ricercaUtente != '') {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '1cc0557f53399bc65d80d7a4766365c6',
                        query: this.ricercaUtente
                    }
                }).then((results) => {
                    // console.log(results.data.results);

                    this.arrayRicerca = results.data.results
                });
            }
        }
    },

    // stelle da 10 a 5 ---> diviso 2
    starAverage (vote) {
        return Math.round(vote/2);
    },

    // axios fuori da mounted e dentro methods
    mounted() {
    }

});
