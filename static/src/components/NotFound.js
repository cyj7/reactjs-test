import React,{ Component } from 'react'
import { Link } from 'react-router'
import "../sass/common.sass"

export default class notFound extends Component {
    render() {
        return (
            <div>
                <h1 className = {'notFound'}>Page Not Found!</h1>
            </div>
        )
    }  
}
