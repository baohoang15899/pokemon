import React, { Component } from 'react';
import PokeCard from "./ChildComponents/PokeCard"
import Modal from "./ChildComponents/Modal"
import Search from "./Search"
import Error from "./ChildComponents/Error"

export default class MainPokemon extends React.Component{
    constructor(){
        super()
        this.state = {
            status:true,
            isLoading:false,
            pokemon:[],
            connection:false,
            page:40
        }
        this.onClick = this.onClick.bind(this)
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

    onClick(){
        console.log("Chuyển trang");
        this.setState(prev=> {
            return {page:prev.page+20}
        },this.getApi)
    }

    async getApi(){
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.page}`)
        if (api.ok) {
            const poke = await api.json()
            console.log(poke);
            const data = poke.results
            console.log(data);
            this.setState({pokemon: data,
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
            return <PokeCard key={i+1} poke = { {name:pokemon.name, id:i+1 }} />
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
                    <div className="loadMore">
                            <button onClick = {this.onClick}>Load more</button>
                    </div>
                </div>
                :  
                <Error error="Connection not found"/>
                }
            </div>
        )
    }
}