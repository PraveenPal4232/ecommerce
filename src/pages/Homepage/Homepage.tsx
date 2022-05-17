import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroBanner from './HeroBanner'

function Homepage() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <Footer />
    </div>
  );
}

export default Homepage;