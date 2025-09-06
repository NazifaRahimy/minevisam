import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './commp/navBar';
import HomePage from './commp/home';
import Technology from './commp/technology';
function App() {


    return (
    <div dir='trl' className="w-full h-auto relative top-0 left-0 ">
      <BrowserRouter >
       <NavBar />
         <Routes>
            <Route path="/"  element={<HomePage />}/>
            <Route path="/technology"  element={<Technology />}/>
         </Routes>
     
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
