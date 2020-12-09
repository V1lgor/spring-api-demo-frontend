import React from 'react';
import Person from "./Person";

const PersonList = (props) => {
    return (
        <div className="person-list">
            {props.personList.map(person => <Person key = {person.id} id={person.id} name={person.name} />)}
        </div>
    )
};

export default PersonList;