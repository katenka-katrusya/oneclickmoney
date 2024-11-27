import { Hero } from '@/components/hero/Hero.jsx';
import { PaymentMethods } from '@/components/paymentMethods/PaymentMethods.jsx';
import { Advantages } from '@/components/advantages/Advantages.jsx';
import { Faq } from '@/components/faq/Faq.jsx';
import { Info } from '@/components/info/Info.jsx';
import { Footer } from '@/components/footer/Footer.jsx';

const Main = () => {
  return (
    <>
      <main>
        <Hero />
        <PaymentMethods />
        <Advantages />
        <Faq />
        <Info />
      </main>
      <Footer />
    </>
  );
};

export default Main
