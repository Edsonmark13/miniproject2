import { Button } from 'antd';

const Sizes =()=>{
    const sizeCollection = ['XL', 'LG', 'MD', 'SM', 'XS'];
    return (
        <>
            <div className="d-flex sizes">
               {
                    sizeCollection.map((item) =>{
                        return <Button>{item}</Button>
                    })
               }
            </div>
        </>
    );
}

export default Sizes;