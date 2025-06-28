import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";
const WatchList = ({ watchlist, setWatchlist, handleRemoveFromWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const sortIncreasing = () => {
    const sortedIncreasing = [...watchlist].sort(
      (movieA, movieB) =>
        (movieA.vote_average || 0) - (movieB.vote_average || 0)
    );
    setWatchlist(sortedIncreasing);
  };

  const sortDecreasing = () => {
    const sortedDecreasing = [...watchlist].sort(
      (movieA, movieB) =>
        (movieB.vote_average || 0) - (movieA.vote_average || 0)
    );
    setWatchlist(sortedDecreasing);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      {/* SETTING THE GENRES SECTION TO COLOR THE SELECTED GENRES */}
      <div className="flex justify-center flex-wrap m-4">
        {[...new Set(genreList)].map((genre) => (
          <div
            onClick={() => handleFilter(genre)}
            key={genre} // Ensure each element has a unique key
            className={`flex justify-center items-center rounded-full px-4 py-2 m-2 cursor-pointer transition-all duration-200 ${
              currGenre === genre
                ? "bg-blue-200 text-blue-900"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search bar */}
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      {/* Movie Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 m-0">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex items-center justify-center">
                  <button onClick={sortIncreasing} className="p-2">
                    <i className="fa-solid fa-arrow-up"></i>
                  </button>
                  <span className="px-2">Rating</span>
                  <button onClick={sortDecreasing} className="p-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </button>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr className="border-b-2" key={movieObj.id}>
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.title || "Movie Poster"}
                    />
                    <div className="mx-10">{movieObj.title || "No Title"}</div>
                  </td>
                  <td>{movieObj.vote_average || "N/A"}</td>
                  <td>{movieObj.vote_count || "N/A"}</td>
                  <td>{genreids[movieObj.genre_ids[0]]} </td>
                  {/* || "Unknown Genre"} */}
                  <td
                    className="text-red-800 cursor-pointer"
                    onClick={() => {
                      console.log("Delete clicked for:", movieObj.title);
                      handleRemoveFromWatchlist(movieObj);
                    }}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
