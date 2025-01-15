interface MapsProps {
  mapLocation: string;
}

const Maps = ({ mapLocation }: MapsProps) => {
  return (
    <div>
      <iframe
        width="425"
        height="350"
        src={mapLocation}
        className="rounded-lg shadow-md border border-black"
      ></iframe>
    </div>
  );
};

export default Maps;
