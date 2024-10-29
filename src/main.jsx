import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Componests/Home/Home.jsx'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Componests/About/About.jsx'
import Contact from './Componests/Contact/Contact.jsx'
import User from './Componests/User/User.jsx'
import UserDetails from './Componests/UserDetails/UserDetails.jsx'
import Posts from './Componests/Posts/Posts.jsx'
import PostDetails from './Componests/PostDetails/PostDetails.jsx'
import ErrorPage from './Componests/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/user",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: "/posts",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: "/user/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/posts/:postId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
