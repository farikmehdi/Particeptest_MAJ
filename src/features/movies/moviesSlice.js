import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {movies$} from "./moviesData";

const initialState = {
  movies: []
};

// Define Async Thunk
export const fetchMoviesAsync = createAsyncThunk(
  'movies/fetch',
  async () => {
    const response = await movies$;
    // The value we return becomes the `fulfilled` action payload
    console.log(response)
    return response;
  }
);

// Reducers
export const moviesSlice = createSlice({
  name: 'counter',
  initialState,
  // Actions
  reducers: {
    deleteMovie(state, action) {
      // copie locale du state
      const movies = state.movies
      // Index de movie à supprimer
      const movieToDelete = state.movies.findIndex(i => i.id === action.payload.id)
      // splice de movie à supprimer
      movies.splice(movieToDelete, 1)
      // nouveau state
      state.movies = movies
    } ,

   likeMovie(state, action) {
      // copie locale du state
      const movies = state.movies
      // Index de movie à liker
      const movieToLike = state.movies.findIndex(i => i.id === action.payload.id)
      // splice de movie à supprimer
      movies[movieToLike].likes += 1
      // nouveau state
      state.movies = movies
    }
    ,

   dislikeMovie(state, action) {
    // copie locale du state
    const movies = state.movies
    // Index de movie à liker
    const movieToLike = state.movies.findIndex(i => i.id === action.payload.id)
    // splice de movie à supprimer
    movies[movieToLike].dislikes += 1
    // nouveau state
    state.movies = movies
  }
  },
  // ExtraReducers (Async)
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        console.log("Loading movies...");
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
      // Il faudrait gérer l'erreur dans le cas d'une vraie requête
  },
});

// Selectors
export const selectMovies = state => state.movies.movies

export const selectCategories = state => {
  // Définir les catégories -> Doit être possible de faire mieux
  const categories = []
  state.movies.movies.forEach(movie => {
    if(categories.indexOf(movie.category) === -1){
      categories.push(movie.category)
    }
  })
  return categories
}

// Actions
export const { deleteMovie , likeMovie ,dislikeMovie } = moviesSlice.actions

// Default export
export default moviesSlice.reducer;
