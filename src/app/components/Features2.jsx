import ContactCard from "./ContactCard";

const FeaturesSection = () => {
  const features = [
    { icon: "/assets/icons/Vector.svg", title: "Reasonable Prices" },
    { icon: "/assets/icons/Vector-1.svg", title: "Cozy Atmosphere" },
    { icon: "/assets/icons/Vector-2.svg", title: "Good Quality Products" },
  ];

  return (
    <section className="py-16 px-8 pb-24 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between pl-8 pt-1 gap-20">
        {features.map((feature, index) => (
          <ContactCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            layout="horizontal" 
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
