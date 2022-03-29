import React from 'react';
import './FeaturedMovie.css'

export default ({item}) => {
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
              <div className='feature--points'>{item.vote_average}</div>
              <div className='featured--year'>2888</div>
              <div className='featured--seasons'>{item.number_of_seasons}</div>
         </div>
       </div>
     </div>
    </section>
  )
}