import React, {useState} from "react";
import {Col, Row} from 'react-bootstrap';
import { Button, notification } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faCircleCheck} from '@fortawesome/free-solid-svg-icons'

const Products = (props) =>{
    //localStorage.clear();
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []; //load cart from local storage

    const isInCart =()=>{
        let isFound = false;
        cart.map((product) =>{
            if(product.item_id === props.id){
                isFound = true;
            }
        });
        return isFound;
    }

    const [productDetails, setProductDetails] = useState({
        isAddedToCart: isInCart(),
        isLoading: false,
    });

    const addToCart = () =>{
        let currentProduct = {
            item_id: props.id,
            img_url: props.img_url,
            price: props.price,
            quantity: 1
        };

        if(!isInCart()){
            cart.push(currentProduct);
            localStorage.setItem('cart', JSON.stringify(cart));//save item to cart
        }else{
            return;
        }

        setProductDetails({
            ...productDetails,
            isLoading: true
        });

        setTimeout(()=>{
            const loading =()=>{
                setProductDetails({
                    ...productDetails,
                    isAddedToCart: true,
                    isLoading: false
                });
            }
            loading();
            openNotification();
        }, 1000);
    }

    const openNotification = () =>{
        const placement = 'top';
        notification['success']({
            message: `Cart`,
            description:
              'Item added', placement,
          });
    }
    return (
        <>
            <Col md={3}>
                <div  className="product-container">
                    <div className="d-flex justify-content-center align-content-center">
                        <img src={props.img_url} 
                            alt="" 
                            style={{width: "100%"}}
                        />
                    </div>
                    <Row className="my-2 p-2">
                        <h6 style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'}}
                        >
                        {props.title}
                        </h6>
                        <span className="mt-2" style={{fontSize: "12px"}}>Price</span>
                        <p style={{fontSize: "13px", color: "green"}}><strong>{"₱ " + parseInt(props.price).toLocaleString('en-PH')}</strong>
                            <Button
                                icon={
                                    productDetails.isAddedToCart ? 
                                        <FontAwesomeIcon icon={faCircleCheck} size="lg" className="cart-icon"/>
                                    :   
                                        <FontAwesomeIcon icon={faCartPlus} size="lg" className="cart-icon" beat/>
                                }
                                className=
                                {
                                    productDetails.isAddedToCart ? 'float-end product-icon-cart-added' : 'float-end product-icon-cart'
                                }
                                loading={productDetails.isLoading}
                                onClick={addToCart}
                            >
                            {
                                productDetails.isAddedToCart ? 'View in cart' : 'Add to cart'
                            }
                            </Button>
                        </p>
                    </Row>
                </div>
            </Col>
        </>

    );
}

export default Products;