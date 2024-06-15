import Contact from "../components/Contact";
import Drinks from "../components/Drinks";
import ExploreOtherDishes from "../components/ExploreOtherDishes ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopularDishes from "../components/PopularDishes";
import QuickBites from "../components/QuickBites";
import RiceDishes from "../components/RiceDishes";
import Showcase from "../components/Showcase";
import Soups from "../components/Soups";
import SpecialOffers from "../components/SpecialOffers";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (<div>
        <Header />
        <Showcase />
        <PopularDishes />
        <SpecialOffers />
        <Drinks />
        <QuickBites />
        <Soups />
        <RiceDishes />
        <ExploreOtherDishes />
        <Testimonials />
        <Contact />
        <Footer />
  </div>);
};

export default Home;
