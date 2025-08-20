import { useEffect, useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PublishRide from './pages/PublishRide'
import SearchRide from './pages/SearchRide'
import Login from './pages/Login'
import Rides from './pages/Rides'
import { useAuthStore } from './store/useAuthStore'





function App() {

  const {user,token}=useAuthStore();
    
  useEffect(()=>{
    if(token &&!user){
    
    }

  },[]);




  return (
   <BrowserRouter>
     <Routes>
   <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/PublishRide' element={<PublishRide/>}/>
    <Route path='/SearchRide' element={<SearchRide/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Rides' element={<Rides/>}/>
   </Route>

     </Routes>
    
   </BrowserRouter>
  )
}

export default App
