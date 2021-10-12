import React from "react";
import {useDispatch} from "react-redux";
// import actions
import {deleteMovie , likeMovie , dislikeMovie} from "./moviesSlice"


// Génère une card movie
export const MovieCard = (props) => {

  const dispatch = useDispatch()

  // Action au clic sur le bouton delete
  const handleDelete = () => {
    // dispatch l'action delete au store
    dispatch(
      deleteMovie({
        id: props.movie.id
      })
    )
  }
    // Action au clic sur le bouton like
    const handleLike = () => {
      // dispatch l'action like au store
      dispatch(
        likeMovie({
          id: props.movie.id
        })
      )
    }
        // Action au clic sur le bouton dislike
        const handleDislike = () => {
          // dispatch l'action like au store
          dispatch(
            dislikeMovie({
              id: props.movie.id
            })
          )
        }

  return(
    <>
      <div className="col-md-4">
          <div class="card">
          <div class="card-header">
            <div className="row">
              <div className="col-md-3">{props.movie.category}</div>
              <div className="col-md-3">Likes :<strong>{props.movie.likes}</strong></div>
              <div className="col-md-6">Dislikes :<strong>{props.movie.dislikes}</strong></div>
            </div>
          
          </div>
          <div class="card-body">
            <h5 class="card-title"><strong>{props.movie.title}</strong> </h5>
            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <button className="btn btn-primary" onClick={handleDelete} >Delete</button>
            <div className="row">
              <div className="col-md-6">
              <button type="button" class="btn btn-primary"onClick={handleLike} >+<i class="fas fa-thumbs-up"></i></button>
              </div>
              <div className="col-md-6">
              <button type="button" class="btn btn-danger"onClick={handleDislike} >-<i class="fas fa-thumbs-down"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
   
</>
  )
}
export default MovieCard ;
