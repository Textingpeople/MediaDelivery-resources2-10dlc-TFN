import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Disclaimer from '@/components/Disclaimer';
import ProductHero from '@/components/product/ProductHero';
import ServiceCategories from '@/components/product/ServiceCategories';
import ApproveEveryStep from '@/components/product/ApproveEveryStep';
import ProductCta from '@/components/product/ProductCta';
import { BG, TEXT } from '@/lib/theme';

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <SiteNav />
      <ProductHero />
      <ServiceCategories />
      <ApproveEveryStep />
      <ProductCta />
      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: BG }}>
        <Disclaimer />
      </section>
      <SiteFooter />
    </div>
  );
}
