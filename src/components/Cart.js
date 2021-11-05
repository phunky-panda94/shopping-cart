import Item from "./Item";
import { useEffect } from 'react';

function Cart(props) {

    const { items, setItems } = props;

    // fetch shopping cart items upon mounting
    useEffect(() => {
        if (localStorage.getItem('cart') != null) {
            setItems(new Map(Object.entries(JSON.parse(localStorage.getItem('cart')))));
        }
    }, [setItems]);

    function removeFromCart(itemId) {
        
        if (window.confirm('Are you sure?')) {
        
            // delete item from cart map
            items.delete(itemId);
            let updatedItems = new Map(props.items);

            setItems(updatedItems);

            // update local storage
            localStorage.setItem('cart', JSON.stringify(Object.fromEntries(updatedItems)));
            
        }

    }

    return (
        <div className="container flex flex-col flex-ai-c">
            <div className="box">
                <h1>My Shopping Cart</h1>
            </div>
            <div className="box">
                {items.size === 0 ? <h3>You don't have any items in your shopping cart!</h3> :
                    Array.from(items.values()).map(item => {
                        return <Item key={item.details.name} product={item} removeFromCart={removeFromCart}/>
                    })
                }
            </div>
            <div className="box flex flex-jc-fe">
                <button className="bg-dark-green" disabled={items.size === 0}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;