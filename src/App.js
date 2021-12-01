import React, { useState } from 'react';
import { Route, Routes} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from './Components/Containers/Home';
import Login from "./Components/Auth/Login";
import Register from './Components/Auth/Register';
import { ToastContainer } from 'react-toastify';
import NotFound from './Components/UI/404/NotFound';
import Modal from './Components/UI/Modal/Modal';
// import Support from './Components/Layout/Support';

function App() {

  const [open , setOpen] = useState(false)
  const onOpen = () => setOpen(true);
  const offOpen = () => setOpen(false);



  return (


    <>
      <ToastContainer/>
      <Navbar onShow={onOpen}/>
      <Modal show={open} close={offOpen}/>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<Navigate to="/" />}/> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
