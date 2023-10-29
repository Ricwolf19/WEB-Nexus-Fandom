import React from 'react';
import Store from '../components/Store';

const Index: React.FC = () => {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14001.595690599088!2d-106.12377261284176!3d28.677711100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43acff266547%3A0xa5affbbd366009a2!2sMAS%20VIDEOJUEGOS!5e0!3m2!1sen!2smx!4v1698612115158!5m2!1sen!2smx';

  return (
    <div className="index-container">
      <h1>Mapa de Google Maps</h1>
      <Store name="MAS VIDEOJUEGOS" mapSrc={mapSrc} />
    </div>
  );
};
export default Index;
