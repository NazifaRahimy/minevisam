import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './commp/navBar';
import HomePage from './commp/home';
function App() {


    return (
    <div dir='trl' className="w-full h-auto relative top-0 left-0 ">
      <BrowserRouter >
       <NavBar />
         <Routes>
            <Route path="/"  element={<HomePage />}/>
         </Routes>
     
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
