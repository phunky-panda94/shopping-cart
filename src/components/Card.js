import { useState } from 'react';

function Card(props) {
    
    const [qty, setQty] = useState(1);

    function changeQty(event) {
        setQty(event.target.value);
    }
    
    return (
        <div className="card flex flex-col flex-ai-c">
            <img alt={props.product.name} src={props.product.image}></img>
            <form className="flex flex-row flex-jc-sb flex-ai-c" onSubmit={(event) => props.addToCart(event, qty, props.product)}>
                <label htmlFor="qty">
                    <span>Qty: </span>
                    <input type="number" name="qty" defaultValue="1" min='1' onChange={changeQty}></input>
                </label>
                <input className="bg-dark-green" type="submit" value="Add to Cart"></input>
            </form>
        </div>
    )
}

export default Card;