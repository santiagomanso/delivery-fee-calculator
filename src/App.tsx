import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
const App = () => {
  return (
    <CartProvider>
      <LanguageProvider>
        <Container>
          <Navbar />
          <Cart />
          <Footer />
        </Container>
      </LanguageProvider>
    </CartProvider>
  );
};

export default App;
