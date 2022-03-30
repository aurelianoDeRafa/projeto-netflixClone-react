import React from 'react';
import './FeaturedMovie.css'

export default ({item}) => {

  let firstDate = new Date(item.first_air_date);
  let genres = []
  for( let i in item.genres) {
    genres.push( item.genres[i].name )
  }

  let descripton = item.overview
  if(descripton.length > 200) {
    descripton = descripton.substring(0, 200)+'...';
  }
  console.log(item)

  return (
    
    <section className='featured' style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
     <div className='featured--vertical'>
       <div className='featured--horizontal'>
         <div className='featured--name'>{item.original_name}</div>
         <div className='feature--info'>
              <div className='featured--points'>{item.vote_average} Pontos</div>
              <div className='featured--year'>{firstDate.getFullYear()}</div>
              <div className='featured--seasons'> {item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
         </div>
         <div className='featured--description'>{descripton}</div>
         <div className='featured--button'>
            <a href={`/watch/${item.id}`} className='featured--watchButton'>Assistir</a>
            <a href={`/list/add/${item.id}`}className='featured--myListButton'>+ Minha Lista</a>
         </div>
         <div className='featured--genres'> <strong>Gêneros: </strong>{genres.join(', ')}</div>
       </div>
     </div>
    </section>
  )
}