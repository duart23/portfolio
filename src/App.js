import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Face from './Components/Face';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Face/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
