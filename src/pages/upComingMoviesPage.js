import React from 'react';
import PageTemplate from "../components/templateMovieListPage";
import Spinner from '../components/spinner'
import { useQuery } from 'react-query'
import {getUpComingMovies} from '../api/tmdb-api'



const UpcomingMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpComingMovies)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;
  //const favorites = movies.filter(m => m.favorite)
 // localStorage.setItem('favorites', JSON.stringify(favorites))

 


  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      
    />
  );
};

export default UpcomingMoviePage;