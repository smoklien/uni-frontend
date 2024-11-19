import { useState } from "react";

const Image = ({ src, alt, width, id }) => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);
  const minScale = 0.1;
  const maxScale = 1;

  const toggleImageVisibility = (isVisible) => {
    setIsImageVisible(isVisible);

    if (!isVisible) {
      setScaleFactor(1);
    }
  };

  const adjustScale = (direction) => {
    if (direction === 'up') {
      setScaleFactor((prev) => Math.min(prev + 0.1, maxScale));
    } else if (direction === 'down') {
      setScaleFactor((prev) => Math.max(prev - 0.1, minScale));
    }
  }

  return (
    <div id='imageComponent'>
      {isImageVisible && (
        <div id='imageWrapper'>
          <a
            href='https://guide.kyivcity.gov.ua/'
            target='_blank'
            rel="noreferrer"
            id='imageLink'
          >
            <img
              id={id}
              src={src}
              alt={alt}
              width={width}
              style={{ transform: `scale(${scaleFactor})`, transition: 'transform 0.3s ease' }}
            />
          </a>
        </div>
      )}
      <div id='imageControls'>
        <button onClick={() => toggleImageVisibility(true)}>Add Image</button>
        <button onClick={() => adjustScale('up')}>Scale Up</button>
        <button onClick={() => adjustScale('down')}>Scale Down</button>
        <button onClick={() => toggleImageVisibility(false)}>Delete Image</button>
      </div>
    </div>
  );
};

export default Image;
