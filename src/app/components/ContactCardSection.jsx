import ContactCard from "./ContactCard";

const ContactSection = () => {
  return (
    <section className="pt-16 pb-20 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-36">
        <ContactCard
          icon="/assets/icons/Location.svg" 
          title="Find Us"
          address={`1234 Innovation Drive Suite 567 Cityville, State 89012 Country`}
        />
        <ContactCard 
          icon="/assets/icons/TimeCircle.svg" 
          title="Open Hours"
          address={`Mon To Fri 9:00 AM - 9:00 PM Sat 9:00 AM - 10 PM`}
        />
        <ContactCard
          icon="/assets/icons/Calendar.svg" 
          title="Reservation"
          address={`+1 (800) 555-1234,abc@zealtaste.com`}
        />
      </div>
    </section>
  );
};

export default ContactSection;
