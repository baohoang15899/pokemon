import React, { Component } from 'react';
import PokeCard from "./ChildComponents/PokeCard"
import Modal from "./ChildComponents/Modal"
import Search from "./Search"
import Error from "./ChildComponents/Error"

export default class Habitat extends React.Component{
    constructor(){
        super()
        this.state = {
            id:[],
            status:true,
            isLoading:false,
            pokemon:[],
            connection:false
        }
    }

    componentDidMount(){
        this.status = true
        this.setState({isLoading:true})
        if (this.status === true) {
            this.getApi()
        }
    }

    componentWillUnmount(){
        this.status = false
    }

    async getApi(){
        const id = this.props.match.params
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${id.id}`)
        if (api.ok) {
            const poke = await api.json()
            const data = poke.pokemon_species
            this.setState({pokemon: data,
                            id: data.map(pokemon=> pokemon.url.split("/")).map(id=> id[6]),
                            isLoading:false,
                            connection:true})
        }
        else{
            this.setState({connection:false, isLoading:false})
            console.log("Connection not found");
        }
    }

    render(){
        const output = this.state.pokemon.map((pokemon,i)=>{
            return <PokeCard key={this.state.id[i]} poke = { {name:pokemon.name, id:this.state.id[i] }} />
        })
        return(
            <div className="pokemon">
                <Modal isLoading={this.state.isLoading}/>
                {this.state.connection ? 
                <div className="container">
                    <Search />
                    <div className="pokemon__content">
                        {(output)}
                    </div>
                </div>
                :  
                <Error error="Connection not found"/>
                }
            </div>
        )
    }
}