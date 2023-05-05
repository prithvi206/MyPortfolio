import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects, StarsCanvas ,GoToTop} from "./components";


const App = () => { 
  return (
    <BrowserRouter>
      <GoToTop/>
      <div className="relative z-0 bg-primary">
        <div className="bg-center">
          <Navbar />
          <Hero/>
        </div>
        <About />
        <Projects />
        <Tech />
       
        <div className="relative z-0">
          <Contact />
          
         
        </div>
        </div>
    </BrowserRouter>
    
  );
}

export default App
