import React from "react";
import "./card.styles.css"
export const Card = (props) =>(
    <div className="card-container">
        <img alt="user" src={`https://robohash.org/${props.account.id}?set=set4&size=180x180`} />
        <h2>{props.account.name}</h2>
        <p>{props.account.email}</p>
    </div>
)