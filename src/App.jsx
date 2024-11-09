
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Login from './components/Login'
import Feed from './components/feed'

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Body/>}>
      <Route path='/login' element={<Login/>}/>
      <Route path='/feed' element={<Feed/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
