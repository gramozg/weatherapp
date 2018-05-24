import React from 'react';
import Movie from './Movie';

export default class Body extends React.Component {

  constructor() {
    super();

    this.state = {
      currentPage : 0
    };
  }

  nextClicked() {
    var totalMovies = this.props.movies.length;
    
    if (this.state.currentPage < totalMovies / 3 - 1) {
      this.setState((prevState) => {
        return {
          currentPage: prevState.currentPage + 1
        };
      });
    }
  }

  prevClicked() {
    if (this.state.currentPage > 0) {
      this.setState((prevState) => {
        return {
          currentPage: prevState.currentPage - 1
        };
      });
    }
  }

  goToPage(value) {
    this.setState({
      currentPage: value
    });
  }

    render() {
        return (<div className="container">
        <h1 className="my-4">
        </h1>
        
        <ul className="pagination ">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous" onClick={this.prevClicked.bind(this)}>
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={this.goToPage.bind(this, 1)}>1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={this.goToPage.bind(this, 2)}>2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={this.goToPage.bind(this, 3)}>3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={this.goToPage.bind(this,4)}>4</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={this.goToPage.bind(this, 5)}>5</a>
          </li>
         <li className="page-item">
            <a className="page-link" href="#" aria-label="Next" onClick={this.nextClicked.bind(this)}>
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
        
        <div className="row">
            {this.props.movies.slice(this.state.currentPage*3, this.state.currentPage*3+3).map((value) => { return <Movie id={value.id} title={value.name}  pershkrimi={value.pershkrimi}  /> })}
        </div>
        <h1>
          {this.state.currentPage}
          </h1>
      </div>
      );
    }
}