import { JoinClassindex } from "./components/JoinClassScreen";
import { HomeScreenindex } from "./components/homeScreen";
import { LoginScreenindex } from "./components/login screen";
import { SignupScreenindex } from "./components/signup screen";
import { StartScreenindex } from "./components/start Screen"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UpdateProfileindex } from "./components/updateprofilescreen";
import { Takeattendanceindex } from "./components/takeattendance";
import { Lastpage } from "./components/takeattendance/lastpage";


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<StartScreenindex />}/>
    <Route path='/login' element={<LoginScreenindex />}/>
    <Route path='/signup' element={<SignupScreenindex />}/>
    <Route path='/home' element={<HomeScreenindex />}/>
    <Route path='/joinclass' element={<JoinClassindex />}/>
    <Route path='/updateprofile' element={<UpdateProfileindex />}/>
    <Route path='/takeattendance' element={<Takeattendanceindex />}/>
    <Route path='/lastpage' element={<Lastpage />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
