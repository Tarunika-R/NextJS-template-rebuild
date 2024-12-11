import TextBlock from "./TextBlock";

const MainSection1 = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between px-4 md:px-16 py-10">
      {/* TextBlock: Bottom on small screens, Right on larger screens */}
      <TextBlock
        heading1="SAVORY WHEELS"
        heading2="Zeal Taste: Culinary Delights on Wheels"
        description="Bringing Gourmet Street Food to Your Neighborhood—Fresh, Flavorful, and Fast!"
        buttonText="Book Your Table"
        alignment="start"
        heading1Color="text-[#ef7a54]"
        heading2Color="text-[#055346] pt-3 text-center"
        descriptionColor="text-[#64716a] text-center pl-36 pt-3 pr-28 text-md"
        buttonColor="bg-[#ef7a54] text-white font-bold"
        className="md:w-1/2 mt-16 md:mt-0 items-center pt-1"
      />

      {/* Image: Top on small screens, Left on larger screens */}
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
