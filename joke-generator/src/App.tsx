// react router stuff will go in App.tsx

import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage"
import "./App.css";


function App() {
    return(

        <BrowserRouter>
            <Routes>
                <Route path= "/" element = {<LandingPage/>} />
                <Route path = "/results" element = {<ResultsPage />} />
            </Routes>
         </BrowserRouter>
    )

}

export default App;


