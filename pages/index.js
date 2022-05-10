import Header from '../components/Header';
import Review from '../components/Review';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Team from '../components/Team';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div className="max-w-7xl overflow-x-hidden w-screen bg-gray-100 font-Poppins">
      <Header />
      <Services />
      <Projects />
      <Team />
      <Work />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}
