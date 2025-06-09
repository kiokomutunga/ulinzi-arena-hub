
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BookingRequestForm from "@/components/BookingRequestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EventsSection />
      <FacilitiesSection />
      <BookingRequestForm />
      <Footer />
    </div>
  );
};

export default Index;
