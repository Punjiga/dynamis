"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AnimatedSection } from "@/components/animated-section"
import { Scale } from "lucide-react"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Apex Carbon Helmet",
    image: "/images/product-helmet.jpg",
    price: "$599",
    description:
      "Lightweight carbon fiber construction with advanced ventilation. DOT and ECE certified for maximum protection.",
    category: "Protection",
  },
  {
    id: 2,
    name: "Velocity Pro Jersey",
    image: "/images/product-jersey.jpg",
    price: "$129",
    description:
      "Moisture-wicking performance fabric with reinforced stitching. Designed for optimal airflow during intense rides.",
    category: "Apparel",
  },
  {
    id: 3,
    name: "Titan MX Boots",
    image: "/images/product-boots.jpg",
    price: "$449",
    description:
      "Full-grain leather with advanced ankle protection system. Pivot technology for unrestricted movement.",
    category: "Footwear",
  },
]

export function TheVault() {
  return (
    <section id="the-vault" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 font-display text-[20rem] text-foreground select-none pointer-events-none"
      >
        02
      </motion.div>

      {/* Animated corner decorations */}
      <div className="absolute top-20 right-10 w-20 h-20 border-t-2 border-r-2 border-primary/20 animate-border-pulse" />
      <div className="absolute bottom-20 left-10 w-20 h-20 border-b-2 border-l-2 border-primary/20 animate-border-pulse" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
            Premium Gear
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-wider mt-3 text-foreground">
            THE VAULT
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg font-medium">
            Equip yourself with championship-grade gear trusted by professionals
            worldwide.
          </p>
          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-1 bg-primary"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="group overflow-hidden border-2 border-transparent hover:border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500 h-full bg-card cursor-pointer">
                    <div className="relative aspect-square overflow-hidden bg-secondary/20">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-foreground">
                          {product.name}
                        </h3>
                        <span className="text-2xl font-display tracking-wider text-primary">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-2 font-medium">
                        {product.description}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer font-bold uppercase tracking-wider transition-all duration-300"
                      >
                        <Scale className="w-4 h-4 mr-2" />
                        Compare
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer transition-all duration-300" />
            <CarouselNext className="hidden md:flex -right-12 bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer transition-all duration-300" />
          </Carousel>
        </AnimatedSection>

        {/* Mobile indicator */}
        <div className="flex justify-center mt-8 gap-2 md:hidden">
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
            Swipe to explore
          </span>
        </div>
      </div>
    </section>
  )
}
