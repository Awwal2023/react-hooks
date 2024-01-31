
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetails from './components/MovieDetails';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
      rating: 4.8,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      title: 'Furiosa',
      description: 'The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNjYxZjY3ZDAtNDc1Mi00YzMxLWI4MWEtNzQwZGExYmMzODFhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg',
      rating: 7.9,
      trailerLink: 'https://www.youtube.com/embed/XJMuhwVlca4',
    },
    {
      title: 'Game of Thrones',
      description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Game_of_Thrones_Season_6.jpeg/220px-Game_of_Thrones_Season_6.jpeg',
      rating: 9.2,
      trailerLink: 'https://www.youtube.com/embed/rlR4PJn8b8I',
    },
    {
      title: 'Avengers: Endgame',
      description: `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.`,
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      rating: 8.4,
      trailerLink: 'https://www.youtube.com/embed/TcMBFSGVi1c',
    },
    // Add more movies as needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
    trailerLink: '',
  });

  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
      trailerLink: '',
    });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseFloat(ratingFilter)
  );

  return (
    <Router>
      <div className="app">
        <h1>Movie App</h1>

        <Routes>
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
          <Route path="/" element={
            <>
              <Filter
                titleFilter={titleFilter}
                ratingFilter={ratingFilter}
                onTitleChange={setTitleFilter}
                onRatingChange={setRatingFilter}
              />
              <MovieList movies={filteredMovies} />
              <div className="add-movie-form">
                <h2>Add a New Movie</h2>
                {/* ... (rest of the code remains unchanged) */}
                <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        ></textarea>
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })}
        />
         <input
          type="text"
          placeholder="Trailer Link"
          value={newMovie.trailerLink}
          onChange={(e) => setNewMovie({ ...newMovie, trailerLink: e.target.value })}

        />
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
