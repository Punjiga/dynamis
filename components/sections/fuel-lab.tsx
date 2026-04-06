"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { UtensilsCrossed, Leaf, Dumbbell, Zap } from "lucide-react"
import { motion } from "framer-motion"

const recipe = {
  name: "Power-Up Smoothie",
  description:
    "The ultimate pre-ride fuel to maximize your energy and focus on the track.",
  image: "/images/power-smoothie.jpg",
  ingredients: [
    "2 cups fresh spinach",
    "1 frozen banana",
    "1 cup mixed berries",
    "1 scoop vanilla protein powder",
    "1 tablespoon chia seeds",
    "1 cup almond milk",
    "1 tablespoon honey",
  ],
  tools: ["High-power blender", "Measuring cups", "Tall glass"],
  steps: [
    {
      word: "First",
      instruction:
        "gather all your ingredients and place the spinach and almond milk in the blender.",
    },
    {
      word: "Then",
      instruction:
        "add the frozen banana and mixed berries for natural sweetness and energy.",
    },
    {
      word: "Next",
      instruction:
        "add the protein powder, chia seeds, and honey for sustained power.",
    },
    {
      word: "Finally",
      instruction:
        "blend on high for 60 seconds until smooth and pour into a tall glass.",
    },
  ],
  benefits: [
    { icon: Zap, label: "Instant Energy" },
    { icon: Dumbbell, label: "Muscle Recovery" },
    { icon: Leaf, label: "Natural Nutrients" },
  ],
}

export function FuelLab() {
  return (
    <section id="fuel-lab" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[20rem] text-foreground select-none pointer-events-none"
      >
        03
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
            Rider Nutrition
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-wider mt-3 text-foreground">
            FUEL LAB
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg font-medium">
            Optimize your performance with nutrition designed specifically for
            motocross athletes.
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Recipe Image */}
          <AnimatedSection animation="slideRight">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500 rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-3">
                  {recipe.benefits.map((benefit) => (
                    <div
                      key={benefit.label}
                      className="flex items-center gap-2 bg-background/95 backdrop-blur-sm rounded-full px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      <benefit.icon className="w-4 h-4" />
                      <span className="text-sm font-bold">
                        {benefit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Recipe Details */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <Card className="border-2 border-border hover:border-primary/20 shadow-lg transition-all duration-500 bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <UtensilsCrossed className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display tracking-wider text-foreground">
                      {recipe.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium">
                      {recipe.description}
                    </p>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.15em] mb-4">
                    Ingredients
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {recipe.ingredients.map((ingredient) => (
                      <li
                        key={ingredient}
                        className="flex items-center gap-3 text-foreground font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.15em] mb-4">
                    Kitchen Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.tools.map((tool) => (
                      <span
                        key={tool}
                        className="bg-secondary text-secondary-foreground font-semibold px-4 py-2 rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.15em] mb-4">
                    Instructions
                  </h4>
                  <ol className="space-y-4">
                    {recipe.steps.map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                      >
                        <span className="text-primary font-bold text-lg shrink-0">
                          {step.word},
                        </span>
                        <span className="text-foreground font-medium">{step.instruction}</span>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
