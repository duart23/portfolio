import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import MyPath from './Components/MyPath';
// import Socials from './Components/Socials';
import "@fontsource/jura";
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Projects/>
      <MyPath/>
      {/* <Socials/> */}
    </div>
  );
}

export default App;
