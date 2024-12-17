/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Baccarat from './pages/Baccarat.jsx'
import BigBassR from './pages/BigBassR.jsx'
import Blackjack from './pages/Blackjack.jsx'
import Casino from './pages/Casino.jsx'
import Deposit from './pages/Deposit.jsx'
import FreeSlot from './pages/FreeSlot.jsx'
import FreeSpin from './pages/FreeSpin.jsx'
import Welcome from './pages/Welcome.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },

  
  {
    path:'/casino',
    element:<Casino></Casino>
  },
  {
    path:'/free',
    element:<FreeSlot></FreeSlot>
  },




  {
    path:'/welcome',
    element:<Welcome></Welcome>
  },
  {
    path:'/freeSpin',
    element:<FreeSpin></FreeSpin>
  },
  {
    path:'/deposit',
    element:<Deposit></Deposit>
  },



  {
    path:'/Baccarat',
    element:<Blackjack></Blackjack>
  },
  {
    path:'/Blackjack',
    element:<Baccarat></Baccarat>
  },
  {
    path:'/bigBassReview',
    element:<BigBassR></BigBassR>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)



// logo -> 235*51
// banner pic  -> 1500*500 
// category pic -> 116*64
// Daily pic -> 402*300
// product pic -> 163*160
// Special Snacks -> 551*250
// Brand -> 151*135
// Don't Miss Out adds -> 583 * 377
// sing up and in -> 400*600
