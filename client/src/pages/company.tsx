import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Building2, Target } from "lucide-react";

const stats = [
  { icon: Building2, label: "Projects Completed", value: "150+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: Target, label: "Years Experience", value: "35+" }
];

const team = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "Visionary leader with 20+ years in luxury real estate development."
  },
  {
    name: "Michael Chen",
    position: "Chief Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "Award-winning architect specializing in sustainable luxury design."
  },
  {
    name: "Emily Rodriguez",
    position: "Head of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "Operations expert ensuring seamless project delivery and client satisfaction."
  },
  {
    name: "David Thompson",
    position: "Investment Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "Financial strategist with expertise in real estate investment analysis."
  }
];

export default function Company() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6" data-testid="company-hero-title">
                Our Company
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="company-hero-description">
                Building exceptional properties and lasting relationships since 1985. We are committed to redefining luxury real estate through innovation, craftsmanship, and unparalleled service.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-600 mb-6" data-testid="company-story-title">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6" data-testid="company-story-paragraph-1">
                  Founded in 1985 by visionary entrepreneur Sarah Johnson, Building & Houses began as a small residential construction company with a big dream: to create extraordinary living spaces that inspire and endure.
                </p>
                <p className="text-gray-600 mb-6" data-testid="company-story-paragraph-2">
                  Over the decades, we've grown into one of the most respected names in luxury real estate development, with a portfolio spanning residential estates, commercial complexes, and mixed-use developments across the nation.
                </p>
                <p className="text-gray-600" data-testid="company-story-paragraph-3">
                  Our commitment to architectural excellence, sustainable practices, and client satisfaction has earned us numerous awards and the trust of discerning clients who demand nothing but the best.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Modern architectural building"
                  className="rounded-lg shadow-lg w-full"
                  data-testid="company-story-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-600 mb-4" data-testid="company-stats-title">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600" data-testid="company-stats-description">
                Numbers that reflect our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center" data-testid={`stat-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 flex justify-center">
                      <stat.icon className="h-12 w-12" />
                    </div>
                    <div className="text-3xl font-bold text-slate-600 mb-2" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-600 mb-4" data-testid="mission-title">
                    Our Mission
                  </h3>
                  <p className="text-gray-600" data-testid="mission-description">
                    To create exceptional real estate developments that exceed our clients' expectations while contributing positively to the communities we serve. We are committed to sustainable practices, innovative design, and uncompromising quality in every project we undertake.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-600 mb-4" data-testid="vision-title">
                    Our Vision
                  </h3>
                  <p className="text-gray-600" data-testid="vision-description">
                    To be the leading luxury real estate developer recognized for our architectural innovation, environmental stewardship, and unwavering commitment to creating spaces that inspire and endure for generations to come.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-600 mb-4" data-testid="team-title">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600" data-testid="team-description">
                The passionate professionals behind our success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center" data-testid={`team-member-${index}`}>
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      data-testid={`team-member-image-${index}`}
                    />
                    <h4 className="text-lg font-semibold text-slate-600 mb-1" data-testid={`team-member-name-${index}`}>
                      {member.name}
                    </h4>
                    <p className="text-primary font-medium mb-3" data-testid={`team-member-position-${index}`}>
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm" data-testid={`team-member-description-${index}`}>
                      {member.description}
                    </p>
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
