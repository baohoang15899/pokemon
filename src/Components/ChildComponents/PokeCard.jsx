import React, { Component } from 'react';
import { Link} from 'react-router-dom'
export default class PokeCard extends React.Component{
    constructor(){
        super()
        this.state={
            imgStatus: true,
            imgLoading : true,
        }
        this.onError = this.onError.bind(this)
        this.onLoad = this.onLoad.bind(this)
    }
    onError(){
        this.setState({imgStatus:false})
        console.log(`This pokemon is not fully updated: ${this.props.poke.name}`);
    }



    onLoad(){
        this.setState({imgLoading:false})
    }

    render(){
        return(
            <div className="pokemon__content-box">
                {this.state.imgStatus && 
                    <div>       
                    <div className="boxDetail">
                        <div className={`imgLoad ${this.state.imgLoading ? "" : " hide"}`}>
                            <div className="spinner">
                            </div>
                        </div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.props.poke.id}.png`} onLoad = {this.onLoad} alt=""/>
                        <span className="pokemon__content-name">{this.props.poke.name}</span>
                    </div>
                    <div className ="box-link" >
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.poke.id}.png`}  onError= {this.onError}  alt=""/>
                        <Link to={`poke/${this.props.poke.id}`}className="pokemon__content-link">More Info</Link>
                    </div>
                </div>    
                }            
            </div>
        )
    }
}