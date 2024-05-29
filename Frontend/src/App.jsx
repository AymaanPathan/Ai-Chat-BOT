import '../src/App.css'
import Header from './Components/Header'
import { Route,Routes } from 'react-router-dom'
import Chat from './Pages/Chat'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import { Toaster } from 'react-hot-toast'
import ForgetPassword from './Pages/ForgetPassword'

function App() {


  return (
   <main>
    <Header/>
    <Toaster   position="bottom-center"/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Chats' element={<Chat/>}/>
      <Route path='/forgetPassword' element={<ForgetPassword/>} />
      <Route path='*' element={<NotFound/>}/>  
    </Routes>
   </main>
  )
}

export default App
