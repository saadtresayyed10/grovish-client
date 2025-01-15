import Maps from "./Maps";

interface AboutProps {
  mapLocation: string;
}

const About = ({ mapLocation }: AboutProps) => {
  return (
    <div className="flex justify-center items-center w-full flex-col lg:p-10">
      <div className="flex justify-center items-center gap-x-10">
        <Maps mapLocation={mapLocation} />
      </div>
    </div>
  );
};

export default About;
