import Maps from "./Maps";

interface AboutProps {
  mapLocation: string;
}

const About = ({ mapLocation }: AboutProps) => {
  return (
    <div className="flex justify-center items-center w-full flex-col p-10 gap-y-10 bg-white text-black font-roobert">
      <div className="flex lg:justify-start lg:items-start justify-center items-center lg:flex-row flex-col gap-y-10 gap-x-10">
        <Maps mapLocation={mapLocation} />
        <div className="flex lg:justify-start lg:items-start justify-center items-center flex-col">
          <h4 className="lg:text-2xl text-lg font-medium capitalize">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In magni
            unde dolor ratione, nam aspernatur nihil quis distinctio quidem eos,
            earum ipsum similique sequi enim. Et quam vel impedit saepe esse
            minima tempore. Blanditiis quos architecto laudantium totam minima
            quod tenetur? Expedita, ea perspiciatis ipsam unde debitis facere?
            Itaque, molestias?
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
