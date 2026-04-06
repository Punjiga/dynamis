"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

const riders = [
  {
    id: 1,
    name: "Marcus Rivera",
    image: "/images/rider-1.jpg",
    skills: ["High-altitude Jumping", "Technical Cornering", "Sand Riding"],
    specialty: "Freestyle Champion",
  },
  {
    id: 2,
    name: "Elena Kowalski",
    image: "/images/rider-2.jpg",
    skills: ["Precision Landing", "Speed Control", "Rhythm Sections"],
    specialty: "Supercross Expert",
  },
  {
    id: 3,
    name: "Jake Thompson",
    image: "/images/rider-3.jpg",
    skills: ["Whip Technique", "Start Holeshots", "Endurance Racing"],
    specialty: "Motocross Prodigy",
  },
]

export function ProCircuit() {
  return (
    <section id="pro-circuit" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[20rem] text-foreground select-none pointer-events-none"
      >
        01
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
            Learn from the Best
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-wider mt-3 text-foreground">
            PRO-CIRCUIT
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg font-medium">
            Train with world-class professional riders and master the techniques
            that separate champions from contenders.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {riders.map((rider, index) => (
            <AnimatedSection key={rider.id} delay={index * 0.15}>
              <Card className="group overflow-hidden border-2 border-transparent hover:border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={rider.image}
                    alt={`${rider.name} - Professional motocross rider`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                  {/* Animated overlay on hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                      {rider.specialty}
                    </p>
                    <h3 className="text-2xl font-display tracking-wider text-white mt-1">
                      {rider.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.15em] mb-4">
                    Skills
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {rider.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-foreground font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground cursor-pointer font-bold uppercase tracking-wider transition-all duration-300 group">
                    <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Training
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
