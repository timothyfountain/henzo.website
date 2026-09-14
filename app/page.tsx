import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { LeadershipSection } from '@/components/leadership-section'
import { ContactSection } from '@/components/contact-section'
import { JoinCta } from '@/components/join-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <JoinCta />
      <SiteFooter />
    </main>
  )
}
