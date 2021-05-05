import React, { Component } from 'react'
import Header from './Header';
import Form from './Form';
import Error from './Error';
import Clima from './Clima';
class App extends Component 
{
  state = 
  {
    error: "",
    requestInfo: {},
    otheresult: {}
  }
  
  
  componentDidMount() 
  {
    this.setState({error: false})
  }
  
  componentDidUpdate(prevState, prevProps)
  {
    if(prevState.requestInfo !== this.state.requestInfo)
    {
      this.reqApi();
    }
  } 
  
  reqApi = () =>
  {
    const {city, country} = this.state.requestInfo;
    if (!city || !country) return null;
    const apiId = '74d550b28e5370e52b792ae6394204e1';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiId}`;

    // Query con fetch API
    fetch(url).then(response => {return response.json();}).then(data => {this.setState({otheresult: data});}).catch(error => {console.error(error);})
    // Leer la URL y agregar el API Key



    // Consultar con fetch

  }

  getData = (answer) =>
  {
    if (answer.city === "" || answer.country === "")
    {
      console.error("There is a error");
      this.setState({error: true})
    } else
    {
      this.setState({requestInfo: answer, error: false})
    }
  }

  render()  
  {
    const error = this.state.error;
    let result;
    if (error)
    {
      result = <Error message="ambos campos son obligatorios" />;
    }else
    {
      result = <Clima otheresult={this.state.otheresult}/>
    }
    return (
      <div>
        <Header title="React Weather" />
        <Form getData={this.getData}  />
        {result}
      </div>
    );
  }
}  

export default App;