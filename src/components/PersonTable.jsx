import React from 'react';
import PersonRow from "./PersonRow";

const PersonTable = (props) => {
    return (
        <table className="person-table">
            <tbody>
            <tr className="person-table__row">
                <th className="person-table__header-cell">ID</th>
                <th className="person-table__header-cell">Имя</th>
                <th className="person-table__header-cell">Возраст</th>
            </tr>
            {props.personList.map(person => <PersonRow key={person.id}
                                                       id={person.id}
                                                       name={person.name}
                                                       age={person.age}/>)}
            </tbody>
        </table>
    );
};

export default PersonTable;