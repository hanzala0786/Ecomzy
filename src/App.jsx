import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import {useState} from 'react';
const App = () => {
  const [botOpen, setBotOpen] = useState(false);
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website',
      trigger: 'Ask Name',
    },
    
    {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'Waiting1',
    },

    {
      id: 'Waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, Please select your issue',
      trigger: 'issues',
    },
    {
      id:'issues',
      options: [
        {value: "Order Cancel", label:"Order Cancel", trigger:"Order Cancel"},
        {value: "Order Tracking", label:"Order Tracking", trigger:"Order Tracking"},
        {value: "Order Replacement", label:"Order Replacement", trigger:"Order Replacement"}
      ]
    },
    {
      id:'Order Cancel',
      message:'Thanks for telling your Order Cancel issue',
      end: true,
    },
    {
      id:'Order Tracking',
      message:'Thanks for telling your Order Tracking issue',
      end: true,
    },
    {
      id:'Order Replacement',
      message:'Thank you for telling your Order Replacement issue',
      end: true,
    }
  ]
  return (
    <>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <div>
        {
             botOpen ?
             (<div>
                <Segment floated="middle" className='absolute bottom-16 rigth-10'>
                  <ChatBot steps={steps}/>
                </Segment>
                <div onClick={() => setBotOpen(!botOpen)}
                 className='absolute px-3 py-2 font-semibold transition-all duration-300 bg-blue-500 rounded-lg cursor-pointer text-canter bottom-16 right-5 hover:scale-105 text-slate-100'>
                  ChatBot
                </div>
             </div>
              ):
             (<div onClick={() => setBotOpen(!botOpen)}
             className='absolute px-3 py-2 font-semibold transition-all duration-300 bg-blue-500 rounded-lg cursor-pointer text-canter bottom-16 right-5 hover:scale-105 text-slate-100'>
              ChatBot
            </div>)
        } 
      </div>
    </>
  );
}

export default App;
