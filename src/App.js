import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { BsFlower1 } from 'react-icons/bs';
import useSound from 'use-sound';
import cancion from './es_verdad_daniel_me_estas_matando.mp3';
import girasoles from './assets/girasoles.png';
import { useEffect } from 'react';

export default function App() {
  const [abierto, setAbierto] = useState(false);
  const [aceptado, setAceptado] = useState(false);
  const [tapaAbierta, setTapaAbierta] = useState(false);
  const [play] = useSound(cancion, { volume: 0.5 });
const imagenes = [
  require('./assets/foto1.jpg'),
  require('./assets/foto2.jpg'),
  require('./assets/foto3.jpg'),
  require('./assets/foto4.jpg'),
  require('./assets/foto5.jpg'),
  require('./assets/foto6.jpg'),
  require('./assets/foto7.jpg'),
  require('./assets/foto8.jpg'),
  require('./assets/foto9.jpg'),
  require('./assets/foto10.jpg'),
  require('./assets/foto11.jpg'),
  require('./assets/foto12.jpg'),
  require('./assets/foto13.jpg'),
  require('./assets/foto14.jpg'),
  require('./assets/foto15.jpg'),
  require('./assets/foto16.jpg'),
  require('./assets/foto17.jpg'),
  require('./assets/foto18.jpg'),
  require('./assets/foto19.jpg'),
  require('./assets/foto20.jpg'),
  require('./assets/foto21.jpg'),
  require('./assets/foto22.jpg'),
  require('./assets/foto23.jpg'),
  require('./assets/foto24.jpg'),
  require('./assets/foto25.jpg'),
  require('./assets/foto26.jpg'),
  require('./assets/foto27.jpg'),
  require('./assets/foto28.jpg'),
  require('./assets/foto29.jpg'),
  require('./assets/foto30.jpg'),
];

const [indexImg, setIndexImg] = useState(0);

  const abrirCarta = () => {
    setTapaAbierta(true);
    setTimeout(() => {
      setAbierto(true);
      play();
    }, 800); // espera a que la tapa se abra antes de mostrar la carta
  };
  // 💖 Estela de corazones cuando la carta esté abierta
  useEffect(() => {

    const handleMouseMove = (e) => {
      const heart = document.createElement('div');
      const hearts = ['💖', '❤️', '💕', '💘'];
      heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.position = 'fixed';
      heart.style.left = `${e.clientX}px`;
      heart.style.top = `${e.clientY}px`;
      heart.style.pointerEvents = 'none';
      heart.style.transform = `translate(-50%, -50%) scale(${Math.random() + 0.5})`;
      heart.style.opacity = '1';
      heart.style.transition = 'all 1s ease-out';
      heart.style.zIndex = 9999;
      heart.style.fontSize = '20px';

      document.body.appendChild(heart);

      requestAnimationFrame(() => {
        heart.style.top = `${e.clientY - 50}px`;
        heart.style.opacity = '0';
      });

      setTimeout(() => {
        heart.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [abierto]);

  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 font-sans overflow-hidden">
      {/* Lluvia decorativa */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: "100vh", opacity: 1 }}
          transition={{ duration: Math.random() * 5 + 2, delay: i * 0.3, repeat: Infinity }}
          className="absolute text-2xl"
          style={{ left: `${Math.random() * 100}%`, top: 0 }}
        >
          {i % 2 === 0 ? '🌻' : '💖'}
        </motion.div>
      ))}

      {/* Sobre con tapa */}
      {!abierto && (
        <div className="relative w-[500px] h-[300px] rounded-[10px] shadow-xl border-[3px] border-pink-300 overflow-hidden bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center">
          {/* Tapa triangular */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: tapaAbierta ? -180 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-pink-300 clip-triangle-down z-0"
            style={{
              clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
              transformStyle: 'preserve-3d',
              transformOrigin: 'top center',
              backfaceVisibility: 'hidden',
            }}
          />

          {/* Listón animado */}
          {!tapaAbierta && (
<motion.img
  src={require('./assets/ribbon.png')}
  alt="Listón"
  initial={{ rotate: 0 }}
  animate={{ rotate: [0, 5, -5, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
  className="w-[100px] h-auto z-20 cursor-pointer"
  onClick={abrirCarta}
/>


          )}
        </div>
      )}

      {/* Carta abierta */}
      {abierto && !aceptado && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative bg-white p-8 rounded-[1.5rem] shadow-2xl border-pink-300 max-w-lg w-full text-center overflow-hidden mt-4"
          style={{ transformOrigin: 'top center' }}
        >
          {/* Girasoles laterales */}
          <div className="absolute left-[-40px] top-1/2 transform -translate-y-1/2">
            <img src={girasoles} alt="Girasoles" className="w-20 h-20 object-contain" />
          </div>
          <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2">
            <img src={girasoles} alt="Girasoles" className="w-20 h-20 object-contain" />
          </div>

          <div className="mb-4 flex justify-center gap-2 flex-wrap">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-yellow-400 text-2xl"
              >
                🌻
              </motion.div>
            ))}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i + 6}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + 6) * 0.2 }}
                className="text-red-400 text-xl"
              >
                <FaHeart />
              </motion.div>
            ))}
          </div>

          <h1 className="text-3xl font-bold text-pink-700 mb-4">Mi muñequita</h1>
          <p className="text-gray-700 mb-6 text-lg">
            Nunca he sido de escribir cartas ni hacer cosas muy cursis, pero quiero que tú seas la unica que tenga esta partecita de mí que ni yo mismo conozco bien.
            Desde que llegaste a mi vida todo cambió, tu sonrisa ilumina mis días y tu voz calma mis noches. Cada vez que te veo, mi corazón late más fuerte y siento que todo es posible.
            Eres mi razón, mi alegría y mi amor eterno. No hay palabras suficientes para describir lo que siento por ti, pero quiero que sepas que eres la persona más especial en mi vida.
            Sé que quizas no es la mejor carta del mundo, pero espero que al menos te saque una sonrisa, porque eso es lo que quiero hacer siempre, hacerte la personita más feliz del mundo.
            Perdon por demorar tanto en hacerlo pero de verdad quería que fuera algo especial, y espero haberlo logrado de verdad me esforcé mucho, queria hacerlo desde hace muchisimo tiempo pero nunca encontraba 
            ni el momento ni la forma perfecta para hacerlo, perdon por hacerte dudar muchas veces, se que no soy perfecto pero quiero que seamos imperfectos juntos, me dejarías tomar
             tu mano para siempre y ser mi enamorada oficialmente?
          </p>
          <button
            onClick={() => setAceptado(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-2 rounded-full shadow-lg transition duration-300"
          >
            💖 Aceptar
          </button>
        </motion.div>
      )}

      {/* Confirmación final */}
      {aceptado && (
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-3xl shadow-2xl border-pink-300 text-center mt-6"
        >
          <h2 className="text-3xl font-bold text-pink-600">Sabía que dirías que sí 💘</h2>
          <div className="mt-4 flex flex-col items-center">
  <motion.img
    key={indexImg}
    src={imagenes[indexImg]}
    alt={`Foto ${indexImg + 1}`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="w-[500] h-[360px] object-cover rounded-xl shadow-md"
  />
  <div className="flex gap-2 mt-3">
    <button
      onClick={() => setIndexImg((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1))}
      className="px-3 py-1 bg-pink-300 text-white rounded-md hover:bg-pink-400"
    >
      ←
    </button>
    <button
      onClick={() => setIndexImg((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1))}
      className="px-3 py-1 bg-pink-300 text-white rounded-md hover:bg-pink-400"
    >
      →
    </button>
  </div>
</div>

          <p className="text-gray-700 mt-4 text-lg">💘 Te amo ahora y siempre mi muñequita hermosa 🌻</p>
        </motion.div>
        
      )}
    </div>
  );
}

