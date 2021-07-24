
import './App.css';
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Photography from './components/pages/Photography';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Header/>

      
        <Switch>
          <Route path="/About"> <About/> </Route>
          <Route path="/Contact"> <Contact/> </Route>
          <Route path="/Photography"> <Photography/> </Route>
          <Route path="/"> <Home/> </Route>
        </Switch>
        
      
      <Footer/>

    </div>
  );
}

export default App;
