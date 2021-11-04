import Item from "./Item";

function Cart() {
    return (
        <div className="container flex flex-col flex-ai-c">
            <div className="box">
                <h1>My Shopping Cart</h1>
            </div>
            <div className="box">
                <Item />
            </div>
            <div className="box flex flex-jc-fe">
                <button className="dark-green">Checkout</button>
            </div>
        </div>
    )
}

export default Cart;