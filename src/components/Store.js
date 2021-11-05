import Card from "./Card";
import Products from '../Products';

function Store(props) {
    
    const {cart, setCart} = props;

    function addToCart(event, qty, product) {

        event.preventDefault();

        let itemId = `${product.brand}-${product.name}`
        let item;

        if (cart.get(itemId) != null) {
            item = cart.get(itemId);
            item.qty += parseInt(qty);
        } else {
            item = {
                details: product,
                qty: qty
            }
        }

        setCart(new Map(cart.set(itemId, item)));
        localStorage.setItem('cart', JSON.stringify(Object.fromEntries(cart)));

        window.alert(`${qty} ${product.name} added to your shopping cart!`);
        event.target.reset();
        
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