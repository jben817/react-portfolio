import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import About from './components/About'; 
import Navbartab from './components/Navbartab';




function App() {
  return (
    <BrowserRouter >
    <div className="App"> 
    <Navbartab></Navbartab>
    <Route exact path="/react-portfolio" component={About} />
        <Route exact path="/react-portfolio/Contact" component={Contact} />
        <Route exact path="/react-portfolio/Projects" component={Projects} />
    </div>
    </BrowserRouter>
  );
}

export default App;
