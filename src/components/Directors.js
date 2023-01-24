import React from "react";
import { directors } from "../data";

function Directors() {

let x = directors.map((item, index)=>{
return (
  <div key ={index}>
{item.name}
<ul>
  <li>
    {item.movies}
  </li>
</ul>
  </div>
)
})

  return <div>
  <h1>Directors Page</h1>
  {x}
  </div>;
}

export default Directors;