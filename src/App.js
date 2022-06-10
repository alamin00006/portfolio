import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navber from './Navber/Navber';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import MainHome from './Pages/MainHome';
import Myblog from './Pages/Myblog';
import Project from './Pages/Project';
import ProjectDetails from './Pages/ProjectDetails';

import Services from './Pages/Services';

function App() {
  return (
    <div>
   
     <Navber></Navber>
    
     <Routes>
      <Route path='/' element={<MainHome></MainHome>}></Route>
      <Route path='/home' element={<MainHome></MainHome>}></Route>
   <Route path='/projectDetails/:productId' element={<ProjectDetails></ProjectDetails>}></Route>
   <Route path='/blogs' element={<Myblog></Myblog>}></Route>
   </Routes>
    
    </div>
  );
}

export default App;
