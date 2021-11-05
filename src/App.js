import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './components/Store';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
    
    const [cart, setCart] = useState(new Map());
    
    // fetch shopping cart items upon mounting 
    useEffect(() => {
        if (localStorage.getItem('cart') != null) {
            setCart(new Map(Object.entries(JSON.parse(localStorage.getItem('cart')))));
        }
    }, []);

    return (
        <Router>
            <div className="container flex flex-col">
                <Navbar numberOfItems={cart.size}/>
                <Switch>
                    <Route exact path="/">
                        <Store setCart={setCart}/>
                    </Route>
                    <Route path="/cart">
                        <Cart cart={cart} setCart={setCart}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
