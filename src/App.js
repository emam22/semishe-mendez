import './App.css';
import { Cart } from './components/Navbar/CartWidget';
import {Navbar} from './components/Navbar/Navbar';
import Item from './components/ItemList/Item';

function App() {
  return (
  <>
    <Navbar>
      <Cart/>
    </Navbar>
    <Item/>
  </>
)};

export default App;
