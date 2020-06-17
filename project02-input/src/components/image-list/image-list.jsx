import React from "react";
import "./image-list.css";

const ImageList = (props) => {
  const images = props.images.map(({ alt_description, id, urls }) => {
    return (
      <div className="doubling four wide column" key={id}>
        <img
          src={urls.regular}
          alt={alt_description}
          style={{
            width: "100%",
            maxWidth: "100%",
            objectFit: "cover",
            height: "200px",
          }}
        />
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
