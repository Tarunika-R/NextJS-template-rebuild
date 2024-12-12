const RoundedImage = ({ src, alt }) => {
    return (
      <div className="rounded-l-full overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  };
  
  export default RoundedImage;
  