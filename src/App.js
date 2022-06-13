import './App.css';
import { Cart } from './components/Navbar/CartWidget';
import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (
  <>
    <Navbar>
      <Cart/>
    </Navbar>
    <ItemListContainer/>
  </>
)};

export default App;
