import './App.css';
import ShoppingCart from './components/ShoppingCart';
import ShoppingForm from './components/ShoppingForm';
import { ShoppingProvider } from './context/ShoppingContext';

function App() {
  return (
    <div className="App">
      <ShoppingProvider>
        <ShoppingForm />
        <ShoppingCart />
      </ShoppingProvider>
      
    </div>
  );
}

export default App;
