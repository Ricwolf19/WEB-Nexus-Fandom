import { Link } from 'wouter';
// import { useLocation } from 'wouter';
// import { signOut } from 'firebase/auth';
// import { auth } from '../utils/firebase';
import Header from '../components/header';
import Footer from '../components/footer';

import img1 from '../assets/img-home/img-1.png';
import img2 from '../assets/img-home/img-2.jpeg';
import img3 from '../assets/img-home/img-3.jpg';
import img4 from '../assets/img-home/img-4.jpg';
import img5 from '../assets/img-home/img-5.jpg';
import img6 from '../assets/img-home/img-6.jpg';
import img7 from '../assets/img-home/img-7.png';
import img8 from '../assets/img-home/img-8.jpg';
import img9 from '../assets/img-home/img-9.png';


import imgSponsor1 from '../assets/img-home/carousel-sponsors-img-1.png';
import imgSponsor2 from '../assets/img-home/carousel-sponsors-img-2.png';
import imgSponsor3 from '../assets/img-home/carousel-sponsors-img-3.png';
import imgSponsor4 from '../assets/img-home/carousel-sponsors-img-4.png';
import imgSponsor5 from '../assets/img-home/carousel-sponsors-img-5.png';
import imgSponsor6 from '../assets/img-home/carousel-sponsors-img-6.png';
import imgSponsor7 from '../assets/img-home/carousel-sponsors-img-7.png';

import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { IoLogoGameControllerB} from 'react-icons/io';
import { FaUserSecret } from 'react-icons/fa6';
import { IoStorefront } from 'react-icons/io5';
import { BiHappyHeartEyes } from 'react-icons/bi';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {
    const [ref1, inView1] = useInView({
      triggerOnce: true, // Se activará solo una vez
      threshold: 0.2, // Puedes ajustar este valor según tus necesidades
    });

    const [ref2, inView2] = useInView({
      triggerOnce: true, // Se activará solo una vez
      threshold: 0.2, // Puedes ajustar este valor según tus necesidades
    });

    const [ref3, inView3] = useInView({
      triggerOnce: true, // Se activará solo una vez
      threshold: 0.2, // Puedes ajustar este valor según tus necesidades
    });

    const items = [
      {
        image: img6,
        title: 'Teamwork:',
        description: 'Our close and efficient collaboration is the engine that drives our project, allowing us to address a wide range of topics effectively.',
      },
      {
        image: img7,
        title: 'Shared Passion:',
        description: 'We share a deep passion for video games and the Marvel universe, which is reflected in the quality and authenticity of our content',
      },
      {
        image: img8,
        title: 'Constant Innovation:',
        description: 'We are always exploring new ways to improve and expand our content to stay fresh and exciting',
      },
      {
        image: img9,
        title: 'Dedication to quality:',
        description: 'We strive to deliver detailed and entertaining content, maintaining high standards in everything we create',
      },
    ];

    return (
        <>
        <Header />
        <div className='bg-gray-950'>
          <motion.div
              className="bg-gray-950 text-white m-auto"
              initial={{ opacity: 0, y: -100 }} // Propiedades iniciales
              animate={{ opacity: 1, y: 0 }} // Propiedades animadas
              transition={{ duration: 1}}
          >
              <div className='flex flex-col gap-5 relative items-center h-screen md:h-auto'>
                <div>
                  <h3 className='text-3xl px-2 text-center md:text-4xl md:px-0'>
                    Welcome to the best video game and superhero website
                  </h3>
                  <motion.h2
                    className='text-center text-6xl md:text-8xl text-sky-500/50'
                    style={{ WebkitTextStroke: '2px rgb(14,165,233)' }}
                    initial={{ opacity: 0 }} // Propiedad inicial para el título
                    animate={{ opacity: 1 }} // Propiedad animada para el título
                  >
                    Nexus-
                    <span className='text-red-500/60' style={{ WebkitTextStroke: '2px rgb(248,113,113)' }}>
                      Fandom
                    </span>
                  </motion.h2>
                </div>
                <div className='w-full h-screen md:h-full flex justify-center'>
                  <motion.img
                    src={img1}
                    alt=""
                    className='w-full object-cover'
                    style={{ clipPath: 'polygon(100% 0, 100% 50%, 50% 75%, 0 50%, 0 0)' }}
                    initial={{ opacity: 0 }} // Propiedad inicial para la imagen
                    animate={{ opacity: 1 }} // Propiedad animada para la imagen
                  />
                </div>
                <motion.a
                  href="#characteristics"
                  className='absolute bottom-32 transform animate-bounce '
                  initial={{ opacity: 0 }} // Propiedad inicial para el enlace
                  animate={{ opacity: 1 }} // Propiedad animada para el enlace
                >
                  <BsFillArrowDownCircleFill size={40} />
                </motion.a>
              </div>
            </motion.div>

            
            <div id="characteristics">
                <h2 className='text-4xl text-center text-white capitalize mb-14'>Take your best vehicle and explore this universe</h2>
                <div className='flex flex-col md:flex-row items-center gap-10 w-3/4 m-auto'>
                  <motion.img
                    src={img2}
                    alt=""
                    className='w-full md:w-7/12 rounded'
                    style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 1)' }}
                    initial={{ opacity: 0 }} // Propiedad inicial para la imagen
                    animate={{ opacity: inView1 ? 1 : 0 }} // Propiedad animada para la imagen
                    transition={{ duration: 1 }} // Duración de la animación
                    ref={ref1}
                  />
                  <div className='text-white'>
                    <p>Traveling on this site and in every corner of it, you can find:</p>
                    <br />
                    <dl className="text-justify flex flex-col gap-10">
                      <div className="flex items-center gap-5">
                        <motion.dt
                          className='bg-cyan-600 rounded p-1'
                          initial={{ rotate: 0 }} // Rotación inicial
                          animate={{ rotate: [0, 2, -2, 0], transition: { repeat: Infinity, duration: 2 } }} // Animación de rotación con repetición infinita
                        >
                          <IoLogoGameControllerB size={50} />
                        </motion.dt>
                        <dd><span className='font-bold'>Video games:</span> Enter the planet of video games, explore every corner and find your favorite games.</dd>
                      </div>

                      <div className="flex items-center gap-5">
                        <motion.dt
                          className='bg-red-600 rounded p-1'
                          initial={{ rotate: 0 }} // Rotación inicial
                          animate={{ rotate: [0, 2, -2, 0], transition: { repeat: Infinity, duration: 2 } }} // Animación de rotación con repetición infinita
                        >
                          <FaUserSecret size={50} />
                        </motion.dt>
                        <dd><span className='font-bold'>Marvel:</span> Immerse yourself in the world of Marvel, where your favorite heroes or villains will be waiting for you.</dd>
                      </div>

                      <div className="flex items-center gap-5">
                        <motion.dt
                          className='bg-green-600 rounded p-1'
                          initial={{ rotate: 0 }} // Rotación inicial
                          animate={{ rotate: [0, 2, -2, 0], transition: { repeat: Infinity, duration: 2 } }} // Animación de rotación con repetición infinita
                        >
                          <IoStorefront size={50} />
                        </motion.dt>
                        <dd><span className='font-bold'>Stores:</span> Travel in the real world to all those locations, where you can find both your games and your comics, without getting lost.</dd>
                      </div>
                     
                      <div className="flex items-center gap-5">
                        <motion.dt
                          className='bg-orange-600 rounded p-1'
                          initial={{ rotate: 0 }} // Rotación inicial
                          animate={{ rotate: [0, 2, -2, 0], transition: { repeat: Infinity, duration: 2 } }} // Animación de rotación con repetición infinita
                        >
                          <BiHappyHeartEyes size={50} />
                        </motion.dt>
                        <dd><span className='font-bold'>Fun and Happiness:</span> In each world or universe you explore, you will be filled with a lot of information, seeing and discovering new games and characters. Making your afternoons with or without friends much more enjoyable.</dd>
                      </div>
                    </dl>
                  </div>
              </div>
            </div>

            <br />

            <div className='w-full p-2 flex flex-wrap  gap-10 md:gap-48 justify-center bg-gray-800'>
              <img src={imgSponsor1} alt="" className='w-20 grayscale hover:grayscale-0 object-contain' />
              <img src={imgSponsor2} alt="" className='w-20 grayscale hover:grayscale-0 object-contain'/>
              <img src={imgSponsor3} alt="" className='w-20 grayscale hover:grayscale-0 object-contain'/>
              <img src={imgSponsor4} alt="" className='w-20 grayscale hover:grayscale-0 object-contain'/>
              <img src={imgSponsor5} alt="" className='w-20 grayscale hover:grayscale-0 object-contain'/>
              <img src={imgSponsor6} alt="" className='w-20 grayscale hover:grayscale-0 object-contain'/>
              <img src={imgSponsor7} alt="" className='w-20 grayscale hover:grayscale-0 object-contain'/>
            </div>

            <br />

            <div id='about-us'>
              <h2 className='text-4xl text-center text-white capitalize mb-14'>About Us</h2>
              <div className='w-3/4 m-auto'>
                <motion.p
                  className='text-lg md:text-xl text-center text-white'
                  initial={{ opacity: 0, y: 20 }} // Propiedades iniciales para el párrafo
                  animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }} // Propiedades animadas para el párrafo
                  transition={{ duration: 1 }} // Duración de la animación
                  ref={ref2}
                >
                  We are a passionate group of programmers and enthusiastic gamers who share a deep love for the world of video games and the exciting Marvel universe. Our dedication to these two passions led us to create this website, a space where everyone, from long-time fans to newcomers, can immerse themselves in both worlds in an easy and entertaining way.
                </motion.p>
                <motion.img
                  src={img3}
                  alt=""
                  className='w-screen md:w-1/2 block mx-auto my-6 rounded'
                  style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 1)' }}
                  initial={{ opacity: 0, y: 20 }} // Propiedades iniciales para la imagen
                  animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }} // Propiedades animadas para la imagen
                  transition={{ duration: 1 }} // Duración de la animación
                  ref={ref2}
                />
              </div>
            </div>

            <div id='distinction' className='py-2 bg-gradient-to-r from-sky-800 to-indigo-800 animate-gradient'>
            <h2 className='text-4xl text-center text-white capitalize my-12'>What distinguishes us?</h2>
            <div className='flex flex-col md:flex-row justify-center gap-6 text-white mb-7'>
              {items.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    className='p-2 md:w-1/5 md:p-0'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
                    transition={{ duration: 1 }}
                    ref={ref3}
                  >
                    <img src={item.image} alt="" className='rounded' />
                    <h3 className='font-bold'>{item.title}</h3>
                    <p className='text-justify'>{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

            <div id='services'>
            <h2 className='text-4xl text-center text-white capitalize my-12'>Where do you want to go?</h2>
              <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10 p-2'>
                <div className='div-image md:w-2/5 relative'>
                  <Link href='/games-site'>
                    <div className='h-full w-full flex justify-center items-center cursor-pointer'>
                      <h3 className='text-4xl font-bold bg-emerald-500 p-1 uppercase rounded'>Video Games</h3>
                    </div>
                  </Link>
                  <img src={img4} alt="Image 1" className='dispel w-full h-full object-cover hover:grayscale' />
                </div>
                <div className='div-image md:w-2/5 relative'>
                  <Link href='marvel-side'>
                    <div className='w-full h-full flex justify-center items-center cursor-pointer'>
                      <h3 className='text-4xl font-bold uppercase bg-red-600 p-1 rounded'>MARVEL</h3> 
                      </div>
                   </Link>
                  <img src={img5} alt="Image 2" className='dispel w-full h-full object-cover hover:grayscale'/>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
        </>
    );
  }

export default Home;
