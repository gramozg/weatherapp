import React from 'react';

export default class Moti extends React.Component{
    render(){
        return(
            <div className="moti">
               {this.props.city && this.props.country &&   <p> <div className="motidetaj">Lokacioni: </div>{ this.props.city },  { this.props.country }</p>}
               {this.props.temperature && <p><div className="motidetaj"> Temperatura: </div>{ this.props.temperature }</p>}
               {this.props.humidity &&<p><div className="motidetaj"> Lageshtia: </div>{ this.props.humidity }</p>}
               {this.props.description &&<p><div className="motidetaj"> Condition:  </div>{ this.props.description }</p>}
               {this.props.error &&<p> <div className="motidetaj">Kushtet e airit: </div> { this.props.error }</p>}
            </div>
        );
    }
}