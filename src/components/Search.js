import React from 'react';

export default function Search(props) {
    return (
        <section className="search">
            <img src="../../images/section-bg.jpg" alt="search-background"/>
            <div className="content">
                <h1> Snap Gallery</h1>
                <p>Search and download any images within seconds</p>
                <div className="search-box">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search Images" onKeyUp={(event)=> {
                        if (event.key === "Enter" && event.target.value !== "") {
                            props.setSearchTerm(event.target.value)
                        }
                    }}/>
                </div>
            </div>
        </section>
    )
}