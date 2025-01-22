import { features } from "../fake-api";
import { FeaturesCardLG } from "./FeaturesCard";

const Features = () => {
  return (
    <div className="bg-white text-black w-full h-min flex justify-center items-center flex-col lg:gap-y-10 lg:p-10">
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
    </div>
  );
};

export default Features;
