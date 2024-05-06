import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <h1>Coding Camp</h1>
      <Router>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Create' element={<Create/>}/>
           <Route path='/Edit' element={<Edit/>}/>
         </Routes>
      </Router>
    </div>  
  );
};

export default App;

