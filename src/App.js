import './App.css';
import { Cart } from './components/Navbar/CartWidget';
import { Navbar } from './components/Navbar/Navbar';
// import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';

function App() {
  return (
  <>
    <Navbar>
      <Cart/>
    </Navbar>
    <ItemDetailContainer/>
    {/* <ItemListContainer/> */}
  </>
)};

export default App;
