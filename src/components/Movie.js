import React from 'react';
import { Link } from 'react-router-dom';

export default class Movie extends React.Component {

    render() {
        return (
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <Link to={'/movie/'+this.props.id}><img className="card-img-top" src={this.props.image} alt /></Link>
            <div className="card-body">
              <h4 className="card-title">
                <Link to={'/movie/'+this.props.id}>{this.props.title}</Link>
              </h4>
              <p className="card-text">{this.props.pershkrimi}</p>
            </div>
          </div>
        </div>);
    }
}