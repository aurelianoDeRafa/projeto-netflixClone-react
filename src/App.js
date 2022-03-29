import React, { useEffect, useState} from 'react';
import Tmdb from './Tmdb';

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie'

import './App.css'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [ featuredData, setFeaturedData] = useState(null)

  useEffect(()=> {
    const loadAll = async () => {
      //Pegando a lista total
       let list = await Tmdb.getHomeList();
      setMovieList(list);
      

      //Pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let rendomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      let chosen = originals[0].itens.results[rendomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, []);


  return (
    <div className="page">

      {featuredData && 
         <FeaturedMovie item={featuredData}/>
      }

      <section className="list">
        {movieList.map((item, key) => (
         <MovieRow key={key} title={item.title} itens={item.itens} />
        ))}
      </section>
    </div>
  )
}