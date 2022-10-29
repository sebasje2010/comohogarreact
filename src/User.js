import React from "react";

function User(props){
    return(
        <li className="user-list">
            <div className="user">
                <div className="item">
                    <h3>{props.name}</h3>
                    <p>{props.email}</p>
                </div>
                <div className="item">
                    <h3>{props.id}</h3>
                    <p>{props.phone}</p>
                </div>
                <div className="item">
                    <p>{props.status}</p>
                </div>
                <div className="item">
                    <button 
                        className="white-button"
                        onClick={props.onEdit}
                        >Editar
                    </button>
                    <button 
                        className="white-button"
                        onClick={props.onDelete}
                        >Borrar
                    </button>
                </div>
            </div>
        </li>
    )
}

export {User}