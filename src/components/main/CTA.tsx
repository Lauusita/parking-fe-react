import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-red-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">¿Listo para empezar?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Únete a la red de parqueaderos más grande y moderna. Optimiza tu negocio o encuentra el mejor lugar para estacionar.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
            >
              Registrar mi Parqueadero
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-400 transition-colors border-2 border-white"
            >
              Buscar Parqueadero
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;