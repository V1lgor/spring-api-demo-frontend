import React from 'react';

import styles from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {

    return (
        <React.Fragment>
            <Backdrop onClick={props.close}/>
            <div className={styles.Modal}>
                {props.children}
            </div>
        </React.Fragment>
    )
};

export default Modal;