import Store from '../components/store';
import { Link } from 'wouter';
      

const StoresSide = () => {
    const maps = [
        {
          name: "MAS VIDEOJUEGOS",
          mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14001.595690599088!2d-106.12377261284176!3d28.677711100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43acff266547%3A0xa5affbbd366009a2!2sMAS%20VIDEOJUEGOS!5e0!3m2!1sen!2smx!4v1698612115158!5m2!1sen!2smx'
        },
        {
          name: "Game Over Shop CUU",
          mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.816004227108!2d-106.09327781284179!3d28.638632200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43edf145dfbb%3A0x691e3c0dda10c420!2sGame%20Over%20Shop%20CUU!5e0!3m2!1es-419!2smx!4v1698636275867!5m2!1es-419!2smx"
        },
        {
          name: "Game Fixers",
          mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.34674193668!2d-106.10332251284177!3d28.6196697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43519318bdef%3A0xb2236105165bd0b4!2sGame%20Fixers!5e0!3m2!1es-419!2smx!4v1698636455157!5m2!1es-419!2smx"
        },
        {
          name: "Multiversos Comics Collectibles & Geek Shop",
          mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28007.970363030523!2d-106.10773747409608!3d28.65982959156323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea436148b16055%3A0xdf738d43fe9cefd7!2sMultiversos%20Comics%20Collectibles%20%26%20Geek%20Shop!5e0!3m2!1es-419!2smx!4v1698636562792!5m2!1es-419!2smx"
        },
        {
          name: "Eden",
          mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28013.66850743481!2d-106.11241502568357!3d28.638495499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43518d538ec5%3A0x5038d7ee6b0e4ccd!2sEden!5e0!3m2!1es-419!2smx!4v1698636671216!5m2!1es-419!2smx" 
        },
        {
          name: "DEKAI Manga & Comics",
          mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.142600641742!2d-106.09313131284176!3d28.636185700000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea434b85e7f345%3A0xf5b1e0cf86940b94!2sDEKAI%20Manga%20%26%20Comics!5e0!3m2!1es-419!2smx!4v1698636875998!5m2!1es-419!2smx" 
        },
      ];

    
        const gameStores = maps.slice(0, 3); // Tiendas de juegos
        const comicStores = maps.slice(3); // Tiendas de cómics
      
        return (
          <div className="stores-container p-8 grid gap-8 md:grid-cols-2">
            <div className="mb-8 md:mb-0">
              <h1 className="text-2xl font-bold">Tiendas de Juegos</h1>
              {gameStores.map((map, index) => (
                <Store key={index} name={map.name} mapSrc={map.mapSrc} />
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-bold">Tiendas de Cómics</h1>
              {comicStores.map((map, index) => (
                <Store key={index} name={map.name} mapSrc={map.mapSrc} />
              ))}
            </div>
            {/* Agregar un enlace para regresar al índice */}
            <div className="my-4">
              <Link href="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Volver al Índice
                </button>
              </Link>
            </div>
          </div>
        );
      };
      
      export default StoresSide;
      