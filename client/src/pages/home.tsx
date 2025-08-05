import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  ArrowRight, 
  Home as HomeIcon, 
  Building, 
  Wrench, 
  TrendingUp, 
  Key, 
  Handshake,
  Send
} from "lucide-react";

const services = [
  {
    icon: HomeIcon,
    title: "Luxury Home Development",
    description: "Custom-designed luxury homes that blend architectural innovation with premium craftsmanship and attention to detail."
  },
  {
    icon: Building,
    title: "Commercial Properties",
    description: "Strategic commercial real estate development focused on maximizing investment returns and creating business-friendly environments."
  },
  {
    icon: Wrench,
    title: "Property Renovation",
    description: "Complete property transformations that modernize spaces while preserving character and increasing market value."
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description: "Expert guidance on real estate investments with market analysis and strategic planning for optimal portfolio growth."
  },
  {
    icon: Key,
    title: "Property Management",
    description: "Comprehensive property management services ensuring optimal maintenance, tenant relations, and investment performance."
  },
  {
    icon: Handshake,
    title: "Real Estate Brokerage",
    description: "Professional brokerage services connecting buyers and sellers with expert negotiation and market knowledge."
  }
];

const properties = [
  {
    id: 1,
    title: "Ocean View Villa",
    location: "Malibu, California",
    price: "$12,500,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Glass House Estate",
    location: "Beverly Hills, California",
    price: "$8,750,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "Colonial Manor",
    location: "Greenwich, Connecticut",
    price: "$6,200,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 4,
    title: "Sky Tower Penthouse",
    location: "Manhattan, New York",
    price: "$15,000,000",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 5,
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    price: "$4,850,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 6,
    title: "Mediterranean Villa",
    location: "Naples, Florida",
    price: "$3,750,000",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export default function Home() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter. We'll keep you updated with the latest properties and news.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
            alt="Luxury modern living room with panoramic city view"
            className="w-full h-full object-cover"
            data-testid="hero-image"
          />
          <div className="absolute inset-0 hero-video-overlay"></div>
        </div>
      </section>

      {/* Sky's The Limit Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" data-testid="skys-limit-title">
            The Sky's The Limit
          </h2>
          <p className="text-xl mb-10 text-blue-100" data-testid="skys-limit-description">
            Discover extraordinary properties that redefine luxury living and architectural excellence.
          </p>
          <Link href="/projects">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-yellow-500 text-white font-semibold py-4 px-8 text-lg shadow-lg hover:shadow-xl"
              data-testid="view-projects-button"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-600 mb-4" data-testid="services-title">
              What We Can Do For You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-description">
              From luxury residential developments to commercial properties, we deliver exceptional real estate solutions tailored to your vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow" data-testid={`service-card-${index}`}>
                <CardContent className="p-8">
                  <div className="text-primary text-4xl mb-4">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-600 mb-4" data-testid="properties-title">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600" data-testid="properties-description">
              Discover our portfolio of exceptional properties that define luxury living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {properties.map((property) => (
              <div key={property.id} className="group cursor-pointer" data-testid={`property-card-${property.id}`}>
                <div className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`property-image-${property.id}`}
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold mb-2" data-testid={`property-title-${property.id}`}>
                      {property.title}
                    </h3>
                    <p className="text-gray-600" data-testid={`property-location-${property.id}`}>
                      {property.location}
                    </p>
                    <p className="text-primary font-bold text-lg mt-2" data-testid={`property-price-${property.id}`}>
                      {property.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-blue-800 text-white font-semibold"
                data-testid="view-all-properties-button"
              >
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4" data-testid="newsletter-title">Stay Updated</h2>
          <p className="text-xl mb-10 text-blue-100" data-testid="newsletter-description">
            Subscribe to receive exclusive property listings, market insights, and investment opportunities directly to your inbox.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto" data-testid="newsletter-form">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-slate-600"
                required
                data-testid="newsletter-email-input"
              />
              <Button
                type="submit"
                disabled={newsletterMutation.isPending}
                className="bg-secondary hover:bg-yellow-500 text-white font-semibold whitespace-nowrap"
                data-testid="newsletter-subscribe-button"
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
