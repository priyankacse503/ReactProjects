import React from "react";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const InboxData = (props) => {
    const displayCart = useSelector(state => state.sendmail.selected)

    return (
        <>
            <Modal {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <div><small className="text-uppercase text-muted">Subject</small>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {displayCart.subject}
                        </Modal.Title></div>

                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-8">
                        <small className="text-uppercase text-muted">From</small>
                        <h5><Link to='/sendmail'>{displayCart.email}</Link>
                        </h5>
                    </div>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: displayCart.body
                        }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Link to='/sendmail'><Button>Reply</Button></Link>
                    <Button variant="seconary" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InboxData;

/*
<Modal.Title id="contained-modal-title-vcenter">
                    {displayCart.subject}
                    </Modal.Title>

<Modal onClose={props.onHide}>
                <CloseButton style={{float: 'right'}} onClick={props.onHide} />
                    <div>
                        <small className="text-uppercase text-muted">Subject</small>
                        <h5 className="modal-title">{displayCart.subject}</h5>
                    </div>
                    <div>
                        <div>
                            <div className="col-sm-8">
                                <small className="text-uppercase text-muted">From</small>
                                <h5><Link to='/sendmail'>{displayCart.email}</Link>
                                </h5>
                            </div>
                            <div className="col-sm-12">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: displayCart.body
                                    }}
                                />
                            </div>
                            <p className="my-3" />
                    <button
                        style={{display:'flex',float:'right',marginLeft:'10px'}}
                        className="btn btn-secondary"
                        onClick={props.onHide}
                    >
                        Close
                    </button>
                    
                    <button
                        style={{display:'flex',float:'right',marginLeft:'10px'}}
                        className="btn btn-outline-primary ">
                        Reply
                    </button>
                        </div>
                    </div>
            </Modal >
            */