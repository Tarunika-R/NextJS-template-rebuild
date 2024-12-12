const TextBlock =({
    heading1,
    heading2,
    description,
    buttonText,
    alignment = "center",
    heading1Color = "text-[#ef7a54]",
    heading2Color = "text-[#055346]",
    descriptionColor = "text-[#64716a]",
    buttonColor = "bg-[#ef7a54] text-white",
    className = ""
}) => {
    return (
        <div className={`flex flex-col items-${alignment} ${className}`}>
            {/* Headings */}
            <h1 className={`heading1 ${heading1Color} mb-2`}>{heading1}</h1>
            <h2 className={`text-4xl font-semibold ${heading2Color} mb-4`}>{heading2}</h2>
            
            {/* Description */}
            <p className={`text-xl ${descriptionColor} mb-6`}>{description}</p>
            
            {/* Button */}
            <button className={`text-2xl px-7 py-5 rounded-full ${buttonColor} hover:bg-white hover:text-[#ef7a54] hover:outline outline-1`}>
                {buttonText}
            </button>
        </div>
      )
}

export default TextBlock;
  

