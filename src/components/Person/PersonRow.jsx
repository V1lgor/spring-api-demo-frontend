import React from 'react';

const PersonRow = (props) => {
    return (
        <tr className="person-table__row">
            <td className="person-table__cell">{props.id}</td>
            <td className="person-table__cell">{props.name}</td>
            <td className="person-table__cell">{props.age}</td>
        </tr>
    )
};

export default PersonRow;