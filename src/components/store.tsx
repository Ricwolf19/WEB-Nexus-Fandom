import React from 'react';

type StoreProps = {
  name: string;
  mapSrc: string;
};

const Store: React.FC<StoreProps> = ({ name, mapSrc }) => {
  return (
    <div className="store">
      <h3>{name}</h3>
      <div className="map-container">
        <iframe
          title={name}
          width="400"
          height="250"
          loading="lazy"
          src={mapSrc}
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Store;

