import { BandTicker } from "@/components/band-ticker";
import { BrandStory } from "@/components/brand-story";
import { CategoryGrid } from "@/components/category-grid";
import { ContactCta } from "@/components/contact-cta";
import { FeaturedProducts } from "@/components/featured-products";
import { Hero } from "@/components/hero";
import { PerforatedDivider } from "@/components/perforated-divider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <BandTicker />
        <PerforatedDivider from="gold" to="paper" />
        <CategoryGrid />
        <PerforatedDivider from="paper" to="ink" />
        <FeaturedProducts />
        <PerforatedDivider from="ink" to="paper" />
        <BrandStory />
        <PerforatedDivider from="paper" to="ink" />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
