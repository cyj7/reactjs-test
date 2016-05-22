import React, { Component } from 'react'

export default class App extends Component{
    static childContextTypes = {
        name: React.PropTypes.string.isRequired
    }

    getChildContext() {
        return {
            name: "Jonas"
        }
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
