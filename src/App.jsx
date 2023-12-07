import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Nav from './Nav/Nav'
import Products from './pages/Products/Products'
import Users from './pages/Users/Users'
import Modal from './pages/Modal/Modal'
import { useState } from 'react'


function App() {

  const [isModal, setIsModal] = useState(false)

 const openModal = () => {
  setIsModal(true)
 }
  return (
    <div className='wrapper'>
      <Nav/>
      <div className='box'>
        <Routes>
        <Route path={'/products'} element={<Products/>}/>
        <Route path={'/users'} element={<Users/>}/>
        </Routes>
      </div>
      <Modal openModal={openModal} isModal={isModal}/> 
    </div>
  )
}

export default App
