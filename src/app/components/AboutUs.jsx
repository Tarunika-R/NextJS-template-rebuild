import TextBlock from "./TextBlock";
import RoundedImage from "./RoundedImage";
import Image from "next/image";

const VoicesOfFlavorSection = () => {
  return (
    <section className="py-24 px-8 pb-26 bg-[#ebfffc]">
      {/* Top Section: Headings */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <TextBlock
          heading1="ABOUT US"
          heading2="Voices of Flavor"
          heading1Color="text-[#ef7a54]"
          heading2Color="text-[#055346] text-5xl"
          alignment="center"
          showButton={false}
        />
      </div>

      {/* Bottom Section: Grid Layout */}
      <div className="max-w-[72.95rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Column: Rounded Image */}
        <div className="flex justify-center md:justify-start">
          <RoundedImage
            src="/assets/images/aboutus.jpg"
            alt="About Customer"
            className="rounded-t-full w-[480px] h-[600px] object-cover"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="space-y-4 mr-20 ml-0">
          {/* Quote Section */}
          <div className="space-y-12 space-x-1">
            <Image src="/assets/icons/quote-icon.svg" alt="quote-icon" width={50} height={50}></Image>
            <blockquote className="text-[#055346] font-sansita font-semibold text-[29px] leading-relaxed">
              "Zeal Taste is a revelation in street food! The gourmet dishes are not only delicious but also beautifully presented. The food truck experience is both convenient and indulgent. I can't get enough of their truffle mac & cheese!"
            </blockquote>
            <div className="mt-4">
              <p className="text-[#055346] font-semibold text-2xl font-lato">Sophia Martinez</p>
              <p className="text-gray-500 text-xl mt-2 font-lato">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoicesOfFlavorSection;
