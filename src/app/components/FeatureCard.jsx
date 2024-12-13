const Card = ({ image, title, description, price }) => {
    return (
      <div className="bg-[#f9efe6] rounded-[3rem] p-6 text-center">
        <img
          src={image}
          alt={title}
          className="rounded-full w-30 h-30 mx-auto mb-4 mt-3 object-cover"
        />
        <h3 className="text-[#055346] text-[32px] font-semibold pt-3 mb-2 font-sansita">{title}</h3>
        <p className="text-gray-600 text-[18px] mb-4 mx-3 font-lato">{description}</p>
        <button className="bg-[#055346] text-white text-2xl py-2 px-5 rounded-full font-semibold font-sansita">
          ${price}
        </button>
      </div>
    );
  };
  
  export default Card;
  