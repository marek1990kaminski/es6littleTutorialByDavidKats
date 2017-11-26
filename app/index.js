import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const api_key = "0e05821128c5e8dc296c6b23beac62ba";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Warsaw',
            description: ''
        }
    }

    componentDidMount() {
        this.grabWeather(this.state.city);
    }

    grabWeather(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`).then(response => response.json()).then(json => {
            console.log(json);
            let info = "temperature : "+ (Math.round((json.main.temp-273)*10)/10) + ", pressure: "+ json.main.pressure +", wind: " + json.wind.speed + ", clouds: "+ json.weather[0].description;
            this.setState({description: info})
        });
    };

    render() {
        return (
            <div>
                <h1>Weather Report for {this.state.city}</h1>
                <h2>{this.state.description}</h2>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));