import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import MyPath from './Components/MyPath';
import Socials from './Components/Socials';
import Skills from './Components/Skills';
import "@fontsource/jura";
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Projects/>
      <MyPath/>
      <Skills/>
      <Socials/>
    </div>
  );
}

export default App;
