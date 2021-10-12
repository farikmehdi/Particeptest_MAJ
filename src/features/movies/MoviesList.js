
//ce fichier il affiche les information du coup 
import React, {useState , useEffect} from "react";
import {useSelector} from "react-redux";
import {selectCategories, selectMovies} from "./moviesSlice";
import {MovieCard} from "./MovieCard";
import { Dropdown , Col } from "react-bootstrap";

// Génère la liste de toutes les movies
export const MoviesList = () => {
  //connecte les selecteurs
  const movies = useSelector(selectMovies) // cette fonction esle est dans dans le slice
  const categories = useSelector(selectCategories)


  const [movieCategorie , setMovieCategorie] = useState(null);
  const [movieNum , setMovieNum] = useState(100);

  const MoviesAmount = [4,8,12]

  useEffect(()=>{
  },[movieCategorie])

  const fillMovies = (movies) => {
    const movieTable = []
    movies.forEach(element => {
      console.log(element);
      if(element.category == movieCategorie){
        movieTable.push(element)
      }
    });
    return movieTable
  }

  const filledMovies = movies ? fillMovies(movies) : [];

  console.log(filledMovies);
  const renderedMovies = movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
  ))
  const renderedCategories = categories.map((category,index) => (
    <p key={index}>{category}</p>
  ))
  console.log(movieCategorie);

  return(
    <>
    {
      movies.lenght !== 0 ? (
        <div className="container">
        <div className="row">
          <div className="col-md-6">
          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                      {categories.map((categorie) => (
                        <Dropdown.Item href="" onClick={(e)=> setMovieCategorie(categorie)} value={categorie}>{categorie}</Dropdown.Item>
                      ))}   
              </Dropdown.Menu>
      </Dropdown>
          </div>
          <div className="col-md-6">
          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Movies Range
              </Dropdown.Toggle>
              <Dropdown.Menu>
                      {MoviesAmount.map((count) => (
                        <Dropdown.Item href="" onClick={(e)=> setMovieNum(count)} value={count}>{count}</Dropdown.Item>
                      ))}   
              </Dropdown.Menu>
      </Dropdown>
          </div>

        </div>
      </div>  
      
      ) : <></>
  }
      <div className="row">
       {
         filledMovies.length !==0 ? (
         filledMovies.map((movie, index) => (
          index < movieNum && (
            <MovieCard key={movie.id} movie={movie} />
         )
          ) 
          )):(
            movies.map((movie , index) => (
              index < movieNum && (
                 <MovieCard key={movie.id} movie={movie} />
              )
             )
          )
        )
       }
       </div>
       <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
    </>

  )
}


     