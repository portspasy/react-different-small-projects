import React from "react";

import ImageCard from "../image-card/image-card";

import "./image-list.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <div className="four wide column" key={image.id}>
        <ImageCard images={image} />
      </div>
    );
  });
  return (
    <div className="image-list">
      <div className="ui grid">{images}</div>
    </div>
  );
};

export default ImageList;
