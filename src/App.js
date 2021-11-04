import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './components/Store';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="container flex flex-col">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Store} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
