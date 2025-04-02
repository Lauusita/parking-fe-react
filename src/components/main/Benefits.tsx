import { Shield, Clock, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Sistema de seguridad avanzado y seguimiento en tiempo real de tu vehículo."
    },
    {
      icon: Clock,
      title: "24/7 Disponible",
      description: "Acceso y soporte las 24 horas del día, los 7 días de la semana."
    },
    {
      icon: CreditCard,
      title: "Pagos Seguros",
      description: "Múltiples métodos de pago y transacciones seguras garantizadas."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          ¿Por qué elegirnos?
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors"
              >
                <benefit.icon className="h-8 w-8 text-red-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;