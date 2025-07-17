
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import LiveEventsSection from "@/components/LiveEventsSection";
import EventScheduleSection from "@/components/EventScheduleSection";
import EventsSection from "@/components/EventsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import NewsSection from "@/components/NewsSection";
import BookingRequestForm from "@/components/BookingRequestForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <QuickLinksSection />
      <LiveEventsSection />
      <EventScheduleSection />
      <EventsSection />
      <FacilitiesSection />
      <NewsSection />
      <BookingRequestForm />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
