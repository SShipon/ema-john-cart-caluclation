import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import About from './components/About/About.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
