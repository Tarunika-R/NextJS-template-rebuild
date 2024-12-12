const StatsBox = ({ Icon, count, label, bgColor = "bg-[#055346]", textColor = "text-white" }) => {
    return (
      <div
        className={`flex flex-col items-center justify-center w-40 h-40 rounded-full ${bgColor} text-center`}
      >
        {/* Render the Icon */}
        {Icon && <Icon className="w-8 h-8 mb-2 text-white" />}
        <h3 className={`text-2xl font-bold ${textColor}`}>{count}</h3>
        <p className={`text-sm ${textColor}`}>{label}</p>
      </div>
    );
  };
  
  export default StatsBox;
  