const TextBlock =({
    heading1,
    heading2,
    description,
    buttonText,
    alignment = "center",
    headingColor = "text-[#ef7a54]",
    descriptionColor = "bg-[#ef7a54] text-white",
    buttonColor = "bg-[#ef7a54] text-white",
    className = ""
}) => {
    return (
        <div className={`flex flex-col items-${alignment} ${className}`}>
            {/* Headings */}
            <h1 className={`text-4xl font-bold ${headingColor} mb-2`}>{heading1}</h1>
            <h2 className={`text-2xl font-semibold ${headingColor} mb-4`}>{heading2}</h2>
            
            {/* Description */}
            <p className={`text-lg ${descriptionColor} mb-6`}>{description}</p>
            
            {/* Button */}
            <button className={`px-6 py-2 rounded ${buttonColor} hover:opacity-90`}>
                {buttonText}
            </button>
        </div>
      )
}

export default TextBlock;
  

