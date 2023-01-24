import React from "react";
import { movies } from "../data";

function Movies() {
  let x = movies.map((item, index) => {
    return (
      <div key={index}>
        {item.title}
        {item.time}      <ul>
          <li>{item.genres}</li>
        </ul>
      </div>
    )
  })


  return <div>
    <h1>Movies Page</h1>
   {x}
   </div>;
}

export default Movies;