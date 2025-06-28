import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesCard from './MoviesCard';

const Movies = ({handleAddtoWatchlist,handleRemoveFromWatchlist,watchlist}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const fetchMovies = (page) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=717b2a9f29a1dec187d508059d27abaf&language=en-US&page=${page}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.error('Error fetching movies:', err));
  };

  useEffect(() => {
    fetchMovies(pageNo);
  }, [pageNo]);

  const handlePrev = () => {
    setPageNo((prevPageNo) => Math.max(1, prevPageNo - 1));
  };

  const handleNext = () => {
    setPageNo((prevPageNo) => prevPageNo + 1);
  };

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {/* {movies.map((movieObj) => (
          <MoviesCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />
        ))} */}
        {movies
  .filter(movieObj => movieObj && movieObj.id)
  .map((movieObj) => (
    <MoviesCard
      key={movieObj.id}
      movieObj={movieObj}
      poster_path={movieObj.poster_path}
      name={movieObj.title}
      handleAddtoWatchlist={handleAddtoWatchlist}
      handleRemoveFromWatchlist={handleRemoveFromWatchlist}
      watchlist={watchlist}
    />
  ))}

      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="text-lg font-semibold mb-2">
          Current Page: <span className="text-blue-600">{pageNo}</span>
        </div>
        <div>
          <button
            className="px-4 py-2 m-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={handlePrev}
            disabled={pageNo === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 m-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={handleNext}
          >
          Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
