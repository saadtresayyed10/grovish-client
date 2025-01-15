interface MapsProps {
  mapLocation: string;
}

const Maps = ({}: MapsProps) => {
  return (
    <div>
      <iframe
        width="425"
        height="350"
        src=""
        className="rounded-lg shadow-md border border-black"
      ></iframe>
    </div>
  );
};

export default Maps;
