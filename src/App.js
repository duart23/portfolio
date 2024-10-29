import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Face from './Components/Face';
import MyPath from './Components/MyPath';
import Socials from './Components/Socials';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Face/>
      <About/>
      <Projects/>
      <MyPath/>
      <Socials/>
    </div>
  );
}

export default App;
