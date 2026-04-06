"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-header.jpg"
          alt="Motocross rider performing aerial jump"
          fill
          className="object-cover md:object-top object-center"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {/* Top left corner lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
          className="absolute top-32 left-8 md:left-16 w-24 md:w-40 h-1 bg-primary origin-left"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 4.0 }}
          className="absolute top-32 left-8 md:left-16 w-1 h-24 md:h-40 bg-primary origin-top"
        />

        {/* Bottom right corner lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 4.2 }}
          className="absolute bottom-32 right-8 md:right-16 w-24 md:w-40 h-1 bg-primary origin-right"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 4.4 }}
          className="absolute bottom-32 right-8 md:right-16 w-1 h-24 md:h-40 bg-primary origin-bottom"
        />

        {/* Floating circles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full border-2 border-primary/50"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full border-2 border-primary/30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          {/* Main Title with Display Font */}
          <h1 className="font-display text-8xl md:text-[10rem] lg:text-[14rem] tracking-wider text-foreground mb-4 leading-none">
            DÝNAMIS
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.3 }}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 3.6 }}
              className="w-12 md:w-20 h-0.5 bg-primary origin-right"
            />
            <span className="text-primary font-bold text-sm tracking-[0.3em] uppercase">
              Power & Potential
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 3.6 }}
              className="w-12 md:w-20 h-0.5 bg-primary origin-left"
            />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 font-medium max-w-2xl mx-auto text-balance">
            Ancient Greek for Power and Potential. The ultimate motocross digital ecosystem.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4.0 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center cursor-pointer group"
            onClick={() => {
              document.getElementById("pro-circuit")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span className="text-xs uppercase tracking-widest text-foreground/60 mb-2 group-hover:text-primary transition-colors">
              Explore
            </span>
            <div className="w-8 h-14 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2 group-hover:border-primary transition-colors">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-3 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
