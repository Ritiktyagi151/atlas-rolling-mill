import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import GlobalPresence from "./GlobalPresence";
import AdvantagesSection from "./AdvantagesSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import GalaxyVideoSection from "./Ourvideo";
import AtlasManufacturingProcess from "./AtlasManufacturingProcess";
import AtlasRollingMillFAQ from "./AtlasRollingMillFAQ";
import GalaxyPackTechCertifications from "./CertificationsAwards";
import PremiumBlogSlider from "./BlogSlider";
import WhyChooseUs from "./WhyChooseUs";
import TeamSection from "./TeamSection";
import FeatureProducts from "./FeatureProducts";
import OurVideos from "./Ourvideo";
import VideoAndImages from "./HomeHeader";
import ProductSlider from "./Productslider";
import EventsSection from "./EventsSection";
import ImageSlider from "../../components/Clientslider";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Show loader for 1 seconds on refresh

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <VideoAndImages />
      <AboutSection />
      <FeatureProducts />
      {/* <AtlasManufacturingProcess /> */}
      {/* <EventsSection /> */}
      {/* <ProductSlider /> */}
      {/* <OurVideos /> */}
      {/* <AtlasRollingMillFAQ /> */}
      <WhyChooseUs />
      {/* <TeamSection /> */}
      <ImageSlider />
      {/* <GalaxyPackTechCertifications /> */}
      <TestimonialsSection />
      <AdvantagesSection />
      <GlobalPresence />
      {/* <PremiumBlogSlider /> */}
    </div>
  );
}

export default Home;
