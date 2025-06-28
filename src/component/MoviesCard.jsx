// import React from "react";

// const MoviesCard = ({
//   movieObj,
//   poster_path,
//   name,
//   handleAddtoWatchlist,
//   handleRemoveFromWatchlist,
//   watchlist,
// }) => {
//   const imageUrl = poster_path
//     ? `https://image.tmdb.org/t/p/original/${poster_path}`
//     : "https://dummyimage.com/200x300/cccccc/000000&text=No+Image";

//   function doesContain(movieObj) {
//     for (let i = 0; i < watchlist.length; i++) {
//       if (watchlist[i].id == movieObj.id) {
//         return true;
//       }
//     }
//     return false;
//   }

//   return (
//     <div className="h-[45vh] w-[230px] bg-center bg-cover  rounded-xl hover:scale-110 duration-300 hover:-rotate-x-12 hover:cursor-pointer relative">
//       {/* Emoji in top-left corner */}

//       {/* Main content */}
//       <div
//         className="relative h-full w-full rounded-xl transform transition-transform duration-1000 hover:-rotate-x-12 hover:cursor-pointer "
//         style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
//       >
//         {doesContain(movieObj) ? (
//           <div onClick={() =>handleRemoveFromWatchlist(movieObj)}
//           className="absolute top-2 left-2 bg-gray-500 text-white p-1 rounded-full">&#10060; </div>
//         ) : (
//           <div
//             onClick={() => handleAddtoWatchlist(movieObj)}
//             className="absolute top-2 left-2 bg-gray-500 text-white p-1 rounded-full"
//           >
//             &#128525;
//           </div>
//         )}

//         {/* <div onClick={()=>(handleAddtoWatchlist(movieObj))}
//         className="absolute top-2 left-2 bg-gray-500 text-white p-1 rounded-full">
//         &#128525;
//       </div> */}
//         {/* Name overlay */}
//         <div className="absolute bottom-0 w-full p-2 text-center text-white text-xl bg-black bg-opacity-50">
//           {name}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoviesCard;



import React from "react";

const MoviesCard = ({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : "https://dummyimage.com/200x300/cccccc/000000&text=No+Image";

  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="h-[45vh] w-[230px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:-rotate-x-12 hover:cursor-pointer relative">
      {/* Main content */}
      <div
        className="relative h-full w-full rounded-xl transform transition-transform duration-1000 hover:-rotate-x-12 hover:cursor-pointer"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        {/* Toggle emoji */}
        {doesContain(movieObj) ? (
          <div
            onClick={() => handleRemoveFromWatchlist(movieObj)}
            className="absolute top-2 left-2 bg-gray-500 text-white p-1 rounded-full cursor-pointer"
          >
            &#10060; {/* Cross emoji */}
          </div>
        ) : (
          <div
            onClick={() => handleAddtoWatchlist(movieObj)}
            className="absolute top-2 left-2 bg-gray-500 text-white p-1 rounded-full cursor-pointer"
          >
            &#128525; {/* Heart eyes emoji */}
          </div>
        )}

        {/* Name overlay */}
        <div className="absolute bottom-0 w-full p-2 text-center text-white text-xl bg-black bg-opacity-50">
          {name}
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
