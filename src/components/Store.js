import Card from "./Card";
import Products from '../Products';

function Store(props) {
    
    function addToCart(event, qty, product) {
        event.preventDefault();

        let cart;
        let itemId = `${product.brand}-${product.name}`
        let item = {
            details: product,
            qty: qty
        }

        if (localStorage.getItem('cart') == null) {
            cart = new Map();
        } else {
            cart = new Map(Object.entries(JSON.parse(localStorage.getItem('cart'))));
        }

        props.setCart(new Map(cart.set(itemId, item)));
        localStorage.setItem('cart', JSON.stringify(Object.fromEntries(cart)));

        window.alert(`${qty} ${product.name} added to your shopping cart!`);

    }
    
    return (
        <div className="container flex flex-col flex-ai-c">
            <div className="box">
                <h1>Latest Tech</h1>
            </div>
            <div className="box flex flex-row flex-wrap">
                {Products.map(product => {
                    return <Card key={product.name} product={product} addToCart={addToCart}/>
                })}
            </div>
        </div>
    )
}

export default Store;