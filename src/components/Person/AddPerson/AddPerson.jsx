import React, {useRef} from 'react';

const AddPerson = (props) => {

    const personNameInputRef = useRef(null);
    const personAgeInputRef = useRef(null);

    const submitFormHandler = (event) => {

        event.preventDefault();

        const person = {
            name: personNameInputRef.current.value,
            age: parseInt(personAgeInputRef.current.value)
        };

        props.onSubmit(person)
    }

    return (
        <form>
            <div>
                <label htmlFor="personName">Имя человека:</label>
                <input type="text" id="personName" placeholder={"Введите имя"}  ref={personNameInputRef}/>
            </div>
            <div>
                <label htmlFor="personAge">Возраст человека:</label>
                <input type="number" id="personAge" placeholder={"Введите возраст"} ref={personAgeInputRef}/>
            </div>
            <button onClick={submitFormHandler}>Добавить</button>
        </form>
    );
};

export default AddPerson;