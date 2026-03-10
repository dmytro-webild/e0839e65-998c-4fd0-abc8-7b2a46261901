"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, Crown, Eye, Feather, Heart, Moon, Shield, Skull, Users, Zap, MapPin, Image } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Artists", id: "artists" },
            { name: "Gallery", id: "gallery" },
            { name: "About", id: "about" },
            { name: "Aftercare", id: "aftercare" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Appointment", href: "booking" }}
          brandName="Cursemarks"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Cursemarks Tattoo"
          description="Marks that stay. Stories that haunt."
          buttons={[
            { text: "Book Appointment", href: "booking" },
            { text: "View Gallery", href: "gallery" }
          ]}
          background={{ variant: "plain" }}
          imageSrc="http://img.b2bpic.net/free-vector/chicano-tattoo-vintage-template_225004-1495.jpg"
          imageAlt="blackwork tattoo close-up detailed ink"
          mediaAnimation="slide-up"
          frameStyle="card"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="artists" data-section="artists">
        <TeamCardSix
          title="Our Artists"
          description="Master tattoo artists specializing in blackwork, fine line, gothic, and curse-inspired designs."
          members={[
            {
              id: "1",              name: "Sable",              role: "Lead Artist | Blackwork Specialist",              imageSrc: "http://img.b2bpic.net/free-photo/senior-artist-studio-painting-with-watercolor_23-2150214807.jpg",              imageAlt: "professional tattoo artist portrait studio"
            },
            {
              id: "2",              name: "Raven",              role: "Fine Line & Occult",              imageSrc: "http://img.b2bpic.net/free-photo/craft-beer-concept-with-tattooed-man_23-2148111207.jpg",              imageAlt: "male tattoo artist portrait professional"
            },
            {
              id: "3",              name: "Ash",              role: "Gothic & Curse Designs",              imageSrc: "http://img.b2bpic.net/free-photo/dilligent-focused-tattoo-artist-is-creating-new-tattoo-young-woman-s-hand-tatao-studio_613910-19581.jpg",              imageAlt: "female tattoo artist occult symbolism"
            },
            {
              id: "4",              name: "Vex",              role: "Dark Art & Symbolism",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-tattooed-male-barber-cuts-beard-black-male_613910-1462.jpg",              imageAlt: "tattoo artist dark studio atmosphere"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          uniformGridCustomHeightClasses="min-h-95 2xl:min-h-105"
        />
      </div>

      <div id="gallery" data-section="gallery">
        <FeatureHoverPattern
          title="Tattoo Gallery"
          description="Explore our collection of blackwork, fine line, gothic, and curse-inspired designs. Each piece tells a story etched in ink."
          features={[
            {
              icon: Skull,
              title: "Blackwork & Line Art",              description: "Bold, intricate designs in pure black ink. From geometric patterns to organic forms, each line is placed with precision."
            },
            {
              icon: Zap,
              title: "Fine Line Mastery",              description: "Delicate, detailed work capturing the finest details. Perfect for minimalist aesthetics and symbolic representations."
            },
            {
              icon: Moon,
              title: "Gothic Symbolism",              description: "Dark art rooted in occult imagery, mystical symbols, and gothic aesthetics. Meaningful marks for the discerning collector."
            },
            {
              icon: Eye,
              title: "Curse-Inspired Designs",              description: "Original curse mark concepts blending ancient symbolism with modern artistry. Marks that carry weight and mystery."
            },
            {
              icon: Feather,
              title: "Custom Concepts",              description: "Personalized designs brought to life. We collaborate to turn your vision into a permanent statement on your skin."
            },
            {
              icon: Crown,
              title: "Premium Aftercare",              description: "Comprehensive guidance to ensure your tattoo heals beautifully. Your mark deserves the best care from day one."
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          tag="Gallery"
          tagIcon={Image}
        />
      </div>

      <div id="booking" data-section="booking">
        <ContactFaq
          ctaTitle="Ready to Get Marked?"
          ctaDescription="Schedule a consultation with one of our artists. Let's discuss your vision and bring it to life."
          ctaButton={{ text: "Book a Session", href: "#booking" }}
          ctaIcon={Calendar}
          faqs={[
            {
              id: "1",              title: "How do I book an appointment?",              content: "Contact us via email or phone to discuss your design idea, preferred artist, and availability. We'll guide you through the booking process and answer any questions about the design, size, and placement."
            },
            {
              id: "2",              title: "What is your cancellation policy?",              content: "Cancellations made 48 hours in advance receive a full refund. Late cancellations or no-shows forfeit the deposit. We understand life happens—reach out if you need to reschedule."
            },
            {
              id: "3",              title: "Do you offer custom designs?",              content: "Absolutely. Custom designs are our specialty. We work closely with clients to create original concepts that reflect their vision, story, and personal aesthetic."
            },
            {
              id: "4",              title: "What areas do you specialize in?",              content: "We specialize in blackwork, fine line, gothic, and curse-inspired designs. Our artists are experienced across all body placements and can advise on sizing and positioning for optimal results."
            },
            {
              id: "5",              title: "How much does a tattoo cost?",              content: "Pricing depends on size, complexity, and placement. Simple designs start at $150. Custom work is quoted after consultation. A deposit secures your appointment."
            },
            {
              id: "6",              title: "What should I expect during my session?",              content: "Your artist will finalize the design, prepare the area, and begin the tattoo. Sessions typically last 1-4 hours depending on the design. You'll receive aftercare instructions to ensure proper healing."
            }
          ]}
          useInvertedBackground={false}
          animationType="slide-up"
          accordionAnimationType="smooth"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Cursemarks is a premium tattoo studio dedicated to meaningful body art, dark aesthetics, and artistic excellence. Every mark carries intention."
          metrics={[
            { icon: Users, label: "Satisfied Clients", value: "2000+" },
            { icon: Award, label: "Years of Mastery", value: "45+" },
            { icon: Zap, label: "Original Designs", value: "5000+" },
            { icon: Heart, label: "Marks That Matter", value: "Every One" }
          ]}
          useInvertedBackground={false}
          metricsAnimation="slide-up"
        />
      </div>

      <div id="aftercare" data-section="aftercare">
        <FaqDouble
          title="Aftercare Guide"
          description="Proper aftercare is essential for vibrant, long-lasting tattoos. Follow these guidelines to protect your new mark."
          faqs={[
            {
              id: "1",              title: "How should I clean my new tattoo?",              content: "Gently wash with unscented soap and lukewarm water 2-3 times daily for the first week. Pat dry with a clean paper towel—avoid cloth towels. Do not submerge in water (no baths, pools, or hot tubs) for 2 weeks."
            },
            {
              id: "2",              title: "What moisturizer should I use?",              content: "Use unscented, fragrance-free lotion or specialized tattoo aftercare balm. Apply thin layers 3-4 times daily for the first 2 weeks. Avoid petroleum-based products and heavy creams."
            },
            {
              id: "3",              title: "When will my tattoo stop itching?",              content: "Itching typically peaks 3-7 days after your session as the skin heals. Do not scratch—tap gently or apply lotion if needed. Itching usually subsides by week 2-3."
            },
            {
              id: "4",              title: "Is peeling normal?",              content: "Yes, light peeling is completely normal during the healing process. Do not pick or peel the skin—let it shed naturally. This usually occurs 1-2 weeks post-tattoo."
            },
            {
              id: "5",              title: "Can I exercise or go to the gym?",              content: "Avoid intense exercise for 2-3 weeks. Light walking is fine after day 3. Heavy sweating and friction can compromise healing and increase infection risk. Wait at least 2 weeks before submerging in chlorinated pools."
            },
            {
              id: "6",              title: "What if my tattoo becomes infected?",              content: "Signs of infection include excessive redness, warmth, pus, or severe swelling lasting beyond day 3. Contact us immediately or see a physician. Proper aftercare prevents most infections."
            },
            {
              id: "7",              title: "How long until my tattoo fully heals?",              content: "Surface healing takes 2-3 weeks. Complete internal healing takes 3-4 months. Avoid sun exposure for 2 weeks and use SPF 30+ on healed tattoos to maintain color vibrancy."
            },
            {
              id: "8",              title: "When can I get a follow-up or second session?",              content: "Wait at least 4-6 weeks before additional sessions on the same area. This allows complete healing and ensures optimal results for layered or extended designs."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          tag="Healing"
          tagIcon={Shield}
        />
      </div>

      <div id="contact" data-section="contact">
        <SocialProofOne
          title="Location & Contact"
          description="Find us in the heart of the city, where ink meets intention. Reach out to book your mark."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Studio"
          tagIcon={MapPin}
          names={[
            "📍 123 Shadow Street, Downtown District",            "📞 (555) 867-5309",            "📧 marks@cursemarks.studio",            "🕐 Tue-Sat: 12pm-9pm | Sun: 1pm-6pm"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Cursemarks Tattoo"
          copyrightText="© 2025 Cursemarks Tattoo. All marks are permanent."
          columns={[
            {
              title: "Studio",              items: [
                { label: "Home", href: "hero" },
                { label: "Artists", href: "artists" },
                { label: "Gallery", href: "gallery" },
                { label: "About", href: "about" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "Book Appointment", href: "booking" },
                { label: "Custom Designs", href: "booking" },
                { label: "Aftercare Guide", href: "aftercare" },
                { label: "Contact Us", href: "contact" }
              ]
            },
            {
              title: "Follow",              items: [
                { label: "Instagram", href: "https://instagram.com/cursemarks" },
                { label: "TikTok", href: "https://tiktok.com/@cursemarks" },
                { label: "Discord", href: "https://discord.gg/cursemarks" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
