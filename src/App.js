import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowToRefer from './components/HowToRefer';
import ReferralBenefits from './components/ReferralBenefits';
import FAQSection from './components/FAQSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ReferralPopup from './components/ReferralPopup';

function App() {
  const [openReferralPopup, setOpenReferralPopup] = useState(false);
  useEffect(()=>{
    console.log(`now the status is ${openReferralPopup}`);
  },[openReferralPopup])
  const handleOpenReferralPopup = () => {
    setOpenReferralPopup(true);
  };

  const handleCloseReferralPopup = () => {
    setOpenReferralPopup(false);
  };

  return (
    <div>
      <Navbar />
      <HeroSection onOpenReferralPopup={handleOpenReferralPopup}/>
      <HowToRefer />
      <ReferralBenefits />
      <FAQSection />
      <CallToAction />
      <Footer />
      <ReferralPopup open={openReferralPopup} onClose={handleCloseReferralPopup} />
    </div>
  );
}

export default App;
