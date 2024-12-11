import TextBlock from "./TextBlock";

const MainSection1 = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between px-4 md:px-16 py-10 bg-black text-white">
      {/* Right Side: TextBlock */}
      <TextBlock
        heading1="SAVORY WHEELS"
        heading2="Zeal Taste: Culinary Delights on Wheels"
        description="Bringing Gourmet Street Food to Your Neighborhood—Fresh, Flavorful, and Fast!"
        buttonText="Book Your Table"
        alignment="start"
        headingColor="text-white"
        descriptionColor="text-gray-300"
        buttonColor="bg-white text-black"
        className="md:w-1/2 mt-8 md:mt-0"
      />

      {/* Left Side: Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img 
          src="/assets/images/image1.png" 
          alt="main-section-1" 
          className="h-[65rex] w-[50rex] pt-16 rounded-t-full"
        />
      </div>
    </div>
  );
};

export default MainSection1;
