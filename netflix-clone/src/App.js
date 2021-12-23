import React, { useEffect, useState } from 'react';
import './App.css'
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null)

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

      <section className='featuremovie'>
        {featureData && <FeatureMovie item={featureData}/>}
      </section>
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