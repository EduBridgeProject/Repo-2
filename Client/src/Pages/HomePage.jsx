import React from "react";
import Hero from "../components/Hero";
import EducationSection from "../components/EducationSection";
import StatsSection from "../components/StatsSection"; // استدعاء السيكشن الثالث
import ContactSection from "../components/ContactSection";
const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ✅ الهيرو سيكشن */}
      <Hero />

      {/* ✅ السيكشن الثاني (أهمية التعليم والتبرع) */}
      <EducationSection />

      {/* ✅ السيكشن الثالث (الإحصائيات والمشاركة المجتمعية) */}
      <StatsSection />

      <ContactSection />
      {/* ✅ باقي الصفحة */}
      <div className="container mx-auto py-16 px-6 text-center">
      </div>
    </div>
  );
};

export default HomePage;
