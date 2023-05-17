import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    return (
        <section>

            <Container>
                <h1 style={{textAlign: "center",color:"blue"}}>Available Products</h1><br></br>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to="/Product-Details/p1">Multi Colors</Link></td>
                            <td>100.00</td>
                            <td><img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt="Products !" width="100"></img></td>
                        </tr>
                        <tr>
                            <td><Link to="/Product-Details/p2">Black and white Colors</Link></td>
                            <td>50.00</td>
                            <td><img src='https://prasadyash2411.github.io/ecom-website/img/Album%202.png' alt="Products !" width="100"></img></td>
                        </tr>
                        <tr>
                            <td><Link to="/Product-Details/p3">Yellow and Black Colors</Link></td>
                            <td>70.00</td>
                            <td><img src='https://prasadyash2411.github.io/ecom-website/img/Album%203.png' alt="Products !" width="100"></img></td>
                        </tr>
                        <tr>
                            <td><Link to="/Product-Details/p4">Blue Color</Link></td>
                            <td>100.00</td>
                            <td><img src='https://prasadyash2411.github.io/ecom-website/img/Album%204.png' alt="Products !" width="100"></img></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </section>
    )
}

export default ProductPage;

