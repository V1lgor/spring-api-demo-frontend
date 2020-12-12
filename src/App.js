
import './App.css';

import React, {useEffect, useState} from "react";
import axios from 'axios';

import AddPerson from "./components/Person/AddPerson/AddPerson";
import Modal from "./components/UI/Modal/Modal";
import Person from "./components/Person/Person";
import PersonTable from "./components/Person/PersonTable";
import PersonSearch from "./components/Person/PersonSearch";

const App = () => {

    const [personList, setPersonList] = useState([]);

    const [foundPerson, setFoundPerson] = useState(null);

    const [requestError, setRequestError] = useState(false);

    const [addingPerson, setAddingPerson] = useState(false);

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
    };

    const addPersonHandler = (person) => {
        axios.post(`http://localhost:8080/person`, person)
            .then()
            .catch(response => console.log(response));
    }

    let person = null;

    if (!requestError && foundPerson != null) {
        person = <Person id = {foundPerson.id} name={foundPerson.name} age={foundPerson.age}/>
    }

    let errorMessage = null;

    if (requestError) {
        errorMessage = <p className="error">Ошибка запроса</p>
    }

    let addPersonModal = null;

    if (addingPerson) {
        addPersonModal = <Modal close={() => setAddingPerson(false)}>
            <AddPerson onSubmit={addPersonHandler}/>
        </Modal>
    }

    return (
        <div className="App">
            {addPersonModal}
            <PersonTable personList={personList}/>
            <PersonSearch onSubmit={findPerson}/>
            {person}
            {errorMessage}
            <button onClick={() => {setAddingPerson(true)}}>Добавить человека</button>
        </div>
    )
}

export default App;
