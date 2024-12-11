import TextBlock from "./TextBlock";

const MainSection1 = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between px-4 md:px-16 py-10">
      <TextBlock
        heading1="SAVORY WHEELS"
        heading2="Zeal Taste: Culinary Delights on Wheels"
        description="Bringing Gourmet Street Food to Your Neighborhood—Fresh, Flavorful, and Fast!"
        buttonText="Book Your Table"
        alignment="start"
        heading1Color="text-[#ef7a54]"
        heading2Color="text-[#055346]"
        descriptionColor="text-gray-300"
        buttonColor="bg-white text-black"
        className="md:w-1/2 mt-8 md:mt-0 md:text-left md:bg-black md:p-9"  // Added md:text-left for large screens
      />

      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img 
          src="/assets/images/image1.jpg" 
          alt="main-section-1" 
          className="h-[65rex] w-[50rex] pt-16 rounded-t-full"
        />
      </div>
    </div>
  );
};

export default MainSection1;
