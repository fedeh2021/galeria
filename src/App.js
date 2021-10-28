import './App.css';
import GallardoSuperclasico from './components/GallardoSuperclasico';
import GallardoSupercopa from './components/GallardoSupercopa';
import GallardoSuda from './components/GallardoSuda';
import GallardoMadrid from './components/GallardoMadrid';
import GallardoAsuncion from './components/GallardoAsuncion';
import GallardoCopaArg19 from './components/GallardoCopaArg19';
import Home from './components/Home';
import escudo from './img/River Plate.png'
import {Link, Route, Switch} from 'react-router-dom';
import GallardoRecopa from './components/GallardoRecopa';

function App() {
  return (
    <div>
      <Link to="/"><img className="escudo" alt="logo" src={escudo}/></Link>

    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/gallardosuperclasico" component={GallardoSuperclasico}/>
    <Route path="/gallardosupercopa" component={GallardoSupercopa}/>
    <Route path="/gallardosudamericana" component={GallardoSuda}/>
    <Route path="/gallardomadrid" component={GallardoMadrid}/>
    <Route path="/gallardoasuncion" component={GallardoAsuncion}/>
    <Route path="/gallardocopaarg2019" component={GallardoCopaArg19}/>
    <Route path="/gallardorecopa" component={GallardoRecopa}/>
    </Switch>

    </div>
  );
}

export default App;
