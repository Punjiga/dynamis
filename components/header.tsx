"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#pro-circuit", label: "Pro-Circuit" },
  { href: "#the-vault", label: "The Vault" },
  { href: "#fuel-lab", label: "Fuel Lab" },
  { href: "#comms-pit", label: "Comms-Pit" },
  { href: "#x-map", label: "X-Map" },
]

function smoothScrollTo(id: string) {
  const el = document.getElementById(id.replace("#", ""))
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-3xl font-display tracking-wider text-foreground cursor-pointer hover:text-primary transition-colors"
            >
              DÝNAMIS
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => smoothScrollTo(link.href)}
                  className="text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors cursor-pointer relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer group"
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-foreground mb-1.5 transition-all group-hover:w-5 group-hover:bg-primary" />
              <span className="w-6 h-0.5 bg-foreground mb-1.5 transition-all group-hover:bg-primary" />
              <span className="w-6 h-0.5 bg-foreground transition-all group-hover:w-4 group-hover:bg-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-background z-50 md:hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-2xl font-display tracking-wider text-foreground">
                  DÝNAMIS
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => {
                          setIsOpen(false)
                          setTimeout(() => smoothScrollTo(link.href), 300)
                        }}
                        className="flex items-center justify-between w-full py-4 px-4 text-xl font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all cursor-pointer group"
                      >
                        <span>{link.label}</span>
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          →
                        </motion.span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Power & Potential
                </p>
                <div className="mt-4 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full animate-line-glow" />
              </div>

              {/* Background decoration */}
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
