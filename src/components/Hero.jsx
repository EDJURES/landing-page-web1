/*export default function Hero() {
return (
<section className="h-screen flex flex-col justify-center items-center bg-[url('/assets/hero.jpg')] bg-cover bg-center text-white text-center">
<h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Belleza que Inspira</h2>
<p className="mt-4 text-lg md:text-xl">Transforma tu look con los mejores estilistas</p>
<a href="#contact" className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full">Reserva tu cita</a>
</section>
);
}*/
// src/components/Hero.jsx
import React from 'react';

import styles from './Hero.css';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Texto */}
        <div className={`${styles.textCenter} lg:${styles.textLeft}`}>
          <h1 className={styles.title}>
            Transforma tu estilo con{' '}
            <span className={styles.titleHighlight}>Tressandé</span>
          </h1>
          <p className={styles.subtitle}>
            Salón de belleza premium donde el arte del cabello se encuentra con la elegancia.
            Reserva tu cita y descubre la experiencia que tu cabello merece.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Reservar ahora
          </a>
        </div>

        {/* Imagen */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBg}></div>
          <img
            src={heroImg}
            alt="Salón Tressandé - Estilistas profesionales"
            className={styles.image}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;