import React from 'react'
import ReactDOM from 'react-dom/client'
import  { router } from './routes/route.tsx';
import { RouterProvider } from 'react-router-dom';

import { store } from './app/store'
import { Provider } from 'react-redux'

import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
   
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  // </React.StrictMode>,
)
