import React from "react";
import { Tile } from "../tile/Tile";




export const TileList = (props) => {
  const { tiles } = props;

  

 

  return (
    <div>
      {
        tiles.map((tile, index) => {
          const { name, ...description } = tile;
          return <Tile key={crypto.randomUUID()} name={name} description={description}   />
        } )
      }
      
      
    </div>
  );
};
