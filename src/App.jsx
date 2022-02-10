/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
// import Homepage from './components/Homepage';

export default class App extends Component {

    render() { 
        return (
            <Outlet />
        )
    }
}