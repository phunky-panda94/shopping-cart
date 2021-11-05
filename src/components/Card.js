import { useState } from 'react';

function Card(props) {
    
    const [qty, setQty] = useState(1);

    function addToCart(event) {
        event.preventDefault();

        let cart;
        let itemId = `${props.product.brand}-${props.product.name}`
        let item = {
            details: props.product,
            qty: qty
        }

        if (localStorage.getItem('cart') == null) {
            cart = new Map();
            cart.set(itemId,item);
        } else {
            cart = new Map(Object.entries(JSON.parse(localStorage.getItem('cart'))));
            cart.set(itemId,item);
        }

        localStorage.setItem('cart', JSON.stringify(Object.fromEntries(cart)));

        window.alert(`${qty} ${props.product.name} added to your shopping cart!`);

    }

    function changeQty(event) {
        setQty(event.target.value);
    }
    
    return (
        <div className="card flex flex-col flex-ai-c">
            <img alt={props.product.name} src={props.product.image}></img>
            <form className="flex flex-row flex-jc-sb flex-ai-c" onSubmit={addToCart}>
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