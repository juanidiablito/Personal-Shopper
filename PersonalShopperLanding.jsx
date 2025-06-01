
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function PersonalShopperLanding() {
  return (
    <div className="font-montserrat bg-[#F5F2E9] text-[#333]">
      <header className="relative h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/elegant-background.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <img src="/whome-logo.png" alt="W-HOME Logo" className="w-28 mb-4" />
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-2">
            Personal Shopper Inmobiliario
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-semibold mb-6">
            Un servicio exclusivo para nuestros clientes
          </motion.h2>
          <Button className="bg-[#B8A369] text-white">Contáctanos Ahora</Button>
        </div>
      </header>

      <nav className="fixed top-0 w-full bg-white shadow z-50 flex justify-around py-2 text-sm font-semibold">
        <a href="#servicios">Servicios</a>
        <a href="#casos">Casos de Éxito</a>
        <a href="#tarifas">Tarifas</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <section id="servicios" className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-[#B8A369] font-bold mb-6">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card><CardContent>✅ Personal Shopper</CardContent></Card>
          <Card><CardContent>✅ Valoración de Propiedades</CardContent></Card>
          <Card><CardContent>✅ Reformas Integrales</CardContent></Card>
        </div>
      </section>

      <section id="casos" className="py-16 px-4 bg-[#E8E0D0] text-center">
        <h2 className="text-3xl text-[#B8A369] font-bold mb-6">Casos de Éxito</h2>
        <p className="max-w-3xl mx-auto mb-4">“Sandra ha sido maravillosa. Gracias a su dedicación y profesionalidad encontré la casa ideal. Todo el proceso fue cercano y especial.”</p>
        <p className="max-w-3xl mx-auto">“Gracias por tu profesionalidad y paciencia. Los obstáculos se desvanecieron uno a uno gracias a tu saber hacer.”</p>
      </section>

      <section id="tarifas" className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-[#B8A369] font-bold mb-6">Tarifas</h2>
        <p className="mb-4">✅ Personal Shopper: 2% + IVA del valor de compra</p>
        <p>✅ Garantía: Si en 6 meses no encontramos la vivienda ideal, devolvemos el 50% de la provisión inicial</p>
      </section>

      <section id="contacto" className="py-16 px-4 bg-[#333] text-white text-center">
        <h2 className="text-3xl text-[#B8A369] font-bold mb-6">Contacto</h2>
        <p>📍 Avenida Constitución 21, Local 5, Benalmádena</p>
        <p>📞 611 345 963</p>
        <p>📧 smartin@whomebenalmadena.es</p>
        <Button className="mt-4 bg-[#B8A369] text-white">Escríbenos por WhatsApp</Button>
      </section>

      <footer className="bg-black text-white py-4 text-center">
        © 2025 W-HOME Inmobiliaria | Todos los derechos reservados
      </footer>
    </div>
  );
}
