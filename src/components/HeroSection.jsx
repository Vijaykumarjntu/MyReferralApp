import React from 'react';
import hero from "../assets/hero.png";
const HeroSection = ({onOpenReferralPopup}) => {
  return (
    <section className="bg-blue-100 p-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">Let's Learn & Earn</h1>
        <p className="text-xl mt-4">Get a chance to win up-to Rs. 15,000</p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded"  onClick={onOpenReferralPopup}>Refer Now</button>
      </div>
      <img src={hero} alt="hero" className="w-1/2" />
    </section>
  );
};

export default HeroSection;
