import React from "react";
import Products from "../components/Products";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const productsArr = [
    {
        id: 'p1',
        title: 'Colors',
        price: 100,
        amount: 1,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        reviews: <div>
            <label style={{ background: "lightblue", padding: "10px 20px" }}>Reviews</label> <br></br>
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

    },

    {
        id: 'p2',
        title: 'Black and white Colors',
        price: 50,
        amount: 1,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        reviews: <div>
            <label style={{ background: "lightblue", padding: "10px 20px" }}>Reviews</label> <br></br>
            <span><Badge bg="secondary">hari</Badge></span>
            {[...Array(5)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}

            <label>Aewsome color</label> <br></br>
            <span><Badge bg="secondary"> priya</Badge></span>
            {[...Array(4)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}
            <label>Super color</label> <br></br>
            <span><Badge bg="secondary"> ram</Badge></span>
            {[...Array(3)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}
            <label>Feeling pleasant</label> <br></br>
            <span><Badge bg="secondary">shyam</Badge></span>
            {[...Array(5)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}
            <label>Nice</label> <br></br>
        </div>,
    },

    {
        id: 'p3',
        title: 'Yellow and Black Colors',
        price: 70,
        amount: 1,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        reviews: <div>
            <label style={{ background: "lightblue", padding: "10px 20px" }}>Reviews</label> <br></br>
            <span><Badge bg="secondary">harika</Badge></span>
            {[...Array(5)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}

            <label>Beautiful</label> <br></br>
            <span><Badge bg="secondary"> krishna</Badge></span>
            {[...Array(4)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}
            <label>Super</label> <br></br>
            <span><Badge bg="secondary"> Giri</Badge></span>
            {[...Array(3)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}
            <label>good</label> <br></br>
            <span><Badge bg="secondary">Balu</Badge></span>
            {[...Array(5)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}
            <label>Nice color</label> <br></br>
        </div>,
    },

    {
        id: 'p4',
        title: 'Blue Color',
        price: 100,
        amount: 1,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        reviews: <div>
            <label style={{ background: "lightblue", padding: "10px 20px" }}>Reviews</label> <br></br>
            <span><Badge bg="secondary">shailu</Badge></span>
            {[...Array(5)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}

            <label>Beautiful Color</label> <br></br>
            <span><Badge bg="secondary"> Yogi</Badge></span>
            {[...Array(4)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}
            <label>Cool</label> <br></br>
            <span><Badge bg="secondary"> Loukik</Badge></span>
            {[...Array(2)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}
            <label>Not bad</label> <br></br>
            <span><Badge bg="secondary">Pandu</Badge></span>
            {[...Array(3)].map((star) => {
                return (
                    <span className="star">&#9733;</span>
                );
            })}
            <label>Nice</label> <br></br>
        </div>,
    }
]
const ProductDetailsPractise = (props) => {
    const params = useParams();

    const ids = productsArr.filter(id => id.id === params.productid);
    const productList = ids.map((product) => (
        <Products
            key={product.id}
            {...product}
        />
    ));
    return (
        <ul>{productList}</ul>
    )
}
export default ProductDetailsPractise;
