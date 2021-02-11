import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'


export default class PokeCard extends React.Component{
    constructor(){
        super()
        this.state={
            imgStatus: true,
        }
        this.onLoad = this.onLoad.bind(this)
    }
    onLoad(){
        this.setState({imgStatus:false})
        console.log(`This pokemon is not fully updated: ${this.props.poke.name}`);
    }
    render(){

        return(
            <div className="pokemon__content-box">
                {this.state.imgStatus && 
                <div>   
                    <div className="boxDetail">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.props.poke.id}.png`} alt=""/>
                        <span className="pokemon__content-name">{this.props.poke.name}</span>
                    </div>
                    <div className ="box-link">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.poke.id}.png`} onError= {this.onLoad}  alt=""/>
                        <Link to={`pokemon/${this.props.poke.id}`}className="pokemon__content-link">More Info</Link>
                    </div>
                </div>
                }
            </div>
            
        )
    }
}