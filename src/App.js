import React, { useEffect, useState} from 'react';
import Tmdb from './Tmdb';

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

import './App.css'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [ featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

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

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])


  return (
    <div className="page">

      <Header  black={blackHeader}/>

      {featuredData && 
         <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) => (
         <MovieRow key={key} title={item.title} itens={item.itens} />
        ))}
      </section>

      <footer>
        feito com <span role=""img aria-label="coração">❤</span> por Rafael Aureliano <br/>
        Direito de imagem para NetFlix <br/>
        Dados pegos do sites Themoviw.org
      </footer>

        {movieList.length <= 0 &&
      <div className='loading'>
        <img src='https://www.rchandru.com/images/portfolio/loading.gif' alt='Carregando' />
      </div>}
    </div>
  )
}