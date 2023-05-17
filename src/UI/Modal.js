
import React, { Fragment } from "react";
import classes from './Modal.module.css'
import ReactDOM from "react-dom";

const Backdrop=(props)=>{
    return <div className= {classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement=document.getElementById('overlays')

const Modal=(props)=>{
   
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
    )
}

export default Modal;