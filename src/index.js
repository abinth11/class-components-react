import React from "react";
import ReactDOM from 'react-dom/client';
import { Component } from "react";
import ClassComponent from './components/classComponent'
import FunctionalComponent from './components/functionalComponent.js'
class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Class Based Components Overview</h1>
                <div className="parent">
                <ClassComponent />
                <FunctionalComponent />
                </div>
            </div>
        )
    }

}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

