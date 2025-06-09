
import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import BookedEventsManager from "@/components/admin/BookedEventsManager";
import UpcomingEventsManager from "@/components/admin/UpcomingEventsManager";
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

        <Tabs defaultValue="booked-events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="booked-events">Booked Events</TabsTrigger>
            <TabsTrigger value="upcoming-events">Upcoming Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="booked-events">
            <BookedEventsManager />
          </TabsContent>
          
          <TabsContent value="upcoming-events">
            <UpcomingEventsManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
