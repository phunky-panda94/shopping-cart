function Item(props) {
    
    let itemId = `${props.product.details.brand}-${props.product.details.name}`;

    return (
        <div className="item flex flex-row flex-jc-sb">
            <img alt={props.product.details.name} src={props.product.details.image}></img>
            <div className="item-details flex flex-col flex-grow flex-jc-se">
                <span className="bold large">{props.product.details.name}</span>
                <span>{props.product.details.brand}</span>
                <i className={props.product.details.availability === 'In Stock' ? 'green' : 'dark-grey'}>
                    {props.product.details.availability}
                </i>
                <span className="bold large">{props.product.details.price}</span>
                <label htmlFor="qty">
                    <span>Qty: </span>
                    <input type="number" name="qty" defaultValue={props.product.qty} min='1' onChange={(event) => 
                        props.updateQty(event, itemId)}>
                    </input>
                </label>
            </div>
            <div className="item-details flex flex-col flex-ai-c flex-jc-c">
                <span className="dark-grey material-icons-outlined" onClick={() => 
                    props.removeFromCart(itemId)}>
                        remove_shopping_cart
                </span>
            </div>
        </div>
    )
}

export default Item;