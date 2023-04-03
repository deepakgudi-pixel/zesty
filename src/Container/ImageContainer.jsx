import { Caption, Image, ImageContainer } from "./ImageContainer.styles";

import { data } from "../utils/data.jsx";

import { useState } from "react";

export default function Images() {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = data.length - 1;

    setCurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    );
  };

  const dataLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <ImageContainer>
      <Caption>
        {currentImage + 1} / {data.length}
      </Caption>
      {data.map((imageURL, index) => (
        <Image
          alt=""
          key={imageURL}
          src={imageURL}
          onClick={handleClick}
          onLoad={dataLoad}
          className={currentImage === index ? "display" : "hide"}
        />
      ))}
    </ImageContainer>
  );
}
