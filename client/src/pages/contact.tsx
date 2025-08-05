import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Building,
  Users
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["Main: (555) 123-4567", "Toll Free: (800) 123-4567"],
    description: "Speak with our team Monday-Friday, 9AM-6PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@buildinghouses.com", "sales@buildinghouses.com"],
    description: "We respond to all emails within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Luxury Avenue", "Beverly Hills, CA 90210"],
    description: "Schedule an appointment to visit our showroom"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
    description: "Closed Sundays and major holidays"
  }
];

const services = [
  { icon: Building, title: "New Development", description: "Custom luxury home and commercial development" },
  { icon: MessageSquare, title: "Consultation", description: "Free initial consultation and project assessment" },
  { icon: Users, title: "Investment", description: "Real estate investment opportunities and guidance" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6" data-testid="contact-hero-title">
                Contact Us
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="contact-hero-description">
                Ready to start your next project? Get in touch with our team of experts. We're here to bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-600 mb-4" data-testid="contact-info-title">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600" data-testid="contact-info-description">
                Multiple ways to reach our team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center h-full" data-testid={`contact-info-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 flex justify-center">
                      <info.icon className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-600 mb-3" data-testid={`contact-info-title-${index}`}>
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700 font-medium" data-testid={`contact-info-detail-${index}-${detailIndex}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600" data-testid={`contact-info-description-${index}`}>
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center" data-testid={`service-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-secondary mb-4 flex justify-center">
                      <service.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-600 mb-2" data-testid={`service-title-${index}`}>
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

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-600 mb-4" data-testid="contact-form-title">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600" data-testid="contact-form-description">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        data-testid="contact-form-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        data-testid="contact-form-email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        data-testid="contact-form-phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        data-testid="contact-form-subject"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      data-testid="contact-form-message"
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-blue-800 text-white font-semibold px-8"
                      data-testid="contact-form-submit"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-600 mb-4" data-testid="map-section-title">
                Visit Our Showroom
              </h2>
              <p className="text-xl text-gray-600" data-testid="map-section-description">
                Located in the heart of Beverly Hills
              </p>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center" data-testid="map-placeholder">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-600 mb-2">Building & Houses Showroom</h3>
                    <p className="text-gray-600">123 Luxury Avenue, Beverly Hills, CA 90210</p>
                    <p className="text-sm text-gray-500 mt-2">Interactive map would be integrated here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
