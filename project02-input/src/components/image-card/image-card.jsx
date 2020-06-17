import React from "react";
import "./image-card.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { alt_description, urls } = this.props.images;
    return (
      <img
        ref={this.imageRef}
        src={urls.regular}
        alt={alt_description}
        style={{
          width: "100%",
          maxWidth: "100%",
          objectFit: "cover",
          height: "200px",
        }}
      />
    );
  }
}

export default ImageCard;
