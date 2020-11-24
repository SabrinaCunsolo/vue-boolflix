var app = new Vue ({
    el: '#root',
    data: {},

    mounted() {
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: '1cc0557f53399bc65d80d7a4766365c6',
                query: 'joker'
            }
        }).then(results => console.log(results));
    }

});
