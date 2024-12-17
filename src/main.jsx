/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Baccarat from './pages/Baccarat.jsx'
import Bambo from './pages/Bambo.jsx'
import BigbassBonRN from './pages/BigbassBonRN.jsx'
import BigBassChi from './pages/BigBassChi.jsx'
import BigBassR from './pages/BigBassR.jsx'
import Blackjack from './pages/Blackjack.jsx'
import BookRN from './pages/BookRN.jsx'
import Casino from './pages/Casino.jsx'
import Deposit from './pages/Deposit.jsx'
import Eye from './pages/Eye.jsx'
import FishinR from './pages/FishinR.jsx'
import FreeSlot from './pages/FreeSlot.jsx'
import FreeSpin from './pages/FreeSpin.jsx'
import Gates from './pages/Gates.jsx'
import GoldRN from './pages/GoldRN.jsx'
import HighR from './pages/HighR.jsx'
import LionR from './pages/LionR.jsx'
import Roulette from './pages/Roulette.jsx'
import Welcome from './pages/Welcome.jsx'
import ZesuR from './pages/ZesuR.jsx'


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
    path:'/Roulette',
    element:<Roulette></Roulette>
  },





  {
    path:'/bigBassReview',
    element:<BigBassR></BigBassR>
  },


  {
    path:'/bigBassBon',
    element:<BigbassBonRN></BigbassBonRN>
  },
  {
    path:'/GoldR',
    element:<GoldRN></GoldRN>
  },
  {
    path:'/bookRn',
    element:<BookRN></BookRN>
  },




  {
    path:'/bookBasChi',
    element:<BigBassChi></BigBassChi>
  },



  {
    path:'/fishin',
    element:<FishinR></FishinR>
  },
 
  {
    path:'/highway',
    element:<HighR></HighR>
  },
 
  {
    path:'/zesu',
    element:<ZesuR></ZesuR>
  },




  {
    path:'/lion',
    element:<LionR></LionR>
  },
  {
    path:'/bambo',
    element:<Bambo></Bambo>
  },
  {
    path:'/eye',
    element:<Eye></Eye>
  },
  {
    path:'/gates',
    element:<Gates></Gates>
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
