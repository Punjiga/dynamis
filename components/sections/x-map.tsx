"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { MapPin, Sparkles, Navigation, Globe } from "lucide-react"
import { motion } from "framer-motion"

const locations = [
  {
    id: 1,
    name: "Sardinia MX Park",
    country: "Italy",
    type: "Professional Track",
    coordinates: { x: 52, y: 35 },
  },
  {
    id: 2,
    name: "Glen Helen Raceway",
    country: "USA",
    type: "Championship Circuit",
    coordinates: { x: 15, y: 38 },
  },
  {
    id: 3,
    name: "Lommel Circuit",
    country: "Belgium",
    type: "Sand Specialty",
    coordinates: { x: 48, y: 28 },
  },
  {
    id: 4,
    name: "Matterley Basin",
    country: "UK",
    type: "MXGP Venue",
    coordinates: { x: 45, y: 26 },
  },
]

export function XMap() {
  return (
    <section id="x-map" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[20rem] text-foreground select-none pointer-events-none"
      >
        05
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
            Plan Your Adventure
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-wider mt-3 text-foreground">
            X-MAP
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg font-medium">
            Discover world-class motocross tracks and plan your next riding
            expedition.
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <AnimatedSection animation="fadeIn" className="lg:col-span-2">
            <Card className="border-2 border-border hover:border-primary/20 shadow-xl overflow-hidden bg-card transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9] bg-gradient-to-br from-secondary via-muted to-secondary overflow-hidden">
                  {/* Minimalist World Map SVG */}
                  <svg
                    viewBox="0 0 100 50"
                    className="absolute inset-0 w-full h-full opacity-20"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    {/* Simplified continent shapes */}
                    <path
                      d="M10,20 Q15,15 25,18 Q30,20 28,25 Q25,30 20,28 Q12,25 10,20"
                      fill="currentColor"
                      className="text-foreground"
                    />
                    <path
                      d="M40,15 Q50,10 60,18 Q65,25 55,35 Q45,32 42,25 Q38,20 40,15"
                      fill="currentColor"
                      className="text-foreground"
                    />
                    <path
                      d="M65,20 Q75,15 85,22 Q90,30 80,35 Q70,32 65,20"
                      fill="currentColor"
                      className="text-foreground"
                    />
                  </svg>

                  {/* Animated connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice">
                    <motion.line
                      x1="15" y1="38" x2="45" y2="26"
                      stroke="currentColor"
                      strokeWidth="0.2"
                      strokeDasharray="2 2"
                      className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2 }}
                    />
                    <motion.line
                      x1="45" y1="26" x2="52" y2="35"
                      stroke="currentColor"
                      strokeWidth="0.2"
                      strokeDasharray="2 2"
                      className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>

                  {/* Location Markers */}
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.id}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="absolute group cursor-pointer"
                      style={{
                        left: `${location.coordinates.x}%`,
                        top: `${location.coordinates.y}%`,
                      }}
                    >
                      <div className="relative">
                        <div className="w-4 h-4 bg-primary rounded-full shadow-lg group-hover:scale-125 transition-transform" />
                        <div className="absolute -top-1 -left-1 w-6 h-6 bg-primary/30 rounded-full animate-ping" />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 group-hover:-translate-y-1">
                        <div className="bg-foreground text-background px-4 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl">
                          <p className="font-bold">{location.name}</p>
                          <p className="text-background/70">{location.country}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Grid overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                      backgroundSize: "10% 10%",
                      opacity: 0.05,
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <div className="space-y-4">
              {/* AI Feature Card */}
              <Card className="border-2 border-primary/20 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    AI Track Analysis
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Get personalized track recommendations based on your skill
                    level and riding style.
                  </p>
                </CardContent>
              </Card>

              {/* Location List */}
              <Card className="border-2 border-border hover:border-primary/20 shadow-lg bg-card transition-all duration-500">
                <CardContent className="p-4">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Featured Tracks
                  </h4>
                  <ul className="space-y-2">
                    {locations.map((location, index) => (
                      <motion.li
                        key={location.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer group"
                      >
                        <MapPin className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-foreground truncate">
                            {location.name}
                          </p>
                          <p className="text-xs text-muted-foreground font-medium">
                            {location.country} • {location.type}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Button className="w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground cursor-pointer font-bold uppercase tracking-wider transition-all duration-300 group">
                <Navigation className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Plan Your Trip
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
