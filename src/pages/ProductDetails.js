import React from 'react';
import { Card, Button, Badge } from "react-bootstrap";
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    const params = useParams();
    console.log(params.productid)
    if (params.productid === 'p4') {
        return <Card className="shadow-lg">
            <Card.Body>
                <h3>Blue Color</h3>
                <div> <img src={'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'} alt="Products !"></img></div>
                <div>Rs : 100</div>
                <div>Quantity: 1</div>
                <Button onClick={() => props.addToCartHandler}className="m-1">Add to Cart</Button>
                <div>
                    <label style={{background:"lightblue",padding:"10px 20px"}}>Reviews</label> <br></br>
                    <span><Badge bg="secondary">haripriya</Badge></span>
                        {[...Array(5)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    
                    <label>Aewsome color really beautiful</label> <br></br>
                    <span><Badge bg="secondary"> anjali</Badge></span>
                    {[...Array(4)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Super</label> <br></br>
                    <span><Badge bg="secondary"> jai</Badge></span>
                    {[...Array(3)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Feeling good</label> <br></br>
                    <span><Badge bg="secondary">sid</Badge></span>
                    {[...Array(5)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Nice</label> <br></br>
                </div>

            </Card.Body>
        </Card>
    }

    else if (params.productid === 'p3') {
        return <Card className="shadow-lg">
            <Card.Body>
                <h3>Yellow and Black Colors</h3>
                <div> <img src={'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'} alt="Products !"></img></div>
                <div>Rs : 70</div>
                <div>Quantity: 1</div>
                <Button className="m-1">Add to Cart</Button>
                <div>
                    <label style={{background:"lightblue",padding:"10px 20px"}}>Reviews</label> <br></br>
                    <span><Badge bg="secondary">haripriya</Badge></span>
                        {[...Array(5)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    
                    <label>Aewsome color really beautiful</label> <br></br>
                    <span><Badge bg="secondary"> anjali</Badge></span>
                    {[...Array(4)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Super</label> <br></br>
                    <span><Badge bg="secondary"> jai</Badge></span>
                    {[...Array(3)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Feeling good</label> <br></br>
                    <span><Badge bg="secondary">sid</Badge></span>
                    {[...Array(5)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Nice</label> <br></br>
                </div>
            </Card.Body>
        </Card>
    }

    else if (params.productid === 'p2') {
        return <Card className="shadow-lg">
            <Card.Body>
                <h3>Black and white Colors</h3>
                <div> <img src={'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'} alt="Products !"></img></div>
                <div>Rs : 50</div>
                <div>Quantity: 1</div>
                <Button className="m-1">Add to Cart</Button>
                <div>
                    <label style={{background:"lightblue",padding:"10px 20px"}}>Reviews</label> <br></br>
                    <span><Badge bg="secondary">haripriya</Badge></span>
                        {[...Array(5)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    
                    <label>Aewsome color really beautiful</label> <br></br>
                    <span><Badge bg="secondary"> anjali</Badge></span>
                    {[...Array(4)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Super</label> <br></br>
                    <span><Badge bg="secondary"> jai</Badge></span>
                    {[...Array(3)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Feeling good</label> <br></br>
                    <span><Badge bg="secondary">sid</Badge></span>
                    {[...Array(5)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Nice</label> <br></br>
                </div>
            </Card.Body>
        </Card>
    }

    else if (params.productid === 'p1') {
        return <Card className="shadow-lg">
            <Card.Body>
                <h3>Colors</h3>
                <div> <img src={'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'} alt="Products !"></img></div>
                <div>Rs : 90</div>
                <div>Quantity: 1</div>
                <Button className="m-1">Add to Cart</Button>
                <div>
                    <label style={{background:"lightblue",padding:"10px 20px"}}>Reviews</label> <br></br>
                    <span><Badge bg="secondary">haripriya</Badge></span>
                        {[...Array(5)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    
                    <label>Aewsome color really beautiful</label> <br></br>
                    <span><Badge bg="secondary"> anjali</Badge></span>
                    {[...Array(4)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Super</label> <br></br>
                    <span><Badge bg="secondary"> jai</Badge></span>
                    {[...Array(3)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Feeling good</label> <br></br>
                    <span><Badge bg="secondary">sid</Badge></span>
                    {[...Array(5)].map((star) => {
                            return (
                                <span className="star">&#9733;</span>
                            );
                        })}
                    <label>Nice</label> <br></br>
                </div>
            </Card.Body>
        </Card>
        
    }
    else{
        <p>Product not product</p>
    }
    return (
        <section>
            { }
        </section>

    )
}
export default ProductDetails;

