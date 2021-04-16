import React, {  } from 'react';
import img from '../../img/logo.png'
export default class Modal extends React.Component{
    render(){
        return(
        <div className={`modal${this.props.isLoading ? " show" : " " }`}>
            <div className="animation">
                <img src={img} alt=""/>
                <span>Loading...</span>
            </div>
        </div>
        )
    }
}