import React, { Fragment, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { getPhotos } from "../services/apis";
import { apiBaseUrl } from "../services/config";

const images = [
    "https://images.pexels.com/photos/5074172/pexels-photo-5074172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/3704092/pexels-photo-3704092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/3489391/pexels-photo-3489391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/3704094/pexels-photo-3704094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/5091802/pexels-photo-5091802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4558715/pexels-photo-4558715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/3339457/pexels-photo-3339457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1442486/pexels-photo-1442486.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/3657423/pexels-photo-3657423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
]

const MasonryGrid = () => {
    const [photos, setPhotos] = useState([]);

    const loadPhotos = () => {
        getPhotos().then(response => {
            setPhotos(response.data)
        });
    }


    useEffect(() => {
        loadPhotos();
    }, []);

    return (
        <Fragment>
            <section className="container-fluid">
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry columnsCount={3} gutter="10px">
                        {photos.map((photo, i) => (
                            <div key={i} className="img-container">
                                <img
                                    alt="placeholder"
                                    src={photo.imageUrl}
                                />
                                <div className="overlay">
                                    <div className="content">
                                        <button className="btn outline-btn-red">Delete</button>
                                        <h4 className="text-white mb-0">{photo.label}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </section>
        </Fragment>
    );
};

export default MasonryGrid;