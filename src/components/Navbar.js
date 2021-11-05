import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="navbar flex flex-jc-sb">
            <Link className="link" to="/">Store</Link>
            <Link className="link flex flex-ai-c" to="/cart">
                <span className="material-icons-outlined">shopping_cart</span>
                <span className="badge">{props.numberOfItems}</span>
            </Link>
        </nav>
    )
}

export default Navbar;