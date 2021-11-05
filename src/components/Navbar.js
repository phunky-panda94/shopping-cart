import { Link } from 'react-router-dom';

function Navbar() {

    let cart;
    let items;
    
    if (localStorage.getItem('cart') != null) {
        cart = new Map(Object.entries(JSON.parse(localStorage.getItem('cart'))));
        items = cart.size;
    } else {
        items = 0;
    }

    return (
        <nav className="navbar flex flex-jc-sb">
            <Link className="link" to="/">Store</Link>
            <Link className="link flex flex-ai-c" to="/cart">
                <span className="material-icons-outlined">shopping_cart</span>
                <span className="badge">{items}</span>
            </Link>
        </nav>
    )
}

export default Navbar;