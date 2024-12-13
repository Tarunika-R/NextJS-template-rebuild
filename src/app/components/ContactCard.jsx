const ContactCard = ({ icon, title, address, layout = "vertical" }) => {
  return (
    <div
      className={`flex ${
        layout === "vertical" ? "flex-col items-center text-center" : "flex-row items-center space-x-4"
      } space-y-5 pt-9`}
    >
      {/* Icon */}
      <div className="w-20 h-20 bg-[#f47950] flex items-center justify-center rounded-full">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>

      {/* Title */}
      <h3
        className={`${
          layout === "vertical" ? "text-[32px] pt-2" : "text-xl"
        } font-semibold font-sansita text-[#055346]`}
      >
        {title}
      </h3>

      {/* Address (Optional) */}
      {address && layout === "vertical" && (
        <p className="text-gray-500 text-xl font-lato mx-10 leading-relaxed">
          {address}
        </p>
      )}
    </div>
  );
};

export default ContactCard;
