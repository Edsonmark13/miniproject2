import React, {useState, useEffect} from "react";
import Category from "../Components/HomeComponent/Category";
import Products from "../Components/HomeComponent/Products";
import SaleOffer from "../Components/HomeComponent/SaleOffer";
import BestOffer from "../Components/HomeComponent/BestOffer";
import {Container, Row} from 'react-bootstrap';
import { Button} from 'antd';

import CoverVideo from "../Media/Videos/ennea.webm";


const Home = () => {

    const categories =[
        {
            label: "item 1",
            img: 'https://esprit.scene7.com/is/image/esprit/992EE2K306_455_48?$SFCC_L$'
        },
        {
            label: "item 2",
            img: 'https://esprit.scene7.com/is/image/esprit/992EE2K306_455_48?$SFCC_L$'
        },
        {
            label: "item 3",
            img: 'https://esprit.scene7.com/is/image/esprit/992EE2K306_455_48?$SFCC_L$'
        },
        {
            label: "item 4",
            img: 'https://esprit.scene7.com/is/image/esprit/992EE2K306_455_48?$SFCC_L$'
        },
        {
            label: "item 5",
            img: 'https://esprit.scene7.com/is/image/esprit/992EE2K306_455_48?$SFCC_L$'
        },
        {
            label: "item 6",
            img: 'https://esprit.scene7.com/is/image/esprit/992EE2K306_455_48?$SFCC_L$'
        }

    ];
    const [pageStatus, setPageStatus] = useState({
        isLoading: true
    });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() =>{
            const response = await fetch('http://localhost/php/ennea.api.php?products=1');
            const data = await response.json();
            setProducts(data.data);

            localStorage.setItem('products', JSON.stringify(data.data)); //save products to localStorage

            setPageStatus(
                {
                    ...pageStatus,
                    isLoading: false
                }
            );
        }
        fetchData();
      }, []);

    return (
        <>
           <Container fluid>
                <Row>
                    <video loop autoPlay muted>
                        <source
                        src={CoverVideo}
                        type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </Row>
           </Container>
           <Container className="my-4">
                <h5 className="mt-3 mb-3">
                    Shop By Category
                </h5>
                <Row className="d-flex justify-content-center">
                    {
                        categories.map((category) =>{
                            return <Category label={category.label} img={category.img}/>;
                        })
                    }
                </Row>
           </Container>
           <Container className="my-4">
                <h5 className="mt-5 mb-4">
                    Featured <span className="ps-2 pe-2" style={{backgroundColor: "red", color: "white", borderRadius: '5px', fontSize: '15px'}}>NEW</span>
                    <a href="/" className="float-end" style={{fontSize: '16px'}}>View all</a>
                </h5>
                <Row className="g-4">
                   {
                        products ? 
                            products.map((product, index) =>{
                                if(index > products.length - 5){
                                    return <Products img_url={product.img_url} title={product.main_title} price={product.price} id={product.item_id}/>
                                }
                            })
                        :   ''
                   }
                </Row>
           </Container>
           <Container className="mt-5">
                <Row>
                    <BestOffer/>
                </Row>
           </Container>
           <Container className="">
                <Row>
                   <SaleOffer/>
                </Row>
           </Container>
           <Container className="my-4 mb-5">
                <h3 className="mt-5 mb-4">
                    Products
                    <a href="/" className="float-end" style={{fontSize: '16px'}}>View all</a>
                </h3>
                <Row className="g-4">
                   {
                        products ? 
                            products.map((product, index) =>{
                                if(index < 8){
                                    return <Products img_url={product.img_url} title={product.main_title} price={product.price} id={product.item_id}/>
                                }
                            })
                        :   ''
                   }
                </Row>
           </Container>
        </>
    );
}
export default Home;