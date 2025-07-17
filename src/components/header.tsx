"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#countdown", label: "Cuenta Regresiva" },
    { href: "#program", label: "Programa" },
    { href: "#ceremony", label: "Ceremonia" },
    { href: "#timeline", label: "Cronograma" },
    { href: "#dresscode", label: "Vestimenta" },
    { href: "#gifts", label: "Regalos" },
    { href: "#rsvp", label: "Confirmar" },
    { href: "#thankyou", label: "Gracias" },
  ]

  return (
    <header className="bg-[#f5f1eb] py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#hero" className="block w-24 h-auto relative">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={96}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#000000] hover:text-[#7a6449] font-serif text-lg transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden text-[#000000]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f5f1eb] shadow-lg py-4 z-40">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#000000] hover:text-[#7a6449] font-serif text-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
