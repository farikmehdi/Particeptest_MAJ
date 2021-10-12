import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchMoviesAsync} from "./features/movies/moviesSlice";



import './App.css';
import {MoviesList} from "./features/movies/MoviesList";

function App() {

  // Load Movies data (useEffect n'est utilisé qu'une fois, aucune dépendance)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMoviesAsync())
  },[])

  return (
    <div className="App">
      <MoviesList />
      
    </div>
  );
}

export default App;
