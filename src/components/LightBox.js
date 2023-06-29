import React from "react";

export default function LightBox(props) {
    function closeLightBox() {
        props.setLightBoxProps({
            img:null,
            display: false
        })
    }
    return (
        <div className="lightbox">
            <div className="wrapper">
                <div className="lightbox-header">
                    <div className="photographer">
                        <i className="fa-solid fa-camera"></i>
                        <span>{props.lightBoxProps.img.photographer}</span>
                    </div>
                    <div class="buttons">
                        <i class="fa-solid fa-download" onClick={() => {
                            props.downloadImg(props.lightBoxProps.img.src.large2x)
                        }}></i>
                        <i class="fa-solid fa-times" onClick={closeLightBox}></i>
                    </div>
                </div>
                <div className="preview-img">
                    <div className="img">
                        <img src={props.lightBoxProps.img.src.large2x} alt="preview-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}