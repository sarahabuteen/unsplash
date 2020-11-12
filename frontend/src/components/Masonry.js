import React, { Fragment } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryGrid = ({ photos }) => {
  return (
    <Fragment>
      <section className="container-fluid">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry columnsCount={4} gutter="10px">
            {photos && photos.length > 0 && photos.map((photo, i) => (
              <div key={i} className="img-container">
                <img alt="placeholder" src={photo.imageUrl} />
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
