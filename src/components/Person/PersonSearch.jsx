import React, {useRef} from 'react';

const PersonSearch = (props) => {

    const idInputRef = useRef(null);

    return (
        <React.Fragment>
            <div className="person-search">
                <label htmlFor="personSearch">Введите ID человека:</label>
                <input type="text" id="personSearch" ref={idInputRef}/>
            </div>
            <button onClick={() => props.onSubmit(idInputRef.current.value)}>Найти</button>
        </React.Fragment>
    );
};

export default PersonSearch;