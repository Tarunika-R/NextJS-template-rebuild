import TextBlock from "./TextBlock";
import ReservationForm from "./ReservationForm";

const Footer = () => {
  return (
    <section className="bg-[#055346] py-24 px-8">
      {/* Header */}
      <div className="text-center mx-[450px]">
        <TextBlock
          heading1="BOOK YOUR TABLE"
          heading2="Make a Reservation"
          heading1Color="text-[#ef7a54] text-lg"
          heading2Color="text-white text-5xl"
          description="Call +1 (800) 555-1234 from 5a – 11p daily, or book online. Reservations required for parties of 4 or more."
          descriptionColor="text-gray-300 pt-3"
          alignment="center"
          showButton={false}
        />
      </div>

      {/* Form */}
      <div className="mt-11 max-w-4xl mx-auto">
        <ReservationForm />
      </div>

      {/* Button */}
      <div className="mt-8 font-bold text-center ">
        <a
        href="#"
        className={`button bg-[#f47950] hover:bg-white hover:text-[#ef7a54] hover:outline outline-1`}
      >
        Book Your Table
      </a>
      </div>
    </section>
  );
};

export default Footer;
