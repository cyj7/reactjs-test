import React, { Component } from 'react'
import { Link } from 'react-router'
import { actions as listActions } from './redux/list'

export default class List extends Component {
    render(){
        const list_arr = listActions.newList
        return (
            <ul classname='ul-box'>
                list_arr.map((item, index) =>
                    <li classname='item' key={index}>
                        <Link to={`detail/${index}`} activeClassName="active">{`product${index}`}</Link>
                    </li>
                );
            </ul>
        )
    }
}