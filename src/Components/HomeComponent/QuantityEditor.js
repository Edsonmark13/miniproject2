import React, {useState} from "react";
import { Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

const Quantity = ({updatePrice}) =>{

    const [quantity, setQuantity] = useState(1);

    let counter = 1;
    const addQuantity = () =>{
        counter = quantity;
        
        counter++;
        setQuantity(counter);
        updatePrice(counter);
    }
    const minusQuantity = () =>{
        counter = quantity;

        counter--;
        if(counter < 1){
            counter = 1;
        }
        setQuantity(counter);
        updatePrice(counter);
    }

    return (
        <>
            <div className="d-flex mt-4 quantity-editor">
                <Button 
                    icon={ <FontAwesomeIcon icon={faMinus} size="md"/>} 
                    className="minus"
                    onClick={minusQuantity}
                />
                <h5 className="px-3 mt-1">{quantity}</h5>
                <Button 
                    icon={ <FontAwesomeIcon icon={faPlus} 
                    size="md"/>} 
                    className="plus"
                    onClick={addQuantity}
                />
            </div>
        </>
    );
}

export default Quantity;