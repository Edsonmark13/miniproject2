import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import QuantityEditor from "./QuantityEditor";
import Sizes from "./Sizes";
import AddToCartButton from "./AddToCartButton";

const BestOffer =()=>{

    let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    const [bestOffer, setBestOffer] = useState([]);
    const [price, setPrice] = useState(0);

    const getBestOffer =()=>{
        const rand = Math.floor(Math.random() * products.length - 1);
        console.log(products[rand]);
        setPrice(products[rand].price);
        setBestOffer( products[rand]);
    }
    useEffect(() => {
        getBestOffer();
      }, []);

    const updatePrice =(quantity)=>{
        setPrice((bestOffer.price) * quantity);
    }
    return(
        <>
            <div className="w-100 d-flex justify-content-center align-item-center p-2 my-5" style={{backgroundColor: "#F6F1DD", borderRadius: "5px"}}>
                <Container>
                    <Row>
                        <h5 className="py-3"><strong>Best Offer</strong></h5>
                        <Col  md={3} className="d-flex justify-content-center align-item-center best-offer">
                            <img src={bestOffer.img_url} alt=""
                            style={{borderRadius: '10px', width: "90%"}}/>
                        </Col>
                        <Col>
                            <Row className="mt-3">
                                <h4>{bestOffer.main_title}</h4>
                            </Row>
                            <Row>
                                <Col>
                                    <QuantityEditor updatePrice ={updatePrice}/>
                                </Col>
                                <Col className="mt-3">
                                    <span>Price</span>
                                    <h3 style={{ color: "green"}}>{"₱ " + parseInt(price).toLocaleString('en-PH')}</h3>
                                </Col>
                            </Row>
                            <Row className="mt-2 mb-1">
                                <span>Sizes</span>
                                <Sizes/>
                            </Row>
                            <Row className="mt-5 mb-1">
                                <Col md={5}>
                                    <AddToCartButton text="Add to cart"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default BestOffer;