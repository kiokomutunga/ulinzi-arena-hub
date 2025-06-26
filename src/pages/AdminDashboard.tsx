
import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import BookedEventsManager from "@/components/admin/BookedEventsManager";
import UpcomingEventsManager from "@/components/admin/UpcomingEventsManager";
import BookingRequestsManager from "@/components/admin/BookingRequestsManager";
import KeyEventsManager from "@/components/admin/KeyEventsManager";
import CalendarView from "@/components/admin/CalendarView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-secondary/20">
      <AdminHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage events and bookings for Ulinzi Sports Complex</p>
        </div>

        <Tabs defaultValue="booking-requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="booking-requests">Booking Requests</TabsTrigger>
            <TabsTrigger value="booked-events">Booked Events</TabsTrigger>
            <TabsTrigger value="upcoming-events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="key-events">Key Events</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="booking-requests">
            <BookingRequestsManager />
          </TabsContent>
          
          <TabsContent value="booked-events">
            <BookedEventsManager />
          </TabsContent>
          
          <TabsContent value="upcoming-events">
            <UpcomingEventsManager />
          </TabsContent>
          
          <TabsContent value="key-events">
            <KeyEventsManager />
          </TabsContent>
          
          <TabsContent value="calendar">
            <CalendarView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
