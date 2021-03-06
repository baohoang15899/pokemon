import React from 'react';
import ReactDOM from 'react-dom';
import MainPoke from './Components/Mainpokemon'
import Detail from './Components/Detailpokemon'
import Header from './Components/Header'
import Type from './Components/Type'
import Habitat from './Components/Habitat'
import  './css/main.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class Main extends React.Component{
  render(){
    return (
      <Router>
        <div className="wrapper"> 
          <Header/> 
          <Switch>
            <Route exact path="/"  component = {MainPoke} />
            <Route  exact path="/type/:name"  component ={(props) => <Type  key={window.location.hash}  {...props} />}/>
            <Route  exact path="/habitat/:id"  component ={(props) => <Habitat  key={window.location.hash}  {...props} />}/>
            <Route exact path="/poke/:id"  component ={Detail} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Main />,document.getElementById("root"))

