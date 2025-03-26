import "./App.css";
import NavBar from "./component/Navbar/navbar";

import Skills from "./component/Skill/skills";
import Home from "./component/home/home";
import About from "./component/About/about";
import Contact from "./component/contact/contact";


function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Skills />  
    
      <Contact/>
      
      
    </>
  );
}

export default App;
