import '../App.css';
import gallardo1 from '../img/gallardosupercopa.jpg';
import gallardo2 from '../img/gallardosuper.jpg';
import gallardo3 from '../img/gallardoasuncion.jpg';
import gallardo4 from '../img/gallardosudamericana.jpg';
import gallardo5 from '../img/gallardocopaargentina2019.jpg';
import gallardomadrid from '../img/gallardomadrid.jpg';
import gallardorecopa from '../img/gallardorecopa2016.jpg';
import {Link} from 'react-router-dom';


function Home(){
    return(
<div className="App">
      <section id="galeria" className="container">
      <div className="text-center pt-5">
        <h1>Galería Homenaje de Marcelo Gallardo</h1>
        <p>Recorrido de los grandes logros de Gallardo en 7 años de gestión.</p>
      </div>
        <div className="fotos">
        <Link to="/gallardosuperclasico"><img alt="galeria" src={gallardo2}/></Link>
        <Link to="/gallardomadrid"><img alt="galeria" src={gallardomadrid}/></Link>
        <Link to="/gallardosupercopa"><img alt="galeria" src={gallardo1}/> </Link>
        <Link to="/gallardoasuncion"><img alt="galeria" src={gallardo3}/></Link>
        <Link to="/gallardocopaarg2019"><img alt="galeria" src={gallardo5}/></Link>
        <Link to="/gallardorecopa"><img alt="galeria" src={gallardorecopa}/></Link>
        <Link to="/gallardosudamericana"><img alt="galeria" src={gallardo4}/></Link>
        </div>
    </section>
    </div>
    )
}

export default Home;