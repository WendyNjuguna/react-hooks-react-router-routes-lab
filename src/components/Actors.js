import React from "react";
import { actors } from "../data";
console.log(actors)
let player = actors
console.log(actors[0].name)
function Actors() {
  let x = player.map((item, index) => {
    return (<div key={index}>
      {item.name}
      <ul>
        <li>{item.movies}</li>
      </ul>
    </div>)
  })

  return (

    <div>

      <h1>Actors Page</h1>
      {x}
    </div>
  )
}

export default Actors;