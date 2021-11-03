import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Store from './components/Store';
import Cart from './components/Cart';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Store} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Router>
    );
}

export default App;
