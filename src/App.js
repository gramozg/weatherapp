import React, { Component } from 'react';
import firebase from 'firebase';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Footer from './components/Footer';

import Form from './components/Form';
import Moti from './components/Moti';
import Detail from './components/Detail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Config from './components/config';


const API_KEY = "82278d771592394ddebc3ff269da632b";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }


  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json(); 
    if(city && country) {
       
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } 
      else{
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Ju lutem shtypni shtetin dhe qytetin"
        });
        
      }
  }

  constructor() {
    super();

    this.state = {
      items: [] 
    };
  }

  componentDidMount() {
    var itemsRef = firebase.database().ref('moviedata');
    itemsRef.on('value', (snapshot) => {
      var movies = snapshot.val();
      
      var newList = Object.values(movies);

      this.setState({
        items: newList
      });
    });
  }


  render() {
    return (
      <div>
      
        <Form getWeather={this.getWeather}/>
        <Moti 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        <Navigation/>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Body movies={this.state.items}/>} />
            <Route path="/movie/:id" component={Detail}/>
          </Switch>
        </BrowserRouter>

        <Footer/>
      </div>
    );
  }
}

export default App;
