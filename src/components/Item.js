function Item() {
    return (
        <div className="item flex flex-row flex-jc-sb">
            <img src="/images/ipad.jpg"></img>
            <div className="item-details flex flex-col flex-grow flex-jc-se">
                <span className="bold large">iPad Pro</span>
                <span>Apple</span>
                <i className="dark-green">In Stock</i>
                <span className="bold large">$18.99</span>
                <label for="qty">
                    <span>Qty: </span>
                    <input type="number" name="qty" defaultValue="1" min='1'></input>
                </label>
            </div>
            <div className="item-details flex flex-col flex-ai-c flex-jc-c">
                <span className="dark-grey material-icons-outlined">remove_shopping_cart</span>
            </div>
        </div>
    )
}

export default Item;