import React from "react";
const logo = require('./App/logo.png')

function UserHeader({children,loading}){
    return(
        <header>
            <div className="title">
              <img src={logo} alt="logo-persona" className="logo"/>
              <h2>Panel de Clientes</h2>
            </div>
            {
                React.Children
                    .toArray(children)
                    .map(child=>React.cloneElement(child,{loading}))
            }
        </header>
    )
}

export {UserHeader}