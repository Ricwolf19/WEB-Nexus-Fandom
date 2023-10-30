import { Link } from 'wouter';

const Index = () => {
  return (
    <div className="index-container p-8">
      <h1>Bienvenido a mi Tienda Geek</h1>
      <p>¡Descubre nuestras tiendas de juegos y cómics!</p>
      <Link href="/stores-side">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Ir a Tiendas
        </button>
      </Link>
    </div>
  );
};

export default Index;

