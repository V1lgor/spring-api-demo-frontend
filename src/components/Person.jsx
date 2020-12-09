import React from 'react';

const Person = (props) => {
    return (
        <div className="person">
            <p>ID человека: {props.id}</p>
            <p>Имя человека: {props.name}</p>
            <p>Возраст человека: {props.age}</p>
        </div>
    );
};

export default Person;