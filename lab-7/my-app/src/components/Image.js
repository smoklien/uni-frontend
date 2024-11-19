import { useState } from "react";

const Image = ({ src, alt, width, id }) => {
  const [imageVisible, setImageVisible] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);

  const addImage = () => {
    if (!imageVisible) {
      setImageVisible(true);
    }
  };

  const deleteImage = () => {
    if (imageVisible) {
      setImageVisible(false);
      setScaleFactor(1);
    }
  };

  const scaleImage = (direction) => {
    if (direction === 'up' && scaleFactor < 1) {
      setScaleFactor(scaleFactor + 0.1);
    } else if (direction === 'down' && scaleFactor > 0.1) {
      setScaleFactor(scaleFactor - 0.1);
    }
  };

  return (
    <div>
      <div id='imageAnchor'>
        {imageVisible && (
          <img
            id={id}
            src={src}
            alt={alt}
            width={width}
            style={{ transform: `scale(${scaleFactor})`, transition: 'transform 0.3s ease' }}
          />
        )}
      </div>
      <div>
        <button onClick={addImage}>Add Image</button>
        <button onClick={() => scaleImage('up')}>Scale Up</button>
        <button onClick={() => scaleImage('down')}>Scale Down</button>
        <button onClick={deleteImage}>Delete Image</button>
      </div>
    </div>
  );
};

export default Image;
