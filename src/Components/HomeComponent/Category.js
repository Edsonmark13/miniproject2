import React from "react";
import Col from 'react-bootstrap/Col';

const Category = (props) =>{
    return (
        <>
           <Col md xs={5} className="category-container">
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <img src={props.img} alt=""/>
                </div>
                <span>{props.label}</span>
            </Col>
        </>

    );
}

export default Category;