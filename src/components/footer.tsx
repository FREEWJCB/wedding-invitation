export default function Footer() {
  return (
    <footer className="bg-[#8b7355] text-white py-6 text-center text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Bárbara & Sergio. Todos los derechos reservados.</p>
        <p className="mt-2 opacity-80">Diseñado con cariño</p>
      </div>
    </footer>
  )
}
