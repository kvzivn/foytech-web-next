import Hero from "@/components/Hero"
import About from "@/components/About"
import Rumpole from "@/components/Rumpole"
import Team from "@/components/Team"
import FAQ from "@/components/FAQ"
import ContactForm from "@/components/ContactForm"
import BlogSection from "@/components/BlogSection"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Rumpole />
      <Team />
      <FAQ />
      <BlogSection />
      <ContactForm />
    </div>
  )
}
