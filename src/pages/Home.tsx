import Hero from '../components/Hero';
import Trust from '../components/Trust';
import About from '../components/About';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Trust />
      <About />
      <ProductCategories />
      <FeaturedProducts />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <Contact />
    </div>
  );
}
