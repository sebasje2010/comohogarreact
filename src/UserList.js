import React from "react";

function UserList(props){
    const renderFunc=props.children||props.render

    return(
        <section className="UserList-container">
            {props.error&&props.onError()}
            {props.loading&&props.onLoading()}
            {(!props.loading&&!props.totalUsers)&&props.onEmptyUser()}
            {(!!props.totalUsers&&!props.searchedUsers.length)&&props.onEmptySearchResults()}
            {props.searchedUsers.map(renderFunc)}
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export {UserList}