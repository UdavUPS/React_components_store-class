/* import logo from './logo.svg';*/
/* import '../css/style.css';  */
import { ShopItemClass } from './components.jsx';
import { item } from './object.js';

/* const ShopItem = new ShopItemClass();

console.log(ShopItemClass); */


function App() {

  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item = {item}/>
    </div>
  </div>
  );
}

export default App;
