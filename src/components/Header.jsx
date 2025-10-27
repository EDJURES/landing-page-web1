export default function Header() {
return (
<header className="fixed w-full bg-white shadow-md z-50">
<nav className="container mx-auto flex justify-between items-center p-4">
<h1 className="text-2xl font-bold text-pink-600">Tressande Hair Salon</h1>
<ul className="hidden md:flex gap-6">
<li><a href="#services" className="hover:text-pink-500">Servicios</a></li>
<li><a href="#gallery" className="hover:text-pink-500">Galería</a></li>
<li><a href="#contact" className="hover:text-pink-500">Contacto</a></li>
</ul>
</nav>
</header>
);
}