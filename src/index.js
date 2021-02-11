import React from 'react';
import ReactDOM from 'react-dom';
import MainPoke from './Components/Mainpokemon'
import Detail from './Components/Detailpokemon'
import PokeCard from './Components/ChildComponents/PokeCard'
import Header from './Components/Header'
import Type from './Components/Type'
import  './css/main.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Main extends React.Component{
  render(){
    return (
      <Router>
        <div className="wrapper">
          <Header/>
          <Route exact path="/"  component = {MainPoke} /> 
          <Switch>
            <Route  exact path="/:id"  component ={(props) => <Type  key={window.location.hash}  {...props} />}/>
            <Route exact path={["/pokemon/:id"]}  component ={Detail} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Main />,document.getElementById("root"))

