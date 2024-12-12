import React from "react";

const RoundedImage = ({ src, alt, className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
    />
  );
};

export default RoundedImage;
