import React, { useEffect, useState } from 'react';
import Recipe from './component/Recipe';
import styles from './App.module.css';
const App = () =>{

    const [query,setQuery] = useState("chicken");
    const [search,setSearch] = useState("");
    
    const getSearch = (e)=>{
        e.preventDefault();
        setQuery(search);
    }

    const APP_ID = "9e796097";
    const APP_KEY ="e191db97c08668139194753f08219e42";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect( () =>{
        getRecipe();
    },[query])

    const [recipe,setRecipe] = useState([]);
   
    

    const updateSearch = (e) =>{
        setSearch(e.target.value);
    }

    const getRecipe = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        setRecipe(data.hits);
        console.log(data.hits);
    }


    return(
        <div className={styles.App}>
            <form onSubmit={getSearch} className={styles.search}>
                <input type="text" value={search} className={styles.search_bar} onChange={updateSearch}/>
                <button className={styles.search_button} type="submit">Search</button>
            </form>
        <div className={styles.recipes}>
        {recipe.map(x =>(
                <Recipe
                    key= {x.recipe.label}
                    title={x.recipe.label}
                    calories={x.recipe.calories}
                    image={x.recipe.image}
                    ingredients={x.recipe.ingredients}
                />
            ))}
        </div>      
        </div>
    )
}

export default App;