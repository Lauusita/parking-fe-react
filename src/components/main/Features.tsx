
import { Building2, Car, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Soluciones para Todos
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <Building2 className="h-10 w-10 text-red-600" />
              <h3 className="text-2xl font-semibold ml-4">Para Propietarios</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Sistema completo de gestión de espacios</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Reportes y análisis en tiempo real</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Control de ingresos y facturación</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Gestión de reservas y disponibilidad</span>
              </li>
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="mt-8 w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Registrar mi Parqueadero
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <Car className="h-10 w-10 text-red-600" />
              <h3 className="text-2xl font-semibold ml-4">Para Usuarios</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Encuentra parqueaderos cercanos</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Reserva y paga desde tu móvil</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Tarifas transparentes y competitivas</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Sistema de calificaciones y reseñas</span>
              </li>
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="mt-8 w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Buscar Parqueadero
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;