import React, { useEffect } from "react";
import Card from './Card'

export default function Gallery(props) {
    
    function getImages(apiURL) {
        fetch(apiURL, {
            headers: {
                Authorization: props.apiKey
            }
        })
        .then(
            res => res.json()
        ).then(
            data => {
                props.setData(data.photos)
            }
        )
    }

    useEffect(() => {
        getImages(props.apiURL)
    })

    function loadMoreImages() {
        props.setCurrentPage((prev) => {
            return prev + 1
        })
        if (props.searchTerm) {
            props.setAPIURL(`https://api.pexels.com/v1/search?query=${props.searchTerm}&page=${props.currentPage + 1}&per_page=15`)
        }
        else {
            props.setAPIURL(`https://api.pexels.com/v1/curated?page=${props.currentPage+1}&per_page=15`)
        }

        fetch(props.apiURL, {
            headers: {
                Authorization: props.apiKey
            }
        })
        .then(
            res => res.json()
        ).then(
            data => {
                props.setData((prev) => {
                    return [...prev,...data.photos]
                })
            }
        )
        
    }

    return (
        <section className="gallery">
            <ul className="images">
                {props.data && props.data.map((photo) => {
                    return (
                        <Card photo={photo} key={photo.id}/>
                    )
                })}
            </ul>
            <button className="load-more" onClick={loadMoreImages}>
                {props.data.length > 0 ? "Load More":"Loading . . ."}
            </button>
        </section>
    );
}