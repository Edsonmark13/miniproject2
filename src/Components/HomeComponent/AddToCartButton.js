import { Button } from 'antd';

const AddToCartButton =(props)=>{
    return (
        <>
            <Button
                style={{
                    backgroundColor:"#61B147",
                    borderRadius: "20px",
                    color: "white",
                    border: "none",
                    height: "40px",
                    fontSize: "16px"
                }}
                className="w-100"
            >
                {props.text}
            </Button>
        </>
    );
}

export default AddToCartButton;