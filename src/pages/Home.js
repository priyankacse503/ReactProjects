<<<<<<< HEAD
import React from "react";
import { Button, Table, Col, Row, Container} from 'react-bootstrap';
import { Route } from "react-router-dom";
=======
<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";

const Home=()=>{
    return(
        <>
         <div style={{textAlign: 'center',paddingTop : '160px'}}><h3>Priya Gmail is now for free </h3> <NavLink to='/signup'>Signup</NavLink></div>
        {/*
        <h1 style={{textAlign: 'center',paddingTop : '50px'}}>WELCOME</h1>
            <p style={{textAlign: 'center'}}>Priyanka</p> */}                        
        </>
    )
}
export default Home;
=======
import React from 'react';
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e

const Home = () => {
    return (
        <>
<<<<<<< HEAD
            <Route path='/home/new-user'></Route>

            <div>
                <h1 className="header1" style={{ textAlign: 'center', background: 'gray', color: 'white' }}>The Generics
                    <br /><Button>Get our Latest Album</Button></h1>

            </div>

            <Container className="mt-3">
                <Row>
                    <Col>
                        <h3 className="text-primary text-center">TOURS</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>

                            <tbody>
                                {
                                    <tr>
                                        <tr>
                                            <td>July 16</td>
                                            <td>DETROIT, MI</td>
                                            <td>DTE ENERGY MUSIC THEATRE</td>
                                            <td><Button variant="info">BUY TICKETS</Button></td>
                                        </tr>
                                        <tr>
                                            <td>July 19</td>
                                            <td>TORONTO,ON</td>
                                            <td>BUDWEISER STAGE</td>
                                            <td><Button variant="info">BUY TICKETS</Button></td>
                                        </tr>
                                        <tr>
                                            <td>July 22</td>
                                            <td>BRISTOW, VA</td>
                                            <td>JIGGY LUBE LIVE</td>
                                            <td><Button variant="info">BUY TICKETS</Button></td>
                                        </tr>
                                        <tr>
                                            <td>July 29</td>
                                            <td>PHOENIX, AZ</td>
                                            <td>AK-CHIN PAVILION</td>
                                            <td><Button variant="info">BUY TICKETS</Button></td>
                                        </tr>
                                        <tr>
                                            <td>AUG 1</td>
                                            <td>LAS VEGAS, NV</td>
                                            <td>T-MOBILE ARENA</td>
                                            <td><Button variant="info">BUY TICKETS</Button></td>
                                        </tr>
                                        <tr>
                                            <td>AUG 8</td>
                                            <td>CONCORD, CA</td>
                                            <td>CONCORD PAVILION</td>
                                            <td><Button variant="info">BUY TICKETS</Button></td>
                                        </tr>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
            <footer><h1 className="header1" style={{ textAlign: 'center', background: 'lightblue', color: 'white' }}>The Generics</h1></footer>
        </>

    )

}
export default Home;
=======
          <h1 style={{ fontFamily: 'Fira Sans' , color:'green',paddingTop:'80px',textAlign:'center'}}>WELCOME TO EXPENSE TRACKER</h1>
        </>
    )
}

export default Home;

/*
<div>
            <label>
            <i className="icon icon-trash fa fa-fw fa-trash">Delete</i><br></br>
            <i className="icon icon-envelope fa fa-fw fa-envelope mr-md-1">Envelope</i><br></br>
            <i className="icon icon-pencil fa fa-fw fa-edit mr-md-1">Edit Pencil</i><br></br>
            <i className="align-middle icon-refresh fas fa-sync">Refresh</i><br></br>
            <i className="icon icon-cogs fa fa-money fa-fw">Money</i><br></br>
            <i className="icon icon-home fa fa-home fa-fw" aria-hidden="true">Home</i><br></br>
            <i class="fa fa-power-off">Logout</i>
            <i className="icon icon-camera fa fa-camera-retro">Camera</i><br></br>
            <i className="icon icon-book fa fa-book fa-fw">Book</i><br></br>
            <i className="icon icon-cog fa fa-cog fa-fw">Cog</i><br></br>
            <i className="icon icon-cogs fa fa-cogs fa-fw">Cogs</i><br></br>
            <i className="icon icon-key fa fa-key fa-fw">Key</i><br></br>
            <i className="icon icon-user fa fa-user fa-fw">User</i><br></br>
            <i className="fa fa-user-circle" />
            <i className='far fa-id-badge' />
            <i className="icon icon-phone fa-thin fa-phone">Phone</i><br></br>
            <i className="icon icon-download fa-thin fa-download">Download</i><br></br>
            <i className="icon icon-comment fa-thin fa-comment">Comment</i><br></br>
            <i className="icon icon-shopping-cart fa fa-shopping-cart">Cart</i><br></br>
            <i className="icon icon-bell fa-thin fa-bell">Bell</i><br></br>
            <i className="icon icon-search fa-thin fa-magnifying-glass">Search</i><br></br>
            <i className="icon icon-info-sign fa-thin fa-circle-info"> Info</i><br></br>
            <i className="icon icon-lock fa-thin fa-lock">Lock</i><br></br>
            <i className="icon icon-unlock fa-thin fa-unlock">UnLock</i><br></br>
            <i className="icon icon-share fa-thin fa-share">Share</i><br></br>
            <i className="icon icon-link fa-thin fa-link">Link</i><br></br>
            <i className="icon icon-eye-open  fa-solid fa-eye">Eye</i><br></br>
            <i className="icon icon-ban-circle fa fa-ban fa-fw">Ban</i><br></br>
            <i className="icon icon-map-marker fa-thin fa-map-marker">Location</i><br></br>
            <i className="fa fa-toggle-on">Toggle on</i><br></br>
            <i className="fa fa-toggle-off">Toggle off</i><br></br>
            <i className="icon icon-database fa-thin fa-database">Database</i><br></br>
            <i className="icon icon-mobile fa-thin fa-mobile">Mobile</i><br></br>
            <i className="icon icon-cart-plus fa-thin fa-cart-plus">Cart Plus</i><br></br>
            <i className="icon icon-bars fa-thin fa-bars">Bars</i><br></br>
            <i className="icon icon-address-book fa fa-address-book-o fa-fw">Address Book</i><br></br>
            <i className="icon icon-bluetooth fa fa-bluetooth fa-fw">Bluetooth</i><br></br>
            <i className="icon icon-video fa-thin fa-video">Video</i><br></br>
            <i className="fas fa-wallet">Wallet</i><br></br>
            </label>
        </div>
    */
>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
