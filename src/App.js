import './App.css';
import Navber from './Navber/Navber';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Services from './Pages/Services';

function App() {
  return (
    <div>
     <Navber></Navber>
     <Home></Home>
     <Services></Services>
     <Project></Project>
     <Contact></Contact>
     
    
    </div>
  );
}

export default App;
