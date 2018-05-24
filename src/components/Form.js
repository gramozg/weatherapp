import React from 'react';

export default class Form extends React.Component{
    render(){
        return(
        <div className = "formaa">
            <form  onSubmit={this.props.getWeather}>
            <fieldset >
                <legend>Shikoni Motin në kohë reale!</legend>
                <input type = "text" name = "city" placeholder = "Shkruaj Qytetin....."/>
                <input type = "text" name = "country" placeholder = "Shkruaj Shtetin....."/>
                <button>Kliko</button>
                </fieldset>
            </form>
        
        </div>
        );
    }
}