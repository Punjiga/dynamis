"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import {
  Video,
  ImageIcon,
  Users,
  ShieldCheck,
  MessageCircle,
  Send,
} from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: ImageIcon,
    title: "Share Photos",
    description: "Upload and share your best riding moments with the community.",
  },
  {
    icon: Users,
    title: "Join Communities",
    description:
      "Connect with riders worldwide in specialized interest groups.",
  },
  {
    icon: ShieldCheck,
    title: "Ad-Free Experience",
    description: "Focus on what matters. No distracting advertisements ever.",
  },
]

const mockMessages = [
  {
    id: 1,
    user: "RiderX",
    message: "Just landed my first backflip! Any tips for the landing?",
    time: "2m ago",
    isOwn: false,
  },
  {
    id: 2,
    user: "You",
    message: "Keep your eyes on the horizon and spot your landing early. Great job!",
    time: "1m ago",
    isOwn: true,
  },
  {
    id: 3,
    user: "MotoQueen",
    message: "Meeting up at Desert Track this Saturday. Who's in?",
    time: "Just now",
    isOwn: false,
  },
]

export function CommsPit() {
  return (
    <section id="comms-pit" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 font-display text-[20rem] text-foreground select-none pointer-events-none"
      >
        04
      </motion.div>

      {/* Animated corner decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20 animate-border-pulse" />
      <div className="absolute bottom-20 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20 animate-border-pulse" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
            Rider Community
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-wider mt-3 text-foreground">
            COMMS-PIT
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg font-medium">
            Connect with riders worldwide. Share, learn, and grow together in an
            ad-free environment.
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <AnimatedSection animation="slideRight">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="border-2 border-transparent hover:border-primary/20 shadow-md hover:shadow-xl transition-all duration-500 bg-card cursor-pointer group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mt-1 font-medium">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground mt-4 cursor-pointer font-bold uppercase tracking-wider"
              >
                <Video className="w-5 h-5 mr-2" />
                Video Call
              </Button>
            </div>
          </AnimatedSection>

          {/* Chat Mockup */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <Card className="border-2 border-border hover:border-primary/20 shadow-2xl overflow-hidden bg-card transition-all duration-500">
              <div className="bg-foreground/5 px-6 py-4 border-b border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-foreground">
                    Global Riders Chat
                  </span>
                  <p className="text-xs text-muted-foreground">2,431 online</p>
                </div>
                <span className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground font-medium">Live</span>
                </span>
              </div>
              <CardContent className="p-0">
                <div className="h-80 overflow-hidden">
                  <div className="p-4 space-y-4">
                    {mockMessages.map((msg, index) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            msg.isOwn
                              ? "bg-primary text-primary-foreground rounded-br-md"
                              : "bg-secondary text-secondary-foreground rounded-bl-md"
                          }`}
                        >
                          {!msg.isOwn && (
                            <p className="text-xs font-bold mb-1 opacity-80">
                              {msg.user}
                            </p>
                          )}
                          <p className="font-medium">{msg.message}</p>
                          <p
                            className={`text-xs mt-1 ${msg.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                          >
                            {msg.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-secondary rounded-full px-5 py-3 font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-text"
                    />
                    <Button
                      size="icon"
                      className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
