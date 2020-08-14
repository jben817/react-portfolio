import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import About from './components/About'; 
import Navbartab from './components/Navbartab';




function App() {
  return (
    <HashRouter >
    <div className="App"> 
    <Navbartab></Navbartab>
    <Route exact path="/" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Projects" component={Projects} />
    </div>
    </HashRouter>
  );
}

export default App;
