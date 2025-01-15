interface MapsProps {
  mapLocation: string;
}

const Maps = ({ mapLocation }: MapsProps) => {
  return (
    <>
      <div className="lg:block hidden">
        <iframe
          width="425"
          height="350"
          src={mapLocation}
          className="rounded-lg shadow-md border border-black"
        ></iframe>
      </div>
      <div className="lg:hidden">
        <iframe
          width="370"
          height="320"
          src={mapLocation}
          className="rounded-lg shadow-md border border-black"
        ></iframe>
      </div>
    </>
  );
};

export default Maps;
