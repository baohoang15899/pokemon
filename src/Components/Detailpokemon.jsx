import React, { Component } from 'react';
import Modal from "./ChildComponents/Modal"
import Error from "./ChildComponents/Error"
import { Link } from 'react-router-dom';

export default class MainPokemon extends React.Component{
    constructor(){
        super()
        this.state = {
            connection:false,
            isLoading:false,
            id:"",
            name:"",
            info:"",
            abilities:[],
            stats:[],
            height:"",
            weight:"",
            type:[],
            exp:"",
            color:"",
            habitat:"",
            capture:"",
            egg:[]
        }
    }

    componentDidMount(){
        this.status = true
        this.setState({isLoading:true})
        if (this.status === true) {
            this.getData()
        }
    }

    componentWillUnmount(){
        this.status = false
    }

    async getData(){
        const id = this.props.match.params
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.id}`)
        const apiType = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id.id}`)
        if (api.ok && apiType.ok) {
            const typeData = await apiType.json()
            const data = await api.json()
            this.setState({
                connection: true,
                id:data.id,
                egg:typeData.egg_groups,
                capture:typeData.capture_rate,
                color:typeData.color.name,
                habitat:typeData.habitat,
                name: data.name,
                info: data,
                abilities: data.abilities.map(item=> { 
                    return item.ability.name
                }),
                stats: data.stats.map((item,i)=> { 
                    return item
                }),
                type: data.types,
                height: data.height,
                weight: data.weight,
                exp:data.base_experience,
                isLoading:false
            })
        }
        else{
            console.log("Connection not found");
            this.setState({connection:false,isLoading:false})
        }
    }


    render(){
        return(
            <div className="PokeDetail">
                <Modal isLoading={this.state.isLoading}/>
                <div className="container">
                    {this.state.connection ? 
                    <div className="PokeDetail__content">
                    <div className={`PokeDetail__content-left ${ this.state.color ? this.state.color : ""}`}>
                        <div className="PokeDetail__content-img">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.state.id}.png`} alt=""/>
                        </div>
                        <div className="PokeDetail__content-name">
                            {this.state.name}
                        </div>
                        <div className="PokeDetail__content-stat">
                            {this.state.stats.map((item,i)=>{
                                return (
                                    <div key={i} className="PokeDetail__content-stat">
                                        <div className="group">
                                            <span className="statName">{ item.stat.name}:</span>
                                            <div className="statBar">
                                                <div className="progress" style= { {width: item.base_stat + "%"} }></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={`PokeDetail__content-right ${ this.state.color ? this.state.color : ""}`}>
                            <div className="PokeDetail__content-title">
                                <h3>Pokemon Info</h3>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.id}.png`} alt=""/>
                            </div>
                            <div className="PokeDetail__content-type">
                                <span>Type: { this.state.type.map((type,i)=>{
                                        return <Link to={`/${type.type.name}`}  className={`btn ${ this.state.color ? this.state.color : ""} ` } key={i}>{type.type.name}</Link>
                                    })}</span>
                            </div>
                            <div className="PokeDetail__content-color">
                                <span>Color: { this.state.color}</span>
                            </div>
                            <div className="PokeDetail__content-height">
                                <span>Height: { this.state.height/10}m</span>
                            </div>
                            <div className="PokeDetail__content-weight">
                                <span>Weight: { this.state.weight/10}kg</span>
                            </div>
                            <div className="PokeDetail__content-exp">
                                <span>Base exp: { this.state.exp}</span>
                            </div>
                            <div className="PokeDetail__content-habitat">
                                <span>Habitat: { this.state.habitat ? this.state.habitat.name : "???"}</span>
                            </div>
                            <div className="PokeDetail__content-rate">
                                <span>Capture rate: { this.state.capture}%</span>
                            </div>
                            <div className="PokeDetail__content-egg">
                                <span>Egg: { this.state.egg.length > 1 ? 
                                    this.state.egg.map((item,i)=>{
                                        return <span key={i}>{item.name}</span>
                                    }).reduce((prev,curr)=> [prev, ", ",curr])
                                : this.state.egg.map((item,i)=>{
                                    return <span key={i}>{item.name}</span>
                                })}</span>
                            </div>
                            <div className="PokeDetail__content-skill">
                                <span>Skills: </span>
                                {this.state.abilities.length > 1 ?  
                                    this.state.abilities.map((type,i)=>{
                                        return <span key={i}>{ type}</span>
                                    }).reduce((prev, curr) => [prev, ', ', curr])
                                    : 
                                    this.state.abilities.map((type,i)=>{
                                        return <span key={i}>{ type}</span>
                                    })
                                }
                        </div>
                    </div>
                </div>
                : <Error error="Pokemon info not found"/>                    
                    }
                </div>
            </div>
        )
    }
}