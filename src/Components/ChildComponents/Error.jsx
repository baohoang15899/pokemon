import React, {} from 'react';
import { Link } from 'react-router-dom'

export default class Error extends React.Component{
    
    render(){
        return(
        <div className={`error`}>
            <div className="animation">
                <span>{this.props.error}</span>
                <Link className="linkErr" to="/">Back to main page</Link>
            </div>
        </div>
        )
    }
}