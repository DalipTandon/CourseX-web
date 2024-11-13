
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Login from './components/Login'
import Feed from './components/feed'
import Carousel from './components/Carousel '
import Faqs from './components/Faqs'
import Signup from './components/Signup'
import appStore from "./utils/appStore"
import { Provider } from 'react-redux'
import Learnings from './components/Learnings'
function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Body/>}>
      <Route path='/' element={<Carousel/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/feed' element={<Feed/>} />
      <Route path='/faqs' element={<Faqs/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/learnings' element={<Learnings/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
