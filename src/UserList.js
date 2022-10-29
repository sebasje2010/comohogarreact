import React from "react";

function UserList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export {UserList}