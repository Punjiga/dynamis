import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { ProCircuit } from "@/components/sections/pro-circuit"
import { TheVault } from "@/components/sections/the-vault"
import { FuelLab } from "@/components/sections/fuel-lab"
import { CommsPit } from "@/components/sections/comms-pit"
import { XMap } from "@/components/sections/x-map"
import { Footer } from "@/components/sections/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen flex-grow">
      <Header />
      <Hero />
      <ProCircuit />
      <TheVault />
      <FuelLab />
      <CommsPit />
      <XMap />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
