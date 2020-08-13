import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import About from './components/About'; 
import Navbartab from './components/Navbartab';



function App() {
  return (
    <BrowserRouter basename="/react-portfolio">
    <div className="App"> 
    <Navbartab></Navbartab>
    <Route exact path="/react-portfolio" component={About} />
        <Route path="/react-portfolio/contact" component={Contact} />
        <Route path="/react-portfolio/projects" component={Projects} />
    </div>
    </BrowserRouter>
  );
}

export default App;
