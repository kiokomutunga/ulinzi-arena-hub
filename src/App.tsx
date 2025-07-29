
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Facilities from "./pages/Facilities";
import Gyms from "./pages/Gyms";
import MainStadium from "./pages/MainStadium";
import SwimmingPool from "./pages/SwimmingPool";
import BasketballArena from "./pages/BasketballArena";
import TennisCourts from "./pages/TennisCourts";
import AthleticsTrack from "./pages/AthleticsTrack";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gyms" element={<Gyms />} />
          <Route path="/main-stadium" element={<MainStadium />} />
          <Route path="/swimming-pool" element={<SwimmingPool />} />
          <Route path="/basketball-arena" element={<BasketballArena />} />
          <Route path="/tennis-courts" element={<TennisCourts />} />
          <Route path="/athletics-track" element={<AthleticsTrack />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
