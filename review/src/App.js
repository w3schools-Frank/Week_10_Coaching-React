import logo from './logo.svg';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingCart from './components/ShoppingCart';
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
