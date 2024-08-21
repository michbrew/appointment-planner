import React from "react";
import styles from './Tile.module.css'

export const Tile = (props) => {

  const {name, description} = props;



  

  

  


  return (
    <div className={styles.tile}>
      
      
      <p className={styles.bold}>{name}</p>
      {Object.values(description).map((value, index)=> (
        <p key={index} className="tile">{value}</p>
      ))}
      
    </div>
  );
};
