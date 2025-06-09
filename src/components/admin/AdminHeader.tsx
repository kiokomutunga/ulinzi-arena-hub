
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Main Site
              </Button>
            </Link>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Ulinzi Admin</h1>
                <p className="text-sm text-muted-foreground">Management Portal</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
