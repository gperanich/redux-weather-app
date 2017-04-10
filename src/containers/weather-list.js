import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends React.Component {
    renderWeather(cityData) {
        console.log(cityData);
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273 );
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={cityData.city.name} >
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td>
                    <Chart data={temps} color="orange" units='C' />
                </td>
                <td>
                    <Chart data={pressures} color="green" units='hpa' />
                </td>
                <td>
                    <Chart data={humidities} color="black" units='%' />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table> 
        )
    }
}

function mapStateToProps({weather}) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);