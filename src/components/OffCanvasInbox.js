import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from './OffCanvaInbox.module.css'

const Backdrop = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div className={classes.backdrop} onClick={handleClose} />
}

const ModalOverlay = () => {
    const displayCart = useSelector(state => state.sendmail.selected)
    return <div className={classes.modal}>

        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <div>
                        <small className="text-uppercase text-muted">Subject</small>
                        <h5 className="modal-title">{displayCart.subject}</h5>
                    </div>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span className="sr-only" aria-hidden="true">×</span>
                        
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-8">
                            <small className="text-uppercase text-muted">From</small>
                            <h5>
                                {/* <a href="'mailto:'+selected.fromAddress">
                                            {displayCart.email}
</a>*/}
                                <Link to='/sendmail'>{displayCart.email}</Link>
                            </h5>
                        </div>

                        <div className="col-sm-12">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: displayCart.body
                                }}
                            />
                        </div>
                    </div>
                    <p className="my-3" />
                    <button
                        style={{display:'flex',float:'right',marginLeft:'10px'}}
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        aria-hidden="true"
                    >
                        Close
                    </button>
                    
                    <button
                        style={{display:'flex',float:'right',marginLeft:'10px'}}
                        className="btn btn-outline-primary "
                        data-dismiss="modal"
                        data-toggle="modal"
                        data-target="#composeModal"
                    >
                        Reply
                    </button>
                </div>
            </div>
        </div>
    </div>

}

const portalElement = document.getElementById('overlays')

const OffcanvasInbox = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    return (
        <>
            <div style={{ paddingTop: '100px' }}>
                {ReactDOM.createPortal(<Backdrop onClose={handleClose} />, portalElement)}
                {ReactDOM.createPortal(<ModalOverlay />, portalElement)}

            </div>
        </>
    );
}

export default OffcanvasInbox;


/*

 <div
                    id="messageModal"
                    className="modal fade mt-0 mt-md-5"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                    
                    //ref="messageModal"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div>
                                    <small className="text-uppercase text-muted">Subject</small>
                                    <h4 className="modal-title">{displayCart.subject}</h4>
                                </div>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">Close</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <small className="text-uppercase text-muted">From</small>
                                        <h4>
                                            <a href="'mailto:'+selected.fromAddress">
                                                {displayCart.email}
                                                </a>
                                                <Link to='/sendmail'></Link>{displayCart.email}
                                                </h4>
                                            </div>
        
                                            <div className="col-sm-12">
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: displayCart.body
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <p className="my-3" />
                                        <button
                                            className="btn btn-primary float-right ml-2"
                                            data-dismiss="modal"
                                            aria-hidden="true"
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="btn btn-outline-primary float-right"
                                            data-dismiss="modal"
                                            data-toggle="modal"
                                            data-target="#composeModal"
                                        >
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

*/

/*

 <Button variant="primary" onClick={handleShow}>
                Inbox
            </Button>
           </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ color: "blue" }}>
                        Inbox
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Table responsive="sm" className="text-center">
                        <thead>
                            <tr>
                                <th style={{ color: "blue" }}>Email</th>
                                <th style={{ color: "blue" }}>Subject</th>
                                <th style={{ color: "blue" }}>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayCart.map((mail) => (
                                    (
                                        <tr key={mail.id}>
                                            <td>{mail.email}</td>
                                            <td>{mail.subject}</td>
                                            <td>{mail.body}</td>
                                            <td>{mail.markRead}</td>
                                        </tr>

                                    )))
                            }
                        </tbody>
                    </Table>

                </Offcanvas.Body>
            </Offcanvas>

*/
