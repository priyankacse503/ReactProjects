import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendmailactions } from "../Store/sendmailReducer";
import { Badge, Button } from "react-bootstrap";

const Inbox = () => {

    const inbox = useSelector(state => state.sendmail.sendmail);
    const deleted = useSelector(state => state.sendmail.deleted);
    const dispatch = useDispatch();
   
    const deleteHandler = (email) => {
        dispatch(sendmailactions.deletemail(email))
    }

    return (
        <>
            <header style={{ paddingTop: '60px',background:'lightblue',color:'blue'}}>
                <div className="col-lg text-center text-lg-left">
                    <h1 className="font-weight-light d-inline">
                        <span>React Inbox </span>
                    </h1>
                </div>
                <br></br></header>
            <main className="px-2 flex-fill">
                <div className="row">
                    <div className="col-12 px-4 d-flex flex-column">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 py-3">
                                <ul className="list-group sticky-top sticky-offset">
                                    <Link to='/sendmail'>
                                        <button className="btn btn-block btn-outline-secondary my-1 text-uppercase">
                                            Compose <i className="align-middle icon-pencil" />
                                        </button>
                                    </Link>
                                    <div className="nav nav-pills py-2 flex-md-column justify-content-center">
                                        <Link
                                            to='/inbox'
                                            className="nav-link active"
                                            title="Messages"
                                            data-toggle="tab"
                                            data-target="#messages"
                                        >
                                            <span className="icon icon-envelope fa fa-fw fa-envelope mr-md-1" />
                                            <span style={{ marginLeft: '10px' }} className="d-none d-md-inline">Messages</span>
                                            <span
                                                className="badge badge-pill badge-dark small font-weight-light ml-1"
                                                title="Unread"
                                            >
                                                {/*{
                                                    inbox.filter((v, k) => {
                                                        return !v.read;
                                                    }).length
                                                }*/}
                                                {inbox.length}
                                            </span>
                                        </Link>

                                        <Link
                                            to=''
                                            className="nav-link"
                                            title="Unread"
                                            data-toggle="tab"
                                            data-target="#Unread"
                                        >
                                            <span style={{ marginLeft: '10px' }} className="d-none d-md-inline">Unread</span>
                                            <span style={{ marginLeft: '10px' }}><Badge bg="secondary">
                                                {
                                                    inbox.filter((v, k) => {
                                                        return !v.read
                                                    }).length
                                                }
                                            </Badge>
                                            </span>
                                        </Link>
                                        <Link
                                            to='/inbox'
                                            className="nav-link"
                                            title="sent"
                                            data-toggle="tab"
                                            data-target="#sent"
                                        >
                                            <span style={{ marginLeft: '10px' }} className="d-none d-md-inline">Sent</span>
                                            <span style={{ marginLeft: '10px' }}><Badge bg="secondary"></Badge>
                                                {/*{parent.state.deleted.length}*/}
                                            </span>
                                        </Link>
                                        <Link
                                            to=''
                                            className="nav-link"
                                            title="Deleted"
                                            data-toggle="tab"
                                            data-target="#deleted"
                                        >
                                            <span className="icon icon-trash fa fa-fw fa-trash mr-md-1" />
                                            <span style={{ marginLeft: '10px' }} className="d-none d-md-inline">Deleted</span>
                                            <span style={{ marginLeft: '10px' }}><Badge bg="secondary">{deleted}</Badge></span>

                                        </Link>
                                        <Link
                                            to=''
                                            className="nav-link"
                                            title="Drafts"
                                            data-toggle="tab"
                                            data-target="#drafts"
                                        >
                                            <span className="icon icon-pencil fa fa-fw fa-edit mr-md-1" />
                                            <span style={{ marginLeft: '10px' }} className="d-none d-md-inline">Drafts</span>
                                        </Link>

                                    </div>
                                    <div className="d-md-block d-none">
                                        <hr />
                                        <h6 style={{color:'blue'}}>Labels</h6>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-md py-3 tab-content">
                                <div id="messages" className="tab-pane active">
                                    <div className="d-flex flex-sm-row flex-column py-1 mb-1">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary text-uppercase"
                                            /*onClick={parent.toggleMarkAll}*/
                                            >
                                                <div
                                                    className="custom-control custom-checkbox"
                                                /*onClick={parent.toggleMarkAll}*/
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="checkAll"
                                                        defaultChecked={false}
                                                    /*onChange={parent.toggleMarkAll}*/
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="checkAll"
                                                    >
                                                        Mark
                                                    </label>
                                                </div>
                                            </button>

                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary mx-sm-1 mx-none"
                                        /* onClick={parent.refreshMessages}*/
                                        >
                                            <i className="align-middle icon-refresh fas fa-sync" />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary mr-sm-1 mr-none"
                                        // data-target="#composeModal"
                                        //data-toggle="modal"
                                        >
                                            <i className="align-middle icon-pencil fa fa-edit" />
                                        </button>
                                    </div>

                                    {/* message list */}

                                    <ul className="list-group py-2">
                                        {inbox && inbox.length > 0
                                            ? inbox.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="list-group-item list-group-item-action d-block py-1"
                                                >
                                                    <summary className="row">
                                                        <div className="col py-2 order-1">
                                                            <div
                                                                //onClick={() => parent.toggleMark(idx)}
                                                                className="custom-control custom-checkbox"
                                                            >
                                                                <ul>
                                                                    <li style={{ listStyleType: !item.read ? 'initial' : 'none', color: 'blue' }}>
                                                                        <Link
                                                                            title="send mail"
                                                                            to=''
                                                                        //href={"mailto:" + item.fromAddress}
                                                                        >
                                                                            {/*{item.from}{" "}*/}
                                                                            <span style={{ marginLeft: '10px' }} className="icon icon-envelope far fa-fw fa-envelope mr-md-1" />
                                                                            {item.email}

                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                                {/*<input
                                                                    type="checkbox"
                                                                    className="custom-control-input"
                                                                    name={"check" + idx}
                                                                //checked={item.marked === 1}
                                                                //onChange={() => parent.toggleMark(idx)} />
                                                                <label
                                                                    className="custom-control-label text-nowrap"
                                                                    htmlFor={"check" + idx}
                                                                >
                                                                    <Link
                                                                        title="send mail"
                                                                        to=''
                                                                    //href={"mailto:" + item.fromAddress}
                                                                    >
                                                                        {/*{item.from}{" "}
                                                                        {item.email}
                                                                        <span className="icon icon-envelope far fa-fw fa-envelope mr-md-1" />
                                                                    </Link>
                                                                </label>*/}
                                                            </div>
                                                        </div>
                                                        <div className="col-auto px-0 order-last order-sm-2 d-none d-sm-block align-self-center text-right">
                                                            <Link
                                                                onClick={deleteHandler.bind(null, item.email)}
                                                                to='/inbox'
                                                            //onClick={() => parent.doDelete(idx)}
                                                            >
                                                                <span className="icon icon-trash fa fa-fw fa-trash" />
                                                            </Link>
                                                        </div>

                                                        <div
                                                            className="col-sm-12 col-10 py-2 order-3"
                                                        //onClick={() =>dispatch(sendmailactions.doShow(idx)) }

                                                        //onClick={() => parent.doShow(idx)}
                                                        >
                                                            <div className="float-right text-right">

                                                                {/*
                                                                <ul>
                                                                    <li style={{ listStyleType: !item.read ? 'initial' : 'none', color: 'blue' }}>
                                                                        <span style={{ color: 'black' }}>{item.subject}</span>
                                                                    </li>
                                                                </ul>
                                                                 <span 
                                                                style={{ fontWeight: !item.read ? 'bold' : 'normal' }}>
                                                                    {item.subject}
                                                                    {item.dtSent}
                                                                </span>*/}
                                                            </div>
                                                            <p className="lead mb-0">
                                                                <a
                                                                    title={
                                                                        !item.read
                                                                            ? "This is a new message"
                                                                            : "View this message"
                                                                    }

                                                                //onClick={() => parent.doShow(idx)}
                                                                //onClick={()=>dispatch(sendmailactions.doShow(idx))}
                                                                >
                                                                    {item.subject}
                                                                </a>
                                                                {/*{item.attachment ? (
                                                                    <i className="align-middle fa fa-paperclip icon-paper-clip" />
                                                                ) : null}*/}

                                                                <Link to='/open'>
                                                                    <Button
                                                                        style={{ marginLeft: '10px' }}

                                                                        //className="btn btn-outline-secondary btn-sm ml-2 d-none d-md-inline"
                                                                        onClick={() => {dispatch(sendmailactions.doShow(idx))}}
                                                                    //onClick={() => parent.doShow(idx)}onClick={ setModalShow(true)}
                                                                    >
                                                                        Open
                                                                    </Button>
                                                                    
                                                                </Link>

                                                            </p>
                                                        </div>
                                                    </summary>
                                                </li>

                                            ))
                                            : null}
                                    </ul>

                                </div>

                                <div id="drafts" className="tab-pane">
                                    <h5>Drafts</h5>
                                    <p>Not implemented..</p>
                                </div>
                                <div id="calendar" className="tab-pane">
                                    <h5>Calendar</h5>
                                    <p>Not implemented..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
           
        </>
    );
};

export default Inbox;