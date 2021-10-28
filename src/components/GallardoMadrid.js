import rivermadrid from '../img/rivermadrid.jpg';
import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class GallardoMadrid extends Component{
    render(){
    return(
        <div>
            <h2>Gallardo: Hazaña de Madrid</h2>
            <div className="texto">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=CQre9mRlPaQ' className='react-player' controls />
                <img className="fotocomponente" alt="fotocomponente" src={rivermadrid}/>
                <p>
    Fueron 40 extensos días, interminables desde aquel empate de Boca ante Palmeiras que confirmó la final más importante de la historia de la Copa Libertadores, que se transformó también en la más larga, con sus 28 noches desde la ida del 11 de noviembre y este histórico 9 de diciembre, a miles de kilómetros del Monumental pero con el festejo absolutamente de River. 
    La primera parte de este ajedrez con una pelota encontró mucho mejor perfiladas a las fichas que organizó Guillermo Barros Schelotto , quien parecía haber analizado cada detalle de todos los duelos ante Gallardo para encontrar el punto débil. Así, contrarrestó la superpoblación de volantes de buen pie con la garra de su triple pívot y el apoyo de los dos wings, que no tuvieron reparos en jugar como carrileros, con Sebastián Villa como el más destacado en la doble función.
    Después de haber tenido la más clara al inicio, con un remate de Pérez a las manos de Armani, el primer jaque al rey llegó con una puñalada de Nández para Benedetto, que eludió a Pinola y, a diferencia de la situación de la ida, logró colocarla contra el palo .
    El Muñeco no esperó demasiado para jugar al todo o nada y dar vuelta por completo el tablero: afuera Ponzio, adentro Juanfer y a recuperar el manejo. Boca bajó la intensidad, se perdió en la cancha y el que aprovechó fue Nacho Fernández, quien fue de menor a mayor para terminar con una pared que le permitió a Pratto definir con el arco a su merced. 
    Aunque quedaban más de 20 minutos por delante, el temor a un mal movimiento que deje al rey descubierto guió el partido al tiempo suplementario, que terminó siendo una pintura de este casi mes y medio de agonía, de finales reprogramadas, violencia, caos, un viaje a Europa y mucho más. Los dos equipos estaban extenuados física y mentalmente, con Wilmar Barrios como exponente por una plancha a destiempo que dejó a su equipo con 10 .
    Llegó la genialidad de un gol para la historia: Juanfer Quintero sacó un sablazo al ángulo, inatajable para Andrada, que desató la locura de River a los 109 minutos. Pero el final fue de quien más lo merecía en la Banda: una corrida de 50 metros del Pity Martínez, aquel que tan loco está, para empujarla con el arco vacío mientras Andrada buscaba el cabezazo salvador.
    El Millonario tiene la cuarta en sus vitrinas, la que tuvo que esperar más de un mes para poder definir en la cancha, la que casi pierde por un grupo de violentos pero la que este equipo y, por sobre todo, el ajedrecista Gallardo, siempre mereció. 
                </p>
            </div>
        </div>
    )
    }
}

export default GallardoMadrid;