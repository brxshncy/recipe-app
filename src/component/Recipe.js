import React from 'react';
import recipestyle from '../recipe.module.css';
const Recipe = (props) =>{
    return(
        <div className={recipestyle.recipe}>
            <h1>{props.title}</h1>
            <ol>    
            {props.ingredients.map((x,y) => (
                <li key={y}>{x.text}</li>
            ))}
            </ol>
            <p><b>Calories:</b> {Math.floor(props.calories)}</p>
             <img src={props.image} className={recipestyle.image}></img>
        </div>
    )
}

export default Recipe;