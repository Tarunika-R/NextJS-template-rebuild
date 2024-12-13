import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


const FooterInfo = () => {
  return (
    <div className="text-center font-lato text-gray-300 mt-20">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-2 mb-4 ">
        <a href="#" className="bg-[#f47950] p-4 rounded-full hover:bg-[#ffffff] transition">
          <FaFacebookF className="text-white text-2xl hover:text-[#f47950]" />
        </a>
        <a href="#" className="bg-[#f47950] p-4 rounded-full hover:bg-[#ffffff] transition">
          <RiTwitterXLine className="text-white text-2xl hover:text-[#f47950]" />
        </a>
        <a href="#" className="bg-[#f47950] p-4 rounded-full hover:bg-[#ffffff] transition">
          <FaInstagram className="text-white text-2xl hover:text-[#f47950]" />
        </a>
        <a href="#" className="bg-[#f47950] p-4 rounded-full hover:bg-[#ffffff] transition">
          <FaPinterestP className="text-white text-2xl hover:text-[#f47950]" />
        </a>
      </div>

      {/* Footer Links */}
        <div className="text-xl font-semibold text-[#95a7ab] flex flex-col items-center space-y-5 pt-16">
        <div className="flex space-x-5">
            <p>Developed by ZealousWeb</p>
            <p>Powered by Webflow</p>
        </div>
        <div className="flex space-x-5">
            <p>
            <a href="#" className="hover:text-white">
                Licenses
            </a>
            </p>
            <p>
            <a href="#" className="hover:text-white">
                Instructions
            </a>
            </p>
        </div>
        </div>


    </div>
  );
};

export default FooterInfo;
