import { Button } from 'antd';

const SaleOffer =()=>{
    return(
        <>
            <div className="w-100 d-flex justify-content-center align-item-center p-2 mb-5" style={{backgroundColor: "#90F6D0", borderRadius: "5px"}}>
                <h1>
                    Sale up to <strong>30% off</strong>
                </h1>
                <Button
                    className="shop-button"
                >
                    SHOP NOW
                </Button>
            </div>
        </>
    );
}
export default SaleOffer;