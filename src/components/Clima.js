import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    //Extraer los valores que trae el api
    const { name, main} = resultado;

    //En caso de que no se llene los campos no se ejecute el codigo
    if(!name) return null;

    //Grados Kelvin
    const kelvin = 273.15

    
    return ( 
        
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    { parseFloat (main.temp - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>  
                </p>
                <p> Temperatura Maxima:
                    { parseFloat (main.temp_max - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>  
                </p>
                <p> Temperatura Maxima:
                    { parseFloat (main.temp_min - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>  
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;