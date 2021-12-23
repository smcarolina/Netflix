import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import './App.css'

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //carregando lista de filmes
      let list = await tmdb.getHomeList();

      setMovieList(list)
    }

    loadAll();
  }, [])

  


  return (
    <div className='page'>
      <section className='lists'>
        {console.log(movieList)}
        {movieList.map((movie, key)=>{
         return <MovieRow 
          key={key}
          title={movie.title}
          items={movie.items}
          />
        })}
      </section>
      {/* Header
      Destaque
      Listas
      Rodapé */}
    </div>

  );
}