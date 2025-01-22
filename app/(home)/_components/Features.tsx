import { features } from "../fake-api";
import { FeaturesCardLG } from "./FeaturesCard";

const Features = () => {
  return (
    <div className="bg-white text-black w-full h-min flex justify-center items-center flex-col lg:gap-y-20 gap-y-10 lg:p-10 p-6">
      <h1 className="lg:text-6xl text-4xl text-center font-tartuffo font-bold uppercase lg:mt-20 mt-10">
        Smart Features
        <br />
        Seamless Experience!
      </h1>
      {features.map((feature, idx) => (
        <FeaturesCardLG
          key={idx}
          description={feature.description}
          header={feature.header}
          icon={feature.icon}
          image={feature.image}
          link={feature.link}
          name={feature.name}
        />
      ))}
      <div className="lg:mb-10 mb-4" />
    </div>
  );
};

export default Features;
