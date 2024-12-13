import TextBlock from "./TextBlock"; 
import StatsBox from "./StatsBox"; 
import RoundedImage from "./RoundedImage"; 
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

const OurStorySection = () => {
  return (
    <section className="py-24 px-8 bg-[#EAF9F3]">
      <div className="mx-28">
        {/* Text Section */}
        <TextBlock
          heading1="OUR STORY"
          heading2="The Zeal Taste Adventure"
          description="Journey with us from our inception to today as we revolutionize the way food is enjoyed on the go. Our passion for culinary excellence and commitment to quality have driven us to create a unique dining experience, bringing gourmet flavors right to your doorstep."
          heading1Color="text-[#ef7a54]"
          heading2Color="text-[#055346] text-5xl"
          descriptionColor="text-gray-600 px-36 pt-3 text-center"
          alignment="center"
          showButton = {false}
          className="pl-20"
        />

        {/* Content Below the Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
          {/* Left Image */}
          <div>
          <RoundedImage src="/assets/images/Rectangle33(1).jpg" alt="Happy Customers" className="rounded-l-full w-[350px] h-[280px] mt-7"/>
          </div>
          {/* Center Image */}
          <RoundedImage src="/assets/images/Rectangle34(1).jpg" alt="Street Food Scene" className="rounded-t-full rounded-b-full row-span-3 ml-10 h-[680px] w-full"/>
          
          {/* Stats Box */}
          <div className="flex top-0 right-0 pl-24">
            <StatsBox
              Icon={FaInstagram} 
              count="14K+"
              label="follow us"
              bgColor="bg-[#055346]"
              textColor="text-white"
            />
          </div>

           {/* YouTube Stats Box */}
            <div className="flex pt-12 pl-8">
              <StatsBox
               Icon={SlSocialYoutube}
               count="14K+"
               label="subscribe"
               bgColor="bg-[#055346]"
               textColor="text-white"
             />
            </div>
            
            {/* Right Image */}
            <div>
            <RoundedImage
                src="/assets/images/Frame214.jpg"
                alt="Center Happy Customers"
                className="rounded-r-full bottom-0 right-0 pl-[5rem] pt-7"
            />   
            </div>       
            </div>
        </div>
    </section>
  );
};

export default OurStorySection;
