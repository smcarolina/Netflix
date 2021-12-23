import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //carregando lista de filmes
      let list = await tmdb.getHomeList();

      setMovieList(list);
    }

    loadAll();
  }, [])

  return (
    <div>
      <p>Olá Mundo</p>
    </div>

  );
}