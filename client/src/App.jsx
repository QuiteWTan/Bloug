import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route, createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import SingleBlogPage from './pages/SingleBlogPage';
import CreatePost from './pages/CreatePost';

function App() {

  const Layout = () => {
    return(
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const route = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element: <HomePage/>,
        },
        {
          path:'/post/:id',
          element: <SingleBlogPage/>,
        },
        {
          path:'/createblog',
          element: <CreatePost/>,
        },
      ]
    },
    {
      path:'/login',
      element: <LoginPage/>
    },
    {
      path:'/register',
      element: <RegisterPage/>
    },
  ])



  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}

export default App
