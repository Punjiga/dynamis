"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

const footerLinks = {
  product: [
    { label: "Pro-Circuit", href: "#pro-circuit" },
    { label: "The Vault", href: "#the-vault" },
    { label: "Fuel Lab", href: "#fuel-lab" },
    { label: "Comms-Pit", href: "#comms-pit" },
    { label: "X-Map", href: "#x-map" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        className="absolute right-0 bottom-0 font-display text-[15rem] text-background select-none pointer-events-none leading-none"
      >
        MC
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="text-4xl font-display tracking-wider text-background hover:text-primary transition-colors cursor-pointer"
              >
                DÝNAMIS
              </Link>
              <p className="mt-4 text-background/70 font-medium leading-relaxed">
                The ultimate digital ecosystem for motocross enthusiasts. Power
                and Potential, united.
              </p>
              {/* Animated line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6 w-16 h-1 bg-primary origin-left"
              />
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-background/50 mb-6">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors font-medium cursor-pointer inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-background/50 mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors font-medium cursor-pointer inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-background/50 mb-6">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors font-medium cursor-pointer inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 font-medium">
              {new Date().getFullYear()} DÝNAMIS. All rights reserved.
            </p>
            <p className="text-background/50 text-sm font-medium">
              Diseñado y creado por{" "}
              <a
                href="https://srstudio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1 cursor-pointer group"
              >
                <span className="text-primary font-bold tracking-wider transition-all duration-300 group-hover:tracking-widest">
                  SR STUDIO
                </span>
                <motion.span
                  className="inline-block w-1.5 h-1.5 bg-primary rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
                <span className="absolute -bottom-1 left-0 w-full h-px bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
