import riversuperclasico from '../img/riversuperclasico.jpg';
import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class GallardoSuperclasico extends Component{
    render(){
        return(
        <div>
            <h2>Gallardo Superclasico 2021</h2>
            <div className="texto">
                <ReactPlayer
                url='https://www.youtube.com/watch?v=uCImgniL-lg' className='react-player' controls/>
                <img className="fotocomponente" src={riversuperclasico} alt="fotocomponente"/>
            <p>
    El detalle de Gallado usando la mitica corbata de Angel Labruna.
    River Plate fue amplio dominador de principio a fin y se quedó con la victoria por 2-1 en el Superclásico ante Boca Juniors válido por la fecha 14° del torneo de la Liga Profesional. En el día que marcó el regreso de los hinchas al estadio Monumental luego de un año y medio de ausencia por la pandemia de coronavirus, el equipo de Marcelo Gallardo dio un recital de fútbol ante un rival que estuvo muy lejos de su mejor versión y así consiguió un triunfo que le permitió subirse a la cima del certamen.
    Sobre los 25′ iba a aparecer la gran joya de River para torcer la historia. Julián Álvarez tomó la pelota por el centro del ataque, enganchó ante la marca, se hizo un espacio y sacó un tremendo remate que bajó justo para convertirse en el 1-0 del Millonario. 
    El equipo local se hizo de la pelota y la hizo circular con la intención de generar nuevos espacios para lastimar. 
    La tónica del encuentro se mantuvo hasta el cierre, ni los cambios pudieron torcer la historia. 
    Gallardo le ganó por primera vez a Boca desde que Juan Román Riquelme asumió como vicepresidente xeneize a fines de 2019. 
            </p>
            </div>
        </div>
        )
    }
}

export default GallardoSuperclasico;