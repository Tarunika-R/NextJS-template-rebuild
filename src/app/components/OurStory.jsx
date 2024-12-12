import TextBlock from "./TextBlock"; 
import StatsBox from "./StatsBox"; 
import RoundedImage from "./RoundedImage"; 
import { FaInstagram } from "react-icons/fa";

const OurStorySection = () => {
  return (
    <section className="py-24 px-8 bg-[#EAF9F3]">
      <div className="max-w-6xl mx-auto">
        {/* Text Section */}
        <TextBlock
          heading1="OUR STORY"
          heading2="The Zeal Taste Adventure"
          description="Journey with us from our inception to today as we revolutionize the way food is enjoyed on the go. Our passion for culinary excellence and commitment to quality have driven us to create a unique dining experience, bringing gourmet flavors right to your doorstep."
          heading1Color="text-[#ef7a54]"
          heading2Color="text-[#055346] text-5xl"
          descriptionColor="text-gray-600 px-48 pt-3 text-center"
          alignment="center"
        />

        {/* Content Below the Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Left Image */}
          <RoundedImage src="/assets/images/Rectangle33(1).jpg" alt="Happy Customers" />

          {/* Stats Box */}
          <div className="flex items-center justify-center">
            <StatsBox
              Icon={FaInstagram} // Pass the FaInstagram component here
              count="14K+"
              label="follow us"
              bgColor="bg-[#055346]"
              textColor="text-white"
            />
          </div>

          {/* Right Image */}
          <RoundedImage src="/assets/images/story-image2.jpg" alt="Street Food Scene" />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
