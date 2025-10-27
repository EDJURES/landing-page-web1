const services = [
{ title: 'Corte & Peinado', desc: 'Estilos modernos y personalizados.', icon: '✂️' },
{ title: 'Coloración', desc: 'Tonos vibrantes que realzan tu belleza.', icon: '🎨' },
{ title: 'Tratamientos', desc: 'Hidratación, keratina y más.', icon: '💆‍♀️' }
];

export default function Services() {
return (
<section id="services" className="py-20 bg-gray-50">
<div className="container mx-auto text-center">
<h3 className="text-3xl font-bold mb-10">Nuestros Servicios</h3>
<div className="grid md:grid-cols-3 gap-10">
{services.map((s, i) => (
<div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
<div className="text-5xl mb-4">{s.icon}</div>
<h4 className="text-xl font-semibold">{s.title}</h4>
<p className="mt-2 text-gray-600">{s.desc}</p>
</div>
))}
</div>
</div>
</section>
);
}