import AllProducts from "./components/AllProducts.js";
import BannerAd from "./components/BannerAd.js";
import FeaturedBrands from "./components/FeaturedBrands.js";
import FeaturedCategories from "./components/FeaturedCategories.js";
import FeaturedProduct from "./components/FeaturedProduct.js";
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection.js";
import Navbar from "./components/Navbar.js";
import NewYearSale from "./components/NewYearSale.js";
import TestSec from "./components/TestSec.js";
import TopBar from "./components/topBar.js";
import TrendingProduct from "./components/TrendingProduct.js";

export default function App() {
  return (
    <div className="bg-blue-50">
      <TopBar />
      <Navbar />
      <HeroSection />
      <NewYearSale />
      <BannerAd />
      <FeaturedProduct />
      <TrendingProduct />
      <FeaturedCategories />
      <FeaturedBrands />
      <AllProducts />
      <TestSec />
      <Footer />
    </div>
  );
}
