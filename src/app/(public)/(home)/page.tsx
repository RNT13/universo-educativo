
'use client'

import AboutSection from "@/components/ui/AboutSection/AboutSection"
import ExampleSection from "@/components/ui/ExampleSection/ExampleSection"
import FeaturesSection from "@/components/ui/FeaturesSection/FeaturesSection"
import FinalSection from "@/components/ui/FinalSection/FinalSection"
import Hero from "@/components/ui/Hero/Hero"
import RecoverySection from "@/components/ui/RecoverySection/RecoverySection"
import SolutionSection from "@/components/ui/SolutionSection/SolutionSection"
import TestimonySection from "@/components/ui/TestimonySection/TestimonySection"
import { HomeContainer, HomeContent } from "./home.styles"

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <Hero />
        <FeaturesSection />
        <SolutionSection />
        <ExampleSection />
        <AboutSection />
        <TestimonySection />
        <RecoverySection />
        <FinalSection />
      </HomeContent>
    </HomeContainer>
  )
}
