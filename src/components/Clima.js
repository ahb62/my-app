import React, { Component } from 'react'

class Clima extends Component
{
    render() 
    {
        console.log(this.props.otheresult)
        return(
            <>
                <div className="container">
                    <h1>Hola Clima!</h1>
                </div>
            </>
        )
    }
}
export default Clima;