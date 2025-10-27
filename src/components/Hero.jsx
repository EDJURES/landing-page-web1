export default function Hero() {
return (
<section className="h-screen flex flex-col justify-center items-center bg-[url('/assets/hero.jpg')] bg-cover bg-center text-white text-center">
<h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Belleza que Inspira</h2>
<p className="mt-4 text-lg md:text-xl">Transforma tu look con los mejores estilistas</p>
<a href="#contact" className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full">Reserva tu cita</a>
</section>
);
}