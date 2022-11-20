import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUpPage from './pages/signup/';
import PageNotFound from './pages/404';
import Home from './pages/home/home';
import React from 'react';
function App() {
  return (
    <div className="App h-full">
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Home/>}/>
          <Route path="signin" element={<SignUpPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
