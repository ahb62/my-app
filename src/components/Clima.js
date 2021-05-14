import React, { Component } from 'react'
import PropTypes from 'prop-types';
class Clima extends Component
{
    showOtheresult = () =>
    {
        // Obtener los datos de la consulta:
        const {name, weather, main} = this.props.otheresult;
        if(!name || !weather || !main) return null;
        const kelvin = 273.15;
        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue text-center">
                        <span className="white-text">
                            <h2>El clima en {name}:</h2>
                            <p className="temperatura">
                                Actual: { (main.temp - kelvin).toFixed(2) } &deg;C
                            </p>
                            <p>
                                Max: { (main.temp_max - kelvin).toFixed(2) } &deg;C
                            </p>
                            <p>
                                Min: { (main.temp_min - kelvin).toFixed(2) } &deg;C
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    render() 
    {
        console.log(this.props.otheresult)
        return(
            <>
                <div className="container">
                    {this.showOtheresult()}
                </div>
            </>
        )
    }
}
Clima.propTypes =
{
    result: PropTypes.object.isRequired
}
export default Clima;