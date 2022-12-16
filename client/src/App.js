import React, { Fragment } from "react";
import "./App.css";

//coponents

import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import Register from "./components/Register";
import User from "./components/User";


function App() {
return (
    <Fragment>
    <div className="container">
        <div className="header">
<Register />
<User />
</div>
<InputTodo />
<ListTodo />
    </div>
    </Fragment>
)    
}

export default App;