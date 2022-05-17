import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import HeroBanner from './HeroBanner'
import NewProducts from './NewProducts'

function Homepage() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <NewProducts />
      <Footer />
    </div>
  );
}

export default Homepage;