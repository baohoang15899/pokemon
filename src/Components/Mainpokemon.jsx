import React, {} from 'react';
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
            page:localStorage.getItem("pokemonPage") !== null ? JSON.parse(localStorage.getItem("pokemonPage")) : 40
        }
        this.onClick = this.onClick.bind(this)
        this.deClick = this.deClick.bind(this)
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

    checkPage(step){
        let newPage =  this.state.page + step
        if (newPage<40) {
            return newPage = 40 
        }
        return newPage 
    }


    deClick(){
        this.setState({ page:this.checkPage(-20)}
        ,()=>{
            localStorage.setItem("pokemonPage",JSON.stringify(this.state.page))
            this.getApi()
        })
    }

    onClick(){
        this.setState({page:this.checkPage(20)},
        ()=>{
            localStorage.setItem("pokemonPage",JSON.stringify(this.state.page))
            this.getApi()
        })
    }

    async getApi(){
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.page}`)
        if (api.ok) {
            const poke = await api.json()
            const data = poke.results
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
                            <button onClick = {this.deClick}>Load less</button>
                    </div>
                </div>
                :  
                <Error error="Connection not found"/>
                }
            </div>
        )
    }
}