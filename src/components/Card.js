import React from "react";

export default function Card(props) {
    return (
    <li className="card">
            <img src={props.photo.src.large2x} alt="img"/>
            <div className="details">
                <div className="photographer">
                    <i className="fa-solid fa-camera"></i>
                    <span>{props.photo.photographer}</span>
                </div>
                <button>
                    <i className="fa-solid fa-download"></i>
                </button>
            </div>
        </li>
    )
}