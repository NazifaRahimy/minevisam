import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './commp/navBar';
import HomePage from './commp/home';
import Technology from './commp/technology';
import Lifestyle from './commp/lifestyle';
import Entertainment from './commp/entertainment';
function App() {


    return (
    <div dir='trl' className="w-full h-auto relative top-0 left-0 ">
      <BrowserRouter >
       <NavBar />
         <Routes>
            <Route path="/"  element={<HomePage />}/>
            <Route path="/technology"  element={<Technology />}/>
            <Route path="/lifestyle"  element={<Lifestyle/>}/>
            <Route path='/entertainment' element={<Entertainment/>} />
         </Routes>
     
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
