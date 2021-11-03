import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar flex flex-jc-sb">
            <Link className="link" to="/">Store</Link>
            <Link className="link" to="/cart">
                <span className="material-icons-outlined">shopping_cart</span>
                <span className="badge">0</span>
            </Link>
        </nav>
    )
}

export default Navbar;