import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';



export default class MainPage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Main Page</h1>
                <hr />
                <Link to="/" >Main Page</Link>
                <br />
                <Link to="/Day-1" >React - Daily UI #1</Link>
            </div>
        )
    }
}