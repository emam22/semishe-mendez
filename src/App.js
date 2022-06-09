import './App.css';
import { Cart } from './components/Navbar/CartWidget';
import {Semi} from './components/Navbar/Navbar';
import {List} from './components/Navbar/ItemListContainer';

function App() {
  return (
  <body>
    <Semi>
      <Cart/>
    </Semi>
    <List/>
  </body>
)};

export default App;
