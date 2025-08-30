import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './commp/navBar';

function App() {


    return (
    <div dir='trl' className="w-full h-auto relative top-0 left-0 ">
      <BrowserRouter >
       <NavBar />
         <Routes>
    
         </Routes>
     
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
