import React from "react";

const Image = ({ src, alt, className }) => {
  // Set up image size to calculate aspect ratio
  const [imageSize, setImageSize] = React.useState({ width: 0, height: 0 });

  // Load image and get its natural dimensions
  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setImageSize({ width: naturalWidth, height: naturalHeight });
  };

  // Calculate aspect ratio
  const aspectRatio =
    imageSize.width && imageSize.height
      ? (imageSize.height / imageSize.width) * 100
      : 56.25; // Default 16:9 ratio fallback

  return (
    <div
      style={{
        position: "relative",
        height: 0,
        paddingBottom: `${aspectRatio}%`,
      }}
    >
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Image;
