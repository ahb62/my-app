import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Form extends Component
{

    // crear los refs
    cityRef = React.createRef();
    countryRef = React.createRef();


    // Metodo para evitar el envio del formulario    
    searchWeather = (event) =>
    {
        event.preventDefault();
        // leer los refs y crear el objeto
        const answer =
        {
            city: this.cityRef.current.value,
            country: this.countryRef.current.value
        }
        // enviar por props
        this.props.getData(answer);
        // resetear el form
    }

    render() 
    {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.searchWeather}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input type="text" ref={this.cityRef} id="city" />
                                <label htmlFor="city">City:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.countryRef}>
                                    <option value="" defaultValue>Select a Country</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="ES">Spain</option>
                                    <option value="US">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="MX">Mexico</option>
                                    <option value="PE">Peru</option>
                                </select>
                                <label htmlFor="country">Country:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large orange-accent-4" value="Search..." />
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
Form.propTypes=
{
    getData: PropTypes.func.isRequired
}
export default Form;