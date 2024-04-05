import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import InputContextprovider from './stor/InputContextprovider';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './componnt/Navbar';

function App() {
  return (
    <>
    <InputContextprovider>
    <Login/>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}>Login</Route>
      <Route path='/Home' element={<Home/>}>Home</Route>
    </Routes>
    </BrowserRouter>
    </InputContextprovider>
    </>
  );
}

export default App;
