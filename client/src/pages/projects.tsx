import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Sunset Ridge Development",
    location: "Beverly Hills, CA",
    status: "Completed",
    type: "Residential",
    units: 12,
    description: "Luxury residential development featuring modern architecture and premium amenities.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    priceRange: "$2.5M - $8.5M"
  },
  {
    id: 2,
    title: "Metropolitan Tower",
    location: "Manhattan, NY",
    status: "Under Construction",
    type: "Commercial",
    units: 45,
    description: "State-of-the-art commercial complex with premium office spaces and retail units.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    priceRange: "$500K - $2.2M"
  },
  {
    id: 3,
    title: "Oceanfront Estates",
    location: "Malibu, CA",
    status: "Planning",
    type: "Residential",
    units: 8,
    description: "Exclusive oceanfront properties with panoramic Pacific Ocean views.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    priceRange: "$10M - $25M"
  },
  {
    id: 4,
    title: "Green Valley Commons",
    location: "Austin, TX",
    status: "Completed",
    type: "Mixed Use",
    units: 24,
    description: "Sustainable mixed-use development combining residential and commercial spaces.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    priceRange: "$300K - $1.5M"
  },
  {
    id: 5,
    title: "Heritage Square Renovation",
    location: "Boston, MA",
    status: "Completed",
    type: "Renovation",
    units: 16,
    description: "Historic building renovation preserving architectural heritage with modern amenities.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    priceRange: "$800K - $3.2M"
  },
  {
    id: 6,
    title: "Tech Hub Campus",
    location: "San Francisco, CA",
    status: "Under Construction",
    type: "Commercial",
    units: 32,
    description: "Modern tech campus designed for innovation and collaboration.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    priceRange: "$1M - $5M"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800";
    case "Under Construction":
      return "bg-blue-100 text-blue-800";
    case "Planning":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6" data-testid="projects-hero-title">
                Our Projects
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="projects-hero-description">
                Explore our portfolio of exceptional developments that showcase our commitment to architectural excellence and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow" data-testid={`project-card-${project.id}`}>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      data-testid={`project-image-${project.id}`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(project.status)} data-testid={`project-status-${project.id}`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold" data-testid={`project-title-${project.id}`}>
                        {project.title}
                      </h3>
                      <Badge variant="outline" data-testid={`project-type-${project.id}`}>
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-2" data-testid={`project-location-${project.id}`}>
                      📍 {project.location}
                    </p>
                    <p className="text-gray-700 mb-4" data-testid={`project-description-${project.id}`}>
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span data-testid={`project-units-${project.id}`}>
                        {project.units} Units
                      </span>
                      <span className="font-semibold text-primary" data-testid={`project-price-range-${project.id}`}>
                        {project.priceRange}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
