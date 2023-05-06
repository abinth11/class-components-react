import React from "react";
import ReactDOM from 'react-dom/client';
const App = () =>{
    return (
        <div className="app">
            <h1>new app created</h1>

        </div>
    )
}
const root =ReactDOM.createRoot( document.getElementById('root'))
root.render(<App/>)

