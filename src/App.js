import React, { Component} from "react"
import styled from 'styled-components'

const Greeting = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 200px;
height: auto;
background-color: rgba(120, 140, 188, 0.4);
color: rgba(55, 195, 88, 3);
`

class App extends Component{
  render(){
    return(
      <Greeting>
        <h1> Hello, World! </h1>
        <h2> I`m glad to see you! </h2>
      </Greeting>
    );
  }
}

export default App;
