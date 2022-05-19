import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import HeroBanner from './HeroBanner';
import NewProducts from './NewProducts';
import WhyChooseUs from './WhyChooseUs';

function Homepage() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <NewProducts />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Homepage;