import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-tooltip/dist/react-tooltip.css'
import '@smastrom/react-rating/style.css'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
 </div>
)
