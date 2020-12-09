
import './App.css';
import PersonTable from "./components/PersonTable";
import React, {useEffect, useState} from "react";
import axios from 'axios';

const App = () => {

    const [personList, setPersonList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/person")
            .then(response => response.data)
            .then(personList => setPersonList(personList));
    }, [personList])

    return (
        <div className="App">
            <PersonTable personList={personList}/>
        </div>
    )
}

export default App;
