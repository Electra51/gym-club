
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
