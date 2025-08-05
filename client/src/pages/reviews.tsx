import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jennifer Walsh",
    location: "Beverly Hills, CA",
    rating: 5,
    date: "March 2024",
    project: "Ocean View Villa",
    review: "Building & Houses exceeded every expectation. From the initial consultation to the final walkthrough, their attention to detail and commitment to quality was evident. Our dream home became a reality thanks to their exceptional team.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 2,
    name: "Robert Martinez",
    location: "Manhattan, NY",
    rating: 5,
    date: "February 2024",
    project: "Metropolitan Tower",
    review: "Outstanding service and professionalism. The commercial space they developed for our business has transformed our operations. The modern design and premium finishes have impressed every client who visits.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    name: "Sarah Chen",
    location: "Greenwich, CT",
    rating: 5,
    date: "January 2024",
    project: "Colonial Manor",
    review: "The renovation of our historic property was handled with incredible care and expertise. They preserved the character of the home while incorporating modern amenities seamlessly. Truly remarkable craftsmanship.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 4,
    name: "Michael Thompson",
    location: "Aspen, CO",
    rating: 5,
    date: "December 2023",
    project: "Mountain Retreat",
    review: "Working with Building & Houses was a pleasure from start to finish. Their team listened to our vision and brought it to life beyond our wildest dreams. The mountain retreat is our perfect sanctuary.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    location: "Austin, TX",
    rating: 5,
    date: "November 2023",
    project: "Green Valley Commons",
    review: "The sustainable approach to development and the community-focused design made this project special. Building & Houses delivered on their promise of creating a space that's both beautiful and environmentally responsible.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 6,
    name: "David Kim",
    location: "San Francisco, CA",
    rating: 5,
    date: "October 2023",
    project: "Tech Hub Campus",
    review: "Exceptional project management and innovative design solutions. The tech campus they're developing for us incorporates cutting-edge technology with functional workspace design. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

const overallStats = {
  averageRating: 5.0,
  totalReviews: 127,
  ratingDistribution: [
    { stars: 5, count: 115, percentage: 91 },
    { stars: 4, count: 12, percentage: 9 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 }
  ]
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6" data-testid="reviews-hero-title">
                Client Reviews
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="reviews-hero-description">
                Discover what our clients say about their experience working with Building & Houses. Your satisfaction is our greatest achievement.
              </p>
            </div>
          </div>
        </section>

        {/* Overall Rating Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="text-6xl font-bold text-primary mb-2" data-testid="overall-rating">
                  {overallStats.averageRating}
                </div>
                <StarRating rating={overallStats.averageRating} />
                <p className="text-gray-600 mt-2" data-testid="total-reviews">
                  Based on {overallStats.totalReviews} reviews
                </p>
              </div>
              <div className="space-y-3">
                {overallStats.ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                        data-testid={`rating-bar-${item.stars}`}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-600 mb-4" data-testid="reviews-section-title">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600" data-testid="reviews-section-description">
                Real experiences from real clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card key={review.id} className="h-full" data-testid={`review-card-${review.id}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                        data-testid={`review-avatar-${review.id}`}
                      />
                      <div>
                        <h4 className="font-semibold text-slate-600" data-testid={`review-name-${review.id}`}>
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-600" data-testid={`review-location-${review.id}`}>
                          {review.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <StarRating rating={review.rating} />
                    </div>
                    
                    <p className="text-gray-700 mb-4 flex-grow" data-testid={`review-text-${review.id}`}>
                      "{review.review}"
                    </p>
                    
                    <div className="mt-auto">
                      <p className="text-sm text-primary font-medium" data-testid={`review-project-${review.id}`}>
                        Project: {review.project}
                      </p>
                      <p className="text-sm text-gray-500" data-testid={`review-date-${review.id}`}>
                        {review.date}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Quote */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8" data-testid="featured-testimonial">
              "Building & Houses doesn't just build properties; they create dreams. Their commitment to excellence and attention to detail is unmatched in the industry."
            </blockquote>
            <cite className="text-lg text-blue-100" data-testid="featured-testimonial-author">
              — Victoria Sterling, Real Estate Weekly
            </cite>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
