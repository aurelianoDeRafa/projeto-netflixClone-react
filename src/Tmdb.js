const API_KEY = 'bc907079ee898cf8c241ffef94cd72f1';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
} 

export default {
    getHomeList: async () => {
      return[
        {
          slug: 'originals',
          title: 'Originais do Netflix',
          itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          slug: 'trendig',
          title: 'Recomendados para Você',
          itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
          slug: 'toprated',
          title: 'Em Alta',
          itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
          slug: 'action',
          title: 'Ação',
          itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          slug: 'comedy',
          title: 'Comédia',
          itens:  await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          slug: 'horror',
          title: 'Terror',
          itens:  await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          slug: 'romance',
          title: 'Romance',
          itens:  await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          slug: 'documentary',
          title: 'Documentário',
          itens:  await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
      ]
    },

    getMovieInfo: async (movieID, type) => {
      let info = {}

      if(movieID) {
        switch(type) {
          case 'movie':
            info = await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`)
          break;
          case 'tv':
            info = await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`)
          break;
          default:
            info = null;
          break;

        }
      }

      return info;
    }
  
}