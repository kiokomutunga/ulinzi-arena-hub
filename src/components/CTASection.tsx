
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-stadium-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Experience Ulinzi Sports Complex?
          <br />
          Book Your Facility Today
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            size="lg" 
            onClick={() => navigate('/booking')}
            className="bg-stadium-secondary hover:bg-stadium-secondary/90 text-white text-lg px-8 py-6 border-2 border-stadium-secondary"
          >
            BOOK FACILITY
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/my-bookings')}
            className="border-2 border-white text-white hover:bg-white hover:text-stadium-primary text-lg px-8 py-6"
          >
            MY BOOKINGS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
