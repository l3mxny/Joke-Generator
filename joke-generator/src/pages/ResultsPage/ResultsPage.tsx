// you will need an interface when parsing over your API results
// similar to CatFact API exercise

import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect } from "react";
import Joke from "../../components/Joke/Joke";
import axios from "axios";
import styles from "./ResultsPage.module.css";



interface JokeData{
    id: string;
    joke:string;
}

interface JokeResponse{
    results : JokeData[];
}


function ResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const[jokes,setJokes] = useState<JokeData[]>([]);
    const{searchTerm} = location.state || {};

    const fetchJokes = async () => {
        try{
            const response = await axios.get(`https://icanhazdadjoke.com/search?term=${searchTerm}`,{
                headers: {
                    'Accept': 'application/json',
                }
            })
            const data = response.data;
            setJokes(data.results);
        }catch(error){
            console.error("failed to fetch jokes",error)
        
        }
    }


    useEffect(() => {
        if(searchTerm){
            fetchJokes();
        }else{
            navigate("/");
        }
    }, [searchTerm, navigate]);

    return (
        <div className = {styles.container} >
            <h1 className = {styles.header}>Showing results for '{searchTerm}'</h1>
            {jokes.length > 0 ? (
                <div className = {styles.jokesGrid}>
                    {jokes.map((joke) => (
                        <div key={joke.id} className = {styles.jokeCard}>
                            <p className = {styles.jokeText}>{joke.joke}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default ResultsPage;
