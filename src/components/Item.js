function Item() {
    return (
        <div className="item flex flex-row flex-jc-sb">
            <img></img>
            <div className="item-details flex flex-col flex-grow flex-jc-se">
                <span className="bold large">Product Name</span>
                <span>Brand</span>
                <i>In Stock</i>
                <label for="qty">
                    <span>Qty: </span>
                    <input type="number" name="qty" defaultValue="1" min='1'></input>
                </label>
            </div>
            <div className="item-details flex flex-col flex-ai-c flex-jc-se">
                <span className="bold large">$18.99</span>
                <button className="grey">Remove</button>
            </div>
        </div>
    )
}

export default Item;