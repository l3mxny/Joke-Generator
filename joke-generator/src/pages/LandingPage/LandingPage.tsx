import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./LandingPage.module.css";


function LandingPage(){
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch =  () => {
       
     navigate("/results", {state: {searchTerm } });
        
    };

    return (

        <div className={styles.container}>
            <div className = {styles.contentBox}>
            <h1> Search for an amazing joke! </h1>
            <input 
            
            value={searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value)}
            
            />
            <button onClick = {handleSearch}> Search </button>
            </div>
        </div>




    )





}

export default LandingPage;
