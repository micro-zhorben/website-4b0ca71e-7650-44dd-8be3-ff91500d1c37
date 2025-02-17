import { ModeToggle } from "@/components/mode-toggle";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { DownloadSection } from "@/components/download-section";

export function Home() {
  return (
    <div className="min-h-screen">
      <header className="container flex items-center justify-end p-4">
        <ModeToggle />
      </header>

      <main className="container space-y-20 pb-20">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <DownloadSection />
        <CTASection />
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          © 2024 FitTrack Pro. 保留所有权利。
        </div>
      </footer>
    </div>
  );
}