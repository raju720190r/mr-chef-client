import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from '../components/Layout/Layout.jsx';
import Home from '../components/Home/Home.jsx';
import Blog from '../components/Blog/Blog.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Login from '../components/Login/Login.jsx';
import Register from '../components/Register/Register.jsx';
import ChefDetails from '../components/Home/Chef/ChefDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
     {
      path:"home",
      element:<Home></Home>,
     },
     {
      path:"/blog",
      element:<Blog></Blog>
     },
     {
      path:"/contact",
      element:<Contact></Contact>
     },
     {
      path:"/login",
      element:<Login></Login>
     },
     {
      path:"/register",
      element:<Register></Register>
     },
     {
      path:"/chefdetails/:id",
      element:<ChefDetails></ChefDetails>,
      loader:({params})=> fetch(`http://localhost:5050/cData/${params.id}`)
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
