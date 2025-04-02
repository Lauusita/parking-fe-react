
import { ParkingCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 text-white">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <ParkingCircle className="h-8 w-8" />
          <span className="text-2xl font-bold">ParkingPro</span>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-red-200 transition-colors">Características</a>
          <a href="#how-it-works" className="hover:text-red-200 transition-colors">Cómo Funciona</a>
          <a href="#pricing" className="hover:text-red-200 transition-colors">Clientes</a>
          <a href="#contact" className="hover:text-red-200 transition-colors">Contacto</a>
        </div>
        <div className="">
          <Link to="/form-clients">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white m-4 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors"
            >
              Iniciar Sesión
            </motion.button>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors"
          >
            Registrarse
          </motion.button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gestiona tu Parqueadero de Manera Inteligente
            </h1>
            <p className="text-xl mb-8">
              La solución completa para administrar y encontrar espacios de estacionamiento de manera eficiente.
            </p>
            <div className="flex space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors flex items-center"
              >
                Registrar Parqueadero
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-400 transition-colors flex items-center"
              >
                Buscar Parqueadero
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 flex justify-center"
          >
            <img 
              width={400}
              src="data:image/jpeg;base64,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" 
              alt="Parking Management"
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 flex"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;