import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import useAuthStore from './store/useAuthStore'

import SearchRides from './components/Rides/SearchRidesForm'
import Rides from './pages/Rides'
import PublishRide from './pages/PublishRide'
function App() {
  const [count, setCount] = useState(0)
  const {getUser,user,token}= useAuthStore();
  useEffect(()=>{

  },[])
  return (
     <BrowserRouter>
  
     <Routes>

      <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/Rides' element={<Rides/>}/>
     <Route path='/PublishRide' element={<PublishRide/>}/>
      </Route>

     </Routes>
 
     </BrowserRouter>
  )
}

export default App
