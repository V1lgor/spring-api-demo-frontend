
import './App.css';
import PersonTable from "./components/PersonTable";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import PersonSearch from "./components/PersonSearch";
import Person from "./components/Person";

const App = () => {

    const [personList, setPersonList] = useState([]);

    const [foundPerson, setFoundPerson] = useState(null);

    const [requestError, setRequestError] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/person")
            .then(response => response.data)
            .then(personList => setPersonList(personList));
    }, [personList]);

    const findPerson = (personId) => {
        axios.get(`http://localhost:8080/person/${personId}`)
            .then(response => response.data)
            .then(person => {
                setFoundPerson(person);
                setRequestError(false);
            })
            .catch(() => {
                setFoundPerson(null);
                setRequestError(true)
            });
    }

    let person = null;

    if (!requestError && foundPerson != null) {
        person = <Person id = {foundPerson.id} name={foundPerson.name} age={foundPerson.age}/>
    }

    let errorMessage = null;

    if (requestError) {
        errorMessage = <p className="error">Ошибка запроса</p>
    }

    return (
        <div className="App">
            <PersonTable personList={personList}/>
            <PersonSearch onSubmit={findPerson}/>
            {person}
            {errorMessage}
        </div>
    )
}

export default App;
