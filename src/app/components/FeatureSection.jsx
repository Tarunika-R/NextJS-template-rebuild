import TextBlock from "./TextBlock";
import Card from "./FeatureCard";

const SignatureSelectionsSection = () => {
  return (
    <section className="py-24 bg-white pb-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <TextBlock
          heading1="FEATURED DELICACIES"
          heading2="Signature Selections"
          heading1Color="text-[#ef7a54] text-center"
          heading2Color="text-[#055346] text-5xl text-center"
          description=""
          alignment="center"
          showButton={false}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-8">
          <Card
            image="/assets/images/thumbnail(4).jpg"
            title="Truffle Mac & Cheese"
            description="Creamy macaroni and cheese infused with the rich aroma of truffle oil, topped with a crispy breadcrumb crust. A luxurious twist on a classic comfort dish."
            price="12"
          />
          <Card
            image="/assets/images/thumbnail(5).jpg"
            title="Gourmet Beef Sliders"
            description="Juicy beef patties grilled to perfection, served on toasted brioche buns with caramelized onions, sharp cheddar, and a tangy aioli sauce."
            price="15"
          />
          <Card
            image="/assets/images/thumbnail(6).jpg"
            title="Spicy Shrimp Tacos"
            description="Fresh shrimp marinated in a spicy blend, grilled and served in soft tortillas with crunchy slaw, avocado crema, and a zesty lime drizzle."
            price="14"
          />
          <Card
            image="/assets/images/thumbnail(7).jpg"
            title="Vegetable Tempura"
            description="A colorful assortment of seasonal vegetables lightly battered and fried to a golden crisp, accompanied by a savory dipping sauce and a side of pickled ginger."
            price="10"
          />
        </div>
      </div>
    </section>
  );
};

export default SignatureSelectionsSection;
