import React from 'react';
import Config from './config';
import firebase from 'firebase';

export default class Detail extends React.Component {

    constructor() {
      super();
      this.state = {
        movie: null
      };
    }

    componentDidMount() {
      var itemsRef = firebase.database().ref('moviedata');
      itemsRef.on('value', (snapshot) => {
        var movies = snapshot.val();
  
        this.setState({
          movie: movies[this.props.match.params.id]
        });
      });
    }

    render() {
        let element = null;
        if (this.state.movie) {
          element = (
            <div>
              <ul>
                <li><h1>{this.state.movie.name}</h1></li>
                <li><div className="detaj"> Pershkrimi: </div>{this.state.movie.pershkrimi}</li>
                <li><div className="detaj">Shteti: </div> {this.state.movie.shteti}</li>
                <li><div className="detaj">Kontinenti:</div> {this.state.movie.kontinenti}</li>
                <li><div className="detaj">Banoret: </div>{this.state.movie.banoret}</li>
                <li><div className="detaj">Siperfaqja: </div>{this.state.movie.siperfaqja}</li>
                <li><div className="detaj">Monedha: </div>{this.state.movie.monedha}</li>
                <li><div className="detaj">Pikat Turistike: </div> {this.state.movie.pikat}</li>
                <li><div className="detaj">Lagjet: </div>{this.state.movie.lagjet}</li>
                <li><div className="detaj">Universitetet:  </div>{this.state.movie.universitetet}</li>
              </ul>
            </div>
          )
        }

        return element;
    }
}