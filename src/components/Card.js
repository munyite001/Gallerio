import React from "react";

export default function Card(props) {

    function configLightBox() {
        props.setLightBox({img: props.photo, display: true})
    }

    return (
    <li className="card" onClick={configLightBox}>
            <img src={props.photo.src.large2x} alt="img"/>
            <div className="details">
                <div className="photographer">
                    <i className="fa-solid fa-camera"></i>
                    <span>{props.photo.photographer}</span>
                </div>
                <button onClick={() => {
                    props.downloadImg(props.photo.src.large2x)
                }}>
                    <i className="fa-solid fa-download"></i>
                </button>
            </div>
        </li>
    )
}