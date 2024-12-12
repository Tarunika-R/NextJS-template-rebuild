import TextBlock from "./TextBlock";
import Image from "next/image";

const MainSection1 = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between px-4 md:px-4 py-10 md:py-7">
      <TextBlock
        heading1="SAVORY WHEELS"
        heading2="Zeal Taste: Culinary Delights on Wheels"
        description="Bringing Gourmet Street Food to Your Neighborhood—Fresh, Flavorful, and Fast!"
        buttonText="Book Your Table"
        alignment="start"
        heading1Color="text-[#ef7a54] md:text-md font-extrabold"
        heading2Color="text-[#055346] pt-3 text-center md:text-7xl md:text-left md:pt-5"
        descriptionColor="text-[#64716a] text-center md:pl-0 pl-36 pt-3 pr-24 text-md md:text-left"
        buttonColor="bg-[#ef7a54] text-white font-bold"
        className="flex md:w-2/4 mt-16 md:place-items-start items-center pt-1"
      />

      {/* Image section */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <Image 
          src="/assets/images/image1.jpg"
          alt="main-section-1" 
          width={400}
          height={400}
          className="rounded-t-full bg-white mt-20 mr-8"
        />
      </div>
    </div>
  );
};

export default MainSection1;
