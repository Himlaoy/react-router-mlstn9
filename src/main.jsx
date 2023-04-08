import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import School from './School/School';
import Album from './components/Album/Album';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children: [
      {path:'school', element:<School></School>},
      {path:'album', element:<Album></Album>,
      loader: ()=>fetch('photo.json')
    },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}></RouterProvider>
  
)
