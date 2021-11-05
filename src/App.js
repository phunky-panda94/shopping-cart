import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './components/Store';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
    
    const [items, setItems] = useState(new Map());
    
    return (
        <Router>
            <div className="container flex flex-col">
                <Navbar numberOfItems={items.size}/>
                <Switch>
                    <Route exact path="/">
                        <Store />
                    </Route>
                    <Route path="/cart">
                        <Cart items={items} setItems={setItems}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
