export default function Footer() {
  return (
    <footer className="bg-[#c2beb8] text-black py-6 text-center text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} PAULA & DANIEL. Todos los derechos reservados.</p>
        <p className="mt-2 opacity-80">Diseñado con cariño</p>
      </div>
    </footer>
  )
}
