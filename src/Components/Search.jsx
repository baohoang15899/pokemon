import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Search extends React.Component{
    constructor(){
        super()
        this.onSubmit=this.onSubmit.bind(this)
        this.onChange=this.onChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.state={
            url:"",
            key:false
        }
    }

    onChange(e){
        let value = e.target.value.toLowerCase().trim("")   
        const link = `poke/${value}`
        if (value.length > 1) {
            this.setState({url:link})
        }
    }

    handleKeyPress(event){
        if(event.key === 'Enter'){
            this.setState({key:true})
        }
      }

    onSubmit(e){
        e.preventDefault()
    }

    render(){
        if(this.state.key){
            return <Redirect to={this.state.url}/>
        }
        return (
            <div className="search">
                    <div className="search__content">
                        <form action="" onSubmit={this.onSubmit}>
                            <input className="input" type="text" onChange={this.onChange} onKeyPress={this.handleKeyPress}  placeholder="Pokemon Name..."/>
                            <button type="submit"  >
                                <Link to={this.state.url !== "" ? this.state.url : ""}   className="button">Search</Link>
                            </button>
                        </form>
                    </div>
            </div>
        )
    }
}